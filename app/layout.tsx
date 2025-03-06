import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"
import { ToastContainer } from 'react-toastify'
import Script from 'next/script'

export const metadata: Metadata = {
  title: "Olinda Galle",
  description: "Olinda Galle offers a serene escape with luxurious amenities, perfect for relaxation. Whether you're here for business or leisure, enjoy a memorable stay in the heart of Galle.",
  icons: {
    icon: '/logo.png', // Use the logo as a favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Toaster />
        <ToastContainer />
        {children}
        
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
      </body>
    </html>
  )
}