'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { fadeUp } from '@/lib/animations';

interface TimelineItemProps {
    type: 'work' | 'education';
    title: string;
    subtitle: string;
    location: string;
    dateRange: string;
    description: string;
    tags?: string[];
    highlights?: string[];
    badge?: string;
    index: number;
}

export default function TimelineItem({
    type,
    title,
    subtitle,
    location,
    dateRange,
    description,
    tags,
    highlights,
    badge,
    index,
}: TimelineItemProps) {
    const Icon = type === 'work' ? Briefcase : GraduationCap;

    return (
        <motion.div
            className="relative pl-10 pb-10 last:pb-0"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1 }}
        >
            {/* Vertical line */}
            <div className="absolute left-[15px] top-8 bottom-0 w-px bg-dark-800 last:hidden" />

            {/* Circle icon */}
            <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-dark-900 border-2 border-primary-500/50 flex items-center justify-center z-10">
                <Icon className="w-3.5 h-3.5 text-primary-500" />
            </div>

            {/* Card */}
            <div className="bg-dark-900/50 backdrop-blur-sm border border-dark-800 rounded-xl p-6 hover:border-primary-500/30 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                        <h3 className="text-lg font-mono font-bold text-white">
                            {title}
                        </h3>
                        <p className="text-sm font-mono text-primary-400">{subtitle}</p>
                    </div>
                    {badge && (
                        <span className="text-xs font-mono px-2 py-1 rounded-md bg-primary-500/10 text-primary-400 border border-primary-500/20">
                            {badge}
                        </span>
                    )}
                </div>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 font-mono mb-4">
                    <span>{location}</span>
                    <span>•</span>
                    <span>{dateRange}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {description}
                </p>

                {/* Highlights */}
                {highlights && highlights.length > 0 && (
                    <ul className="space-y-1.5 mb-4">
                        {highlights.map((item, i) => (
                            <li
                                key={i}
                                className="text-sm text-gray-400 flex items-start gap-2"
                            >
                                <span className="text-primary-500 mt-1.5 w-1 h-1 rounded-full bg-primary-500 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                )}

                {/* Tags */}
                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs font-mono px-2 py-1 rounded-md bg-dark-800 text-gray-400 border border-dark-700"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
}