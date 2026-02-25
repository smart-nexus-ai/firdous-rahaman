import React from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    icon?: LucideIcon;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', href, icon: Icon, children, ...props }, ref) => {

        const baseStyles = "rounded-lg font-mono transition-all duration-300 inline-flex items-center justify-center gap-2";

        const variants = {
            primary: "bg-primary-500 hover:bg-primary-600 text-white",
            outline: "border border-primary-500 text-primary-500 hover:bg-primary-500/10",
            ghost: "text-gray-400 hover:text-white hover:bg-dark-800",
        };

        const sizes = {
            sm: "px-3 py-1.5 text-sm",
            md: "px-4 py-2 text-base",
            lg: "px-6 py-3 text-lg",
        };

        const classes = cn(baseStyles, variants[variant], sizes[size], className);

        if (href) {
            return (
                <Link href={href} className={classes} ref={ref as React.ForwardedRef<HTMLAnchorElement>}>
                    {Icon && <Icon className="w-5 h-5" />}
                    {children}
                </Link>
            );
        }

        return (
            <button className={classes} ref={ref as React.ForwardedRef<HTMLButtonElement>} {...props}>
                {Icon && <Icon className="w-5 h-5" />}
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
