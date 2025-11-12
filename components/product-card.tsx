import { Button } from "@/components/ui/button"

export default function ProductCard({ product }: any) {
  return (
    <div className="bg-background border border-border rounded-lg overflow-hidden hover:border-accent/50 transition group h-full flex flex-col">
      <div className="aspect-video bg-accent/5 overflow-hidden">
        <img
          src={product.image || "/placeholder.svg?height=200&width=280&query=solar+panel+system"}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition"
        />
      </div>
      <div className="p-4 space-y-3 flex flex-col flex-grow">
        <div>
          <h3 className="text-base font-bold text-foreground">{product.name}</h3>
          <p className="text-xs text-muted-foreground">{product.description}</p>
        </div>

        <div className="space-y-1 text-xs">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Capacity:</span>
            <span className="font-semibold text-foreground">{product.capacity}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Panels:</span>
            <span className="font-semibold text-foreground">{product.panels}</span>
          </div>
        </div>

        <div className="bg-secondary p-2 rounded text-xs space-y-0.5 mt-auto">
          <div className="line-through text-muted-foreground">MRP: {product.price}</div>
          <div className="text-accent text-xs">Subsidy: {product.subsidy}</div>
          <div className="text-lg font-bold text-primary">{product.finalPrice}</div>
        </div>

        <Button variant="outline" className="w-full bg-transparent text-xs h-8">
          Get Quote
        </Button>
      </div>
    </div>
  )
}
