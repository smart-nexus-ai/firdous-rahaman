'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Mail, LucideIcon } from 'lucide-react';
import { staggerContainer, fadeUp } from '@/lib/animations';
import { socialLinks } from '@/data/contact';

const iconMap: Record<string, LucideIcon> = {
    Github: Github,
    Linkedin: Linkedin,
    Twitter: Twitter,
    Instagram: Instagram,
    Mail: Mail,
};

export default function SocialLinks() {
    return (
        <motion.div
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {socialLinks.map((link) => {
                const IconComponent = iconMap[link.icon] || Mail;

                return (
                    <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-dark-900/50 border border-dark-800 rounded-xl hover:border-primary-500/50 transition-all duration-300 group"
                        variants={fadeUp}
                        whileHover={{ x: 4 }}
                    >
                        <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors duration-300">
                            <IconComponent className="w-5 h-5 text-primary-500" />
                        </div>
                        <div>
                            <p className="text-sm font-mono font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
                                {link.name}
                            </p>
                            <p className="text-xs font-mono text-gray-500">
                                {link.username}
                            </p>
                        </div>
                    </motion.a>
                );
            })}
        </motion.div>
    );
}