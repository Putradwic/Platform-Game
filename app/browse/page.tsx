"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Search, Filter, Grid, List } from "lucide-react"
import { GameCard } from "@/components/game-card"
import { games } from "@/lib/data"
import { Badge } from "@/components/ui/badge"

export default function BrowsePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 100])
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const genres = ["Action", "Adventure", "RPG", "Strategy", "Sports", "Simulation"]

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre.toLowerCase())
        ? prev.filter((g) => g !== genre.toLowerCase())
        : [...prev, genre.toLowerCase()],
    )
  }

  const filteredGames = games.filter((game) => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesGenre =
      selectedGenres.length === 0 || game.genres.some((genre) => selectedGenres.includes(genre.toLowerCase()))
    const matchesPrice = game.price >= priceRange[0] && game.price <= priceRange[1]

    return matchesSearch && matchesGenre && matchesPrice
  })

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Browse Games
        </h1>
        <p className="text-muted-foreground">Explore our complete game library</p>
      </div>

      {/* Simple Filters */}
      <div className="bg-muted/30 rounded-lg p-6 space-y-6">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold">Filters</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Search */}
          <div className="space-y-2">
            <Label>Search Games</Label>
            <div className="relative">
              <Input
                placeholder="Game title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-2">
            <Label>
              Price Range: ${priceRange[0]} - ${priceRange[1]}
            </Label>
            <Slider value={priceRange} onValueChange={setPriceRange} max={100} step={1} className="mt-2" />
          </div>

          {/* View Mode */}
          <div className="space-y-2">
            <Label>View Mode</Label>
            <div className="flex gap-2">
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

        {/* Genres */}
        <div className="space-y-3">
          <Label>Genres</Label>
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <div key={genre} className="flex items-center space-x-2">
                <Checkbox
                  id={`genre-${genre}`}
                  checked={selectedGenres.includes(genre.toLowerCase())}
                  onCheckedChange={() => toggleGenre(genre)}
                />
                <Label htmlFor={`genre-${genre}`} className="text-sm">
                  {genre}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        <Button
          variant="outline"
          onClick={() => {
            setSearchQuery("")
            setSelectedGenres([])
            setPriceRange([0, 100])
          }}
        >
          Clear All Filters
        </Button>
      </div>

      {/* Results */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge variant="outline">{filteredGames.length} games found</Badge>
          </div>
        </div>

        {filteredGames.length > 0 ? (
          <div
            className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"}`}
          >
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 space-y-4">
            <div className="text-6xl">🎮</div>
            <h3 className="text-xl font-semibold">No games found</h3>
            <p className="text-muted-foreground">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  )
}
