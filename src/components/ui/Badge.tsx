import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'iot' | 'ml' | 'mobile' | 'web' | 'embedded' | 'default';
}

export const Badge: React.FC<BadgeProps> = ({ variant = 'default', children, className, ...props }) => {
    const baseStyles = "px-3 py-1 rounded-full text-xs font-mono inline-flex items-center justify-center";

    const variants = {
        iot: "bg-accent-cyan/10 text-accent-cyan",
        ml: "bg-accent-purple/10 text-accent-purple",
        mobile: "bg-accent-amber/10 text-accent-amber",
        web: "bg-accent-pink/10 text-accent-pink",
        embedded: "bg-accent-green/10 text-accent-green",
        default: "bg-gray-800/40 text-gray-300",
    };

    return (
        <span className={cn(baseStyles, variants[variant], className)} {...props}>
            {children}
        </span>
    );
};
