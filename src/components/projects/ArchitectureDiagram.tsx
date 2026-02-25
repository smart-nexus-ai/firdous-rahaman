import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ArchitectureDiagramProps {
    description: string;
    className?: string;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ description, className }) => {
    // Split the description by the arrow character
    const parts = description.split('→').map(part => part.trim());

    // Also handle the bilateral arrow ↔ if present
    const isBilateral = description.includes('↔');
    const actualParts = isBilateral ? description.split('↔').map(p => p.trim()) : parts;

    const keywordsToHighlight = [
        'ESP32', 'Arduino', 'Firebase', 'Supabase', 'Android', 'Kotlin',
        'Python', 'TensorFlow', 'ARIMA', 'LSTM', 'Next.js', 'React', 'Raspberry Pi', 'Firestore'
    ];

    const highlightText = (text: string) => {
        let result = text;
        keywordsToHighlight.forEach(keyword => {
            // Very simple string replacement for keywords
            if (result.includes(keyword)) {
                result = result.replace(keyword, `<span class="text-primary-500 font-bold">${keyword}</span>`);
            }
        });
        return <span dangerouslySetInnerHTML={{ __html: result }} />;
    };

    return (
        <div className={cn("glass rounded-xl p-6 overflow-x-auto", className)}>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2 min-w-max text-sm font-mono text-gray-300">
                {actualParts.map((part, index) => (
                    <React.Fragment key={index}>
                        <div className="px-4 py-3 bg-dark-900 border border-dark-800 rounded-lg text-center shadow-lg">
                            {highlightText(part)}
                        </div>

                        {index < actualParts.length - 1 && (
                            <div className="text-gray-500 flex flex-col items-center">
                                {isBilateral ? (
                                    <span className="text-xl rotate-90 md:rotate-0">↔</span>
                                ) : (
                                    <ArrowRight className="w-5 h-5 rotate-90 md:rotate-0" />
                                )}
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};
