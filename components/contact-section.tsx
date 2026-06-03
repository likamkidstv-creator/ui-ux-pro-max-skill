"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowRight, Mail, Linkedin, Instagram } from "lucide-react"

const budgetOptions = [
  "Under $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000+",
  "Not sure yet",
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-28 px-6 md:px-10 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — messaging */}
          <div>
            <motion.p
              className="text-xs tracking-[0.25em] uppercase text-primary font-medium mb-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Get In Touch
            </motion.p>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6"
              style={{ letterSpacing: "-0.025em" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              {"Let's Build Something Exceptional"}
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg leading-relaxed mb-10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Tell us about your project. We&apos;ll prepare a tailored proposal within 48 hours.
              Our projects typically start at{" "}
              <span className="text-foreground font-medium">$5,000</span> and scale to{" "}
              <span className="text-foreground font-medium">$25,000+</span> for full brand campaigns.
            </motion.p>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <a
                href="mailto:hello@likamdigital.studio"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm group-hover:underline underline-offset-4">
                  hello@likamdigital.studio
                </span>
              </a>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[360px] text-center border border-primary/30 rounded-sm p-12">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center mb-6">
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Message Received</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Thank you for reaching out. We&apos;ll review your project details and get back to you within 48
                  hours with a tailored proposal.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs tracking-wide uppercase text-muted-foreground mb-2">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Sidiki Koné"
                      className="w-full bg-card border border-border/50 focus:border-primary rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs tracking-wide uppercase text-muted-foreground mb-2">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="hello@company.com"
                      className="w-full bg-card border border-border/50 focus:border-primary rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs tracking-wide uppercase text-muted-foreground mb-2">
                    Company / Organization
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                    className="w-full bg-card border border-border/50 focus:border-primary rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-xs tracking-wide uppercase text-muted-foreground mb-2">
                    Project Budget <span className="text-primary">*</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full bg-card border border-border/50 focus:border-primary rounded-sm px-4 py-3 text-sm text-foreground outline-none transition-colors appearance-none"
                  >
                    <option value="" disabled className="text-muted-foreground">
                      Select a budget range
                    </option>
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs tracking-wide uppercase text-muted-foreground mb-2">
                    Project Details <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="w-full bg-card border border-border/50 focus:border-primary rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold tracking-wide rounded-sm h-12 group"
                >
                  Start Your Project Today
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  We respond within 48 hours. No spam, ever.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
