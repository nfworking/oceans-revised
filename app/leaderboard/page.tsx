import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Facebook, Fish, Globe, Instagram, Twitter, Youtube } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LeaderboardTable } from "@/components/leaderboard/leaderboard-table"

export default function LeaderboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Fish className="h-6 w-6 text-primary" />
              <span className="inline-block font-bold">CoralGuard</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="/#mission"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
              >
                Our Mission
              </Link>
              <Link
                href="/initiatives"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
              >
                Initiatives
              </Link>
              <Link
                href="/impact"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
              >
                Impact
              </Link>
              <Link
                href="/support-us"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
              >
                Support Us
              </Link>
              <Link
                href="/models"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
              >
                3D Models
              </Link>
              <Link
                href="/quizzes"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
              >
                Quizzes
              </Link>
              <Link
                href="/leaderboard"
                className="flex items-center text-sm font-medium text-primary hover:text-primary"
              >
                Leaderboard
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <ThemeToggle />
    
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
          <div className="container px-4 md:px-6">
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/quizzes" className="inline-flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Quizzes
              </Link>
            </Button>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                  Quiz Leaderboard
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  See how your quiz scores compare to other coral reef enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leaderboard Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <LeaderboardTable />
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Test Your Knowledge?</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Take our quizzes to learn more about coral reefs and see if you can make it to the top of the
                  leaderboard.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/quizzes">Take a Quiz</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/models">Explore 3D Models</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <Fish className="h-6 w-6 text-primary" />
                <span className="inline-block font-bold">CoralGuard</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Dedicated to the conservation and restoration of coral reef ecosystems worldwide through research,
                education, and community action.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Our Work</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/initiatives" className="text-muted-foreground hover:text-foreground">
                    Coral Restoration
                  </Link>
                </li>
                <li>
                  <Link href="/initiatives" className="text-muted-foreground hover:text-foreground">
                    Research Projects
                  </Link>
                </li>
                <li>
                  <Link href="/initiatives" className="text-muted-foreground hover:text-foreground">
                    Education Programs
                  </Link>
                </li>
                <li>
                  <Link href="/initiatives" className="text-muted-foreground hover:text-foreground">
                    Policy Initiatives
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Get Involved</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/support-us" className="text-muted-foreground hover:text-foreground">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="/initiatives" className="text-muted-foreground hover:text-foreground">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link href="/support-us" className="text-muted-foreground hover:text-foreground">
                    Partner With Us
                  </Link>
                </li>
                <li>
                  <Link href="/support-us" className="text-muted-foreground hover:text-foreground">
                    Corporate Sponsorship
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/models" className="text-muted-foreground hover:text-foreground">
                    3D Models
                  </Link>
                </li>
                <li>
                  <Link href="/quizzes" className="text-muted-foreground hover:text-foreground">
                    Educational Quizzes
                  </Link>
                </li>
                <li>
                  <Link href="/leaderboard" className="text-muted-foreground hover:text-foreground">
                    Leaderboard
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Research Papers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Annual Reports
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
            <p className="text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} CoralGuard. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Website</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

