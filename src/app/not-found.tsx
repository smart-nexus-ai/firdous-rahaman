'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { fadeUp } from '@/lib/animations';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <motion.div
                className="text-center max-w-lg"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
            >
                {/* Glitch 404 */}
                <div className="relative mb-8">
                    <h1 className="text-[120px] md:text-[180px] font-mono font-bold text-dark-800 leading-none select-none">
                        404
                    </h1>
                    <motion.h1
                        className="absolute inset-0 text-[120px] md:text-[180px] font-mono font-bold text-primary-500/20 leading-none select-none"
                        animate={{
                            x: [0, -3, 3, -1, 1, 0],
                            y: [0, 1, -1, 2, -2, 0],
                        }}
                        transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            repeatDelay: 3,
                        }}
                    >
                        404
                    </motion.h1>
                </div>

                {/* Terminal style message */}
                <div className="bg-dark-900/80 backdrop-blur-sm border border-dark-800 rounded-xl p-6 mb-8 text-left">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="text-xs font-mono text-gray-500 ml-2">
                            error.sh
                        </span>
                    </div>
                    <div className="font-mono text-sm space-y-2">
                        <p className="text-gray-500">
                            <span className="text-primary-500">$</span> find /page
                        </p>
                        <p className="text-red-400">
                            → Error: Page not found in filesystem
                        </p>
                        <p className="text-gray-500">
                            <span className="text-primary-500">$</span> suggest
                            --alternative
                        </p>
                        <p className="text-green-400">
                            → Try navigating to homepage or use the links below
                        </p>
                    </div>
                </div>

                {/* Action buttons */}
                <div className="flex items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-mono text-sm font-semibold rounded-lg transition-all duration-300"
                    >
                        <Home className="w-4 h-4" />
                        Go Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center gap-2 px-6 py-3 border border-dark-700 hover:border-primary-500/50 text-gray-400 hover:text-white font-mono text-sm rounded-lg transition-all duration-300"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Go Back
                    </button>
                </div>
            </motion.div>
        </div>
    );
}