import { siteConfig } from "@/data/siteConfig";

export function StructuredData() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: siteConfig.name,
        jobTitle: siteConfig.role,
        description: siteConfig.description,
        url: siteConfig.url,
        image: `${siteConfig.url}${siteConfig.ogImage}`,
        sameAs: [
            siteConfig.links.github,
            siteConfig.links.linkedin,
            siteConfig.links.twitter,
        ],
        address: {
            "@type": "PostalAddress",
            addressLocality: "Cooch Behar",
            addressRegion: "West Bengal",
            addressCountry: "India",
        },
        alumniOf: {
            "@type": "EducationalOrganization",
            name: "Cooch Behar Government Engineering College",
        },
        knowsAbout: siteConfig.keywords,
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.title,
        url: siteConfig.url,
        description: siteConfig.description,
        author: {
            "@type": "Person",
            name: siteConfig.name,
        },
        potentialAction: {
            "@type": "SearchAction",
            target: `${siteConfig.url}/projects?q={search_term_string}`,
            "query-input": "required name=search_term_string",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(personSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema),
                }}
            />
        </>
    );
}
