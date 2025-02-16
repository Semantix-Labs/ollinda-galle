import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { RoomsSection } from "@/components/rooms-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { SiteFooter } from "@/components/site-footer"
import { BookingForm } from "@/components/booking-form"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection  image="/header.jpeg" title="Relax Vacation Awaits at OLINDA GALLE" normalText="Olinda Galle offers a serene escape with luxurious amenities, perfect for relaxation. Whether you're here for business or leisure, enjoy a memorable stay in the heart of Galle." />
        <BookingForm />
        <FeaturesSection />
        <RoomsSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <SiteFooter />
    </>
  )
}

