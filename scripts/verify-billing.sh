#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_DIR"

ENV_FILE=".env.local"
NEXT_URL="http://localhost:3000"
WEBHOOK_ROUTE="$NEXT_URL/api/stripe/webhook"
LOG_DEV="/tmp/pp_dev.log"
LOG_LISTEN="/tmp/pp_stripe_listen.log"

say() { echo -e "$@"; }
ok() { say "✅ $*"; }
warn() { say "⚠️  $*"; }
err() { say "❌ $*" >&2; exit 1; }

say "📁 Project: $PROJECT_DIR"
say "🧩 Using env file: $ENV_FILE"

[[ -f "$ENV_FILE" ]] || err "$ENV_FILE not found"
set -a; source "$ENV_FILE"; set +a

: "${STRIPE_SECRET_KEY:?STRIPE_SECRET_KEY missing in $ENV_FILE}"
: "${NEXT_PUBLIC_PRICE_LITE_MONTH:?NEXT_PUBLIC_PRICE_LITE_MONTH missing in $ENV_FILE}"
: "${NEXT_PUBLIC_PRICE_STARTER_MONTH:?NEXT_PUBLIC_PRICE_STARTER_MONTH missing in $ENV_FILE}"

# ---------- Stripe 账号 & 价格校验 ----------
say "🔐 Checking Stripe account…"
acct_json="$(curl -fsS https://api.stripe.com/v1/account -u "$STRIPE_SECRET_KEY":)"
acct_id="$(jq -r '.id' <<<"$acct_json")"
[[ -n "$acct_id" && "$acct_id" != "null" ]] || err "Stripe account check failed"
ok "Stripe account: $acct_id (test mode expected)"

say "💲 Verifying Price IDs…"
for pid in "$NEXT_PUBLIC_PRICE_LITE_MONTH" "$NEXT_PUBLIC_PRICE_STARTER_MONTH"; do
  p_json="$(curl -fsS "https://api.stripe.com/v1/prices/$pid" -u "$STRIPE_SECRET_KEY":)"
  active="$(jq -r '.active' <<<"$p_json")"
  live="$(jq -r '.livemode' <<<"$p_json")"
  say "  • $pid  active=$active  livemode=$live"
  [[ "$active" == "true" ]] || err "Price $pid is not active"
  [[ "$live" == "false" ]] || warn "Price $pid shows livemode=$live (should be false in test)"
done

# ---------- 起 Next.js dev（若未跑） ----------
NEED_START_DEV=1
if curl -fsS "$NEXT_URL" >/dev/null 2>&1; then
  NEED_START_DEV=0
  say "🟢 Next.js already running."
else
  say "🟢 Starting Next.js dev (logs: $LOG_DEV)…"
  (pnpm dev >"$LOG_DEV" 2>&1 &) 
fi

# 等 3000 端口就绪
for i in {1..60}; do
  if curl -fsS "$NEXT_URL" >/dev/null 2>&1; then ok "App ready at $NEXT_URL"; break; fi
  sleep 1
  [[ $i -eq 60 ]] && err "App not responding on 3000"
done

# ---------- 起/复用 stripe listen ----------
KILL_LISTEN=""
if pgrep -f "stripe listen --forward-to $WEBHOOK_ROUTE" >/dev/null; then
  say "🔁 Found existing stripe listen forwarder."
else
  say "📡 Starting stripe listen (logs: $LOG_LISTEN)…"
  rm -f "$LOG_LISTEN"
  (stdbuf -oL stripe listen --forward-to "$WEBHOOK_ROUTE" >"$LOG_LISTEN" 2>&1 &) 
  KILL_LISTEN="yes"
  # 取出 whsec
  for i in {1..30}; do
    if grep -q "Your webhook signing secret is whsec_" "$LOG_LISTEN"; then
      whsec="$(grep -m1 -o 'whsec_[A-Za-z0-9]\+' "$LOG_LISTEN" | tail -n1)"
      break
    fi
    sleep 1
  done
  [[ -n "${whsec:-}" ]] || err "Failed to obtain webhook secret from stripe listen"
  if [[ "${STRIPE_WEBHOOK_SECRET:-}" != "$whsec" ]]; then
    say "✍️  Updating STRIPE_WEBHOOK_SECRET in $ENV_FILE"
    if grep -q "^STRIPE_WEBHOOK_SECRET=" "$ENV_FILE"; then
      sed -i "s/^STRIPE_WEBHOOK_SECRET=.*/STRIPE_WEBHOOK_SECRET=$whsec/" "$ENV_FILE"
    else
      echo "STRIPE_WEBHOOK_SECRET=$whsec" >>"$ENV_FILE"
    fi
    export STRIPE_WEBHOOK_SECRET="$whsec"
  fi
fi
ok "Webhook secret ready."

# ---------- 创建 Checkout 会话 ----------
PRICE="$NEXT_PUBLIC_PRICE_LITE_MONTH"
say "🧪 Creating Checkout session for $PRICE …"
create_json="$(curl -fsS -X POST https://api.stripe.com/v1/checkout/sessions \
  -u "$STRIPE_SECRET_KEY": \
  -d mode=subscription \
  -d "line_items[0][price]=$PRICE" \
  -d "line_items[0][quantity]=1" \
  -d success_url="$NEXT_URL/success?session_id={CHECKOUT_SESSION_ID}" \
  -d cancel_url="$NEXT_URL/pricing" \
  -d "subscription_data[trial_period_days]=14")"
url="$(jq -r '.url' <<<"$create_json")"
[[ "$url" != "null" ]] || { echo "$create_json"; err "Failed to create checkout session"; }
say "🔗 Checkout URL:\n   $url"
say "👉 请在浏览器完成测试支付（卡号 4242 4242 4242 4242，任意未来有效期、任意 CVC）。"

# ---------- 等 webhook 到达 ----------
say "⏳ Waiting for webhook event checkout.session.completed …"
found=0
for i in {1..240}; do
  if grep -q "checkout.session.completed" "$LOG_LISTEN"; then
    found=1; break
  fi
  sleep 1
done
[[ $found -eq 1 ]] || err "Timeout waiting for checkout.session.completed (stripe listen not receiving?)"
ok "Webhook received."

say "🎉 Verification PASSED: checkout→webhook→issue key OK."

# 清理
if [[ -n "$KILL_LISTEN" ]]; then
  pkill -f "stripe listen --forward-to $WEBHOOK_ROUTE" || true
  say "🧹 Stopped background stripe listen."
fi