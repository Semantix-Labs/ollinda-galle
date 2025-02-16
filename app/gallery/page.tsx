import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { BookingForm } from "@/components/booking-form"
import { ImageGallery } from "@/components/image-gallery"
import { NewsletterSection } from "@/components/newsletter-section"
import { SiteFooter } from "@/components/site-footer"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gallery-l5tYkmips7LVmjylizTVWFizg5gy0J.png",
    alt: "Bedroom with canopy bed",
  },
  { src: "/placeholder.svg", alt: "Desk area" },
  { src: "/placeholder.svg", alt: "Bathroom" },
  { src: "/placeholder.svg", alt: "Room feature 1" },
  { src: "/placeholder.svg", alt: "Room feature 2" },
  { src: "/placeholder.svg", alt: "Room feature 3" },
  { src: "/placeholder.svg", alt: "Room feature 4" },
  // Add more images as needed
]

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection
          title="Discover Olinda Galle through stunning visuals"
          image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gallery-l5tYkmips7LVmjylizTVWFizg5gy0J.png"
        />
        <section className="container mx-auto px-4 py-8">
          <BookingForm />
        </section>
        <section className="container mx-auto px-4 py-12">
          <ImageGallery images={galleryImages} />
        </section>
        <NewsletterSection />
      </main>
      <SiteFooter />
    </>
  )
}

