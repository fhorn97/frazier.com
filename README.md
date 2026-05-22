# frazier.com

Personal website. Built with Next.js 14 (App Router), static export.

## Running locally

```bash
npm install
npm run dev
```

## Deploying

Static export (`next build` outputs to `out/`). Deploy to Netlify, Vercel, or Cloudflare Pages.

## Structure

```
app/
├── page.js           # Home — hero, background, values
├── layout.js         # Nav, global layout
├── globals.css       # All styles
├── building/page.js  # Projects and things I've built
├── photography/page.js # Photo gallery
└── writing/page.js   # Writing and speaking
public/
└── photos/           # Photography images (add here)
```
