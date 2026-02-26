import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeft, Calendar, Github, Globe, BookOpen, CheckCircle } from 'lucide-react';
import { projects } from '@/data/projects';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArchitectureDiagram } from '@/components/projects/ArchitectureDiagram';
import { TerminalBlock } from '@/components/ui/TerminalBlock';
import { Button } from '@/components/ui/Button';

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        return { title: 'Project Not Found' };
    }

    return {
        title: project.title,
        description: project.tagline,
    };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = projects.find((p) => p.slug === params.slug);
    const currentIndex = projects.findIndex((p) => p.slug === params.slug);

    if (!project) return notFound();

    const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
    const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

    return (
        <article className="py-20 px-4 max-w-4xl mx-auto min-h-screen">
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-white transition-colors mb-8 group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Projects
            </Link>

            <div className="aspect-video w-full bg-gradient-to-br from-dark-800 to-dark-900 rounded-xl mb-8 flex items-center justify-center border border-dark-800 shadow-2xl overflow-hidden relative">
                {/* Placeholder image representation */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                <span className="text-8xl font-mono font-bold text-dark-700 opacity-50 z-10">{project.title.charAt(0)}</span>
            </div>

            <div className="mb-12">
                <h1 className="text-3xl md:text-5xl font-mono font-bold text-white mb-4 leading-tight">{project.title}</h1>
                <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">{project.tagline}</p>

                <div className="flex flex-wrap items-center gap-4 mt-6">
                    <span className="shrink-0 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-dark-800 text-gray-400 border border-dark-700">
                        <span className={`w-2 h-2 rounded-full ${project.status === 'completed' ? 'bg-accent-green' : project.status === 'in-progress' ? 'bg-accent-amber animate-pulse' : 'bg-gray-500'}`}></span>
                        {project.status.replace('-', ' ')}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center gap-2 font-mono">
                        <Calendar className="w-4 h-4" />
                        {project.duration}
                    </span>
                    <div className="flex gap-2 border-l border-dark-800 pl-4 ml-2">
                        {project.category.map((cat) => (
                            <span key={cat} className="text-xs uppercase font-mono text-gray-500 tracking-wider">#{cat}</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="space-y-16">
                <section>
                    <SectionHeading title="Overview" className="mb-6" />
                    <p className="text-gray-300 leading-relaxed text-lg">{project.description}</p>
                </section>

                <section>
                    <SectionHeading title="System Architecture" className="mb-6" />
                    <ArchitectureDiagram description={project.architectureDescription} />
                </section>

                <section>
                    <SectionHeading title="Tech Stack" className="mb-6" />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {project.techStack.map((tech) => (
                            <div key={tech.name} className="glass rounded-xl p-4 flex flex-col items-center justify-center text-center gap-2 border-dark-800/50 hover:bg-dark-800 transition-colors">
                                {/* Simplified Icon mapping using category text */}
                                <div className="w-10 h-10 rounded-full bg-dark-900 flex items-center justify-center text-gray-400 mb-1 border border-dark-800">
                                    <span className="text-[10px] font-mono uppercase font-bold">{tech.name.substring(0, 2)}</span>
                                </div>
                                <span className="font-mono text-sm text-gray-300">{tech.name}</span>
                                <span className="text-[10px] text-gray-500 uppercase tracking-wider">{tech.category}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <SectionHeading title="Key Features" className="mb-6" />
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.features.map((feature, i) => (
                            <li key={i} className="flex gap-3 text-gray-300 p-4 glass rounded-xl border-dark-800/50">
                                <CheckCircle className="w-5 h-5 text-accent-green shrink-0 mt-0.5" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {project.highlights.length > 0 && (
                    <section>
                        <SectionHeading title="Project Highlights" className="mb-6" />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {project.highlights.map((highlight, i) => (
                                <div key={i} className="glass rounded-xl p-6 text-center border-t-2 border-t-primary-500/50 border-dark-800">
                                    <div className="text-2xl font-mono font-bold text-primary-500 mb-2">{highlight.value}</div>
                                    <div className="text-xs text-gray-400 font-sans uppercase tracking-wider">{highlight.label}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <section>
                    <SectionHeading title="Concept Execution" className="mb-6" />
                    <TerminalBlock
                        title={`~/${project.slug}/execute.sh`}
                        lines={[
                            `initializing system instance: ${project.title}...`,
                            "loading dependencies from core storage...",
                            `connecting parameters: [${project.category.join(", ")}]`,
                            "system online. executing main loop.",
                        ]}
                    />
                </section>

                <section className="pt-8 flex flex-wrap gap-4">
                    {project.links.github && (
                        <Button href={project.links.github} variant="outline" icon={Github}>
                            View Repository
                        </Button>
                    )}
                    {project.links.live && (
                        <Button href={project.links.live} variant="primary" icon={Globe}>
                            Live Demo
                        </Button>
                    )}
                    {project.links.blog && (
                        <Button href={project.links.blog} variant="ghost" icon={BookOpen}>
                            Read Case Study
                        </Button>
                    )}
                </section>
            </div>

            <nav className="flex justify-between items-center mt-20 pt-8 border-t border-dark-800">
                <div className="w-1/2 pr-4">
                    {prevProject && (
                        <Link href={`/projects/${prevProject.slug}`} className="group block">
                            <span className="text-xs text-gray-500 font-mono uppercase tracking-wider block mb-1">Previous Project</span>
                            <span className="font-mono text-gray-300 group-hover:text-primary-500 transition-colors flex items-center gap-2">
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                <span className="truncate">{prevProject.title}</span>
                            </span>
                        </Link>
                    )}
                </div>

                <div className="w-1/2 pl-4 text-right">
                    {nextProject && (
                        <Link href={`/projects/${nextProject.slug}`} className="group block">
                            <span className="text-xs text-gray-500 font-mono uppercase tracking-wider block mb-1">Next Project</span>
                            <span className="font-mono text-gray-300 group-hover:text-primary-500 transition-colors flex items-center justify-end gap-2">
                                <span className="truncate">{nextProject.title}</span>
                                <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform shrink-0" />
                            </span>
                        </Link>
                    )}
                </div>
            </nav>
        </article>
    );
}