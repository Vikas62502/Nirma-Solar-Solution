import Header from "@/components/header"
import BlogCard from "@/components/blog-card"
import Footer from "@/components/footer"

const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to PM Suryaghar Yojana",
    excerpt: "Learn about the government scheme and how to get subsidies for your solar installation.",
    date: "Nov 8, 2024",
    category: "Government Schemes",
    image: "/government-scheme-solar-subsidy-guide.jpg",
    redirect: "/Complete-Guide-to-PMSuryaGharYojana.pdf",
    isDownload: true
  },
  {
    id: 2,
    title: "How Much Can You Save with Solar?",
    excerpt: "Calculate your potential savings and ROI with our comprehensive breakdown.",
    date: "Nov 5, 2024",
    category: "Cost Savings",
    image: "/solar-energy-savings-calculator-chart.jpg",
    redirect: "https://api.solarrooftop.gov.in/rooftop_calculator",
    isDownload: false
  },
  {
    id: 3,
    title: "Solar Panel Maintenance Tips",
    excerpt: "Keep your solar system running efficiently with these maintenance tips.",
    date: "Nov 1, 2024",
    category: "Maintenance",
    image: "/solar-panel-cleaning-maintenance.jpg",
    redirect: "#contact",
    isDownload: false
  },
  {
    id: 4,
    title: "Why Choose Monocrystalline Solar Panels?",
    excerpt: "Understand the difference between panel types and choose the best for your home.",
    date: "Oct 28, 2024",
    category: "Technology",
    image: "/monocrystalline-vs-polycrystalline-solar-panels.jpg",
    redirect: "#contact",
    isDownload: false
  },
  {
    id: 5,
    title: "Top 5 Benefits of Going Solar",
    excerpt: "Discover the major advantages of switching to solar energy for your household.",
    date: "Oct 25, 2024",
    category: "Benefits",
    image: "/benefits-of-solar-energy-renewable.jpg",
    redirect: "#contact",
    isDownload: false
  },
  {
    id: 6,
    title: "Solar Installation Process Explained",
    excerpt: "Step-by-step overview of what to expect during your solar installation.",
    date: "Oct 22, 2024",
    category: "Installation",
    image: "/placeholder.svg?height=300&width=400",
    redirect: "#contact",
    isDownload: false
  },
]

export default function BlogPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Solar Energy Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Stay updated with the latest insights, tips, and information about solar energy and government schemes.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 flex-grow">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
