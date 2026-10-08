# Platmosphere website

Website of **Platmosphere**, the annual in-person conference for platform enthusiasts by Mia-Platform
(chapter 2026 – *Master the Vibe*). Live site: <https://platmosphere.com>.

This repository is a 1:1 rebuild of the original site, migrated from a CMS-backed Next.js app to a
codebase where **all content lives in the repo** (JSON files) and the site is exported as **static HTML**.
It is meant to be maintained with AI coding agents: see [`CLAUDE.md`](./CLAUDE.md) for the working rules.

## Stack

| | |
|---|---|
| Framework | Next.js 14 (App Router) with `output: 'export'` → plain static files in `out/` |
| UI | React 18, MUI 5 + Emotion (same stack, theme and breakpoints as the original site) |
| Fonts | Inter + Fira Code via `next/font/google` (self-hosted at build time) |
| Animations | Lottie (`lottie-react`, `@lottiefiles/react-lottie-player`), `react-fast-marquee` |
| Third parties | HubSpot (analytics, cookie banner, forms), Google Tag Manager, Sessionize (agenda), Vimeo/YouTube embeds |

## Getting started

Requirements: Node.js ≥ 18 (developed on Node 22) and npm.

```bash
npm install
npm run dev               # http://localhost:3000
```

Quality gates (also run in CI):

```bash
npm run validate:content  # referential integrity of /content + missing media files
npm run typecheck
npm run lint
npm run build             # static export into ./out
```

Preview the production build locally with `npm start` (serves `out/`).

## Project layout

```
content/                  ← EVERYTHING editable lives here (JSON)
  site.json               navbar buttons + announcement banner
  speakers.json           all speakers (2026 and earlier editions)
  talks.json              2026 talks  → /talks/<readablePathId>
  tracks.json             track names and chip colours
  content-hub.json        session recordings → /content-hub/<readablePathId>
  gallery.json            photo gallery (/gallery)
  partners.json           sponsors + media partners shown on the home page
  pages/*.json            copy and lists of single pages (home, about, speakers, …)
  archive/2024.json …     speakers and partners of past editions
public/
  media/                  images migrated from the CMS (speakers, logos, gallery, covers)
  assets/ icons/ pdf/ …   static assets of the original site
src/
  app/                    one folder per route (Next.js App Router)
  components/             UI, grouped by area (layout, home, speakers, content-hub, archive, …)
  lib/                    typed content access (content.ts, site.ts, partners.ts), image loader
  theme/                  MUI theme, edition palettes (2026 / 2025 / 2024), fonts
scripts/validate-content.mjs
```

## Pages

| Route | Source |
|---|---|
| `/` | `src/app/page.tsx` + `content/pages/home.json`, `partners.json` |
| `/about` | `content/pages/about.json` (venue, sustainability, FAQ) |
| `/speakers` | `content/pages/speakers.json` (ordered speaker ids) |
| `/talks/[slug]` | `content/talks.json` (28 pages) |
| `/content-hub`, `/content-hub/[slug]` | `content/content-hub.json` (56 pages) |
| `/gallery` | `content/gallery.json` |
| `/become-a-sponsor`, `/join-us`, `/register-now` | HubSpot forms |
| `/agenda` | Sessionize embed |
| `/2024`, `/2025` | archive pages, `content/archive/*.json` |

## Deployment

`npm run build` produces a fully static site in `out/` that can be hosted anywhere
(nginx, S3/CloudFront, Netlify, Cloudflare Pages, GitHub Pages…). Pages are exported as
`about.html`, `talks/<slug>.html`, …, so the web server must resolve extension-less URLs.
Example for nginx:

```nginx
location / {
  try_files $uri $uri.html $uri/index.html =404;
}
error_page 404 /404.html;
```

### GitHub Pages preview

`.github/workflows/pages.yml` builds and deploys the site to GitHub Pages on every push to the main branch
(and on demand from the Actions tab). The site is then served from a sub-path
(`https://<owner>.github.io/<repo>/`), so the build runs with `NEXT_PUBLIC_BASE_PATH=/<repo>`; preview builds are
marked `noindex` so they never compete with platmosphere.com. To try a sub-path build locally:

```bash
NEXT_PUBLIC_BASE_PATH=/websitemigration npm run build
```

One-time setup: *Settings → Pages → Build and deployment → Source: **GitHub Actions***.

## Migration notes

The site was rebuilt from the production pages and bundles of platmosphere.com: layouts and styles were
ported component by component, content was exported from the CMS, and every page was verified against the
original with automated full-page screenshot diffs (desktop 1440px, tablet 1024px, mobile 390px) and text
diffs. Intentional differences:

- **Content is the latest CMS data.** Some original pages (`/speakers`, `/talks/*`) were stuck in a stale
  cache and showed older photos for about ten speakers; the rebuild uses the most recent version everywhere.
- **Bugs of the original fixed:** navbar logo invisible on mobile (image optimizer issue), broken sponsor logos
  on `/register-now`, Fintech District link without `https://`, three unpublished speaker references removed.
- Absolute links to `https://platmosphere.com/...` in navigation/banner are now relative.
- Images are served as the original files (no on-the-fly optimizer); a width-based `srcset` is still emitted
  (see `src/lib/image-loader.ts`) so that images get the same intrinsic size as on the original site.

### Dependencies & security

The project stays on Next.js 14 (same major as the original) to keep rendering identical. `npm audit`
reports Next.js advisories that affect the **Next server runtime** (image optimizer, Server Components
endpoints, rewrites/middleware): none of it runs in production here, because the site is deployed as static
files. Upgrading to a newer Next major is possible later but should be followed by a full visual comparison.
