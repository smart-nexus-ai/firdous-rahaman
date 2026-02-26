"use client";

import React from 'react';
import Link from 'next/link';
import { GlowCard } from '@/components/ui/GlowCard';
import { Project } from '@/types/project';
import { ArrowRight, Calendar } from 'lucide-react';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {

    // Get initial as placeholder
    const initial = project.title.charAt(0).toUpperCase();

    return (
        <Link href={`/projects/${project.slug}`} className="group block h-full">
            <GlowCard className="flex flex-col h-full bg-dark-900/50">
                <div className="aspect-video relative rounded-t-xl overflow-hidden bg-gradient-to-br from-dark-800 to-dark-900 border-b border-dark-800 flex items-center justify-center">
                    {project.heroImage ? (
                        <img
                            src={project.heroImage}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    ) : (
                        <span className="text-6xl font-mono text-dark-700 font-bold opacity-50 group-hover:scale-110 transition-transform duration-500">
                            {initial}
                        </span>
                    )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-mono font-bold text-white line-clamp-1 group-hover:text-primary-500 transition-colors">
                            {project.title}
                        </h3>
                        <span className="shrink-0 flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-dark-800 text-gray-400 border border-dark-700">
                            <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'completed' ? 'bg-accent-green' : project.status === 'in-progress' ? 'bg-accent-amber animate-pulse' : 'bg-gray-500'}`}></span>
                            {project.status.replace('-', ' ')}
                        </span>
                    </div>

                    <p className="text-sm text-gray-400 mt-2 line-clamp-2 leading-relaxed flex-1">
                        {project.tagline}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.techStack.slice(0, 4).map((tech) => (
                            <span key={tech.name} className="px-2 py-1 bg-dark-800 text-gray-300 rounded text-xs font-mono">
                                {tech.name}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center mt-6 pt-4 border-t border-dark-800/50">
                        <span className="text-xs text-gray-500 flex items-center gap-1 font-mono">
                            <Calendar className="w-3.5 h-3.5" />
                            {project.duration}
                        </span>
                        <span className="text-primary-500 text-sm font-mono flex items-center gap-1 group-hover:underline">
                            View Details
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </div>
                </div>
            </GlowCard>
        </Link>
    );
};
