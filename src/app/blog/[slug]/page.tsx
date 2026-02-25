import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import BlogContent from '@/components/blog/BlogContent';
import { blogPosts } from '@/data/blogs';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return { title: 'Post Not Found' };
    }

    return {
        title: post.title,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="py-20 px-4 max-w-3xl mx-auto">
            {/* Back link */}
            <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-primary-400 transition-colors duration-300 mb-8"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
            </Link>

            {/* Header */}
            <header className="mb-10">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs font-mono px-2 py-1 rounded-md bg-primary-500/10 text-primary-400 border border-primary-500/20 flex items-center gap-1"
                        >
                            <Tag className="w-3 h-3" />
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold font-mono text-white leading-tight mb-4">
                    {post.title}
                </h1>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-500 font-mono">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                        })}
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                    </span>
                </div>

                {/* Divider */}
                <div className="mt-6 h-px bg-gradient-to-r from-primary-500/50 via-dark-800 to-transparent" />
            </header>

            {/* Content */}
            <BlogContent content={post.content} />

            {/* Footer divider */}
            <div className="mt-16 h-px bg-gradient-to-r from-transparent via-dark-800 to-transparent" />

            {/* Back link bottom */}
            <div className="mt-8 text-center">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to all articles
                </Link>
            </div>
        </div>
    );
}