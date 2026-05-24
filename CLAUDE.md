# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Jon Morgan's personal portfolio site (`why-pengo.github.io`). A small static single-page site built with Vite + TypeScript, deployed to GitHub Pages.

## Commands

```bash
npm run dev           # Vite dev server on http://localhost:5173
npm run build         # tsc + vite build → outputs to docs/
npm run preview       # preview the built docs/ output

npm test              # Vitest in watch mode
npm test run          # Vitest single run (used in CI)
npx vitest run src/test/utils.test.ts   # single test file
npm run test:coverage # v8 coverage → coverage/
npm run test:ui       # Vitest UI

npm run type-check    # tsc --noEmit
npm run lint          # prettier --check + eslint
npm run lint:fix      # prettier --write + eslint --fix
npm run format        # prettier --write
```

Before pushing, mirror what CI runs:
```bash
npm test run && npm run type-check && npm run lint && npm run build
```

## Architecture notes

- **Build output goes to `docs/`, not `dist/`** (`vite.config.ts`). GitHub Pages serves directly from the `docs/` folder on `main`, so the build directory is intentionally tracked and committed.
- **Deploy is automatic** via `.github/workflows/deploy.yml` on push to `main`: runs tests → type-check → lint → build → uploads `docs/` as a Pages artifact and deploys. There is no `develop` branch in this repo — PRs target `main` directly.
- **Entry points**: `index.html` (root) loads `/src/index.ts` as an ES module and `/index.css` from `public/`. Bootstrap 5.3 is loaded from a CDN, not bundled.
- **`public/` is copied verbatim** to the build output (favicon, profile image, CSS, `.nojekyll`, etc.). Asset paths in HTML use absolute `/`-prefixed URLs because `base: '/'`.
- **Path alias** `@/*` → `src/*` is configured in both `tsconfig.json` and the Vite/Vitest configs — keep them in sync if it changes.
- **Tests run under jsdom** (`vitest.config.ts`) with a setup file at `src/test/setup.ts` that silences `console.log`/`warn`. Tests live alongside source in `src/test/`.
- **TypeScript is strict**, with `noUnusedLocals` and `noUnusedParameters` on — unused symbols fail the build, not just lint.

## Conventions

- Prettier + ESLint both run in `npm run lint`; the prettier check happens first, so format before fixing lint.
- `no-console` is a warning; `console.warn`/`console.error` are allowed. Use `// eslint-disable-next-line no-console` sparingly (see `src/index.ts`).
- Project links shown on the homepage are hardcoded `<a>` tags in `index.html` — to add/remove a project, edit the HTML directly.
