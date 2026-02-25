import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, speed = 50, delay = 0) => {
    const [displayText, setDisplayText] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        let currentText = '';
        let currentIndex = 0;

        const startTyping = () => {
            timeoutId = setInterval(() => {
                if (currentIndex < text.length) {
                    currentText += text.charAt(currentIndex);
                    setDisplayText(currentText);
                    currentIndex++;
                } else {
                    setIsComplete(true);
                    clearInterval(timeoutId);
                }
            }, speed);
        };

        const delayTimeoutId = setTimeout(startTyping, delay);

        return () => {
            clearInterval(timeoutId);
            clearTimeout(delayTimeoutId);
        };
    }, [text, speed, delay]);

    return { displayText, isComplete };
};
