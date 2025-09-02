import CodeTabs from "@/components/CodeTabs";
export const dynamic = "force-static";

const py = `import requests
class PortPulseClient:
  def __init__(self, api_key, base="https://api.useportpulse.com"):
    self.base, self.h = base, {"X-API-Key": api_key}
  def health(self): return requests.get(f"{self.base}/v1/health").json()
  def trend(self, u, days=7):
    r = requests.get(f"{self.base}/v1/ports/{u}/trend", params={"days":days}, headers=self.h)
    r.raise_for_status(); return r.json()
if __name__ == "__main__":
  c = PortPulseClient("dev_demo_123"); print(c.trend("USLAX",7)["points"][-3:])`;

const js = `export class PortPulse {
  constructor(apiKey, baseUrl="https://api.useportpulse.com"){ this.k=apiKey; this.u=baseUrl; }
  async _f(path, params={}) {
    const u = new URL(this.u + path);
    Object.entries(params).forEach(([k,v]) => v!=null && u.searchParams.set(k,String(v)));
    const r = await fetch(u, { headers:{ "X-API-Key": this.k, "Accept":"application/json" }});
    if(!r.ok) throw new Error(\`HTTP \${r.status}\`); return r;
  }
  health(){ return this._f("/v1/health").then(r=>r.json()); }
  trend(unlocode, days=7){ return this._f(\`/v1/ports/\${unlocode}/trend\`, { days }).then(r=>r.json()); }
}
// const c = new PortPulse("dev_demo_123"); console.log(await c.trend("USLAX",7));`;

export default function SDKPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">SDK Samples</h1>
      <p className="mt-2 text-black/60">Minimal clients to get you started. Copy & adapt.</p>
      <div className="mt-6">
        <CodeTabs tabs={[
          { id: "py", label: "Python", language: "python", code: py },
          { id: "js", label: "JavaScript", language: "javascript", code: js },
        ]}/>
      </div>
    </div>
  );
}
