export default function SiteHeader(){
  return (
    <header style={{position:'sticky',top:0,background:'#fff',borderBottom:'1px solid #e5e7eb',zIndex:50}}>
      <div style={{maxWidth:1200,margin:'0 auto',padding:'10px 16px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <a href="/" style={{fontWeight:700}}>PortPulse</a>
        <nav style={{display:'flex',gap:12}}>
          <a href="/pricing">Pricing</a>
          <a href="/docs/api" rel="noreferrer">Docs</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
