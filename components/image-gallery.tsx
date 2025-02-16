"use client"

import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

interface GalleryImage {
  src: string
  alt: string
}

interface ImageGalleryProps {
  images: GalleryImage[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.slice(0, 7).map((image, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <div
              className={cn(
                "relative cursor-pointer overflow-hidden rounded-lg",
                index === 0 && "col-span-2 row-span-2",
              )}
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={index === 0 ? 600 : 300}
                height={index === 0 ? 600 : 300}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
              />
              {index === 6 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-2xl font-bold">
                  20+ Photos
                </div>
              )}
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={1200}
              height={800}
              className="object-contain w-full h-full"
            />
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}

