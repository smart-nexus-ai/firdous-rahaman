import { Metadata } from 'next';
import { Shield } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Privacy Policy for Firdous Rahaman\'s applications and services, including AttendPro and other IoT/ML projects.',
    openGraph: {
        title: 'Privacy Policy | Firdous.dev',
        description: 'Privacy Policy for Firdous Rahaman\'s applications and services.',
        url: `${siteConfig.url}/privacy-policy`,
    },
};

export default function PrivacyPolicyPage() {
    const lastUpdated = "March 10, 2026";

    return (
        <article className="py-20 px-4 max-w-4xl mx-auto min-h-screen">
            <div className="mb-12 border-b border-dark-800 pb-8 mt-10">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center text-primary-500 border border-primary-500/30">
                        <Shield className="w-6 h-6" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-mono font-bold text-white">
                        Privacy Policy
                    </h1>
                </div>
                <p className="text-gray-400 font-mono text-sm uppercase tracking-wider">
                    Last Updated: {lastUpdated}
                </p>
            </div>

            <div className="prose prose-invert prose-p:text-gray-400 prose-headings:text-white prose-headings:font-mono prose-a:text-primary-500 hover:prose-a:text-primary-400 max-w-none">
                <p>
                    Thank you for using my applications and services (such as AttendPro, Smart IoT platforms, and this portfolio website). This Privacy Policy is designed to help you understand how your information is collected, stored, and utilized across my portfolio of software and hardware solutions.
                </p>

                <h2 className="text-2xl mt-10 mb-4 font-bold border-l-4 border-primary-500 pl-4">1. Information Collection</h2>
                <p>
                    The types of information collected depend on the specific application:
                </p>
                <ul>
                    <li><strong>AttendPro ("Smart Attendance Manager"):</strong> When using AttendPro, data such as teacher profiles, student rosters, session records, and attendance logs are collected. This data is essential for the core functionality of generating reports and syncing across devices.</li>
                    <li><strong>IoT Projects (AirSense, Smart Irrigation, etc.):</strong> My IoT solutions may collect sensor data (temperature, humidity, air quality indices, soil moisture) and device metadata. For authenticated applications, basic user profiles are retained.</li>
                    <li><strong>Portfolio Site:</strong> I collect basic analytics (such as page views or referring sites) to improve the website's performance and design. If you contact me via email, your contact details will be retained solely for communication purposes.</li>
                </ul>

                <h2 className="text-2xl mt-10 mb-4 font-bold border-l-4 border-accent-purple pl-4">2. Data Storage and Security</h2>
                <p>
                    Security is a top priority in all my system architectures:
                </p>
                <ul>
                    <li>Modern backend infrastructures like <strong>Firebase Realtime Database</strong>, <strong>Firestore</strong>, and <strong>Supabase (PostgreSQL)</strong> are utilized to ensure real-time latency and data integrity.</li>
                    <li>Data transmission is secured using industry-standard protocols (HTTPS, wss://).</li>
                    <li>Applications like AttendPro are built with an offline-first approach (using Room DB & WorkManager), ensuring that data remains safely staged locally before seamlessly syncing to the cloud when connectivity is restored.</li>
                </ul>

                <h2 className="text-2xl mt-10 mb-4 font-bold border-l-4 border-blue-500 pl-4">3. Data Usage</h2>
                <p>
                    Your data is solely used for functionality, improvement, and research. I do not sell, rent, or trade your personal information to third parties. For example:
                </p>
                <ul>
                    <li>Sensor data (e.g., from AirSense) might be aggregated to train Machine Learning pipelines (ARIMA/LSTM) purely for academic or community-driven forecasting models.</li>
                    <li>Attendance data is strictly siloed for the respective educator's account, guarded by robust Firebase security rules.</li>
                </ul>

                <h2 className="text-2xl mt-10 mb-4 font-bold border-l-4 border-green-500 pl-4">4. Third-Party Services</h2>
                <p>
                    Some projects may rely on third-party integrations (such as Google Authentication, Vercel for hosting, or external APIs). These services have their own Privacy Policies, and adherence to their standards is maintained.
                </p>

                <h2 className="text-2xl mt-10 mb-4 font-bold border-l-4 border-yellow-500 pl-4">5. Contact Information</h2>
                <p>
                    If you have any questions or concerns regarding this Privacy Policy or data handling across any of my applications, feel free to reach out.
                </p>
                <p className="font-mono bg-dark-900 border border-dark-800 p-4 rounded-lg inline-block text-primary-400">
                    Email: firdousrahaman.tfg@gmail.com
                </p>
            </div>
        </article>
    );
}
