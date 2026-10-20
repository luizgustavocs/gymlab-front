// Copy to environment.ts and fill in, or run `node set-env.js` with
// API_URL, SUPABASE_URL and SUPABASE_KEY set as environment variables.
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api',
  supabase: {
    url: 'https://your-project.supabase.co',
    anonKey: 'your-anon-key'
  }
};
