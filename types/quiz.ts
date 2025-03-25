export type QuizType = "multiple-choice" | "true-false" | "matching" | "scenario"

export interface QuizQuestion {
  id: string
  question: string
  type: QuizType
  options?: string[]
  correctAnswer: string | string[]
  explanation: string
  imageUrl?: string
}

export interface Quiz {
  id: string
  title: string
  description: string
  difficulty: "easy" | "medium" | "hard"
  questions: QuizQuestion[]
  imageUrl?: string
}

