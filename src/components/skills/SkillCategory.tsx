'use client';

import { motion } from 'framer-motion';
import {
    Cpu,
    Database,
    Smartphone,
    BrainCircuit,
    Wrench,
    LucideIcon,
} from 'lucide-react';
import { fadeUp } from '@/lib/animations';
import SkillBar from './SkillBar';
import type { SkillCategory as SkillCategoryType } from '@/types/skill';

const iconMap: Record<string, LucideIcon> = {
    Cpu: Cpu,
    Database: Database,
    Smartphone: Smartphone,
    BrainCircuit: BrainCircuit,
    Wrench: Wrench,
};

interface SkillCategoryProps {
    category: SkillCategoryType;
}

export default function SkillCategory({ category }: SkillCategoryProps) {
    const IconComponent = iconMap[category.icon] || Cpu;

    return (
        <motion.div
            className="bg-dark-900/50 backdrop-blur-sm border border-dark-800 p-6 rounded-xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
        >
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-primary-500" />
                </div>
                <h3 className="text-xl font-mono font-bold text-white">
                    {category.title}
                </h3>
            </div>
            <div className="mt-6 space-y-4">
                {category.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
            </div>
        </motion.div>
    );
}