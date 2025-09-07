"use client";
import { useId } from "react";
import type { Bucket, Region, Role } from "@/data/ports.m1";

export type Filters = {
  q: string;
  regions: Set<Region>;
  roles: Set<Role>;
  buckets: Set<Bucket>;
};

export function useEmptyFilters(): Filters {
  return { q: "", regions: new Set(), roles: new Set(), buckets: new Set() };
}

export function FiltersBar({
  value,
  onChange,
  regionOptions,
  roleOptions,
  bucketOptions,
  total,
  matched,
}: {
  value: Filters;
  onChange: (next: Filters) => void;
  regionOptions: Region[];
  roleOptions: Role[];
  bucketOptions: Bucket[];
  total: number;
  matched: number;
}) {
  const sid = useId();

  const toggle = <T extends string>(set: Set<T>, key: T) => {
    const next = new Set(set);
    next.has(key) ? next.delete(key) : next.add(key);
    return next;
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <label htmlFor={sid} className="sr-only">Search</label>
          <input
            id={sid}
            placeholder="Search name / UNLOCODE / alias…"
            value={value.q}
            onChange={(e) => onChange({ ...value, q: e.target.value })}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-500">Regions:</span>
          {regionOptions.map((r) => (
            <Chip
              key={r}
              active={value.regions.has(r)}
              onClick={() => onChange({ ...value, regions: toggle(value.regions, r) })}
              label={r}
            />
          ))}
          <span className="ml-3 text-xs text-slate-500">Role:</span>
          {roleOptions.map((r) => (
            <Chip
              key={r}
              active={value.roles.has(r)}
              onClick={() => onChange({ ...value, roles: toggle(value.roles, r) })}
              label={r}
            />
          ))}
          <span className="ml-3 text-xs text-slate-500">Bucket:</span>
          {bucketOptions.map((b) => (
            <Chip
              key={b}
              active={value.buckets.has(b)}
              onClick={() => onChange({ ...value, buckets: toggle(value.buckets, b) })}
              label={b}
            />
          ))}

          <button
            type="button"
            className="ml-2 rounded-lg border border-slate-300 px-2 py-1 text-xs hover:bg-slate-50"
            onClick={() => onChange({ q: "", regions: new Set(), roles: new Set(), buckets: new Set() })}
            aria-label="Reset filters"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="mt-2 text-xs text-slate-500">
        Showing <span className="font-medium text-slate-700">{matched}</span> of {total}
      </div>
    </div>
  );
}

function Chip({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "rounded-full bg-slate-900 px-2.5 py-1 text-xs text-white"
          : "rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700 hover:bg-slate-200"
      }
      aria-pressed={active}
    >
      {label}
    </button>
  );
}
