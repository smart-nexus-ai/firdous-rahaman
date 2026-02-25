import { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/SectionHeading';
import BlogCard from '@/components/blog/BlogCard';
import { TerminalBlock } from '@/components/ui/TerminalBlock';
import { blogPosts } from '@/data/blogs';

export const metadata: Metadata = {
    title: 'Blog',
    description:
        'Technical articles on IoT, embedded systems, machine learning, and mobile development.',
};

export default function BlogPage() {
    const sortedPosts = [...blogPosts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
        <div className="py-20 px-4 max-w-5xl mx-auto">
            <SectionHeading
                title="Blog"
                subtitle="Technical articles, tutorials, and project deep-dives"
                align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {sortedPosts.map((post, index) => (
                    <BlogCard key={post.slug} post={post} index={index} />
                ))}
            </div>

            <section className="mt-20 max-w-2xl mx-auto">
                <TerminalBlock
                    title="blog.sh"
                    lines={[
                        `blog.count() → ${blogPosts.length} articles`,
                        'blog.topics → IoT, ML, Android, Robotics',
                        'blog.frequency → bi-weekly',
                        'blog.status → writing_next_post...',
                    ]}
                />
            </section>
        </div>
    );
}