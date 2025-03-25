import { SignupForm } from "@/components/auth/signup-form"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Fish } from "lucide-react"

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 p-4">
      <div className="absolute top-4 left-4">
        <Button variant="ghost" asChild>
          <Link href="/" className="flex items-center space-x-2">
            <Fish className="h-6 w-6 text-primary" />
            <span className="inline-block font-bold">CoralGuard</span>
          </Link>
        </Button>
      </div>

      <div className="absolute top-4 right-4">
        <Button variant="ghost" asChild size="sm">
          <Link href="/quizzes" className="inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Quizzes
          </Link>
        </Button>
      </div>

      <div className="w-full max-w-md">
        <SignupForm />
      </div>
    </div>
  )
}

