import { Check, Scissors, Crown, Star, Gift } from "lucide-react"
import Link from "next/link"

const membershipPlans = [
  {
    name: "Fresh Mensuel",
    price: "60$",
    period: "/ mois",
    Icon: Star,
    perks: ["2 coupes par mois", "Carte de fidélité incluse", "Réservation prioritaire"],
    featured: false,
  },
  {
    name: "VIP Illimité",
    price: "120$",
    period: "/ mois",
    Icon: Crown,
    perks: ["Coupes illimitées", "Barbe + soin inclus", "Créneaux VIP exclusifs", "10% sur les produits"],
    featured: true,
  },
]

const priceList = [
  { name: "Coupe Homme", price: "35$" },
  { name: "Barbe", price: "25$" },
  { name: "Razor Fade", price: "45$" },
  { name: "Soin Capillaire", price: "50$" },
  { name: "Coloration", price: "60$" },
  { name: "Full Package (Coupe + Barbe + Soin)", price: "90$", featured: true },
]

export function PricingSection() {
  return (
    <section id="pricing" className="bg-[#1A1A1A] px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#C4A050]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C4A050]">Tarifs</span>
            <span className="h-px w-10 bg-[#C4A050]" />
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(32px,4.5vw,56px)] font-bold leading-tight text-balance">
            Des prix <em className="not-italic text-[#C4A050]">clairs & honnêtes</em>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[14px] font-light leading-relaxed text-[#F5F5F5]/40">
            Pas de surprise, pas de frais cachés. Que des bons prix pour rester frais sans casser ta tirelire.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          {/* Price list */}
          <div className="border border-[#C4A050]/15 bg-[#0A0A0A]">
            <div className="border-b border-[#C4A050]/10 p-7">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold">Les services à l&apos;unité</h3>
              <p className="mt-1 text-[13px] font-light text-[#F5F5F5]/40">Passe quand tu veux ou réserve à l&apos;avance.</p>
            </div>
            <ul>
              {priceList.map((item) => (
                <li
                  key={item.name}
                  className={`flex items-center justify-between border-b border-[#C4A050]/10 px-7 py-5 last:border-0 ${
                    item.featured ? "bg-[#C4A050]/[0.06]" : ""
                  }`}
                >
                  <span className={`text-[14px] ${item.featured ? "font-medium text-[#F5F5F5]" : "font-light text-[#F5F5F5]/70"}`}>
                    {item.name}
                    {item.featured && (
                      <span className="ml-2 align-middle text-[9px] uppercase tracking-[0.2em] text-[#C4A050]">
                        Best-seller
                      </span>
                    )}
                  </span>
                  <span className="font-[family-name:var(--font-bebas)] text-2xl text-[#C4A050]">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Loyalty + membership */}
        <div className="mt-20">
          <div className="mb-12 text-center">
            <div className="mb-5 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#C4A050]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C4A050]">
                Fidélité & Abonnement
              </span>
              <span className="h-px w-10 bg-[#C4A050]" />
            </div>
            <h3 className="font-[family-name:var(--font-playfair)] text-[clamp(26px,3.5vw,42px)] font-bold leading-tight text-balance">
              Crée ton <em className="not-italic text-[#C4A050]">compte fidélité</em>
            </h3>
            <p className="mx-auto mt-4 max-w-lg text-[14px] font-light leading-relaxed text-[#F5F5F5]/40">
              À chaque coupe, tu te rapproches de la prochaine offerte. Suis tes tampons en ligne, débloque tes coupes
              gratuites et passe à l&apos;abonnement pour rester frais toute l&apos;année.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1fr]">
            {/* Loyalty card preview */}
            <div className="relative overflow-hidden rounded-2xl border border-[#C4A050]/30 bg-gradient-to-br from-[#161310] to-[#0A0A0A] p-8">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h4 className="font-[family-name:var(--font-bebas)] text-3xl leading-none tracking-wide text-[#C4A050]">
                    Carte de fidélité
                  </h4>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[#F5F5F5]/35">
                    10 coupes = 1 coupe offerte
                  </p>
                </div>
                <Crown className="h-7 w-7 text-[#C4A050]" />
              </div>

              <div className="grid grid-cols-5 gap-3 sm:gap-4">
                {Array.from({ length: 10 }).map((_, i) => {
                  const isReward = i === 9
                  return (
                    <div
                      key={i}
                      className="flex aspect-square items-center justify-center rounded-full border border-[#C4A050]/30 bg-[#0A0A0A] font-[family-name:var(--font-bebas)] text-lg text-[#C4A050]/60"
                    >
                      {isReward ? <Scissors className="h-4 w-4 text-[#C4A050]" /> : i + 1}
                    </div>
                  )
                })}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/josue-kuta-barber/sign-up"
                  className="inline-flex items-center justify-center gap-2 bg-[#C4A050] px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0A0A0A] transition-colors hover:bg-[#D4B468]"
                >
                  <Gift className="h-4 w-4" />
                  Créer mon compte
                </Link>
                <Link
                  href="/josue-kuta-barber/sign-in"
                  className="inline-flex items-center justify-center border border-[#C4A050]/40 px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C4A050] transition-colors hover:bg-[#C4A050]/10"
                >
                  J&apos;ai déjà un compte
                </Link>
              </div>
            </div>

            {/* Membership plans */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {membershipPlans.map(({ name, price, period, Icon, perks, featured }) => (
                <div
                  key={name}
                  className={`flex flex-col rounded-2xl border p-6 ${
                    featured ? "border-[#C4A050] bg-[#C4A050]/[0.06]" : "border-[#C4A050]/20 bg-[#0A0A0A]"
                  }`}
                >
                  <span className="mb-4 flex h-10 w-10 items-center justify-center border border-[#C4A050]/40 text-[#C4A050]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h4 className="font-[family-name:var(--font-playfair)] text-lg font-bold">{name}</h4>
                  <div className="mt-1 mb-4">
                    <span className="font-[family-name:var(--font-bebas)] text-3xl text-[#C4A050]">{price}</span>
                    <span className="ml-1 text-[11px] text-[#F5F5F5]/35">{period}</span>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2 text-[12px] font-light text-[#F5F5F5]/55">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C4A050]" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/josue-kuta-barber/sign-up"
                    className={`mt-6 w-full px-5 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors ${
                      featured
                        ? "bg-[#C4A050] text-[#0A0A0A] hover:bg-[#D4B468]"
                        : "border border-[#C4A050]/40 text-[#C4A050] hover:bg-[#C4A050]/10"
                    }`}
                  >
                    S&apos;abonner
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
