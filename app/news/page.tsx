"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Calendar, Tag } from "lucide-react"
import { NewsCard } from "@/components/news-card"
import { news } from "@/lib/data"
import { Badge } from "@/components/ui/badge"

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const categories = ["Updates", "Events", "Releases", "Community", "Interviews", "Rumors"]

  const filteredNews = news.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = categoryFilter === "all" || item.category.toLowerCase() === categoryFilter.toLowerCase()

    return matchesSearch && matchesCategory
  })

  const latestNews = filteredNews.slice(0, 1)
  const otherNews = filteredNews.slice(1)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
          Gaming News
        </h1>
        <p className="text-muted-foreground">Stay updated with the latest gaming world</p>
      </div>

      {/* Simple Filters */}
      <div className="bg-muted/30 rounded-lg p-6 space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Search className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold">Find News</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="relative">
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>

          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger>
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category.toLowerCase()}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline">{filteredNews.length} articles found</Badge>
        </div>

        {filteredNews.length > 0 ? (
          <div className="space-y-8">
            {/* Featured Article */}
            {latestNews.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <h2 className="text-2xl font-bold">Featured Story</h2>
                </div>
                <div className="grid grid-cols-1">
                  <NewsCard news={latestNews[0]} />
                </div>
              </div>
            )}

            {/* Other Articles */}
            {otherNews.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Tag className="h-5 w-5 text-primary" />
                  <h2 className="text-2xl font-bold">More Stories</h2>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {otherNews.map((item) => (
                    <NewsCard key={item.id} news={item} />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12 space-y-4">
            <div className="text-6xl">📰</div>
            <h3 className="text-xl font-semibold">No articles found</h3>
            <p className="text-muted-foreground">Try different search terms or categories</p>
          </div>
        )}
      </div>
    </div>
  )
}
