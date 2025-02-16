"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  const [phoneCode, setPhoneCode] = useState("+94")

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div>
          <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
          <form className="grid gap-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="Enter Your First Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Enter Your Last Name" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="e.g johndoe@gmail.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="flex gap-2">
                <Select value={phoneCode} onValueChange={setPhoneCode}>
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Code" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+94">+94</SelectItem>
                    <SelectItem value="+1">+1</SelectItem>
                    <SelectItem value="+44">+44</SelectItem>
                  </SelectContent>
                </Select>
                <Input id="phone" type="tel" className="flex-1" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message or Enquiry</Label>
              <Textarea id="message" placeholder="Type Something" className="min-h-[150px]" />
            </div>

            <Button type="submit" size="lg">
              Submit
            </Button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="h-[300px] bg-gray-200 rounded-lg overflow-hidden">
            {/* Replace with actual map component */}
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: "url('/placeholder.svg?height=300&width=500')" }}
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-blue-600">+94 77 777 7777</span>
            </div>
            <div className="flex items-start gap-3">
              <span>info@lindagalle@gmail.com</span>
            </div>
            <div className="flex items-start gap-3">
              <address className="not-italic">
                No 12A Bope Cross Road,
                <br />
                8000 Galle, Sri Lanka
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

