import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Facebook, Fish, Globe, Instagram, Twitter, Youtube } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function InitiativesPage() {
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
                className="flex items-center text-sm font-medium text-primary hover:text-primary"
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
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                    Our Initiatives
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover the comprehensive programs and projects we're implementing to protect and restore coral
                    reef ecosystems worldwide.
                  </p>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Coral Reef Initiatives"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Initiatives Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Initiatives
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How We're Making a Difference</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our comprehensive approach addresses the multiple threats facing coral reefs today.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Coral Restoration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Growing and transplanting resilient coral species to rebuild damaged reef ecosystems.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Scientific Research</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Studying coral resilience, disease prevention, and innovative conservation techniques.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Education Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Raising awareness through school programs, community workshops, and digital resources.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Policy Advocacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Working with governments and organizations to implement reef-friendly policies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Coral Restoration Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 md:grid-cols-2">
              <Image
                src="/placeholder.svg?height=400&width=400"
                width={400}
                height={400}
                alt="Coral Restoration"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              />
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-bold">Coral Restoration</h3>
                <p className="text-muted-foreground">
                  Our coral restoration program focuses on growing and transplanting resilient coral species to rebuild
                  damaged reef ecosystems. We operate coral nurseries in key locations around the world.
                </p>
                <h4 className="text-xl font-semibold">Key Activities:</h4>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Maintaining underwater coral nurseries</li>
                  <li>Identifying and propagating resilient coral species</li>
                  <li>Transplanting mature coral fragments to degraded reef areas</li>
                  <li>Monitoring transplant success and reef health</li>
                  <li>Training local communities in restoration techniques</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Scientific Research Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 md:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-bold">Scientific Research</h3>
                <p className="text-muted-foreground">
                  Our research program investigates coral resilience, disease prevention, and innovative conservation
                  techniques. We collaborate with leading marine scientists and institutions worldwide.
                </p>
                <h4 className="text-xl font-semibold">Current Research Focus:</h4>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Identifying heat-resistant coral genotypes</li>
                  <li>Developing methods to combat coral diseases</li>
                  <li>Studying the impacts of ocean acidification</li>
                  <li>Testing innovative reef restoration techniques</li>
                  <li>Mapping and monitoring reef health using advanced technology</li>
                </ul>
              </div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                width={400}
                height={400}
                alt="Scientific Research"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover md:order-first"
              />
            </div>
          </div>
        </section>

        {/* Education Programs Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-950">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 md:grid-cols-2">
              <Image
                src="/placeholder.svg?height=400&width=400"
                width={400}
                height={400}
                alt="Education Programs"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              />
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-bold">Education Programs</h3>
                <p className="text-muted-foreground">
                  Our education initiatives raise awareness about coral reef conservation through school programs,
                  community workshops, and digital resources. We believe education is key to long-term conservation
                  success.
                </p>
                <h4 className="text-xl font-semibold">Education Initiatives:</h4>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>K-12 coral reef curriculum development</li>
                  <li>Virtual reef field trips for classrooms</li>
                  <li>Community workshops in coastal areas</li>
                  <li>Digital learning resources and interactive tools</li>
                  <li>Training programs for eco-tourism operators</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Advocacy Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 md:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-bold">Policy Advocacy</h3>
                <p className="text-muted-foreground">
                  Our policy team works with governments and organizations to implement reef-friendly policies. We
                  advocate for stronger protections for coral reef ecosystems at local, national, and international
                  levels.
                </p>
                <h4 className="text-xl font-semibold">Policy Priorities:</h4>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Expanding marine protected areas</li>
                  <li>Reducing plastic pollution in oceans</li>
                  <li>Promoting sustainable fishing practices</li>
                  <li>Advocating for climate change mitigation</li>
                  <li>Supporting sustainable coastal development regulations</li>
                </ul>
              </div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                width={400}
                height={400}
                alt="Policy Advocacy"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover md:order-first"
              />
            </div>
          </div>
        </section>

        {/* Volunteer Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Volunteer With Us</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Join our global network of volunteers and make a direct impact on coral reef conservation.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Volunteer Opportunities</h3>
                <p className="text-muted-foreground">
                  We offer a variety of volunteer opportunities for people of all backgrounds and skill levels. Whether
                  you're a diver, scientist, educator, or simply passionate about coral reefs, there's a place for you
                  in our community.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Coral nursery maintenance and monitoring</li>
                  <li>Community education and outreach</li>
                  <li>Citizen science data collection</li>
                  <li>Beach and reef cleanups</li>
                  <li>Administrative and technical support</li>
                </ul>
                <Button size="lg" className="mt-4">
                  Apply to Volunteer
                </Button>
              </div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                width={400}
                height={400}
                alt="Volunteers"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Get Involved?</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join our initiatives and help us protect coral reef ecosystems for future generations.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/support-us">Support Our Work</Link>
                </Button>
                <Button size="lg" variant="outline">
                  Contact Us
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
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Blog
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

