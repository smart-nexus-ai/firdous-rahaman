export interface Project {
    slug: string;
    title: string;
    tagline: string;
    description: string;
    category: ('iot' | 'ml' | 'mobile' | 'web' | 'embedded')[];
    status: 'completed' | 'in-progress' | 'concept';
    duration: string;
    heroImage: string;
    gallery: string[];
    techStack: { name: string; icon: string; category: string }[];
    features: string[];
    architectureDescription: string;
    links: { github?: string; live?: string; blog?: string };
    highlights: { label: string; value: string }[];
    order: number;
}
