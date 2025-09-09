"use client";

import { useMemo, useState } from "react";
import { PORTS100, type PortRow } from "@/data/ports100";
import { useRouter } from "next/navigation";

// 仅包含 PortRow 原有键
type SortKey = Extract<keyof PortRow, string>;
// UI 支持的排序键 = PortRow 键 + "role"
type SortKeyOrRole = SortKey | "role";

type Props = { initialPort?: string };

const ALL = "All";

// 从数据里安全获取 role（数据里有但类型未声明时也能用）
function getRole(r: PortRow): string | undefined {
  // 如果未来 PortRow 类型补上了 role，这里也兼容
  return (r as unknown as { role?: string })?.role;
}

export default function CoverageTable({ initialPort = "" }: Props) {
  const router = useRouter();
  const [q, setQ] = useState<string>(initialPort);
  const [region, setRegion] = useState<string>(ALL);
  const [role, setRole] = useState<string>(ALL);
  const [sortBy, setSortBy] = useState<SortKeyOrRole>(() => "code");

  // 唯一化区域和角色（容错：即便数据为空也能跑）
  const regions = useMemo(
    () => Array.from(new Set((PORTS100 ?? []).map((p) => p.region))).sort(),
    []
  );
  const roles = ["G", "H"];

  const filtered: PortRow[] = useMemo(() => {
    let rows = [...(PORTS100 ?? [])];

    if (q) {
      const needle = q.toLowerCase();
      rows = rows.filter(
        (r) =>
          r.code.toLowerCase().includes(needle) ||
          r.name.toLowerCase().includes(needle) ||
          r.country.toLowerCase().includes(needle)
      );
    }
    if (region !== ALL) rows = rows.filter((r) => r.region === region);
    if (role !== ALL) rows = rows.filter((r) => getRole(r) === role);

    rows.sort((a, b) => {
      let A = "";
      let B = "";
      if (sortBy === "role") {
        A = (getRole(a) ?? "").toLowerCase();
        B = (getRole(b) ?? "").toLowerCase();
      } else {
        A = String((a as Record<string, unknown>)[sortBy] ?? "").toLowerCase();
        B = String((b as Record<string, unknown>)[sortBy] ?? "").toLowerCase();
      }
      return A.localeCompare(B, "en");
    });
    return rows;
  }, [q, region, role, sortBy]);

  const openPort = (code: string) =>
    router.push(`/coverage?port=${encodeURIComponent(code)}`);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Controls */}
      <div className="flex flex-col gap-2 p-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search UN/LOCODE, name or country…"
            className="w-64 rounded-lg border border-slate-200 px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-sky-200"
          />
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="rounded-lg border border-slate-200 px-2.5 py-1.5 text-sm"
          >
            <option value={ALL}>All regions</option>
            {regions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="rounded-lg border border-slate-200 px-2.5 py-1.5 text-sm"
          >
            <option value={ALL}>All roles</option>
            {roles.map((r) => (
              <option key={r} value={r}>
                {r === "G" ? "Gateway (G)" : "Hub (H)"}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-slate-500">Sort by</span>
          <select
            value={String(sortBy)}
            onChange={(e) => setSortBy(e.target.value as SortKeyOrRole)}
            className="rounded-lg border border-slate-200 px-2.5 py-1.5 text-sm"
          >
            <option value="code">UN/LOCODE</option>
            <option value="name">Name</option>
            <option value="country">Country</option>
            <option value="region">Region</option>
            <option value="role">Role</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <Th>UN/LOCODE</Th>
              <Th>Name</Th>
              <Th>Country</Th>
              <Th>Region</Th>
              <Th className="text-center">Role</Th>
              <Th className="text-right">Actions</Th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => {
              const roleVal = getRole(p);
              return (
                <tr key={p.code} className="border-t border-slate-100">
                  <Td mono>{p.code}</Td>
                  <Td>{p.name}</Td>
                  <Td>{p.country}</Td>
                  <Td>{p.region}</Td>
                  <Td className="text-center">
                    {roleVal ? (
                      <span
                        className={`inline-flex rounded-full px-2 py-0.5 text-xs ${
                          roleVal === "G"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-indigo-50 text-indigo-700 border border-indigo-200"
                        }`}
                      >
                        {roleVal}
                      </span>
                    ) : (
                      <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-500">
                        —
                      </span>
                    )}
                  </Td>
                  <Td className="text-right">
                    <button
                      onClick={() => openPort(p.code)}
                      className="rounded-md border border-slate-200 px-2.5 py-1 text-xs hover:bg-slate-50"
                    >
                      Open details
                    </button>
                  </Td>
                </tr>
              );
            })}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="py-10 text-center text-slate-500">
                  No results. Try a different keyword or filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Th({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <th className={`px-3 py-2 text-left font-medium ${className}`}>{children}</th>;
}
function Td({
  children,
  mono,
  className = "",
}: {
  children: React.ReactNode;
  mono?: boolean;
  className?: string;
}) {
  return <td className={`px-3 py-2 ${mono ? "font-mono" : ""} ${className}`}>{children}</td>;
}
