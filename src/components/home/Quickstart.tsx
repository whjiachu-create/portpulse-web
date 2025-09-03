export default function Quickstart(){
  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-xl font-semibold">5-minute quickstart</h2>
      <p className="text-black/70">Call with <code className="font-mono">X-API-Key</code>. Choose JSON or CSV:</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <pre className="card p-4 text-xs overflow-x-auto"><code>{`# JSON — 14-day trend
curl -s "https://api.useportpulse.com/v1/ports/USLAX/trend?days=14" \\
  -H "X-API-Key: <YOUR_KEY>" | jq .slice(0,3)
`}</code></pre>
        <pre className="card p-4 text-xs overflow-x-auto"><code>{`# CSV — strong ETag/304, cache-friendly
curl -sI "https://api.useportpulse.com/v1/ports/USNYC/trend?days=14&format=csv" \\
  -H "X-API-Key: <YOUR_KEY>"
`}</code></pre>
      </div>
    </section>
  );
}
