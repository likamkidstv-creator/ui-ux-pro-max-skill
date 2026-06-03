"use client"

import { motion } from "framer-motion"
import { Globe, Palette, Layers, BarChart3, Megaphone, Users } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Website Design",
    description:
      "Conversion-focused websites that blend world-class aesthetics with performance. Every pixel is intentional.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "Complete visual identities — logo, color system, typography — built to communicate authority and trust.",
  },
  {
    icon: Layers,
    title: "Landing Pages",
    description:
      "High-converting landing pages engineered around your offer, your audience, and measurable growth.",
  },
  {
    icon: BarChart3,
    title: "Digital Strategy",
    description:
      "Data-driven roadmaps that align your online presence with your business objectives and revenue targets.",
  },
  {
    icon: Megaphone,
    title: "Brand Consulting",
    description:
      "Strategic positioning and messaging frameworks that differentiate your brand in crowded markets.",
  },
  {
    icon: Users,
    title: "Business Websites",
    description:
      "Enterprise-grade web solutions for growing businesses that need reliability, scale, and refinement.",
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export function ServicesSection() {
  return (
    <section id="services" className="py-28 px-6 md:px-10 bg-background">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <motion.p
            className="text-xs tracking-[0.25em] uppercase text-primary font-medium mb-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What We Do
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground leading-tight"
            style={{ letterSpacing: "-0.025em" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Premium Digital Solutions
          </motion.h2>
          <motion.p
            className="mt-4 text-muted-foreground text-lg leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Crafted for entrepreneurs, sports organizations, and growth businesses that refuse to blend in.
          </motion.p>
        </div>

        {/* Services grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/30"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group bg-background hover:bg-card p-8 transition-colors duration-300 cursor-default"
              >
                <div className="mb-5 inline-flex items-center justify-center w-10 h-10 border border-primary/30 rounded-sm group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
