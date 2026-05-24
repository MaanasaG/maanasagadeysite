#!/usr/bin/env bash
# Sanity-check the static export before pushing to main.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "→ Building static export…"
npm run build --silent

test -f out/index.html || { echo "✗ missing out/index.html"; exit 1; }

if ! grep -q "I run teams" out/index.html; then
  echo "✗ homepage missing expected hero copy (wrong branch or broken build?)"
  exit 1
fi

if ! grep -q 'id="out-of-my-system"' out/index.html; then
  echo "✗ writing section not found in export"
  exit 1
fi

while IFS= read -r slug; do
  [[ -z "$slug" ]] && continue
  path="out/posts/${slug}/index.html"
  if [[ ! -f "$path" ]]; then
    echo "✗ missing $path"
    exit 1
  fi
done < <(grep -E "slug: '" lib/posts.tsx | sed "s/.*slug: '\\([^']*\\)'.*/\\1/")

echo "✓ Build OK — $(grep -c "slug: '" lib/posts.tsx) post(s), homepage and post routes present"
echo "  Preview locally: npm run preview"
