import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl text-[50px] font-semibold mb-4 text-start">What Our Customer Says</h2>
        <p className="text-start text-[20px] text-[#515151] mb-12">
          Exclusive Guest Features offering luxury, comfort, and personalized services.
        </p>

        <div className="relative bg-[#E1ECFB] rounded-2xl container mx-auto">
          <Button variant="ghost" className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:flex px-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className=" rounded-lg p-6 md:p-8 text-center  md:mx-auto mx-auto md:max-w-[906px]">
            <p className="text-lg text-[#0555C0] text-[36px] leading-[48px] mb-4">
              "Without doubt, the best hotel we have stayed in. This is a must if you come to Galle"
            </p>
            <div className="mb-2">Jenny</div>
            <div className="text-gray-600 mb-4">United Kingdom</div>
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>

          <Button variant="ghost" className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex px-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

