"use client"

import { useEffect, useRef, useState } from "react"
import { Users, Trophy, CalendarDays, Globe } from "lucide-react"
import { useLanguage } from "./language-provider"
import { t } from "@/lib/translations"

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1600
          const steps = 50
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function AboutSection() {
  const { lang } = useLanguage()

  const stats = [
    { icon: Users, value: 300, suffix: "+", labelKey: "stats.playersRegistered" },
    { icon: Trophy, value: 14, suffix: "", labelKey: "stats.clubsCompeting" },
    { icon: CalendarDays, value: 19, suffix: "", labelKey: "stats.seasonsPlayed" },
    { icon: Globe, value: 1, suffix: t("stats.region", lang), labelKey: "stats.strongCommunity" },
  ]

  const pillars = [
    "about.youthDevelopment",
    "about.communityImpact",
    "about.eliteCompetition",
    "about.culturalUnity",
  ]

  return (
    <section id="about" className="relative bg-[hsl(220_33%_8%)] py-20 md:py-28 overflow-hidden">
      {/* Subtle pitch lines */}
      <div className="absolute inset-0 bg-pitch-lines opacity-60 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 container mx-auto px-6 md:px-10 max-w-6xl">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-[hsl(43_76%_47%)] text-xs font-bold tracking-[0.3em] uppercase">
            {t("about.sectionTitle", lang)}
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white uppercase leading-tight mb-6">
              {t("about.title", lang)}
              <br />
              <span className="text-[hsl(43_76%_47%)]">{t("about.ottawaBolides", lang)}</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-4 font-[var(--font-body)]">
              {t("about.description1", lang)}
            </p>
            <p className="text-white/60 leading-relaxed mb-8 font-[var(--font-body)]">
              {t("about.description2", lang).replace(
                "Coupe Ottawa Bolides",
                ""
              )}
              <span className="text-white font-semibold">{t("about.coupeOttawaBolides", lang)}</span>
              {lang === "fr"
                ? " — célébrant la passion et la diversité de notre communauté à travers le beau jeu."
                : lang === "ht"
                  ? " — selebre pasyon ak divèsite kominote nou atravè bèl jwèt la."
                  : " — celebrating the passion and diversity of our community through the beautiful game."}
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-1.5 text-[11px] font-bold tracking-widest uppercase bg-[hsl(43_76%_47%)/0.12] text-[hsl(43_76%_47%)] border border-[hsl(43_76%_47%)/0.3] rounded">
                {t("about.ocslMember", lang)}
              </span>
              <span className="px-4 py-1.5 text-[11px] font-bold tracking-widest uppercase bg-white/5 text-white/60 border border-white/10 rounded">
                {t("about.eodsaAffiliated", lang)}
              </span>
              <span className="px-4 py-1.5 text-[11px] font-bold tracking-widest uppercase bg-white/5 text-white/60 border border-white/10 rounded">
                {t("about.since2007", lang)}
              </span>
            </div>
          </div>

          {/* Mission card */}
          <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[hsl(220_30%_11%)] p-8">
            <div
              className="absolute top-0 left-0 right-0 h-1 bg-[hsl(43_76%_47%)]"
              aria-hidden="true"
            />
            <h3 className="text-white font-bold text-xl tracking-wide uppercase mb-4">
              {t("about.ourMission", lang)}
            </h3>
            <p className="text-white/60 leading-relaxed font-[var(--font-body)] mb-6">
              {t("about.missionText", lang)}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {pillars.map((pillarKey) => (
                <div key={pillarKey} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(43_76%_47%)]" aria-hidden="true" />
                  <span className="text-white/70 text-sm font-[var(--font-body)]">{t(pillarKey, lang)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ icon: Icon, value, suffix, labelKey }) => (
            <div
              key={labelKey}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-[hsl(220_30%_11%)] border border-white/10 hover:border-[hsl(43_76%_47%)/0.4] transition-colors duration-300"
            >
              <Icon className="text-[hsl(43_76%_47%)] mb-3" size={28} aria-hidden="true" />
              <span className="text-4xl md:text-5xl font-bold text-white leading-none mb-2">
                <AnimatedCounter target={value} suffix={suffix} />
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase text-white/40">
                {t(labelKey, lang)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
