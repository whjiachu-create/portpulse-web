#!/usr/bin/env bash
set -euo pipefail

PROD="${1:-https://useportpulse.com}"

req() { command -v "$1" >/dev/null || { echo "Missing command: $1"; exit 1; }; }
req curl
req grep

echo "🌐 Target: $PROD"

echo "1) Ping home..."
curl -fsS "$PROD/" >/dev/null || { echo "❌ Home unavailable"; exit 1; }
echo "   ✅ Home OK"

echo "2) Fetch pricing..."
HTML="$(mktemp)"
trap 'rm -f "$HTML"' EXIT
curl -fsS "$PROD/pricing" >"$HTML" || { echo "❌ Pricing unavailable"; exit 1; }
echo "   ✅ Pricing page 200"

echo "3) Check CTA text..."
# 兼容大小写、以及 HTML 中可能存在的换行/多空格
if grep -Eiq 'Request[[:space:]]+Beta[[:space:]]+Key' "$HTML"; then
  echo "   ✅ Pricing CTA OK"
else
  echo "   ❌ Missing 'Request Beta Key'"; exit 1
fi

echo "4) Check footer beta notice..."
if grep -Eiq 'Public[[:space:]]+Beta' "$HTML"; then
  echo "   ✅ Footer beta notice OK"
else
  echo "   ❌ Missing 'Public Beta' notice"; exit 1
fi

echo "🎉 Smoke done: $PROD"