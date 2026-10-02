# Modern Portfolio UI/UX — Design & Templates

A fast, static personal portfolio built with **Astro 5** and **Tailwind CSS 4** — plus a
curated collection of modern, sleek, high-impact UI/UX design assets for portfolios and
personal branding websites.

![Preview](./Web%20Design%20Templates_%20Modern%20Portfolio%20UI_UX%20Inspiration.jpg)

## Features

- **Astro 5 portfolio site** — static SSG, instant loads, great SEO
- **Responsive layouts** — mobile, tablet, and widescreen
- **Modern aesthetics** — dark/light contrast, neo-brutalism & glassmorphism accents
- **Hero assets included** — transparent cutout (`hero-nobg.png`) ready for custom
  background gradients, canvas animations, and 3D effects
- **Type-safe** — TypeScript strict config, `astro check` ready

## Tech stack

| Layer     | Tech                                  |
|-----------|---------------------------------------|
| Framework | Astro 5 (static output)               |
| Styling   | Tailwind CSS 4 (`@tailwindcss/vite`)  |
| Images    | Sharp (Astro image optimization)      |
| Language  | TypeScript                            |

## Quick start

```bash
npm install
npm run dev      # local dev server
npm run build    # static build -> dist/
npm run preview  # preview the production build
```

## Project structure

```plaintext
.
├── src/                     # Astro components, pages, styles
├── public/                  # Static assets copied to dist/
├── astro.config.mjs         # Static output; site = https://www.ladestack.in
├── hero-nobg.png            # High-res transparent hero cutout asset
└── Web Design Templates_ Modern Portfolio UI_UX Inspiration.jpg
     # Full design concept preview
```

## Using the assets

- **Hero Image (`hero-nobg.png`)**: main subject for a portfolio hero section — works well
  with CSS background glow effects, parallax scrolling, or Three.js backgrounds.
- **Design template JPG**: visual inspiration for section layout, typography pairing,
  call-to-actions, and card structures.

## Deploy notes

Static build — deploy the `dist/` folder to any static host (Cloudflare Pages,
GitHub Pages, Netlify). No environment variables required.

---

Built by [Girish Lade](https://ladestack.in) · https://ladestack.in
