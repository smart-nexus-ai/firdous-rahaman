"use client";

import { useScrollProgress } from '@/hooks/useScrollProgress';

export const ScrollProgress = () => {
    const progress = useScrollProgress();

    return (
        <div className="fixed top-0 left-0 right-0 h-0.5 z-[60] bg-dark-900 pointer-events-none">
            <div
                className="h-full bg-primary-500 shadow-[0_0_10px_rgba(14,165,233,0.8)]"
                style={{
                    width: `${progress * 100}%`,
                    transition: 'width 100ms ease-out'
                }}
            />
        </div>
    );
};
