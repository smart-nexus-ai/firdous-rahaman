'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Zap } from 'lucide-react';
import { fadeUp } from '@/lib/animations';
import { contactInfo } from '@/data/contact';

export default function ContactInfo() {
    const infoItems = [
        {
            icon: MapPin,
            label: 'Location',
            value: contactInfo.location,
        },
        {
            icon: Clock,
            label: 'Response Time',
            value: 'Within 24 hours',
        },
        {
            icon: Zap,
            label: 'Availability',
            value: contactInfo.availability,
        },
    ];

    return (
        <motion.div
            className="space-y-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {infoItems.map((item) => (
                <div
                    key={item.label}
                    className="flex items-start gap-3 p-3 rounded-lg"
                >
                    <div className="w-8 h-8 rounded-md bg-dark-800 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-primary-500" />
                    </div>
                    <div>
                        <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                            {item.label}
                        </p>
                        <p className="text-sm font-mono text-gray-300 mt-0.5">
                            {item.value}
                        </p>
                    </div>
                </div>
            ))}
        </motion.div>
    );
}