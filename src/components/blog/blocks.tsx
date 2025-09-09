// src/components/blog/blocks.tsx
// Server Component 友好：纯函数组件、无副作用。

export function KpiGrid({
    items,
}: {
    items: { label: string; value: string; sublabel?: string }[];
}) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
            {items.map((k) => (
                <div
                    key={k.label}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3"
                >
                    <div className="text-xs text-slate-500">{k.label}</div>
                    <div className="text-2xl font-semibold leading-tight">{k.value}</div>
                    {k.sublabel ? (
                        <div className="text-xs text-slate-500 mt-1">{k.sublabel}</div>
                    ) : null}
                </div>
            ))}
        </div>
    );
}

export function DeltaTable({
    items,
    note,
}: {
    items: { port: string; region: string; now: number; prev: number }[];
    note?: string;
}) {
    const fmt = (n: number) => n.toFixed(1);
    const sign = (d: number) => (d > 0 ? `+${fmt(d)}` : fmt(d));
    return (
        <div className="my-6">
            <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="min-w-full text-sm">
                    <thead className="bg-slate-50 text-slate-600">
                        <tr>
                            <th className="text-left p-3">Port</th>
                            <th className="text-left p-3">Region</th>
                            <th className="text-right p-3">Now (h)</th>
                            <th className="text-right p-3">Prev (h)</th>
                            <th className="text-right p-3">Δ 14d (h)</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {items.map((r, i) => {
                            const d = r.now - r.prev;
                            return (
                                <tr key={i} className="border-t border-slate-100">
                                    <td className="p-3 font-medium">{r.port}</td>
                                    <td className="p-3 text-slate-500">{r.region}</td>
                                    <td className="p-3 text-right">{fmt(r.now)}</td>
                                    <td className="p-3 text-right">{fmt(r.prev)}</td>
                                    <td
                                        className={
                                            "p-3 text-right " +
                                            (d > 0.05 ? "text-rose-600" : d < -0.05 ? "text-emerald-600" : "text-slate-600")
                                        }
                                    >
                                        {sign(d)}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {note ? <div className="text-xs text-slate-500 mt-2">{note}</div> : null}
        </div>
    );
}

export function Callout({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="my-6 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
            <div className="font-medium mb-1">{title}</div>
            <div className="text-sm text-slate-700">{children}</div>
        </div>
    );
}

export function ApiCtas() {
    return (
        <div className="my-8 flex flex-wrap gap-3">
            <a
                href="/play"
                className="rounded-xl bg-[#0B2740] text-white px-4 py-2 text-sm hover:opacity-90"
            >
                Try the live demo
            </a>
            <a
                href="/docs/api"
                className="rounded-xl border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50"
            >
                Open the API docs
            </a>
        </div>
    );
}