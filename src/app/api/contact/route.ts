import { NextRequest, NextResponse } from "next/server";

type Payload = {
    name?: string;
    company?: string;
    email?: string;
    ports?: string;
    message?: string;
};

function sanitize(s?: string) {
    return (s ?? "").toString().slice(0, 2000).trim();
}

export async function POST(req: NextRequest) {
    const ip =
        req.headers.get("x-forwarded-for") ||
        req.headers.get("x-real-ip") ||
        "0.0.0.0";
    const ua = req.headers.get("user-agent") || "";

    let body: Payload;
    try {
        body = (await req.json()) as Payload;
    } catch {
        return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
    }

    const name = sanitize(body.name);
    const company = sanitize(body.company);
    const email = sanitize(body.email);
    const ports = sanitize(body.ports);
    const message = sanitize(body.message);

    if (!email || !message) {
        return NextResponse.json({ ok: false, error: "need_email_and_message" }, { status: 400 });
    }

    const summary = `[PortPulse Contact]
Name: ${name || "-"}
Company: ${company || "-"}
Email: ${email}
Ports: ${ports || "-"}
Message:
${message}

[meta] ip=${ip} ua="${ua}"
`.trim();

    // 1) Resend（需环境变量）
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const CONTACT_TO = process.env.CONTACT_TO; // 例如 sales@useportpulse.com
    const CONTACT_FROM = process.env.CONTACT_FROM || "noreply@useportpulse.com";

    if (RESEND_API_KEY && CONTACT_TO) {
        try {
            const { Resend } = await import("resend");
            const resend = new Resend(RESEND_API_KEY);
            const subject = `PortPulse Inquiry — ${name || email}${company ? " @ " + company : ""}`;
            await resend.emails.send({
                from: CONTACT_FROM,
                to: [CONTACT_TO],
                subject,
                text: summary,
            });
            return NextResponse.json({ ok: true, method: "resend" }, { status: 200 });
        } catch (err) {
            console.error("[contact] resend failed:", err);
            // 继续走下一种方式
        }
    }

    // 2) Slack Webhook（可选）
    const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
    if (SLACK_WEBHOOK_URL) {
        try {
            await fetch(SLACK_WEBHOOK_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: summary }),
            });
            return NextResponse.json({ ok: true, method: "slack" }, { status: 200 });
        } catch (err) {
            console.error("[contact] slack failed:", err);
        }
    }

    // 3) 兜底：打印到控制台（本地开发 & 无集成时）
    console.log("[contact] lead captured\n" + summary);
    return NextResponse.json({ ok: true, method: "console" }, { status: 200 });
}