'use client';
import { useEffect, useState } from 'react';

type State = 'online'|'degraded'|'offline'|'loading';

export default function StatusPill() {
  const [state, setState] = useState<State>('loading');
  useEffect(() => {
    let stop = false;
    const BASE = process.env.NEXT_PUBLIC_API_BASE || '';
    async function ping() {
      try {
        const r = await fetch(`${BASE}/v1/health`, { cache:'no-store' });
        if (stop) return;
        if (!r.ok) { setState('degraded'); return; }
        const j = await r.json().catch(()=>({ok:false}));
        setState(j?.ok ? 'online' : 'degraded');
      } catch {
        setState('offline');
      }
    }
    ping();
    const id = setInterval(ping, 30_000);
    return () => { stop = true; clearInterval(id); };
  }, []);

  const map = {
    loading: 'bg-slate-500',
    online: 'bg-emerald-500',
    degraded: 'bg-amber-500',
    offline: 'bg-rose-500',
  } as const;

  return (
    <span title={`API status: ${state}`}
      className={`pill ${map[state]} text-white`}>
      <span className="inline-block h-2 w-2 rounded-full bg-white/90" />
      {state}
    </span>
  );
}
