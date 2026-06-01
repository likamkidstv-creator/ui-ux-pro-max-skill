const LOGO_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2030%20mai%202026%2C%2015%20h%2041%20min%2046%20s-1xTCa7tTJotfiPNmr6lZL2w7rYjNCh.png"

export function HeroSection() {
  return (
    <section id="home" className="relative grid min-h-screen grid-cols-1 overflow-hidden lg:grid-cols-2">
      {/* Left */}
      <div className="relative z-10 flex flex-col justify-center px-6 pb-16 pt-32 md:px-12 lg:pt-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-100"
          style={{
            backgroundImage:
              "linear-gradient(rgba(196,160,80,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(196,160,80,.03) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden
        />

        <div className="mb-7 flex items-center gap-4">
          <span className="h-px w-12 bg-[#C4A050]" />
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#C4A050]">
            Mbote · Master Barber · Ottawa
          </span>
        </div>

        <h1 className="mb-4 font-[family-name:var(--font-bebas)] text-[clamp(72px,9vw,140px)] leading-[0.88]">
          <span className="block text-[#F5F5F5]">Josué</span>
          <span className="block text-[#C4A050]">Kuta</span>
        </h1>

        <p className="mb-9 max-w-md font-[family-name:var(--font-playfair)] text-base italic leading-relaxed text-[#F5F5F5]/55">
          Ton barbier de confiance à Ottawa. Une coupe nette, du drip et une ambiance familiale — viens repartir frais,
          frérot.
        </p>

        <div className="mb-12 flex flex-wrap items-center gap-4">
          {["Style", "Précision", "Excellence"].map((w, i) => (
            <div key={w} className="flex items-center gap-4">
              {i > 0 && <span className="h-[3px] w-[3px] rounded-full bg-[#C4A050]/60" />}
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#F5F5F5]/40">{w}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="#booking"
            className="inline-block bg-[#C4A050] px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A0A0A] transition-all hover:-translate-y-0.5 hover:bg-[#E8C97A]"
          >
            Réserve ta place
          </a>
          <a
            href="#services"
            className="inline-block border border-[#C4A050]/40 px-10 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[#F5F5F5] transition-colors hover:border-[#C4A050] hover:text-[#C4A050]"
          >
            Voir le menu
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="relative flex items-center justify-center overflow-hidden bg-[#0d0d0d] py-16 lg:py-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={LOGO_URL || "/placeholder.svg"}
          alt="Logo Josué Kuta Master Barber — profil illustré avec ciseaux dorés"
          className="w-[78%] max-w-[520px] object-contain"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent lg:block" />
      </div>
    </section>
  )
}
