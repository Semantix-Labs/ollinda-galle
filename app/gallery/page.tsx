import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { BookingForm } from "@/components/booking-form"
import { ImageGallery } from "@/components/image-gallery"
import { NewsletterSection } from "@/components/newsletter-section"
import { SiteFooter } from "@/components/site-footer"

const galleryImages = [
  {
    src: "/room/s1.png",
    alt: "Bedroom with canopy bed",
  },
  { src: "/room/d4.png", alt: "Desk area" },
  { src: "/room/d3.png", alt: "Bathroom" },
  { src: "/room/d2.png", alt: "Room feature 1" },
  { src: "/room/d5.png", alt: "Room feature 2" },
  { src: "/room/d6.png", alt: "Room feature 3" },
  { src: "/room/d7.png", alt: "Room feature 4" },
  // Add more images as needed
]

// {
//   url: "/room/s1.png",
//   alt: "Standard Twin Room Main",
// },
// { url: "/room/d2.png", alt: "Bathroom View" },
// { url: "/room/d3.png", alt: "Bathroom View 2" },
// { url: "/room/d4.png", alt: "Room View 3" },
// { url: "/room/d5.png", alt: "Bathroom View 3" },
// { url: "/room/d6.png", alt: "Bathroom View 3" },
// { url: "/room/d7.png", alt: "Bathroom View 3" },

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection
          title="Discover Olinda Galle through stunning visuals"
          image="/header.jpeg"
        />
         
        <section className="container mx-auto px-4 py-8">
          <BookingForm topMargin="yes"/>
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

