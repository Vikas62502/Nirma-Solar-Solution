"use client"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"

export default function ProductsModal({ isOpen, onClose, products }: any) {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-50 transition-opacity" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-4 md:inset-12 bg-background rounded-lg z-50 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl font-bold text-foreground">All Our Solar Systems</h2>
          <button onClick={onClose} className="p-1 hover:bg-accent/10 rounded-full transition" aria-label="Close modal">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-6 border-t border-border">
          <Button onClick={onClose} variant="outline" className="bg-background">
            Close
          </Button>
        </div>
      </div>
    </>
  )
}
