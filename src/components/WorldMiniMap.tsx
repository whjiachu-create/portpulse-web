"use client";

import { useEffect, useMemo, useState } from "react";
import { geoNaturalEarth1, geoPath, type GeoPermissibleObjects } from "d3-geo";
import { feature } from "topojson-client";
import type { FeatureCollection, Geometry } from "geojson";
import type { Topology, GeometryCollection } from "topojson-specification";

type CountriesTopo = Topology & { objects: { countries: GeometryCollection } };
type Pt = { code: string; x: number; y: number };

const WORLD_TOPO = "https://unpkg.com/world-atlas@2/countries-110m.json";

// 显式放宽为 string，避免字面量联合导致的类型不兼容
type Port = { code: string; name: string; coord: [number, number] };
const DEMO_PORTS: Port[] = [
    { code: "USLAX", name: "Los Angeles", coord: [-118.264, 33.732] },
    { code: "USLGB", name: "Long Beach", coord: [-118.215, 33.767] },
    { code: "SGSIN", name: "Singapore", coord: [103.75, 1.26] },
    { code: "CNSHA", name: "Shanghai", coord: [121.5, 31.3] },
    { code: "NLRTM", name: "Rotterdam", coord: [4.48, 51.95] },
    { code: "DEHAM", name: "Hamburg", coord: [9.97, 53.54] },
];

const notNull = <T,>(v: T | null | undefined): v is T => v != null;

export default function WorldMiniMap() {
    const [paths, setPaths] = useState<string[]>([]);
    const [points, setPoints] = useState<Pt[]>([]);

    const width = 720;
    const height = 380;

    const projection = useMemo(
        () => geoNaturalEarth1().fitExtent([[8, 8], [width - 8, height - 8]], { type: "Sphere" } as GeoPermissibleObjects),
        [width, height]
    );
    const pathGen = useMemo(() => geoPath(projection), [projection]);

    useEffect(() => {
        async function load() {
            async function loadFrom(url: string) {
                const res = await fetch(url);
                const world = (await res.json()) as CountriesTopo;
                const countries = feature(world, world.objects.countries) as FeatureCollection<Geometry>;
                const ps = (countries.features ?? []).map((f) => pathGen(f as unknown as GeoPermissibleObjects) ?? "");
                setPaths(ps);
            }

            try {
                await loadFrom(WORLD_TOPO);
            } catch {
                try {
                    await loadFrom("/world-110m.json");
                } catch {
                    setPaths([]);
                }
            }

            const pts = DEMO_PORTS
                .map((p) => {
                    const xy = projection(p.coord);
                    return xy ? { code: p.code, x: xy[0], y: xy[1] } : null;
                })
                .filter(notNull); // => Pt[]

            setPoints(pts);
        }

        load();
    }, [pathGen, projection]);

    return (
        <section className="bg-white">
            <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-12">
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
                            {paths.map((d, i) => (
                                <path key={i} d={d} strokeWidth={0.5} />
                            ))}
                        </g>
                        <g>
                            {points.map((p) => (
                                <g key={p.code} transform={`translate(${p.x},${p.y})`}>
                                    <circle r="3" className="fill-gray-900" />
                                    <text y={-10} textAnchor="middle" className="fill-gray-700 text-[10px]">
                                        {p.code}
                                    </text>
                                </g>
                            ))}
                        </g>
                    </svg>
                    <p className="mt-3 text-xs text-gray-500">Illustrative only. Ask sales for your target corridor.</p>
                </div>
            </div>
        </section>
    );
}