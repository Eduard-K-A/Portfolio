# Portfolio V3

Personal portfolio for Eduard King Anterola, built as a single-page Vite + React application.

This site is structured as a focused developer portfolio: a fixed navigation bar, a persistent sidebar identity card, and a scrollable main content column that presents background, technical skills, projects, experience, education, and certifications. The design emphasizes clear typography, muted surfaces, and a dark/light theme toggle rather than a heavy marketing layout.

## What It Includes

- Fixed top navigation with section links, theme toggle, and CV download
- Persistent sidebar with profile image, contact links, location, and local time
- About section with a short professional summary
- Stack browser with grouped technologies and filterable chips
- Project showcase with tag-based filtering
- Experience and leadership timeline
- Education details
- Certifications list
- Contact call-to-action and social links

## Tech Stack

- React 18
- TypeScript
- Vite 6
- Tailwind CSS 4
- Radix UI primitives
- Lucide React icons
- `motion`
- `sonner`
- `recharts`
- `react-hook-form`
- `react-router`
- `next-themes`

## Project Structure

- `src/main.tsx` - application entry point
- `src/app/App.tsx` - page composition and theme state
- `src/app/components/` - UI sections, cursor, navigation, sidebar, and project cards
- `src/assets/` - sidebar artwork and other static assets
- `src/imports/` - imported documents such as the CV PDF
- `src/styles/` - global styles, theme tokens, and Tailwind setup

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

## Deployment

This is a Vite app, not a Next.js app. If deploying to Vercel, use:

- Framework preset: `Vite` or `Other`
- Root directory: the folder containing `package.json`
- Build command: `npm run build`
- Output directory: `dist`

## Notes

- The portfolio uses runtime CSS variables for theme values.
- The project list supports filtering by technology tag.
- The sidebar image switches between light and dark assets depending on theme.
- The custom mouse cursor is global on desktop and hidden on touch devices.

