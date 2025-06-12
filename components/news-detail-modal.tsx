"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, User, Share2, Bookmark } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface News {
  id: number
  title: string
  content: string
  date: string
  image: string
  category: string
  author: string
}

interface NewsDetailModalProps {
  news: News | null
  isOpen: boolean
  onClose: () => void
}

export function NewsDetailModal({ news, isOpen, onClose }: NewsDetailModalProps) {
  const [isBookmarked, setIsBookmarked] = useState(false)

  if (!news) return null

  const formattedDate = new Date(news.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const timeAgo = getTimeAgo(new Date(news.date))

  function getTimeAgo(date: Date) {
    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

    if (diffInSeconds < 60) return "Just now"
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`
    return formattedDate
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <Badge variant="secondary" className="w-fit mb-2">
            {news.category}
          </Badge>
          <div className="flex items-center justify-between gap-4">
            <DialogTitle className="text-2xl font-bold leading-tight flex-1">{news.title}</DialogTitle>
            <div className="flex gap-2 flex-shrink-0">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={isBookmarked ? "text-primary" : ""}
              >
                <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-current" : ""}`} />
              </Button>
              <Button variant="ghost" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{news.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{timeAgo}</span>
            </div>
          </div>

          <Separator />

          {/* Featured Image */}
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={news.image || "/placeholder.svg?height=400&width=800"}
              alt={news.title}
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = "/placeholder.svg?height=400&width=800"
              }}
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <div className="text-lg leading-relaxed whitespace-pre-wrap">{news.content}</div>
          </div>

          <Separator />

          {/* Article Footer */}
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">Published on {formattedDate}</div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Related Articles
              </Button>
              <Button variant="outline" size="sm">
                Share Article
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
