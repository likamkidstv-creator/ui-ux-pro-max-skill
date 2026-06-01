const nav = [
  { href: "#home", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Tarifs" },
  { href: "#testimonials", label: "Le crew" },
  { href: "#booking", label: "Réserver" },
]

const services = [
  "Coupe Homme — 35$",
  "Barbe — 25$",
  "Razor Fade — 45$",
  "Coloration — 60$",
  "Soin Capillaire — 50$",
  "Full Package — 90$",
]

const contact = [
  { lbl: "Téléphone", val: "613-697-0674" },
  { lbl: "Email", val: "josueekuta1@gmail.com" },
  { lbl: "Instagram", val: "@josue_kuta" },
  { lbl: "Ville", val: "Ottawa, Canada" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-[#C4A050]/10 bg-[#111] px-6 py-16 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="font-[family-name:var(--font-bebas)] text-4xl leading-none">
              Josué <span className="text-[#C4A050]">Kuta</span>
            </div>
            <div className="mb-4 mt-1 text-[9px] uppercase tracking-[0.3em] text-[#F5F5F5]/20">
              Master Barber · Pro Max Edition · Ottawa
            </div>
            <p className="max-w-[230px] font-[family-name:var(--font-playfair)] text-sm italic leading-relaxed text-[#F5F5F5]/35">
              Ton style, notre <span className="text-[#C4A050]">passion</span>.
              <br />
              Ta confiance, notre <span className="text-[#C4A050]">force</span>.
            </p>
          </div>

          <div>
            <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C4A050]">Navigation</div>
            <ul className="flex flex-col gap-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[13px] font-light text-[#F5F5F5]/35 transition-colors hover:text-[#C4A050]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C4A050]">Services</div>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s} className="text-[13px] font-light text-[#F5F5F5]/35">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C4A050]">Contact</div>
            {contact.map((c) => (
              <div key={c.lbl} className="mb-3.5">
                <div className="text-[9px] uppercase tracking-[0.2em] text-[#F5F5F5]/20">{c.lbl}</div>
                <div className="text-[13px] font-light text-[#F5F5F5]/45">{c.val}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-[#C4A050]/10 pt-7 sm:flex-row">
          <div className="text-[11px] font-light tracking-wide text-[#F5F5F5]/20">
            © {new Date().getFullYear()} <span className="text-[#C4A050]">Josué Kuta</span> · Master Barber · Ottawa ·
            Tous droits réservés
          </div>
          <div className="flex gap-3">
            {[
              { href: "https://instagram.com/josue_kuta", label: "IG" },
              { href: "mailto:josueekuta1@gmail.com", label: "@" },
              { href: "tel:6136970674", label: "☎" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center border border-[#C4A050]/20 text-[11px] font-semibold text-[#F5F5F5]/35 transition-colors hover:border-[#C4A050] hover:bg-[#C4A050]/5 hover:text-[#C4A050]"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
