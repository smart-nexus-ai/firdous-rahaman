'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Instagram, Mail, Heart, Terminal } from 'lucide-react';

const socialLinks = [
    { icon: Github, href: 'https://github.com/firdouscgec', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/firdous-rahaman-11416b254', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/Firdous_TFG', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/Firdous_TFG', label: 'Instagram' },
    { icon: Mail, href: 'mailto:firdousrahaman.tfg@gmail.com', label: 'Email' },
];

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Experience', href: '/experience' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-dark-800 bg-dark-950/80 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                    {/* Brand */}
                    <div>
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-white font-mono font-bold text-lg mb-4"
                        >
                            <Terminal className="w-5 h-5 text-primary-500" />
                            <span>
                                firdous<span className="text-primary-500">.dev</span>
                            </span>
                        </Link>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            IoT Developer & ML Engineer building smart connected systems.
                            Turning sensor data into intelligent solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-mono font-bold text-white mb-4 uppercase tracking-wider">
                            Navigation
                        </h4>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-500 hover:text-primary-400 transition-colors duration-300 font-mono"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-sm font-mono font-bold text-white mb-4 uppercase tracking-wider">
                            Connect
                        </h4>
                        <div className="flex items-center gap-3 mb-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-lg bg-dark-900 border border-dark-800 flex items-center justify-center hover:border-primary-500/50 hover:text-primary-400 text-gray-500 transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                        <p className="text-xs text-gray-600 font-mono">
                            Open for freelance & collaborations
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-dark-800 to-transparent mb-6" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-600 font-mono">
                        © {currentYear} Firdous Rahaman. All rights reserved.
                    </p>
                    <p className="text-xs text-gray-600 font-mono flex items-center gap-1">
                        Built with <Heart className="w-3 h-3 text-red-500" /> using Next.js
                        & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}