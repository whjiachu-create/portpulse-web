"use client";

import { useMemo, useRef, useState } from "react";

type Intent = "trial" | "sales" | "enterprise" | "question";

const FREE_EMAIL_RE = /@(gmail|googlemail|yahoo|hotmail|outlook|live|msn|aol|icloud|me|mail|proton|pm|qq|foxmail|163|126)\.(com|cn|net|org|co|me|io|ru|uk)$/i;

// 生产环境强制商务邮箱；开发可放行，仅提示
const ENFORCE_BUSINESS = process.env.NODE_ENV === "production" || process.env.NEXT_PUBLIC_ENFORCE_BIZ_EMAIL === "1";

export default function ClientContactForm() {
  const [intent, setIntent] = useState<Intent>("sales");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const isFree = useMemo(() => FREE_EMAIL_RE.test(email.trim()), [email]);
  const emailError = ENFORCE_BUSINESS && isFree;

  const payload = useMemo(
    () => ({
      intent,
      name: name.trim(),
      company: company.trim(),
      email: email.trim(),
      message: message.trim(),
      ua: typeof navigator !== "undefined" ? navigator.userAgent : "",
      ts: new Date().toISOString(),
    }),
    [intent, name, company, email, message]
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (emailError) return;

    setSubmitting(true);
    try {
      // 优先 POST /api/contact（若你稍后接入）
      const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "/api/contact";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`contact endpoint ${res.status}`);

      alert("Thanks! We'll be in touch shortly.");
      formRef.current?.reset();
      setName(""); setCompany(""); setEmail(""); setMessage("");
    } catch {
      // 回退：mailto（把 JSON 放到正文，确保无后端也能发起）
      const body = encodeURIComponent(JSON.stringify(payload, null, 2));
      const subject = encodeURIComponent(`PortPulse contact — ${intent}`);
      window.location.href = `mailto:support@useportpulse.com?subject=${subject}&body=${body}`;
    } finally {
      setSubmitting(false);
    }
  }

  function copyJSON() {
    navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
    alert("Copied JSON to clipboard");
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm text-slate-600 mb-1">Full name</label>
          <input value={name} onChange={(e)=>setName(e.target.value)} required
            className="w-full rounded-xl border border-slate-200 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-200" />
        </div>
        <div>
          <label className="block text-sm text-slate-600 mb-1">Company</label>
          <input value={company} onChange={(e)=>setCompany(e.target.value)} required
            className="w-full rounded-xl border border-slate-200 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-200" />
        </div>
      </div>

      <div>
        <label className="block text-sm text-slate-600 mb-1">Work email</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required
          className={"w-full rounded-xl border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 " + (emailError ? "border-red-300 focus:ring-red-200" : "border-slate-200 focus:ring-sky-200")} />
        <p className={"mt-1 text-xs " + (emailError ? "text-red-600" : "text-slate-500")}>
          {emailError
            ? "Free mailboxes (e.g., Gmail/Outlook/QQ/163/126) are blocked in production. Please use a business email."
            : "We only use your email for contacting you about PortPulse."}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm text-slate-600 mb-1">Reason</label>
          <select value={intent} onChange={(e)=>setIntent(e.target.value as Intent)}
            className="w-full rounded-xl border border-slate-200 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-200">
            <option value="sales">Talk to sales</option>
            <option value="trial">Start 14-day evaluation</option>
            <option value="enterprise">Enterprise / custom</option>
            <option value="question">General question</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm text-slate-600 mb-1">Message</label>
        <textarea rows={5} value={message} onChange={(e)=>setMessage(e.target.value)}
          placeholder="Tell us ports, metrics, volume & timeline…"
          className="w-full rounded-xl border border-slate-200 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-200" />
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button type="submit" disabled={submitting || emailError}
          className="rounded-full bg-[#0B2740] text-white px-5 py-2 shadow-lg ring-1 ring-white/10 hover:-translate-y-0.5 transition disabled:opacity-50">
          {submitting ? "Submitting…" : "Send"}
        </button>
        <button type="button" onClick={copyJSON}
          className="rounded-full border border-slate-200 px-5 py-2 shadow-sm hover:bg-slate-50">
          Copy JSON
        </button>
        <span className="text-xs text-slate-500">We reply within 1 business day.</span>
      </div>
    </form>
  );
}
