"use client";
import { useRef, useState } from "react";
import { isBusinessEmail } from "@/lib/isBusinessEmail";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "ok" | "err" | "sub">("idle");
  const [emailHint, setEmailHint] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  function readPayloadFromForm(): {
    name: string; company: string; email: string; ports: string; message: string;
  } {
    const fd = new FormData(formRef.current || undefined);
    return {
      name: String(fd.get("name") || ""),
      company: String(fd.get("company") || ""),
      email: String(fd.get("email") || ""),
      ports: String(fd.get("ports") || ""),
      message: String(fd.get("message") || ""),
    };
  }

  function buildMailtoFromForm(): string {
    const payload = readPayloadFromForm();
    return `mailto:sales@useportpulse.com?subject=${encodeURIComponent("PortPulse Inquiry")}&body=${encodeURIComponent(JSON.stringify(payload, null, 2))}`;
  }

  async function onCopyJson() {
    const payload = readPayloadFromForm();
    await navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
    setStatus((s) => (s === "ok" ? "ok" : "idle"));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sub");
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      company: String(fd.get("company") || ""),
      email: String(fd.get("email") || ""),
      ports: String(fd.get("ports") || ""),
      message: String(fd.get("message") || ""),
    };

    // 软性邮箱校验：允许提交，但提示建议用工作邮箱
    if (!isBusinessEmail(payload.email)) {
      setEmailHint("Tip: business email helps faster verification.");
    } else {
      setEmailHint(null);
    }

    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!r.ok) throw new Error("bad");
      setStatus("ok");
      (e.currentTarget as HTMLFormElement).reset();
    } catch {
      setStatus("err");
      window.location.href = buildMailtoFromForm();
    }
  }

  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Talk to sales</h1>
      <p className="mt-3 text-slate-600">
        Tell us about your use case and the ports you care about. We’ll reply within one business day.
      </p>

      <form ref={formRef} onSubmit={onSubmit} className="mt-8 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-slate-600">Name</label>
            <input name="name" placeholder="Your name" className="mt-1 w-full border border-slate-300 rounded-lg px-3 py-2" required />
          </div>
          <div>
            <label className="text-sm text-slate-600">Company</label>
            <input name="company" placeholder="Company" className="mt-1 w-full border border-slate-300 rounded-lg px-3 py-2" />
          </div>
        </div>

        <div>
          <label className="text-sm text-slate-600">Work email</label>
          <input
            type="email"
            name="email"
            placeholder="you@company.com"
            className="mt-1 w-full border border-slate-300 rounded-lg px-3 py-2"
            required
            onBlur={(e) => {
              const ok = isBusinessEmail(e.currentTarget.value);
              setEmailHint(ok ? null : "Tip: business email helps faster verification.");
            }}
          />
          {emailHint ? <div className="mt-1 text-xs text-amber-700"> {emailHint} </div> : null}
        </div>

        <div>
          <label className="text-sm text-slate-600">Ports of interest</label>
          <input name="ports" placeholder="e.g., USLAX, USLGB, NLRTM" className="mt-1 w-full border border-slate-300 rounded-lg px-3 py-2" />
        </div>

        <div>
          <label className="text-sm text-slate-600">Message</label>
          <textarea
            name="message"
            placeholder="What are you looking to build? Timeframe? Any constraints?"
            className="mt-1 w-full border border-slate-300 rounded-lg px-3 py-2 h-32"
            required
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button disabled={status === "sub"} className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60">
            {status === "sub" ? "Submitting..." : "Send message"}
          </button>

          <button type="button" onClick={onCopyJson} className="px-3 py-2 rounded-lg border border-slate-300 text-sm hover:bg-slate-50" aria-label="Copy current form as JSON">
            Copy JSON
          </button>

          <button type="button" onClick={() => (window.location.href = buildMailtoFromForm())} className="px-3 py-2 rounded-lg border border-slate-300 text-sm hover:bg-slate-50">
            Email instead
          </button>

          <a className="text-sm underline underline-offset-4" href="mailto:sales@useportpulse.com">Or email sales@useportpulse.com</a>
        </div>

        {status === "ok" && <p role="status" className="text-green-600 text-sm">Thanks! We’ll be in touch.</p>}
        {status === "err" && <p role="status" className="text-red-600 text-sm">Submit failed. We opened your mail client as fallback.</p>}
      </form>
    </section>
  );
}
