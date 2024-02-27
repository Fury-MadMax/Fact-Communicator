import { createClient } from "@supabase/supabase-js"
const supabaseUrl = 'https://yrvfkqwdtwegnrqylbtk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlydmZrcXdkdHdlZ25ycXlsYnRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5NzU1NTQsImV4cCI6MjAxNTU1MTU1NH0.5mCBLXgbKOeLhSSqH4-8fEv1M4YnLO3k1ff-EhIZ29o'
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
