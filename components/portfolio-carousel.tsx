"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import PortfolioCard from "@/components/portfolio-card"
import PortfolioModal from "@/components/portfolio-modal"

export default function PortfolioCarousel({ projects }: any) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAllOpen, setShowAllOpen] = useState(false)

  const getItemsPerView = () => {
    if (typeof window === "undefined") return 4
    if (window.innerWidth < 640) return 1
    if (window.innerWidth < 1024) return 2
    return 4
  }

  const [itemsPerView, setItemsPerView] = useState(() => getItemsPerView())

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView())
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const visibleItems = Array.from({ length: itemsPerView }, (_, i) => {
    return projects[(currentIndex + i) % projects.length]
  })

  return (
    <>
      <div className="space-y-6 md:space-y-8">
        <div className="flex items-center justify-between gap-2 md:gap-4">
          <button
            onClick={handlePrev}
            className="flex-shrink-0 p-2 hover:bg-accent/10 rounded-full transition"
            aria-label="Previous projects"
          >
            <ChevronLeft className="w-5 md:w-6 h-5 md:h-6 text-primary" />
          </button>

          <div
            className={`flex-1 grid gap-3 md:gap-6 ${itemsPerView === 1 ? "grid-cols-1" : itemsPerView === 2 ? "grid-cols-2" : "grid-cols-4"}`}
          >
            {visibleItems.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="flex-shrink-0 p-2 hover:bg-accent/10 rounded-full transition"
            aria-label="Next projects"
          >
            <ChevronRight className="w-5 md:w-6 h-5 md:h-6 text-primary" />
          </button>
        </div>

        <div className="flex justify-center">
          <Button
            onClick={() => setShowAllOpen(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-2 w-full sm:w-auto"
          >
            Show All Projects
          </Button>
        </div>
      </div>

      <PortfolioModal isOpen={showAllOpen} onClose={() => setShowAllOpen(false)} projects={projects} />
    </>
  )
}
