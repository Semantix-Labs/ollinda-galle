"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Minus, Plus, ChevronDown } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export function BookingForm2() {
  const [checkIn, setCheckIn] = useState<Date>(new Date())
  const [checkOut, setCheckOut] = useState<Date>(new Date())
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)

  useEffect(() => {
    // Initialize default dates
    const today = new Date();
    setCheckIn(today);
    
    // Set default checkout to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    setCheckOut(tomorrow);
    
    // Load SwiftBook script if it doesn't exist
    if (!document.getElementById('propInfo')) {
      loadSwiftBookScript();
    }
  }, []);

  // Function to load the SwiftBook script programmatically
  const loadSwiftBookScript = () => {
    const script = document.createElement('script');
    script.src = "https://settings.swiftbook.io/displaywidget/preview/booking-service.min.js?propertyId=622NTaSVLR4f5uDW0tMfRHyp5kMosRvfrjjaQ1NjI=&scriptId=54562";
    script.id = "propInfo";
    document.body.appendChild(script);
  };

  const handleSearch = () => {
    // Format dates for SwiftBook
    const checkInStr = format(checkIn, "yyyy-MM-dd");
    const checkOutStr = format(checkOut, "yyyy-MM-dd");
    
    try {
      // If SwiftBook provides a global API to trigger booking
      if (window.SwiftBook && typeof window.SwiftBook.openBooking === 'function') {
        window.SwiftBook.openBooking({
          checkIn: checkInStr,
          checkOut: checkOutStr,
          adults: adults,
          children: children
        });
      } else {
        // Alternative: Use URL parameters to trigger the widget
        const widgetContainer = document.getElementById('quickbook-widget-622NTaSVLR4f5uDW0tMfRHyp5kMosRvfrjjaQ1NjI=-54562');
        
        if (widgetContainer) {
          // Set data attributes that SwiftBook might read
          widgetContainer.setAttribute('data-checkin', checkInStr);
          widgetContainer.setAttribute('data-checkout', checkOutStr);
          widgetContainer.setAttribute('data-adults', adults.toString());
          widgetContainer.setAttribute('data-children', children.toString());
          
          // Dispatch a custom event that SwiftBook might listen for
          const event = new CustomEvent('swiftbook:search', { 
            detail: { checkIn: checkInStr, checkOut: checkOutStr, adults, children }
          });
          widgetContainer.dispatchEvent(event);
          
          // Scroll to the widget to ensure it's visible
          widgetContainer.scrollIntoView({ behavior: 'smooth' });
        }
      }
      
      // Log for debugging
      console.log("Search clicked", { checkIn: checkInStr, checkOut: checkOutStr, adults, children });
    } catch (error) {
      console.error("Error interfacing with SwiftBook widget:", error);
    }
  }

  return (
    <div className={`bg-white/90 p-6 rounded-[20px] shadow-2xl max-w-[1140px] mx-auto my-20 relative z-10`}>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div>
          <div><span className="text-sm md:text-[18px] text-[#121212] font-semibold md:ml-3">Check-in</span></div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className={cn("w-full truncate flex gap-1 text-[#515151] text-[8px] md:text-[15px] justify-start text-left font-normal", !checkIn && "text-muted-foreground")}
              >
                {checkIn ? format(checkIn, "PPP") : <><CalendarIcon className="mr-2 h-4 w-4" /> {format(new Date(), "PPP")}</>}
                <ChevronDown className="ml-2 h-4 w-4"/>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={checkIn} onSelect={(date) => setCheckIn(date || new Date())} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <div><span className="text-sm md:text-[18px] text-[#121212] font-semibold md:ml-3">Check-out</span></div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className={cn("w-full truncate flex gap-1 text-[#515151] text-[8px] md:text-[15px] text-left font-normal", !checkOut && "text-muted-foreground")}
              >
                {checkOut ? format(checkOut, "PPP") : <><CalendarIcon className="mr-2 h-4 w-4" /> {format(new Date(), "PPP")}</>}
                <ChevronDown className="ml-2 h-4 w-4"/>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={checkOut} onSelect={(date) => setCheckOut(date || new Date())} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div className="grid items-center justify-between px-4 rounded-md">
          <span className="text-sm md:text-[18px] text-[#121212] font-semibold md:ml-3">Adults</span>
          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full text-[#515151] border-[#515151]"
              onClick={() => setAdults(Math.max(1, adults - 1))}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="mx-2 text-[#515151]">{adults}</span>
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 rounded-full text-[#515151] border-[#515151]" 
              onClick={() => setAdults(adults + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid items-center justify-between px-4 rounded-md">
          <span className="text-sm md:text-[18px] text-[#121212] font-semibold md:ml-3">Children</span>
          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full text-[#515151] border-[#515151]"
              onClick={() => setChildren(Math.max(0, children - 1))}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="mx-2 text-[#515151]">{children}</span>
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 rounded-full text-[#515151] border-[#515151]" 
              onClick={() => setChildren(children + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <Button className="w-full mt-4 bg-[#0555C0] rounded-xl" onClick={handleSearch}>
          Search
        </Button>
      </div>
    </div>
  )
}

// Add TypeScript interface for the global window object
declare global {
  interface Window {
    SwiftBook?: {
      openBooking: (options: {
        checkIn: string;
        checkOut: string;
        adults: number;
        children: number;
      }) => void;
    };
  }
}