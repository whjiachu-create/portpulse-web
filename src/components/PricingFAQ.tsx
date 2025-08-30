"use client";
import { useState } from "react";

type QA = { q: string; a: string };

const faqs = [
  { q: "支持什么计费方式？", a: "按订阅计费，月付/年付，年付相当于付10个月。" },
  { q: "超额如何处理？", a: "先运行不停机，次月按阶梯补计。" },
  { q: "退款规则？", a: "试用期内随时取消；正式订阅按剩余天数折算。" },
] as const satisfies ReadonlyArray<QA>;

export default function PricingFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mt-10">
      <h2 className="mb-4 text-xl font-semibold">常见问题</h2>
      <div className="divide-y rounded-xl border bg-white">
        {faqs.map((item, i) => (
          <details
            key={i}
            open={open === i}
            onClick={(e) => {
              e.preventDefault();
              setOpen(open === i ? null : i);
            }}
            className="group p-4"
          >
            <summary className="cursor-pointer list-none select-none font-medium">
              {item.q}
            </summary>
            <div className="mt-2 text-sm text-slate-600">{item.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
