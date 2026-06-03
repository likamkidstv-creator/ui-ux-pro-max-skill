"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "LIKAM DIGITAL STUDIO completely transformed our online presence. The new website generated leads within the first week of launch. Sidiki and his team understood our vision immediately.",
    name: "Marcus Osei",
    title: "CEO, Apex Ventures",
    initials: "MO",
  },
  {
    quote:
      "The brand identity they built for our sports club is unlike anything I've seen from local agencies. World-class quality, premium execution, and delivered on time. Highly recommend.",
    name: "Isabelle Laurent",
    title: "Director, FC Dominance",
    initials: "IL",
  },
  {
    quote:
      "Worth every penny. The strategic consulting and website together positioned us as the premium choice in our market. Our conversion rate doubled in two months.",
    name: "Kwame Diallo",
    title: "Founder, Meridian Advisory",
    initials: "KD",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-28 px-6 md:px-10 bg-card">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.p
            className="text-xs tracking-[0.25em] uppercase text-primary font-medium mb-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Client Stories
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground leading-tight"
            style={{ letterSpacing: "-0.025em" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            What Clients Say
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              className="flex flex-col justify-between bg-background border border-border/30 rounded-sm p-8 hover:border-primary/30 transition-colors duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Stars */}
              <div>
                <div className="flex gap-1 mb-5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground text-base leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 mt-8 pt-6 border-t border-border/30">
                <div
                  className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary text-xs font-bold flex-shrink-0"
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
