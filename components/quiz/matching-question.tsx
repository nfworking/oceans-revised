"use client"

import { useState } from "react"
import type { QuizQuestion } from "@/types/quiz"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, ArrowRight } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface MatchingQuestionProps {
  question: QuizQuestion
  onAnswer: (isCorrect: boolean) => void
}

export function MatchingQuestion({ question, onAnswer }: MatchingQuestionProps) {
  const [matches, setMatches] = useState<Record<string, string>>({})
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  // Extract items and their descriptions from correctAnswer
  const correctMatches = (question.correctAnswer as string[]).reduce(
    (acc, match) => {
      const [item, description] = match.split(" - ")
      return { ...acc, [item]: description }
    },
    {} as Record<string, string>,
  )

  const items = Object.keys(correctMatches)
  const descriptions = Object.values(correctMatches)

  const handleSubmit = () => {
    // Check if all items have been matched
    if (Object.keys(matches).length !== items.length) return

    // Check if all matches are correct
    const allCorrect = items.every((item) => matches[item] === correctMatches[item])
    setIsCorrect(allCorrect)
    setHasSubmitted(true)
    onAnswer(allCorrect)
  }

  const handleSelectChange = (item: string, description: string) => {
    setMatches((prev) => ({
      ...prev,
      [item]: description,
    }))
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">{question.question}</h3>

      {question.imageUrl && (
        <div className="relative h-48 w-full overflow-hidden rounded-lg">
          <img
            src={question.imageUrl || "/placeholder.svg"}
            alt="Question illustration"
            className="object-cover w-full h-full"
          />
        </div>
      )}

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <div className="font-medium min-w-[120px]">{item}</div>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
            <Select
              disabled={hasSubmitted}
              onValueChange={(value) => handleSelectChange(item, value)}
              value={matches[item] || ""}
            >
              <SelectTrigger className="flex-1">
                <SelectValue placeholder="Select a match" />
              </SelectTrigger>
              <SelectContent>
                {descriptions.map((description) => (
                  <SelectItem key={description} value={description}>
                    {description}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {hasSubmitted &&
              (matches[item] === correctMatches[item] ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : (
                <XCircle className="h-5 w-5 text-red-500" />
              ))}
          </div>
        ))}
      </div>

      {hasSubmitted ? (
        <div className={`p-4 rounded-lg ${isCorrect ? "bg-green-50 dark:bg-green-950" : "bg-red-50 dark:bg-red-950"}`}>
          <p
            className={`font-medium ${isCorrect ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
          >
            {isCorrect ? "Correct!" : "Incorrect!"}
          </p>
          <p className="mt-2">{question.explanation}</p>

          {!isCorrect && (
            <div className="mt-4">
              <p className="font-medium">Correct matches:</p>
              <ul className="mt-2 space-y-1">
                {(question.correctAnswer as string[]).map((match) => (
                  <li key={match}>{match}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <Button onClick={handleSubmit} disabled={Object.keys(matches).length !== items.length} className="w-full">
          Submit Answer
        </Button>
      )}
    </div>
  )
}

