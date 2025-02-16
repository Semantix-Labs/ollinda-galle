import Image from "next/image"
import { BadgeCheck, Percent, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: "/about/al1.png",
    title: "Best quality Hotel",
    description: "Experience unmatched comfort and service at our best quality hotel",
  },
  {
    icon: "/about/al2.png",
    title: "Low price & many promo",
    description: "Affordable prices with more promotions for an unforgettable experience",
  },
  {
    icon: "/about/al3.png",
    title: "Money back guarantee",
    description: "Your money is safe with us, guaranteed hassle-free and secure refunds",
  },
]

const nearbyPlaces = [
  { name: "Clock Tower", distance: "2.2 km", image: "/placeholder.svg" },
  { name: "Galle Light House", distance: "2.9 km", image: "/placeholder.svg" },
  { name: "Unawatuna Beach", distance: "6 km", image: "/placeholder.svg" },
  { name: "Maritime Museum", distance: "9 km", image: "/placeholder.svg" },
  { name: "Seenigama Temple", distance: "25 km", image: "/placeholder.svg" },
  { name: "Peegoda", distance: "7 km", image: "/placeholder.svg" },
  { name: "Lagoon", distance: "6 km", image: "/placeholder.svg" },
  { name: "Galle Fort", distance: "2.3 km", image: "/placeholder.svg" },
]

export function AboutContent() {
  return (
    <div className="space-y-20 py-20">
      {/* Who We Are Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl md:text-[50px] font-semibold mb-6">Who We Are</h2>
        <div className="prose prose-gray text-[20px] max-w-none">
          <p>Welcome to Olinda Galle, a sanctuary of history, culture, and unparalleled hospitality.</p>

          <p className="text-[20px] mt-8">
            Ideally set in the center of Galle, Olinda Galle has air-conditioned rooms with free WiFi, free private
            parking and room service. Among the various facilities of this property are an outdoor swimming pool, a
            garden and a terrace. The property is non-smoking throughout and is located a 2-minute walk from Unawatuna
            Beach.
          </p>

          <p className="text-[20px] mt-8">
            At the hotel, the rooms include a balcony, featuring a private bathroom with a bidet and free toiletries.
            Some accommodations at Olinda Galle also feature a city view. All rooms will provide guests with a desk and
            an electric tea pot.
          </p>

          <p className="text-[20px] mt-8">
            An à la carte, continental or vegetarian breakfast is available at the property. At the accommodation you'll
            find a restaurant serving American, French and Indian cuisine. Vegetarian, halal and vegan options can also
            be requested.
          </p>

          <p className="text-[20px] mt-8">
            Popular points of interest near Olinda Galle include Galle International Cricket Stadium, Galle Railway
            Station and St. Aloysius College. Koggala Airport is 8.3 miles from the property, and the property offers a
            paid airport shuttle service.
          </p>
        </div>
      </section>

      {/* We Care Section */}
      <section className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-[50px] leading-[48px] font-semibold mb-4">We care for each guest like a family</h2>
              <p className="text-[20px] ">We care for every guest like family, ensuring comfort and warmth.</p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                   <img src={feature.icon} alt={feature.title} className="w-8 h-8" /> 
                    </div>
                  <div>
                    <h3 className="font-semibold text-[20px] mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-[16px]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-2 md:p-5 max-w-[520px] rounded-lg bg-[#F4F9F8]">
          <div className="relative h-[400px] max-w-[495px] rounded-lg overflow-hidden">
            <Image
              src="/about/1.png"
              alt="Hotel facilities"
              fill
              className="object-cover"
            />
          </div>
          </div>
        </div>
      </section>

      {/* What's Nearby Section */}
      <section className="container mx-auto px-4">
      <h2 className="text-3xl md:text-[50px] leading-[48px] font-semibold mb-4">What's Nearby</h2>
        <p className="text-[20px] mb-8">Explore nearby attractions, vibrant culture, and scenic beauty steps away.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {nearbyPlaces.map((place, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <Image
                src={place.image || "/placeholder.svg"}
                alt={place.name}
                width={300}
                height={200}
                className="w-full aspect-[4/3] object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold">{place.name}</h3>
                <p className="text-white/90 text-sm">{place.distance}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

