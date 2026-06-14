import type { MDXComponents } from 'mdx/types';
import React from 'react';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => (
            <h1 className="text-3xl md:text-4xl font-mono font-bold text-white mt-12 mb-6 leading-tight">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-2xl font-mono font-bold text-white mt-10 mb-4 border-b border-dark-800/50 pb-2">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-xl font-mono font-bold text-white mt-8 mb-3">
                {children}
            </h3>
        ),
        p: ({ children }) => (
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                {children}
            </p>
        ),
        a: ({ href, children }) => (
            <a
                href={href}
                className="text-primary-400 hover:text-primary-300 underline underline-offset-4 transition-colors duration-200"
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
                {children}
            </a>
        ),
        ul: ({ children }) => (
            <ul className="list-disc list-inside text-gray-300 text-sm md:text-base leading-relaxed mb-6 space-y-2 pl-4">
                {children}
            </ul>
        ),
        ol: ({ children }) => (
            <ol className="list-decimal list-inside text-gray-300 text-sm md:text-base leading-relaxed mb-6 space-y-2 pl-4">
                {children}
            </ol>
        ),
        li: ({ children }) => (
            <li className="mb-1">
                {children}
            </li>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary-500 bg-dark-900/50 px-6 py-4 rounded-r-xl italic my-6 text-gray-400">
                {children}
            </blockquote>
        ),
        pre: ({ children }) => {
            // If the child is a <code> tag, extract its props to show language if possible
            let lang = '';
            if (React.isValidElement(children) && (children.props as any).className) {
                lang = ((children.props as any).className as string).replace('language-', '');
            }
            return (
                <div className="my-6 rounded-xl overflow-hidden border border-dark-800 shadow-2xl">
                    {lang && (
                        <div className="bg-dark-800 px-4 py-2 text-xs font-mono text-gray-400 border-b border-dark-700/50 uppercase tracking-wider">
                            {lang}
                        </div>
                    )}
                    <pre className="bg-dark-950/80 p-5 overflow-x-auto font-mono text-sm leading-relaxed text-gray-300">
                        {children}
                    </pre>
                </div>
            );
        },
        code: ({ children, className }) => {
            const isInline = !className;
            if (isInline) {
                return (
                    <code className="bg-dark-800 text-primary-400 px-1.5 py-0.5 rounded text-xs font-mono">
                        {children}
                    </code>
                );
            }
            return <code className={className}>{children}</code>;
        },
        strong: ({ children }) => (
            <strong className="text-white font-bold">
                {children}
            </strong>
        ),
        ...components,
    };
}
