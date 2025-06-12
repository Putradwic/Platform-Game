"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import Image from "next/image"
import { NewsDetailModal } from "./news-detail-modal"

interface News {
  id: number
  title: string
  content: string
  date: string
  image: string
  category: string
  author: string
}

interface NewsCardProps {
  news: News
}

export function NewsCard({ news }: NewsCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const formattedDate = new Date(news.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  return (
    <>
      <Card
        className="overflow-hidden cursor-pointer transition-transform hover:scale-105"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={news.image || "/placeholder.svg?height=300&width=600"}
            alt={news.title}
            fill
            className="object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = "/placeholder.svg?height=300&width=600"
            }}
          />
          <Badge className="absolute left-2 top-2">{news.category}</Badge>
        </div>
        <CardHeader className="p-4 pb-0">
          <h3 className="font-bold line-clamp-2">{news.title}</h3>
        </CardHeader>
        <CardContent className="p-4 pt-2">
          <p className="text-sm text-muted-foreground line-clamp-3">{news.content}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t p-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{formattedDate}</span>
          </div>
          <span className="text-sm">{news.author}</span>
        </CardFooter>
      </Card>

      <NewsDetailModal news={news} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
