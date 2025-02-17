import { SiteHeader } from "@/components/site-header"
import { NewsletterSection } from "@/components/newsletter-section"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { BookingForm2 } from "@/components/BookingForm2"

export default function BookingPage() {
  return (
    <>
      <SiteHeader />
      <main>
      <HeroSection  title="A luxurious retreat where comfort meets style" image="/header.jpeg"/>

        <BookingForm2 />

        <NewsletterSection />
      </main>
      <SiteFooter />
    </>
  )
}

