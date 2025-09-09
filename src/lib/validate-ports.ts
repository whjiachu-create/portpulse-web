// /src/lib/validate-ports.ts
import { PORTS100 } from "@/data/ports100";

if (process.env.NODE_ENV === "development") {
    const dup = new Set<string>();
    for (const p of PORTS100) {
        if (!/^[A-Z0-9]{5}$/.test(p.code)) throw new Error(`Bad UN/LOCODE: ${p.code}`);
        if (dup.has(p.code)) throw new Error(`Duplicate code: ${p.code}`);
        dup.add(p.code);
    }
}