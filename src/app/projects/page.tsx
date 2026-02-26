"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectFilter } from '@/components/projects/ProjectFilter';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';
import { ProjectCategory } from '@/types/project';

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.category.includes(activeFilter as ProjectCategory));

    return (
        <div className="py-20 px-4 max-w-7xl mx-auto min-h-screen">
            <SectionHeading
                title="My Projects"
                subtitle="A collection of IoT, ML, and embedded systems work"
            />

            <div className="mt-12 mb-8">
                <ProjectFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            key={project.slug}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="h-full"
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-gray-500 font-mono">No projects found for this category.</p>
                </div>
            )}
        </div>
    );
}