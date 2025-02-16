import Image from "next/image"

interface HeroSectionProps {
  title: string
  image: string
  normalText?:string;
}

export function HeroSection({ title, image,normalText }: HeroSectionProps) {
  return (
    <section className="relative h-[85vh] md:min-h-[400px] flex items-center justify-center">
      <Image src={image || "/placeholder.svg"} alt="Hero background" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-[68px] font-medium max-w-[860px] leading-[68px] mb-4">{title}</h1>
        <p className="text-sm md:text-[20px] max-w-[920px] mx-auto justify-center flex">{normalText}</p>
      </div>
    </section>
  )
}

