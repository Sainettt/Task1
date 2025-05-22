import { createClient } from '@supabase/supabase-js';


const SUPABASE_URL = 'https://ijrlkwatqbwdylfvlkeo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlqcmxrd2F0cWJ3ZHlsZnZsa2VvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4NTUzODQsImV4cCI6MjA2MzQzMTM4NH0.GSYk5OBb70jM2-kgYY0qV3HR0iepNyj-tBFrpQkeYZU';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);