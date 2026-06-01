"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Scissors, Gift, Plus, LogOut, Check, Crown, Star } from "lucide-react"
import { authClient } from "@/lib/auth-client"
import { addStamp, setLoyaltyPlan } from "@/app/actions/loyalty"

const TOTAL_SLOTS = 10

type Account = {
  stamps: number
  totalCuts: number
  freeCutsEarned: number
  plan: string
  planStatus: string
}

type Visit = { id: number; label: string; createdAt: string | Date }

const plans = [
  {
    id: "fresh" as const,
    name: "Fresh Mensuel",
    price: "60$",
    period: "/ mois",
    Icon: Star,
    perks: ["2 coupes par mois", "Carte de fidélité incluse", "Réservation prioritaire"],
  },
  {
    id: "vip" as const,
    name: "VIP Illimité",
    price: "120$",
    period: "/ mois",
    Icon: Crown,
    perks: ["Coupes illimitées", "Barbe + soin inclus", "Créneaux VIP exclusifs", "10% sur les produits"],
  },
]

export function LoyaltyDashboard({
  name,
  account,
  visits,
}: {
  name: string
  account: Account
  visits: Visit[]
}) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [optimisticStamps, setOptimisticStamps] = useState(account.stamps)
  const [justEarned, setJustEarned] = useState(false)

  const handleAddStamp = () => {
    setJustEarned(false)
    startTransition(async () => {
      const updated = await addStamp()
      setOptimisticStamps(updated.stamps)
      if (updated.stamps === 0 && updated.totalCuts > account.totalCuts) {
        setJustEarned(true)
      }
      router.refresh()
    })
  }

  const handleChoosePlan = (plan: "fresh" | "vip") => {
    startTransition(async () => {
      await setLoyaltyPlan(plan)
      router.refresh()
    })
  }

  const handleSignOut = async () => {
    await authClient.signOut()
    router.push("/josue-kuta-barber")
    router.refresh()
  }

  const stamps = optimisticStamps

  return (
    <main className="min-h-svh bg-[#0A0A0A] font-[family-name:var(--font-montserrat)] text-[#F5F5F5]">
      {/* Top bar */}
      <header className="flex items-center justify-between border-b border-[#C4A050]/10 px-5 py-5 sm:px-8">
        <Link href="/josue-kuta-barber" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center border border-[#C4A050]/40 text-[#C4A050]">
            <Scissors className="h-4 w-4" />
          </span>
          <span className="font-[family-name:var(--font-bebas)] text-xl leading-none tracking-wide">
            JOSUÉ <span className="text-[#C4A050]">KUTA</span>
          </span>
        </Link>
        <button
          onClick={handleSignOut}
          className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F5F5F5]/50 transition-colors hover:text-[#C4A050]"
        >
          <LogOut className="h-4 w-4" />
          <span className="hidden sm:inline">Déconnexion</span>
        </button>
      </header>

      <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
        {/* Greeting */}
        <div className="mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C4A050]">Mon compte fidélité</p>
          <h1 className="mt-2 font-[family-name:var(--font-playfair)] text-[clamp(28px,5vw,44px)] font-bold leading-tight">
            Salut {name.split(" ")[0]}, content de te revoir.
          </h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Stamp card */}
          <div className="relative overflow-hidden rounded-2xl border border-[#C4A050]/30 bg-gradient-to-br from-[#161310] to-[#0A0A0A] p-7 sm:p-9">
            <div className="mb-7 flex items-start justify-between">
              <div>
                <h2 className="font-[family-name:var(--font-bebas)] text-3xl leading-none tracking-wide text-[#C4A050]">
                  Carte de fidélité
                </h2>
                <p className="mt-2 max-w-xs text-[12px] font-light leading-relaxed text-[#F5F5F5]/45">
                  À chaque coupe, tu te rapproches de la prochaine offerte. 10 coupes = 1 coupe offerte.
                </p>
              </div>
              <Crown className="h-7 w-7 shrink-0 text-[#C4A050]" />
            </div>

            {/* Slots */}
            <div className="grid grid-cols-5 gap-3 sm:gap-4">
              {Array.from({ length: TOTAL_SLOTS }).map((_, i) => {
                const filled = i < stamps
                const isReward = i === TOTAL_SLOTS - 1
                return (
                  <div
                    key={i}
                    className={`flex aspect-square items-center justify-center rounded-full border text-lg font-[family-name:var(--font-bebas)] transition-colors ${
                      filled
                        ? "border-[#C4A050] bg-[#C4A050] text-[#0A0A0A]"
                        : "border-[#C4A050]/30 bg-[#0A0A0A] text-[#C4A050]/60"
                    }`}
                  >
                    {filled ? (
                      <Check className="h-4 w-4" />
                    ) : isReward ? (
                      <Scissors className="h-4 w-4" />
                    ) : (
                      i + 1
                    )}
                  </div>
                )
              })}
            </div>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[13px] font-light text-[#F5F5F5]/50">
                <span className="font-[family-name:var(--font-bebas)] text-2xl text-[#C4A050]">{stamps}</span>
                <span className="mx-1">/ {TOTAL_SLOTS}</span>
                tampons — plus que{" "}
                <span className="text-[#C4A050]">{TOTAL_SLOTS - stamps}</span> avant ta coupe offerte.
              </p>
              <button
                onClick={handleAddStamp}
                disabled={isPending}
                className="inline-flex items-center justify-center gap-2 bg-[#C4A050] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0A0A0A] transition-colors hover:bg-[#D4B468] disabled:opacity-60"
              >
                <Plus className="h-4 w-4" />
                {isPending ? "..." : "Ajouter un tampon"}
              </button>
            </div>

            {justEarned && (
              <div className="mt-5 flex items-center gap-3 rounded-lg border border-[#C4A050]/40 bg-[#C4A050]/10 px-4 py-3">
                <Gift className="h-5 w-5 text-[#C4A050]" />
                <p className="text-[13px] font-medium text-[#C4A050]">
                  Bravo frérot ! Ta carte est complète — ta prochaine coupe est offerte.
                </p>
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[#C4A050]/15 bg-[#111] p-5">
                <p className="font-[family-name:var(--font-bebas)] text-4xl text-[#C4A050]">{account.totalCuts}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-[#F5F5F5]/40">Coupes au total</p>
              </div>
              <div className="rounded-2xl border border-[#C4A050]/15 bg-[#111] p-5">
                <p className="font-[family-name:var(--font-bebas)] text-4xl text-[#C4A050]">{account.freeCutsEarned}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-[#F5F5F5]/40">Coupes offertes</p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#C4A050]/15 bg-[#111] p-5">
              <p className="text-[11px] uppercase tracking-[0.15em] text-[#F5F5F5]/40">Abonnement actuel</p>
              <p className="mt-1 font-[family-name:var(--font-playfair)] text-xl font-bold">
                {account.plan === "vip"
                  ? "VIP Illimité"
                  : account.plan === "fresh"
                    ? "Fresh Mensuel"
                    : "Aucun abonnement"}
                {account.planStatus === "active" && (
                  <span className="ml-2 align-middle text-[10px] font-semibold uppercase tracking-[0.15em] text-[#C4A050]">
                    Actif
                  </span>
                )}
              </p>
            </div>

            {/* Recent visits */}
            <div className="rounded-2xl border border-[#C4A050]/15 bg-[#111] p-5">
              <p className="mb-3 text-[11px] uppercase tracking-[0.15em] text-[#F5F5F5]/40">Dernières visites</p>
              {visits.length === 0 ? (
                <p className="text-[13px] font-light text-[#F5F5F5]/35">
                  Aucune visite pour le moment. Ajoute ton premier tampon !
                </p>
              ) : (
                <ul className="flex flex-col gap-2.5">
                  {visits.slice(0, 5).map((v) => (
                    <li key={v.id} className="flex items-center justify-between text-[13px]">
                      <span className="flex items-center gap-2 text-[#F5F5F5]/70">
                        <Scissors className="h-3.5 w-3.5 text-[#C4A050]" />
                        {v.label}
                      </span>
                      <span className="text-[#F5F5F5]/35">
                        {new Date(v.createdAt).toLocaleDateString("fr-CA", {
                          day: "2-digit",
                          month: "short",
                        })}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Subscription plans */}
        <div className="mt-14">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold">
            Passe à l&apos;<em className="not-italic text-[#C4A050]">abonnement</em>
          </h2>
          <p className="mt-2 text-[13px] font-light text-[#F5F5F5]/45">
            Reste frais toute l&apos;année et économise sur tes coupes.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {plans.map(({ id, name: planName, price, period, Icon, perks }) => {
              const active = account.plan === id && account.planStatus === "active"
              return (
                <div
                  key={id}
                  className={`rounded-2xl border p-7 transition-colors ${
                    active ? "border-[#C4A050] bg-[#C4A050]/5" : "border-[#C4A050]/20 bg-[#111]"
                  }`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center border border-[#C4A050]/40 text-[#C4A050]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold">{planName}</h3>
                    </div>
                    <div className="text-right">
                      <span className="font-[family-name:var(--font-bebas)] text-3xl text-[#C4A050]">{price}</span>
                      <span className="text-[11px] text-[#F5F5F5]/35">{period}</span>
                    </div>
                  </div>
                  <ul className="mb-6 flex flex-col gap-2">
                    {perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-2 text-[13px] font-light text-[#F5F5F5]/55">
                        <Check className="h-4 w-4 shrink-0 text-[#C4A050]" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleChoosePlan(id)}
                    disabled={isPending || active}
                    className={`w-full px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors disabled:opacity-60 ${
                      active
                        ? "border border-[#C4A050]/40 text-[#C4A050]"
                        : "bg-[#C4A050] text-[#0A0A0A] hover:bg-[#D4B468]"
                    }`}
                  >
                    {active ? "Abonnement actif" : "Choisir cette formule"}
                  </button>
                </div>
              )
            })}
          </div>
          <p className="mt-4 text-[11px] font-light leading-relaxed text-[#F5F5F5]/30">
            Démo : les abonnements et tampons sont gérés dans ton compte. Le paiement réel peut être branché plus tard
            (Stripe).
          </p>
        </div>
      </div>
    </main>
  )
}
