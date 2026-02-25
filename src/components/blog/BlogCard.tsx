'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { fadeUp } from '@/lib/animations';
import type { BlogPost } from '@/types/blog';

interface BlogCardProps {
    post: BlogPost;
    index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
    return (
        <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1 }}
        >
            <Link href={`/blog/${post.slug}`}>
                <div className="group bg-dark-900/50 backdrop-blur-sm border border-dark-800 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300 h-full flex flex-col">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="text-xs font-mono px-2 py-1 rounded-md bg-primary-500/10 text-primary-400 border border-primary-500/20"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold font-mono text-white group-hover:text-primary-400 transition-colors duration-300 mb-3">
                        {post.title}
                        <ArrowUpRight className="inline-block w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                        {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-gray-500 font-mono">
                        <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                            })}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                        </span>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
}