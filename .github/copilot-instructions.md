# Copilot Instructions

## Project Purpose

This is an **accessibility education project** built with Next.js. Each demo page presents two side-by-side implementations of the same UI component: a `DoNot` (inaccessible anti-pattern) version and a `Do` (accessible best-practice) version. The goal is to highlight the contrast between the two approaches.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint via Next.js
npm start        # Start production server
```

There is no test suite.

## Architecture

- **Next.js 15 App Router** — all routes live under `src/app/`. Server Components are the default; interactive components are marked `"use client"`.
- **`src/components/`** — feature components. Each demo feature has a `Do.tsx` and `DoNot.tsx` pair (e.g., `ProductsDo.tsx` / `ProductsDoNot.tsx`).
- **`src/Layout/`** — shared shell: `Layout`, `Header`, and `Footer`. All pages wrap their content with `<Layout>`.
- **`src/assets/`** — static assets (images).
- **Path alias**: `@/*` resolves to `src/*`.

## Key Conventions

### Do/DoNot Component Pattern
Every accessibility demo consists of a paired `*Do.tsx` (correct) and `*DoNot.tsx` (incorrect) component displayed side-by-side on the same page. When adding a new demo, follow this pattern and mount both on the route's `page.tsx`.

### Styling: SCSS + BEM
All styling is written in plain SCSS (no CSS Modules, no Tailwind, no CSS-in-JS). BEM naming is used throughout:

```scss
.products__list { ... }      // element
.products__button--loading { ... }  // modifier
```

Interactive elements use `:focus-visible` (not `:focus`) for focus ring styling. `all: unset` is used frequently to strip browser default styles from `<ul>`, `<button>`, `<a>`, etc. before applying custom styles.

### Accessibility Utilities
The global `a11y-hidden` class (defined in `src/app/style.scss`) visually hides content while keeping it accessible to screen readers — use it instead of `display: none` or `visibility: hidden` for screen-reader-only text.

### Focus Management in Client Components
After dynamic content loads (e.g., "load more"), programmatically move focus to the first new item using a `useRef` + `useEffect` pattern targeting the first focusable descendant (`a`, `button`, `[tabindex]`). See `ProductsDo.tsx` for the reference implementation.

### ARIA for Dynamic Content
Use `aria-live="polite"` regions to announce state changes (loading status, result counts) to screen readers. Pair lists with `aria-labelledby` pointing to a visible heading.

### TypeScript
Strict mode is enabled. Component props are defined as `type` (not `interface`) in a co-located `*Props.ts` file. Components use explicit `React.FC<Props>` typing.
