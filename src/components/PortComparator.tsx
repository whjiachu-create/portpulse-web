"use client";
export default function PortComparator({ ports, days=14 }:{ports:string[]; days?:number}) {
  return (
    <div className="grid md:grid-cols-2 gap-3">
      {ports.slice(0,2).map(p => (
        <div key={p} className="h-32 grid place-items-center text-slate-500 text-sm border rounded-md border-dashed">
          {p} · {days}d
        </div>
      ))}
    </div>
  );
}
