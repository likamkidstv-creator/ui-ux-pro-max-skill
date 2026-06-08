"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "./language-provider"
import { t, type Language } from "@/lib/translations"

const navItems = [
  { key: "nav.league", href: "#standings" },
  { key: "nav.clubs", href: "#clubs" },
  { key: "nav.players", href: "#leaders" },
  { key: "nav.matches", href: "#schedule" },
  { key: "nav.scoring", href: "#leaders" },
  { key: "nav.media", href: "#about" },
  { key: "nav.about", href: "#about" },
]

const languageOptions: { code: Language; label: string; flag: string }[] = [
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "en", label: "EN", flag: "🇨🇦" },
  { code: "ht", label: "Kreyòl", flag: "🇭🇹" },
]

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang } = useLanguage()

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  return (
    <header id="hero" className="relative min-h-screen flex flex-col overflow-hidden bg-[hsl(220_33%_6%)]">
      {/* Stadium background - new reference image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%201%20juin%202026%2C%2019_02_22-NjJAGMBHuKL61UgGDoHvbiQNPsjL7d.png')`,
          backgroundPosition: "center 30%",
        }}
        aria-hidden="true"
      />

      {/* Darken overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, hsl(220 33% 6% / 0.5) 0%, hsl(220 33% 6% / 0.3) 40%, hsl(220 33% 6% / 0.7) 80%, hsl(220 33% 8%) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Radial glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 60%, hsl(43 76% 47% / 0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Pitch lines overlay */}
      <div className="absolute inset-0 bg-pitch-lines pointer-events-none opacity-30" aria-hidden="true" />

      {/* ── Navbar ── */}
      <nav className="relative z-30 flex items-center justify-between px-6 md:px-10 py-5">
        {/* Logo + wordmark */}
        <button
          onClick={() => scrollTo("#hero")}
          className="flex items-center gap-3 focus:outline-none"
          aria-label="Ottawa Bolides Soccer League – go to top"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%201%20juin%202026%2C%2018_46_33-xAJgNKGKEExB05DEpLTW4KVBF9A8G1.png"
            alt="Ottawa Bolides Soccer League crest"
            width={48}
            height={48}
            className="h-12 w-auto object-contain drop-shadow-lg"
          />
          <span className="hidden sm:block leading-none">
            <span className="block text-[10px] tracking-[0.2em] text-[hsl(43_76%_47%)] font-semibold uppercase">
              Ottawa
            </span>
            <span className="block text-lg font-bold tracking-widest text-white uppercase">Bolides</span>
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.key}>
              <button
                onClick={() => scrollTo(item.href)}
                className="text-[13px] font-semibold tracking-widest text-white/70 uppercase hover:text-[hsl(43_76%_47%)] transition-colors duration-200"
              >
                {t(item.key, lang)}
              </button>
            </li>
          ))}
        </ul>

        {/* Language switcher + CTA + hamburger */}
        <div className="flex items-center gap-4">
          {/* Language switcher */}
          <div className="hidden sm:flex items-center gap-1 bg-white/5 rounded px-1 py-1">
            {languageOptions.map((option) => (
              <button
                key={option.code}
                onClick={() => setLang(option.code)}
                className={`px-2 py-1 text-[11px] font-bold tracking-wide rounded transition-colors duration-200 ${
                  lang === option.code
                    ? "bg-[hsl(43_76%_47%)] text-[hsl(220_33%_8%)]"
                    : "text-white/60 hover:text-white"
                }`}
                aria-label={`Switch to ${option.label}`}
              >
                <span className="mr-1">{option.flag}</span>
                {option.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("#register")}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[hsl(43_76%_47%)] hover:bg-[hsl(43_76%_54%)] text-[hsl(220_33%_8%)] text-[13px] font-bold tracking-widest uppercase rounded transition-colors duration-200"
          >
            {t("nav.joinLeague", lang)}
          </button>
          <button
            className="lg:hidden text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="relative z-20 lg:hidden bg-[hsl(220_30%_9%)] border-b border-white/10 px-6 py-6 flex flex-col gap-5">
          {/* Mobile language switcher */}
          <div className="flex items-center gap-2 mb-2">
            {languageOptions.map((option) => (
              <button
                key={option.code}
                onClick={() => setLang(option.code)}
                className={`px-3 py-2 text-sm font-bold tracking-wide rounded transition-colors duration-200 ${
                  lang === option.code
                    ? "bg-[hsl(43_76%_47%)] text-[hsl(220_33%_8%)]"
                    : "bg-white/10 text-white/60 hover:text-white"
                }`}
              >
                <span className="mr-1">{option.flag}</span>
                {option.label}
              </button>
            ))}
          </div>
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => scrollTo(item.href)}
              className="text-left text-base font-bold tracking-widest text-white/80 uppercase hover:text-[hsl(43_76%_47%)] transition-colors"
            >
              {t(item.key, lang)}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#register")}
            className="mt-2 px-5 py-3 bg-[hsl(43_76%_47%)] text-[hsl(220_33%_8%)] text-sm font-bold tracking-widest uppercase rounded"
          >
            {t("nav.joinLeague", lang)}
          </button>
        </div>
      )}

      {/* ── Hero Content ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center pb-16 pt-8">
        {/* Crest */}
        <div className="mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%201%20juin%202026%2C%2018_46_33-xAJgNKGKEExB05DEpLTW4KVBF9A8G1.png"
            alt="Ottawa Bolides Soccer League crest"
            width={160}
            height={160}
            className="h-36 md:h-44 w-auto object-contain mx-auto drop-shadow-2xl"
            priority
          />
        </div>

        {/* League name */}
        <div className="mb-4">
          <p className="text-[hsl(43_76%_47%)] text-xs md:text-sm font-bold tracking-[0.35em] uppercase mb-3">
            {t("hero.since", lang)}
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none text-white uppercase">
            BOLIDES
          </h1>
          <p className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-[0.15em] text-white/60 uppercase">
            {t("hero.soccerLeague", lang)}
          </p>
        </div>

        {/* Tagline */}
        <p className="max-w-xl text-base md:text-lg text-white/50 leading-relaxed mt-4 mb-10 font-[var(--font-body)]">
          {t("hero.tagline", lang)}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollTo("#register")}
            className="px-7 py-3.5 bg-[hsl(43_76%_47%)] hover:bg-[hsl(43_76%_54%)] text-[hsl(220_33%_8%)] text-sm font-bold tracking-widest uppercase rounded transition-colors duration-200 shadow-lg"
          >
            {t("hero.registerTeam", lang)}
          </button>
          <button
            onClick={() => scrollTo("#schedule")}
            className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white text-sm font-bold tracking-widest uppercase rounded transition-colors duration-200 border border-white/20"
          >
            {t("hero.viewSchedule", lang)}
          </button>
          <button
            onClick={() => scrollTo("#standings")}
            className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white text-sm font-bold tracking-widest uppercase rounded transition-colors duration-200 border border-white/20"
          >
            {t("hero.standings", lang)}
          </button>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="relative z-10 flex justify-center pb-8">
        <button
          onClick={() => scrollTo("#about")}
          className="text-white/30 hover:text-[hsl(43_76%_47%)] transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={28} />
        </button>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, hsl(220 33% 8%))",
        }}
        aria-hidden="true"
      />
    </header>
  )
}
