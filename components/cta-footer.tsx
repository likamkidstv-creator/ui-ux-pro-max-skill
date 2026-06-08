"use client"

import Image from "next/image"
import { Youtube, Instagram, Facebook } from "lucide-react"
import { useLanguage } from "./language-provider"
import { t } from "@/lib/translations"

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const socialLinks = [
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: XIcon, label: "X / Twitter", href: "#" },
  { icon: Instagram, label: "Instagram @coupe_ottawa_bolides", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
]

export default function CTAFooter() {
  const { lang } = useLanguage()

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const footerLinks = [
    { label: t("footer.home", lang), href: "#hero" },
    { label: t("nav.about", lang), href: "#about" },
    { label: t("hero.standings", lang), href: "#standings" },
    { label: t("nav.matches", lang), href: "#schedule" },
    { label: t("nav.clubs", lang), href: "#clubs" },
    { label: t("footer.register", lang), href: "#register" },
  ]

  return (
    <>
      {/* CTA Section */}
      <section
        id="register"
        className="relative bg-[hsl(220_33%_8%)] py-20 md:py-28 overflow-hidden"
      >
        <div className="absolute inset-0 bg-pitch-lines opacity-50 pointer-events-none" aria-hidden="true" />
        {/* Gold top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-[hsl(43_76%_47%)/0.4]" aria-hidden="true" />

        <div className="relative z-10 container mx-auto px-6 md:px-10 max-w-4xl text-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%201%20juin%202026%2C%2018_46_33-xAJgNKGKEExB05DEpLTW4KVBF9A8G1.png"
            alt="Ottawa Bolides Soccer League crest"
            width={80}
            height={80}
            className="mx-auto mb-6 h-20 w-auto object-contain drop-shadow-xl"
          />
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4 leading-tight">
            {t("cta.readyToJoin", lang)}{" "}
            <span className="text-[hsl(43_76%_47%)]">{t("cta.bolidesFamily", lang)}</span>
          </h2>
          <p className="text-white/50 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-[var(--font-body)]">
            {t("cta.ctaDescription", lang)}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="px-8 py-4 bg-[hsl(43_76%_47%)] hover:bg-[hsl(43_76%_54%)] text-[hsl(220_33%_8%)] text-sm font-bold tracking-widest uppercase rounded transition-colors duration-200 shadow-xl">
              {t("cta.registerYourTeam", lang)}
            </button>
            <button
              onClick={() => scrollTo("#about")}
              className="px-8 py-4 bg-transparent border border-white/20 hover:border-white/40 text-white text-sm font-bold tracking-widest uppercase rounded transition-colors duration-200"
            >
              {t("cta.learnMore", lang)}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(220_33%_5%)] border-t border-white/10 py-12">
        <div className="container mx-auto px-6 md:px-10 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%201%20juin%202026%2C%2018_46_33-xAJgNKGKEExB05DEpLTW4KVBF9A8G1.png"
                  alt="Ottawa Bolides Soccer League crest"
                  width={40}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
                <div>
                  <p className="text-[10px] tracking-[0.25em] text-[hsl(43_76%_47%)] uppercase font-semibold">Ottawa</p>
                  <p className="text-white font-bold text-base tracking-widest uppercase">Bolides</p>
                </div>
              </div>
              <p className="text-white/40 text-sm leading-relaxed font-[var(--font-body)]">
                {t("footer.description", lang)}
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-white font-bold text-xs tracking-[0.25em] uppercase mb-4">
                {t("footer.quickLinks", lang)}
              </h3>
              <ul className="flex flex-col gap-2">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-white/40 hover:text-[hsl(43_76%_47%)] text-sm transition-colors font-[var(--font-body)]"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact + social */}
            <div>
              <h3 className="text-white font-bold text-xs tracking-[0.25em] uppercase mb-4">
                {t("footer.stayConnected", lang)}
              </h3>
              <div className="flex items-center gap-3 mb-5">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded flex items-center justify-center bg-white/5 hover:bg-[hsl(43_76%_47%)/0.15] hover:text-[hsl(43_76%_47%)] text-white/40 transition-colors"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
              <div className="space-y-2">
                <p className="text-white/40 text-sm font-[var(--font-body)]">City Park, 1800 City Park Dr</p>
                <p className="text-white/40 text-sm font-[var(--font-body)]">Ottawa, Ontario, Canada</p>
                <p className="text-white/40 text-sm font-[var(--font-body)]">@coupe_ottawa_bolides</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/25 text-xs font-[var(--font-body)]">
              &copy; 2026 Ottawa Bolides Soccer League. {t("footer.allRightsReserved", lang)}.
            </p>
            <p className="text-white/25 text-xs font-[var(--font-body)]">
              {t("about.ocslMember", lang)} &bull; {t("about.eodsaAffiliated", lang)} &bull; {t("footer.oneLeague", lang)}
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
