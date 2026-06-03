"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { InfiniteSlider } from "./ui/infinite-slider"
import { ProgressiveBlur } from "./ui/progressive-blur"

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background pt-20">
      {/* Subtle gold radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,175,55,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 md:px-10 py-24 flex flex-col items-center text-center gap-8">

        {/* Eyebrow label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
        >
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-primary font-medium border border-primary/30 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" aria-hidden="true" />
            Luxury Digital Agency
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="max-w-5xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] text-balance text-foreground"
          style={{ letterSpacing: "-0.03em" }}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.1}
        >
          Premium Websites&nbsp;&amp; Branding That{" "}
          <span className="text-primary">Drive Real Growth</span>
        </motion.h1>

        {/* Bilingual tagline */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
        >
          We transform visionary ideas into powerful digital brands.{" "}
          <span className="italic text-foreground/60">Construire. Développer. Dominer.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-2"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.3}
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold tracking-wide rounded-sm px-8 h-12 group"
          >
            <a href="#contact">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-border text-foreground hover:bg-secondary hover:border-primary/50 rounded-sm px-8 h-12 bg-transparent"
          >
            <a href="#portfolio">View Our Work</a>
          </Button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="flex flex-wrap justify-center gap-10 mt-8 pt-8 border-t border-border/40 w-full max-w-2xl"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.4}
        >
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "$5K–$25K+", label: "Project Range" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Client logo strip */}
      <motion.div
        className="w-full mt-4 pb-16"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.5}
      >
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex flex-col items-center md:flex-row gap-4">
            <p className="text-xs text-muted-foreground tracking-widest uppercase whitespace-nowrap md:pr-8 md:border-r md:border-border/40">
              Trusted by ambitious brands
            </p>
            <div className="relative w-full overflow-hidden">
              <InfiniteSlider durationOnHover={20} duration={40} gap={80}>
                {[
                  { src: "/images/design-mode/nvidia.svg", alt: "Nvidia", h: "h-5" },
                  { src: "/images/design-mode/column.svg", alt: "Column", h: "h-4" },
                  { src: "/images/design-mode/github.svg", alt: "GitHub", h: "h-4" },
                  { src: "/images/design-mode/nike.svg", alt: "Nike", h: "h-5" },
                  { src: "/images/design-mode/lemonsqueezy.svg", alt: "Lemon Squeezy", h: "h-5" },
                  { src: "/images/design-mode/laravel.svg", alt: "Laravel", h: "h-4" },
                  { src: "/images/design-mode/lilly.svg", alt: "Lilly", h: "h-7" },
                  { src: "/images/design-mode/openai.svg", alt: "OpenAI", h: "h-5" },
                ].map((logo) => (
                  <div key={logo.alt} className="flex items-center">
                    <img
                      className={`mx-auto ${logo.h} w-fit invert opacity-30 hover:opacity-60 transition-opacity`}
                      src={logo.src}
                      alt={`${logo.alt} logo`}
                      height="auto"
                      width="auto"
                    />
                  </div>
                ))}
              </InfiniteSlider>
              <ProgressiveBlur
                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                direction="left"
                blurIntensity={1}
              />
              <ProgressiveBlur
                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                direction="right"
                blurIntensity={1}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
