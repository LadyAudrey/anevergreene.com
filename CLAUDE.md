# AnEvergreene — Landing Hub

> **Shared practices live in the root `CLAUDE.md` one level up (`../CLAUDE.md`).**
> Claude Code loads it automatically from parent directories. That file covers
> the spirit of this work, working-together practices, who Audrey is, and
> session endings. This file covers only what's specific to the hub.

## What this project is

The single landing page that lives at `anevergreene.com` — Audrey's hub.
When someone scans the QR on her business card or asks "who are you?", this
is where they land. It points outward to everything she's making: Forest,
Studio, Alongside, her social profiles, her newsletter.

The visual metaphor is a **maple tree**. Each branch ends in a **leaf-tag**
that's a clickable link. Decorative leaves fill the canopy, the perimeter,
and scatter on the ground / into the sky.

Built with [Astro](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/).

## Project structure

```
anevergreene.com/
├── art/
│   └── tree-source.svg     # Audrey's hand-drawn tree (Inkscape)
├── print/                  # Business card, QR code (Inkscape sources)
├── src/
│   ├── components/
│   │   └── TreeArt.astro   # Reads tree-source.svg at build, inlines defs + paths
│   ├── data/
│   │   └── links.ts        # 7 link tips + ~30 decorative leaves
│   ├── pages/
│   │   └── index.astro     # The page (header, SVG canvas, leaves, CSS)
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Key files to know

- **`src/data/links.ts`** — Source of truth for what shows up on the tree.
  Each link has a `tip: {x, y}`, an `href`, a `label`, and a `rotate` angle.
  Decorative leaves have `x, y, rotate, scale, color, opacity`.
- **`src/pages/index.astro`** — Page layout, the SVG canvas, the leaf
  rendering logic, and all the inline CSS (palette, hover glow, etc.).
- **`art/tree-source.svg`** — Audrey edits this in Inkscape. The tree uses
  Power Stroke LPE for tapered branches and several `<linearGradient>`s for
  the fade-into-sky effect. `TreeArt.astro` reads it at build time, so a
  re-export from Inkscape auto-updates the page.

## Design principles for this site

- **Calm, not control panel** — Linktree-style pages overwhelm because they
  look like UIs. This one looks like a poem.
- **Brand language already exists** — Pull from the business card (see the
  `anevergreene_brand_language` memory). Don't invent new taglines.
- **Larger body text by default** — text-lg / text-xl rather than 16px.
- **AAA contrast on link leaves** — link leaf color must pass WCAG AAA
  against the parchment text color (#f7efe2). Current value `#1f4a23`.

## Tree art constraints

- **Branch endpoints must hit the link anchor positions** documented in
  `art/tree-source.svg`'s `link-anchors` layer. If Audrey changes a tip
  position in the SVG, the matching `tip: {x, y}` in `src/data/links.ts`
  needs to update (or vice versa).
- **Inkscape Power Stroke LPEs** generate the tapered branch shapes. Editing
  the rendered filled paths surgically (outside Inkscape) is hard — the
  proper edits happen in Inkscape on the spine path, then re-export.

## Commands

```bash
npm install     # install dependencies
npm run dev     # start dev server (localhost:4321)
npm run build   # build for production
npm run preview # preview production build locally
```

## Important

- Deploy plumbing (GitHub Pages, CNAME for anevergreene.com) is **not yet
  configured**.
- The site treats `art/tree-source.svg` as the source of truth for the tree.
  If you need to add new branches, the cleanest workflow is: open the SVG in
  Inkscape, add a branch, save. Avoid hand-editing the filled LPE paths.

## See also

- `feedback_audrey_collaboration_style.md` (memory) — how Audrey gives
  feedback and uses permission; especially relevant for design-iteration
  loops on the leaf/tree.
- `project_hub_state.md` (memory) — current state snapshot with parked
  threads (deploy, YouTube URL, leaf-orientation question, etc.).
