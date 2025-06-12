"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, FlameIcon as Fire, Grid, List } from "lucide-react"
import { GameCard } from "@/components/game-card"
import { games } from "@/lib/data"

export default function PopularPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Popular games logic - games with high ratings
  const popularGames = games.filter((game) => game.rating >= 4.5)

  const filteredGames = popularGames.filter((game) => {
    return (
      searchQuery === "" ||
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.developer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent flex items-center justify-center gap-3">
          <Fire className="h-10 w-10 text-orange-500" />
          Popular Games
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          The most beloved games by our community - titles that have earned the highest ratings and player satisfaction
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-muted/30 rounded-lg p-6 space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Search className="h-5 w-5 text-orange-500" />
          <h2 className="text-lg font-semibold">Find Popular Games</h2>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Input
              placeholder="Search popular games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>

          {/* View Mode */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">View:</span>
            <div className="flex gap-1">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge variant="outline">{filteredGames.length} popular games</Badge>
            {searchQuery && <Badge variant="secondary">Filtered by: "{searchQuery}"</Badge>}
          </div>
          <Button variant="outline" size="sm" onClick={() => setSearchQuery("")} disabled={!searchQuery}>
            Clear Search
          </Button>
        </div>

        {filteredGames.length > 0 ? (
          <div
            className={`grid gap-6 ${
              viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
            }`}
          >
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 space-y-4">
            <div className="text-6xl">🔥</div>
            <h3 className="text-xl font-semibold">No popular games found</h3>
            <p className="text-muted-foreground">
              {searchQuery ? "Try adjusting your search terms" : "No games match the popular criteria"}
            </p>
            {searchQuery && <Button onClick={() => setSearchQuery("")}>Clear Search</Button>}
          </div>
        )}
      </div>

      {/* Popular Games Info */}
      <div className="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-6 space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Fire className="h-5 w-5 text-orange-500" />
          What Makes a Game Popular?
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <h4 className="font-medium">High Ratings</h4>
            <p className="text-sm text-muted-foreground">
              Games with ratings of 4.5 stars or higher from our community
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Player Love</h4>
            <p className="text-sm text-muted-foreground">
              Titles that consistently receive positive feedback and reviews
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Proven Quality</h4>
            <p className="text-sm text-muted-foreground">
              Games that have stood the test of time and maintained their appeal
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
