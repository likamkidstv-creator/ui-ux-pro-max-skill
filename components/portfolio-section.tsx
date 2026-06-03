"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Apex Consulting Group",
    category: "Corporate Website",
    description:
      "A polished multi-page website for a management consultancy. Built for authority and trust, with seamless lead capture.",
    image: "/images/portfolio/corporate.png",
    tags: ["Web Design", "Brand Identity"],
  },
  {
    title: "FC Dominance",
    category: "Sports Club Website",
    description:
      "High-energy brand and website for an elite athletics club. Bold type, dark palette, and fluid mobile experience.",
    image: "/images/portfolio/sports.png",
    tags: ["Brand Identity", "Web Design"],
  },
  {
    title: "Amara Visual Studio",
    category: "Personal Brand",
    description:
      "A refined digital portfolio for a luxury photographer. Elegant typographic hierarchy and immersive gallery layouts.",
    image: "/images/portfolio/personal-brand.png",
    tags: ["Landing Page", "Brand Consulting"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-28 px-6 md:px-10 bg-card">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <motion.p
              className="text-xs tracking-[0.25em] uppercase text-primary font-medium mb-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Featured Work
            </motion.p>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-foreground leading-tight"
              style={{ letterSpacing: "-0.025em" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              Work That Speaks Louder Than Words
            </motion.h2>
          </div>
          <motion.a
            href="#contact"
            className="group hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group overflow-hidden bg-background border border-border/30 rounded-sm hover:border-primary/40 transition-all duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs text-primary tracking-widest uppercase mb-2">{project.category}</p>
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] tracking-wide uppercase border border-border/50 text-muted-foreground px-2.5 py-1 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
