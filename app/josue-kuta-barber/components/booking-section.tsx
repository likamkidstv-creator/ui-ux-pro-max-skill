"use client"

import type React from "react"
import { useState } from "react"
import { Phone, Mail, Instagram, MapPin } from "lucide-react"

const contacts = [
  { Icon: Phone, label: "Téléphone", value: "613-697-0674" },
  { Icon: Mail, label: "Email", value: "josueekuta1@gmail.com" },
  { Icon: Instagram, label: "Instagram", value: "@josue_kuta" },
  { Icon: MapPin, label: "Ville", value: "Ottawa, Canada" },
]

const services = [
  "Coupe Homme — 35$",
  "Barbe — 25$",
  "Razor Fade — 45$",
  "Coloration — 60$",
  "Soin Capillaire — 50$",
  "Full Package (coupe+barbe+soin) — 90$",
]

const times = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00"]

const inputCls =
  "border border-[#C4A050]/15 bg-white/[0.03] px-4 py-3 text-[13px] font-light text-[#F5F5F5] outline-none transition-colors placeholder:text-[#F5F5F5]/25 focus:border-[#C4A050] focus:bg-[#C4A050]/[0.04]"
const labelCls = "text-[10px] font-medium uppercase tracking-[0.25em] text-[#C4A050]"

export function BookingSection() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="booking" className="bg-[#0A0A0A] px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Info */}
        <div>
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-[#C4A050]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C4A050]">
              Contact
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(32px,4.5vw,56px)] font-bold uppercase leading-[0.95] text-balance">
            Réserver <br />
            <em className="not-italic text-[#C4A050]">un créneau</em>
          </h2>
          <p className="my-6 text-[15px] font-light leading-relaxed text-[#F5F5F5]/45">
            Prêt à transformer ton style&nbsp;? Contacte Josué directement pour réserver ta séance. Places limitées.
          </p>

          <ul className="flex flex-col gap-5">
            {contacts.map(({ Icon, label, value }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-[#C4A050]/25 text-[#C4A050]">
                  <Icon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-[#C4A050]">{label}</span>
                  <span className="block text-[13px] text-[#F5F5F5]/60">{value}</span>
                </span>
              </li>
            ))}
          </ul>

        </div>

        {/* Form */}
        {sent ? (
          <div className="flex h-full flex-col items-center justify-center border border-[#C4A050]/20 bg-[#C4A050]/[0.04] p-12 text-center">
            <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#C4A050] font-[family-name:var(--font-bebas)] text-3xl text-[#0A0A0A]">
              ✓
            </span>
            <h3 className="mb-3 font-[family-name:var(--font-playfair)] text-2xl font-bold">C&apos;est parti !</h3>
            <p className="text-[14px] font-light leading-relaxed text-[#F5F5F5]/50">
              Merci pour ta confiance, frérot. Josué te contacte sous 24h pour confirmer ton rendez-vous.
              <br />
              <span className="mt-3 block text-[#C4A050]">613-697-0674 · josueekuta1@gmail.com</span>
            </p>
              <button
              type="button"
              onClick={() => setSent(false)}
              className="mt-7 border border-[#C4A050]/40 px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C4A050] transition-colors hover:bg-[#C4A050] hover:text-[#0A0A0A]"
            >
              Refaire une demande
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className={labelCls} htmlFor="firstName">Prénom</label>
                <input id="firstName" required className={inputCls} placeholder="Junior" />
              </div>
              <div className="flex flex-col gap-2">
                <label className={labelCls} htmlFor="lastName">Nom</label>
                <input id="lastName" required className={inputCls} placeholder="Kuta" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelCls} htmlFor="email">Email</label>
              <input id="email" type="email" required className={inputCls} placeholder="junior@email.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelCls} htmlFor="phone">Téléphone</label>
              <input id="phone" type="tel" className={inputCls} placeholder="613-000-0000" />
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelCls} htmlFor="service">Service souhaité</label>
              <select id="service" required className={`${inputCls} appearance-none`} defaultValue="">
                <option value="" disabled className="bg-[#111]">Choisis ton service</option>
                {services.map((s) => (
                  <option key={s} className="bg-[#111]">{s}</option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className={labelCls} htmlFor="date">Date souhaitée</label>
                <input id="date" type="date" className={inputCls} />
              </div>
              <div className="flex flex-col gap-2">
                <label className={labelCls} htmlFor="time">Heure préférée</label>
                <select id="time" className={`${inputCls} appearance-none`} defaultValue={times[0]}>
                  {times.map((t) => (
                    <option key={t} className="bg-[#111]">{t}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelCls} htmlFor="message">Message (optionnel)</label>
              <textarea
                id="message"
                className={`${inputCls} h-24 resize-none`}
                placeholder="Dis-nous le style que tu veux, frérot..."
              />
            </div>
            <button
              type="submit"
              className="mt-1 bg-[#C4A050] py-4 text-[11px] font-bold uppercase tracking-[0.25em] text-[#0A0A0A] transition-all hover:-translate-y-0.5 hover:bg-[#E8C97A]"
            >
              Envoyer ma demande
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
