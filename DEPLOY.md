# Deploying maanasagadey.com

**Hosting:** GitHub Pages (repo `MaanasaG/maanasagadeysite`)  
**Domain:** [maanasagadey.com](https://maanasagadey.com) — DNS at GoDaddy, A records → GitHub Pages

## Ship a change (the whole workflow)

```bash
git checkout main
git pull origin main
# …edit files…
npm run check          # build + sanity-check the export
git add -A && git commit -m "Your message"
git push origin main   # deploy starts automatically (~1 min)
```

Watch the run: [Actions → Deploy to GitHub Pages](https://github.com/MaanasaG/maanasagadeysite/actions)

Live site updates when the workflow shows **success** (usually under 2 minutes).

## Before you push

| Command | What it does |
| -------- | ------------- |
| `npm run dev` | Local preview at http://localhost:3000 |
| `npm run check` | Production build + verify `out/` has expected pages |
| `npm run preview` | Build, then serve `out/` at http://localhost:4173 |

## Add a blog post

1. Add `content/posts/your-slug.mdx` (copy section headings from an existing post).
2. Register it at the **top** of the `posts` array in `lib/posts.tsx`.
3. `npm run check` → commit → push `main`.

Post URL: `https://maanasagadey.com/posts/your-slug/`

## If the site looks stale in your browser

1. Confirm the address bar is **`https://maanasagadey.com`** (not `maanasagadey-site.vercel.app`).
2. Hard refresh: **Cmd+Shift+R** (Mac) or open an **incognito** window.
3. Try `https://maanasagadey.com/?v=1` to bypass cache.

GitHub Pages caches HTML for ~10 minutes at the edge; a hard refresh usually fixes local browser cache.

## One-time cleanup (do this once)

- **Vercel:** Delete the old project or remove the custom domain so `maanasagadey-site.vercel.app` cannot confuse you.
- **GoDaddy DNS:** `www` should CNAME to **`MaanasaG.github.io`** (not `maanasag.github.io`). Apex uses A records `185.199.108.153`, `.109.153`, `.110.153`, `.111.153`.

## Manual redeploy (no code change)

GitHub → **Actions** → **Deploy to GitHub Pages** → **Run workflow** → branch `main`.
