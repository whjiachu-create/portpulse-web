export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <a href="/" className="font-semibold">PortPulse</a>
        <nav className="text-sm flex items-center gap-4">
          <a className="hover:underline" href="/product">Product</a>
          <a className="hover:underline" href="/pricing">Pricing</a>
          <a className="hover:underline" href="/docs/api">Docs</a>
          <a className="rounded-full bg-[#0B2740] text-white px-3 py-1.5" href="/contact">Start free</a>
        </nav>
      </div>
    </header>
  );
}
