<div align="center">

<img src="public/Sami_light.svg" alt="Logo" width="80" height="80" />

# ✦ Sami — Personal Portfolio

### *AI Engineer · Full Stack Developer · Blockchain Enthusiast*

**Bridging Technical Innovation with Strategic Execution**

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.170-000000?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Portfolio-6366f1?style=for-the-badge)](https://your-domain.com)
[![GitHub](https://img.shields.io/badge/GitHub-savior00099-181717?style=for-the-badge&logo=github)](https://github.com/savior00099)
[![LinkedIn](https://img.shields.io/badge/Instagram-Follow-E4405F?style=for-the-badge&logo=instagram)](https://www.instagram.com/sam_oazain)

---

![GitHub last commit](https://img.shields.io/github/last-commit/savior00099/portfolio?style=flat-square&color=6366f1)
![GitHub repo size](https://img.shields.io/github/repo-size/savior00099/portfolio?style=flat-square&color=a855f7)
![GitHub stars](https://img.shields.io/github/stars/savior00099/portfolio?style=flat-square&color=f59e0b)
![License](https://img.shields.io/badge/license-MIT-22c55e?style=flat-square)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-ec4899?style=flat-square)

</div>

---

## 📖 Table of Contents

- [✨ Overview](#-overview)
- [🌟 Features](#-features)
- [🗺️ Pages & Routes](#️-pages--routes)
- [⚙️ Tech Stack](#️-tech-stack)
- [🏗️ Project Structure](#️-project-structure)
- [🚀 Getting Started](#-getting-started)
- [💼 Projects Showcase](#-projects-showcase)
- [🧠 Skills & Expertise](#-skills--expertise)
- [👔 Professional Experience](#-professional-experience)
- [🎓 Education & Certifications](#-education--certifications)
- [🏆 Achievements](#-achievements)
- [🌐 Internationalization](#-internationalization)
- [🎨 Design System](#-design-system)
- [📡 API Integrations](#-api-integrations)
- [🤖 AI Chatbot](#-ai-chatbot)
- [📬 Contact](#-contact)

---

## ✨ Overview

> A **personal portfolio site** for MA Sayeed ("Sami") — a Vibe Coder and Future AI Engineer. This platform showcases his early projects and learning journey with a high-performance, interactive experience powered by advanced WebGL shaders, physics-based simulations, and an AI-powered chatbot assistant.

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│    👤  MA Sayeed "Sami"  (@savior00099)                            │
│    🎓  SSC & HSC · Science Group                                   │
│    📍  Dhaka, Bangladesh                                            │
│    💻  Vibe Coder · Future AI Engineer · Stock Trader               │
│    🌐  Currently Learning: Python · Java · AI Fundamentals          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🌟 Features

<table>
<tr>
<td width="50%">

### 🎮 Immersive 3D Experience
- **Physics-simulated 3D Lanyard** — Interactive ID card powered by Rapier physics engine that reacts to mouse movement in real-time
- **WebGL Hyperspeed Effect** — Custom GLSL shader-based warp/space background
- **Particle Systems** — Configurable density particle fields with TSParticles
- **Globe Visualization** — Interactive 3D world globe in the About section

</td>
<td width="50%">

### 📊 Real-Time Data
- **GitHub API (GraphQL)** — Live contribution heatmap, repo stats, language breakdown
- **WakaTime API** — Live coding activity: top languages, hours, and streaks
- **1-hour cache revalidation** — Fresh data without hammering APIs
- **Graceful error fallbacks** — Never shows broken states to the user

</td>
</tr>
<tr>
<td width="50%">

### 🎨 Advanced Animations
- **Framer Motion** — Fluid page transitions and micro-interactions
- **GSAP ScrollTrigger** — Complex, scroll-driven timeline animations
- **React Spring** — Physics-based spring animations for natural feel
- **Custom Hooks** — `useTextScramble`, `useTypewriter`, `useCountUp`, `useScrollAnimation`

</td>
<td width="50%">

### 🌍 Multilingual & Accessible
- **Bilingual EN/ID** — Full internationalization via `next-intl`
- **Auto language detection** — Uses `Accept-Language` browser header
- **Welcome in 12 languages** — Animated cycling greetings on hero
- **Dark / Light mode** — System-preferred with smooth toggle & CSS variables

</td>
</tr>
<tr>
<td width="50%">

### ⚡ Performance-First
- **Dynamic imports** — 3D components SSR-disabled and lazy-loaded
- **Low-power detection** — `usePerformance()` hook reduces animations on battery-saving mode
- **Image optimization** — AVIF/WebP formats via Next.js Image
- **Smooth scrolling** — Lenis-based premium scroll experience

</td>
<td width="50%">

### 🤖 AI Portfolio Chatbot
- **Groq + Gemini dual-provider** — Auto-fallback if one limit is hit
- **Portfolio-aware context** — Reads all data from `portfolio.ts` as knowledge base
- **Markdown rendering** — Bold, italic, lists, code, links rendered in chat
- **Smart UX** — Typing indicator, retry on error, suggested questions

</td>
</tr>
</table>

---

## 🗺️ Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | **Home / Hero** | 3D Lanyard, particle background, animated intro, stats |
| `/projects` | **Projects** | Filterable showcase of 19 projects across 6 categories |
| `/projects/[slug]` | **Project Detail** | Tech stack, features, installation guide, challenges & solutions |
| `/experience` | **Experience** | Career timeline, education, journey tabs |
| `/skills` | **Skills** | Hard skills, soft skills, tools & tech radar |
| `/achievements` | **Achievements** | 30+ certifications, awards, programs |
| `/blog` | **Blog** | 9 articles on AI, Web3, and engineering |
| `/blog/[slug]` | **Blog Detail** | Full-length article view with syntax highlighting |
| `/gallery` | **Gallery** | Multi-layout image gallery (Stack, Dome, Circular) |
| `/contact` | **Contact** | Contact form + social links |
| `/resume` | **Resume** | Interactive CV/resume page |
| `/api/chat` | **Chat API** | AI chatbot backend (Groq → Gemini fallback) |
| `/api/github-stats` | **GitHub API** | GraphQL-based GitHub statistics |
| `/api/github-languages` | **Languages API** | Top language breakdown |
| `/api/wakatime` | **WakaTime API** | Coding activity from WakaTime |

---

## ⚙️ Tech Stack

### Core Framework

```
Next.js 16.1.6  ·  React 19.2.4  ·  TypeScript 5.3  ·  Node.js 18+
```

### 3D Graphics & WebGL

[![Three.js](https://img.shields.io/badge/Three.js-000?logo=threedotjs&style=flat-square)](https://threejs.org/)
[![React Three Fiber](https://img.shields.io/badge/@react--three/fiber-000?logo=threedotjs&style=flat-square)](https://r3f.docs.pmnd.rs/)
[![Drei](https://img.shields.io/badge/@react--three/drei-000?logo=threedotjs&style=flat-square)](https://github.com/pmndrs/drei)
[![Rapier](https://img.shields.io/badge/@react--three/rapier-E63012?style=flat-square)](https://rapier.rs/)
[![Postprocessing](https://img.shields.io/badge/Postprocessing-gray?style=flat-square)](https://github.com/pmndrs/postprocessing)
[![OGL](https://img.shields.io/badge/OGL-gray?style=flat-square)](https://github.com/oframe/ogl)
[![Spline](https://img.shields.io/badge/Spline-7B3FE4?style=flat-square)](https://spline.design/)
[![Three Globe](https://img.shields.io/badge/Three--Globe-2.45-1E3A5F?style=flat-square)](https://github.com/vasturiano/three-globe)

### Animation

[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![GSAP](https://img.shields.io/badge/GSAP-3.14-88CE02?style=flat-square)](https://greensock.com/gsap/)
[![React Spring](https://img.shields.io/badge/React_Spring-10-68D391?style=flat-square)](https://react-spring.dev/)
[![Lenis](https://img.shields.io/badge/Lenis-1.3-F97316?style=flat-square)](https://lenis.darkroom.engineering/)
[![AOS](https://img.shields.io/badge/AOS-2.3-3B82F6?style=flat-square)](https://michalsnik.github.io/aos/)

### Styling & UI

[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-New_York-000?style=flat-square)](https://ui.shadcn.com/)
[![CVA](https://img.shields.io/badge/class--variance--authority-0.7-8B5CF6?style=flat-square)](https://cva.style/)
[![Lucide](https://img.shields.io/badge/Lucide_React-0.309-F97316?style=flat-square)](https://lucide.dev/)
[![React Icons](https://img.shields.io/badge/React_Icons-5.5-E11D48?style=flat-square)](https://react-icons.github.io/)
[![Headless UI](https://img.shields.io/badge/Headless_UI-2.2-66E3FF?style=flat-square&logo=headlessui)](https://headlessui.com/)

### Internationalization & Theming

[![next-intl](https://img.shields.io/badge/next--intl-4.8-3B82F6?style=flat-square)](https://next-intl-docs.vercel.app/)
[![next-themes](https://img.shields.io/badge/next--themes-0.2-000?style=flat-square)](https://github.com/pacocoursey/next-themes)

### AI & External APIs

[![Groq](https://img.shields.io/badge/Groq_API-LLaMA_3.1-F97316?style=flat-square)](https://groq.com/)
[![Gemini](https://img.shields.io/badge/Gemini_1.5_Flash-4285F4?style=flat-square&logo=google)](https://ai.google.dev/)
[![GitHub GraphQL](https://img.shields.io/badge/GitHub_GraphQL_API-181717?style=flat-square&logo=github)](https://docs.github.com/en/graphql)
[![WakaTime](https://img.shields.io/badge/WakaTime_API-5C4EE5?style=flat-square)](https://wakatime.com/)

### Particles & Effects

[![TSParticles](https://img.shields.io/badge/TSParticles-3.9-6366F1?style=flat-square)](https://particles.js.org/)
[![Meshline](https://img.shields.io/badge/Meshline-3.3-gray?style=flat-square)](https://github.com/spite/THREE.MeshLine)

---

## 🏗️ Project Structure

```
PersonalBlog/
│
├── src/
│   ├── app/                          # Next.js 16 App Router
│   │   ├── page.tsx                  # 🏠 Home — Hero, 3D, Stats
│   │   ├── layout.tsx                # Root layout with all providers
│   │   ├── loading.tsx               # Global loading UI
│   │   ├── projects/                 # Projects list & [slug] detail
│   │   ├── experience/               # Career & education timeline
│   │   ├── skills/                   # Skills showcase
│   │   ├── achievements/             # Certifications & awards
│   │   ├── blog/                     # Blog list & [slug] detail
│   │   ├── gallery/                  # Image gallery
│   │   ├── contact/                  # Contact form
│   │   ├── resume/                   # CV/Resume page
│   │   └── api/
│   │       ├── chat/route.ts         # 🤖 AI Chatbot (Groq + Gemini fallback)
│   │       ├── github-stats/         # GitHub GraphQL stats
│   │       ├── github-languages/     # Language breakdown
│   │       └── wakatime/             # Coding activity
│   │
│   ├── components/
│   │   ├── layout/                   # Nav, Footer, SocialCorner, ChatBot
│   │   ├── sections/                 # About, Expertise, Stats, CTA
│   │   ├── three/                    # Lanyard (R3F + Rapier), Scene3D
│   │   ├── stats/                    # GitHubStats, WakaTimeStats
│   │   ├── projects/                 # Project detail components
│   │   ├── effects/                  # FallingText, visual effects
│   │   ├── animate-ui/               # Custom animated primitives
│   │   └── ui/                       # 54+ reusable UI components
│   │       ├── Hyperspeed.tsx        # WebGL warp background (GLSL shaders)
│   │       ├── Particles.tsx         # TSParticles wrapper
│   │       ├── Globe.tsx             # 3D world globe
│   │       ├── SkillRadar.tsx        # Skills radar chart
│   │       ├── TechConstellation.tsx # Connected tech node graph
│   │       ├── Marquee.tsx           # Infinite scroll marquee
│   │       ├── Terminal.tsx          # Terminal UI component
│   │       ├── ScrollVelocity.tsx    # Velocity-based scroll text
│   │       ├── KineticTechGrid.tsx   # Dynamic tech logo grid
│   │       ├── OrbitalWorkbench.tsx  # Orbital animation system
│   │       └── ...44+ more           #
│   │
│   ├── data/
│   │   └── portfolio.ts              # 📊 Central data source (ALL content)
│   │
│   ├── hooks/                        # Custom React hooks
│   │   ├── useIsMobile.ts            #   Responsive breakpoint detection
│   │   ├── useTextScramble.ts        #   Scramble animation effect
│   │   ├── useTypewriter.ts          #   Typewriter text animation
│   │   ├── useCountUp.ts             #   Animated number counter
│   │   ├── useScrollAnimation.ts     #   Scroll-based triggers
│   │   └── usePerformance.ts         #   Low-power mode detection
│   │
│   ├── i18n/                         # next-intl config (EN/ID routing)
│   ├── providers/                    # Theme, I18n, SmoothScroll providers
│   ├── lib/                          # utils.ts (cn, formatDate helpers)
│   ├── types/                        # TypeScript interfaces & declarations
│   └── styles/
│       └── globals.css               # Tailwind layers + CSS variables
│
├── messages/
│   ├── en.json                       # English translations
│   └── id.json                       # Indonesian translations
│
├── public/                           # Static assets (images, SVGs, PDFs)
├── next.config.ts                    # Next.js + next-intl plugin config
├── tailwind.config.ts                # Custom theme, animations, keyframes
├── tsconfig.json                     # Strict TypeScript config
├── components.json                   # shadcn/ui configuration
└── .env.local                        # API keys (never committed)
```

---

## 🚀 Getting Started

### Prerequisites

```bash
Node.js >= 18.0.0
npm >= 9.0.0
```

### 1. Clone the repository

```bash
git clone https://github.com/savior00099/PersonalBlog.git
cd PersonalBlog
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the root directory:

```env
# ─── GitHub Integration (for stats section) ───────────────────────────────
NEXT_PUBLIC_GITHUB_USERNAME=your_github_username
GITHUB_TOKEN=github_pat_your_personal_access_token

# ─── WakaTime Integration (for coding stats) ──────────────────────────────
WAKATIME_API_KEY=waka_your_wakatime_api_key

# ─── AI Chatbot — Groq (primary LLM provider) ─────────────────────────────
GROQ_API_KEY=gsk_your_groq_api_key

# ─── AI Chatbot — Gemini (automatic fallback) ─────────────────────────────
GEMINI_API_KEY=your_gemini_api_key
```

> **How to get each API key:**
> | Key | Where to get it | Required scopes |
> |-----|----------------|-----------------|
> | `GITHUB_TOKEN` | [github.com/settings/tokens](https://github.com/settings/tokens) | `read:user`, `repo` |
> | `WAKATIME_API_KEY` | [wakatime.com/settings/api-key](https://wakatime.com/settings/api-key) | — |
> | `GROQ_API_KEY` | [console.groq.com](https://console.groq.com) | — |
> | `GEMINI_API_KEY` | [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey) | — |

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for production

```bash
npm run build
npm start
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build optimized production bundle |
| `npm start` | Serve the production build locally |
| `npm run lint` | Run ESLint checks |

---

## 💼 Projects Showcase

> **3 projects** so far — with more on the way as skills grow.

| # | Project | Category | Stack | Status |
|---|---------|----------|-------|--------|
| 1 | To-Do List Website | Web Development | HTML, CSS, JavaScript | ✅ Done |
| 2 | Proposal Website | Creative Tech | HTML, CSS, JavaScript | ✅ Done |
| 3 | Animation Website | Front-End | HTML, CSS, JavaScript | 🚧 Ongoing |

---

## 🧠 Skills & Expertise

### Hard Skills Proficiency

```
  HTML                      ██████████████░░░░░░  Intermediate
  CSS                       ██████████████░░░░░░  Intermediate
  ─────────────────────────────────────────────
  Python                    ██████░░░░░░░░░░░░░░  Beginner (Learning)
  Java                      ██████░░░░░░░░░░░░░░  Beginner (Learning)
  Artificial Intelligence   ████░░░░░░░░░░░░░░░░  Beginner (Exploring)
  Stock / Crypto Trading    ████░░░░░░░░░░░░░░░░  Beginner (Learning)
```

### Tech Stack Badges

<table>
<tr><th>Category</th><th>Technologies</th></tr>
<tr>
<td><b>Languages</b></td>
<td>

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

</td>
</tr>
<tr>
<td><b>Tools</b></td>
<td>

![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visualstudiocode)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)

</td>
</tr>
</table>

### Soft Skills

> `Fast Learner` · `Problem Solving` · `Team Collaboration` · `Self-Discipline` · `Curiosity`

---

## 👔 Experience & Learning Journey

Sami is early in his journey and currently has no formal work experience. Instead, he's focused on building personal projects and learning core programming skills.

### 🛠️ Personal Projects

| Status | Project | Stack |
|--------|---------|-------|
| ✅ Completed | **To-Do List Website** | HTML · CSS · JavaScript |
| ✅ Completed | **Proposal Website** | HTML · CSS · JavaScript |
| 🚧 Ongoing | **Animation Website** | HTML · CSS · JavaScript |

More projects are on the way as skills continue to grow.

---

## 🎓 Education & Certifications

### 🎓 Education

| Certificate | Group | GPA |
|--------------|-------|-----|
| **Higher Secondary Certificate (HSC)** | Science | **3.0 / 5.0** |
| **Secondary School Certificate (SSC)** | Science | **4.61 / 5.0** |

### 📜 Certifications

No certifications yet — actively working toward earning the first one. This section will be updated as certificates are completed.

---

## 🏆 Achievements

No formal achievements to showcase yet. Sami is focused on building projects and skills first — achievements will be added here as they happen.

## 🌐 Internationalization

This portfolio fully supports **2 languages** with automatic browser detection:

| Language | Code | Coverage |
|----------|------|----------|
| 🇺🇸 English | `en` | 100% |
| 🇮🇩 Indonesian | `id` | 100% |

The hero section cycles **welcome greetings in 12 languages** with Framer Motion transitions:

```
Halo  ·  Hello  ·  Hola  ·  Bonjour  ·  こんにちは  ·  안녕하세요
مرحباً  ·  Hallo  ·  Olá  ·  Ciao  ·  你好  ·  Привет
```

**Detection Flow:**
```
Browser Request
      │
      ▼
Accept-Language Header
      │
      ▼
next-intl Middleware → Route to /en or /id
      │
      ▼
Cookie-based Persistence (remembers preference)
```

---

## 🎨 Design System

### Color System (CSS Variables)

| Token | Usage | Dark | Light |
|-------|-------|------|-------|
| `--background` | Page background | `#09090b` | `#ffffff` |
| `--foreground` | Primary text | `#fafafa` | `#09090b` |
| `--primary` | Accent, CTAs | Indigo/Purple | Indigo/Purple |
| `--muted` | Subtle text | `#71717a` | `#71717a` |
| `--glow-cyan` | 3D glow effects | `#00FFFF` | — |
| `--glow-purple` | Accent glows | `#A855F7` | — |
| `--glow-pink` | Highlight glows | `#EC4899` | — |

### Custom Tailwind Animations

```
fade-in · fade-up · slide-in-left · slide-in-right · scale-in
glow-pulse · float · rotate-slow · gradient-shift
marquee · marquee-reverse · scan · meteor
```

### Typography Stack

| Font | Usage | Source |
|------|-------|--------|
| **Inter** | Body text, UI elements | Google Fonts |
| **JetBrains Mono** | Code blocks, terminals | Google Fonts |
| **Playfair Display** | Display headings | Google Fonts |
| **Alex Brush** | Signature / decorative | Google Fonts |

---

## 📡 API Integrations

### GitHub Statistics

```typescript
// GET /api/github-stats
// Auth:     GITHUB_TOKEN (GraphQL API v4)
// Cache:    revalidate every 3600 seconds
// Returns:  total contributions, public repos,
//           stars, followers, top languages
```

### WakaTime Coding Activity

```typescript
// GET /api/wakatime
// Auth:     WAKATIME_API_KEY
// Cache:    revalidate every 3600 seconds
// Returns:  top languages (7-day), daily average,
//           total hours, editor breakdown
```

### GitHub Languages

```typescript
// GET /api/github-languages
// Auth:     GITHUB_TOKEN
// Cache:    revalidate every 3600 seconds
// Returns:  language percentage breakdown
//           across all public repositories
```

---

## 🤖 AI Chatbot

The portfolio includes a built-in AI assistant — click the chat icon at the bottom of the sidebar.

### Provider Fallback Architecture

```
┌──────────────────────────────────────────────────┐
│            POST /api/chat                        │
│                                                  │
│  messages[] ──► Build System Prompt             │
│                  (from portfolio.ts data)        │
│                        │                        │
│                        ▼                        │
│          ┌─────────────────────────┐            │
│          │  Try: Groq API          │            │
│          │  Model: llama-3.1-8b    │ ──► ✅ OK  │
│          └─────────────────────────┘            │
│                   │ (rate limit / error)         │
│                   ▼                             │
│          ┌─────────────────────────┐            │
│          │  Fallback: Gemini API   │            │
│          │  Model: gemini-1.5-flash│ ──► ✅ OK  │
│          └─────────────────────────┘            │
│                   │ (both fail)                 │
│                   ▼                             │
│            503 with error details               │
└──────────────────────────────────────────────────┘
```

### Chatbot Features

| Feature | Detail |
|---------|--------|
| 🧠 **Portfolio-aware** | System prompt auto-built from all `portfolio.ts` data |
| 🌐 **Bilingual** | Responds in EN or ID matching user's language |
| 📝 **Markdown** | Renders bold, italic, lists, inline code, and links |
| 🔁 **Retry** | One-click retry button when a response fails |
| 💬 **Suggested questions** | Quick-start prompts shown on first open |
| ⌨️ **Keyboard shortcuts** | `Enter` send · `Shift+Enter` newline · `Escape` close |
| 📜 **Context window** | Last 20 messages kept for multi-turn conversations |

---

## 📬 Contact

<div align="center">

| Platform | Link |
|----------|------|
| 📧 **Email** | [sayeed3625525@gmail.com](mailto:sayeed3625525@gmail.com) |
| 🐙 **GitHub** | [@savior00099](https://github.com/savior00099) |
| 📸 **Instagram** | [@sam_oazain](https://www.instagram.com/sam_oazain) |

</div>

---

<div align="center">

### ⭐ If you find this portfolio inspiring, consider giving it a star!

[![Star this repo](https://img.shields.io/github/stars/savior00099/portfolio?style=social)](https://github.com/savior00099/PersonalBlog)
[![Fork](https://img.shields.io/github/forks/savior00099/portfolio?style=social)](https://github.com/savior00099/PersonalBlog/fork)
[![Follow](https://img.shields.io/github/followers/savior00099?style=social)](https://github.com/savior00099)

---

<sub>Built with ❤️ by <strong>MA Sayeed (Sami)</strong></sub>

<sub>Powered by Next.js · Three.js · React · Framer Motion · GSAP · Groq · Gemini</sub>

<sub>© 2026 MA Sayeed (Sami) · All rights reserved.</sub>

</div>
