"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { timelineItems } from '@/data/timeline';
import { cn } from '@/lib/utils';
import { slideLeft, slideRight } from '@/lib/animations';

export const Timeline = () => {
    return (
        <div className="relative py-10">
            {/* Central Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-dark-800 -translate-x-1/2 rounded-full hidden md:block" />
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-dark-800 -translate-x-1/2 rounded-full md:hidden" />

            <div className="space-y-12">
                {timelineItems.map((item, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <div key={index} className="relative flex items-center justify-between md:justify-normal group w-full">

                            {/* Dot relative to line */}
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary-500 border-2 border-dark-950 -translate-x-1/2 z-10 
                            group-hover:scale-125 group-hover:bg-accent-cyan transition-transform duration-300"
                            />

                            <div
                                className={cn(
                                    "w-full md:w-5/12 ml-10 md:ml-0",
                                    isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                                )}
                            >
                                <motion.div
                                    variants={isLeft ? slideRight : slideLeft}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    className={cn(
                                        "glass p-6 rounded-xl border border-dark-800/50 hover:bg-dark-800/80 transition-colors relative",
                                        isLeft ? "md:items-end flex flex-col items-start" : "flex flex-col items-start"
                                    )}
                                >
                                    <span className="inline-block px-2 py-1 bg-primary-500/10 text-primary-500 text-xs font-mono rounded mb-3">
                                        {item.year}
                                    </span>
                                    <h3 className="text-xl font-mono font-bold text-white leading-tight">
                                        {item.title}
                                    </h3>
                                    <div className="text-primary-500 text-sm font-mono mt-1 mb-3 font-semibold tracking-wide">
                                        {item.company}
                                    </div>
                                    <p className={cn(
                                        "text-sm text-gray-400 leading-relaxed",
                                        isLeft ? "md:text-right text-left" : "text-left"
                                    )}>
                                        {item.description}
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
