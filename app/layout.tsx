import type { Metadata } from "next"
import { Oswald, Inter } from "next/font/google"
import "./globals.css"

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Ottawa Bolides Soccer League | Ligue de Soccer Ottawa Bolides",
  description:
    "La première ligue de football communautaire de l'Est de l'Ontario. Unissant Ottawa et Gatineau par le beau jeu depuis 2007. Eastern Ontario's premier community soccer league.",
  keywords: ["Ottawa soccer", "Bolides", "ligue soccer Ottawa", "community soccer", "Ottawa Gatineau", "OCSL", "COB26", "Coupe Ottawa Bolides"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${oswald.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
