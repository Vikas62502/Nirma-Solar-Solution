import Header from "@/components/header"
import ProductCard from "@/components/product-card"
import Footer from "@/components/footer"

const products = [
  {
    id: 1,
    name: "SolarMax 3KW System",
    description: "Perfect for small homes and apartments",
    price: "₹2,45,000",
    subsidy: "₹80,000",
    finalPrice: "₹1,65,000",
    capacity: "3KW",
    panels: "8 x 400W",
    warranty: "25 Years",
    image: "/3kw-solar-panel-system.jpg",
  },
  {
    id: 2,
    name: "SolarMax 5KW System",
    description: "Ideal for medium-sized homes",
    price: "₹4,00,000",
    subsidy: "₹1,30,000",
    finalPrice: "₹2,70,000",
    capacity: "5KW",
    panels: "13 x 400W",
    warranty: "25 Years",
    image: "/5kw-solar-panel-system.jpg",
  },
  {
    id: 3,
    name: "SolarMax 7KW System",
    description: "For larger homes and high consumption",
    price: "₹5,60,000",
    subsidy: "₹1,75,000",
    finalPrice: "₹3,85,000",
    capacity: "7KW",
    panels: "18 x 400W",
    warranty: "25 Years",
    image: "/7kw-solar-panel-system.jpg",
  },
  {
    id: 4,
    name: "SolarMax 10KW System",
    description: "Commercial-grade system for large properties",
    price: "₹8,00,000",
    subsidy: "₹2,50,000",
    finalPrice: "₹5,50,000",
    capacity: "10KW",
    panels: "26 x 400W",
    warranty: "25 Years",
    image: "/10kw-commercial-solar-system.jpg",
  },
]

export default function ProductsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Our Solar Systems</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore our range of premium solar systems with government subsidy options. All prices include installation
            and 25-year warranty.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 flex-grow">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
