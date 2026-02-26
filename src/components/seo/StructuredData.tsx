import { siteConfig } from "@/data/siteConfig";

export function StructuredData() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.name,
        jobTitle: siteConfig.role,
        description: siteConfig.description,
        url: siteConfig.url,
        image: `${siteConfig.url}/opengraph-image`,
        sameAs: [
            siteConfig.links.github,
            siteConfig.links.linkedin,
            siteConfig.links.twitter,
        ],
        address: {
            "@type": "PostalAddress",
            addressLocality: "Cooch Behar",
            addressRegion: "West Bengal",
            addressCountry: "IN",
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
        "@id": `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        author: {
            "@type": "Person",
            "@id": `${siteConfig.url}/#person`,
        },
        publisher: {
            "@type": "Person",
            "@id": `${siteConfig.url}/#person`,
        },
    };

    const profilePageSchema = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": `${siteConfig.url}/#profilepage`,
        name: siteConfig.title,
        url: siteConfig.url,
        description: siteConfig.description,
        mainEntity: {
            "@type": "Person",
            "@id": `${siteConfig.url}/#person`,
        },
        dateCreated: "2025-01-01",
        dateModified: new Date().toISOString().split('T')[0],
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: siteConfig.url,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Projects",
                item: `${siteConfig.url}/projects`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: "About",
                item: `${siteConfig.url}/about`,
            },
            {
                "@type": "ListItem",
                position: 4,
                name: "Contact",
                item: `${siteConfig.url}/contact`,
            },
        ],
    };

    const schemas = [personSchema, websiteSchema, profilePageSchema, breadcrumbSchema];

    return (
        <>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schema),
                    }}
                />
            ))}
        </>
    );
}
