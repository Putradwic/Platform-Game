"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  FlameIcon as Fire,
  TrendingUp,
  Search,
  Sparkles,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { GameCard } from "@/components/game-card"
import { NewsCard } from "@/components/news-card"
import { games, news } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function DiscoverPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [featuredIndex, setFeaturedIndex] = useState(0)

  const filteredGames = games.filter((game) => {
    return (
      searchQuery === "" ||
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.developer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  const filteredNews = news.filter((item) => {
    return (
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  const featuredGames = games.slice(0, 8) // Increase to 8 games for better sliding
  const popularGames = games.filter((game) => game.rating >= 4.5).slice(0, 6)
  const trendingGames = games.filter((game) => new Date(game.releaseDate) > new Date("2022-01-01")).slice(0, 6)

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Discover Amazing Games
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find your next favorite game from our curated collection of the best titles
          </p>
        </div>

        {/* Simple Search */}
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Input
              placeholder="Search games and news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
            <div className="absolute left-3 top-3 text-muted-foreground">
              <Search className="h-6 w-6" />
            </div>
          </div>
        </div>

        {searchQuery && (
          <div className="max-w-md mx-auto">
            <Badge variant="outline" className="text-sm">
              {filteredGames.length} games, {filteredNews.length} articles found
            </Badge>
          </div>
        )}
      </section>

      {/* Search Results */}
      {searchQuery && (
        <section className="space-y-8">
          {filteredGames.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                Games ({filteredGames.length})
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredGames.slice(0, 6).map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </div>
          )}

          {filteredNews.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Star className="h-6 w-6 text-primary" />
                News ({filteredNews.length})
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredNews.slice(0, 6).map((item) => (
                  <NewsCard key={item.id} news={item} />
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* Default Content */}
      {!searchQuery && (
        <>
          {/* Featured Games */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="text-center space-y-2 flex-1">
                <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
                  <Sparkles className="h-8 w-8 text-primary" />
                  Featured Games
                </h2>
                <p className="text-muted-foreground">Hand-picked games just for you</p>
              </div>
              <Button variant="outline" size="lg" asChild className="flex items-center gap-2">
                <Link href="/featured">
                  See All
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${featuredIndex * (100 / 4)}%)` }}
                >
                  {featuredGames.map((game) => (
                    <div key={game.id} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex-shrink-0 px-3">
                      <GameCard game={game} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation buttons */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90"
                onClick={() => setFeaturedIndex(Math.max(0, featuredIndex - 1))}
                disabled={featuredIndex === 0}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90"
                onClick={() => setFeaturedIndex(Math.min(featuredGames.length - 4, featuredIndex + 1))}
                disabled={featuredIndex >= featuredGames.length - 4}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              {/* Dots indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {Array.from({ length: Math.max(1, featuredGames.length - 3) }).map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === featuredIndex ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                    onClick={() => setFeaturedIndex(index)}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Popular Games */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="text-center space-y-2 flex-1">
                <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
                  <Fire className="h-8 w-8 text-orange-500" />
                  Popular Games
                </h2>
                <p className="text-muted-foreground">Most loved by players worldwide</p>
              </div>
              <Button variant="outline" size="lg" asChild className="flex items-center gap-2">
                <Link href="/popular">
                  See All
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {popularGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </section>

          {/* Trending Games */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="text-center space-y-2 flex-1">
                <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
                  <TrendingUp className="h-8 w-8 text-green-500" />
                  Trending Games
                </h2>
                <p className="text-muted-foreground">What's hot and rising in the gaming world</p>
              </div>
              <Button variant="outline" size="lg" asChild className="flex items-center gap-2">
                <Link href="/trending">
                  See All
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {trendingGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </section>

          {/* Latest News */}
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold">Latest News</h2>
              <p className="text-muted-foreground">Stay updated with gaming world</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {news.slice(0, 3).map((item) => (
                <NewsCard key={item.id} news={item} />
              ))}
            </div>
            <div className="text-center">
              <Button variant="outline" size="lg" asChild>
                <a href="/news">View All News</a>
              </Button>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
