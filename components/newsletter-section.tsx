import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  return (
    <section className="bg-[#0555C0]  py-12 lg:max-h-[255px]">
      <div className="container mx-auto  px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto text-center text-white">
          <div>
          <h2 className="text-[40px] font-bold mb-4">Subscribe to our newsletter</h2>
          <p className="mb-6 text-[20px]">
            Subscribe for exclusive updates, exciting news, and special offers. Join for a vibrant inbox!
          </p>
          </div>
          
          <div className=" relative w-full md:max-w-md mx-auto my-auto">
          
            <Input type="email" placeholder="Enter your email address" className="bg-white h-[82px] w-full rounded-[18px] text-[20px] text-[#626060] placeholder:text-[20px]" />
            <Button variant="secondary" className="absolute right-4 top-1/2 -translate-y-1/2 h-[52px] w-[160px] bg-[#0555C0] text-white text-[20px] rounded-[12px]">
              Subscribe
           </Button>
            
          </div>
        </div>
      </div>
    </section>
  )
}

