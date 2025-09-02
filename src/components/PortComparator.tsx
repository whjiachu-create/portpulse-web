"use client";
import { useState } from "react";
import TrendMini from "@/components/TrendMini";

type Props = { ports: string[]; days?: number };

export default function PortComparator({ ports, days = 14 }: Props) {
  const [left, setLeft] = useState<string>(ports[0] ?? "USLAX");
  const [right, setRight] = useState<string>(ports[1] ?? "USNYC");
  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <Select value={left} onChange={setLeft} options={ports} label="Left port" />
        <span className="text-black/40 text-sm">vs</span>
        <Select value={right} onChange={setRight} options={ports} label="Right port" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card title={`${left} — ${days}d`}><TrendMini unlocode={left} days={days} /></Card>
        <Card title={`${right} — ${days}d`}><TrendMini unlocode={right} days={days} /></Card>
      </div>
    </div>
  );
}

function Select({ value, onChange, options, label }:{
  value:string; onChange:(v:string)=>void; options:string[]; label:string;
}) {
  return (
    <label className="text-sm text-black/70 flex items-center gap-2">
      <span className="sr-only">{label}</span>
      <select
        className="rounded-xl border border-black/10 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#26B1FF]"
        value={value}
        onChange={(e)=>onChange(e.target.value)}
      >
        {options.map(p => <option key={p} value={p}>{p}</option>)}
      </select>
    </label>
  );
}

function Card({ title, children }:{title:string; children:React.ReactNode}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
      <h3 className="text-sm font-medium mb-2">{title}</h3>
      {children}
    </div>
  );
}
