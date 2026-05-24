# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Jon Morgan's personal portfolio site (`why-pengo.github.io`). A small static site built with Astro 5 + Tailwind CSS v4, deployed to GitHub Pages.

## Commands

```bash
pnpm dev              # Astro dev server on http://localhost:4321
pnpm build            # astro build → outputs to dist/
pnpm preview          # preview the built dist/ output

pnpm test             # Vitest in watch mode
pnpm test:run         # Vitest single run (used in CI)
pnpm exec vitest run src/test/projects.test.ts   # single test file
pnpm test:coverage    # v8 coverage → coverage/

pnpm type-check       # astro check (TS + .astro)
pnpm lint             # biome check
pnpm lint:fix         # biome check --write (formatting + lint fixes + import sort)
pnpm format           # biome format --write

pnpm check            # full pipeline: lint + type-check + tests
```

Before pushing, mirror what CI runs:
```bash
pnpm install --frozen-lockfile && pnpm lint && pnpm type-check && pnpm test:run && pnpm build
```

## Architecture notes

- **Stack**: Astro 5 (static output) + Tailwind CSS v4 (via `@tailwindcss/vite`) + Biome 2 (lint + format) + Vitest 4. Package manager is **pnpm** (activated via `corepack enable pnpm`); lockfile is `pnpm-lock.yaml`.
- **Build output goes to `dist/`** (`astro build` default). `dist/` and `docs/` are both gitignored — the previous Vite setup committed `docs/`, but Pages now deploys from a CI artifact instead.
- **Deploy** via `.github/workflows/deploy.yml` on push to `main`: lint → type-check → tests → build → upload `./dist` as Pages artifact → deploy. There is no `develop` branch — PRs target `main` directly.
- **Pages source**: configured to "GitHub Actions" (`build_type: workflow`); the legacy `source.path: /docs` field is ignored.
- **Routing**: `src/pages/index.astro` is the homepage. Each `.astro` file under `src/pages/` becomes a route.
- **Components** live in `src/components/`, layouts in `src/layouts/`. Components use scoped `<style>` blocks by default (Astro scopes them via `data-astro-cid-*`).
- **Design tokens** (colors, fonts) are defined as CSS custom properties in `src/styles/global.css` under a Tailwind v4 `@theme {}` block — that exposes them to Tailwind utility classes AND to plain CSS via `var(--color-accent)` etc.
- **Source of truth for content** is `src/data/projects.ts` — typed `Project`, `skills`, `contacts`, `profile` exports consumed by the homepage. To add/remove/reorder a project, edit this file (not the .astro).
- **Path alias** `@/*` → `src/*` is set in `tsconfig.json` and resolves in both Astro and Vitest.
- **Vitest environment is `node` by default** (`vitest.config.ts`). For DOM assertions, import `jsdom` directly (see `src/test/homepage.test.ts`) — needed because Astro's experimental Container API runs through esbuild, which trips on jsdom's global `TextEncoder`.

## Conventions

- **Biome** owns formatting + linting + import sorting in one pass; no Prettier or ESLint. `.astro` files are excluded from Biome (the linter doesn't understand Astro's frontmatter scoping); `astro check` covers them instead.
- **Pre-commit hooks** via Lefthook (`lefthook.yml`): `biome check --staged` + `astro check` run in parallel. Hooks are installed automatically by `pnpm install` (lefthook postinstall).
- **Tailwind v4 is CSS-first** — no `tailwind.config.js`; theme config lives in `@theme {}` inside `global.css`.
- **Astro components use scoped styles**; only put rules in `global.css` if they apply to the document root, design tokens, or keyframes.
