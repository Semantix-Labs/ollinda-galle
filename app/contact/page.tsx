import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { SiteFooter } from "@/components/site-footer"
import ContactForm from "@/components/contact-form"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
      <HeroSection
          title="Reach out to us, we’re happy to assist"
          image="/main7.jpg"
        />
         
        <ContactForm />
      
      </main>
      <SiteFooter />
    </>
  )
}

