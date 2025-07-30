import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { RoomsSection } from "@/components/rooms-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { SiteFooter } from "@/components/site-footer"
// import { BookingForm } from "@/components/booking-form"
import Script from "next/script"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection  image="/main1.jpg" title="Relax Vacation Awaits at OLINDA GALLE" normalText="Olinda Galle offers a serene escape with luxurious amenities, perfect for relaxation. Whether you're here for business or leisure, enjoy a memorable stay in the heart of Galle." />
        {/* <BookingForm /> */}
        <div className=" mb-16 md:mb-5 pt-6  relative z-10 flex items-center py-6  md:h-[130px] md:-mt-[60px] bg-white/90 md:p-6 rounded-[20px] shadow-2xl max-w-[1140px]  md:mx-auto">
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
        <FeaturesSection />
        <RoomsSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <SiteFooter />
    </>
  )
}

