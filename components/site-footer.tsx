import Image from "next/image"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="w-[174px] h-[71px]">
             <Image 
             src="/l2.png"
             alt="logo"
             width={200}
             height={200}
             className="object-cover "/>
            </div>
            <p className="text-sm mt-3">
              No.123 Beach Road,
              <br />
              5000 Galle
              <br />
              Sri Lanka
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <div className="space-y-2">
              <Link href="/about" className="block hover:text-white">
                About
              </Link>
              <Link href="/booking" className="block hover:text-white">
                Booking
              </Link>
              <Link href="/faq" className="block hover:text-white">
                FAQ
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Rooms</h4>
            <div className="space-y-2">
              <Link href="/rooms/deluxe-double" className="block hover:text-white">
                Deluxe Double Room
              </Link>
              <Link href="/rooms/standard-twin" className="block hover:text-white">
                Standard Twin Room
              </Link>
              <Link href="/rooms/standard-double" className="block hover:text-white">
                Standard Double Room
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <p> 0777159999</p>
              <p> 0777118197</p>
              <p> 0912240800</p>
              <Link href="mailto:info@olindagalle.com" className="hover:text-white">info@olindagalle.com</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          Copyright © 2025 semantic labs. All right reserved.
        </div>
      </div>
    </footer>
  )
}

