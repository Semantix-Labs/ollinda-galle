import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { SiteFooter } from "@/components/site-footer"
import RoomTabs2 from "@/components/room-tabs2"


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
      <HeroSection  title="A luxurious retreat where comfort meets style" image="/header.jpeg"/>
      <div className="container mx-auto px-4 py-8">
      <RoomTabs2 />
    </div>
   
        <NewsletterSection />
      </main>
      <SiteFooter />
    </>
  )
}

