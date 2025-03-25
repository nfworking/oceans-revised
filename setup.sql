-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
id UUID REFERENCES auth.users(id) PRIMARY KEY,
username TEXT NOT NULL,
email TEXT NOT NULL,
avatar_url TEXT,
created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create quiz_scores table
CREATE TABLE IF NOT EXISTS quiz_scores (
id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
user_id UUID REFERENCES auth.users(id) NOT NULL,
quiz_id TEXT NOT NULL,
score INTEGER NOT NULL,
max_score INTEGER NOT NULL,
percentage INTEGER NOT NULL,
completed_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_scores ENABLE ROW LEVEL SECURITY;

-- Create profiles policies
CREATE POLICY "Allow public read access for profiles"
ON profiles
FOR SELECT
USING (true);

CREATE POLICY "Users can update their own profiles"
ON profiles
FOR UPDATE
USING (auth.uid() = id);

-- Allow service role to insert profiles (for signup)
CREATE POLICY "Service role can insert profiles"
ON profiles
FOR INSERT
WITH CHECK (true);

-- Create quiz_scores policies
CREATE POLICY "Allow public read access for quiz_scores"
ON quiz_scores
FOR SELECT
USING (true);

CREATE POLICY "Users can insert their own scores"
ON quiz_scores
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Create a function to handle new user signups
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
INSERT INTO public.profiles (id, username, email, avatar_url)
VALUES (
  NEW.id,
  COALESCE(NEW.raw_user_meta_data->>'username', split_part(NEW.email, '@', 1)),
  NEW.email,
  NEW.raw_user_meta_data->>'avatar_url'
);
RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a trigger to automatically create a profile when a new user signs up
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

