// src/components/Section.tsx
import type { ReactNode } from "react";

export default function Section({
  title,
  subtitle,
  children,
  className = "",
}: {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`bg-white ${className}`}>
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-10">
        {title ? <h2 className="text-2xl font-semibold">{title}</h2> : null}
        {subtitle ? <p className="mt-1 text-slate-600">{subtitle}</p> : null}
        <div className={title || subtitle ? "mt-6" : ""}>{children}</div>
      </div>
    </section>
  );
}