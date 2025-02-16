import { SiteHeader } from "@/components/site-header"
import { BookingForm } from "@/components/booking-form"
import { NewsletterSection } from "@/components/newsletter-section"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"

export default function BookingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BOOKING-Mcs0z6tLquyiWJ3tUeXVD23VhhHDPL.png"
            alt="Luxury hotel room"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              secure your stay for a<br />
              perfect getaway
            </h1>
          </div>
        </section>

        <BookingForm />

        <NewsletterSection />
      </main>
      <SiteFooter />
    </>
  )
}

