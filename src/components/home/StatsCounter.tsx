"use client";

import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
    { value: 7, suffix: "+", label: "Projects Built" },
    { value: 13, label: "Sensors Integrated" },
    { value: 5, label: "ML Models" },
    { value: 3, label: "Platforms" },
    { value: 1000, suffix: "+", label: "Lines of Code" },
];

const Counter = ({ value, duration = 2 }: { value: number, duration?: number }) => {
    const [count, setCount] = useState(0);
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            let startTimestamp: number | null = null;
            const step = (timestamp: number) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);

                // Easing function (easeOutExpo)
                const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

                setCount(Math.floor(easeProgress * value));

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
    }, [isInView, value, duration]);

    return <span ref={ref}>{count}</span>;
};

export const StatsCounter = () => {
    return (
        <section className="py-20 px-4 max-w-7xl mx-auto border-t border-dark-800">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className={`glass p-6 rounded-xl flex flex-col items-center justify-center text-center border-dark-800 ${i === stats.length - 1 ? 'col-span-2 md:col-span-1' : ''
                            }`}
                    >
                        <div className="text-3xl md:text-4xl font-mono font-bold text-primary-500 mb-2">
                            <Counter value={stat.value} />
                            {stat.suffix}
                        </div>
                        <div className="text-sm text-gray-400 font-sans leading-tight">
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
