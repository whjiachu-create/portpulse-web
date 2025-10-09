// src/app/api/stripe/webhook/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import crypto from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic"; // 禁止缓存

const STRIPE_SECRET = process.env.STRIPE_SECRET_KEY || "";
const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || "";
const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const SUPPORT_INBOX = process.env.SUPPORT_INBOX || "support@useportpulse.com";

function badConfig(which: string) {
  console.warn(`[webhook] missing env: ${which}`);
}

// 运行时检查
if (!STRIPE_SECRET) badConfig("STRIPE_SECRET_KEY");
if (!WEBHOOK_SECRET) badConfig("STRIPE_WEBHOOK_SECRET");

const stripe = STRIPE_SECRET
  ? new Stripe(STRIPE_SECRET, { apiVersion: "2024-06-20" })
  : null;

// —— 简单 API Key 生成器（演示用；正式环境请存库并做幂等防重） —— //
function issueApiKey(prefix: "pp_test" | "pp_live" = "pp_test") {
  const raw = crypto.randomBytes(24).toString("base64url");
  return `${prefix}_${raw}`;
}

// —— 可选欢迎邮件（Resend）。未配置时走 dry-run —— //
async function sendWelcomeEmail(to: string, key: string) {
  if (!to) return;

  if (!RESEND_API_KEY) {
    console.log("[webhook] (dry-run email) to=%s key=%s", to, key);
    return;
  }

  const resp = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `PortPulse <${SUPPORT_INBOX}>`,
      to,
      subject: "Your PortPulse API key",
      text: [
        "Welcome to PortPulse!",
        "",
        "Here is your API key:",
        key,
        "",
        "Quickstart: https://docs.useportpulse.com",
      ].join("\n"),
    }),
  });

  if (!resp.ok) {
    const t = await resp.text().catch(() => "");
    console.warn("[webhook] send email failed", resp.status, t);
  }
}

export async function POST(req: NextRequest) {
  if (!stripe || !WEBHOOK_SECRET) {
    return NextResponse.json(
      { ok: false, error: "misconfigured" },
      { status: 500 }
    );
  }

  // 取原始字节体，避免编码导致验签失败
  const sig = req.headers.get("stripe-signature") || "";
  if (!sig) {
    return NextResponse.json(
      { ok: false, error: "missing stripe-signature" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;
  try {
    const raw = Buffer.from(await req.arrayBuffer());
    event = stripe.webhooks.constructEvent(raw, sig, WEBHOOK_SECRET);
  } catch (err: any) {
    console.error("[webhook] bad signature:", err?.message);
    return NextResponse.json(
      { ok: false, error: "signature_verification_failed" },
      { status: 400 }
    );
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;

        // 取邮箱：优先 session.customer_details.email，其次 session.customer_email
        const email =
          session.customer_details?.email ||
          (session.customer_email as string) ||
          "";

        const livemode = !!event.livemode;
        const key = issueApiKey(livemode ? "pp_live" : "pp_test");

        console.log("[webhook] issue key", {
          eventId: event.id,
          type: event.type,
          email,
          key,
          livemode,
        });

        // 发送欢迎邮件（未配置 RESEND_API_KEY 时为 dry-run）
        if (email) await sendWelcomeEmail(email, key);

        break;
      }

      // 可按需扩展：订阅生命周期类事件
      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted":
      case "invoice.payment_succeeded":
        console.log("[webhook] event", { id: event.id, type: event.type });
        break;

      default:
        // 其它事件直接 ACK，避免重试风暴
        break;
    }

    return NextResponse.json({ ok: true, id: event.id });
  } catch (err: any) {
    console.error("[webhook] handler error:", err?.message || err);
    return NextResponse.json(
      { ok: false, error: "handler_error", id: event.id },
      { status: 500 }
    );
  }
}