import { PocketIcon as Pool, UtensilsCrossed, Plane, Hotel } from "lucide-react"

const features = [
  { icon: '/home/i1.png', title: "Swimming Pool" },
  { icon: '/home/i2.png', title: "Restaurant" },
  { icon: '/home/i3.png', title: "Airport Shuttle" },
  { icon: '/home/i4.png', title: "Cozy Rooms" },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-[50px] font-semibold   text-start">Exclusive Guest Features</h2>
        <p className="text-start mb-12 text-[20px] text-medium text-[#515151]">
          Exclusive Guest Features offering luxury, comfort, and personalized services.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 md:p-6 border-[2px] border-[#0555C0] rounded-tl-[50px] rounded-br-[50px] hover:shadow-lg transition-shadow"
            >
              <img src={feature.icon} alt={feature.title} className="w-[76px] h-[76px] brightness-80" />
              <h3 className="text-[#0555C0] text-[20px] mt-3 font-semibold text-center">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

