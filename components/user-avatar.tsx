import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserAvatarProps {
  src?: string
  username?: string
  size?: "sm" | "md" | "lg"
}

export function UserAvatar({ src, username, size = "md" }: UserAvatarProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-20 w-20",
  }

  const getFallbackInitial = (name?: string) => {
    if (!name) return "U"
    return name.charAt(0).toUpperCase()
  }

  return (
    <Avatar className={sizeClasses[size]}>
      <AvatarImage src={src || "/placeholder.svg"} alt={username || "User"} />
      <AvatarFallback className="bg-primary/10">{getFallbackInitial(username)}</AvatarFallback>
    </Avatar>
  )
}
