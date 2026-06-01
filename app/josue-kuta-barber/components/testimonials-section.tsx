import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Le meilleur barbier d'Ottawa, point. Le razor fade est propre propre, et l'ambiance c'est comme à la maison. Josué connaît son affaire, je bouge plus d'ici.",
    name: "Junior M.",
    role: "Client fidèle",
  },
  {
    quote:
      "Josué prend le temps de comprendre ce que tu veux vraiment. Coupe nette, barbe au top, et toujours dans le respect. Big up frérot, tu gères.",
    name: "Christ K.",
    role: "Client depuis 3 ans",
  },
  {
    quote:
      "Du début à la fin c'est du premium. La carte de fidélité c'est un bonus de fou et le résultat dépasse toujours mes attentes. Style · Précision · Excellence, no cap.",
    name: "Dieumerci T.",
    role: "Habitué du salon",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#0A0A0A] px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#C4A050]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C4A050]">Le crew</span>
            <span className="h-px w-10 bg-[#C4A050]" />
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(32px,4.5vw,56px)] font-bold leading-tight text-balance">
            Ce que dit <em className="not-italic text-[#C4A050]">la famille</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px bg-[#C4A050]/10 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col bg-[#0A0A0A] p-9">
              <div className="mb-5 flex gap-1 text-[#C4A050]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#C4A050]" />
                ))}
              </div>
              <blockquote className="mb-7 flex-1 font-[family-name:var(--font-playfair)] text-[17px] italic leading-relaxed text-[#F5F5F5]/75">
                “{t.quote}”
              </blockquote>
              <figcaption className="flex items-center gap-3 border-t border-[#C4A050]/10 pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C4A050]/40 font-[family-name:var(--font-bebas)] text-sm text-[#C4A050]">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-medium text-[#F5F5F5]">{t.name}</span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-[#F5F5F5]/35">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
