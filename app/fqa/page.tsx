import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { RoomsSection } from "@/components/rooms-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { SiteFooter } from "@/components/site-footer"
import FaqSection from "@/components/faq-section"
import FaqHero from "@/components/faq-hero"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <FaqHero />
        <FaqSection />
       
        <NewsletterSection />
      </main>
      <SiteFooter />
    </>
  )
}

