import { SiteNav } from "./components/site-nav"
import { HeroSection } from "./components/hero-section"
import { ServicesSection } from "./components/services-section"
import { PricingSection } from "./components/pricing-section"
import { TestimonialsSection } from "./components/testimonials-section"
import { BookingSection } from "./components/booking-section"
import { SiteFooter } from "./components/site-footer"

export default function JosueKutaBarberPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0A0A0A] font-[family-name:var(--font-montserrat)] text-[#F5F5F5] antialiased">
      <SiteNav />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <BookingSection />
      <SiteFooter />
    </main>
  )
}
