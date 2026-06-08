"use client"

import { CalendarDays, MapPin, Clock } from "lucide-react"
import { useLanguage } from "./language-provider"
import { t } from "@/lib/translations"

type Match = {
  id: number
  date: string
  time: string
  venue: string
  homeTeam: string
  awayTeam: string
  homeScore?: number
  awayScore?: number
  status: "live" | "upcoming" | "final"
}

const matches: Match[] = [
  // Upcoming - Match 15-20 from the schedule
  {
    id: 15,
    date: "7 juin 2026",
    time: "14:00",
    venue: "City Park: 1800 City Park Drive",
    homeTeam: "Bamenda Boys",
    awayTeam: "Centre Afrique",
    status: "upcoming",
  },
  {
    id: 16,
    date: "7 juin 2026",
    time: "16:00",
    venue: "City Park: 1800 City Park Drive",
    homeTeam: "Galactic 243",
    awayTeam: "CJCCCB",
    status: "upcoming",
  },
  {
    id: 17,
    date: "7 juin 2026",
    time: "18:00",
    venue: "City Park: 1800 City Park Drive",
    homeTeam: "Ottawa Cranes FC",
    awayTeam: "X-UVIA",
    status: "upcoming",
  },
  // Results - Match 1-6 from the schedule
  {
    id: 1,
    date: "1er juin 2026",
    time: "16:00",
    venue: "City Park: 1800 City Park Drive",
    homeTeam: "Ottawa Cranes FC",
    awayTeam: "UJC-OG FC",
    homeScore: 1,
    awayScore: 0,
    status: "final",
  },
  {
    id: 2,
    date: "1er juin 2026",
    time: "18:00",
    venue: "City Park: 1800 City Park Drive",
    homeTeam: "Galactic 243",
    awayTeam: "Bamenda Boys",
    homeScore: 5,
    awayScore: 0,
    status: "final",
  },
  {
    id: 3,
    date: "1er juin 2026",
    time: "14:00",
    venue: "City Park: 1800 City Park Drive",
    homeTeam: "FC Cosmos",
    awayTeam: "CJCCCB",
    homeScore: 5,
    awayScore: 2,
    status: "final",
  },
]

export default function ScheduleSection() {
  const { lang } = useLanguage()

  const statusColors = {
    live: "bg-red-600 text-white animate-pulse",
    upcoming: "bg-[hsl(43_76%_47%)/0.15] text-[hsl(43_76%_47%)]",
    final: "bg-white/5 text-white/40",
  }

  const statusLabels = {
    live: t("schedule.live", lang),
    upcoming: t("schedule.upcoming", lang),
    final: t("schedule.final", lang),
  }

  const upcoming = matches.filter((m) => m.status === "upcoming" || m.status === "live")
  const results = matches.filter((m) => m.status === "final")

  return (
    <section id="schedule" className="relative bg-[hsl(220_33%_8%)] py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-pitch-lines opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 container mx-auto px-6 md:px-10 max-w-6xl">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-[hsl(43_76%_47%)] text-xs font-bold tracking-[0.3em] uppercase">
            {t("schedule.sectionTitle", lang)}
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <CalendarDays size={16} className="text-[hsl(43_76%_47%)]" aria-hidden="true" />
              <h2 className="text-white font-bold text-lg tracking-wide uppercase">
                {t("schedule.upcomingMatches", lang)}
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {upcoming.map((m) => (
                <div
                  key={m.id}
                  className="rounded-lg bg-[hsl(220_30%_11%)] border border-white/10 p-4 hover:border-[hsl(43_76%_47%)/0.3] transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] text-white/40 font-[var(--font-body)]">{m.date}</span>
                    <span className={`text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded ${statusColors[m.status]}`}>
                      {statusLabels[m.status]}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-white flex-1 text-right leading-tight">{m.homeTeam}</span>
                    <span className="text-xs font-bold text-white/40 px-3 tracking-widest shrink-0">VS</span>
                    <span className="text-sm font-semibold text-white flex-1 leading-tight">{m.awayTeam}</span>
                  </div>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="flex items-center gap-1 text-[11px] text-white/30">
                      <Clock size={11} aria-hidden="true" />
                      {m.time}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-white/30">
                      <MapPin size={11} aria-hidden="true" />
                      {m.venue}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center" aria-hidden="true">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              </span>
              <h2 className="text-white font-bold text-lg tracking-wide uppercase">
                {t("schedule.recentResults", lang)}
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {results.map((m) => {
                const homeWon = (m.homeScore ?? 0) > (m.awayScore ?? 0)
                const awayWon = (m.awayScore ?? 0) > (m.homeScore ?? 0)
                return (
                  <div
                    key={m.id}
                    className="rounded-lg bg-[hsl(220_30%_11%)] border border-white/10 p-4 hover:border-white/20 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] text-white/40 font-[var(--font-body)]">{m.date}</span>
                      <span className={`text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded ${statusColors[m.status]}`}>
                        {t("schedule.final", lang)}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-sm font-semibold flex-1 text-right leading-tight ${homeWon ? "text-white" : "text-white/40"}`}>
                        {m.homeTeam}
                      </span>
                      <div className="flex items-center gap-2 shrink-0 bg-[hsl(220_33%_8%)] px-3 py-1 rounded">
                        <span className={`text-base font-bold ${homeWon ? "text-[hsl(43_76%_47%)]" : "text-white/60"}`}>
                          {m.homeScore}
                        </span>
                        <span className="text-white/20 text-sm">-</span>
                        <span className={`text-base font-bold ${awayWon ? "text-[hsl(43_76%_47%)]" : "text-white/60"}`}>
                          {m.awayScore}
                        </span>
                      </div>
                      <span className={`text-sm font-semibold flex-1 leading-tight ${awayWon ? "text-white" : "text-white/40"}`}>
                        {m.awayTeam}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
