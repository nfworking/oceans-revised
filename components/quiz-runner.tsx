"use client"

import { useState, useEffect } from "react"
import type { Quiz } from "@/types/quiz"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MultipleChoiceQuestion } from "@/components/quiz/multiple-choice-question"
import { TrueFalseQuestion } from "@/components/quiz/true-false-question"
import { MatchingQuestion } from "@/components/quiz/matching-question"
import { ScenarioQuestion } from "@/components/quiz/scenario-question"
import { Trophy, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface QuizRunnerProps {
  quiz: Quiz
}

export function QuizRunner({ quiz }: QuizRunnerProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<boolean[]>([])
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [previousScores, setPreviousScores] = useState<{ [key: string]: number }>({})

  // Load previous scores from localStorage
  useEffect(() => {
    const storedScores = localStorage.getItem("quizScores")
    if (storedScores) {
      setPreviousScores(JSON.parse(storedScores))
    }
  }, [])

  const currentQuestion = quiz.questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1

  const handleAnswer = (isCorrect: boolean) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestionIndex] = isCorrect
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (isLastQuestion) {
      setQuizCompleted(true)
      saveScore()
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const handlePrevious = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1)
  }

  const saveScore = () => {
    const correctAnswers = answers.filter(Boolean).length
    const score = Math.round((correctAnswers / quiz.questions.length) * 100)

    // Save to localStorage
    const newScores = { ...previousScores, [quiz.id]: score }
    localStorage.setItem("quizScores", JSON.stringify(newScores))
    setPreviousScores(newScores)
  }

  const correctAnswers = answers.filter(Boolean).length
  const score = Math.round((correctAnswers / quiz.questions.length) * 100)
  const previousScore = previousScores[quiz.id]

  if (quizCompleted) {
    return (
      <Card className="p-6">
        <div className="flex flex-col items-center text-center">
          <Trophy className="h-16 w-16 text-yellow-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Quiz Completed!</h2>
          <p className="text-muted-foreground mb-6">
            You scored {correctAnswers} out of {quiz.questions.length} ({score}%)
          </p>

          <div className="w-full max-w-md h-4 bg-gray-200 rounded-full mb-6">
            <div className="h-4 rounded-full bg-primary" style={{ width: `${score}%` }}></div>
          </div>

          {previousScore && previousScore !== score && (
            <Alert className="mb-6 bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                Your previous score was {previousScore}%.{" "}
                {score > previousScore ? "You've improved!" : "Keep practicing!"}
              </AlertDescription>
            </Alert>
          )}

          {score >= 80 ? (
            <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg mb-6 text-left">
              <p className="font-medium text-green-600 dark:text-green-400 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" /> Great job!
              </p>
              <p className="mt-2">
                You have an excellent understanding of coral reefs and their conservation. Keep learning and sharing
                your knowledge with others!
              </p>
            </div>
          ) : score >= 60 ? (
            <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg mb-6 text-left">
              <p className="font-medium text-blue-600 dark:text-blue-400">Good effort!</p>
              <p className="mt-2">
                You have a good understanding of coral reefs, but there's still more to learn. Try reviewing the
                questions you missed and take the quiz again.
              </p>
            </div>
          ) : (
            <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg mb-6 text-left">
              <p className="font-medium text-amber-600 dark:text-amber-400">Keep learning!</p>
              <p className="mt-2">
                There's still more to learn about coral reefs and their conservation. Review the questions you missed
                and try again to improve your score.
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => {
                setQuizCompleted(false)
                setCurrentQuestionIndex(0)
                setAnswers([])
              }}
            >
              Retake Quiz
            </Button>
            <Button asChild className="flex-1">
              <Link href="/quizzes">Try Another Quiz</Link>
            </Button>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm font-medium">
          Question {currentQuestionIndex + 1} of {quiz.questions.length}
        </p>
        <div className="flex gap-1">
          {quiz.questions.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-8 rounded-full ${
                index === currentQuestionIndex
                  ? "bg-primary"
                  : index < currentQuestionIndex
                    ? answers[index]
                      ? "bg-green-500"
                      : "bg-red-500"
                    : "bg-gray-200 dark:bg-gray-700"
              }`}
            />
          ))}
        </div>
      </div>

      {currentQuestion.type === "multiple-choice" && (
        <MultipleChoiceQuestion question={currentQuestion} onAnswer={handleAnswer} />
      )}

      {currentQuestion.type === "true-false" && (
        <TrueFalseQuestion question={currentQuestion} onAnswer={handleAnswer} />
      )}

      {currentQuestion.type === "matching" && <MatchingQuestion question={currentQuestion} onAnswer={handleAnswer} />}

      {currentQuestion.type === "scenario" && <ScenarioQuestion question={currentQuestion} onAnswer={handleAnswer} />}

      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Previous
        </Button>

        <Button onClick={handleNext} disabled={answers[currentQuestionIndex] === undefined}>
          {isLastQuestion ? "Finish Quiz" : "Next"} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </Card>
  )
}

