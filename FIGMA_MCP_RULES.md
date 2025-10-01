## Figma → Model Context Protocol (MCP) rules for this repo

This document maps Figma design tokens and components into the code patterns used in this Next.js + Tailwind + CSS custom-properties codebase. Use it as a contract for automated token injection and component wiring via MCP.

Checklist (requirements this doc covers)
- Token Definitions (colors, spacing, radius, type) — Done (see Tokens section)
- Component Library mapping (how components consume tokens) — Done (see Components section)
- Frameworks & Libraries list with file locations — Done (see Tools section)
- Asset management and icon system guidance — Done (see Assets / Icons)
- Styling approach and token injection strategy (where to put generated CSS) — Done (see Styling & Integration)
- Project structure and recommended file paths for MCP outputs — Done (see Project Structure)

Notes / assumptions
- Colors and many tokens are currently produced by Tailwind at build time and end up in the compiled CSS under `.next/static/css/app/layout.css` inside a `:root` block. For a reliable MCP integration, generate a canonical token file (see recommended files).  
- Where a single canonical source is missing in `src/`, we recommend adding `src/styles/design-tokens.css` (or add to `tailwind.config.js`) and letting MCP write there.

## Tokens (canonical mapping)
Source of truth (runtime): compiled CSS contains a `:root` block with tokens (example path):

- `.next/static/css/app/layout.css` — contains variables such as `--color-zinc-900`, `--spacing`, `--radius-lg`, `--font-sans`.

Canonical token families in this project (examples and MCP target variable names):

- Colors: map Figma color token names to CSS custom properties named `--color-{name}-{step}`.
  - Example: Figma `Zinc / 900` → `--color-zinc-900` (used widely in components).
  - Colors present in compiled CSS: `--color-red-500`, `--color-indigo-600`, `--color-zinc-900`, `--color-white`, `--color-black`, etc.

- Spacing: base unit is `--spacing` (value: `0.25rem` in compiled CSS).
  - Usage pattern in components: Tailwind utility expressions like `px-[calc(--spacing(3.5)-1px)]` expand to `calc(var(--spacing) * 3.5 - 1px)` at runtime. MCP should produce `--spacing: <base>` and the components will multiply in-class.

- Radii: `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`, `--radius-2xl`, `--radius-3xl`.

- Type: `--font-sans`, `--font-mono`, `--text-sm`, `--text-base`, `--text-lg`, and line-height tokens like `--text-sm--line-height`.

- Motion / easing / timing: `--ease-in`, `--ease-out`, `--default-transition-duration`.

Recommendation for MCP token names (map Figma → CSS var):
- Figma token kind "color" + name/scale -> `--color-{name}-{scale}` (lowercase, hyphenated). E.g. Figma `Primary / 500` -> `--color-primary-500`.
- Figma spacing tokens -> `--spacing` (base) plus scale if you prefer explicit variables (e.g., `--spacing-1`, `--spacing-2`) but this repo uses a base unit with multipliers.

Example token output block (place as a canonical file for MCP to write to):

File: `src/styles/design-tokens.css`
Contents (example):

  :root {
    --color-zinc-900: oklch(...);
    --color-indigo-500: oklch(...);
    --spacing: 0.25rem;
    --radius-lg: 0.5rem;
    --font-sans: Inter, sans-serif;
  }

Place this file above your Tailwind entry (import it from `src/styles/tailwind.css`) so tokens exist at runtime for component class generation.

## Components — how they consume tokens
Pattern summary:
- Components in `src/components/*.tsx` compose Tailwind utility class strings and embed CSS variable assignments inline using Tailwind's arbitrary value syntax (square-bracket notation). Example pattern in `button.tsx`:

- File: `src/components/button.tsx` — key pattern seen:

  // styles.colors object assigns component-scoped tokens via inline CSS vars
  '[--btn-bg:var(--color-zinc-900)] [--btn-border:var(--color-zinc-950)]/90 [--btn-hover-overlay:var(--color-white)]/10'

What this means for MCP mapping:
- When Figma provides a color token (e.g., `primary-500`), MCP should write that value to `--color-primary-500`.
- Component-level tokens are derived in the component by assigning component variables to `var(--color-...)`. Example: `--btn-bg: var(--color-indigo-500)`. MCP doesn't need to write `--btn-bg` — components set those at render time.

Common component token patterns to support (scan `src/components`):
- Buttons: `--btn-bg`, `--btn-border`, `--btn-hover-overlay`, `--btn-icon`
- Inputs / Select / Combobox / Textarea: `--input-bg`, `--input-border`, `--input-placeholder`
- Switch / Checkbox / Radio: `--switch-bg`, `--switch-ring`, `--checkbox-checked-bg`, `--radio-checked-bg`

Automated rule examples (MCP rules pseudocode):
- If Figma token kind == 'color' and name == 'zinc-900' then set CSS var `--color-zinc-900` to value.
- If Figma token kind == 'spacing' and name == 'base' then set CSS var `--spacing`.

## Frameworks & key files
- Next.js + App Router — code in `src/app/*` (layouts, pages): `src/app/layout.tsx`, `src/app/(app)/layout.tsx`.
- React + TypeScript — `tsconfig.json` is present and `src/components/*.tsx` holds components.
- Tailwind CSS via PostCSS — `postcss.config.mjs` references `@tailwindcss/postcss`. Tailwind entry file: `src/styles/tailwind.css`.
- Headless UI primitives used: `@headlessui/react` (controls/accessibility patterns).
- Icon library: `@heroicons/react`.

Where to write MCP outputs (recommended)
- `src/styles/design-tokens.css` (new file): canonical CSS custom properties written by MCP. Import this file at the top of `src/styles/tailwind.css`.
- MCP mapping manifest: `mcp/token-mapping.json` — canonical mapping from Figma semantic names to CSS variables. Point your MCP server at this file so it knows which CSS variables to write in `src/styles/design-tokens.css`.
- Alternative: write to `tailwind.config.js` as theme extensions and rebuild Tailwind — more painful for runtime updates.

## Styling & Integration approach
Rules and wiring recommendations:
1. Canonical file: MCP writes Figma tokens to `src/styles/design-tokens.css` under `:root`.
2. Import order: ensure `design-tokens.css` is imported before Tailwind utilities so generated classes can reference variables at runtime (edit `src/styles/tailwind.css` to `@import './design-tokens.css';` before `@import 'tailwindcss';`).
3. Naming convention: Figma token name -> kebab-case -> CSS var `--{category}-{name}-{scale}`. E.g., `Primary / 500` -> `--color-primary-500`.
4. Dark mode: values can be emitted using a `:root[data-theme='dark'] { ... }` or `.dark { ... }` block depending on how the app toggles dark mode. This repo uses Tailwind's `dark:` variant. Emit both `:root` and `.dark` blocks if you want automatic dark tokens.
5. Spacing handling: emit `--spacing` base unit (e.g., `0.25rem`). Components multiply this base with their in-class multipliers.

Quick example: Figma -> CSS output (MCP-generated `src/styles/design-tokens.css`)

  :root {
    --color-indigo-500: #6366F1; /* MCP writes Figma color */
    --spacing: 0.25rem;
    --radius-lg: 0.5rem;
  }

Dark mode block example (if using `.dark` class):

  .dark {
    --color-zinc-900: #111827;
  }

## Icon system
- This repo uses `@heroicons/react`. Icons are React components imported where needed (e.g., `import { XIcon } from '@heroicons/react/24/outline'`).
- For Figma icons: export optimized SVGs and add to `public/` (or create a `src/icons/` React wrapper set). Prefer React component wrappers for sizing/props.

## Assets & images
- Public folder: `public/flags`, `public/events`, `public/teams`, `public/users` — used by `src/data.ts` and pages. Use the `public/` path in Figma export rules to map asset filenames.
- Best practice: MCP should write an assets manifest (JSON) mapping Figma asset names -> `/public/...` paths and optionally generate React wrappers for complex assets.

## Project structure (short)
- `src/components/` — UI primitives (button.tsx, input.tsx, select.tsx, radio.tsx, switch.tsx, etc.)
- `src/app/` — Next.js app routes and layouts
- `src/styles/tailwind.css` — Tailwind entry (import this file in `src/app/layout.tsx` via global import)
- `public/` — static assets referenced by demo data

## Practical MCP implementation checklist
1. Add `src/styles/design-tokens.css` as MCP target. (Recommended)
2. Update `src/styles/tailwind.css` to import the design tokens file above Tailwind.
3. Emit tokens using the conventions above (color -> `--color-*`, spacing -> `--spacing`, radii -> `--radius-*`).
4. For dark mode, emit `.dark { ... }` or `:root[data-theme='dark']` blocks consistent with the app's approach.
5. Create a small integration test (e.g., a dev-only page) that toggles a token value and shows the visual change in a Button to verify runtime token wiring.

## Where I found the evidence
- Tailwind entry: `src/styles/tailwind.css` (imports Tailwind, contains a small `@theme` block).
- Compiled token list: `.next/static/css/app/layout.css` — contains the full `:root` token block (colors, spacing, radii, type sizes).
- Components using tokens: `src/components/button.tsx`, `src/components/radio.tsx`, `src/components/checkbox.tsx`, `src/components/switch.tsx`, `src/components/input.tsx`, `src/components/select.tsx`, etc.

## Next steps I can take (pick one)
- A: Create `src/styles/design-tokens.css` with a representative starter set and import it from `src/styles/tailwind.css` so MCP tooling has a canonical file to update. (Low risk)
- B: Produce a mapping JSON template (Figma token -> CSS var) that your MCP server can use to push updates.
- C: Generate a small verification page in `src/app/dev/token-checker/page.tsx` that toggles a CSS variable and shows the effect on a Button component.
---
End of rules doc.
