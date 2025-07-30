import { RoomCard } from "./room-card"

const rooms = [
  {
    title: "Deluxe Double Room",
    image: "/home/new.jpg",
    features: ["1 King Bed", "25.27 m", "A/C", "Balcony"],
  },
  {
    title: "Standard Twin Room",
    image: "/home/r2.png",
    features: ["2 Full Beds", "24.12 m", "A/C"],
  },
  {
    title: "Standard Double Room",
    image: "/room/r3.jpg",
    features: ["1 Full Bed", "King Bed", "A/C", "Balcony"],
  },
]

export function RoomsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-[50px] font-bold mb-4">Stay Options</h2>
        <p className="text-[#515151] text-[20px] mb-12">Stay Options offer a variety of rooms tailored to your needs</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <RoomCard key={index} {...room} />
          ))}
        </div>
      </div>
    </section>
  )
}

