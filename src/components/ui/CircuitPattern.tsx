import React from 'react';
import { cn } from '@/lib/utils';

interface CircuitPatternProps {
    className?: string;
}

export const CircuitPattern: React.FC<CircuitPatternProps> = ({ className }) => {
    return (
        <div className={cn("absolute inset-0 z-0 pointer-events-none opacity-5", className)}>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="circuit-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                        <path d="M0 30h30v30 M30 0v30h30" stroke="#0ea5e9" strokeWidth="1" fill="none" opacity="0.5" />
                        <circle cx="30" cy="30" r="2" fill="#0ea5e9" />
                        <circle cx="60" cy="30" r="1.5" fill="#0ea5e9" opacity="0.6" />
                        <circle cx="30" cy="60" r="1.5" fill="#0ea5e9" opacity="0.6" />
                        <path d="M15 15h15v15" stroke="#0ea5e9" strokeWidth="0.5" fill="none" opacity="0.3" />
                        <circle cx="30" cy="15" r="1" fill="#0ea5e9" opacity="0.4" />
                    </pattern>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
            </svg>
        </div>
    );
};
