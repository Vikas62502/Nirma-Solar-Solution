"use client"

import { useState, useRef } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import About from "@/components/about"
import ProductsCarousel from "@/components/products-carousel"
import PortfolioCarousel from "@/components/portfolio-carousel"
import BlogCarousel from "@/components/blog-carousel"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import QueryFormModal from "@/components/query-form-modal"
import { Phone } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Adani 3KW Residetial System",
    description: "Perfect for small homes and apartments",
    price: "₹1,78,000",
    subsidy: "₹78,000",
    finalPrice: "₹1,00,000",
    capacity: "3KW",
    panels: "5 x 590W",
    warranty: "25 Years",
    image: "/3kw-solar-panel-system.jpg",
  },
  {
    id: 2,
    name: "Adani 5KW Residetial System",
    description: "Ideal for medium-sized homes",
    price: "₹2,78,000",
    subsidy: "₹78,000",
    finalPrice: "₹2,00,000",
    capacity: "5.3KW",
    panels: "9 x 590W",
    warranty: "25 Years",
    image: "/5kw-solar-panel-system.jpg",
  },
  {
    id: 3,
    name: "Adani 6KW Residetial System",
    description: "For mid-larger homes and high consumption",
    price: "₹3,00,000",
    subsidy: "₹78,000",
    finalPrice: "₹2,22,000",
    capacity: "5.9KW",
    panels: "10 x 590W",
    warranty: "25 Years",
    image: "/7kw-solar-panel-system.jpg",
  },
  {
    id: 4,
    name: "Adani 8KW Residetial System",
    description: "Large grade system for large properties",
    price: "₹3,60,000",
    subsidy: "₹78,000",
    finalPrice: "₹2,82,000",
    capacity: "8.3KW",
    panels: "14 x 590W",
    warranty: "25 Years",
    image: "/10kw-commercial-solar-system.jpg",
  },
  {
    id: 5,
    name: "Adani 10KW Residetial System",
    description: "Extra large grade system for large properties",
    price: "₹4,20,000",
    subsidy: "₹78,000",
    finalPrice: "₹3,42,000",
    capacity: "10KW",
    panels: "17 x 590W",
    warranty: "25 Years",
    image: "/10kw-commercial-solar-system.jpg",
  },
]

const projects = [
  {
    id: 1,
    title: "Sharma Residence - 5KW System",
    location: "123 Maple Street, Sector 5, Gurgaon",
    capacity: "5KW",
    savingsPerMonth: "₹8,500",
    review: "Excellent service and installation. Our bills reduced significantly!",
    reviewer: "Mr. Sharma",
    rating: 5,
    image: "/residential-rooftop-solar-installation-completed.jpg",
  },
  {
    id: 2,
    title: "Patel Apartment Complex - 10KW System",
    location: "456 Green Avenue, Sector 12, Delhi",
    capacity: "10KW",
    savingsPerMonth: "₹16,000",
    review: "Professional team, transparent pricing. Highly recommended!",
    reviewer: "Mrs. Patel",
    rating: 5,
    image: "/apartment-complex-solar-panels-installation.jpg",
  },
  {
    id: 3,
    title: "Gupta Villa - 7KW System",
    location: "789 Sunlight Lane, Sector 8, Noida",
    capacity: "7KW",
    savingsPerMonth: "₹12,200",
    review: "Great investment for the future. Very satisfied with the results.",
    reviewer: "Mr. Gupta",
    rating: 5,
    image: "/villa-with-solar-panels-on-roof.jpg",
  },
  {
    id: 4,
    title: "Singh Family Home - 3KW System",
    location: "321 Energy Street, Sector 3, Faridabad",
    capacity: "3KW",
    savingsPerMonth: "₹5,200",
    review: "Quick installation and amazing support. Worth every penny!",
    reviewer: "Singh Family",
    rating: 5,
    image: "/house-solar-installation-project.jpg",
  },
  {
    id: 5,
    title: "Bhat Commercial Building - 15KW System",
    location: "654 Business Plaza, Sector 15, Gurgaon",
    capacity: "15KW",
    savingsPerMonth: "₹28,000",
    review: "Perfect commercial solution. Reduced operational costs significantly.",
    reviewer: "Mr. Bhat",
    rating: 5,
    image: "/commercial-building-with-large-solar-array.jpg",
  },
  {
    id: 6,
    title: "Kumar Farmhouse - 8KW System",
    location: "987 Solar Farm Road, Sector 20, Greater Noida",
    capacity: "8KW",
    savingsPerMonth: "₹14,000",
    review: "Best decision for sustainable living. Team was very cooperative.",
    reviewer: "Kumar Family",
    rating: 5,
    image: "/farmhouse-with-solar-installation.jpg",
  },
]

const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to PM Suryaghar Yojana",
    excerpt: "Learn about the government scheme and how to get subsidies for your solar installation.",
    date: "Nov 8, 2024",
    category: "Government Schemes",
    image: "/government-scheme-solar-subsidy-guide.jpg",
  },
  {
    id: 2,
    title: "How Much Can You Save with Solar?",
    excerpt: "Calculate your potential savings and ROI with our comprehensive breakdown.",
    date: "Nov 5, 2024",
    category: "Cost Savings",
    image: "/solar-energy-savings-calculator-chart.jpg",
  },
  {
    id: 3,
    title: "Solar Panel Maintenance Tips",
    excerpt: "Keep your solar system running efficiently with these maintenance tips.",
    date: "Nov 1, 2024",
    category: "Maintenance",
    image: "/solar-panel-cleaning-maintenance.jpg",
  },
  {
    id: 4,
    title: "Why Choose Monocrystalline Solar Panels?",
    excerpt: "Understand the difference between panel types and choose the best for your home.",
    date: "Oct 28, 2024",
    category: "Technology",
    image: "/monocrystalline-vs-polycrystalline-solar-panels.jpg",
  },
  {
    id: 5,
    title: "Top 5 Benefits of Going Solar",
    excerpt: "Discover the major advantages of switching to solar energy for your household.",
    date: "Oct 25, 2024",
    category: "Benefits",
    image: "/benefits-of-solar-energy-renewable.jpg",
  },
  {
    id: 6,
    title: "Solar Installation Process Explained",
    excerpt: "Step-by-step overview of what to expect during your solar installation.",
    date: "Oct 22, 2024",
    category: "Installation",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Features />

      <About />

      <section id="products" className="py-12 md:py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 md:mb-4 text-balance">
            Our Solar Systems
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-8 md:mb-12">
            Choose from our range of premium solar systems designed for homes of all sizes.
          </p>
          <ProductsCarousel products={products} />
        </div>
      </section>

      <section id="portfolio" className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 md:mb-4 text-balance">
            Our Completed Projects
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-8 md:mb-12">
            Check out our successfully installed solar systems with real customer reviews and verified savings.
          </p>
          <PortfolioCarousel projects={projects} />
        </div>
      </section>

      <section id="blog" className="py-12 md:py-16 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 md:mb-4 text-balance">
            Solar Energy Blog
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-8 md:mb-12">
            Stay updated with the latest insights, tips, and information about solar energy and government schemes.
          </p>
          <BlogCarousel posts={blogPosts} />
        </div>
      </section>

      <section
        id="contact"
        ref={contactRef}
        className="py-12 md:py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/5"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 md:mb-4 text-balance">Contact Us</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-8 md:mb-12">
            Get in touch with our team for a free consultation and site survey.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16">
            <div className="bg-background border border-border p-4 md:p-6 rounded-lg text-center">
              <Phone className="w-6 md:w-8 h-6 md:h-8 text-primary mx-auto mb-3 md:mb-4" />
              <h3 className="font-bold text-foreground mb-2 text-sm md:text-base">Phone</h3>
              <p className="text-muted-foreground text-xs md:text-sm">+91-XXX-XXX-XXXX</p>
            </div>
            <div className="bg-background border border-border p-4 md:p-6 rounded-lg text-center">
              <Phone className="w-6 md:w-8 h-6 md:h-8 text-primary mx-auto mb-3 md:mb-4" />
              <h3 className="font-bold text-foreground mb-2 text-sm md:text-base">Email</h3>
              <p className="text-muted-foreground text-xs md:text-sm">info@solarflow.com</p>
            </div>
            <div className="bg-background border border-border p-4 md:p-6 rounded-lg text-center sm:col-span-2 lg:col-span-1">
              <Phone className="w-6 md:w-8 h-6 md:h-8 text-primary mx-auto mb-3 md:mb-4" />
              <h3 className="font-bold text-foreground mb-2 text-sm md:text-base">Address</h3>
              <p className="text-muted-foreground text-xs md:text-sm">Gurgaon, Haryana, India</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />

      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-4 right-4 z-40 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-3 md:p-4 shadow-lg transition transform hover:scale-110"
        aria-label="Open query form"
      >
        <Phone className="w-5 md:w-6 h-5 md:h-6" />
      </button>

      <QueryFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}
