export interface Experience {
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    type: 'work' | 'internship' | 'freelance';
    description: string;
    highlights: string[];
    technologies: string[];
}

export interface Education {
    id: string;
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    grade?: string;
    description: string;
    coursework: string[];
}

export interface Certification {
    id: string;
    name: string;
    issuer: string;
    date: string;
    url?: string;
}