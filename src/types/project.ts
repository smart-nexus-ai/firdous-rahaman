export type ProjectCategory = 'iot' | 'ml' | 'mobile' | 'web' | 'embedded';

export type ProjectStatus = 'completed' | 'in-progress' | 'concept';

export interface TechStack {
    name: string;
    icon: string;
    category: string;
}

export interface ProjectHighlight {
    label: string;
    value: string;
}

export interface ProjectLinks {
    github?: string;
    live?: string;
    blog?: string;
}

export interface Project {
    slug: string;
    title: string;
    tagline: string;
    description: string;
    category: ProjectCategory[];
    status: ProjectStatus;
    duration: string;
    heroImage: string;
    gallery: string[];
    techStack: TechStack[];
    features: string[];
    architectureDescription: string;
    links: ProjectLinks;
    highlights: ProjectHighlight[];
    order: number;
}