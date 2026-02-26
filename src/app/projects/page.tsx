import { Metadata } from 'next';
import { siteConfig } from '@/data/siteConfig';
import ProjectsContent from './ProjectsContent';

export const metadata: Metadata = {
    title: 'Projects',
    description:
        'Explore my IoT, embedded systems, and machine learning projects',
    openGraph: {
        title: 'Projects | Firdous Rahaman',
        description:
            'Explore my IoT, embedded systems, and machine learning projects',
        url: `${siteConfig.url}/projects`,
    },
    alternates: {
        canonical: `${siteConfig.url}/projects`,
    },
};

export default function ProjectsPage() {
    return <ProjectsContent />;
}