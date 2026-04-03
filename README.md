# ARCHITECT_V1

React + TypeScript + Tailwind CSS portfolio architecture, built with Vite and ready for Vercel deployment.

## Tech Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS + PostCSS
- React Router

## Project Structure

```txt
src/
  app/                 # App router and composition root
  components/
    layout/            # Shared shell (header, layout)
    ui/                # Small reusable presentation pieces
  data/                # Static content sources for pages
  pages/               # Route-level pages
  types/               # Shared TS types
```

## Scripts

- `npm run dev` — Start local development server
- `npm run build` — Type-check and build production bundle
- `npm run preview` — Preview production build locally
- `npm run lint` — Run ESLint

## Deploy to Vercel

This repository includes `vercel.json` with SPA rewrites to `index.html`, so route refreshes like `/about` work correctly.

1. Push this project to GitHub.
2. Import the repo in Vercel.
3. Use default Vite settings (`npm run build`, output `dist`).

## Design Notes

The UI follows the "Digital Architect" style system:

- sharp edges (no rounded corners)
- deep surface palette with primary glow accents
- monospace labels for technical UI elements
- asymmetrical spacing and grid-overlay depth
