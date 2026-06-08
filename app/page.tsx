import { LanguageProvider } from "@/components/language-provider"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import StandingsSection from "@/components/standings-section"
import ScheduleSection from "@/components/schedule-section"
import ClubsSection from "@/components/clubs-section"
import CTAFooter from "@/components/cta-footer"

export default function Page() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background">
        <HeroSection />
        <AboutSection />
        <StandingsSection />
        <ScheduleSection />
        <ClubsSection />
        <CTAFooter />
      </main>
    </LanguageProvider>
  )
}
