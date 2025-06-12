"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { UserAvatar } from "@/components/user-avatar"
import { useAuth } from "@/components/auth-context"
import { GameCard } from "@/components/game-card"
import { games } from "@/lib/data"
import { Calendar, Heart, Library, Settings, Users, ShoppingCart, Trash2 } from "lucide-react"

export default function ProfilePage() {
  const { user, isLoading, logout, clearCart } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading profile...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null // Redirect handled by useEffect
  }

  const joinDate = new Date(user.joinDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const userLibrary = games.filter((game) => user.library.includes(game.id))
  const userWishlist = games.filter((game) => user.wishlist.includes(game.id))
  const userCart = games.filter((game) => user.cart.includes(game.id))

  const cartTotal = userCart.reduce((total, game) => total + game.price, 0)

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <UserAvatar src={user.avatar} username={user.username} size="lg" />
          <div>
            <h1 className="text-3xl font-bold">{user.username}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Joined {joinDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{user.friends} friends</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
          <Button variant="outline" size="sm" onClick={logout}>
            Sign Out
          </Button>
        </div>
      </div>

      <Separator />

      {/* Profile Content */}
      <Tabs defaultValue="library" className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex">
          <TabsTrigger value="library" className="flex items-center gap-2">
            <Library className="h-4 w-4" />
            My Library
          </TabsTrigger>
          <TabsTrigger value="wishlist" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            Wishlist
          </TabsTrigger>
          <TabsTrigger value="cart" className="flex items-center gap-2">
            <ShoppingCart className="h-4 w-4" />
            Cart {user.cart.length > 0 && `(${user.cart.length})`}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="library" className="mt-6">
          {userLibrary.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {userLibrary.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Your library is empty</CardTitle>
                <CardDescription>Games you purchase will appear here</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <a href="/browse">Browse Games</a>
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="wishlist" className="mt-6">
          {userWishlist.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {userWishlist.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Your wishlist is empty</CardTitle>
                <CardDescription>Save games you're interested in for later</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <a href="/browse">Browse Games</a>
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="cart" className="mt-6">
          {userCart.length > 0 ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">Shopping Cart ({userCart.length} items)</h2>
                  <p className="text-muted-foreground">Total: ${cartTotal.toFixed(2)}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={clearCart} className="flex items-center gap-1">
                    <Trash2 className="h-4 w-4" />
                    Clear Cart
                  </Button>
                  <Button size="sm">Checkout</Button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {userCart.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </div>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Your cart is empty</CardTitle>
                <CardDescription>Games you add to cart will appear here</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <a href="/browse">Browse Games</a>
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
