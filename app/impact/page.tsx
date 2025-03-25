import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Facebook, Fish, Globe, Instagram, Twitter, Youtube } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ImpactPage() {
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
              <Link href="/impact" className="flex items-center text-sm font-medium text-primary hover:text-primary">
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
                    Our Impact
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    See how our work is making a real difference for coral reef ecosystems and the communities that
                    depend on them.
                  </p>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Coral Reef Impact"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Impact Overview Section */}
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
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-2 p-6 bg-blue-50 rounded-lg">
                <span className="text-5xl font-bold text-primary">50+</span>
                <p className="text-muted-foreground">Coral restoration sites established worldwide</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-6 bg-blue-50 rounded-lg">
                <span className="text-5xl font-bold text-primary">10,000+</span>
                <p className="text-muted-foreground">Coral fragments grown and transplanted</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-6 bg-blue-50 rounded-lg">
                <span className="text-5xl font-bold text-primary">500,000+</span>
                <p className="text-muted-foreground">Acres of marine habitat protected</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Partner Perspectives</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Hear from our partners about the impact of our collaborative work.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Marine Protected Areas</CardTitle>
                  <CardDescription>Caribbean Conservation Trust</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "CoralGuard's support was instrumental in establishing three new marine protected areas, covering
                    over 500,000 acres of critical reef habitat."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Coral Nurseries</CardTitle>
                  <CardDescription>Pacific Marine Initiative</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "With CoralGuard's technical expertise, we've successfully grown and transplanted over 10,000 coral
                    fragments, with a 85% survival rate."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Community Engagement</CardTitle>
                  <CardDescription>Coastal Communities Alliance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "CoralGuard's education programs have reached over 50,000 students and community members, creating a
                    new generation of reef stewards."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Case Studies
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Success Stories</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Explore some of our most impactful conservation projects.
                </p>
              </div>
            </div>

            {/* Case Study 1 */}
            <div className="mx-auto max-w-5xl py-12">
              <div className="grid gap-6 md:grid-cols-2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Belize Barrier Reef"
                  className="aspect-video overflow-hidden rounded-xl object-cover"
                />
                <div className="flex flex-col space-y-4">
                  <h3 className="text-2xl font-bold">Belize Barrier Reef Restoration</h3>
                  <p className="text-muted-foreground">
                    Our work in Belize has helped restore over 5 acres of damaged reef habitat through innovative coral
                    gardening techniques and community involvement.
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Key Achievements:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Established 3 coral nurseries with 5,000+ coral fragments</li>
                      <li>Trained 25 local community members in restoration techniques</li>
                      <li>Increased fish biodiversity by 40% in restored areas</li>
                      <li>Helped secure protected status for 30,000 acres of reef</li>
                    </ul>
                  </div>
                  <Button variant="outline">Read Full Case Study</Button>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="mx-auto max-w-5xl py-12 border-t">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col space-y-4">
                  <h3 className="text-2xl font-bold">Great Barrier Reef Climate Resilience</h3>
                  <p className="text-muted-foreground">
                    Our research and advocacy work has contributed to improved protection and management practices for
                    Australia's Great Barrier Reef.
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Key Achievements:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Identified 12 heat-resistant coral species for restoration</li>
                      <li>Developed new techniques for large-scale coral propagation</li>
                      <li>Contributed research to national reef protection policies</li>
                      <li>Established citizen science monitoring program with 500+ participants</li>
                    </ul>
                  </div>
                  <Button variant="outline">Read Full Case Study</Button>
                </div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Great Barrier Reef"
                  className="aspect-video overflow-hidden rounded-xl object-cover md:order-first"
                />
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="mx-auto max-w-5xl py-12 border-t">
              <div className="grid gap-6 md:grid-cols-2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Indonesia Community Program"
                  className="aspect-video overflow-hidden rounded-xl object-cover"
                />
                <div className="flex flex-col space-y-4">
                  <h3 className="text-2xl font-bold">Indonesia Community Conservation</h3>
                  <p className="text-muted-foreground">
                    Our community-based conservation program in Indonesia has empowered local communities to protect
                    their coral reefs while developing sustainable livelihoods.
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Key Achievements:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Trained 100+ community members in sustainable fishing practices</li>
                      <li>Established locally managed marine protected area covering 75,000 acres</li>
                      <li>Developed eco-tourism program creating 30+ local jobs</li>
                      <li>Reduced destructive fishing practices by 80% in target areas</li>
                    </ul>
                  </div>
                  <Button variant="outline">Read Full Case Study</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Annual Reports Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Transparency
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Annual Reports</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  We're committed to transparency and accountability in all our work.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <CardTitle>2023 Annual Report</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our most recent annual report detailing our conservation achievements, financial information, and
                    future plans.
                  </p>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button variant="outline" className="w-full">
                    Download PDF
                  </Button>
                </div>
              </Card>
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <CardTitle>2022 Annual Report</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A comprehensive overview of our work in 2022, including project outcomes and financial statements.
                  </p>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button variant="outline" className="w-full">
                    Download PDF
                  </Button>
                </div>
              </Card>
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <CardTitle>2021 Annual Report</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A detailed report on our conservation initiatives, partnerships, and financial performance in 2021.
                  </p>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button variant="outline" className="w-full">
                    Download PDF
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Help Us Make an Even Bigger Impact</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Your support enables us to expand our conservation efforts and protect more coral reefs.
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

