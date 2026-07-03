# Claude Design Handoff — frazier.com

## What to do with this doc
Paste this entire document into Claude Design at claude.ai/design as your starting prompt.
Then attach screenshots of the live site (http://localhost:3000) as visual reference.

---

## Who I am
Frazier Horn — founder, builder, photographer.
- CEO of ServiceSync AI / HornHaus Technologies
- Columbia M.S. Technology Management (2024), graduation speaker
- Boston University B.A. Computer Science & Economics (2021)
- Third-generation automotive industry background
- Framework: "Happiness by Design" — empathy as a design principle

---

## The site
Personal website at frazier.com. Next.js 14, static export, deployed to a static host.

### Pages
- **/** — Home: hero, "Now" (current work), Background (timeline), "I care about"
- **/building** — Projects I've built (8 cards: ServiceSync AI, Screenpipe plugins, LangChain pipeline, B+ tree, Eight Puzzle, network protocol, full-stack apps, Android apps)
- **/photography** — Full-screen iframe embed of my Wix photography portfolio
- **/travel** — Interactive travel map (iframe embed)
- **/writing** — Writing & speaking (4 cards: Happiness by Design talk, essays, press, panels)
- **/resume** — Embedded resume with download link

---

## Current design system (what to redesign)

### Colors
```css
--text: #1a1a1a
--text-secondary: #555
--bg: #fafafa
--accent: #222
--border: #e0e0e0
```

### Typography
System font stack: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif

### Key measurements
- Nav: fixed top, 2rem 4rem padding
- Hero: min-height 80vh, max-width 800px
- Sections: 6rem 4rem padding, max-width 800px
- Cards: 1px border, 2rem padding, 8px border-radius
- Footer: flex row, space-between

### Current vibe
Clean, minimal, off-white background. Very sparse. Functional but visually flat — no visual hierarchy beyond font weight, no color, no personality. Feels like a default template.

---

## What I want (design direction)

### Personality / feel
- Sophisticated but warm — not cold tech bro, not try-hard creative
- Should feel like someone who is serious about building things AND has an eye for aesthetics
- Photography is a big part of who I am — the site should feel like it was designed by someone with visual taste
- Think: Paul Graham's essays meet a well-shot editorial magazine

### Specific asks
1. **Typography upgrade** — move to a real type system. Consider pairing a serif (for headlines/hero) with a clean sans-serif (for body/nav). Something like Playfair Display + Inter, or Fraunces + Inter, or even just a really well-set single font.
2. **Color** — current off-white is fine as a base but it's lifeless. Consider a very subtle warm tint on the background, or a dark mode toggle, or an accent color (could be something pulled from my photography — warm amber, deep teal, something with character).
3. **Hero section** — needs more presence. Right now it's just text floating. Could be: large type treatment, subtle texture/grain, a hero image from my photography, a split layout, an animated element.
4. **Cards** — the building/writing cards feel generic. Could be more editorial — think magazine-style article cards with better visual hierarchy.
5. **Nav** — current nav is fine structurally but plain. Could use a subtle blur/glass effect on scroll, or a more distinctive logo treatment.
6. **Whitespace & rhythm** — the spacing is good but monotonous. Add more variation in section sizing to create rhythm.
7. **Mobile** — needs a proper hamburger menu, not a squished version of desktop nav.

### Constraints
- Must stay Next.js / static export (no server-side rendering needed)
- Photography and travel pages are iframes — can't redesign those interiors, but can design the frame/wrapper
- Keep it fast — no heavy animation libraries, no video backgrounds
- Accessibility matters

---

## Current CSS (full source)

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --text: #1a1a1a;
  --text-secondary: #555;
  --bg: #fafafa;
  --accent: #222;
  --border: #e0e0e0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: var(--text);
  background: var(--bg);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
  position: fixed;
  top: 0;
  width: 100%;
  background: var(--bg);
  z-index: 100;
}

.nav-name { font-weight: 600; font-size: 1.1rem; text-decoration: none; color: var(--text); }
.nav-links { display: flex; gap: 2rem; }
.nav-links a { text-decoration: none; color: var(--text-secondary); font-size: 0.9rem; transition: color 0.2s; }
.nav-links a:hover { color: var(--text); }

main { padding-top: 6rem; }

.hero { min-height: 80vh; display: flex; flex-direction: column; justify-content: center; padding: 0 4rem; max-width: 800px; }
.hero h1 { font-size: 3.5rem; font-weight: 700; margin-bottom: 1.5rem; letter-spacing: -0.02em; }
.hero .tagline { font-size: 1.4rem; color: var(--text-secondary); font-weight: 300; max-width: 600px; }
.hero .intro { margin-top: 2rem; font-size: 1.1rem; color: var(--text-secondary); max-width: 550px; line-height: 1.8; }

.section { padding: 6rem 4rem; max-width: 800px; }
.section h2 { font-size: 1.8rem; font-weight: 600; margin-bottom: 2rem; letter-spacing: -0.01em; }
.section p { color: var(--text-secondary); margin-bottom: 1rem; font-size: 1.05rem; line-height: 1.8; }

.card { border: 1px solid var(--border); padding: 2rem; margin-bottom: 1.5rem; border-radius: 8px; transition: border-color 0.2s; }
.card:hover { border-color: var(--accent); }
.card h3 { font-size: 1.2rem; margin-bottom: 0.75rem; }
.card .meta { font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem; }

.timeline-item { display: flex; gap: 2rem; margin-bottom: 2.5rem; padding-bottom: 2.5rem; border-bottom: 1px solid var(--border); }
.timeline-item:last-child { border-bottom: none; }
.timeline-item .year { font-size: 0.85rem; font-weight: 600; color: var(--text-secondary); min-width: 60px; padding-top: 0.2rem; }
.timeline-item h3 { font-size: 1.1rem; margin-bottom: 0.25rem; }

footer { padding: 4rem; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; color: var(--text-secondary); font-size: 0.85rem; }
footer a { color: var(--text-secondary); text-decoration: none; margin-right: 1.5rem; }

@media (max-width: 768px) {
  nav { padding: 1.5rem 2rem; }
  .nav-links { gap: 1rem; font-size: 0.8rem; }
  .hero { padding: 0 2rem; min-height: 60vh; }
  .hero h1 { font-size: 2.5rem; }
  .section { padding: 4rem 2rem; }
  footer { padding: 2rem; flex-direction: column; gap: 1rem; }
}
```

---

## Home page content (full source)

```jsx
<section className="hero">
  <h1>Hey, I'm Frazier.</h1>
  <p className="tagline">I build things that make people's lives better.</p>
  <p className="intro">
    Right now I'm building intelligence infrastructure for service industries.
    But I'm also a photographer, a perpetual student, and someone who believes
    empathy is a design principle — not a soft skill.
  </p>
</section>

<section className="section">
  <h2>Now</h2>
  <div className="card">
    <h3>Stratus / ServiceSync AI</h3>
    <p>AI-driven decision layer for automotive fixed operations. Turning service department chaos into structured, actionable intelligence.</p>
    <p className="meta">HornHaus Technologies, Inc. — Raising pre-seed.</p>
  </div>
</section>

<section className="section">
  <h2>Background</h2>
  <div className="timeline-item">
    <span className="year">2024</span>
    <div>
      <h3>Columbia University</h3>
      <p>M.S. Technology Management</p>
      <p className="meta">Graduation speaker. HCM Talks presenter. Startup used as case study.</p>
    </div>
  </div>
  <div className="timeline-item">
    <span className="year">2021</span>
    <div>
      <h3>Boston University</h3>
      <p>B.A. Computer Science & Economics</p>
      <p className="meta">Spark! Innovation Fellowship.</p>
    </div>
  </div>
  <div className="timeline-item">
    <span className="year">Always</span>
    <div>
      <h3>Third-generation automotive</h3>
      <p>Grew up watching my father navigate broken systems. The service department was always chaotic — not because of the people, but because of the tools.</p>
    </div>
  </div>
</section>

<section className="section">
  <h2>I care about</h2>
  <p>Photography — architecture, travel, and moments most people walk past.</p>
  <p>Building things — from AI search algorithms to full-stack apps to the company I'm running now.</p>
  <p>Doing things for others — the service advisors and technicians I build for are the backbone of a $157B industry.</p>
  <p>Happiness by Design — my framework for building technology that centers the emotional reality of the people who use it.</p>
</section>
```

---

## How to use Claude Design output back in the site

When Claude Design gives you a redesign:

1. **If it gives you a new CSS file** — replace `/app/globals.css` with it
2. **If it gives you updated JSX** — replace the relevant page files in `/app/`
3. **If it gives you new font imports** — add them to `/app/layout.js` in the `<head>`
4. **Run locally** to verify: `npm run dev` (already running at http://localhost:3000)
5. **Rebuild** when ready: `npm run build` (outputs to `out/`)

### To hand off Claude Design output back to Kiro (me):
Just paste the new CSS/JSX into our conversation and say "implement this" — I'll write it into the files and verify the build passes.

---

## Suggested Claude Design prompts to try

**Start here:**
> "I'm redesigning my personal website frazier.com. I've pasted the full CSS and page content above. The site is functional but visually flat. I want it to feel sophisticated, warm, and editorial — like it was made by a founder who also has genuine visual taste. I'm a photographer, so the design should feel like someone who cares about composition and light. Please redesign the homepage with upgraded typography (consider a serif/sans-serif pairing), a more impactful hero section, and a refined color palette. Keep it fast and accessible."

**For variations:**
> "Show me 3 different directions for the hero section — one dark/moody, one clean editorial, one with a featured photo background."

**For specific components:**
> "Redesign the project cards on the /building page to feel more like editorial magazine article cards — better visual hierarchy, maybe category labels, more distinctive."

**For mobile:**
> "Design a mobile nav with a proper hamburger menu that feels premium, not like an afterthought."

---

## Files in the project

```
frazier.com/
├── app/
│   ├── layout.js          ← Nav + global layout
│   ├── globals.css         ← ALL styles live here
│   ├── page.js             ← Home page
│   ├── building/page.js    ← Projects page
│   ├── photography/page.js ← Photography (iframe)
│   ├── travel/page.js      ← Travel map (iframe)
│   ├── writing/page.js     ← Writing & speaking
│   └── resume/page.js      ← Resume (iframe + download)
├── public/
│   ├── photography-site.html
│   ├── travel.html
│   ├── resume.html
│   ├── resume.docx
│   └── photos/wix-originals/ ← 31 full-res photography images
├── out/                    ← Build output (auto-generated)
└── package.json
```
