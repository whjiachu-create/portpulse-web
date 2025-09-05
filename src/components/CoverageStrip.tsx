export default function CoverageStrip() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
      {Array.from({length:6}).map((_,i)=>(
        <div key={i} className="h-10 rounded-md border border-slate-200 bg-white/70" />
      ))}
    </div>
  );
}
