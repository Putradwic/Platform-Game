"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, TrendingUp, Grid, List } from "lucide-react"
import { GameCard } from "@/components/game-card"
import { games } from "@/lib/data"

export default function TrendingPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Trending games logic - recent releases with good ratings
  const trendingGames = games.filter((game) => new Date(game.releaseDate) > new Date("2022-01-01"))

  const filteredGames = trendingGames.filter((game) => {
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
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent flex items-center justify-center gap-3">
          <TrendingUp className="h-10 w-10 text-green-500" />
          Trending Games
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          What's hot and rising in the gaming world - the latest releases that are capturing players' attention
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-muted/30 rounded-lg p-6 space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Search className="h-5 w-5 text-green-500" />
          <h2 className="text-lg font-semibold">Find Trending Games</h2>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Input
              placeholder="Search trending games..."
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
            <Badge variant="outline">{filteredGames.length} trending games</Badge>
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
            <div className="text-6xl">📈</div>
            <h3 className="text-xl font-semibold">No trending games found</h3>
            <p className="text-muted-foreground">
              {searchQuery ? "Try adjusting your search terms" : "No games match the trending criteria"}
            </p>
            {searchQuery && <Button onClick={() => setSearchQuery("")}>Clear Search</Button>}
          </div>
        )}
      </div>

      {/* Trending Games Info */}
      <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-6 space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-green-500" />
          What Makes a Game Trending?
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <h4 className="font-medium">Recent Releases</h4>
            <p className="text-sm text-muted-foreground">Games released from 2022 onwards that are gaining momentum</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Rising Popularity</h4>
            <p className="text-sm text-muted-foreground">
              Titles that are experiencing increased player interest and engagement
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Fresh Content</h4>
            <p className="text-sm text-muted-foreground">
              New experiences and innovative gameplay that's capturing attention
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
