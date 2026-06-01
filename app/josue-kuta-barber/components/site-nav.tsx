"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { User } from "lucide-react"

const links = [
  { href: "#home", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Tarifs" },
  { href: "#testimonials", label: "Le crew" },
  { href: "#booking", label: "Réserver" },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 transition-colors md:px-12 ${
        scrolled
          ? "border-b border-[#C4A050]/20 bg-[#0A0A0A]/95 backdrop-blur"
          : "bg-gradient-to-b from-[#0A0A0A]/90 to-transparent"
      }`}
    >
      <a href="#home" className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C4A050] font-[family-name:var(--font-playfair)] text-sm font-bold text-[#C4A050]">
          JK
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F5F5F5]">
          Josué <span className="text-[#C4A050]">Kuta</span>
        </span>
      </a>

      <ul className="hidden items-center gap-9 lg:flex">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="group relative text-[11px] font-medium uppercase tracking-[0.18em] text-[#F5F5F5]/60 transition-colors hover:text-[#C4A050]"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C4A050] transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <Link
          href="/josue-kuta-barber/compte"
          className="hidden items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F5F5F5]/60 transition-colors hover:text-[#C4A050] sm:inline-flex"
        >
          <User className="h-4 w-4" />
          Mon compte
        </Link>
        <a
          href="#booking"
          className="hidden border border-[#C4A050] px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C4A050] transition-colors hover:bg-[#C4A050] hover:text-[#0A0A0A] sm:inline-block"
        >
          Réserver
        </a>
        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center border border-[#C4A050]/40 text-[#C4A050] lg:hidden"
        >
          <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-full border-b border-[#C4A050]/20 bg-[#0A0A0A] px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm uppercase tracking-[0.18em] text-[#F5F5F5]/70"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/josue-kuta-barber/compte"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-[#F5F5F5]/70"
              >
                <User className="h-4 w-4 text-[#C4A050]" />
                Mon compte
              </Link>
            </li>
            <li>
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block border border-[#C4A050] px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C4A050]"
              >
                Réserver
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
