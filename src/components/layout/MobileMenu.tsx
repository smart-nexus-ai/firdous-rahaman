"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    const pathname = usePathname();

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-dark-950/95 backdrop-blur-lg flex flex-col"
                >
                    <div className="flex justify-end p-4 h-16 items-center">
                        <button
                            onClick={onClose}
                            className="text-gray-300 hover:text-white transition p-2"
                            aria-label="Close Menu"
                        >
                            <X className="w-8 h-8" />
                        </button>
                    </div>

                    <nav className="flex-1 flex flex-col items-center justify-center gap-8 pb-16">
                        {navLinks.map((link, i) => {
                            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

                            return (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={onClose}
                                        className={cn(
                                            "text-3xl font-mono tracking-wider transition-colors duration-200",
                                            isActive ? "text-primary-500" : "text-gray-300 hover:text-white"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
