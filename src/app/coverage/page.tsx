"use client";
import { useEffect, useMemo, useState } from "react";
import { PORTS_COVERAGE, regions, statuses, type PortItem } from "@/data/portsCoverage";

type Region = (typeof regions)[number]["id"] | "ALL";
type Status = (typeof statuses)[number] | "ALL";

export const dynamic = "force-static";

/** Strictly typed gtag wrapper (no any) */
type GtagFn = (command: "event", name: string, params?: Record<string, unknown>) => void;
function track(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { gtag?: GtagFn };
  w.gtag?.("event", name, params ?? {});
}

export default function CoveragePage() {
  const [region, setRegion] = useState<Region>("ALL");
  const [status, setStatus] = useState<Status>("ALL");
  const [country, setCountry] = useState<string>("ALL");
  const [q, setQ] = useState("");

  const countries = useMemo(() => {
    const set = new Set(PORTS_COVERAGE.map((p) => p.country));
    return ["ALL", ...Array.from(set).sort()];
  }, []);

  const filtered = useMemo(
    () =>
      PORTS_COVERAGE.filter(
        (p) =>
          (region === "ALL" || p.region === region) &&
          (status === "ALL" || p.status === status) &&
          (country === "ALL" || p.country === country) &&
          (q === "" ||
            p.port.toLowerCase().includes(q.toLowerCase()) ||
            p.country.toLowerCase().includes(q.toLowerCase()))
      ),
    [region, status, country, q]
  );

  useEffect(() => {
    track("coverage_view", {});
  }, []);
  useEffect(() => {
    track("coverage_filter", { region, status, country, q_len: q.length });
  }, [region, status, country, q]);

  function dlCsv(rows: PortItem[]) {
    const head = ["Port", "Country", "Region", "Status", "Metrics", "Freshness SLO", "Notes"];
    const body = rows.map((r) => [
      r.port,
      r.country,
      r.region,
      r.status,
      r.metrics.join("/"),
      r.freshness,
      r.notes ?? "",
    ]);
    const csv = [head, ...body]
      .map((x) => x.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "portpulse_coverage.csv";
    a.click();
    URL.revokeObjectURL(a.href);
  }

  const live = PORTS_COVERAGE.filter((p) => p.status === "Live").length;
  const onreq = PORTS_COVERAGE.filter((p) => p.status === "On-request").length;

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Global Coverage & Expansion</h1>
      <p className="mt-2 text-black/60">
        Live：{live}+ · On-request：{onreq}+ · Typical onboarding：2–4 weeks
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search port or country"
          className="rounded-xl border border-black/10 px-3 py-2 outline-none focus:ring-2 ring-[#26B1FF]"
        />
        <div className="flex flex-wrap gap-2">
          <Sel active={region === "ALL"} onClick={() => setRegion("ALL")}>
            All regions
          </Sel>
          {regions.map((r) => (
            <Sel key={r.id} active={region === r.id} onClick={() => setRegion(r.id)}>
              {r.name}
            </Sel>
          ))}
        </div>
        <div className="flex gap-2">
          <Sel active={status === "ALL"} onClick={() => setStatus("ALL")}>
            All
          </Sel>
          {statuses.map((s) => (
            <Sel key={s} active={status === s} onClick={() => setStatus(s)}>
              {s}
            </Sel>
          ))}
        </div>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="rounded-xl border border-black/10 px-3 py-2 ml-auto"
        >
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <button
          onClick={() => dlCsv(filtered)}
          className="rounded-xl border border-black/10 px-3 py-2 hover:bg-black/5"
        >
          Download CSV
        </button>
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-black/10 bg-white">
        <table className="w-full text-sm">
          <thead className="text-left bg-black/5">
            <tr>
              <Th>Port</Th>
              <Th>Country</Th>
              <Th>Region</Th>
              <Th>Status</Th>
              <Th>Metrics</Th>
              <Th>Freshness SLO</Th>
              <Th>Notes</Th>
              <Th>Action</Th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td className="p-4 text-black/60" colSpan={8}>
                  No ports found. Try a different filter.
                </td>
              </tr>
            )}
            {filtered.map((p, i) => (
              <tr key={i} className="border-t border-black/5">
                <Td>{p.port}</Td>
                <Td>{p.country}</Td>
                <Td>{p.region}</Td>
                <Td>{p.status}</Td>
                <Td>{p.metrics.join(" / ")}</Td>
                <Td>{p.freshness}</Td>
                <Td>{p.notes ?? ""}</Td>
                <Td>
                  <a
                    onClick={() => track("port_request", { port: p.port, country: p.country, region: p.region })}
                    href={`/contact?intent=port_request&port=${encodeURIComponent(p.port)}&country=${encodeURIComponent(
                      p.country
                    )}`}
                    className="rounded-lg border border-black/10 px-3 py-1 hover:bg-black/5 inline-block"
                  >
                    Request this port
                  </a>
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-black/60 text-sm">
        New ports follow the same schema and SLO. Typical onboarding 2–4 weeks.
      </p>
    </div>
  );
}

function Sel(props: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={props.onClick}
      className={`px-3 py-2 rounded-xl text-sm transition ${
        props.active ? "bg-[#0B2740] text-white" : "bg-black/5 hover:bg-black/10"
      }`}
    >
      {props.children}
    </button>
  );
}
function Th({ children }: { children: React.ReactNode }) {
  return <th className="px-3 py-2">{children}</th>;
}
function Td({ children }: { children: React.ReactNode }) {
  return <td className="px-3 py-2 align-top">{children}</td>;
}
