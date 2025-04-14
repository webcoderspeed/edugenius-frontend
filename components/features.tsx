"use client"

import { motion } from "framer-motion"
import {
  School,
  LineChart,
  Sparkles,
  Layers,
  Upload,
  BookMarked,
  FileQuestion,
  Timer,
  Printer,
  Share2,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: <FileQuestion className="h-10 w-10" />,
    title: "AI Question Generation",
    description: "Generate 20+ question types from any topic or subject",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: <Layers className="h-10 w-10" />,
    title: "Multiple Formats",
    description: "Fill-in-blanks, MCQs, match-the-following, and more",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <Upload className="h-10 w-10" />,
    title: "Book Integration",
    description: "Upload PDFs or images to extract content automatically",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <BookMarked className="h-10 w-10" />,
    title: "Smart Summaries",
    description: "Generate notes, flashcards, and practice questions",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: <Timer className="h-10 w-10" />,
    title: "Test Player",
    description: "Timed tests with auto-save and navigation features",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Printer className="h-10 w-10" />,
    title: "Print & Share",
    description: "Save as PDF or print tests for offline practice",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: <School className="h-10 w-10" />,
    title: "Institution Management",
    description: "Support for schools with multiple branches and teachers",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: <LineChart className="h-10 w-10" />,
    title: "Progress Analytics",
    description: "Track performance with detailed insights and reports",
    color: "from-teal-500 to-green-500",
  },
  {
    icon: <Share2 className="h-10 w-10" />,
    title: "Collaboration",
    description: "Share tests and results between teachers, students & parents",
    color: "from-fuchsia-500 to-purple-500",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden py-20 md:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <div className="inline-flex items-center rounded-md bg-muted px-3 py-1 text-sm font-medium">
              <Sparkles className="mr-1 h-3.5 w-3.5" />
              <span>Cutting-Edge Features</span>
            </div>
            <h2 className="font-heading text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">
              Powered by Advanced{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                AI Technology
              </span>
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mx-auto">
              EduGenius combines artificial intelligence with educational expertise to deliver a revolutionary learning
              experience
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item} className="group">
              <Card className="relative h-full overflow-hidden border-none bg-background transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                ></div>
                <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${feature.color}`}></div>
                <CardContent className="p-6">
                  <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${feature.color} p-2.5 text-white`}>
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
