"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
            {/* 背景图层 */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop"
                    alt="Ports background"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white" />
            </div>

            <div className="mx-auto max-w-6xl px-5 py-20">
                <div className="max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                        港口运营应该<strong className="ml-2 text-gray-900">一目了然</strong>
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        PortPulse 提供可复现的港口趋势、拥堵、周转与告警数据，
                        5 分钟跑通、30 分钟集成，助力供应链决策。
                    </p>

                    <div className="mt-8 flex gap-3">
                        <a
                            href="https://docs.useportpulse.com/EXAMPLES.md"
                            className="rounded-md bg-black px-4 py-2 text-white"
                        >
                            Quickstart
                        </a>
                        <Link
                            href="/contact"
                            className="rounded-md border px-4 py-2 text-gray-900"
                        >
                            联系销售 / 预约演示
                        </Link>
                    </div>

                    {/* 亮点要点 */}
                    <ul className="mt-6 grid max-w-2xl grid-cols-2 gap-3 text-sm text-gray-600 md:grid-cols-3">
                        <li>• p95 延迟 ≤ 300ms</li>
                        <li>• Freshness ≤ 2h</li>
                        <li>• ETag / 304</li>
                        <li>• JSON / CSV</li>
                        <li>• API 优先</li>
                        <li>• 可商用 SLA</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}