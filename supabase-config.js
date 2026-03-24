// VibeSkill — Supabase Configuration
const SUPABASE_URL = 'https://vcivziotqftmjlhkswag.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjaXZ6aW90cWZ0bWpsaGtzd2FnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyMTE2OTQsImV4cCI6MjA4OTc4NzY5NH0.9Us3RsrhiVm3jHBvUc2Q1vJCofKhQ2L5wzrCAeaZElQ';

// Initialize the Supabase client
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// --- Auth Helpers ---

async function signUp(email, password, displayName) {
    const { data, error } = await _supabase.auth.signUp({
        email,
        password,
        options: {
            data: { display_name: displayName || email.split('@')[0] }
        }
    });
    return { data, error };
}

async function signIn(email, password) {
    const { data, error } = await _supabase.auth.signInWithPassword({
        email,
        password
    });
    return { data, error };
}

async function signOut() {
    const { error } = await _supabase.auth.signOut();
    return { error };
}

async function getUser() {
    const { data: { user } } = await _supabase.auth.getUser();
    return user;
}

function onAuthChange(callback) {
    _supabase.auth.onAuthStateChange((event, session) => {
        callback(event, session);
    });
}

// --- Skills CRUD ---

async function saveSkill(title, content, version = '1.0') {
    const user = await getUser();
    if (!user) return { data: null, error: { message: 'Not authenticated' } };

    const { data, error } = await _supabase
        .from('skills')
        .upsert({
            user_id: user.id,
            title,
            content,
            version,
            updated_at: new Date().toISOString()
        }, { onConflict: 'user_id, title' })
        .select();
    return { data, error };
}

async function getSkills() {
    const user = await getUser();
    if (!user) return { data: [], error: { message: 'Not authenticated' } };

    const { data, error } = await _supabase
        .from('skills')
        .select('*')
        .eq('user_id', user.id)
        .order('updated_at', { ascending: false });
    return { data, error };
}

async function deleteSkill(skillId) {
    const { data, error } = await _supabase
        .from('skills')
        .delete()
        .eq('id', skillId);
    return { data, error };
}

// --- Waitlist ---

async function joinWaitlist(email) {
    const { data, error } = await _supabase
        .from('waitlist')
        .insert({ email })
        .select();
    return { data, error };
}

// --- Projects ---

async function createProject(name) {
    const user = await getUser();
    if (!user) return { data: null, error: { message: 'Not authenticated' } };

    const { data, error } = await _supabase
        .from('projects')
        .insert({ user_id: user.id, name })
        .select();
    return { data, error };
}

async function getProjects() {
    const user = await getUser();
    if (!user) return { data: [], error: { message: 'Not authenticated' } };

    const { data, error } = await _supabase
        .from('projects')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
    return { data, error };
}
