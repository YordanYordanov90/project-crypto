import { createClient } from "@supabase/supabase-js";

// Replace with your actual Supabase project URL and public API key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Runtime check to ensure the environment variables are defined
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase URL or anonymous key. Please check your environment variables."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
