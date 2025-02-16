import Link from "next/link"
import { cn } from "@/lib/utils"

interface RoomTabsProps {
  currentRoom: string
}

const rooms = [
  { name: "Deluxe Double Room", href: "/rooms/deluxe-double" },
  { name: "Standard Twin Room", href: "/rooms/standard-twin" },
  { name: "Standard Double Room", href: "/rooms/standard-double" },
]

export function RoomTabs({ currentRoom }: RoomTabsProps) {
  return (
    <div className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex space-x-8">
          {rooms.map((room) => (
            <Link
              key={room.name}
              href={room.href}
              className={cn(
                "py-4 text-sm font-medium border-b-2 -mb-px transition-colors hover:text-blue-600",
                currentRoom === room.name ? "border-blue-600 text-blue-600" : "border-transparent text-gray-600",
              )}
            >
              {room.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

