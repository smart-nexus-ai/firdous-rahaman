"use client";

import React from 'react';

const techStack = [
    "ESP32", "Firebase", "Kotlin", "TensorFlow",
    "Python", "Arduino", "Supabase", "React", "Next.js"
];

export const TechMarquee = () => {
    return (
        <section className="py-8 border-y border-dark-800 bg-dark-950 overflow-hidden group">
            <div className="relative flex max-w-[100vw] overflow-hidden py-2">
                <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite] group-hover:[animation-play-state:paused]">
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex items-center gap-8 mx-4">
                            {techStack.map((tech, index) => (
                                <div key={`${i}-${index}`} className="flex items-center gap-8 text-gray-500 font-mono text-sm tracking-widest uppercase">
                                    <span className="hover:text-primary-500 transition-colors cursor-default">{tech}</span>
                                    <span className="text-dark-800">•</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
