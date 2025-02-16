import {
    Wifi,
    Bath,
    Wind,
    Coffee,
    Maximize2,
    AlarmCheck,
    Volume2,
    Shirt,
    BookOpen,
    Warehouse,
    Shield,
  } from "lucide-react"
  
  interface Feature {
    icon: JSX.Element
    label: string
    value: string
  }
  
  interface RoomFeaturesProps {
    features: Feature[]
    facilities: string[]
  }
  
  export default function RoomFeatures2({ features, facilities }: RoomFeaturesProps) {
    const getIcon = (name: string) => {
      const icons: { [key: string]: JSX.Element } = {
        fan: <Wind className="h-4 w-4" />,
        wardrobe: <Warehouse className="h-4 w-4" />,
        "clothes-rack": <Shirt className="h-4 w-4" />,
        desk: <BookOpen className="h-4 w-4" />,
        soundproof: <Volume2 className="h-4 w-4" />,
        "marble-flow": <Shield className="h-4 w-4" />,
        "electric-kettle": <Coffee className="h-4 w-4" />,
        linens: <Shirt className="h-4 w-4" />,
        "wakeup-service": <AlarmCheck className="h-4 w-4" />,
        "mosquito-net": <Shield className="h-4 w-4" />,
        tv: <Maximize2 className="h-4 w-4" />,
        wifi: <Wifi className="h-4 w-4" />,
        bathroom: <Bath className="h-4 w-4" />,
      }
      return icons[name] || <Shield className="h-4 w-4" />
    }
  
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-3  gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              {feature.icon}
              <div>
                <span className="text-gray-500 block text-xs">{feature.label}</span>
                <span className="text-gray-900">{feature.value}</span>
              </div>
            </div>
          ))}
        </div>
  
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-blue-600">Facilities</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {facilities.map((facility, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                {getIcon(facility.toLowerCase().replace(/\s+/g, "-"))}
                <span className="text-gray-700">{facility}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  