"use client"

import { useState, useEffect } from "react"
import type { QuizQuestion } from "@/types/quiz"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle, XCircle } from "lucide-react"

interface ScenarioQuestionProps {
  question: QuizQuestion
  onAnswer: (isCorrect: boolean) => void
}

export function ScenarioQuestion({ question, onAnswer }: ScenarioQuestionProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    setSelectedOption(null);
    setHasSubmitted(false);
  }, [question]);
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

      <RadioGroup value={selectedOption || ""} onValueChange={setSelectedOption} className="space-y-3">
        {question.options?.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <RadioGroupItem value={option} id={option} disabled={hasSubmitted} className="border-2" />
            <Label
              htmlFor={option}
              className={`flex-1 cursor-pointer rounded-md border p-3 ${
                hasSubmitted && option === question.correctAnswer
                  ? "border-green-500 bg-green-50 dark:bg-green-950"
                  : hasSubmitted && option === selectedOption && option !== question.correctAnswer
                    ? "border-red-500 bg-red-50 dark:bg-red-950"
                    : ""
              }`}
            >
              {option}
              {hasSubmitted && option === question.correctAnswer && (
                <CheckCircle className="ml-2 inline h-5 w-5 text-green-500" />
              )}
              {hasSubmitted && option === selectedOption && option !== question.correctAnswer && (
                <XCircle className="ml-2 inline h-5 w-5 text-red-500" />
              )}
            </Label>
          </div>
        ))}
      </RadioGroup>

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

