import { Fan, Wifi, Bath, Wind, Coffee, BedDouble, Maximize, Warehouse, Bell, Shield, Waves, Table } from "lucide-react"

interface Feature {
  icon: JSX.Element
  label: string
}

interface RoomFeaturesProps {
  features: {
    specifications: {
      balcony?: boolean
      size?: string
      bathroom?: boolean
      ac?: boolean
      wifi?: boolean
      bed?: string
      petsAllowed?: boolean
    }
    amenities: string[]
  }
}

const getIcon = (name: string) => {
  const icons: Record<string, JSX.Element> = {
    Fan: <Fan className="h-4 w-4" />,
    "Clothes Rack": <Warehouse className="h-4 w-4" />,
    SoundProof: <Shield className="h-4 w-4" />,
    Wardrobe: <Warehouse className="h-4 w-4" />,
    Desk: <Table className="h-4 w-4" />,
    "Marble Flow": <Waves className="h-4 w-4" />,
    "Electric Kettle": <Coffee className="h-4 w-4" />,
    "Wakeup service": <Bell className="h-4 w-4" />,
    "Mosquito Net": <Shield className="h-4 w-4" />,
    "Pet-Friendly": <Shield className="h-4 w-4" />,
  }
  return icons[name] || <Shield className="h-4 w-4" />
}

export function RoomFeatures({ features }: RoomFeaturesProps) {
  const { specifications, amenities } = features

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {specifications.balcony && (
          <div className="flex items-center gap-2">
            <Warehouse className="h-4 w-4 text-blue-600" />
            <span>Balcony</span>
          </div>
        )}
        {specifications.size && (
          <div className="flex items-center gap-2">
            <Maximize className="h-4 w-4 text-blue-600" />
            <span>{specifications.size}</span>
          </div>
        )}
        {specifications.bathroom && (
          <div className="flex items-center gap-2">
            <Bath className="h-4 w-4 text-blue-600" />
            <span>Private Bathroom</span>
          </div>
        )}
        {specifications.ac && (
          <div className="flex items-center gap-2">
            <Wind className="h-4 w-4 text-blue-600" />
            <span>A/C</span>
          </div>
        )}
        {specifications.wifi && (
          <div className="flex items-center gap-2">
            <Wifi className="h-4 w-4 text-blue-600" />
            <span>Free Wifi</span>
          </div>
        )}
        {specifications.bed && (
          <div className="flex items-center gap-2">
            <BedDouble className="h-4 w-4 text-blue-600" />
            <span>{specifications.bed}</span>
          </div>
        )}
        {specifications.petsAllowed && (
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-blue-600" />
            <span>Pet-Friendly</span>
          </div>
        )}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Facilities</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center gap-2">
              {getIcon(amenity)}
              <span>{amenity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

