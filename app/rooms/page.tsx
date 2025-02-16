import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ImageGallery } from "@/components/image-gallery"
import { RoomFeatures } from "@/components/room-features"
import { NewsletterSection } from "@/components/newsletter-section"
import { SiteFooter } from "@/components/site-footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const roomsData = {
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
  "standard-twin": {
    name: "Standard Twin Room",
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ROOMS%202-eRxmMIjnCZ5DEA21A1fT8wfNPZZFQC.png",
        alt: "Standard Twin Room",
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
        size: "24.62 m",
        bathroom: true,
        ac: true,
        wifi: true,
        bed: "2 Full Bed",
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
      "Featuring free toiletries and bathrobes, this twin room includes a private bathroom with a shower, a bidet and a hairdryer. The twin room features air conditioning, soundproof walls, a tea and coffee maker along with a balcony. The unit has 2 beds.",
  },
  "standard-double": {
    name: "Standard Double Room",
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ROOMS%203-tViQdDk0SxziExfEQKfLMe0MuQdeNB.png",
        alt: "Standard Double Room",
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
        size: "24.62 m",
        bathroom: true,
        ac: true,
        wifi: true,
        bed: "1 King Bed & Full Bed",
      },
      amenities: [
        "Fan",
        "Clothes Rack",
        "SoundProof",
        "Wardrobe",
        "Desk",
        "Linens",
        "Electric Kettle",
        "Wakeup service",
        "Mosquito Net",
      ],
    },
    description:
      "Providing free toiletries and bathrobes, this double room includes a private bathroom with a shower, a bidet and a hairdryer. The double room provides air conditioning, soundproof walls, a tea and coffee maker along with a balcony. The unit offers 2 beds.",
  },
}

export default function RoomsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="deluxe-double" className="space-y-8">
              <TabsList className="w-full justify-start h-auto flex-wrap gap-2 bg-transparent p-0">
                {Object.entries(roomsData).map(([key, room]) => (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-full px-4 py-2"
                  >
                    {room.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(roomsData).map(([key, room]) => (
                <TabsContent key={key} value={key} className="space-y-8">
                  <div className="space-y-4">
                    <h1 className="text-2xl font-bold">{room.name}</h1>
                    <ImageGallery images={room.images} />
                    <RoomFeatures features={room.features} />
                    <div className="prose max-w-none">
                      <p>{room.description}</p>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
        <NewsletterSection />
      </main>
      <SiteFooter />
    </>
  )
}

