"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { authClient } from "@/lib/auth-client"
import { Scissors } from "lucide-react"

export function LoyaltyAuthForm({ mode }: { mode: "sign-in" | "sign-up" }) {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const isSignUp = mode === "sign-up"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const { error } = isSignUp
      ? await authClient.signUp.email({ email, password, name })
      : await authClient.signIn.email({ email, password })

    setLoading(false)

    if (error) {
      setError(error.message ?? "Une erreur est survenue. Réessaie, frérot.")
      return
    }

    router.push("/josue-kuta-barber/compte")
    router.refresh()
  }

  const inputCls =
    "w-full border-b border-[#C4A050]/25 bg-transparent py-3 text-[15px] text-[#F5F5F5] outline-none transition-colors placeholder:text-[#F5F5F5]/25 focus:border-[#C4A050]"
  const labelCls = "mb-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C4A050]"

  return (
    <main className="flex min-h-svh items-center justify-center bg-[#0A0A0A] px-4 py-16 font-[family-name:var(--font-montserrat)] text-[#F5F5F5]">
      <div className="w-full max-w-sm">
        <Link
          href="/josue-kuta-barber"
          className="mb-10 flex flex-col items-center text-center"
        >
          <span className="flex h-12 w-12 items-center justify-center border border-[#C4A050]/40 text-[#C4A050]">
            <Scissors className="h-5 w-5" />
          </span>
          <span className="mt-4 font-[family-name:var(--font-bebas)] text-3xl leading-none tracking-wide">
            JOSUÉ <span className="text-[#C4A050]">KUTA</span>
          </span>
          <span className="mt-1 text-[9px] uppercase tracking-[0.35em] text-[#F5F5F5]/40">
            Carte de fidélité
          </span>
        </Link>

        <div className="mb-8 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold">
            {isSignUp ? "Crée ton compte" : "Re-bonjour"}
          </h1>
          <p className="mt-2 text-[13px] font-light leading-relaxed text-[#F5F5F5]/45">
            {isSignUp
              ? "Rejoins le programme fidélité et gagne ta prochaine coupe offerte."
              : "Connecte-toi pour suivre tes tampons et tes récompenses."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {isSignUp && (
            <div>
              <label className={labelCls} htmlFor="name">
                Nom complet
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
                placeholder="Junior Kuta"
                className={inputCls}
              />
            </div>
          )}
          <div>
            <label className={labelCls} htmlFor="email">
              Courriel
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              placeholder="junior@email.com"
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls} htmlFor="password">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              autoComplete={isSignUp ? "new-password" : "current-password"}
              placeholder="••••••••"
              className={inputCls}
            />
          </div>

          {error && (
            <p className="text-[13px] text-red-400" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full bg-[#C4A050] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0A0A0A] transition-colors hover:bg-[#D4B468] disabled:opacity-60"
          >
            {loading ? "Un instant..." : isSignUp ? "Créer mon compte" : "Se connecter"}
          </button>
        </form>

        <p className="mt-8 text-center text-[13px] font-light text-[#F5F5F5]/45">
          {isSignUp ? "Tu as déjà un compte ? " : "Pas encore membre ? "}
          <Link
            href={isSignUp ? "/josue-kuta-barber/sign-in" : "/josue-kuta-barber/sign-up"}
            className="font-medium text-[#C4A050] underline-offset-4 hover:underline"
          >
            {isSignUp ? "Se connecter" : "Crée ton compte"}
          </Link>
        </p>
      </div>
    </main>
  )
}
