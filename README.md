# 🌊 VibeSkill
### Premium Liquid Glass SaaS Platform

**VibeSkill** is a cutting-edge platform designed to generate and share professional AI-driven 'Skills' using **xAI's Grok** and **Supabase**. It features a high-end, cinematic UI with fluid glassmorphism and real-time AI integration.

---

## ✨ Features
- **🔮 Liquid Glass Design**: A immersive, premium UI/UX experience with glassmorphism, cinematic transitions, and fluid animations.
- **🤖 xAI Grok Integration**: Real-time generation of professional skills (Markdown) using the latest Grok 4.20 / Grok 4 API.
- **⚡️ Supabase Integration**: Complete user authentication, database CRUD for skills/projects, and waitlist management.
- **🌀 Cinematic Transitions**: Immersive full-page blur portal from the landing page to the dashboard.
- **🖋️ Markdown Rendering**: Real-time, theme-consistent rendering of AI output in the dashboard.

---

## 🛠️ Technology Stack
- **Frontend**: Vanilla HTML5, CSS3 (Liquid Glass System), JavaScript (ES6+).
- **Backend**: Supabase (Auth, PostgreSQL, RLS).
- **AI**: xAI Grok Completion API (Grok-4 Series).
- **Typography**: Inter, Plus Jakarta Sans, Playfair Display (Italic).

---

## 🚀 Getting Started

### 1. Supabase Setup
You need to create a project on [Supabase.com](https://supabase.com) and run the provided SQL scripts in the `supabase_setup_guide.md` file to initialize the tables (`profiles`, `skills`, `projects`, `waitlist`).

### 2. Configuration
Update your `supabase-config.js` with your project URL and Anon Key.
Update your `dashboard.html` with your xAI Grok API key.

### 3. Local Development
Running locally via `file://` may trigger browser security blocks for API calls. For the best experience, run a local server:
```powershell
python -m http.server 8000
# or if you have node
npx serve ./
```
Open your browser at `http://localhost:8000`.

---

## 📜 Key Pages
- **`index.html`**: The cinematic landing page featuring the interactive central orb.
- **`auth.html`**: Premium login/signup portal with multi-step transitions.
- **`dashboard.html`**: The core application workspace with chat, editor, and live preview.
- **`pricing.html`**: High-conversion pricing tiers and waitlist integration.

---

## ⚖️ License
MIT License. Created for the VibeSkill Community.
