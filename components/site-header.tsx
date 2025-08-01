'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { usePathname } from 'next/navigation';

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Rooms", href: "/rooms" },
  { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
]

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/35 backdrop-blur-sm">
      <nav className="container mx-auto px-4 h-[90px] pt-[10px] md:h-[138px] md:pt-[50px]">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-semibold text-xl">
           <div className="relative  w-[64px] h-[74px]">
            <img src="/logo.png" alt="Olinda Golf Tours " className="object-cover "/>
           </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[20px] ${pathname === item.href ? "text-[#354a21] border-b-2 border-[#354a21]" : "text-white hover:text-[#354a21]"}`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="https://www.swiftbook.io/inst/#home?propertyId=323NTQJl9ctqaLrY50X74Y1NjI=&JDRN=Y" >  <Button variant="default" className="bg-[#354a21] rounded-xl text-[20px]">Book Now</Button> </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 mt-8">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href} className="text-lg font-medium">
                      {item.name}
                    </Link>
                  ))}
                  <Link href="/contact" >  <Button variant="default" className="bg-[#0555C0] rounded-xl text-[20px]">Contact Us</Button> </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}
