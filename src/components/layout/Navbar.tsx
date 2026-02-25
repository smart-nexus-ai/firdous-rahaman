"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import { siteConfig } from '@/data/siteConfig';
import { MobileMenu } from './MobileMenu';
import { cn } from '@/lib/utils';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 w-full z-50 transition-all duration-300 h-16",
                    isScrolled ? "bg-dark-950/80 backdrop-blur-md border-b border-dark-800" : "bg-transparent"
                )}
            >
                <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                    <Link href="/" className="font-mono font-bold text-xl text-white tracking-tight">
                        {siteConfig.name.split(' ')[0]}<span className="text-primary-500">.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-mono transition-colors duration-200",
                                        isActive ? "text-primary-500" : "text-gray-400 hover:text-white"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-gray-300 hover:text-white transition"
                        onClick={() => setMobileMenuOpen(true)}
                        aria-label="Open Menu"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </header>

            <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        </>
    );
};
