"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { Button } from '@/components/ui/Button';
import { Mail } from 'lucide-react';

export const CTASection = () => {
    return (
        <section className="py-20 px-4 mb-10 overflow-hidden relative">
            <div className="max-w-3xl mx-auto text-center relative z-10 w-full">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden"
                >
                    {/* Subtle gradient glow in the card */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

                    <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-6">
                        Let&apos;s Build Something Together
                    </h2>

                    <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
                        Open for collaborations in IoT, embedded systems, and machine learning projects.
                        Whether you have a specific idea or just want to chat tech, I&apos;m always open to connecting.
                    </p>

                    <Button href="/contact" variant="primary" size="lg" icon={Mail} className="shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                        Get In Touch
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};