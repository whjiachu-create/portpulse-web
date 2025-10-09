// src/app/success/page.tsx
type Props = { searchParams: Promise<{ session_id?: string }> };

export default async function Success({ searchParams }: Props) {
  const sp = await searchParams;                // ✅ 1) await
  const session = sp?.session_id || '';         // ✅ 2) 用解开的对象
  const masked = session ? `${session.slice(0, 10)}…${session.slice(-4)}` : '';
  const portalUrl = process.env.NEXT_PUBLIC_BILLING_PORTAL_URL || '';

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold">You're all set ✅</h1>
      <p className="mt-3 text-slate-600">
        If this was a checkout, you'll receive a confirmation email shortly.
        Next: get your API key and follow the Quickstart.
      </p>

      {session && (
        <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
          <div><span className="font-medium">Session:</span> {masked}</div>
          <div className="text-slate-500 mt-1">Keep this page for support reference if needed.</div>
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-4">
        <a className="underline" href="https://docs.useportpulse.com">Go to Docs</a>
        {portalUrl ? (
          <a className="underline" href={portalUrl} target="_blank" rel="noreferrer">
            Billing &amp; invoices
          </a>
        ) : null}
        <a className="underline" href="/pricing">Back to pricing</a>
      </div>
    </main>
  );
}