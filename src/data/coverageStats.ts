export type CoveragePort = { status?: string; [k: string]: unknown };

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore — we don't assume export names, we inspect at runtime safely
import * as mod from "./portsCoverage";

function pickArray(m: Record<string, unknown>): CoveragePort[] {
  const cand = [m.ports, m.list, m.items, m.all, m.default, m.data];
  for (const v of cand) if (Array.isArray(v)) return v as CoveragePort[];
  return [];
}

const list: CoveragePort[] = pickArray(mod) || [];
const norm = (s?: string) => (s || "").trim().toLowerCase();

export const live = list.filter(p => norm(p.status).startsWith("live")).length;
export const onRequest = list.filter(p => /on[-\s]?request/.test(norm(p.status))).length;

// optional exports if other pages need them later
export const coverageList = list;
export const stats = { live, onRequest };
