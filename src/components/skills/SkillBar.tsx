'use client';

import { motion } from 'framer-motion';

interface SkillBarProps {
    name: string;
    level: number;
}

export default function SkillBar({ name, level }: SkillBarProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between">
                <span className="text-sm font-mono text-gray-300">{name}</span>
                <span className="text-sm font-mono text-gray-500">{level}%</span>
            </div>
            <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
                <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary-500 to-cyan-400"
                    initial={{ width: '0%' }}
                    whileInView={{ width: `${level}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    viewport={{ once: true }}
                />
            </div>
        </div>
    );
}