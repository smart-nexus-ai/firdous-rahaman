'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { fadeUp } from '@/lib/animations';
import type { Certification } from '@/types/experience';

interface CertificationCardProps {
    cert: Certification;
    index: number;
}

export default function CertificationCard({
    cert,
    index,
}: CertificationCardProps) {
    return (
        <motion.div
            className="bg-dark-900/50 backdrop-blur-sm border border-dark-800 rounded-xl p-5 hover:border-primary-500/30 transition-all duration-300 group"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1 }}
        >
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-primary-500" />
                </div>
                <div className="flex-grow">
                    <h4 className="text-sm font-mono font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                        {cert.name}
                    </h4>
                    <p className="text-xs font-mono text-gray-500 mt-1">
                        {cert.issuer} • {cert.date}
                    </p>
                </div>
                {cert.url && (
                    <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary-400 transition-colors duration-300 flex-shrink-0"
                    >
                        <ExternalLink className="w-4 h-4" />
                    </a>
                )}
            </div>
        </motion.div>
    );
}