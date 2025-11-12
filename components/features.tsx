import { Zap, Leaf, Shield, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Energy Efficient",
    description: "Reduce your electricity bills by up to 80% with our premium solar panels.",
  },
  {
    icon: Leaf,
    title: "Eco Friendly",
    description: "Contribute to a sustainable future with zero-emission clean energy.",
  },
  {
    icon: Shield,
    title: "25-Year Warranty",
    description: "Quality assured with comprehensive warranty and lifetime support.",
  },
  {
    icon: TrendingUp,
    title: "Government Approved",
    description: "Certified under PM Suryaghar Yojana with government subsidies.",
  },
]

export default function Features() {
  return (
    <section className="py-12 md:py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8 md:mb-12 text-balance">
          Why Choose Nirma Solar Solutions?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-background p-4 md:p-6 rounded-lg border border-border hover:border-accent/50 transition flex flex-col text-center"
              >
                <Icon className="w-10 md:w-12 h-10 md:h-12 text-primary mb-3 mx-auto" />
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
