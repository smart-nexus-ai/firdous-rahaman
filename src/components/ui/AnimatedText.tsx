"use client";

import React from 'react';
import { useTypewriter } from '@/hooks/useTypewriter';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
    text: string;
    className?: string;
    delay?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className, delay = 0 }) => {
    const { displayText, isComplete } = useTypewriter(text, 50, delay);

    return (
        <span className={cn("font-mono", className)}>
            {displayText}
            <span className={cn("inline-block ml-[1px] animate-pulse", isComplete ? "opacity-30" : "opacity-100 text-primary-500")}>
                |
            </span>
        </span>
    );
};
