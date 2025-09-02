"use client";
import { useEffect, useMemo, useState } from "react";
import { geoNaturalEarth1, geoPath, type GeoPermissibleObjects } from "d3-geo";
import { feature } from "topojson-client";
import type { Feature, FeatureCollection, Geometry, GeoJsonProperties } from "geojson";
import type { Topology, GeometryCollection } from "topojson-specification";

const WORLD_TOPO = "https://unpkg.com/world-atlas@2/countries-110m.json";
const DEMO_PORTS = [
  { code: "USLAX", coord: [-118.264, 33.732] },
  { code: "USLGB", coord: [-118.215, 33.767] },
  { code: "SGSIN", coord: [103.75, 1.26] },
  { code: "CNSHA", coord: [121.5, 31.3] },
  { code: "NLRTM", coord: [4.48, 51.95] },
  { code: "DEHAM", coord: [9.97, 53.54] },
];

type CountriesTopo = Topology & { objects: { countries: GeometryCollection } };

export default function D3WorldPortsMap() {
  const [paths, setPaths] = useState<string[]>([]);
  const [points, setPoints] = useState<Array<{ code: string; x: number; y: number }>>([]);
  const width = 720, height = 380;

  const projection = useMemo(
    () => geoNaturalEarth1().fitExtent([[8, 8], [width - 8, height - 8]], { type: "Sphere" } as GeoPermissibleObjects),
    [width, height]
  );
  const pathGen = useMemo(() => geoPath(projection), [projection]);

  useEffect(() => {
    async function loadFrom(url: string) {
      const res = await fetch(url, { cache: "force-cache" });
      const world = (await res.json()) as CountriesTopo;
      const countries = feature(world, world.objects.countries) as FeatureCollection<Geometry, GeoJsonProperties>;
      const ps = (countries.features ?? []).map(
        (f: Feature<Geometry, GeoJsonProperties>) => pathGen(f as unknown as GeoPermissibleObjects) ?? ""
      );
      setPaths(ps);
    }
    (async () => {
      try { await loadFrom(WORLD_TOPO); }
      catch { try { await loadFrom("/world-110m.json"); } catch { setPaths([]); } }
      const pts = DEMO_PORTS.map((p) => {
        const xy = projection(p.coord as [number, number]);
        return xy ? { code: p.code, x: xy[0], y: xy[1] } : null;
      }).filter((v): v is { code: string; x: number; y: number } => v !== null);
      setPoints(pts);
    })();
  }, [pathGen, projection]);

  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-12">
      <h2 className="mb-4 text-2xl font-semibold">Global coverage (sample)</h2>
      <div className="rounded-xl border bg-white p-3">
        <svg viewBox={`0 0 ${width} ${height}`} className="h-[420px] w-full">
          <defs>
            <radialGradient id="sea" cx="50%" cy="50%" r="75%">
              <stop offset="0%" stopColor="#eef6ff" />
              <stop offset="100%" stopColor="#ffffff" />
            </radialGradient>
          </defs>
          <rect width={width} height={height} fill="url(#sea)" />
          <g className="fill-slate-200 stroke-slate-400/60">
            {paths.map((d, i) => (<path key={i} d={d} strokeWidth={0.5} />))}
          </g>
          <g>
            {points.map((p) => (
              <g key={p.code} transform={`translate(${p.x},${p.y})`}>
                <circle r="3" className="fill-gray-900" />
                <text y={-10} textAnchor="middle" className="fill-gray-700 text-[10px]">{p.code}</text>
              </g>
            ))}
          </g>
        </svg>
        <p className="mt-3 text-xs text-gray-500">Illustrative only. Ask sales for your target corridor.</p>
      </div>
    </section>
  );
}
