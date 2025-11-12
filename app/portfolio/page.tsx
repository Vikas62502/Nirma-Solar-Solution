import Header from "@/components/header"
import PortfolioCard from "@/components/portfolio-card"
import Footer from "@/components/footer"

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

export default function PortfolioPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Our Completed Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Check out our successfully installed solar systems with real customer reviews and verified savings.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 flex-grow">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
