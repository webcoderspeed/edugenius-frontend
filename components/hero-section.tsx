"use client"

import { motion } from "framer-motion"
import { SubscribeForm } from "@/components/subscribe-form"
import { Brain, Sparkles, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[40%] -right-[60%] h-[800px] w-[800px] rounded-full bg-purple-200 opacity-20 blur-3xl dark:bg-purple-900"></div>
        <div className="absolute -bottom-[40%] -left-[60%] h-[800px] w-[800px] rounded-full bg-pink-200 opacity-20 blur-3xl dark:bg-pink-900"></div>

        {/* Animated particles */}
        <motion.div
          className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-purple-500"
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 h-3 w-3 rounded-full bg-pink-500"
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-2 w-2 rounded-full bg-purple-500"
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
              >
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                <span>Coming Soon</span>
              </motion.div>
              <motion.h1
                className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  AI-Powered
                </span>{" "}
                Test Generation Platform
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-xl text-muted-foreground md:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Revolutionize education with smart test generation for students, teachers, and parents.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <SubscribeForm />
            </motion.div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center">
                <Zap className="mr-1 h-4 w-4 text-purple-500" />
                <span className="text-sm font-medium">Instant Question Generation</span>
              </div>
              <div className="flex items-center">
                <Brain className="mr-1 h-4 w-4 text-pink-500" />
                <span className="text-sm font-medium">Smart Book Integration</span>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.3,
            }}
          >
            <div className="relative aspect-square w-full max-w-[500px] overflow-hidden rounded-xl border bg-background p-1 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-10"></div>
              <div className="relative h-full w-full overflow-hidden rounded-lg bg-white p-6 dark:bg-gray-950">
                <div className="absolute top-2 right-2 flex space-x-1">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                </div>
                <div className="mt-4 space-y-4">
                  <div className="h-6 w-3/4 rounded bg-gray-200 dark:bg-gray-800"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-800"></div>
                    <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-800"></div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div className="h-8 w-20 rounded-full bg-purple-100 dark:bg-purple-900/30"></div>
                    <div className="h-8 w-24 rounded-full bg-pink-100 dark:bg-pink-900/30"></div>
                    <div className="h-8 w-16 rounded-full bg-purple-100 dark:bg-purple-900/30"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-800"></div>
                    <div className="h-4 w-4/6 rounded bg-gray-200 dark:bg-gray-800"></div>
                  </div>
                  <div className="h-10 w-full rounded bg-purple-500"></div>
                </div>

                {/* Animated typing cursor */}
                <motion.div
                  className="absolute top-[105px] left-[70%] h-4 w-0.5 bg-purple-500"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                />

                {/* Animated AI processing */}
                <motion.div
                  className="absolute bottom-6 left-6 right-6 h-10 overflow-hidden rounded"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <motion.div
                    className="h-full w-full bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{
                      duration: 2,
                      delay: 1.2,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
