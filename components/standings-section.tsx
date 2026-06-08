"use client"

import { useState } from "react"
import { ChevronDown, Minus } from "lucide-react"
import { useLanguage } from "./language-provider"
import { t } from "@/lib/translations"

type Team = {
  pos: number
  name: string
  shortCode: string
  p: number
  w: number
  d: number
  l: number
  gf: number
  ga: number
  gd: number
  pts: number
  form: ("W" | "D" | "L")[]
}

const teams: Team[] = [
  { pos: 1, name: "Galactic 243", shortCode: "GAL", p: 2, w: 2, d: 0, l: 0, gf: 10, ga: 3, gd: 7, pts: 6, form: ["W", "W"] },
  { pos: 2, name: "Tsunami FC", shortCode: "TSU", p: 2, w: 2, d: 0, l: 0, gf: 8, ga: 2, gd: 6, pts: 6, form: ["W", "W"] },
  { pos: 3, name: "Okapi SC Cornwall", shortCode: "OKA", p: 2, w: 2, d: 0, l: 0, gf: 11, ga: 6, gd: 5, pts: 6, form: ["W", "W"] },
  { pos: 4, name: "FC Cosmos", shortCode: "COS", p: 2, w: 2, d: 0, l: 0, gf: 7, ga: 2, gd: 5, pts: 6, form: ["W", "W"] },
  { pos: 5, name: "Ottawa Cranes FC", shortCode: "CRA", p: 2, w: 2, d: 0, l: 0, gf: 5, ga: 0, gd: 5, pts: 6, form: ["W", "W"] },
  { pos: 6, name: "FC Vita", shortCode: "VIT", p: 2, w: 2, d: 0, l: 0, gf: 6, ga: 3, gd: 3, pts: 6, form: ["W", "W"] },
  { pos: 7, name: "X-UVIA", shortCode: "XUV", p: 2, w: 1, d: 0, l: 1, gf: 7, ga: 4, gd: 3, pts: 3, form: ["W", "L"] },
  { pos: 8, name: "11 Pros FC", shortCode: "11P", p: 2, w: 1, d: 0, l: 1, gf: 5, ga: 3, gd: 2, pts: 3, form: ["L", "W"] },
  { pos: 9, name: "CJCCCB", shortCode: "CJC", p: 2, w: 0, d: 0, l: 2, gf: 5, ga: 9, gd: -4, pts: 0, form: ["L", "L"] },
  { pos: 10, name: "Uganda Cranes Ottawa", shortCode: "UGA", p: 2, w: 0, d: 0, l: 2, gf: 1, ga: 5, gd: -4, pts: 0, form: ["L", "L"] },
  { pos: 11, name: "Centre Afrique", shortCode: "CAF", p: 2, w: 0, d: 0, l: 2, gf: 6, ga: 12, gd: -6, pts: 0, form: ["L", "L"] },
  { pos: 12, name: "UJC-OG FC", shortCode: "UJC", p: 2, w: 0, d: 0, l: 2, gf: 0, ga: 6, gd: -6, pts: 0, form: ["L", "L"] },
  { pos: 13, name: "Bababow FC", shortCode: "BAB", p: 2, w: 0, d: 0, l: 2, gf: 0, ga: 7, gd: -7, pts: 0, form: ["L", "L"] },
  { pos: 14, name: "Bamenda Boys", shortCode: "BAM", p: 2, w: 0, d: 0, l: 2, gf: 0, ga: 9, gd: -9, pts: 0, form: ["L", "L"] },
]

type SortKey = "pts" | "gd" | "gf"

const topScorers = [
  { rank: 1, name: "DiMaria", team: "Okapi SC Cornwall", goals: 5 },
  { rank: 2, name: "Japer", team: "Ottawa Cranes FC", goals: 4 },
  { rank: 3, name: "David", team: "Galactic 243", goals: 3 },
  { rank: 4, name: "Benum", team: "Tsunami FC", goals: 3 },
  { rank: 5, name: "Mamoull", team: "FC Cosmos", goals: 3 },
]

const topPoints = [
  { rank: 1, name: "DiMaria", team: "Okapi SC Cornwall", pts: 5 },
  { rank: 2, name: "Japer", team: "Ottawa Cranes FC", pts: 4 },
  { rank: 3, name: "David", team: "Galactic 243", pts: 3 },
  { rank: 4, name: "Benum", team: "Tsunami FC", pts: 3 },
]

function FormBadge({ result }: { result: "W" | "D" | "L" }) {
  const colors = { W: "bg-emerald-500", D: "bg-amber-400", L: "bg-red-600" }
  return (
    <span
      className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold text-white ${colors[result]}`}
      aria-label={result === "W" ? "Win" : result === "D" ? "Draw" : "Loss"}
    >
      {result}
    </span>
  )
}

export default function StandingsSection() {
  const [sortKey, setSortKey] = useState<SortKey>("pts")
  const { lang } = useLanguage()

  const sorted = [...teams].sort((a, b) => {
    if (b[sortKey] !== a[sortKey]) return b[sortKey] - a[sortKey]
    return b.gd - a.gd
  })

  const SortBtn = ({ col, label }: { col: SortKey; label: string }) => (
    <button
      onClick={() => setSortKey(col)}
      className={`flex items-center gap-1 text-[11px] font-bold tracking-wider uppercase transition-colors ${
        sortKey === col ? "text-[hsl(43_76%_47%)]" : "text-white/40 hover:text-white/70"
      }`}
    >
      {label}
      {sortKey === col ? <ChevronDown size={12} /> : <Minus size={10} />}
    </button>
  )

  return (
    <section id="standings" className="relative bg-[hsl(220_33%_7%)] py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-pitch-lines opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 container mx-auto px-6 md:px-10 max-w-6xl">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-[hsl(43_76%_47%)] text-xs font-bold tracking-[0.3em] uppercase">
            {t("standings.sectionTitle", lang)}
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Standings table — takes 2 cols */}
          <div className="xl:col-span-2">
            <div className="rounded-lg overflow-hidden border border-white/10 bg-[hsl(220_30%_10%)]">
              <div className="px-6 py-4 flex items-center justify-between border-b border-white/10">
                <h2 className="text-white font-bold text-lg tracking-wide uppercase">
                  {t("standings.leagueTable", lang)}
                </h2>
                <div className="flex items-center gap-4">
                  <SortBtn col="pts" label={t("standings.pts", lang)} />
                  <SortBtn col="gd" label="GD" />
                  <SortBtn col="gf" label="GF" />
                </div>
              </div>

              {/* Table header */}
              <div className="grid grid-cols-[2rem_1fr_repeat(5,2.5rem)_2.5rem_repeat(2,2rem)] gap-x-2 px-4 py-2 border-b border-white/10">
                <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase text-center">#</span>
                <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase">Club</span>
                <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase text-center">P</span>
                <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase text-center">W</span>
                <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase text-center">D</span>
                <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase text-center">L</span>
                <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase text-center">GD</span>
                <span className="text-[10px] font-bold tracking-widest text-[hsl(43_76%_47%)] uppercase text-center">{t("standings.pts", lang)}</span>
                <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase text-center col-span-2 hidden sm:block">Form</span>
              </div>

              {/* Rows */}
              {sorted.map((team, i) => {
                const isLeader = i < 6
                return (
                  <div
                    key={team.name}
                    className={`standings-row grid grid-cols-[2rem_1fr_repeat(5,2.5rem)_2.5rem_repeat(2,2rem)] gap-x-2 px-4 py-3 border-b border-white/5 cursor-default transition-colors ${isLeader ? "leader" : ""}`}
                  >
                    <span className="text-sm font-bold text-white/50 text-center self-center">{i + 1}</span>
                    <span className="text-sm font-semibold text-white self-center truncate">{team.name}</span>
                    <span className="text-sm text-white/60 text-center self-center">{team.p}</span>
                    <span className="text-sm text-emerald-400 text-center self-center font-semibold">{team.w}</span>
                    <span className="text-sm text-white/60 text-center self-center">{team.d}</span>
                    <span className="text-sm text-red-400 text-center self-center">{team.l}</span>
                    <span className={`text-sm text-center self-center font-semibold ${team.gd > 0 ? "text-emerald-400" : team.gd < 0 ? "text-red-400" : "text-white/60"}`}>
                      {team.gd > 0 ? `+${team.gd}` : team.gd}
                    </span>
                    <span className="text-sm font-bold text-[hsl(43_76%_47%)] text-center self-center">{team.pts}</span>
                    <span className="hidden sm:flex items-center gap-1 self-center col-span-2">
                      {team.form.map((r, fi) => (
                        <FormBadge key={fi} result={r} />
                      ))}
                    </span>
                  </div>
                )
              })}

              {/* Legend */}
              <div className="px-4 py-3 flex items-center gap-4">
                <span className="flex items-center gap-2 text-[10px] text-white/30">
                  <span className="w-2 h-2 rounded-full bg-[hsl(43_76%_47%)]" />
                  {t("standings.qualificationZone", lang)}
                </span>
              </div>
            </div>
          </div>

          {/* League Leaders sidebar */}
          <div id="leaders" className="flex flex-col gap-6">
            {/* Top Scorers */}
            <div className="rounded-lg overflow-hidden border border-white/10 bg-[hsl(220_30%_10%)]">
              <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
                <h3 className="text-white font-bold text-base tracking-wide uppercase">
                  {t("standings.topScorers", lang)}
                </h3>
                <span className="text-[10px] text-[hsl(43_76%_47%)] font-bold tracking-widest uppercase">
                  {t("standings.goals", lang)}
                </span>
              </div>
              {topScorers.map((player) => (
                <div
                  key={player.rank}
                  className="px-5 py-3 border-b border-white/5 flex items-center gap-3 hover:bg-white/5 transition-colors"
                >
                  <span
                    className={`text-sm font-bold w-6 text-center shrink-0 ${player.rank === 1 ? "text-[hsl(43_76%_47%)]" : "text-white/40"}`}
                  >
                    {player.rank}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white truncate">{player.name}</p>
                    <p className="text-[11px] text-white/40 truncate">{player.team}</p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="text-lg font-bold text-white">{player.goals}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Top Points */}
            <div className="rounded-lg overflow-hidden border border-white/10 bg-[hsl(220_30%_10%)]">
              <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
                <h3 className="text-white font-bold text-base tracking-wide uppercase">
                  {t("standings.topPoints", lang)}
                </h3>
                <span className="text-[10px] text-[hsl(43_76%_47%)] font-bold tracking-widest uppercase">
                  {t("standings.pts", lang)}
                </span>
              </div>
              {topPoints.map((player) => (
                <div
                  key={player.rank}
                  className="px-5 py-3 border-b border-white/5 flex items-center gap-3 hover:bg-white/5 transition-colors"
                >
                  <span
                    className={`text-sm font-bold w-6 text-center shrink-0 ${player.rank === 1 ? "text-[hsl(43_76%_47%)]" : "text-white/40"}`}
                  >
                    {player.rank}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white truncate">{player.name}</p>
                    <p className="text-[11px] text-white/40 truncate">{player.team}</p>
                  </div>
                  <span className="text-lg font-bold text-[hsl(43_76%_47%)] shrink-0">{player.pts}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
