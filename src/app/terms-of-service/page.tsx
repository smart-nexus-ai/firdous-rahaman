import { Metadata } from 'next';
import { Terminal } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'Terms of Service for using Firdous Rahaman\'s software and related platforms.',
    openGraph: {
        title: 'Terms of Service | Firdous.dev',
        description: 'Terms of Service for using Firdous Rahaman\'s software and related platforms.',
        url: `${siteConfig.url}/terms-of-service`,
    },
};

export default function TermsOfServicePage() {
    const lastUpdated = "March 10, 2026";

    return (
        <article className="py-20 px-4 max-w-4xl mx-auto min-h-screen">
            <div className="mb-12 border-b border-dark-800 pb-8 mt-10">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-accent-purple/20 flex items-center justify-center text-accent-purple border border-accent-purple/30">
                        <Terminal className="w-6 h-6" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-mono font-bold text-white">
                        Terms of Service
                    </h1>
                </div>
                <p className="text-gray-400 font-mono text-sm uppercase tracking-wider">
                    Last Updated: {lastUpdated}
                </p>
            </div>

            <div className="prose prose-invert prose-p:text-gray-400 prose-headings:text-white prose-headings:font-mono prose-a:text-primary-500 hover:prose-a:text-primary-400 max-w-none">
                <p>
                    By accessing or using any application or service provided by Firdous Rahaman (including but not limited to AttendPro, Smart IoT platforms, and portfolio websites), you agree to these Terms of Service. If you do not agree, please do not use the platforms.
                </p>

                <h2 className="text-2xl mt-10 mb-4 font-bold border-l-4 border-accent-purple pl-4">1. Use of Services</h2>
                <p>
                    The portfolio site and my respective projects are primarily intended for technical demonstrations, educational tracking, and community-driven collaboration.
                </p>
                <ul>
                    <li><strong>Acceptable Use:</strong> Users are expected to utilize applications in good faith without attempting to circumvent authentication, exploit Edge Functions, or reverse-engineer deployed applications.</li>
                    <li><strong>Prohibited Activity:</strong> You may not use my systems for illegal activities or upload any content (like attendance profile images or user metadata) that violates local regulations or educational policies.</li>
                </ul>

                <h2 className="text-2xl mt-10 mb-4 font-bold border-l-4 border-blue-500 pl-4">2. Intellectual Property</h2>
                <p>
                    Most of my core engineering solutions, architectural frameworks (like my Arduino PID controllers, Machine Learning pipelines, and Next.js applications) are proprietary to me unless hosted explicitly under open-source licenses on GitHub. While specific open-source implementations can be forked, closed-source Android APKs or proprietary API endpoints cannot be redistributed without permission.
                </p>

                <h2 className="text-2xl mt-10 mb-4 font-bold border-l-4 border-green-500 pl-4">3. Disclaimer of Warranties</h2>
                <p>
                    My apps, software, and services are provided "as is" and "as available".
                </p>
                <ul>
                    <li>No warranty is given for uninterrupted access (especially concerning third-party dependencies like Firebase or Supabase).</li>
                    <li>Predictive models (ARIMA/LSTM pipelines) deployed for Air Quality or Weather metrics are experimental proofs of concept and should not be solely relied upon for making major life, safety, or logistical decisions.</li>
                </ul>

                <h2 className="text-2xl mt-10 mb-4 font-bold border-l-4 border-yellow-500 pl-4">4. Limitation of Liability</h2>
                <p>
                    I shall not be liable for indirect, incidental, or consequential damages resulting from the use or inability to use the services (e.g., lost attendance data due to device failures before WorkManager offline sync completes). Users are advised to periodically run Backup/Export processes (such as PDF Exports or Google Sheets syncing).
                </p>

                <h2 className="text-2xl mt-10 mb-4 font-bold border-l-4 border-red-500 pl-4">5. Modifications to the Terms</h2>
                <p>
                    These terms are periodically updated. By continuing to use my applications, you accept the modifications. Substantial changes may be broadcasted via app notifications or emails.
                </p>

                <p className="mt-8">
                    For inquiries, please reach out directly:
                    <a href="mailto:firdousrahaman.tfg@gmail.com" className="ml-2 font-mono group hover:text-white transition-colors">
                        firdousrahaman.tfg@gmail.com
                    </a>
                </p>
            </div>
        </article>
    );
}
