import { useEffect } from 'react';
import * as Icons from 'lucide-react';
import { ArrowLeft, ChevronRight, Home, CheckCircle2 } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { ProjectLinks } from '@/sections/Projects';
import { Reveal } from '@/components/Reveal';

interface ProjectDetailProps {
  slug: string;
  onBack: () => void;
  onHome: () => void;
}

export function ProjectDetail({ slug, onBack, onHome }: ProjectDetailProps) {
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!project) {
    return (
      <div className="container-px flex min-h-[60vh] flex-col items-center justify-center gap-4 pt-24">
        <p className="text-lg text-fg-soft">Project not found.</p>
        <button
          onClick={onBack}
          className="focus-ring inline-flex items-center gap-2 rounded-xl border border-base bg-card px-5 py-2.5 text-sm font-semibold text-fg"
        >
          <ArrowLeft size={16} /> Back to Projects
        </button>
      </div>
    );
  }

  const IconComp = Icons[project.icon as keyof typeof Icons] as Icons.LucideIcon;

  return (
    <article className="pt-20">
      <div className="container-px py-8">
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-1.5 text-sm text-fg-soft"
        >
          <button
            onClick={onHome}
            className="focus-ring inline-flex items-center gap-1 hover:text-fg"
          >
            <Home size={14} /> Home
          </button>
          <ChevronRight size={14} />
          <button onClick={onBack} className="focus-ring hover:text-fg">
            Projects
          </button>
          <ChevronRight size={14} />
          <span className="text-fg">{project.shortTitle}</span>
        </nav>

        <button
          onClick={onBack}
          className="focus-ring mb-8 inline-flex items-center gap-2 text-sm font-semibold text-fg-soft transition-colors hover:text-fg"
        >
          <ArrowLeft size={16} /> Back to All Projects
        </button>

        <div
          className={`relative mb-10 flex h-56 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br ${project.gradient} sm:h-72`}
        >
          <div className="absolute inset-0 grid-bg-fine opacity-30" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 backdrop-blur">
            {IconComp && <IconComp size={38} className="text-white" />}
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
          <div className="flex flex-col gap-8">
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[rgb(var(--accent))]/10 px-3 py-1 text-xs font-semibold text-accent">
                  {project.category}
                </span>
                <span className="rounded-full border border-base bg-card px-3 py-1 text-xs font-medium text-fg-soft">
                  {project.status}
                </span>
              </div>
              <h1 className="font-display text-3xl font-bold leading-tight text-fg sm:text-4xl">
                {project.title}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-fg-soft">
                {project.tagline}
              </p>
            </div>

            {project.features.length > 0 && (
              <Reveal>
                <div className="rounded-2xl border border-base bg-card p-6">
                  <h2 className="mb-4 font-display text-xl font-bold text-fg">
                    Key Features
                  </h2>
                  <ul className="grid gap-2.5 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-fg-soft"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 flex-shrink-0 text-accent"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}

            {project.sections.map((section, i) => (
              <Reveal key={section.heading} delay={i * 0.04}>
                <section className="border-l-2 border-base pl-5 transition-colors hover:border-[rgb(var(--accent))]/40">
                  <h2 className="mb-2 font-display text-xl font-bold text-fg">
                    {section.heading}
                  </h2>
                  <p className="text-[15px] leading-relaxed text-fg-soft">
                    {section.body}
                  </p>
                </section>
              </Reveal>
            ))}

            <Reveal>
              <div className="rounded-2xl border border-dashed border-base bg-soft p-6 text-center">
                <p className="text-sm text-fg-soft">
                  {/* Screenshots and demo visuals will appear here once provided.
                  Add image paths to the project data file to populate this section. */}
                </p>
              </div>
            </Reveal>
          </div>

          <aside className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-base bg-card p-5">
              <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-fg-soft">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-base bg-soft px-2.5 py-1 font-mono text-xs text-fg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-base bg-card p-5">
              <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-fg-soft">
                {/* Links */}
              </h3>
              <ProjectLinks links={project.links} />
            </div>

            <div className="rounded-2xl border border-base bg-soft p-5">
              <h3 className="mb-2 font-mono text-xs uppercase tracking-wider text-fg-soft">
                {/* Note */}
              </h3>
              <p className="text-xs leading-relaxed text-fg-soft">
                {/* Content reflects verified project details. Metrics, deployment */}
                {/* status, and results are intentionally omitted until confirmed. */}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
