import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Facebook, Fish, Globe, Instagram, Twitter, Youtube } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { getModelById, models } from "@/data/models"
import { ModelViewer } from "@/components/model-viewer"
import { Badge } from "@/components/ui/badge"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return models.map((model) => ({
    id: model.id,
  }))
}

export default function ModelDetailPage({ params }: { params: { id: string } }) {
  const model = getModelById(params.id)

  if (!model) {
    notFound()
  }

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
        <div className="container px-4 py-8 md:py-12">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/models" className="inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Models
            </Link>
          </Button>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h1 className="text-3xl font-bold mb-2">{model.name}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {model.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-muted-foreground mb-6">{model.description}</p>

              <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg mb-6">
                <h2 className="text-xl font-bold mb-4">About {model.name}</h2>
                <p className="text-muted-foreground mb-4">
                  {model.category === "coral" &&
                    "Corals are marine invertebrates that live in compact colonies of many identical individual polyps. They are the architects of coral reefs, which are some of the most diverse ecosystems on Earth."}
                  {model.category === "marine-life" &&
                    "Marine life is incredibly diverse, from the smallest plankton to the largest whales. These creatures play vital roles in maintaining the health and balance of ocean ecosystems."}
                  {model.category === "ecosystem" &&
                    "Coral reef ecosystems are complex, interconnected communities of organisms that interact with each other and their environment. They are among the most biodiverse habitats on the planet."}
                </p>
                <p className="text-muted-foreground">
                  {model.category === "coral" &&
                    "Coral reefs face numerous threats including climate change, ocean acidification, pollution, and destructive fishing practices. Conservation efforts are crucial to protect these fragile ecosystems."}
                  {model.category === "marine-life" &&
                    "Many marine species are threatened by human activities such as overfishing, habitat destruction, and pollution. Understanding these creatures is the first step toward protecting them."}
                  {model.category === "ecosystem" &&
                    "Healthy coral reef ecosystems provide essential services including coastal protection, food security, and economic benefits through tourism and fisheries."}
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold">Conservation Status</h2>
                <p className="text-muted-foreground">
                  {model.tags.includes("endangered")
                    ? "This species is currently listed as endangered. Its population has declined significantly due to various threats including climate change, habitat loss, and human activities."
                    : "While not currently listed as endangered, this species faces numerous threats and requires ongoing conservation efforts to ensure its survival."}
                </p>
                <Button asChild>
                  <Link href="/initiatives">Learn About Our Conservation Efforts</Link>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <ModelViewer model={model} />
              <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Interactive Features</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Click and drag to rotate the model</li>
                  <li>• Use the scroll wheel to zoom in and out</li>
                  <li>• Use the control buttons for quick actions</li>
                  <li>• The model automatically rotates for a better view</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Models Section */}
        <section className="w-full py-12 md:py-24 bg-blue-50 dark:bg-blue-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Explore More Models</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Discover our collection of interactive 3D models showcasing the beauty and diversity of marine life.
                </p>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <Button size="lg" asChild>
                <Link href="/models">View All Models</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Help Protect Marine Life</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Your support helps us continue our conservation efforts and develop more educational resources.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/support-us">Donate Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/initiatives">Get Involved</Link>
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

