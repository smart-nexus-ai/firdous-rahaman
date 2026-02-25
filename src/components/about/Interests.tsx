"use client";

import React from 'react';
import { motion } from 'framer-motion';

const interests = [
    "IoT", "Edge Computing", "ML on MCU", "Robotics",
    "System Architecture", "Real-time Systems",
    "Sensor Networks", "Control Systems", "Open Source"
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 260,
            damping: 20
        }
    }
};

export const Interests = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap gap-3 justify-center md:justify-start"
        >
            {interests.map((interest) => (
                <motion.span
                    key={interest}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-lg bg-dark-800 text-gray-300 text-sm font-mono border border-dark-800 hover:border-primary-500/50 hover:text-primary-500 transition-colors cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(14,165,233,0.15)]"
                >
                    {interest}
                </motion.span>
            ))}
        </motion.div>
    );
};
