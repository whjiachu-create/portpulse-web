export default function WhyPortPulse(){
  const items = [
    { h:"API-first, low-friction", p:"Frozen /v1 contract, unified schema, OpenAPI & Postman. 5-minute start." },
    { h:"Reproducible & auditable", p:"JSON/CSV parity, strong ETag/304, 30-day replay. Charts reproducible from API." },
    { h:"Observable SLOs", p:"Freshness p95 ≤ 2h, API p95 ≤ 300ms. Consistent error body with x-request-id." },
  ];
  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-xl font-semibold">Why PortPulse</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {items.map(i=>(
          <div key={i.h} className="card p-5">
            <div className="font-medium">{i.h}</div>
            <p className="mt-2 text-sm text-black/70">{i.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
