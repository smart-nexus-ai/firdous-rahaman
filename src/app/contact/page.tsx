import { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/SectionHeading';
import ContactForm from '@/components/contact/ContactForm';
import SocialLinks from '@/components/contact/SocialLinks';
import ContactInfo from '@/components/contact/ContactInfo';
import { TerminalBlock } from '@/components/ui/TerminalBlock';

export const metadata: Metadata = {
    title: 'Contact',
    description:
        'Get in touch for collaborations, freelance work, or just to say hello.',
};

export default function ContactPage() {
    return (
        <div className="py-20 px-4 max-w-5xl mx-auto">
            <SectionHeading
                title="Get In Touch"
                subtitle="Have a project idea or want to collaborate? Let's talk."
                align="center"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
                {/* Left — Form */}
                <div>
                    <h3 className="text-lg font-mono font-bold text-white mb-6">
                        Send a Message
                    </h3>
                    <ContactForm />
                </div>

                {/* Right — Info & Socials */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-lg font-mono font-bold text-white mb-6">
                            Connect With Me
                        </h3>
                        <SocialLinks />
                    </div>

                    <div className="h-px bg-dark-800" />

                    <div>
                        <h3 className="text-lg font-mono font-bold text-white mb-6">
                            Info
                        </h3>
                        <ContactInfo />
                    </div>
                </div>
            </div>

            {/* Terminal */}
            <section className="mt-20 max-w-2xl mx-auto">
                <TerminalBlock
                    title="contact.sh"
                    lines={[
                        'contact.init()',
                        '→ Email: your@email.com',
                        '→ Location: Your City, Country',
                        '→ Response time: < 24 hours',
                        '→ Status: available_for_work',
                        'contact.send("Hello!") → ✓ delivered',
                    ]}
                />
            </section>
        </div>
    );
}