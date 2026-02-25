"use client";

import React, { useRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlowCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
}

export const GlowCard: React.FC<GlowCardProps> = ({ children, className, ...props }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            cardRef.current.style.setProperty('--mouse-x', `${x}px`);
            cardRef.current.style.setProperty('--mouse-y', `${y}px`);
        }
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            whileHover={{ scale: 1.02 }}
            className={cn(
                "relative overflow-hidden transition-all duration-300 rounded-xl glass group",
                className
            )}
            {...(props as any)}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300 z-0"
                style={{
                    background: 'radial-gradient(400px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(14,165,233,0.08), transparent 40%)',
                }}
            />
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </motion.div>
    );
};
