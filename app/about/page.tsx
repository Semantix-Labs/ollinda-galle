import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AboutContent } from "@/components/about-content"
import { NewsletterSection } from "@/components/newsletter-section"
import { SiteFooter } from "@/components/site-footer"
import { BookingForm } from "@/components/booking-form"

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection  title="Relax Vacation Awaits at OLINDA GALLE" image="/header.jpeg"/>
        <BookingForm />
        <AboutContent />
        <NewsletterSection />
      </main>
      <SiteFooter />
    </>
  )
}

