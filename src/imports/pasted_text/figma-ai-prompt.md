# Figma AI Prompt — Eduard King Anterola Developer Portfolio
> Paste this entire prompt into Figma AI (Make Design / AI Design tool) to generate the full portfolio design.

---

## PROMPT

Design a **minimal, pixel-perfect personal developer portfolio website** for **Eduard King Anterola**, a Computer Science student and Full-Stack Developer from Lipa City, Philippines. The design should be inspired by the clean aesthetic of **abdulrehmanwaseem.me** — a light/dark-mode capable, typography-first portfolio with a sidebar identity card, sectioned scrollable content, and a modern monochromatic palette.

---

### DESIGN STYLE & AESTHETIC

- **Aesthetic:** Minimal, clean, developer-grade — no flashy gradients, no loud colors. Precision-crafted like a well-written codebase.
- **Typography:** Geist or Inter as primary typeface. Monospace font (Geist Mono or JetBrains Mono) for code snippets, skill tags, and tech badges.
- **Color Palette (Light Mode):** Background `#FFFFFF`, surface `#F4F4F5`, text primary `#09090B`, text muted `#71717A`, border `#E4E4E7`, accent `#18181B`.
- **Color Palette (Dark Mode):** Background `#09090B`, surface `#18181B`, text primary `#FAFAFA`, text muted `#A1A1AA`, border `#27272A`, accent `#FFFFFF`.
- **Spacing system:** 4px base unit. Generous whitespace. Nothing crammed.
- **Corners:** Subtle radius — `8px` for cards, `4px` for tags/chips, `12px` for profile avatar.
- **Shadows:** Very subtle — `0 1px 3px rgba(0,0,0,0.06)` on cards only. No heavy drop shadows.
- **Icons:** Lucide icon set. Small (16×16px), muted color, used sparingly for labels and links.

---

### PAGE LAYOUT

Use a **two-column layout on desktop** (sticky left sidebar + scrollable right content), collapsing to a **single-column stacked layout on mobile**.

#### LEFT SIDEBAR (sticky, ~280px wide)
This is the identity card — always visible on scroll.

- **Avatar:** Circular avatar placeholder, ~80px diameter, subtle border ring.
- **Name:** `Eduard King Anterola` — Large, semibold, `text-2xl`.
- **Role line:** `Full-Stack Developer · CS Student · Aspiring ML Engineer` — small, muted, `text-sm`.
- **Location chip:** 📍 `Lipa City, Philippines` — muted text with pin icon.
- **Local time widget:** Small clock display showing current local time (static design element, label: `PHT · UTC+8`).
- **Contact links (vertical list with icons):**
  - ✉ `eduardkinganterola@gmail.com`
  - 🔗 `linkedin.com/in/eduard-king-anterola`
  - 💻 `github.com/Eduard-K-A`
  - 🌐 `eduard-king.vercel.app`
- **Availability badge:** A small green dot + label: `Open to Internships & Freelance`.
- **Divider line.**
- **Social icon row:** GitHub, LinkedIn, portfolio globe icon — 20px icon buttons, muted, hover accent.

---

### RIGHT CONTENT AREA (scrollable, ~680px max-width)

Organize into clearly separated **sections**, each with a subtle section label (small caps, letter-spaced, muted — e.g., `ABOUT`, `STACK`, `PROJECTS`, `EXPERIENCE`, `CERTIFICATIONS`).

---

#### SECTION 1 — ABOUT

Short bio block in clean prose. Use this exact content (styled as paragraph text, `text-base`, relaxed line height):

> Computer Science student at De La Salle Lipa building full-stack web, mobile, and desktop applications. Back-End Developer Head at the AWS Learning Club. Formerly DevOps Head of AnimoDev. Top 10 Finalist at an Agora-sponsored hackathon with an AI-powered real-time voice sales assistant. Currently deepening expertise in Python, R, machine learning, and LLMOps — 48 hours of structured DataCamp learning and counting.

Below the bio, show three **highlight stat chips** in a horizontal row:
- `🏆 Hackathon Top 10 Finalist`
- `☁️ AWS Learning Club Head`
- `📚 48hrs ML Coursework`

---

#### SECTION 2 — STACK

Display tech stack as a **flowing icon-label grid** (similar to the inspiration site). Each item is a small pill/chip: tech icon (16×16px from devicons or simple colored dot) + name label.

Organize into **four labeled sub-rows:**

**Frontend**
`JavaScript` `TypeScript` `React` `Next.js 14` `Vite` `Tailwind CSS` `HTML5` `Shadcn/UI`

**Backend & Database**
`Node.js` `Express.js` `MongoDB` `Supabase` `Firebase` `PostgreSQL` `PostGIS` `SQLite` `REST APIs` `JWT Auth` `Zustand`

**Data Science / ML**
`Python` `R` `Pandas` `Statistical Analysis` `Hugging Face` `MLOps` `LLMOps`

**Mobile & Tools**
`React Native` `Expo` `Git` `GitHub Actions` `Vercel` `Render` `Figma` `PowerSync`

Each chip: `bg-surface`, border `1px solid border-color`, `text-xs`, `px-2.5 py-1`, rounded `4px`, with a small colored dot or icon on the left.

---

#### SECTION 3 — PROJECTS

Display as a **vertical list of project cards** (not a grid — list format like the inspiration). Each card has:

- **Project title** — semibold, `text-base`
- **Year badge** — right-aligned, muted, small (`2025` or `2026`)
- **Type tag** — `Personal Project` / `Hackathon` / `Academic` — small pill
- **Description** — 2 lines max, muted `text-sm`
- **Tech stack tags** — horizontal row of `text-xs` rounded tags (same chip style as stack section)
- **Links row** — small icon links: GitHub icon, external link icon (where applicable)
- **Divider line** between cards

**Projects to include (in order):**

1. **Ely Sales Agent** `2026` · Hackathon · Desktop AI voice assistant for live sales calls. Built with Electron + Cloudflare Worker. · Tags: `TypeScript` `Electron` `Agora` `Groq API` `SQLite`

2. **The-Vault** `2026` · Personal · Offline-first mobile POS system for retail/multi-branch teams. Inventory, sales, receipts, analytics — all in one app. · Tags: `TypeScript` `React Native` `Supabase` `PowerSync` `Expo` `SQLite`

3. **TaskOverflow** `2026` · Personal · Minimalist desktop task manager with subtasks, groups, and deadlines. Local-first. · Tags: `TypeScript` `Electron` `React v19` `SQLite`

4. **CleanOps** `2025` · Personal · Full-stack cleaning service marketplace with real-time geolocation via PostGIS, mock escrow payments, and multi-role auth. · Tags: `Next.js 14` `TypeScript` `Supabase` `PostGIS` `Tailwind CSS`

5. **Flur Chat** `2025` · Personal · Real-time chat client with live messaging and clean UI. · Tags: `React` `TypeScript` `Vite`

6. **Hotel Reservation System** `2024` · Academic · Full-stack capstone: DB design, REST API, polished React UI. · Tags: `React` `Node.js` `Express` `MongoDB`

---

#### SECTION 4 — EXPERIENCE & LEADERSHIP

Two entries, displayed as a **timeline-style list** (left accent line, stacked entries):

**Back-End Developer Head** — AWS Learning Club, De La Salle Lipa
`May 2026 – Present`
> Leading backend system design and cloud-native development using AWS. Mentoring members in backend architecture, APIs, and databases.

**DevOps Head** — DLSL AnimoDev
`Aug 2025 – May 2026`
> Managed deployment pipelines and GitHub Workflows for org-wide projects. Collaborated on web and software builds under tight deadlines.

Each entry: company name with small icon placeholder, role title in semibold, date range in muted `text-xs`, bullet summary in `text-sm` muted.

---

#### SECTION 5 — CERTIFICATIONS

Display as a **compact table/list** — clean rows with:
- Course name (semibold)
- Issuer badge: `DataCamp` pill in orange/brand color
- Date completed (muted)
- Duration chip (`4 hrs`, `6 hrs`, etc.)

Courses (13 total):
1. Introduction to Python — Feb 08, 2026 — 4 hrs
2. Intermediate Python — Feb 10, 2026 — 4 hrs
3. Data Manipulation with pandas — Feb 16, 2026 — 4 hrs
4. Joining Data with pandas — Mar 01, 2026 — 4 hrs
5. Introduction to Statistics in Python — Mar 11, 2026 — 4 hrs
6. Introduction to R — Mar 17, 2026 — 4 hrs
7. Intermediate R — Mar 25, 2026 — 6 hrs
8. Intro to Data Visualization with Matplotlib — Mar 31, 2026 — 4 hrs
9. Intro to Data Visualization with Seaborn — Apr 06, 2026 — 4 hrs
10. Working with the OpenAI API — Apr 12, 2026 — 3 hrs
11. Prompt Engineering with the OpenAI API — Apr 25, 2026 — 4 hrs
12. Working with Hugging Face — May 12, 2026 — 2 hrs
13. LLMOps Concepts — May 18, 2026 — 1 hr

At the bottom: a summary row — **"48 total hours · Python, pandas, R, statistics, OpenAI API, Hugging Face, LLMOps"** — styled as a muted callout box.

---

#### SECTION 6 — WHAT I'M LOOKING FOR

A simple **callout/banner card** at the bottom of the content area:

> **Open to:** Internships · Freelance · Entry-level Roles · Remote
> **Focus areas:** Full-Stack Web · Full-Stack Mobile · AI / ML Engineering

Styled as a bordered card with a subtle left accent bar (4px solid border, accent color). Light background fill on the card. CTA link: `Get in touch → eduardkinganterola@gmail.com`.

---

### NAVIGATION BAR (top, full-width)

Fixed/sticky top nav:
- Left: name logo `EKA` in monospace font + `Eduard King Anterola` wordmark (small, muted).
- Right: nav links — `Portfolio` `Projects` `Stack` `Certifications` · Light/Dark mode toggle icon button.
- Background: `bg-background/80`, `backdrop-blur`, `border-b border-border`.

---

### FOOTER

Minimal single-line footer:
- Left: `Built by Eduard King Anterola`
- Right: `GitHub` `LinkedIn` icons + `© 2026`
- Muted text, `text-xs`, full border-top divider.

---

### RESPONSIVE BREAKPOINTS

- **Desktop (≥1024px):** Two-column layout (sidebar + content)
- **Tablet (768–1023px):** Sidebar collapses to top identity card block, content below full-width
- **Mobile (≤767px):** Single column. Sidebar becomes a top card. All sections stack. Nav becomes hamburger.

---

### FRAMES TO GENERATE

Please generate the following Figma frames:
1. **Desktop Home — Light Mode** (1440×900)
2. **Desktop Home — Dark Mode** (1440×900)
3. **Mobile Home — Light Mode** (390×844)
4. **Projects Section — Desktop** (1440×900, scrolled to projects)
5. **Stack Section — Desktop** (1440×900, focused on tech grid)

---

### COMPONENT NOTES

- All interactive states (hover, focus) should be designed for links and cards.
- Use **auto-layout** for all cards, chips, nav, and section containers.
- Design with a **8-column grid** on desktop, **4-column** on mobile.
- All text must pass **WCAG AA contrast** in both light and dark modes.
- Keep the sidebar and nav as **component instances** for reuse.