"use client";

import React from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlowCard } from '@/components/ui/GlowCard';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data/projects';
import { ArrowRight } from 'lucide-react';


export const FeaturedProjects = () => {
    const featured = projects.filter(p => [1, 2, 3].includes(p.order)).sort((a, b) => a.order - b.order);

    return (
        <section className="py-20 px-4 max-w-7xl mx-auto relative z-10">
            <SectionHeading
                title="Featured Projects"
                subtitle="Recent work in IoT, ML & embedded systems"
                className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featured.map((project) => (
                    <GlowCard key={project.slug} className="flex flex-col h-full bg-dark-900/50">
                        {/* Image Placeholder */}
                        <div className="aspect-video relative rounded-t-xl overflow-hidden bg-gradient-to-br from-dark-800 to-dark-900 border-b border-dark-800">
                            <div className="absolute inset-0 flex items-center justify-center opacity-30">
                                {/* This would be an Image component in prod, simplified for now: */}
                                <span className="font-mono text-gray-500 uppercase tracking-widest text-xs">Project Preview</span>
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-mono font-bold text-white line-clamp-1">{project.title}</h3>
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-dark-800 text-gray-400 border border-dark-700">
                                    {project.status.replace('-', ' ')}
                                </span>
                            </div>

                            <p className="text-sm text-gray-400 mt-2 line-clamp-2 leading-relaxed flex-1">
                                {project.tagline}
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.techStack.slice(0, 3).map((tech) => (
                                    <span key={tech.name} className="px-2 py-1 bg-dark-800 text-gray-300 rounded text-xs font-mono">
                                        {tech.name}
                                    </span>
                                ))}
                                {project.techStack.length > 3 && (
                                    <span className="px-2 py-1 bg-dark-800/50 text-gray-500 rounded text-xs font-mono">
                                        +{project.techStack.length - 3}
                                    </span>
                                )}
                            </div>

                            <Link
                                href={`/projects/${project.slug}`}
                                className="inline-flex items-center gap-2 text-primary-500 text-sm font-mono mt-6 hover:underline group w-fit"
                            >
                                View Details
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </GlowCard>
                ))}
            </div>

            <div className="mt-16 text-center">
                <Button href="/projects" variant="outline" icon={ArrowRight}>
                    View All Projects
                </Button>
            </div>
        </section>
    );
};
