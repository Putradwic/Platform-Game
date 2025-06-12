"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useToast } from "@/components/ui/use-toast"

type User = {
  id: string
  username: string
  email: string
  avatar?: string
  joinDate: string
  library: number[]
  wishlist: number[]
  cart: number[]
  friends: number
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (username: string, email: string, password: string) => Promise<void>
  logout: () => void
  addToWishlist: (gameId: number) => void
  removeFromWishlist: (gameId: number) => void
  isInWishlist: (gameId: number) => boolean
  addToCart: (gameId: number) => void
  removeFromCart: (gameId: number) => void
  isInCart: (gameId: number) => boolean
  clearCart: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("gameHubUser")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  // Save user data to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("gameHubUser", JSON.stringify(user))
    }
  }, [user])

  // Mock login function
  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock user data
      const mockUser: User = {
        id: "user123",
        username: email.split("@")[0],
        email,
        avatar: "/placeholder.svg?height=200&width=200",
        joinDate: new Date().toISOString(),
        library: [1, 2, 5, 9],
        wishlist: [3, 6, 11],
        cart: [4, 7, 10],
        friends: 12,
      }

      setUser(mockUser)
      localStorage.setItem("gameHubUser", JSON.stringify(mockUser))
    } catch (error) {
      console.error("Login failed:", error)
      throw new Error("Invalid email or password")
    } finally {
      setIsLoading(false)
    }
  }

  // Mock signup function
  const signup = async (username: string, email: string, password: string) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock user data
      const mockUser: User = {
        id: "user" + Math.floor(Math.random() * 1000),
        username,
        email,
        avatar: "/placeholder.svg?height=200&width=200",
        joinDate: new Date().toISOString(),
        library: [],
        wishlist: [],
        cart: [],
        friends: 0,
      }

      setUser(mockUser)
      localStorage.setItem("gameHubUser", JSON.stringify(mockUser))
    } catch (error) {
      console.error("Signup failed:", error)
      throw new Error("Signup failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  // Logout function
  const logout = () => {
    setUser(null)
    localStorage.removeItem("gameHubUser")
  }

  // Wishlist functions
  const addToWishlist = (gameId: number) => {
    if (!user) return

    if (!user.wishlist.includes(gameId)) {
      const updatedUser = {
        ...user,
        wishlist: [...user.wishlist, gameId],
      }
      setUser(updatedUser)
      toast({
        title: "Added to wishlist",
        description: "Game has been added to your wishlist",
      })
    }
  }

  const removeFromWishlist = (gameId: number) => {
    if (!user) return

    const updatedUser = {
      ...user,
      wishlist: user.wishlist.filter((id) => id !== gameId),
    }
    setUser(updatedUser)
    toast({
      title: "Removed from wishlist",
      description: "Game has been removed from your wishlist",
    })
  }

  const isInWishlist = (gameId: number) => {
    return user ? user.wishlist.includes(gameId) : false
  }

  // Cart functions
  const addToCart = (gameId: number) => {
    if (!user) return

    if (!user.cart.includes(gameId)) {
      const updatedUser = {
        ...user,
        cart: [...user.cart, gameId],
      }
      setUser(updatedUser)
      toast({
        title: "Added to cart",
        description: "Game has been added to your cart",
      })
    }
  }

  const removeFromCart = (gameId: number) => {
    if (!user) return

    const updatedUser = {
      ...user,
      cart: user.cart.filter((id) => id !== gameId),
    }
    setUser(updatedUser)
    toast({
      title: "Removed from cart",
      description: "Game has been removed from your cart",
    })
  }

  const isInCart = (gameId: number) => {
    return user ? user.cart.includes(gameId) : false
  }

  const clearCart = () => {
    if (!user) return

    const updatedUser = {
      ...user,
      cart: [],
    }
    setUser(updatedUser)
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
    })
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        signup,
        logout,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        addToCart,
        removeFromCart,
        isInCart,
        clearCart,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
