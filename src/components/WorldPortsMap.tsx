// src/components/WorldPortsMap.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { geoNaturalEarth1, geoPath, type GeoPermissibleObjects } from "d3-geo";
import { feature } from "topojson-client";
import type { FeatureCollection, Feature, Geometry, GeoJsonProperties } from "geojson";
import type { Topology, GeometryCollection } from "topojson-specification";

type CountriesTopo = Topology & { objects: { countries: GeometryCollection } };

type PortPt = {
    code: string;
    name: string;
    coord: [number, number];
};

const GEO_URL = "https://unpkg.com/world-atlas@2/countries-110m.json";

const PORTS: ReadonlyArray<PortPt> = [
    { code: "USLAX", name: "Los Angeles", coord: [-118.264, 33.732] },
    { code: "USLGB", name: "Long Beach", coord: [-118.215, 33.767] },
    { code: "SGSIN", name: "Singapore", coord: [103.75, 1.26] },
    { code: "CNSHA", name: "Shanghai", coord: [121.5, 31.3] },
    { code: "NLRTM", name: "Rotterdam", coord: [4.48, 51.95] },
    { code: "DEHAM", name: "Hamburg", coord: [9.97, 53.54] },
] as const;

export default function WorldPortsMap() {
    const [paths, setPaths] = useState<string[]>([]);
    const [points, setPoints] = useState<Array<{ code: string; x: number; y: number }>>([]);

    const width = 720;
    const height = 420;

    // projection & path generator
    const projection = useMemo(
        () => geoNaturalEarth1().fitExtent([[8, 8], [width - 8, height - 8]], { type: "Sphere" } as GeoPermissibleObjects),
        [width, height]
    );
    const pathGen = useMemo(() => geoPath(projection), [projection]);

    useEffect(() => {
        async function load() {
            async function loadFrom(url: string) {
                const res = await fetch(url, { cache: "force-cache" });
                const topo = (await res.json()) as CountriesTopo;
                const countries = feature(topo, topo.objects.countries) as FeatureCollection<Geometry, GeoJsonProperties>;
                const ps = (countries.features ?? []).map((f: Feature<Geometry, GeoJsonProperties>) =>
                    pathGen(f as unknown as GeoPermissibleObjects) ?? ""
                );
                setPaths(ps);
            }

            try {
                await loadFrom(GEO_URL);
            } catch {
                try {
                    // optional local fallback: copy countries-110m.json to /public/world-110m.json if needed
                    await loadFrom("/world-110m.json");
                } catch {
                    setPaths([]);
                }
            }

            const pts = PORTS.map((p) => {
                const xy = projection(p.coord);
                return xy ? { code: p.code, x: xy[0], y: xy[1] } : null;
            }).filter((v): v is { code: string; x: number; y: number } => v !== null);
            setPoints(pts);
        }

        load();
    }, [pathGen, projection]);

    return (
        <section className="mx-auto max-w-6xl px-5 py-12">
            <h2 className="mb-4 text-2xl font-semibold">Global coverage (sample)</h2>
            <div className="rounded-xl border bg-white p-3">
                <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-[420px]">
                    <defs>
                        <radialGradient id="sea" cx="50%" cy="50%" r="75%">
                            <stop offset="0%" stopColor="#eef6ff" />
                            <stop offset="100%" stopColor="#ffffff" />
                        </radialGradient>
                    </defs>

                    <rect width={width} height={height} fill="url(#sea)" />

                    <g className="fill-slate-200 stroke-slate-400/60">
                        {paths.map((d, i) => (
                            <path key={i} d={d} strokeWidth={0.5} />
                        ))}
                    </g>

                    <g>
                        {points.map((p) => (
                            <g key={p.code} transform={`translate(${p.x},${p.y})`}>
                                <circle r={3} className="fill-gray-900" />
                                <text y={-10} textAnchor="middle" className="fill-gray-700 text-[10px]">
                                    {p.code}
                                </text>
                            </g>
                        ))}
                    </g>
                </svg>
                <p className="mt-3 text-xs text-gray-500">Illustrative only. Ask sales for your target corridor.</p>
            </div>
        </section>
    );
}