export default function SiteFooter() {
  return (
    <footer className="border-t py-8 text-sm text-slate-600">
      <div className="container mx-auto px-4">
        © {new Date().getFullYear()} PortPulse · <a className="underline" href="/docs">Docs</a> · <a className="underline" href="/status">Status</a>
      </div>
    </footer>
  );
}
