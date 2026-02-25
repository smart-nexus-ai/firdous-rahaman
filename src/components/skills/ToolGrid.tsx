'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '@/lib/animations';
import { tools } from '@/data/skills';

export default function ToolGrid() {
    return (
        <motion.div
            className="grid grid-cols-4 md:grid-cols-8 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
        >
            {tools.map((tool) => (
                <motion.div
                    key={tool.name}
                    className="bg-dark-900/50 backdrop-blur-sm border border-dark-800 p-4 flex flex-col items-center gap-2 rounded-xl cursor-default hover:border-primary-500/50 transition-all duration-300"
                    variants={fadeUp}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center">
                        <span className="text-xs font-mono text-primary-500 font-bold">
                            {tool.name.substring(0, 2).toUpperCase()}
                        </span>
                    </div>
                    <span className="text-xs font-mono text-gray-400 text-center">
                        {tool.name}
                    </span>
                </motion.div>
            ))}
        </motion.div>
    );
}