import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Facebook, Fish, Globe, Instagram, Twitter, Youtube } from "lucide-react"
import { ParallaxVideo } from "@/components/parallax-video"
import { PillHeader } from "@/components/pill-header"

export default function LandingPage() {
  // Use a reliable video source for testing
  const videoSrc = "/coral-reef-video.mp4"
  const fallbackImage = "/placeholder.svg?height=1080&width=1920"

  return (
    <div className="flex min-h-screen flex-col">
      <PillHeader />

      <main className="flex-1">
        {/* Hero Section with Parallax Video */}
        <ParallaxVideo
          videoSrc={videoSrc}
          fallbackImage={fallbackImage}
          muted={false}
          overlayContent={
            <div className="container px-4 md:px-6 text-center">
              <div className="mx-auto max-w-3xl space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  Protecting Our Coral Reefs
                </h1>
                <p className="max-w-[600px] mx-auto text-white/90 md:text-xl">
                  Join our mission to conserve and restore the world's coral reef ecosystems through research,
                  education, and community action.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center pt-4">
                  <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                    <Link href="/support-us">Donate Now</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                    Learn How to Help
                  </Button>
                </div>
              </div>
            </div>
          }
        />

        {/* Mission Section */}
        <section id="mission" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Mission
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Saving Coral Reefs for Future Generations
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Coral reefs are among the most valuable ecosystems on Earth, but they're under threat. We're working
                  to change that.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2">
              <Image
                src="/placeholder.svg?height=400&width=400"
                width={400}
                height={400}
                alt="Coral Restoration"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              />
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-bold">Why Coral Reefs Matter</h3>
                <p className="text-muted-foreground">
                  Coral reefs support 25% of all marine species, protect coastlines from storms, and provide livelihoods
                  for millions of people worldwide. They're also vital for medicine, food security, and cultural
                  heritage.
                </p>
                <h3 className="text-2xl font-bold">The Crisis</h3>
                <p className="text-muted-foreground">
                  Climate change, pollution, and destructive fishing practices have damaged over 50% of the world's
                  coral reefs. Without action, we could lose 90% of coral reefs by 2050.
                </p>
                <h3 className="text-2xl font-bold">Our Approach</h3>
                <p className="text-muted-foreground">
                  We combine scientific research, community engagement, and policy advocacy to protect and restore coral
                  reef ecosystems around the world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Initiatives Preview Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-950">
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
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Our Key Programs</h3>
                <p className="text-muted-foreground">
                  From coral restoration and scientific research to education programs and policy advocacy, we're taking
                  action on multiple fronts to protect and restore coral reef ecosystems.
                </p>
                <Button asChild>
                  <Link href="/initiatives" className="inline-flex items-center">
                    Explore Our Initiatives <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Image
                src="/placeholder.svg?height=300&width=500"
                width={500}
                height={300}
                alt="Coral Restoration Work"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* Impact Preview Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Impact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Making Real Change</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our work has made a significant difference in coral reef conservation around the world.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2">
              <Image
                src="/placeholder.svg?height=300&width=500"
                width={500}
                height={300}
                alt="Coral Reef Conservation"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Measurable Results</h3>
                <p className="text-muted-foreground">
                  From establishing marine protected areas to growing thousands of coral fragments, our work is creating
                  tangible positive outcomes for coral reef ecosystems and the communities that depend on them.
                </p>
                <Button asChild>
                  <Link href="/impact" className="inline-flex items-center">
                    See Our Impact <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Support Us Preview Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Support Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Join Our Conservation Efforts</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Your support makes our work possible. Choose how you'd like to contribute.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Ways to Support</h3>
                <p className="text-muted-foreground">
                  Whether through monthly donations, volunteering, or corporate partnerships, there are many ways to
                  support our mission to protect and restore coral reef ecosystems.
                </p>
                <Button asChild>
                  <Link href="/support-us" className="inline-flex items-center">
                    Support Our Work <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Image
                src="/placeholder.svg?height=300&width=500"
                width={500}
                height={300}
                alt="Coral Reef Support"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* 3D Models Preview Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Interactive Experience
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Explore Our 3D Models</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Discover the beauty and complexity of coral reef ecosystems through our interactive 3D models.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2">
              <Image
                src="/placeholder.svg?height=300&width=500"
                width={500}
                height={300}
                alt="3D Models Preview"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Interactive Learning</h3>
                <p className="text-muted-foreground">
                  Explore detailed 3D models of coral species, marine life, and reef ecosystems. Rotate, zoom, and
                  interact with these models to gain a deeper understanding of these fascinating organisms.
                </p>
                <Button asChild>
                  <Link href="/models" className="inline-flex items-center">
                    View 3D Models <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Make a Difference?</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join our global community of coral reef conservationists and help protect these vital ecosystems.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/support-us">Donate Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/initiatives">Volunteer With Us</Link>
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

