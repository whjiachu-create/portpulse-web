import Image from "next/image";
import Solutions from "@/components/Solutions";

export default function HomePage() {
  return (
    <main>
      <section style={{position:'relative',minHeight:'65vh',display:'grid',placeItems:'center'}}>
        <Image src="/images/hero-port.jpg" alt="PortPulse Hero" fill priority sizes="100vw" style={{objectFit:'cover'}} />
        <div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom, rgba(0,0,0,.6), rgba(0,0,0,.4), rgba(0,0,0,.6))'}}/>
        <div style={{position:'relative',maxWidth:960,color:'#fff',padding:'64px 16px'}}>
          <h1 style={{fontSize:48,fontWeight:700,lineHeight:1.1}}>Real-time port visibility & predictive insights</h1>
          <p style={{marginTop:12,opacity:.9,maxWidth:720}}>
            APIs for trends, congestion, dwell, snapshots & alerts. Cache-friendly, JSON/CSV parity, ETag/304.
          </p>
          <div style={{marginTop:16,display:'flex',flexWrap:'wrap',gap:8}}>
            <a href="/pricing" className="pill" style={{background:'#fff',color:'#000',textDecoration:'none'}}>Start 14-day evaluation</a>
            <a href="/contact" className="pill" style={{border:'1px solid rgba(255,255,255,.6)',color:'#fff',textDecoration:'none'}}>Book a demo</a>
          </div>
        </div>
      </section>

      <section style={{maxWidth:1200,margin:'0 auto',padding:'24px 16px'}}>
        <Solutions />
      </section>
    </main>
  );
}
