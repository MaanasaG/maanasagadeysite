# maanasagadey.com

Personal site for **Maanasa Gadey** — engineering leader, writer, gardener.

Single scroll-driven page with a plant animation tied to scroll position, plus MDX essays under `/posts/`.

**Live:** [maanasagadey.com](https://maanasagadey.com) · **Deploy guide:** [DEPLOY.md](./DEPLOY.md)

---

## Quick start

```bash
nvm use          # Node 22 (.nvmrc)
npm install
npm run dev      # http://localhost:3000
```

Before pushing to `main`:

```bash
npm run check    # production build + verify export
```

**To ship:** merge to `main` and push — GitHub Actions deploys automatically. See [DEPLOY.md](./DEPLOY.md).

---

## Stack

- **Next.js 15** (App Router, `output: 'export'` — fully static)
- **React 19** + **TypeScript**
- **Tailwind CSS 3**
- **MDX** for blog posts (`@next/mdx`)
- **Source Serif 4** + **Inter** + **JetBrains Mono** via `next/font`

No UI library, no analytics.

---

## Adding a blog post

1. Add `content/posts/your-slug.mdx` (match section structure from an existing post).
2. Register at the **top** of `lib/posts.tsx` (newest first).
3. Run `npm run check`, then push to `main`.

---

## Plant animation

Source video: `plant_growth.mp4`. Frames live in `public/frames/` (generated via `npm run frames` — needs `ffmpeg` and `cwebp`).

`components/PlantCanvas.tsx` scrubs 121 WebP frames against scroll; static frame on small viewports or `prefers-reduced-motion`.

---

## Project structure

```
app/                  # layout, homepage, post routes
components/           # PlantCanvas, sections (Hero, Writing, …)
content/posts/        # MDX essays
lib/posts.tsx         # post registry — edit when adding a post
public/               # CNAME, photos, frames
scripts/              # extract-frames.sh, verify-build.sh
.github/workflows/    # deploy on push to main
```

---

## Design tokens

| Token         | Value     | Use                    |
| ------------- | --------- | ---------------------- |
| `--page`      | `#F2F4EF` | Background             |
| `--ink`       | `#1E2D1C` | Body text              |
| `--muted`     | `#5E6E5C` | Secondary text         |
| `--sage`      | `#6E8A6E` | Labels, hairlines      |
| `--sage-dark` | `#3F5A3F` | Hover, list markers    |
