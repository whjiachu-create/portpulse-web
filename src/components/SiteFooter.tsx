export default function SiteFooter(){
  return (
    <footer style={{borderTop:'1px solid #e5e7eb',marginTop:40}}>
      <div style={{maxWidth:1200,margin:'0 auto',padding:'24px 16px',fontSize:12,color:'#6b7280'}}>
        © {new Date().getFullYear()} PortPulse — APIs for Port Operations
      </div>
    </footer>
  );
}
