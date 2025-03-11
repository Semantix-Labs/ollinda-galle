import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
// import { BookingForm } from "@/components/booking-form"
import { ImageGallery } from "@/components/image-gallery"
import { NewsletterSection } from "@/components/newsletter-section"
import { SiteFooter } from "@/components/site-footer"
import Script from "next/script"

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
         
        {/* <BookingForm /> */}
        <div className="  relative z-10 flex items-center  h-[130px] -mt-[60px] bg-white/90 p-6 rounded-[20px] shadow-2xl max-w-[1140px] mx-auto">
         {/* SwiftBook Widget Container - This is where the widget will be rendered */}
         <div 
          id="quickbook-widget-622NTaSVLR4f5uDW0tMfRHyp5kMosRvfrjjaQ1NjI=-54562" 
          className="Configure-quickBook-Widget"
        ></div>
        
        {/* SwiftBook Script - Using Next.js Script component for proper loading */}
        <Script
          id="propInfo"
          src="https://settings.swiftbook.io/displaywidget/preview/booking-service.min.js?propertyId=622NTaSVLR4f5uDW0tMfRHyp5kMosRvfrjjaQ1NjI=&scriptId=54562"
          strategy="lazyOnload"
        />
        </div>
        <section className="container mx-auto px-4 py-12">
          <ImageGallery images={galleryImages} />
        </section>
        <NewsletterSection />
      </main>
      <SiteFooter />
    </>
  )
}

