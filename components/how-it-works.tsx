"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { FileUp, Sparkles, Wand2 } from "lucide-react"

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  const steps = [
    {
      icon: <FileUp className="h-8 w-8" />,
      title: "Upload Content",
      description: "Upload textbooks, PDFs, or select topics for question generation",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Wand2 className="h-8 w-8" />,
      title: "AI Processing",
      description: "Our advanced AI analyzes content and generates customized questions",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Instant Results",
      description: "Get ready-to-use tests, summaries, and learning materials",
      color: "from-amber-500 to-orange-500",
    },
  ]

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden py-20 md:py-32 bg-gray-50 dark:bg-gray-900/50"
      ref={containerRef}
    >
      <div className="container px-4 md:px-6">
        <motion.div
          style={{ opacity, y }}
          className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
        >
          <h2 className="font-heading text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">
            How EduGenius{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Transform your educational content into interactive learning materials in three simple steps
          </p>
        </motion.div>

        <div className="relative mt-16 grid gap-6 md:grid-cols-3">
          {/* Connecting line */}
          <div className="absolute top-12 left-0 right-0 hidden h-0.5 md:block">
            <div className="mx-auto h-full w-4/5 bg-gradient-to-r from-purple-200 via-pink-200 to-amber-200 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-amber-900/30"></div>
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              <div
                className={`relative mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${step.color} text-white shadow-lg`}
              >
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-white/20 to-white/5 blur-sm"></div>
                {step.icon}
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-50"></div>
              </div>
              <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <div className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-xl border bg-background shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5"></div>
            <div className="absolute top-0 left-0 right-0 h-12 border-b bg-muted/50 backdrop-blur-sm">
              <div className="flex h-full items-center px-4">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto flex h-6 w-1/2 items-center justify-center rounded-full bg-muted">
                  <span className="text-xs text-muted-foreground">edugenius.ai</span>
                </div>
              </div>
            </div>
            <div className="flex h-full items-center justify-center pt-12">
              <div className="space-y-8 p-8">
                <div className="mx-auto h-8 w-3/4 rounded-lg bg-muted"></div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2 rounded-lg border p-4">
                    <div className="h-4 w-1/2 rounded bg-muted"></div>
                    <div className="h-20 rounded bg-muted"></div>
                  </div>
                  <div className="space-y-2 rounded-lg border p-4">
                    <div className="h-4 w-1/2 rounded bg-muted"></div>
                    <div className="h-20 rounded bg-muted"></div>
                  </div>
                </div>
                <div className="mx-auto h-10 w-1/3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
