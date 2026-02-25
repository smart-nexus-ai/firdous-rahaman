import React from 'react';
import { cn } from '@/lib/utils';

interface TechBadgeProps {
    name: string;
    category?: string;
    className?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ name, category, className }) => {
    // Determine color based on category if provided
    let colorClass = "bg-gray-800/50 text-gray-300";

    if (category) {
        const cat = category.toLowerCase();
        if (cat.includes('hardware') || cat.includes('embedded')) {
            colorClass = "bg-accent-green/10 text-accent-green";
        } else if (cat.includes('ml') || cat.includes('data') || cat.includes('machine learning')) {
            colorClass = "bg-accent-purple/10 text-accent-purple";
        } else if (cat.includes('mobile')) {
            colorClass = "bg-accent-amber/10 text-accent-amber";
        } else if (cat.includes('backend') || cat.includes('cloud') || cat.includes('database')) {
            colorClass = "bg-accent-cyan/10 text-accent-cyan";
        } else if (cat.includes('frontend') || cat.includes('web')) {
            colorClass = "bg-accent-pink/10 text-accent-pink";
        }
    }

    return (
        <span className={cn("px-2 py-1 rounded-md text-xs font-mono", colorClass, className)}>
            {name}
        </span>
    );
};
