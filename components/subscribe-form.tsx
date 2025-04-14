"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Loader2, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export function SubscribeForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubscribed(true)
      setEmail("")
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to EduGenius. We'll notify you when we launch!",
      })
    }, 1500)

    // In a real implementation, you would send the email to your API
    // try {
    //   const response = await fetch('/api/subscribe', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email }),
    //   })
    //   const data = await response.json()
    //   if (!response.ok) throw new Error(data.message || 'Something went wrong')
    //   setIsSubscribed(true)
    //   setEmail("")
    //   toast({
    //     title: "Subscription successful!",
    //     description: "Thank you for subscribing to EduGenius. We'll notify you when we launch!",
    //   })
    // } catch (error) {
    //   toast({
    //     title: "Something went wrong",
    //     description: error.message,
    //     variant: "destructive",
    //   })
    // } finally {
    //   setIsLoading(false)
    // }
  }

  return (
    <div className="w-full space-y-4">
      {!isSubscribed ? (
        <motion.form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-2 sm:flex-row"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative flex-1">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 pr-12 shadow-sm"
              required
            />
            <div className="absolute right-3 top-0 flex h-full items-center text-muted-foreground">@</div>
          </div>
          <Button type="submit" className="h-12 px-8 shadow-sm" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Subscribing...
              </>
            ) : (
              "Join Waitlist"
            )}
          </Button>
        </motion.form>
      ) : (
        <motion.div
          className="rounded-lg border border-green-200 bg-green-50 p-4 text-green-800 dark:border-green-900 dark:bg-green-900/20 dark:text-green-400"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="h-5 w-5" />
            <p className="font-medium">Thank you for subscribing! We'll notify you when we launch.</p>
          </div>
        </motion.div>
      )}
      <p className="text-xs text-muted-foreground">
        By subscribing, you agree to receive emails from EduGenius. We'll never share your email with anyone else.
      </p>
    </div>
  )
}
