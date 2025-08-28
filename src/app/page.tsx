import Link from "next/link";

async function getStatus(): Promise<"online" | "degraded" | "offline"> {
  try {
    const r = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/v1/health`, { cache: "no-store" });
    if (!r.ok) return "degraded";
    return "online";
  } catch {
    return "offline";
  }
}

export default async function Home() {
  const status = await getStatus();

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-white" />
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-16 sm:pb-20 sm:pt-20">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Port Operations API — <span className="text-blue-600">5 分钟跑通，生产可用</span>
            </h1>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-700 ring-1 ring-emerald-200">
              Status: {status}
            </span>
          </div>
          <p className="mt-4 max-w-2xl text-gray-600">
            提供港口趋势（Trend）、停时（Dwell）、快照（Snapshot）与告警（Alerts）。JSON/CSV、一致口径、ETag/304 缓存、向后兼容。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://docs.useportpulse.com/EXAMPLES.md" className="rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-black">快速开始</a>
            <a href="https://docs.useportpulse.com/SDK.md" className="rounded-md border px-4 py-2 text-gray-900 hover:bg-gray-50">SDK 示例</a>
            <Link href="/pricing" className="rounded-md border px-4 py-2 text-gray-900 hover:bg-gray-50">查看定价</Link>
            <Link href="/contact" className="rounded-md px-4 py-2 text-blue-700 ring-1 ring-blue-200 hover:bg-blue-50">联系销售</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:grid-cols-3">
        {[
          { title: "稳定接口", desc: "V1 合同冻结，错误体统一，p95 延迟 ≤300ms。" },
          { title: "可复现口径", desc: "同一口径 JSON/CSV；ETag/304 友好缓存；清晰字段字典。" },
          { title: "开发者体验", desc: "Quickstart/SDK/Postman，一站式接入，30 分钟完成集成。" },
        ].map((f) => (
          <div key={f.title} className="rounded-xl border p-6">
            <div className="text-lg font-medium">{f.title}</div>
            <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-xl border bg-gray-50 p-6 sm:p-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="text-lg font-medium">准备好开始了吗？</div>
              <p className="mt-1 text-sm text-gray-600">使用演示密钥即可拉起 USLAX 7 天趋势。</p>
            </div>
            <a href="https://docs.useportpulse.com/EXAMPLES.md" className="rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-black">
              立即试用
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
