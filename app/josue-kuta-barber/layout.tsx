import type { Metadata } from "next"
import { Bebas_Neue, Playfair_Display, Montserrat } from "next/font/google"
import type { ReactNode } from "react"

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Josué Kuta — Master Barber | Ottawa",
  description:
    "Josué Kuta, Master Barber à Ottawa. Coupes hommes premium, razor fade, soin de la barbe. Style · Précision · Excellence. Réservez votre rendez-vous.",
  openGraph: {
    title: "Josué Kuta — Master Barber | Ottawa",
    description: "Style · Précision · Excellence. Coupes hommes premium à Ottawa.",
    type: "website",
  },
}

export default function JosueKutaLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${bebas.variable} ${playfair.variable} ${montserrat.variable}`}>{children}</div>
  )
}
