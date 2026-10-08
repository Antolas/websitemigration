# CLAUDE.md – working on the Platmosphere website

Static Next.js 14 site (App Router, `output: 'export'`) with MUI 5 + Emotion. There is **no CMS and no
backend**: content is JSON in `content/`, media files are in `public/`. A change to the site is a change to
this repository.

## Commands

```bash
npm run dev               # local dev server on :3000
npm run validate:content  # ALWAYS run after editing content/ (broken refs, missing images, duplicate slugs)
npm run typecheck
npm run lint
npm run build             # must pass before committing; output in out/
```

## Golden rules

1. **The design is frozen.** The site is a pixel-level port of the original platmosphere.com. Do not
   "improve" spacing, colours, fonts or breakpoints unless explicitly asked. When adding a section, reuse
   existing components and styled blocks instead of inventing new styles.
2. **Content goes in `content/`, not in components.** If you need new copy or a new list, add it to the
   relevant JSON file (or a new file under `content/pages/`) and read it from the page.
3. Keep JSON **order** meaningful: arrays are rendered in file order (speaker grids, talks, content hub,
   logos, FAQ entries sorted by `order`).
4. Use `@/components/common/Image` (not `next/image` directly) and `@/components/common/Icon` for SVG icons in
   `public/icons`.
5. **Never hard-code root-relative URLs outside `<Image>`/`<Link>`/`router.push`.** The site can be served from a
   sub-path (GitHub Pages preview). Wrap paths in `withBase()` (plain `<img>`, `<a href>`, `window.open`, `fetch`)
   and use `${BASE_PATH}` in CSS `url()` – both from `@/lib/base-path`. Check with
   `NEXT_PUBLIC_BASE_PATH=/websitemigration npm run build`.
6. Never commit secrets. Third-party ids (HubSpot portal/form ids, GTM id, Google Maps embed key) are public
   identifiers already present in the original site.

## Content model (`content/`)

| File | What it drives | Notes |
|---|---|---|
| `site.json` | navbar items (`navbar-1..3`), CTA (`navbar-right`), top announcement banner | `type`: `navigate` (same tab), `tab` (new tab, ↗ icon), `past-editions` (dropdown 2024/2025). Remove `banner` to hide the banner. |
| `speakers.json` | every speaker | `id` is the key used everywhere. `photo` = `/media/<file>`. `priority` is informational. |
| `talks.json` | `/talks/<readablePathId>` | `speakers[]` = `{ speakerId, position }` (sorted by position), `trackId` → `tracks.json`. |
| `tracks.json` | track chip colours | |
| `content-hub.json` | `/content-hub` grid + detail pages | `videoURL` = YouTube id, `slideURL` optional, `topics/industry/format/edition` are `{label, value}` used by the filters. |
| `pages/home.json` | home copy, numbers, keywords, featured speakers | `chapter.paragraphs` support `<TextHighlighted>…</TextHighlighted>`. |
| `pages/about.json` | about page copy, venue, sustainability, FAQ | Strings support `<b>…</b>` and `<hl>…</hl>` (see `components/common/RichText.tsx`). |
| `pages/speakers.json` | order of the `/speakers` grid | list of speaker ids |
| `pages/content-hub.json` | hero + filter definitions | filter options must match labels used in `content-hub.json` |
| `pages/register-now.json`, `pages/become-a-sponsor.json` | copy, logo lists, HubSpot form ids | |
| `partners.json` | home sponsors (grouped, `size`: `big`/`standard`) and media partners | |
| `gallery.json` | `/gallery` photos | `orientation`: `horizontal` / `vertical` |
| `archive/2024.json`, `archive/2025.json` | speakers & partners of past editions | archive copy is in `src/app/2024|2025/page.tsx` |

### Recipes

- **Add a speaker**: add the photo to `public/media/`, append an entry to `speakers.json` (new unique `id`),
  reference it from a talk (`talks.json`) and add the id to `pages/speakers.json` where it should appear.
- **Add a talk**: append to `talks.json` with a unique URL-safe `readablePathId`; the page
  `/talks/<readablePathId>` and its sitemap entry are generated automatically.
- **Publish a recording**: append to `content-hub.json` (cover in `public/media/`, YouTube id in `videoURL`).
- **Change the banner / navbar**: edit `site.json`.
- **New edition (e.g. 2027)**: keep the current pages for 2027 and move the 2026 copy to an archive page like
  `/2025` (palette in `src/theme/palettes.ts`, wrapper `EditionThemeProvider`).

## Architecture notes

- `src/theme/theme.ts` – MUI theme copied from the original (custom typography variants such as `bodyXXXL`,
  `bodyXSAlt`, … are typed in `mui.d.ts`). Breakpoints: `sm` 600, `md`/`lg` 1200.
- `src/theme/palettes.ts` – palettes of 2026 (`current`), 2025 (purple), 2024 (blue). Archive pages are wrapped
  in `EditionThemeProvider`; shared components read the palette with `useEditionTheme()`.
- Styling is done with MUI `styled()` blocks that use nested class names (`'.speaker-image': {...}`), mirroring the
  original code. Keep the key order of style objects: later media queries override earlier ones.
- Pages are server components; anything interactive lives in `'use client'` components.
- Lottie animations are loaded client-side only (`next/dynamic` with `ssr: false`): `lottie-web` touches
  `document` at import time and Node ≥ 21 defines `navigator`, which breaks prerendering otherwise.
- `src/lib/image-loader.ts` is a custom `next/image` loader that serves the original files but keeps a width-based
  `srcset`; with `sizes="100vw"` this gives images the same intrinsic size as the original optimizer. SVGs are
  passed through unoptimized by `components/common/Image.tsx`.
- `--navbar-height` (CSS variable set by `StickyNavBar`) pads heroes below the fixed navbar.

## Verifying changes

Besides the commands above, check the affected pages in the browser at 1440px, 1024px and 390px width. For
visual work, compare screenshots before/after: the build is deterministic, so any unexpected pixel change is a
regression.
