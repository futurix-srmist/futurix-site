# FUTURIX — CTECH Association Website

Official website for FUTURIX, the CTECH Association of SRM Institute of Science & Technology, KTR campus.

## Tech stack
- React 19 + Vite
- Tailwind CSS v4
- Three.js (interactive WebGL hero background — icosahedron + particle field that reacts to the cursor)
- GSAP (text reveal animations, scroll progress bar)
- Framer Motion (scroll-triggered section reveals)

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Project structure

```
src/
  App.jsx                  — assembles all sections
  index.css                — design tokens, fonts, custom scrollbar, global styles
  three/
    HeroScene.jsx           — interactive Three.js background used in the Hero
  components/
    Navbar/                 — sticky nav + mobile menu
    Hero/                   — landing section with 3D background & animated headline
    About/                  — "who we are" section
    WhatWeDo/                — 6-card grid of club activities
    WhyJoin/                 — reasons-to-join list
    Faculty/                 — faculty leadership bios (photo placeholders included)
    Team/                    — "coming soon" placeholder section (100vh)
    Contact/                 — Instagram / email / phone contact rows
    Footer/                  — closing footer
    ScrollProgress/          — top-of-page scroll progress bar
    CustomCursor/            — custom cyberpunk cursor (desktop only)
  assets/images/logo.png     — FUTURIX logo (transparent PNG)
```

## Adding team photos later

Open `src/components/Faculty/Faculty.jsx` and `src/components/Team/Team.jsx`.
- Faculty photo placeholders are the `.faculty__photo` divs — replace the `<span>PHOTO</span>` with an `<img>` tag once you have images.
- The Team section is intentionally a placeholder ("404: TEAM NOT FOUND") until team member photos and bios are provided — swap out `Team.jsx` with real member cards when ready.

## Editing content
All copy lives directly inside each component's `.jsx` file — no CMS or data files, so search-and-replace is straightforward.

## Customizing the theme
Colors, fonts, and spacing tokens are defined as CSS variables at the top of `src/index.css` (`:root { ... }`). Update `--violet`, `--magenta`, `--iris`, etc. to adjust the palette globally.
