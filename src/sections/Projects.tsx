import { useState } from 'react';
import * as Icons from 'lucide-react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { projects, projectFilters } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';

interface ProjectsProps {
  onSelectProject: (slug: string) => void;
}

export function Projects({ onSelectProject }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const filtered =
    activeFilter === 'All Projects'
      ? projects
      : projects.filter((p) => p.filterTags.includes(activeFilter));

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Featured Projects"
          title={
            <>
              Selected work with{' '}
              <span className="text-gradient">depth and intent.</span>
            </>
          }
          description="Each project links to a detailed case study — covering the problem, architecture, workflow, and lessons learned."
        />

        <Reveal>
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`focus-ring rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-[rgb(var(--accent))] text-white shadow-glow'
                    : 'border border-base bg-card text-fg-soft hover:text-fg'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => {
            const IconComp = Icons[project.icon as keyof typeof Icons] as Icons.LucideIcon;
            return (
              <Reveal key={project.id} delay={i * 0.06} variant="scale">
                <article className="luminous-border group relative flex h-full flex-col overflow-hidden rounded-2xl border border-base bg-card">
                  <button
                    onClick={() => onSelectProject(project.slug)}
                    className="focus-ring flex flex-1 flex-col text-left"
                    aria-label={`View details: ${project.shortTitle}`}
                  >
                    <div
                      className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}
                    >
                      <div className="absolute inset-0 grid-bg-fine opacity-30" />
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                        {IconComp && <IconComp size={30} className="text-white" />}
                      </div>
                      <span className="absolute bottom-3 right-3 rounded-full bg-black/30 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
                        {project.category}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col gap-3 p-5">
                      <div>
                        <h3 className="font-display text-lg font-bold leading-tight text-fg">
                          {project.shortTitle}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-fg-soft">
                          {project.tagline}
                        </p>
                      </div>

                      <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-base bg-soft px-2 py-0.5 font-mono text-xs text-fg-soft"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="rounded-md border border-base bg-soft px-2 py-0.5 font-mono text-xs text-fg-soft">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all group-hover:gap-2.5">
                        View Details
                        <ArrowRight size={15} />
                      </span>
                    </div>
                  </button>
                </article>
              </Reveal>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="py-12 text-center text-fg-soft">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}

export function ProjectLinks({
  links,
}: {
  links: { label: string; url: string; type: string }[];
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) =>
        link.type === 'placeholder' ? (
          <span
            key={link.label}
            className="inline-flex items-center gap-2 rounded-xl border border-dashed border-base px-5 py-2.5 text-sm font-semibold text-fg-soft"
            title="Add the verified URL to the project data file"
          >
            <ExternalLink size={16} />
            {link.label} (not yet provided)
          </span>
        ) : (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-xl border border-base bg-card px-5 py-2.5 text-sm font-semibold text-fg transition-colors hover:border-[rgb(var(--accent))]/60"
          >
            <ExternalLink size={16} />
            {link.label}
          </a>
        )
      )}
    </div>
  );
}
