# Marc Angelo Mendoza — Developer Portfolio

A premium one-page portfolio that turns Marc's CV into a compact developer dossier. The visual system combines a warm paper canvas, monospace navigation, cobalt utility controls, and restrained software-interface details without relying on a backend or external content service.

## Stack

- React 19 and TypeScript
- Vite
- Tailwind CSS 4
- Motion for subtle interface animation
- Lucide React for icons

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Updating portfolio content

Most editable content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts), including:

- profile and contact information
- experience history
- selected projects
- technology groups
- strengths and social links

Project presentation is handled by [`src/components/ProjectIndex.tsx`](src/components/ProjectIndex.tsx). The preview panels are intentionally code-based placeholders, so they can later be replaced with optimized local screenshots without changing the portfolio data.

The downloadable CV is stored at [`public/Marc-Angelo-Mendoza-CV.pdf`](public/Marc-Angelo-Mendoza-CV.pdf), and the current social sharing image is stored at [`public/og-document.png`](public/og-document.png).

## Project structure

```text
src/
  components/   Reusable UI and portfolio modules
  data/         Editable portfolio content and TypeScript interfaces
  hooks/        Scroll-aware navigation behavior
  sections/     One-page portfolio sections
  App.tsx       Page composition
  App.css       Visual system and responsive layouts
```

The project is fully local-first: it has no API keys, environment variables, database, CMS, external scripts, or runtime service dependencies.
