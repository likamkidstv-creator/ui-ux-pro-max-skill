import { Scissors, Sparkles, Zap, Palette, Droplets, Crown } from "lucide-react"

const services = [
  {
    num: "01",
    Icon: Scissors,
    name: "Coupe Homme",
    desc: "Classique ou tendance, on adapte à ta tête et à ton style. Shampooing et finition inclus, tu repars frais.",
    price: "35$",
    img: "/josue-kuta/coupe-homme.png",
  },
  {
    num: "02",
    Icon: Sparkles,
    name: "La Barbe",
    desc: "Taille, contours et soin avec des produits premium. Rasage au rasoir droit dispo pour les puristes.",
    price: "25$",
    img: "/josue-kuta/la-barbe.png",
  },
  {
    num: "03",
    Icon: Zap,
    name: "Razor Fade",
    desc: "Le dégradé propre au rasoir, lignes nettes et précises. La signature de Josué — celle qui fait tourner les têtes.",
    price: "45$",
    img: "/josue-kuta/razor-fade.png",
  },
  {
    num: "04",
    Icon: Palette,
    name: "Coloration",
    desc: "Couleur naturelle ou plus audacieuse, retouches de racines et touches discrètes. À toi de choisir le vibe.",
    price: "60$",
    img: "/josue-kuta/coloration.png",
  },
  {
    num: "05",
    Icon: Droplets,
    name: "Soin Capillaire",
    desc: "Soins nourrissants pour des cheveux en pleine santé. Le résultat se voit (et se sent) dès la première séance.",
    price: "50$",
    img: "/josue-kuta/soin-capillaire.png",
  },
  {
    num: "06",
    Icon: Crown,
    name: "Full Package",
    desc: "Coupe + Barbe + Soin. Le combo royal pour arriver au top à chaque occasion. Traite-toi comme un king.",
    price: "90$",
    img: "/josue-kuta/full-package.png",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#0A0A0A] px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-[#C4A050]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C4A050]">Services</span>
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(32px,4.5vw,56px)] font-bold leading-tight">
              Le <em className="not-italic text-[#C4A050]">menu</em>
            </h2>
          </div>
          <p className="text-[15px] font-light leading-relaxed text-[#F5F5F5]/40">
            Chaque coupe est faite avec passion et le souci du détail — que des produits pro, du temps pour toi, et un
            résultat dont tu seras fier. Style · Précision · Excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-[#C4A050]/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ num, Icon, name, desc, price, img }) => (
            <div key={num} className="group relative overflow-hidden bg-[#0A0A0A] transition-colors hover:bg-[#1A1A1A]">
              <span className="absolute left-0 top-0 z-20 h-0.5 w-0 bg-[#C4A050] transition-all duration-500 group-hover:w-full" />

              {/* Image header */}
              <div className="relative h-52 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img || "/placeholder.svg"}
                  alt={`Style de coupe ${name} chez Josué Kuta`}
                  className="h-full w-full object-cover grayscale-[35%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
                <span className="absolute right-5 top-4 font-[family-name:var(--font-bebas)] text-5xl leading-none text-[#C4A050]/30">
                  {num}
                </span>
                <div className="absolute bottom-4 left-5 flex h-11 w-11 items-center justify-center border border-[#C4A050]/40 bg-[#0A0A0A]/70 text-[#C4A050] backdrop-blur-sm transition-colors group-hover:border-[#C4A050] group-hover:bg-[#C4A050]/15">
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              {/* Body */}
              <div className="p-8 pt-6">
                <h3 className="mb-2.5 font-[family-name:var(--font-playfair)] text-xl font-bold">{name}</h3>
                <p className="mb-6 text-[13px] font-light leading-relaxed text-[#F5F5F5]/40">{desc}</p>
                <div className="font-[family-name:var(--font-bebas)] text-3xl text-[#C4A050]">
                  {price}
                  <span className="ml-1.5 font-[family-name:var(--font-montserrat)] text-[10px] tracking-[0.15em] text-[#F5F5F5]/25">
                    / séance
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
