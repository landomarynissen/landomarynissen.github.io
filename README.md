# Lando Marynissen — portfolio

A static website built with [Astro](https://astro.build). Plain CSS, almost no JavaScript.
The design decisions are written down in `DESIGN.md`.

## Run it on your computer

You need Node.js 22 or newer (https://nodejs.org). Then, in the VS Code terminal:

```
npm install      # once: downloads Astro
npm run dev      # starts the site at http://localhost:4321
```

Stop the server with Ctrl + C. `npm run build` makes the final files in `dist/`.

## Where things are

| Path | What it is |
|---|---|
| `src/pages/` | One file per page. `index.astro` is the home page. |
| `src/content/work/` | One text file per project: title, year, cover picture, and so on. |
| `src/assets/work/` | The project pictures, one folder per project. |
| `src/layouts/Base.astro` | The frame around every page (head tags, header, footer). |
| `src/components/` | Reusable parts: header, footer, project card, and the blocks of a project page. |
| `src/styles/tokens.css` | All colours, sizes, spacing and timings. Change the look here. |
| `src/styles/base.css` | Shared rules and the type roles (`.display`, `.label`, ...). |
| `src/styles/fonts.css` | Loads the font files from `src/assets/fonts/`. |
| `src/site.js` | Your name, email and social links, in one place. |
| `public/` | Files copied to the site as they are: videos, the favicon, the sharing picture. |
| `_framer-export/` | Images saved from the old Framer site. Not part of the website, and never uploaded. |

## Placeholders

Search the project for `[PLACEHOLDER]` to find everything that still needs real content.

## Add a project

1. Make a folder in `src/assets/work/` and put the pictures in it.
2. Copy one of the files in `src/content/work/`, rename it, and change the text.
   - `order` decides where it appears. Number 1 is the big one on the home page.
   - `services` is the short list shown next to the intro.
   - `blocks` is the page from top to bottom: `image`, `pair` (two pictures side by
     side), `video` or `banner` (one sentence on a grey panel). Reorder them to
     rearrange the page.
3. Save. The home page and the work list pick it up by themselves.

## What is never uploaded

`.gitignore` lists what stays on your computer: `node_modules`, the built site,
`_framer-export/`, PDFs, design source files, `DESIGN.md` and secrets.

## Security

The finished site only loads its own files (see the Content-Security-Policy in
`src/layouts/Base.astro`). If you ever add something from another website, such
as an embedded video or a font service, that policy has to be widened or the
browser will block it.
