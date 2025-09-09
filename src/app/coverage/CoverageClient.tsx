/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/coverage/CoverageClient.tsx
"use client";

import { useEffect, useMemo, useState } from "react";

/** 区域 */
type Region =
    | "North America"
    | "Europe"
    | "APAC"
    | "Middle East"
    | "LATAM"
    | "Africa";

/** 端口元数据 */
type PortMeta = {
    code: string; // UN/LOCODE
    name: string;
    country: string;
    region: Region;
    status: "Live" | "Beta";
};

const ALL_REGIONS: Array<Region | ""> = [
    "",
    "North America",
    "Europe",
    "APAC",
    "Middle East",
    "LATAM",
    "Africa",
];

/** 高亮命中 */
function Highlight({ text, query }: { text: string; query: string }) {
    if (!query) return <>{text}</>;
    const i = text.toLowerCase().indexOf(query.toLowerCase());
    if (i < 0) return <>{text}</>;
    return (
        <>
            {text.slice(0, i)}
            <mark className="bg-yellow-200 rounded px-0.5">
                {text.slice(i, i + query.length)}
            </mark>
            {text.slice(i + query.length)}
        </>
    );
}

function Badge({
    tone,
    children,
}: {
    tone: "live" | "beta";
    children: React.ReactNode;
}) {
    const map = {
        live: "bg-emerald-50 text-emerald-700 border-emerald-200",
        beta: "bg-amber-50 text-amber-700 border-amber-200",
    } as const;
    return (
        <span
            className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs ${map[tone]}`}
        >
            {children}
        </span>
    );
}

/** 打开站内代理 API */
function openApi(code: string, path: "overview" | "trend" | "snapshot" | "dwell") {
    const c = code.toUpperCase();
    const base = `/api/pulse/v1/ports/${c}`;
    const url =
        path === "overview"
            ? `${base}/overview`
            : path === "trend"
                ? `${base}/trend?days=14&fields=avg_wait_hours,date`
                : path === "snapshot"
                    ? `${base}/snapshot`
                    : `${base}/dwell`;
    window.open(url, "_blank", "noopener,noreferrer");
}

/** 100 个端口（按区域分布） */
const PORTS: PortMeta[] = [
    // ---- North America (20)
    { code: "USLAX", name: "Los Angeles", country: "United States", region: "North America", status: "Live" },
    { code: "USLGB", name: "Long Beach", country: "United States", region: "North America", status: "Live" },
    { code: "USSEA", name: "Seattle", country: "United States", region: "North America", status: "Live" },
    { code: "USTIW", name: "Tacoma", country: "United States", region: "North America", status: "Beta" },
    { code: "USOAK", name: "Oakland", country: "United States", region: "North America", status: "Beta" },
    { code: "USNYC", name: "New York / New Jersey", country: "United States", region: "North America", status: "Live" },
    { code: "USSAV", name: "Savannah", country: "United States", region: "North America", status: "Live" },
    { code: "USCHS", name: "Charleston", country: "United States", region: "North America", status: "Live" },
    { code: "USORF", name: "Norfolk (Hampton Roads)", country: "United States", region: "North America", status: "Live" },
    { code: "USHOU", name: "Houston", country: "United States", region: "North America", status: "Live" },
    { code: "USBAL", name: "Baltimore", country: "United States", region: "North America", status: "Beta" },
    { code: "USPHL", name: "Philadelphia", country: "United States", region: "North America", status: "Beta" },
    { code: "USMIA", name: "Miami", country: "United States", region: "North America", status: "Beta" },
    { code: "USJAX", name: "Jacksonville", country: "United States", region: "North America", status: "Beta" },
    { code: "USMSY", name: "New Orleans", country: "United States", region: "North America", status: "Beta" },
    { code: "CAVAN", name: "Vancouver", country: "Canada", region: "North America", status: "Live" },
    { code: "CAPRR", name: "Prince Rupert", country: "Canada", region: "North America", status: "Live" },
    { code: "CAMTR", name: "Montréal", country: "Canada", region: "North America", status: "Live" },
    { code: "CAHAL", name: "Halifax", country: "Canada", region: "North America", status: "Live" },
    { code: "MXZLO", name: "Manzanillo", country: "Mexico", region: "North America", status: "Beta" },

    // ---- Europe (20)
    { code: "NLRTM", name: "Rotterdam", country: "Netherlands", region: "Europe", status: "Live" },
    { code: "BEANR", name: "Antwerp", country: "Belgium", region: "Europe", status: "Live" },
    { code: "DEHAM", name: "Hamburg", country: "Germany", region: "Europe", status: "Live" },
    { code: "DEBRV", name: "Bremerhaven", country: "Germany", region: "Europe", status: "Beta" },
    { code: "FRLEH", name: "Le Havre", country: "France", region: "Europe", status: "Live" },
    { code: "FRMRS", name: "Marseille", country: "France", region: "Europe", status: "Beta" },
    { code: "GBFXT", name: "Felixstowe", country: "United Kingdom", region: "Europe", status: "Live" },
    { code: "GBSOU", name: "Southampton", country: "United Kingdom", region: "Europe", status: "Live" },
    { code: "GBLGP", name: "London Gateway", country: "United Kingdom", region: "Europe", status: "Live" },
    { code: "DKAAR", name: "Aarhus", country: "Denmark", region: "Europe", status: "Live" },
    { code: "SEGOT", name: "Gothenburg", country: "Sweden", region: "Europe", status: "Live" },
    { code: "PLGDN", name: "Gdańsk", country: "Poland", region: "Europe", status: "Live" },
    { code: "ESVLC", name: "Valencia", country: "Spain", region: "Europe", status: "Live" },
    { code: "ESALG", name: "Algeciras", country: "Spain", region: "Europe", status: "Live" },
    { code: "ESBCN", name: "Barcelona", country: "Spain", region: "Europe", status: "Live" },
    { code: "ITGOA", name: "Genoa", country: "Italy", region: "Europe", status: "Live" },
    { code: "ITGIT", name: "Gioia Tauro", country: "Italy", region: "Europe", status: "Live" },
    { code: "ITTRS", name: "Trieste", country: "Italy", region: "Europe", status: "Live" },
    { code: "GRPIR", name: "Piraeus", country: "Greece", region: "Europe", status: "Live" },
    { code: "TRMER", name: "Mersin", country: "Türkiye", region: "Europe", status: "Live" },

    // ---- APAC (24)
    { code: "CNSHA", name: "Shanghai", country: "China", region: "APAC", status: "Live" },
    { code: "CNNGB", name: "Ningbo-Zhoushan", country: "China", region: "APAC", status: "Live" },
    { code: "CNSZX", name: "Shenzhen (Yantian/Shekou)", country: "China", region: "APAC", status: "Live" },
    { code: "CNXMN", name: "Xiamen", country: "China", region: "APAC", status: "Live" },
    { code: "CNQIN", name: "Qingdao", country: "China", region: "APAC", status: "Live" },
    { code: "CNTNJ", name: "Tianjin", country: "China", region: "APAC", status: "Live" },
    { code: "HKHKG", name: "Hong Kong", country: "Hong Kong, China", region: "APAC", status: "Live" },
    { code: "SGSIN", name: "Singapore", country: "Singapore", region: "APAC", status: "Live" },
    { code: "MYPKG", name: "Port Klang", country: "Malaysia", region: "APAC", status: "Live" },
    { code: "MYTPP", name: "Tanjung Pelepas", country: "Malaysia", region: "APAC", status: "Live" },
    { code: "MYPEN", name: "Penang", country: "Malaysia", region: "APAC", status: "Beta" },
    { code: "THLCH", name: "Laem Chabang", country: "Thailand", region: "APAC", status: "Live" },
    { code: "VNSGN", name: "Ho Chi Minh City (Cat Lai)", country: "Vietnam", region: "APAC", status: "Live" },
    { code: "VNHPH", name: "Haiphong", country: "Vietnam", region: "APAC", status: "Live" },
    { code: "IDJKT", name: "Jakarta (Tanjung Priok)", country: "Indonesia", region: "APAC", status: "Live" },
    { code: "IDSUB", name: "Surabaya", country: "Indonesia", region: "APAC", status: "Beta" },
    { code: "PHMNL", name: "Manila", country: "Philippines", region: "APAC", status: "Live" },
    { code: "TWKHH", name: "Kaohsiung", country: "Taiwan, China", region: "APAC", status: "Live" },
    { code: "JPTYO", name: "Tokyo", country: "Japan", region: "APAC", status: "Live" },
    { code: "JPYOK", name: "Yokohama", country: "Japan", region: "APAC", status: "Live" },
    { code: "JPNGO", name: "Nagoya", country: "Japan", region: "APAC", status: "Live" },
    { code: "JPOSA", name: "Osaka", country: "Japan", region: "APAC", status: "Live" },
    { code: "KRPUS", name: "Busan", country: "Korea", region: "APAC", status: "Live" },
    { code: "KRINC", name: "Incheon", country: "Korea", region: "APAC", status: "Beta" },

    // ---- Middle East (10)
    { code: "AEJEA", name: "Jebel Ali", country: "UAE", region: "Middle East", status: "Live" },
    { code: "AEKHL", name: "Khalifa (Abu Dhabi)", country: "UAE", region: "Middle East", status: "Live" },
    { code: "OMSLL", name: "Salalah", country: "Oman", region: "Middle East", status: "Live" },
    { code: "QADOH", name: "Doha", country: "Qatar", region: "Middle East", status: "Beta" },
    { code: "SAJED", name: "Jeddah", country: "Saudi Arabia", region: "Middle East", status: "Live" },
    { code: "SADMM", name: "Dammam", country: "Saudi Arabia", region: "Middle East", status: "Live" },
    { code: "ILASH", name: "Ashdod", country: "Israel", region: "Middle East", status: "Live" },
    { code: "ILHFA", name: "Haifa", country: "Israel", region: "Middle East", status: "Live" },
    { code: "IQUMQ", name: "Umm Qasr", country: "Iraq", region: "Middle East", status: "Beta" },
    { code: "KWSWK", name: "Shuwaikh", country: "Kuwait", region: "Middle East", status: "Beta" },

    // ---- LATAM (14)
    { code: "BRSSZ", name: "Santos", country: "Brazil", region: "LATAM", status: "Live" },
    { code: "BRPNG", name: "Paranaguá", country: "Brazil", region: "LATAM", status: "Live" },
    { code: "BRITJ", name: "Itajaí", country: "Brazil", region: "LATAM", status: "Beta" },
    { code: "BRRIO", name: "Rio de Janeiro", country: "Brazil", region: "LATAM", status: "Beta" },
    { code: "ARBUE", name: "Buenos Aires", country: "Argentina", region: "LATAM", status: "Live" },
    { code: "UYMVD", name: "Montevideo", country: "Uruguay", region: "LATAM", status: "Live" },
    { code: "CLSAI", name: "San Antonio", country: "Chile", region: "LATAM", status: "Live" },
    { code: "CLVAP", name: "Valparaíso", country: "Chile", region: "LATAM", status: "Live" },
    { code: "PECLL", name: "Callao (Lima)", country: "Peru", region: "LATAM", status: "Live" },
    { code: "COCTG", name: "Cartagena", country: "Colombia", region: "LATAM", status: "Live" },
    { code: "ECGYE", name: "Guayaquil", country: "Ecuador", region: "LATAM", status: "Live" },
    { code: "PABLB", name: "Balboa (Pacific)", country: "Panama", region: "LATAM", status: "Live" },
    { code: "PAMIT", name: "Manzanillo Int’l (Colon)", country: "Panama", region: "LATAM", status: "Live" },
    { code: "MXLZC", name: "Lázaro Cárdenas", country: "Mexico", region: "LATAM", status: "Live" },

    // ---- Africa (12)
    { code: "ZADUR", name: "Durban", country: "South Africa", region: "Africa", status: "Live" },
    { code: "ZACPT", name: "Cape Town", country: "South Africa", region: "Africa", status: "Live" },
    { code: "MZMPM", name: "Maputo", country: "Mozambique", region: "Africa", status: "Beta" },
    { code: "KEMBA", name: "Mombasa", country: "Kenya", region: "Africa", status: "Live" },
    { code: "TZDAR", name: "Dar es Salaam", country: "Tanzania", region: "Africa", status: "Live" },
    { code: "DJJIB", name: "Djibouti", country: "Djibouti", region: "Africa", status: "Live" },
    { code: "EGPSD", name: "Port Said", country: "Egypt", region: "Africa", status: "Live" },
    { code: "MATNG", name: "Tanger Med", country: "Morocco", region: "Africa", status: "Live" },
    { code: "NGLAG", name: "Lagos (Apapa/Tin Can)", country: "Nigeria", region: "Africa", status: "Live" },
    { code: "GHTEM", name: "Tema", country: "Ghana", region: "Africa", status: "Live" },
    { code: "CIABJ", name: "Abidjan", country: "Côte d’Ivoire", region: "Africa", status: "Live" },
    { code: "SNDKR", name: "Dakar", country: "Senegal", region: "Africa", status: "Live" },
];

/** Props */
export default function CoverageClient({
    initialQ,
    initialRegion,
    initialPort,
}: {
    initialQ: string;
    initialRegion: string;
    initialPort: string;
}) {
    const [q, setQ] = useState(initialQ);
    const [region, setRegion] = useState<Region | "">(
        (ALL_REGIONS.includes(initialRegion as any) ? initialRegion : "") as any
    );
    const [deeplink, setDeeplink] = useState(initialPort);

    // 同步到 URL
    useEffect(() => {
        const sp = new URLSearchParams();
        if (q) sp.set("q", q);
        if (region) sp.set("region", region);
        if (deeplink) sp.set("port", deeplink);
        const url = sp.toString() ? `/coverage?${sp.toString()}` : "/coverage";
        window.history.replaceState(null, "", url);
    }, [q, region, deeplink]);

    const filtered = useMemo(() => {
        const kw = q.trim().toLowerCase();
        return PORTS.filter((p) => {
            const regionOk = region ? p.region === region : true;
            const hit =
                !kw ||
                p.code.toLowerCase().includes(kw) ||
                p.name.toLowerCase().includes(kw) ||
                p.country.toLowerCase().includes(kw);
            return regionOk && hit;
        }).sort((a, b) => a.region.localeCompare(b.region) || a.name.localeCompare(b.name));
    }, [q, region]);

    const onDeepLink = () => {
        const code = (deeplink || "").trim().toUpperCase();
        if (!/^[A-Z0-9]{5}$/.test(code)) {
            alert("Please input a valid UN/LOCODE, e.g., USLAX.");
            return;
        }
        openApi(code, "trend");
    };

    return (
        <main className="container mx-auto px-4 py-10">
            <h1 className="text-2xl font-semibold">Coverage</h1>
            <p className="text-black/60">
                100 live ports. Filter by region or search UN/LOCODE.
            </p>

            {/* Controls */}
            <div className="mt-4 grid gap-3 md:grid-cols-3">
                <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Search by name / country / UN/LOCODE"
                    className="rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
                    aria-label="Search ports"
                />
                <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value as Region | "")}
                    className="rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
                >
                    <option value="">All regions</option>
                    <option>North America</option>
                    <option>Europe</option>
                    <option>APAC</option>
                    <option>Middle East</option>
                    <option>LATAM</option>
                    <option>Africa</option>
                </select>
                <div className="flex gap-2">
                    <input
                        value={deeplink}
                        onChange={(e) => setDeeplink(e.target.value.toUpperCase())}
                        onKeyDown={(e) => e.key === "Enter" && onDeepLink()}
                        placeholder="Deep-link UN/LOCODE (e.g., USLAX)"
                        className="flex-1 rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10 uppercase"
                        aria-label="UN/LOCODE"
                    />
                    <button
                        onClick={onDeepLink}
                        className="rounded-lg bg-black px-4 py-2 text-white hover:bg-black/90"
                        title="Open /trend in a new tab"
                    >
                        Open trend
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
                <table className="w-full text-sm">
                    <thead className="bg-black/[0.03] text-black/70">
                        <tr>
                            <th className="px-3 py-2 text-left">Port</th>
                            <th className="px-3 py-2 text-left">UN/LOCODE</th>
                            <th className="px-3 py-2 text-left">Country</th>
                            <th className="px-3 py-2 text-left">Region</th>
                            <th className="px-3 py-2 text-left">Status</th>
                            <th className="px-3 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((p) => (
                            <tr key={p.code} className="border-t border-black/5 hover:bg-black/[0.02]">
                                <td className="px-3 py-2 font-medium">
                                    <Highlight text={p.name} query={q} />
                                </td>
                                <td className="px-3 py-2 font-mono">
                                    <Highlight text={p.code} query={q} />
                                </td>
                                <td className="px-3 py-2">
                                    <Highlight text={p.country} query={q} />
                                </td>
                                <td className="px-3 py-2">{p.region}</td>
                                <td className="px-3 py-2">
                                    <Badge tone={p.status === "Live" ? "live" : "beta"}>{p.status}</Badge>
                                </td>
                                <td className="px-3 py-2">
                                    <div className="flex flex-wrap gap-2">
                                        <button onClick={() => openApi(p.code, "overview")} className="underline hover:opacity-80">Overview</button>
                                        <button onClick={() => openApi(p.code, "trend")} className="underline hover:opacity-80">Trend</button>
                                        <button onClick={() => openApi(p.code, "snapshot")} className="underline hover:opacity-80">Snapshot</button>
                                        <button onClick={() => openApi(p.code, "dwell")} className="underline hover:opacity-80">Dwell</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {filtered.length === 0 && (
                            <tr>
                                <td colSpan={6} className="px-3 py-10 text-center text-black/50">
                                    No ports match your filters.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="mt-3 text-xs text-black/50">
                Schema &amp; freshness SLO are standardized across ports. On-request onboarding typically takes 2–4 weeks.
            </div>
        </main>
    );
}