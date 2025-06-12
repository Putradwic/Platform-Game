"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Star, Calendar, Monitor, Cpu, ShoppingCart, Heart, Share2, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { GameCard } from "./game-card"
import { games } from "@/lib/data"

interface Game {
  id: number
  title: string
  description: string
  price: number
  image: string
  images?: string[]
  developer: string
  publisher: string
  releaseDate: string
  genres: string[]
  rating: number
  platforms: string[]
  ageRating?: string
  features?: string[]
  systemRequirements?: {
    minimum: {
      os: string
      processor: string
      memory: string
      graphics: string
      storage: string
    }
    recommended: {
      os: string
      processor: string
      memory: string
      graphics: string
      storage: string
    }
  }
}

interface GameDetailModalProps {
  game: Game | null
  isOpen: boolean
  onClose: () => void
}

export function GameDetailModal({ game, isOpen, onClose }: GameDetailModalProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!game) return null

  const relatedGames = games
    .filter((g) => g.id !== game.id && g.genres.some((genre) => game.genres.includes(genre)))
    .slice(0, 4)

  const formattedDate = new Date(game.releaseDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const gameImages = game.images || [game.image]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % gameImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + gameImages.length) % gameImages.length)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{game.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Game Preview Carousel */}
          <div className="relative">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={gameImages[currentImageIndex] || "/placeholder.svg?height=400&width=800"}
                alt={`${game.title} screenshot ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />

              {gameImages.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}
            </div>

            {/* Image thumbnails */}
            {gameImages.length > 1 && (
              <div className="flex gap-2 mt-4 overflow-x-auto">
                {gameImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative flex-shrink-0 w-20 h-12 rounded overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${game.title} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Image counter */}
            {gameImages.length > 1 && (
              <div className="absolute bottom-4 right-4 bg-background/80 px-2 py-1 rounded text-sm">
                {currentImageIndex + 1} / {gameImages.length}
              </div>
            )}
          </div>

          {/* Game Info Header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2">
                {game.genres.map((genre) => (
                  <Badge key={genre} variant="secondary">
                    {genre}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span>{game.rating}/5</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formattedDate}</span>
                </div>
                {game.ageRating && <Badge variant="outline">{game.ageRating}</Badge>}
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:items-end">
              <div className="text-2xl font-bold">{game.price === 0 ? "Free" : `$${game.price.toFixed(2)}`}</div>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={isFavorite ? "text-red-500" : ""}
                >
                  <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button className="gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  {game.price === 0 ? "Download" : "Buy Now"}
                </Button>
              </div>
            </div>
          </div>

          <Separator />

          {/* Tabs */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="specs">System Requirements</TabsTrigger>
              <TabsTrigger value="related">Related Games</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">About This Game</h3>
                <p className="text-muted-foreground leading-relaxed">{game.description}</p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Game Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Developer:</span>
                      <span>{game.developer}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Publisher:</span>
                      <span>{game.publisher}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Release Date:</span>
                      <span>{formattedDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Platforms:</span>
                      <span>{game.platforms.join(", ")}</span>
                    </div>
                  </CardContent>
                </Card>

                {game.features && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Features</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1">
                        {game.features.map((feature) => (
                          <Badge key={feature} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>

            <TabsContent value="specs" className="space-y-4">
              {game.systemRequirements ? (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Monitor className="h-4 w-4" />
                        Minimum Requirements
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">OS:</span>
                        <span>{game.systemRequirements.minimum.os}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Processor:</span>
                        <span>{game.systemRequirements.minimum.processor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Memory:</span>
                        <span>{game.systemRequirements.minimum.memory}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Graphics:</span>
                        <span>{game.systemRequirements.minimum.graphics}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Storage:</span>
                        <span>{game.systemRequirements.minimum.storage}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Cpu className="h-4 w-4" />
                        Recommended Requirements
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">OS:</span>
                        <span>{game.systemRequirements.recommended.os}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Processor:</span>
                        <span>{game.systemRequirements.recommended.processor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Memory:</span>
                        <span>{game.systemRequirements.recommended.memory}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Graphics:</span>
                        <span>{game.systemRequirements.recommended.graphics}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Storage:</span>
                        <span>{game.systemRequirements.recommended.storage}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  System requirements not available for this game.
                </div>
              )}
            </TabsContent>

            <TabsContent value="related" className="space-y-4">
              <h3 className="text-lg font-semibold">You Might Also Like</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {relatedGames.map((relatedGame) => (
                  <GameCard key={relatedGame.id} game={relatedGame} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
}
