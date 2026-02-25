'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { fadeUp } from '@/lib/animations';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<FormStatus>('idle');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate sending — replace with actual API call
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // Example: send to your API route
            // const res = await fetch('/api/contact', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify(formData),
            // });
            // if (!res.ok) throw new Error('Failed');

            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            setTimeout(() => setStatus('idle'), 5000);
        } catch {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {/* Name */}
            <div className="space-y-2">
                <label
                    htmlFor="name"
                    className="block text-sm font-mono text-gray-400"
                >
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-dark-900/50 border border-dark-800 rounded-lg text-white text-sm font-mono placeholder:text-gray-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/25 transition-all duration-300"
                />
            </div>

            {/* Email */}
            <div className="space-y-2">
                <label
                    htmlFor="email"
                    className="block text-sm font-mono text-gray-400"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-dark-900/50 border border-dark-800 rounded-lg text-white text-sm font-mono placeholder:text-gray-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/25 transition-all duration-300"
                />
            </div>

            {/* Subject */}
            <div className="space-y-2">
                <label
                    htmlFor="subject"
                    className="block text-sm font-mono text-gray-400"
                >
                    Subject
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project collaboration"
                    className="w-full px-4 py-3 bg-dark-900/50 border border-dark-800 rounded-lg text-white text-sm font-mono placeholder:text-gray-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/25 transition-all duration-300"
                />
            </div>

            {/* Message */}
            <div className="space-y-2">
                <label
                    htmlFor="message"
                    className="block text-sm font-mono text-gray-400"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or idea..."
                    className="w-full px-4 py-3 bg-dark-900/50 border border-dark-800 rounded-lg text-white text-sm font-mono placeholder:text-gray-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/25 transition-all duration-300 resize-none"
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500/50 text-white font-mono text-sm font-semibold rounded-lg transition-all duration-300 disabled:cursor-not-allowed"
            >
                {status === 'sending' ? (
                    <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        <Send className="w-4 h-4" />
                        Send Message
                    </>
                )}
            </button>

            {/* Status Messages */}
            {status === 'success' && (
                <motion.div
                    className="flex items-center gap-2 text-green-400 text-sm font-mono bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <CheckCircle className="w-4 h-4" />
                    Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
            )}

            {status === 'error' && (
                <motion.div
                    className="flex items-center gap-2 text-red-400 text-sm font-mono bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <AlertCircle className="w-4 h-4" />
                    Something went wrong. Please try again or email me directly.
                </motion.div>
            )}
        </motion.form>
    );
}