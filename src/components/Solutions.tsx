export default function Solutions() {
  const items = [
    { title: "Container & Port Tracking", desc: "Unified events and port snapshots via API." },
    { title: "Predictive ETAs & Alerts", desc: "Actionable exceptions with reasons." },
    { title: "Port Congestion & Dwell", desc: "Plan with reliable waiting time signals." },
    { title: "Terminal Events & APIs", desc: "Import/export milestones in one schema." },
  ];
  return (
    <section aria-labelledby="solutions" style={{marginTop:40}}>
      <h2 id="solutions" style={{fontSize:24,fontWeight:600}}>Solutions</h2>
      <div style={{display:'grid',gap:16,gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',marginTop:16}}>
        {items.map((it) => (
          <article key={it.title} style={{border:'1px solid #e5e7eb',borderRadius:16,padding:20,background:'#fff',boxShadow:'0 1px 2px rgba(0,0,0,.04)'}}>
            <h3 style={{fontSize:18,fontWeight:600}}>{it.title}</h3>
            <p style={{marginTop:8,color:'#475569',fontSize:14}}>{it.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
