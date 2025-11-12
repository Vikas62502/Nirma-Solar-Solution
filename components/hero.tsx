"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-4 md:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            Clean Energy for Your <span className="text-primary">Home</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            Install premium rooftop solar systems under PM Suryaghar Yojana. Get subsidized rates and lifetime support
            from our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer w-full sm:w-auto"
              onClick={() => scrollToSection("contact")}
            >
              Get Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("products")}
              className="cursor-pointer w-full sm:w-auto"
            >
              Explore Products
            </Button>
          </div>
        </div>
        <div className="bg-accent/10 rounded-lg aspect-video flex items-center justify-center order-first md:order-last">
          <img
            src="/rooftop-solar-panels.png"
            alt="Solar installation on rooftop"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
