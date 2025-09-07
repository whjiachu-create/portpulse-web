export default function MapLegend(){
  return (
    <div className="mt-3 flex items-center gap-4 text-xs text-slate-600">
      <div className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-slate-700"></span><span>Dot size ≈ traffic</span></div>
      <div className="flex items-center gap-2"><span className="inline-block h-2 w-4 rounded bg-blue-500"></span><span>Color ≈ congestion</span></div>
      <span className="ml-auto text-slate-400">Illustrative. Ask sales for your corridor.</span>
    </div>
  );
}
