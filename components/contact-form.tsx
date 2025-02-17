"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import countryCodes from "./countryCodes"
import alert from "@/components/alert"




export default function ContactForm() {
    const { toast } = useToast()
    const [phoneCode, setPhoneCode] = useState("+94")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    })
  
    const handlePhoneChange = (e: { target: { value: string } }) => {
      const cleaned = e.target.value.replace(/[^\d+]/g, "")
      setPhoneNumber(cleaned)
    }
  
    const handleInputChange = (e: { target: { id: any; value: any } }) => {
      const { id, value } = e.target
      setFormData(prev => ({
        ...prev,
        [id]: value
      }))
    }
  
    const handleSubmit = async (e: { preventDefault: () => void }) => {
      e.preventDefault()
      setIsSubmitting(true)
  
      const fullPhoneNumber = `${phoneCode}${phoneNumber}`
      const emailData = {
        ...formData,
        phoneNumber: fullPhoneNumber
      }
  
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailData),
        })
        console.log()
        if (response.ok) {
            alert.success("Your message has been sent successfully.")
            toast({
                title: "Success!",
                description: "Your message has been sent successfully.",
                duration: 5000, // Add duration to ensure toast stays visible
              })
          
          // Reset form
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: ""
          })
          setPhoneNumber("")
        } else {
          throw new Error('Failed to send email')
        }
      } catch (error: any) {
        alert.warn((error as Error).message || "Failed to send your message. Please try again later.")
        toast({
          title: "Error",
          description: "Failed to send your message. Please try again later.",
          variant: "destructive",
          duration: 5000,
        })
      } finally {
        setIsSubmitting(false)
      }
    }
  
    return (
      <div className="bg-[#CBDAEE]">
         
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
              <form className="grid gap-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-[#2E5339]">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Enter Your First Name" 
                      className="rounded-[20px] h-[66px] placeholder:text-[#2E5339]"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-[#2E5339]">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Enter Your Last Name"  
                      className="rounded-[20px] h-[66px] placeholder:text-[#2E5339]"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
  
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#2E5339]">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="e.g johndoe@gmail.com"  
                    className="rounded-[20px] h-[66px] placeholder:text-[#2E5339]"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
  
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#2E5339]">Phone Number</Label>
                  <div className="flex gap-2">
                    <Select value={phoneCode} onValueChange={setPhoneCode}>
                      <SelectTrigger className="w-[100px] h-[66px] rounded-[20px]">
                        <SelectValue placeholder="Code" className="text-[#2E5339] h-[66px] placeholder:text-[#2E5339]" />
                      </SelectTrigger>
                      <SelectContent className="max-h-[300px]">
                        {countryCodes.map((country) => (
                          <SelectItem 
                            key={country.code} 
                            value={country.code}
                            className="flex items-center gap-2"
                          >
                            <span className="mr-2">{country.flag}</span>
                            <span>{country.code}</span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Input 
                      id="phone" 
                      type="tel" 
                      className="flex-1 rounded-[20px] h-[66px] placeholder:text-[#2E5339]"
                      value={phoneNumber}
                      onChange={handlePhoneChange}
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                </div>
  
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#2E5339]">Message or Enquiry</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Type Something" 
                    className="min-h-[150px] rounded-[20px] placeholder:text-[#2E5339]"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
  
                <Button 
                  type="submit" 
                  size="lg"
                  className="flex w-[120px] items-center bg-[#0555C0] rounded-[20px] text-[20px]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>
              </form>
            </div>
  
            <div className="space-y-6">
              <div className="h-[410px] bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.80392611564!2d79.8251!3d6.9271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1639998965435!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
  
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#515151]">+94 77 777 7777</span>
                </div>
                <div className="flex items-start gap-3 text-[#515151]">
                  <span>info@lindagalle@gmail.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <address className="not-italic text-[#515151]">
                    No 12A Bope Cross Road,
                    <br />
                    8000 Galle, Sri Lanka
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    )
  }