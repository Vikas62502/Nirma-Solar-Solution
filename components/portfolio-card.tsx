import { Star, MapPin } from "lucide-react"

export default function PortfolioCard({ project }: any) {
  return (
    <div className="bg-background border border-border rounded-lg overflow-hidden hover:border-accent/50 transition group h-full flex flex-col">
      <div className="aspect-square bg-accent/5 overflow-hidden">
        <img
          src={project.image || "/placeholder.svg?height=200&width=200&query=solar+installation"}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition"
        />
      </div>
      <div className="p-4 space-y-3 flex flex-col flex-grow">
        <div>
          <h3 className="text-sm font-bold text-foreground mb-1">{project.title}</h3>
          <div className="flex items-start gap-1 text-xs text-muted-foreground">
            <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
            <span>{project.location}</span>
          </div>
        </div>

        <div className="flex justify-between py-2 border-y border-border text-xs">
          <div>
            <div className="text-muted-foreground">Capacity</div>
            <div className="font-bold text-primary">{project.capacity}</div>
          </div>
          <div className="text-right">
            <div className="text-muted-foreground">Savings</div>
            <div className="font-bold text-accent">{project.savingsPerMonth}</div>
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex gap-0.5">
            {Array.from({ length: project.rating }).map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-accent text-accent" />
            ))}
          </div>
          <p className="text-xs italic text-foreground">{project.review}</p>
          <p className="text-xs font-semibold text-muted-foreground">— {project.reviewer}</p>
        </div>
      </div>
    </div>
  )
}
