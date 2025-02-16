"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import RoomGallery from "./room-gallery"
import RoomFeatures2 from "./room-features2"
import { Home, Maximize2, Bath, Wind, Wifi, Bed } from "lucide-react"

const roomTypes = [
  {
    id: "deluxe-double",
    name: "Deluxe Double Room",
    images: [
      {
        url: "/room/s1.png",
        alt: "Deluxe Double Room Main",
      },
      { url: "/room/d2.png", alt: "Bathroom View" },
      { url: "/room/d3.png", alt: "Bathroom View 2" },
      { url: "/room/d4.png", alt: "Room View 3" },
      { url: "/room/d5.png", alt: "Bathroom View 3" },
      { url: "/room/d6.png", alt: "Bathroom View 3" },
      { url: "/room/d7.png", alt: "Bathroom View 3" },
     
    ],
    features: [
      { icon: "balcony", label: "Balcony", value: "Yes" },
      { icon: "size", label: "Room Size", value: "25.27 m²" },
      { icon: "bathroom", label: "Bathroom", value: "Private" },
      { icon: "ac", label: "A/C", value: "Yes" },
      { icon: "wifi", label: "WiFi", value: "Free" },
      { icon: "bed", label: "Bed", value: "1 King Bed" },
    ],
    facilities: [
      "Fan",
      "Wardrobe",
      "Clothes Rack",
      "Desk",
      "SoundProof",
      "Marble Flow",
      "Electric Kettle",
      "Wakeup Service",
      "Mosquito Net",
    ],
    description:
      "Providing free toiletries and bathrobes, this double room includes a private bathroom with a shower, a bidet and a hairdryer. The spacious double room provides air conditioning, a wardrobe, a safe deposit box, as well as a balcony. The unit offers 1 bed.",
  },
  {
    id: "standard-twin",
    name: "Standard Twin Room",
    images: [
      {
        url: "/room/s1.png",
        alt: "Standard Twin Room Main",
      },
      { url: "/room/d2.png", alt: "Bathroom View" },
      { url: "/room/d3.png", alt: "Bathroom View 2" },
      { url: "/room/d4.png", alt: "Room View 3" },
      { url: "/room/d5.png", alt: "Bathroom View 3" },
      { url: "/room/d6.png", alt: "Bathroom View 3" },
      { url: "/room/d7.png", alt: "Bathroom View 3" },
    ],
    features: [
      { icon: "balcony", label: "Balcony", value: "Yes" },
      { icon: "size", label: "Room Size", value: "24.62 m²" },
      { icon: "bathroom", label: "Bathroom", value: "Private" },
      { icon: "ac", label: "A/C", value: "Yes" },
      { icon: "wifi", label: "WiFi", value: "Free" },
      { icon: "bed", label: "Bed", value: "2 Full Beds" },
    ],
    facilities: [
      "Fan",
      "Wardrobe",
      "Clothes Rack",
      "Desk",
      "SoundProof",
      "Marble Flow",
      "Electric Kettle",
      "Wakeup Service",
      "Mosquito Net",
    ],
    description:
      "Featuring free toiletries and bathrobes, this twin room includes a private bathroom with a shower, a bidet and a hairdryer. The twin room features air conditioning, soundproof walls, a tea and coffee maker along with a balcony. The unit has 2 beds.",
  },
  {
    id: "standard-double",
    name: "Standard Double Room",
    images: [
      {
        url: "/room/ss1.png",
        alt: "Standard Double Room Main",
      },
      { url: "/room/d2.png", alt: "Bathroom View" },
      { url: "/room/d3.png", alt: "Bathroom View 2" },
      { url: "/room/d4.png", alt: "Room View 3" },
      { url: "/room/d5.png", alt: "Bathroom View 3" },
      { url: "/room/d6.png", alt: "Bathroom View 3" },
      { url: "/room/d7.png", alt: "Bathroom View 3" },
    ],
    features: [
      { icon: "balcony", label: "Balcony", value: "Yes" },
      { icon: "size", label: "Room Size", value: "24.62 m²" },
      { icon: "bathroom", label: "Bathroom", value: "Private" },
      { icon: "ac", label: "A/C", value: "Yes" },
      { icon: "wifi", label: "WiFi", value: "Free" },
      { icon: "bed", label: "Bed", value: "1 King Bed & Full Bed" },
    ],
    facilities: [
      "Fan",
      "Wardrobe",
      "Clothes Rack",
      "Desk",
      "SoundProof",
      "Linens",
      "Electric-Kettle",
      "Wakeup Service",
      "Mosquito Net",
    ],
    description:
      "Providing free toiletries and bathrobes, this double room includes a private bathroom with a shower, a bidet and a hairdryer. The double room provides air conditioning, soundproof walls, a tea and coffee maker along with a balcony. The unit offers 2 beds.",
  },
]

export default function RoomTabs2() {
  const [activeTab, setActiveTab] = useState("deluxe-double")

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
      <TabsList className=" grid grid-cols-1 md:grid-cols-3 w-full justify-start  rounded-none h-auto p-0 bg-transparent">
        {roomTypes.map((room) => (
          <TabsTrigger
            key={room.id}
            value={room.id}
            className="!w-full px-6 py-3 rounded-none border-l-2 border-r-2 border-b-4 border-transparent data-[state=active]:!text-[#0555C0] data-[state=active]:!bg-[#E1ECFB] data-[state=active]:border-gray-300 data-[state=active]:border-b-[#0555C0] "
          >
            {room.name}
          </TabsTrigger>
        ))}
      </TabsList>

      {roomTypes.map((room) => (
        <TabsContent key={room.id} value={room.id} className="space-y-8 mt-6">
          <RoomGallery images={room.images} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
            <h2 className="text-2xl font-bold text-blue-600">{room.name}</h2>
            <RoomFeatures2
              features={room.features.map((feature) => ({
                ...feature,
                icon: getFeatureIcon(feature.icon),
              }))}
              facilities={room.facilities}
            />
            </div>
            <div className="flex items-center my-auto"> <p className="leading-relaxed max-w-[440px] font-[400] text-justify">{room.description}</p></div>
           
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}

function getFeatureIcon(name: string) {
  const icons = {
    balcony: <Home className="h-5 w-5" />,
    size: <Maximize2 className="h-5 w-5" />,
    bathroom: <Bath className="h-5 w-5" />,
    ac: <Wind className="h-5 w-5" />,
    wifi: <Wifi className="h-5 w-5" />,
    bed: <Bed className="h-5 w-5" />,
  }
  return icons[name as keyof typeof icons]
}

