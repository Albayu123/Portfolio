# Personal Portfolio Website

Personal portfolio for **Muhammad Alief Albayu** — Fullstack Developer & Designer.

Built with Next.js 16 App Router, following modern React best practices.

## Sections

- Hero — animated entrance with availability badge
- About — profile, bio, stats
- Experience — timeline
- Tech Stack — skills grid
- Projects — project cards with image overlays
- Services / Expertise
- Contact / Footer

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (CSS-first config) |
| Animations | CSS `@keyframes` + Framer Motion (Toast only) |
| Icons | Lucide React + inline SVG |
| Fonts | Satoshi (local), Syne, Space Mono (Google) |
| Testing | Vitest + jsdom |

## Architecture

- **Server Components by default** — client boundary only where interactivity is needed (Navbar, Projects, Toast)
- **Static data** — all content lives in `src/data/portfolio.ts`
- **Dynamic import** — Toast (Framer Motion) lazy-loaded with `ssr: false`
- **SEO** — Open Graph, Twitter Card, canonical URL, robots metadata
- **Image optimization** — `next/image` with `priority`, `sizes`, blur placeholder

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest |
