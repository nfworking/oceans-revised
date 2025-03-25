"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import type { QuizScore } from "@/types/auth"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import { Trophy } from "lucide-react"
import { useAuth } from "@/context/auth-context"

export function LeaderboardTable() {
  const [scores, setScores] = useState<QuizScore[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("all")
  const { user } = useAuth()

  useEffect(() => {
    async function fetchScores() {
      setLoading(true)

      let query = supabase
        .from("quiz_scores")
        .select(`
          id,
          user_id,
          quiz_id,
          score,
          max_score,
          percentage,
          completed_at,
          profiles:user_id (username)
        `)
        .order("percentage", { ascending: false })
        .limit(50)

      if (activeTab !== "all") {
        query = query.eq("quiz_id", activeTab)
      }

      const { data, error } = await query

      if (error) {
        console.error("Error fetching scores:", error)
        setLoading(false)
        return
      }

      // Transform the data to match our QuizScore type
      const formattedScores: QuizScore[] = data.map((item) => ({
        id: item.id,
        user_id: item.user_id,
        quiz_id: item.quiz_id,
        score: item.score,
        max_score: item.max_score,
        percentage: item.percentage,
        completed_at: item.completed_at,
        username: item.profiles?.username,
      }))

      setScores(formattedScores)
      setLoading(false)
    }

    fetchScores()
  }, [activeTab])

  return (
    <div className="space-y-4">
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">All Quizzes</TabsTrigger>
          <TabsTrigger value="coral-basics">Coral Basics</TabsTrigger>
          <TabsTrigger value="reef-threats">Reef Threats</TabsTrigger>
          <TabsTrigger value="reef-ecosystem">Reef Ecosystem</TabsTrigger>
          <TabsTrigger value="conservation-actions">Conservation</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12 text-center">#</TableHead>
                  <TableHead>Player</TableHead>
                  <TableHead>Quiz</TableHead>
                  <TableHead className="text-right">Score</TableHead>
                  <TableHead className="text-right">Percentage</TableHead>
                  <TableHead className="text-right">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  Array.from({ length: 5 }).map((_, index) => (
                    <TableRow key={index}>
                      <TableCell className="text-center">
                        <Skeleton className="h-6 w-6 rounded-full mx-auto" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-4 w-32" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-4 w-24" />
                      </TableCell>
                      <TableCell className="text-right">
                        <Skeleton className="h-4 w-12 ml-auto" />
                      </TableCell>
                      <TableCell className="text-right">
                        <Skeleton className="h-4 w-16 ml-auto" />
                      </TableCell>
                      <TableCell className="text-right">
                        <Skeleton className="h-4 w-20 ml-auto" />
                      </TableCell>
                    </TableRow>
                  ))
                ) : scores.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center">
                      No scores found. Be the first to complete a quiz!
                    </TableCell>
                  </TableRow>
                ) : (
                  scores.map((score, index) => (
                    <TableRow key={score.id} className={user?.id === score.user_id ? "bg-primary/10" : ""}>
                      <TableCell className="text-center font-medium">
                        {index === 0 ? (
                          <Trophy className="h-5 w-5 text-yellow-500 mx-auto" />
                        ) : index === 1 ? (
                          <Trophy className="h-5 w-5 text-gray-400 mx-auto" />
                        ) : index === 2 ? (
                          <Trophy className="h-5 w-5 text-amber-700 mx-auto" />
                        ) : (
                          index + 1
                        )}
                      </TableCell>
                      <TableCell className="font-medium">
                        {score.username || "Anonymous"}
                        {user?.id === score.user_id && " (You)"}
                      </TableCell>
                      <TableCell>
                        {score.quiz_id === "coral-basics" && "Coral Basics"}
                        {score.quiz_id === "reef-threats" && "Reef Threats"}
                        {score.quiz_id === "reef-ecosystem" && "Reef Ecosystem"}
                        {score.quiz_id === "conservation-actions" && "Conservation Actions"}
                      </TableCell>
                      <TableCell className="text-right">
                        {score.score}/{score.max_score}
                      </TableCell>
                      <TableCell className="text-right">{score.percentage}%</TableCell>
                      <TableCell className="text-right">{new Date(score.completed_at).toLocaleDateString()}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

