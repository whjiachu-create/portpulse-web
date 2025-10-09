// src/app/api/checkout/route.ts
import Stripe from "stripe";
import { NextResponse } from "next/server";

/** Stripe SDK 只能在 Node 运行时使用 */
export const runtime = "nodejs";

const STRIPE_SECRET = process.env.STRIPE_SECRET_KEY as string | undefined;
/** 本地默认回退到 http://localhost:3000，去掉末尾斜杠 */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
/** 仅当你已经在 Stripe 后台填写了 TOS/Privacy URL 时，再把这个开关设为 "1" */
const REQUIRE_TOS = process.env.STRIPE_REQUIRE_TOS === "1";

if (!STRIPE_SECRET) console.warn("[checkout] STRIPE_SECRET_KEY is not set");
if (!SITE_URL) console.warn("[checkout] NEXT_PUBLIC_SITE_URL is not set");

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Cache-Control": "no-store",
    },
  });
}

type ReqBody = { priceId?: string; email?: string; intent?: string };

export async function POST(req: Request) {
  if (!STRIPE_SECRET || !SITE_URL) {
    return NextResponse.json(
      { ok: false, code: "misconfigured", message: "Server is not configured for checkout." },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }

  // 运行时构造，避免热重载时 env 空值
  const stripe = new Stripe(STRIPE_SECRET, { apiVersion: "2024-06-20" });

  let body: ReqBody = {};
  try {
    body = (await req.json()) as ReqBody;
  } catch {
    return NextResponse.json(
      { ok: false, code: "bad_json", message: "Invalid JSON body." },
      { status: 400, headers: { "Cache-Control": "no-store" } }
    );
  }

  const priceId = String(body?.priceId || "").trim();
  const email = String(body?.email || "").trim();
  const intent = String(body?.intent || "").trim();

  if (!priceId || !/^price_[A-Za-z0-9]+$/.test(priceId)) {
    return NextResponse.json(
      { ok: false, code: "invalid_price", message: "Missing or invalid priceId." },
      { status: 400, headers: { "Cache-Control": "no-store" } }
    );
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      // 订阅模式不可使用 customer_creation；如要预先创建客户，请在 webhook 侧处理
      automatic_tax: { enabled: true },
      tax_id_collection: { enabled: true },
      billing_address_collection: "required",
      allow_promotion_codes: true,

      ...(email ? { customer_email: email } : {}),
      line_items: [{ price: priceId, quantity: 1 }],

      subscription_data: {
        trial_period_days: 14,
        metadata: { plan_price: priceId, intent: intent || undefined },
      },

      client_reference_id: intent || undefined,

      // 只有当 Stripe 后台 Settings → Public details 已设置 TOS/Privacy URL，才开启条款勾选
      ...(REQUIRE_TOS ? { consent_collection: { terms_of_service: "required" as const } } : {}),

      success_url: `${SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}/pricing?cancel=1`,
    });

    return NextResponse.json({ ok: true, url: session.url }, { headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    console.error("[checkout] create session error:", err);
    return NextResponse.json(
      { ok: false, code: "stripe_error", message: "Failed to create checkout session." },
      { status: 502, headers: { "Cache-Control": "no-store" } }
    );
  }
}