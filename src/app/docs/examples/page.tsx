import CodeTabs from "@/components/CodeTabs";
export const dynamic = "force-static";

const BASE = "https://api.useportpulse.com";
const DEMO = "dev_demo_123";

const curl = `# 1) Health (no auth)
curl -sS "${BASE}/v1/health" | jq .

# 2) USLAX last 7 days (JSON)
curl -sS -H "X-API-Key: ${DEMO}" \
  "${BASE}/v1/ports/USLAX/trend?days=7" | jq .

# 3) USLAX CSV with ETag/304
ET=$(curl -fsS -D - -H "X-API-Key: ${DEMO}" \
  "${BASE}/v1/ports/USLAX/trend?days=7&format=csv" -o /dev/null | \
  awk 'BEGIN(IGNORECASE=1){/^etag:/{gsub(/\r|\"/,"");print $2}}')
curl -fsS -H "X-API-Key: ${DEMO}" -H "If-None-Match: "$ET"" \
  "${BASE}/v1/ports/USLAX/trend?days=7&format=csv"`;  // quote fixed at runtime by shell

const py = `import os, requests
BASE="${BASE}"; KEY=os.getenv("PORTPULSE_API_KEY","${DEMO}")
r = requests.get(f"{BASE}/v1/ports/USLAX/trend", params={"days":7}, headers={"X-API-Key":KEY})
r.raise_for_status(); print(r.json()["points"][-3:])`;

const js = `const BASE="${BASE}";
const r = await fetch(\`\${BASE}/v1/ports/USLAX/trend?days=7\`, { headers: { "X-API-Key": "${DEMO}" }});
console.log(await r.json());`;

export default function ExamplesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Quickstart & Examples</h1>
      <p className="mt-2 text-black/60">Base URL: <code>{BASE}</code> · Demo API Key: <code>{DEMO}</code> (header <code>X-API-Key</code>)</p>
      <h2 className="mt-8 text-lg font-medium">Try it</h2>
      <p className="text-black/60 mb-3">Pick a language tab below and copy the snippet.</p>
      <CodeTabs tabs={[
        { id: "curl", label: "cURL", language: "bash", code: curl },
        { id: "py", label: "Python", language: "python", code: py },
        { id: "js", label: "JavaScript", language: "javascript", code: js },
      ]}/>
      <div className="mt-8 rounded-2xl border border-black/10 bg-white p-5">
        <h3 className="text-base font-medium">Notes</h3>
        <ul className="mt-2 list-disc pl-5 text-black/70 text-sm">
          <li>Use header <code>X-API-Key</code>.</li>
          <li><code>ETag</code> + <code>If-None-Match</code> for CSV caching.</li>
          <li>Rate limits & caching guidance are in API Reference.</li>
        </ul>
      </div>
    </div>
  );
}
