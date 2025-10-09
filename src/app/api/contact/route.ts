import { NextRequest, NextResponse } from "next/server";

type ContactBody = {
  name?: string;
  company?: string;
  email: string;
  message: string;
  intent?: string;
  [k: string]: unknown;
};

const SUPPORT = process.env.SUPPORT_INBOX || "support@useportpulse.com";
const RESEND_KEY = process.env.RESEND_API_KEY || ""; // 若为空则降级为日志

export async function POST(req: NextRequest) {
  let body: ContactBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, code: "bad_json" }, { status: 400 });
  }

  if (!body?.email || !body?.message) {
    return NextResponse.json({ ok: false, code: "missing_fields" }, { status: 400 });
  }

  // 统一邮件内容
  const subject = `PortPulse contact — ${body.intent || "sales"} — ${body.email}`;
  const text = JSON.stringify(body, null, 2);

  try {
    if (RESEND_KEY) {
      // 直接调用 Resend HTTP API，避免 SDK 依赖问题
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "authorization": `Bearer ${RESEND_KEY}`,
        },
        body: JSON.stringify({
          from: `PortPulse <${SUPPORT}>`,
          to: [SUPPORT],
          reply_to: body.email,
          subject,
          text,
        }),
      });

      if (!res.ok) {
        const errText = await res.text().catch(() => "");
        console.error("[contact] resend api error:", res.status, errText);
        // 不中断用户流程
      }
    } else {
      console.log("[contact] (dry-run: no RESEND_API_KEY) payload:", body);
    }
  } catch (e) {
    console.error("[contact] send error:", e);
    // 不抛给用户
  }

  return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
}