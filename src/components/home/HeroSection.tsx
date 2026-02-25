"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { Button } from '@/components/ui/Button';
import { CircuitPattern } from '@/components/ui/CircuitPattern';
import { siteConfig } from '@/data/siteConfig';

export const HeroSection = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
            <CircuitPattern />

            <div className="max-w-4xl mx-auto text-center px-4 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-900 border border-dark-800 mb-8">
                        <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></span>
                        <span className="text-xs font-mono text-gray-400">Available for IoT Projects</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold text-white mb-6 leading-tight">
                        Hi, I&apos;m <span className="text-primary-500">{siteConfig.name}</span>
                        <br />
                        <AnimatedText
                            text="> IoT Engineer & Embedded Systems Developer"
                            delay={500}
                            className="text-2xl md:text-4xl lg:text-5xl mt-4 block text-gray-300"
                        />
                    </h1>

                    {/* Paragraph */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.5, duration: 0.8 }}
                        className="text-lg text-gray-400 max-w-2xl mx-auto mt-6"
                    >
                        I build sensor networks, ML pipelines, and real-time monitoring systems that bridge hardware and software.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 4, duration: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mt-10 w-full sm:w-auto"
                    >
                        <Button href="/projects" variant="primary" size="lg" icon={ArrowRight}>
                            View Projects
                        </Button>
                        <Button href="/resume.pdf" variant="outline" size="lg" icon={Download}>
                            Download Resume
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
            >
                <span className="text-xs font-mono tracking-widest uppercase">Scroll Info</span>
                <ChevronDown className="w-5 h-5 animate-bounce" />
            </motion.div>
        </section>
    );
};
