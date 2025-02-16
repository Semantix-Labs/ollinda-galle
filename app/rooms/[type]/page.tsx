import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { RoomTabs } from "@/components/room-tabs"
import { ImageGallery } from "@/components/image-gallery"
import { RoomFeatures } from "@/components/room-features"
import { NewsletterSection } from "@/components/newsletter-section"
import { SiteFooter } from "@/components/site-footer"

const roomData = {
  "deluxe-double": {
    name: "Deluxe Double Room with Balcony",
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ROOMS%201-iik7gzGVImB8ZfHJ24m7cevx9zN5sC.png",
        alt: "Deluxe Double Room",
      },
      { src: "/placeholder.svg", alt: "Room Image 1" },
      { src: "/placeholder.svg", alt: "Room Image 2" },
      { src: "/placeholder.svg", alt: "Room Image 3" },
      { src: "/placeholder.svg", alt: "Room Image 4" },
      { src: "/placeholder.svg", alt: "Room Image 5" },
    ],
    features: {
      specifications: {
        balcony: true,
        size: "25.27 m",
        bathroom: true,
        ac: true,
        wifi: true,
        bed: "1 King Bed",
      },
      amenities: [
        "Fan",
        "Clothes Rack",
        "SoundProof",
        "Wardrobe",
        "Desk",
        "Marble Flow",
        "Electric Kettle",
        "Wakeup service",
        "Mosquito Net",
      ],
    },
    description:
      "Providing free toiletries and bathrobes, this double room includes a private bathroom with a shower, a bidet and a hairdryer. The spacious double room provides air conditioning, a wardrobe, a safe deposit box, as well as a balcony. The unit offers 1 bed.",
  },
  // Add other room types here
}

export default function RoomPage({ params }: { params: { type: string } }) {
  const room = roomData[params.type as keyof typeof roomData]

  if (!room) {
    return <div>Room not found</div>
  }

  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <RoomTabs currentRoom={room.name} />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">{room.name}</h1>
            <div className="space-y-8">
              <ImageGallery images={room.images} />
              <RoomFeatures features={room.features} />
              <div className="prose max-w-none">
                <p>{room.description}</p>
              </div>
            </div>
          </div>
        </div>
        <NewsletterSection />
      </main>
      <SiteFooter />
    </>
  )
}

