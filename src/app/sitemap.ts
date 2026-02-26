import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogs';
import { projects } from '@/data/projects';
import { siteConfig } from '@/data/siteConfig';

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages = [
        { route: '', priority: 1, changeFrequency: 'monthly' as const },
        { route: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
        { route: '/projects', priority: 0.9, changeFrequency: 'weekly' as const },
        { route: '/skills', priority: 0.7, changeFrequency: 'monthly' as const },
        { route: '/experience', priority: 0.7, changeFrequency: 'monthly' as const },
        { route: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
        { route: '/contact', priority: 0.6, changeFrequency: 'yearly' as const },
    ].map((page) => ({
        url: `${siteConfig.url}${page.route}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
    }));

    const blogPages = blogPosts.map((post) => ({
        url: `${siteConfig.url}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'yearly' as const,
        priority: 0.6,
    }));

    const projectPages = projects.map((project) => ({
        url: `${siteConfig.url}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticPages, ...blogPages, ...projectPages];
}