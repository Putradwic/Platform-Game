"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Star } from "lucide-react"
import Image from "next/image"
import { GameDetailModal } from "./game-detail-modal"
import { useAuth } from "@/components/auth-context"
import { useAuthAction } from "@/hooks/use-auth-action"

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

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { user, isInWishlist, addToWishlist, removeFromWishlist, isInCart, addToCart } = useAuth()
  const { requireAuth } = useAuthAction()

  const isFavorite = isInWishlist(game.id)
  const isInUserCart = isInCart(game.id)

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation()

    requireAuth(() => {
      if (isFavorite) {
        removeFromWishlist(game.id)
      } else {
        addToWishlist(game.id)
      }
    }, "add to wishlist")
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()

    requireAuth(() => {
      if (!isInUserCart) {
        addToCart(game.id)
      }
    }, "add to cart")
  }

  return (
    <>
      <Card className="overflow-hidden cursor-pointer transition-transform" onClick={() => setIsModalOpen(true)}>
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={game.image || "/placeholder.svg?height=200&width=300"}
            alt={game.title}
            fill
            className="object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = "/placeholder.svg?height=200&width=300"
            }}
          />
          <Button
            variant="ghost"
            size="icon"
            className={`absolute right-2 top-2 h-8 w-8 rounded-full bg-background/80 ${
              isFavorite ? "text-red-500" : "text-muted-foreground"
            }`}
            onClick={handleWishlistToggle}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
            <span className="sr-only">Toggle favorite</span>
          </Button>
        </div>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-1 mb-2">
            {game.genres.slice(0, 2).map((genre) => (
              <Badge key={genre} variant="secondary" className="text-xs">
                {genre}
              </Badge>
            ))}
          </div>
          <h3 className="font-bold line-clamp-1">{game.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-1">{game.developer}</p>
          <div className="mt-2 flex items-center gap-1">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm">{game.rating}/5</span>
            {game.ageRating && (
              <Badge variant="outline" className="ml-auto text-xs">
                {game.ageRating}
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t p-4 pt-2">
          <span className="font-medium">{game.price === 0 ? "Free" : `$${game.price.toFixed(2)}`}</span>
          <Button
            size="sm"
            className={`h-8 gap-1 ${isInUserCart ? "bg-green-600 hover:bg-green-700" : ""}`}
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4" />
            <span>{isInUserCart ? "Added" : "Add"}</span>
          </Button>
        </CardFooter>
      </Card>

      <GameDetailModal game={game} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
