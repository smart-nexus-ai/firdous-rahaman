import { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/SectionHeading';
import SkillCategory from '@/components/skills/SkillCategory';
import ToolGrid from '@/components/skills/ToolGrid';
import { TerminalBlock } from '@/components/ui/TerminalBlock';
import { skillCategories } from '@/data/skills';

export const metadata: Metadata = {
    title: 'Skills',
    description:
        'Technical skills and expertise in IoT, embedded systems, machine learning, and mobile development.',
};

export default function SkillsPage() {
    return (
        <div className="py-20 px-4 max-w-5xl mx-auto">
            {/* Section 1 — Skills */}
            <section>
                <SectionHeading
                    title="Skills & Expertise"
                    subtitle="Technologies and tools I work with"
                    align="center"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    {skillCategories.map((category) => (
                        <SkillCategory key={category.title} category={category} />
                    ))}
                </div>
            </section>

            {/* Section 2 — Tools */}
            <section className="mt-20">
                <SectionHeading
                    title="Tools & Software"
                    subtitle="My everyday development toolkit"
                    align="center"
                />
                <div className="mt-12">
                    <ToolGrid />
                </div>
            </section>

            {/* Section 3 — Terminal fun */}
            <section className="mt-20 max-w-2xl mx-auto">
                <TerminalBlock
                    title="skills.sh"
                    lines={[
                        'skills.list()',
                        '→ Hardware: ESP32, Arduino, Sensors',
                        '→ Backend: Firebase, Supabase',
                        '→ ML: TensorFlow, ARIMA, LSTM',
                        '→ Mobile: Kotlin, Android',
                        'skills.status: always_learning',
                    ]}
                />
            </section>
        </div>
    );
}