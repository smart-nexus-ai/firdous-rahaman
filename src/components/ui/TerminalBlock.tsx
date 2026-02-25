"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TerminalBlockProps {
    lines: string[];
    title?: string;
    className?: string;
}

export const TerminalBlock: React.FC<TerminalBlockProps> = ({ lines, title = "terminal", className }) => {
    return (
        <div className={cn("rounded-xl overflow-hidden glass shadow-2xl border border-dark-800", className)}>
            <div className="flex items-center gap-2 px-4 py-3 bg-dark-900 border-b border-dark-800">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center pr-8">
                    <span className="text-xs text-gray-500 font-mono">{title}</span>
                </div>
            </div>

            <div className="p-4 bg-dark-950 font-mono text-sm leading-relaxed overflow-x-auto min-h-[100px]">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.15 } },
                        hidden: {}
                    }}
                >
                    {lines.map((line, i) => (
                        <motion.div
                            key={i}
                            className="flex gap-3 text-gray-300 whitespace-pre"
                            variants={{
                                hidden: { opacity: 0, x: -10 },
                                visible: { opacity: 1, x: 0 }
                            }}
                        >
                            <span className="text-accent-green shrink-0">❯</span>
                            <span>{line}</span>
                        </motion.div>
                    ))}
                    <motion.div
                        className="flex gap-3 mt-1"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 }
                        }}
                    >
                        <span className="text-accent-green shrink-0">❯</span>
                        <span className="animate-pulse text-gray-400">▋</span>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};
