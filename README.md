# Thegrafx — Break the grid. Not the rules.

One-page site for a fictional graphic design studio, built in Astro from the
Claude Design canvas export in `Poster met gebroken grid/`.

## Structure

```text
src/
├── components/     one component per section, each with its own scoped <style>
├── data/site.ts    all copy + the wordmark's shard geometry
├── layouts/        BaseLayout — meta, fonts, JSON-LD, skip link, script entry
├── pages/index.astro
├── scripts/        nav.ts (progress bar + menu), reveal.ts, shards.ts
└── styles/global.css  design tokens, reset, keyframes, reduced-motion
```

Colours, type and rhythm live as custom properties on `:root` in
`src/styles/global.css`. Change `--paper`, `--ink` or `--accent` there and the
whole page follows.

## Fonts

Anton, Archivo and Poppins are pulled through Astro's Fonts API
(`fonts` in `astro.config.mjs`) — self-hosted, subsetted, with generated
fallback metrics. No request leaves for Google.

## Work images

The three case studies use `WorkPlaceholder.astro`, which draws its artwork in
CSS from the poster's own vocabulary (halftone fields, an orange disc, column
rules, debris). To swap in real photography, drop the file in `src/assets/` and
replace the component with `<Image>` from `astro:assets` inside `Work.astro`.

## Motion

Everything animated is gated on `prefers-reduced-motion`. The shards flung off
the K run a small physics simulation driven by the pointer (`shards.ts`); it is
skipped entirely on coarse pointers and when reduced motion is requested.

## Commands

| Command           | Action                                    |
| :---------------- | :---------------------------------------- |
| `npm install`     | Install dependencies                      |
| `npm run dev`     | Dev server on `localhost:4321`            |
| `npm run build`   | Production build to `./dist/`             |
| `npm run preview` | Preview the build locally                 |
| `npx astro check` | Type-check `.astro` and `.ts` files       |
