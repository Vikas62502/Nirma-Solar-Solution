"use client"

import { useState, useEffect, useRef } from "react"
import BlogCard from "@/components/blog-card"
import BlogModal from "@/components/blog-modal"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  image: string
}

interface BlogCarouselProps {
  posts: BlogPost[]
}

export default function BlogCarousel({ posts }: BlogCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const getItemsPerView = () => {
    if (typeof window === "undefined") return 3
    if (window.innerWidth < 640) return 1
    if (window.innerWidth < 1024) return 2
    return 3
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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length)
  }

  const visiblePosts = Array.from({ length: itemsPerView }, (_, i) => {
    return posts[(currentIndex + i) % posts.length]
  })

  return (
    <>
      <div className="space-y-6 md:space-y-8">
        <div className="flex items-center justify-between gap-2 md:gap-4">
          <button
            onClick={handlePrev}
            className="flex-shrink-0 p-2 hover:bg-accent/10 rounded-full transition"
            aria-label="Previous articles"
          >
            <ChevronLeft className="w-5 md:w-6 h-5 md:h-6 text-primary" />
          </button>

          <div
            className={`flex-1 grid gap-3 md:gap-6 ${itemsPerView === 1 ? "grid-cols-1" : itemsPerView === 2 ? "grid-cols-2" : "grid-cols-3"}`}
          >
            {visiblePosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="flex-shrink-0 p-2 hover:bg-accent/10 rounded-full transition"
            aria-label="Next articles"
          >
            <ChevronRight className="w-5 md:w-6 h-5 md:h-6 text-primary" />
          </button>
        </div>

        <div className="flex justify-center">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-2 w-full sm:w-auto"
          >
            Show All Articles
          </Button>
        </div>
      </div>

      <BlogModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} posts={posts} />
    </>
  )
}
