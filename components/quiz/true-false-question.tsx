"use client"

import { useState } from "react"
import type { QuizQuestion } from "@/types/quiz"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle } from "lucide-react"

interface TrueFalseQuestionProps {
  question: QuizQuestion
  onAnswer: (isCorrect: boolean) => void
}

export function TrueFalseQuestion({ question, onAnswer }: TrueFalseQuestionProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const isCorrect = selectedOption === question.correctAnswer

  const handleSubmit = () => {
    if (!selectedOption) return;
    setHasSubmitted(true);
    onAnswer(selectedOption === question.correctAnswer);
  };

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

      <div className="grid grid-cols-2 gap-4">
        {question.options?.map((option) => (
          <Button
            key={option}
            variant={
              !hasSubmitted
                ? "outline"
                : option === question.correctAnswer
                  ? "default"
                  : option === selectedOption
                    ? "destructive"
                    : "outline"
            }
            className={`h-16 text-lg ${selectedOption === option && !hasSubmitted ? "border-primary border-2" : ""}`}
            onClick={() => !hasSubmitted && setSelectedOption(option)}
            disabled={hasSubmitted}
          >
            {option}
            {hasSubmitted && option === question.correctAnswer && <CheckCircle className="ml-2 h-5 w-5" />}
            {hasSubmitted && option === selectedOption && option !== question.correctAnswer && (
              <XCircle className="ml-2 h-5 w-5" />
            )}
          </Button>
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
        </div>
      ) : (
        <Button onClick={handleSubmit} disabled={!selectedOption} className="w-full">
          Submit Answer
        </Button>
      )}
    </div>
  )
}

