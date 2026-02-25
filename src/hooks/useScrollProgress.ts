"use client";

import { useState, useEffect } from 'react';

export const useScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (docHeight > 0) {
                setProgress(scrollY / docHeight);
            } else {
                setProgress(0);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return progress;
};
