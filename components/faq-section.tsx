"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqData = [
  {
    question: "How close the beach is Olinda Galle?",
    answer:
      "Olinda Galle is located just 5 minutes walking distance from the beautiful Galle beach. The hotel offers easy access to the shoreline and stunning ocean views.",
  },
  {
    question: "What are the check-in and check-out times?",
    answer:
      "Check-in time is from 2:00 PM and check-out time is until 12:00 PM (noon). Early check-in and late check-out can be arranged based on availability.",
  },
  {
    question: "Do you offer airport transfers?",
    answer:
      "Yes, we provide airport transfer services. Please contact our front desk to arrange your transportation needs.",
  },
  {
    question: "Is breakfast included in the room rate?",
    answer:
      "Yes, all our room rates include a complimentary breakfast buffet served at our restaurant from 6:30 AM to 10:30 AM.",
  },
  {
    question: "Do you have Wi-Fi?",
    answer: "Yes, we offer complimentary high-speed Wi-Fi access throughout the hotel property.",
  },
  {
    question: "What amenities are available in the rooms?",
    answer:
      "Our rooms feature air conditioning, flat-screen TV, mini-bar, safe, tea/coffee making facilities, and private bathrooms with complimentary toiletries.",
  },
  {
    question: "Is parking available?",
    answer: "Yes, we offer free parking for all our guests in our secure on-site parking facility.",
  },
  {
    question: "Do you have room service?",
    answer: "Yes, room service is available 24/7 with a variety of dining options.",
  },
  {
    question: "Are pets allowed?",
    answer:
      "We have a selective pet-friendly policy. Please contact us in advance to discuss your specific requirements.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, debit cards, and cash payments. Advance deposits may be required for certain bookings.",
  },
]

export default function FaqSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm border px-4">
              <AccordionTrigger className="text-left py-6 hover:no-underline">{faq.question}</AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

