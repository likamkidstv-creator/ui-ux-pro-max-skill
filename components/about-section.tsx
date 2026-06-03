"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const pillars = [
  { label: "Entrepreneurship", description: "Built by a founder who understands the grind of building something real." },
  { label: "Professionalism", description: "Agency-level delivery with clear communication at every step." },
  { label: "Creativity", description: "Design that doesn't follow trends — it sets them." },
  { label: "Growth", description: "Every decision is made with your business objectives in mind." },
]

export function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 md:px-10 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text side */}
          <div>
            <motion.p
              className="text-xs tracking-[0.25em] uppercase text-primary font-medium mb-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              About LDS
            </motion.p>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6"
              style={{ letterSpacing: "-0.025em" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              We Turn Visionary Ideas Into Digital Reality
            </motion.h2>

            <motion.p
              className="text-muted-foreground text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Founded by <span className="text-foreground font-medium">Sidiki Koné</span>, LIKAM DIGITAL STUDIO is a premium
              digital agency helping businesses establish a powerful digital presence through modern web design,
              branding, and strategic digital solutions. We work with entrepreneurs, startups, sports organizations,
              and growth businesses that demand the very best.
            </motion.p>

            <motion.ul
              className="space-y-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {pillars.map((pillar) => (
                <li key={pillar.label} className="flex gap-4">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <span className="font-semibold text-foreground">{pillar.label}</span>
                    <span className="text-muted-foreground"> — {pillar.description}</span>
                  </div>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Image side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Gold frame accent */}
            <div
              className="absolute -top-4 -left-4 w-full h-full border border-primary/30 rounded-sm"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-sm aspect-[3/4]">
              <img
                src="/images/founder.png"
                alt="Sidiki Koné, Founder of LIKAM DIGITAL STUDIO"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Gold overlay strip */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                <p className="text-sm font-semibold text-foreground">Sidiki Koné</p>
                <p className="text-xs text-primary tracking-wider uppercase mt-0.5">Founder & Creative Director</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
