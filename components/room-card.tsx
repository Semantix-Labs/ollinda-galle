import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface RoomCardProps {
  title: string
  image: string
  features: string[]
}

export function RoomCard({ title, image, features }: RoomCardProps) {
  return (
    <div className="border rounded-[18px] overflow-hidden shadow-2xl hover:shadow-lg transition-shadow">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={400}
        height={300}
        className="w-full h-[320px] object-cover "
      />
      <div className="!rounded-t-[18px] !overflow-hidden  bg-white/40 !z-40  py-6">
        <h3 className="text-xl font-semibold text-center mb-4">{title}</h3>
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2  mb-4">
          {features.map((feature, i) => (
            <div key={i} className="text-sm flex  px-3 py-1 rounded-full">
            <span className="relative w-[18px] h-[18px]  border-[.5px] border-[#515151] rounded-full mr-2"><Check  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-[#515151]"/></span>  {feature}
            </div>
          ))}
        </div>
        <div className="flex justify-center ">
        <Button className="w-full bg-[#354a21] rounded-[12px] md:w-[280px] items-center">See Availability</Button>
        </div>
      </div>
    </div>
  )
}

