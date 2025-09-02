/* Contact page with business-email validation, prefill from query, JSON copy, and mailto fallback */
"use client";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { isBusinessEmail } from "@/lib/isBusinessEmail";

export const dynamic = "force-dynamic";

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-12 md:py-16">Loading…</div>}>
      <ContactForm />
    </Suspense>
  );
}

function ContactForm() {
  const params = useSearchParams();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [error, setError] = useState<string>("");
  const [ok, setOk] = useState<boolean | null>(null);

  const json = `Contact request
${new Date().toISOString()}
${JSON.stringify(form, null, 2)}`;
  const mailto = `mailto:hello@useportpulse.com?subject=${encodeURIComponent(
    "PortPulse contact"
  )}&body=${encodeURIComponent(json)}`;

  useEffect(() => {
    const intent = params.get("intent") || "";
    const port = params.get("port");
    const country = params.get("country");
    if (intent === "port_request") {
      setForm((s) => ({
        ...s,
        message: s.message || `Request new port: ${port ?? ""}${country ? `, ${country}` : ""}`,
      }));
    }
  }, [params]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(""); setOk(null);
    if (!isBusinessEmail(form.email)) { setError("请使用工作邮箱（非公共邮箱，如 gmail/outlook/yahoo 等）"); return; }
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (!res.ok) throw new Error(String(res.status));
      setOk(true);
    } catch {
      setOk(false);
      window.location.href = mailto;
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Contact us</h1>
      <p className="mt-2 text-black/60">Tell us what you need — we’ll get back in 1–2 business days.</p>
      <form onSubmit={onSubmit} className="mt-6 grid gap-4 max-w-xl">
        <Field label="Your name">
          <input value={form.name} onChange={e=>setForm(s=>({...s, name:e.target.value}))}
            className="w-full rounded-xl border border-black/10 px-3 py-2 outline-none focus:ring-2 ring-[#26B1FF]" required />
        </Field>
        <Field label="Work email">
          <input value={form.email} onChange={e=>setForm(s=>({...s, email:e.target.value}))}
            className="w-full rounded-xl border border-black/10 px-3 py-2 outline-none focus:ring-2 ring-[#26B1FF]" type="email" required />
          {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
        </Field>
        <Field label="Company">
          <input value={form.company} onChange={e=>setForm(s=>({...s, company:e.target.value}))}
            className="w-full rounded-xl border border-black/10 px-3 py-2 outline-none focus:ring-2 ring-[#26B1FF]" required />
        </Field>
        <Field label="Message">
          <textarea value={form.message} onChange={e=>setForm(s=>({...s, message:e.target.value}))}
            rows={5} className="w-full rounded-xl border border-black/10 px-3 py-2 outline-none focus:ring-2 ring-[#26B1FF]" />
        </Field>
        <div className="flex gap-2">
          <button type="submit" className="rounded-xl bg-[#0B2740] text-white px-5 py-2 hover:opacity-90 transition">Send</button>
          <button type="button" onClick={()=>navigator.clipboard.writeText(json)} className="rounded-xl border border-black/10 px-5 py-2 hover:bg-black/5 transition">Copy JSON</button>
          <a href={mailto} className="rounded-xl border border-black/10 px-5 py-2 hover:bg-black/5 transition">Email instead</a>
        </div>
        {ok===true && <p className="text-sm text-green-600">Submitted. We’ll be in touch.</p>}
      </form>
    </div>
  );
}

function Field({label, children}:{label:string; children:React.ReactNode}) {
  return <label className="grid gap-1"><span className="text-sm text-black/70">{label}</span>{children}</label>;
}
