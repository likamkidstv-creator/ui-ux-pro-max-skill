"use client"

import { useLanguage } from "./language-provider"
import { t } from "@/lib/translations"

const clubs = [
  { name: "Galactic 243", div: "COB26", color: "#7C3AED" },
  { name: "Tsunami FC", div: "COB26", color: "#0EA5E9" },
  { name: "Okapi SC Cornwall", div: "COB26 / MOT1", color: "#F59E0B" },
  { name: "FC Cosmos", div: "COB26", color: "#10B981" },
  { name: "Ottawa Cranes FC", div: "COB26", color: "#EF4444" },
  { name: "FC Vita", div: "COB26", color: "#06B6D4" },
  { name: "X-UVIA", div: "COB26", color: "#8B5CF6" },
  { name: "11 Pros FC", div: "COB26", color: "#F97316" },
  { name: "CJCCCB", div: "COB26", color: "#22C55E" },
  { name: "Uganda Cranes Ottawa", div: "COB26", color: "#FFB300" },
  { name: "Centre Afrique", div: "COB26", color: "#3B82F6" },
  { name: "UJC-OG FC", div: "COB26", color: "#EC4899" },
  { name: "Bababow FC", div: "COB26 / OT4", color: "#14B8A6" },
  { name: "Bamenda Boys", div: "COB26", color: "#F43F5E" },
]

function ClubInitials({ name, color }: { name: string; color: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
  return (
    <div
      className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0 mb-3"
      style={{ backgroundColor: color + "28", border: `2px solid ${color}55` }}
      aria-hidden="true"
    >
      <span style={{ color }}>{initials}</span>
    </div>
  )
}

export default function ClubsSection() {
  const { lang } = useLanguage()

  return (
    <section id="clubs" className="relative bg-[hsl(220_33%_7%)] py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-pitch-lines opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 container mx-auto px-6 md:px-10 max-w-6xl">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-[hsl(43_76%_47%)] text-xs font-bold tracking-[0.3em] uppercase">
            {t("clubs.sectionTitle", lang)}
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
            {t("clubs.meetTheTeams", lang)} <span className="text-[hsl(43_76%_47%)]">{t("clubs.teams", lang)}</span>
          </h2>
          <p className="text-white/40 text-sm font-[var(--font-body)]">
            {clubs.length} {t("clubs.clubsCompeting", lang)}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3">
          {clubs.map((club) => (
            <div
              key={club.name}
              className="flex flex-col items-center text-center p-4 rounded-lg bg-[hsl(220_30%_11%)] border border-white/10 hover:border-[hsl(43_76%_47%)/0.4] hover:bg-[hsl(220_30%_13%)] transition-all duration-200 cursor-pointer group"
            >
              <ClubInitials name={club.name} color={club.color} />
              <p className="text-[12px] font-semibold text-white leading-tight mb-1 group-hover:text-[hsl(43_76%_47%)] transition-colors">
                {club.name}
              </p>
              <span className="text-[10px] text-white/30 font-[var(--font-body)]">{club.div}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
