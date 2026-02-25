'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/10 flex items-center justify-center">
                    <AlertTriangle className="w-8 h-8 text-red-500" />
                </div>

                {/* Terminal error */}
                <div className="bg-dark-900/80 backdrop-blur-sm border border-dark-800 rounded-xl p-6 mb-8 text-left">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="text-xs font-mono text-gray-500 ml-2">
                            crash.log
                        </span>
                    </div>
                    <div className="font-mono text-sm space-y-2">
                        <p className="text-red-400">
                            → RuntimeError: Something went wrong
                        </p>
                        <p className="text-gray-500">
                            <span className="text-primary-500">$</span> recover
                            --auto
                        </p>
                        <p className="text-yellow-400">
                            → Attempting recovery...
                        </p>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-center gap-4">
                    <button
                        onClick={reset}
                        className="flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-mono text-sm font-semibold rounded-lg transition-all duration-300"
                    >
                        <RefreshCw className="w-4 h-4" />
                        Try Again
                    </button>
                    <Link
                        href="/"
                        className="flex items-center gap-2 px-6 py-3 border border-dark-700 hover:border-primary-500/50 text-gray-400 hover:text-white font-mono text-sm rounded-lg transition-all duration-300"
                    >
                        <Home className="w-4 h-4" />
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
}