"use client"

import { X } from "lucide-react"
import PortfolioCard from "@/components/portfolio-card"

interface PortfolioModalProps {
  isOpen: boolean
  onClose: () => void
  projects: any[]
}

export default function PortfolioModal({ isOpen, onClose, projects }: PortfolioModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-background rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl font-bold text-foreground">All Completed Projects</h2>
          <button onClick={onClose} className="p-1 hover:bg-accent/10 rounded transition" aria-label="Close modal">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 p-6">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {projects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className="border-t border-border p-6 flex justify-center">
          <button
            onClick={onClose}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-2 rounded-lg transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
