import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeScript } from "./theme-script"
import { HeadScript } from "./head-script"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CoralGuard - Protecting Our Coral Reefs",
  description:
    "Join our mission to conserve and restore the world's coral reef ecosystems through research, education, and community action.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadScript />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ThemeScript />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'