#!/usr/bin/env bash
set -euo pipefail
shopt -s globstar nullglob
found=1
grep -R -nP '[\x{4e00}-\x{9fff}]' --include='*.{ts,tsx,md,mdx}' app src && found=0 || true
if [[ $found -eq 0 ]]; then
  echo "Chinese chars found. Please remove before commit." >&2
  exit 1
fi
