"use client"

import BlogCard from "@/components/blog-card"
import { X } from "lucide-react"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  image: string
}

interface BlogModalProps {
  isOpen: boolean
  onClose: () => void
  posts: BlogPost[]
}

export default function BlogModal({ isOpen, onClose, posts }: BlogModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-background rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">All Articles</h2>
          <button onClick={onClose} className="p-1 hover:bg-accent/10 rounded transition" aria-label="Close">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="border-t border-border p-6 flex justify-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
