import { Metadata } from 'next';
import { Download, MapPin, GraduationCap, User } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Timeline } from '@/components/about/Timeline';
import { Interests } from '@/components/about/Interests';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
    title: 'About',
    description:
        'Learn more about Firdous Rahaman - IoT & Embedded Systems Developer with expertise in ESP32, Arduino, and Machine Learning',
    openGraph: {
        title: 'About | Firdous Rahaman',
        description:
            'Learn more about Firdous Rahaman - IoT & Embedded Systems Developer with expertise in ESP32, Arduino, and Machine Learning',
        url: `${siteConfig.url}/about`,
        type: 'profile',
    },
    alternates: {
        canonical: `${siteConfig.url}/about`,
    },
};

export default function AboutPage() {
    const initials = siteConfig.name
        .split(' ')
        .map(word => word[0])
        .join('')
        .substring(0, 2)
        .toUpperCase();

    return (
        <article className="py-20 px-4 max-w-5xl mx-auto min-h-screen">

            {/* Section 1 - Profile */}
            <section className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center mb-24">
                {/* Left: Avatar */}
                <div className="md:col-span-2 flex justify-center">
                    <div className="w-full max-w-sm aspect-square bg-gradient-to-br from-primary-500/20 to-accent-purple/20 rounded-2xl border border-dark-800 flex items-center justify-center p-2 relative shadow-[0_0_50px_rgba(14,165,233,0.1)]">
                        <div className="absolute inset-0 bg-dark-900/40 rounded-2xl backdrop-blur-sm -z-10" />

                        {/* Real photo would go here. Using initials placeholder */}
                        <div className="w-full h-full rounded-xl bg-dark-950/80 flex flex-col items-center justify-center border border-dark-800">
                            <User className="w-24 h-24 text-dark-800 mb-6" />
                            <span className="text-6xl font-mono font-bold text-dark-700 tracking-widest bg-clip-text text-transparent bg-gradient-to-br from-gray-500 to-dark-800">
                                {initials}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right: Text Content */}
                <div className="md:col-span-3">
                    <span className="text-primary-500 text-sm font-mono tracking-wider font-bold mb-2 block uppercase">
                        About Me
                    </span>
                    <h1 className="text-4xl md:text-5xl font-mono font-bold text-white mb-4">
                        {siteConfig.name}
                    </h1>
                    <h2 className="text-xl text-primary-500/80 font-mono mb-8">
                        {siteConfig.role}
                    </h2>

                    <div className="space-y-4 text-gray-400 leading-relaxed mb-8">
                        <p>
                            Passionate about bridging hardware and software. I specialize in building IoT systems that collect real-world sensor data, process it through ML pipelines, and deliver actionable insights through beautifully designed applications.
                        </p>
                        <p>
                            From ESP32 firmware to Android apps, from PID controllers to LSTM models — I enjoy working across the entire stack of embedded and intelligent systems to build end-to-end solutions.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 mb-10">
                        <div className="flex items-center gap-3 text-gray-300 font-mono text-sm">
                            <div className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-primary-500">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-500 text-xs uppercase tracking-wider">Location</span>
                                {siteConfig.location}
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-gray-300 font-mono text-sm">
                            <div className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-accent-purple">
                                <GraduationCap className="w-5 h-5" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-500 text-xs uppercase tracking-wider">Education</span>
                                {siteConfig.education}
                            </div>
                        </div>
                    </div>

                    <Button href="/resume.pdf" variant="primary" icon={Download}>
                        Download Resume
                    </Button>
                </div>
            </section>

            {/* Section 2 - Timeline */}
            <section className="mb-24">
                <div className="md:text-center mb-16">
                    <SectionHeading
                        title="My Journey"
                        subtitle="Education and experience driving my career forward"
                        align="center"
                        className="md:mx-auto"
                    />
                </div>
                <Timeline />
            </section>

            {/* Section 3 - Interests */}
            <section className="mb-10">
                <SectionHeading
                    title="Interests & Focus Areas"
                    subtitle="Technologies and domains I'm actively exploring"
                    className="mb-10"
                />
                <Interests />
            </section>

        </article>
    );
}
