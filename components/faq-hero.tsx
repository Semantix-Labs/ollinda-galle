export default function FaqHero() {
    return (
      <div className="relative h-[60vh] min-h-[400px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FAQ-IQHIoieyIoH5YGXTZ3Aeh5vwoBsYph.png')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center max-w-3xl">
            Find answers to your most common questions
          </h1>
        </div>
      </div>
    )
  }
  
  