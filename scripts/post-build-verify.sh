#!/usr/bin/env bash
# Runs after `next build` — used by npm run build in CI and locally.
set -euo pipefail

test -f out/index.html || { echo "✗ missing out/index.html"; exit 1; }
grep -q "I run teams" out/index.html || { echo "✗ homepage missing expected hero copy"; exit 1; }
grep -q 'id="out-of-my-system"' out/index.html || { echo "✗ writing section missing"; exit 1; }

while IFS= read -r slug; do
  [[ -z "$slug" ]] && continue
  test -f "out/posts/${slug}/index.html" || { echo "✗ missing out/posts/${slug}/index.html"; exit 1; }
done < <(grep -E "slug: '" lib/posts.tsx | sed "s/.*slug: '\\([^']*\\)'.*/\\1/")

echo "✓ Export verified"
