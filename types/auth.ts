export interface UserProfile {
  id: string
  username: string
  email: string
  avatar_url?: string
  created_at: string
}

export interface QuizScore {
  id: string
  user_id: string
  quiz_id: string
  score: number
  max_score: number
  percentage: number
  completed_at: string
  username?: string
}

