// src/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Test Supabase connection on load
(async () => {
  try {
    const { error } = await supabase.from("EventRegistration").select("id").limit(1);
    if (error) {
      console.log("Supabase connection error:", error.message);
    } else {
      console.log("Supabase backend connected successfully.");
    }
  } catch (err) {
    console.log("Supabase connection exception:", err);
  }
})();
