import { Calendar, Folder } from "lucide-react"
import Link from "next/link"

export default function BlogCard({ post }: any) {
  return (
    <div className="bg-background border border-border rounded-lg overflow-hidden hover:border-accent/50 transition group">
      <div className="aspect-video bg-accent/5 overflow-hidden">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition"
        />
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-2 text-xs">
          <Folder className="w-3 h-3" />
          <span className="text-primary font-semibold">{post.category}</span>
        </div>

        <div>
          <h3 className="text-lg font-bold text-foreground mb-2 hover:text-primary transition cursor-pointer">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="w-3 h-3" />
          <span>{post.date}</span>
        </div>

        <Link href={post.redirect || ""} download={post?.isDownload} className="inline-block text-sm font-semibold text-primary hover:text-accent transition">
          Read More →
        </Link>
      </div>
    </div>
  )
}
