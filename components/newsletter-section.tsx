"use client"
// components/NewsletterSection.tsx
import { FC, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import alert from "@/components/alert"



export interface SubscribeResponse {
  message: string;
}

export interface SubscribeRequest {
  email: string;
}

export const NewsletterSection: FC = () => {
  const [email, setEmail] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { toast } = useToast()

  const handleSubscribe = async (): Promise<void> => {
    if (!email) {
      alert.warn("Please enter your email address")
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      })
      return
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert.warn("Please enter a valid email address")
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data: SubscribeResponse = await response.json()

      if (!response.ok) {
        throw new Error(data.message)
      }
      alert.success("Thank you for subscribing to our newsletter!")
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!",
      })

      setEmail("")
    } catch (error) {
      alert.warn("Failed to subscribe. Please try again later.")
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to subscribe. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="bg-[#0555C0] py-12 lg:max-h-[255px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto text-center text-white">
          <div>
            <h2 className="text-[40px] font-bold mb-4">Subscribe to our newsletter</h2>
            <p className="mb-6 text-[20px]">
              Subscribe for exclusive updates, exciting news, and special offers. Join for a vibrant inbox!
            </p>
          </div>
          
          <div className="relative w-full md:max-w-md mx-auto my-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="bg-white h-[82px] w-full rounded-[18px] text-[20px] text-[#626060] placeholder:text-[20px]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              variant="secondary"
              className="absolute right-4 top-1/2 -translate-y-1/2 h-[52px] w-[160px] bg-[#0555C0] text-white text-[20px] rounded-[12px]"
              onClick={handleSubscribe}
              disabled={isLoading}
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
