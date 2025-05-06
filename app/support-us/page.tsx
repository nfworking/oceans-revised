import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Facebook, Fish, Globe, Instagram, Twitter, Youtube } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ThemeToggle } from "@/components/theme-toggle"

export default function SupportUsPage() {
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
                className="flex items-center text-sm font-medium text-primary hover:text-primary"
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
              <Button size="sm">Donate Now</Button>
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
                    Support Our Mission
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Your support makes our work possible. Join us in protecting and restoring coral reef ecosystems
                    around the world.
                  </p>
                </div>
              </div>
              <Image
                src="/s.jpg"
                width={550}
                height={550}
                alt="Coral Reef Support"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Corporate Partnerships Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Partnerships
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Corporate Partnerships</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Partner with us to make a significant impact on coral reef conservation while enhancing your corporate
                  social responsibility.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Partnership Benefits</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Customized partnership opportunities aligned with your brand values</li>
                  <li>Employee engagement and volunteer opportunities</li>
                  <li>Brand visibility on our website, reports, and events</li>
                  <li>Impact reporting and storytelling opportunities</li>
                  <li>Tax benefits for charitable contributions</li>
                </ul>
                <Button className="mt-4">Contact Our Partnership Team</Button>
              </div>
              <Image
                src="/s1.jpg"
                width={400}
                height={400}
                alt="Corporate Partnership"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* Other Ways to Support Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Get Involved
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Other Ways to Support</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  There are many ways to contribute to our mission beyond financial donations.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Volunteer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Join our global network of volunteers and contribute your time and skills to coral reef conservation
                    efforts.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/initiatives">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Fundraise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Start your own fundraising campaign for CoralGuard. Perfect for birthdays, special events, or
                    community initiatives.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Start a Campaign
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Spread Awareness</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Share our mission with your network. Follow us on social media and help spread the word about coral
                    reef conservation.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Follow & Share
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Contact Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get in Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Have questions about supporting our work? We're here to help.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-2xl py-12">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Our Support Team</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium">
                          First Name
                        </label>
                        <Input id="first-name" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium">
                          Last Name
                        </label>
                        <Input id="last-name" placeholder="Enter your last name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input id="subject" placeholder="Enter the subject" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Enter your message" rows={5} />
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Send Message</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Join Us in Protecting Coral Reefs</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Together, we can ensure that coral reefs continue to thrive for generations to come.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">Donate Now</Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/initiatives">Learn More</Link>
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

