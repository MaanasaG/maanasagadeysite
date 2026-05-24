#!/usr/bin/env bash
# Sanity-check the static export before pushing to main.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "→ Building static export…"
npm run build

echo "✓ Build OK — $(grep -c "slug: '" lib/posts.tsx) post(s)"
echo "  Preview locally: npm run preview"
