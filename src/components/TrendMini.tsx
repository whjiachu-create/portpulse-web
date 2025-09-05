"use client";
export default function TrendMini({ unlocode, days = 14 }:{unlocode:string; days?:number}) {
  return <div className="h-32 grid place-items-center text-slate-500 text-sm border rounded-md border-dashed">
    TrendMini({unlocode}, {days}d)
  </div>;
}
