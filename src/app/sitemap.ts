import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogs';
import { projects } from '@/data/projects';

const BASE_URL = 'https://your-portfolio-url.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages = [
        '',
        '/about',
        '/projects',
        '/skills',
        '/experience',
        '/blog',
        '/contact',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const blogPages = blogPosts.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'yearly' as const,
        priority: 0.6,
    }));

    const projectPages = projects.map((project) => ({
        url: `${BASE_URL}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 0.7,
    }));

    return [...staticPages, ...blogPages, ...projectPages];
}