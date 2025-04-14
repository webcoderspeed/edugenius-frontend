"use client"

import { motion } from "framer-motion"
import { SubscribeForm } from "@/components/subscribe-form"

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>

        {/* Animated background elements */}
        <motion.div
          className="absolute -top-[30%] -right-[30%] h-[500px] w-[500px] rounded-full bg-purple-200 opacity-20 blur-3xl dark:bg-purple-900"
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute -bottom-[30%] -left-[30%] h-[500px] w-[500px] rounded-full bg-pink-200 opacity-20 blur-3xl dark:bg-pink-900"
          animate={{
            y: [0, 20, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        ></motion.div>
      </div>

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
        >
          <div className="inline-flex items-center rounded-full border border-purple-200 bg-white px-4 py-1.5 text-sm font-medium dark:border-purple-800 dark:bg-gray-950">
            <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
            Limited Early Access Coming Soon
          </div>
          <h2 className="font-heading text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">
            Be Among the First to{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Experience EduGenius
            </span>
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Join our waitlist today and revolutionize the way you create, assign, and analyze educational tests
          </p>

          <div className="w-full max-w-md pt-4">
            <SubscribeForm />
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-pink-500 to-orange-500"></div>
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500"></div>
              </div>
              <span className="text-sm text-muted-foreground">Join 500+ early adopters</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 text-yellow-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">Rated 4.9/5 by beta testers</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
