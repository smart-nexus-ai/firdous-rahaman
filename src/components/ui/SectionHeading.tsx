"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
    className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, align = 'left', className }) => {
    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={cn("flex flex-col gap-2 relative z-10", align === 'center' ? 'items-center text-center' : 'items-start text-left', className)}
        >
            <h2 className="text-3xl md:text-4xl font-mono font-bold text-white">
                {title}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-accent-cyan rounded-full mt-1"></div>
            {subtitle && (
                <p className="text-gray-400 mt-2 max-w-2xl text-lg">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
};
