'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

interface BlogContentProps {
    content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
    const renderContent = (raw: string) => {
        const lines = raw.trim().split('\n');
        const elements: JSX.Element[] = [];
        let codeBlock: string[] = [];
        let inCodeBlock = false;
        let codeLang = '';

        lines.forEach((line, i) => {
            // Code block start
            if (line.trim().startsWith('```') && !inCodeBlock) {
                inCodeBlock = true;
                codeLang = line.trim().replace('```', '');
                codeBlock = [];
                return;
            }

            // Code block end
            if (line.trim() === '```' && inCodeBlock) {
                inCodeBlock = false;
                elements.push(
                    <div key={`code-${i}`} className="my-6 rounded-xl overflow-hidden border border-dark-800">
                        {codeLang && (
                            <div className="bg-dark-800 px-4 py-2 text-xs font-mono text-gray-400 border-b border-dark-700">
                                {codeLang}
                            </div>
                        )}
                        <pre className="bg-dark-900 p-4 overflow-x-auto">
                            <code className="text-sm font-mono text-gray-300 leading-relaxed">
                                {codeBlock.join('\n')}
                            </code>
                        </pre>
                    </div>
                );
                codeBlock = [];
                codeLang = '';
                return;
            }

            if (inCodeBlock) {
                codeBlock.push(line);
                return;
            }

            // Headings
            if (line.startsWith('## ')) {
                elements.push(
                    <h2
                        key={`h2-${i}`}
                        className="text-2xl font-bold font-mono text-white mt-10 mb-4"
                    >
                        {line.replace('## ', '')}
                    </h2>
                );
                return;
            }

            if (line.startsWith('### ')) {
                elements.push(
                    <h3
                        key={`h3-${i}`}
                        className="text-xl font-bold font-mono text-white mt-8 mb-3"
                    >
                        {line.replace('### ', '')}
                    </h3>
                );
                return;
            }

            // Ordered list
            if (/^\d+\.\s/.test(line.trim())) {
                const text = line.trim().replace(/^\d+\.\s/, '');
                elements.push(
                    <li
                        key={`ol-${i}`}
                        className="text-gray-300 text-sm leading-relaxed ml-6 list-decimal mb-1"
                    >
                        {renderInlineFormatting(text)}
                    </li>
                );
                return;
            }

            // Unordered list
            if (line.trim().startsWith('- ')) {
                const text = line.trim().replace('- ', '');
                elements.push(
                    <li
                        key={`ul-${i}`}
                        className="text-gray-300 text-sm leading-relaxed ml-6 list-disc mb-1"
                    >
                        {renderInlineFormatting(text)}
                    </li>
                );
                return;
            }

            // Empty line
            if (line.trim() === '') {
                return;
            }

            // Paragraph
            elements.push(
                <p key={`p-${i}`} className="text-gray-300 text-sm leading-relaxed mb-4">
                    {renderInlineFormatting(line)}
                </p>
            );
        });

        return elements;
    };

    const renderInlineFormatting = (text: string) => {
        // Bold
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return (
                    <strong key={i} className="text-white font-semibold">
                        {part.slice(2, -2)}
                    </strong>
                );
            }
            // Inline code
            const codeParts = part.split(/(`.*?`)/g);
            return codeParts.map((cp, j) => {
                if (cp.startsWith('`') && cp.endsWith('`')) {
                    return (
                        <code
                            key={`${i}-${j}`}
                            className="bg-dark-800 text-primary-400 px-1.5 py-0.5 rounded text-xs font-mono"
                        >
                            {cp.slice(1, -1)}
                        </code>
                    );
                }
                return <span key={`${i}-${j}`}>{cp}</span>;
            });
        });
    };

    return (
        <motion.div
            className="prose-custom"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
        >
            {renderContent(content)}
        </motion.div>
    );
}