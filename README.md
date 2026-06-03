# Portfolio V3

Personal portfolio site for Eduard King Anterola, built as a single-page React app with Vite.

## Overview

This project presents:

- An about section with a short bio and role highlights
- A technology stack browser with clickable tags
- A project showcase with tag-based filtering
- An experience timeline
- An education section
- A certifications list
- A contact call-to-action and social links
- Light/dark theme toggling

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS 4
- Radix UI primitives
- Lucide React icons
- Motion / animation utilities

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install dependencies

```bash
npm install
```

### Start the dev server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

## Scripts

- `npm run dev` - start the local Vite dev server
- `npm run build` - create a production build

## Project Structure

- `src/main.tsx` - app entry point
- `src/app/App.tsx` - portfolio page composition
- `src/app/components/` - reusable UI sections and widgets
- `src/styles/` - global styles and theme files
- `src/imports/` - imported assets and documents

## Notes

- The app uses CSS variables for theme values and applies them at runtime.
- Project cards can be filtered by stack tag.
- The portfolio links out to GitHub, LinkedIn, and live project demos where available.

