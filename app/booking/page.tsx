import { SiteHeader } from "@/components/site-header"
import { NewsletterSection } from "@/components/newsletter-section"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { BookingForm2 } from "@/components/BookingForm2"
import Script from "next/script"

export default function BookingPage() {
  return (
    <>
      <SiteHeader />
      <main>
      <HeroSection  title="A luxurious retreat where comfort meets style" image="/main3.jpg"/>

        {/* <BookingForm2 /> */}
        <div className="bg-white mb-28 p-8 md:mb-0 md:mt-[100px] h-[300px]">
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
        <NewsletterSection />
      </main>
      <SiteFooter />
    </>
  )
}

