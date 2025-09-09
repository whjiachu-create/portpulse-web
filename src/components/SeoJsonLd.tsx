// src/components/SeoJsonLd.tsx
export default function SeoJsonLd() {
    const org = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "PortPulse",
        url: "https://useportpulse.com",
        logo: "https://useportpulse.com/brand-icon.svg",
    };
    const site = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "PortPulse",
        url: "https://useportpulse.com",
        potentialAction: {
            "@type": "SearchAction",
            target: "https://useportpulse.com/search?q={query}",
            "query-input": "required name=query",
        },
    };
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(site) }} />
        </>
    );
}