import { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/SectionHeading';
import TimelineItem from '@/components/experience/TimelineItem';
import CertificationCard from '@/components/experience/CertificationCard';
import { TerminalBlock } from '@/components/ui/TerminalBlock';
import { experiences, education, certifications } from '@/data/experience';

export const metadata: Metadata = {
    title: 'Experience & Education',
    description:
        'Professional experience, education background, and certifications.',
};

export default function ExperiencePage() {
    return (
        <div className="py-20 px-4 max-w-4xl mx-auto">
            {/* Section 1 — Experience */}
            <section>
                <SectionHeading
                    title="Experience"
                    subtitle="Professional journey and work history"
                    align="left"
                />
                <div className="mt-10">
                    {experiences.map((exp, index) => (
                        <TimelineItem
                            key={exp.id}
                            type="work"
                            title={exp.title}
                            subtitle={exp.company}
                            location={exp.location}
                            dateRange={`${exp.startDate} — ${exp.endDate}`}
                            description={exp.description}
                            highlights={exp.highlights}
                            tags={exp.technologies}
                            badge={exp.type}
                            index={index}
                        />
                    ))}
                </div>
            </section>

            {/* Section 2 — Education */}
            <section className="mt-20">
                <SectionHeading
                    title="Education"
                    subtitle="Academic background and coursework"
                    align="left"
                />
                <div className="mt-10">
                    {education.map((edu, index) => (
                        <TimelineItem
                            key={edu.id}
                            type="education"
                            title={edu.degree}
                            subtitle={edu.institution}
                            location={edu.location}
                            dateRange={`${edu.startDate} — ${edu.endDate}`}
                            description={edu.description}
                            highlights={edu.coursework.map((c) => c)}
                            badge={edu.grade}
                            index={index}
                        />
                    ))}
                </div>
            </section>

            {/* Section 3 — Certifications */}
            <section className="mt-20">
                <SectionHeading
                    title="Certifications"
                    subtitle="Professional certifications and courses"
                    align="left"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                    {certifications.map((cert, index) => (
                        <CertificationCard key={cert.id} cert={cert} index={index} />
                    ))}
                </div>
            </section>

            {/* Terminal */}
            <section className="mt-20 max-w-2xl mx-auto">
                <TerminalBlock
                    title="experience.sh"
                    lines={[
                        'career.timeline()',
                        `→ ${experiences.length} professional roles`,
                        `→ ${education.length} degrees`,
                        `→ ${certifications.length} certifications`,
                        '→ status: continuously_growing',
                        'career.next() → loading...',
                    ]}
                />
            </section>
        </div>
    );
}