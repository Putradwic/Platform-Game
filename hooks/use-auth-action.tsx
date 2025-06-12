"use client"

import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-context"
import { useToast } from "@/components/ui/use-toast"

export function useAuthAction() {
  const { user } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  const requireAuth = (action: () => void, actionName = "action") => {
    if (user) {
      action()
    } else {
      toast({
        title: "Authentication required",
        description: `Please log in or sign up to ${actionName}`,
        action: (
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => router.push("/login")}
              className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-xs font-medium"
            >
              Log in
            </button>
            <button
              onClick={() => router.push("/signup")}
              className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-xs font-medium"
            >
              Sign up
            </button>
          </div>
        ),
      })
    }
  }

  return { requireAuth }
}
