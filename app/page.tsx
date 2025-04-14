import Link from "next/link"
import { Features } from "@/components/features"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { HowItWorks } from "@/components/how-it-works"
import { UserRoles } from "@/components/user-roles"
import { FinalCTA } from "@/components/final-cta"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
                <span className="text-white font-bold">E</span>
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-50 blur-sm"></div>
              </div>
              <span className="inline-block font-bold text-xl">EduGenius</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link href="#features" className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary">
                Features
              </Link>
              <Link href="#how-it-works" className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary">
                How It Works
              </Link>
              <Link href="#roles" className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary">
                For Users
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />
        <Features />
        <HowItWorks />
        <UserRoles />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
