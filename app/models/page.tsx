import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Facebook, Fish, Globe, Instagram, Twitter, Youtube } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { models, getModelsByCategory } from "@/data/models"
import { ModelCard } from "@/components/model-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ModelsPage() {
  const coralModels = getModelsByCategory("coral")
  const marineLifeModels = getModelsByCategory("marine-life")
  const ecosystemModels = getModelsByCategory("ecosystem")

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
              <Link href="/models" className="flex items-center text-sm font-medium text-primary hover:text-primary">
                3D Models
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <ThemeToggle />
            <nav className="flex items-center space-x-1">
              <Button variant="ghost" size="sm">
                Learn More
              </Button>
              <Button size="sm" asChild>
                <Link href="/support-us">Donate Now</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
          <div className="container px-4 md:px-6">
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/" className="inline-flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </Button>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                  Interactive 3D Models
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Explore our collection of 3D models showcasing coral species, marine life, and reef ecosystems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Models Showcase Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="all">All Models</TabsTrigger>
                  <TabsTrigger value="coral">Coral Species</TabsTrigger>
                  <TabsTrigger value="marine-life">Marine Life</TabsTrigger>
                  <TabsTrigger value="ecosystem">Ecosystems</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {models.map((model) => (
                    <ModelCard key={model.id} model={model} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="coral" className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {coralModels.map((model) => (
                    <ModelCard key={model.id} model={model} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="marine-life" className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {marineLifeModels.map((model) => (
                    <ModelCard key={model.id} model={model} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="ecosystem" className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {ecosystemModels.map((model) => (
                    <ModelCard key={model.id} model={model} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Educational Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Educational Resources
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Learn About Coral Reefs</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our 3D models are designed to help you understand and appreciate the complexity and beauty of coral
                  reef ecosystems.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Educational Use</h3>
                <p className="text-muted-foreground">
                  These 3D models are available for educational purposes. Teachers, students, and researchers are
                  welcome to use them in classrooms, presentations, and research projects.
                </p>
                <h3 className="text-2xl font-bold">Interactive Learning</h3>
                <p className="text-muted-foreground">
                  Interact with our models to explore the intricate structures of coral species, understand marine life
                  anatomy, and visualize complex reef ecosystems.
                </p>
                <Button className="mt-4">Download Educational Materials</Button>
              </div>
              <div className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold">Did You Know?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • Coral reefs cover less than 1% of the ocean floor but support about 25% of all marine species
                  </li>
                  <li>• A single coral colony can consist of thousands of individual polyps</li>
                  <li>• Some coral species can live for hundreds or even thousands of years</li>
                  <li>• Coral reefs are sometimes called "the rainforests of the sea" due to their biodiversity</li>
                  <li>• Coral polyps have a symbiotic relationship with algae called zooxanthellae</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Help Protect These Amazing Creatures
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Your support helps us continue our conservation efforts and develop more educational resources.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/support-us">Donate Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/initiatives">Learn About Our Work</Link>
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
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Research Papers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Educational Materials
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

