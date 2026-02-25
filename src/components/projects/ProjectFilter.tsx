"use client";

import React from 'react';
import { motion } from 'framer-motion';

const filters = ['All', 'IoT', 'ML', 'Mobile', 'Web', 'Embedded'];

interface ProjectFilterProps {
    activeFilter: string;
    onFilterChange: (filter: string) => void;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({ activeFilter, onFilterChange }) => {
    return (
        <div className="flex flex-wrap gap-2">
            {filters.map((filter) => {
                const isActive = activeFilter === filter.toLowerCase();

                return (
                    <button
                        key={filter}
                        onClick={() => onFilterChange(filter.toLowerCase())}
                        className={`relative px-4 py-2 rounded-full text-sm font-mono transition-all cursor-pointer ${isActive ? 'text-white' : 'bg-dark-800 text-gray-400 hover:text-white'
                            }`}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="activeFilter"
                                className="absolute inset-0 bg-primary-500 rounded-full w-full h-full -z-10"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                        <span className="relative z-10">{filter}</span>
                    </button>
                );
            })}
        </div>
    );
};
