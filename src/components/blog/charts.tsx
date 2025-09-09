/* Lightweight inline charts for blog cards/posts (no client runtime needed) */
type SparkProps = { data: number[]; width?: number; height?: number; strokeWidth?: number };
export function SparkLine({ data, width=220, height=48, strokeWidth=2 }: SparkProps) {
  const min = Math.min(...data), max = Math.max(...data);
  const norm = (v:number)=> (height-6) - ((v-min)/(max-min||1))*(height-12);
  const pts = data.map((v,i)=>`${(i/(data.length-1||1))* (width-12) + 6},${norm(v)}`).join(" ");
  return (
    <svg width={width} height={height} role="img" aria-label="sparkline">
      <rect x="0" y="0" width={width} height={height} fill="#F6F8FB" rx="8" />
      <polyline fill="none" stroke="#0B2740" strokeWidth={strokeWidth} points={pts} />
    </svg>
  );
}

type BarsProps = { data: number[]; width?: number; height?: number };
export function Bars({ data, width=220, height=48 }: BarsProps) {
  const max = Math.max(...data, 1);
  const bw = (width-16)/data.length;
  return (
    <svg width={width} height={height} role="img" aria-label="bars">
      <rect x="0" y="0" width={width} height={height} fill="#F6F8FB" rx="8" />
      {data.map((v,i)=>{
        const h = (v/max)*(height-12);
        return <rect key={i} x={8+i*bw+2} y={height-6-h} width={bw-4} height={h} fill="#0B2740" opacity="0.85" rx="3" />;
      })}
    </svg>
  );
}
