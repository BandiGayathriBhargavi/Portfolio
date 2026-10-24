import { Briefcase, Calendar, Cpu, Lightbulb } from 'lucide-react';
import { experience } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';

export function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Work Experience & Practical Learning"
          title={
            <>
              Hands-on exposure,{' '}
              <span className="text-gradient">project by project.</span>
            </>
          }
          description="Practical experience through academic projects, technical training, and project-based learning."
        />

        <div className="relative">
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-[rgb(var(--accent))] via-base to-transparent" />
          <div className="flex flex-col gap-6">
            {experience.map((entry, i) => {
              const isPlaceholder =
                entry.role.startsWith('[ADD') || entry.organization.startsWith('[ADD');
              return (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="relative flex gap-5">
                    <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-base bg-card text-accent">
                      <Briefcase size={20} />
                    </div>
                    <div
                      className={`flex-1 rounded-2xl border p-5 ${
                        isPlaceholder
                          ? 'border-dashed border-base bg-soft'
                          : 'border-base bg-card luminous-border'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-display text-base font-bold text-fg">
                          {entry.role}
                        </h3>
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-accent">
                          <Calendar size={12} />
                          {entry.date}
                        </span>
                      </div>
                      <p className="mb-3 text-sm font-medium text-fg-soft">
                        {entry.organization}
                      </p>

                      {!isPlaceholder && (
                        <div className="space-y-3">
                          <div>
                            <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-fg-soft">
                              <Cpu size={12} /> Responsibilities
                            </p>
                            <p className="text-sm leading-relaxed text-fg-soft">
                              {entry.responsibilities}
                            </p>
                          </div>
                          <div>
                            <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-fg-soft">
                              <Cpu size={12} /> Technologies
                            </p>
                            <p className="text-sm leading-relaxed text-fg-soft">
                              {entry.technologies}
                            </p>
                          </div>
                          <div>
                            <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-fg-soft">
                              <Lightbulb size={12} /> Learning Outcomes
                            </p>
                            <p className="text-sm leading-relaxed text-fg-soft">
                              {entry.outcomes}
                            </p>
                          </div>
                        </div>
                      )}

                      {isPlaceholder && (
                        <p className="text-sm text-fg-soft">
                          This entry is a placeholder. Add verified internship,
                          training, or work experience details to the data file to
                          populate this section.
                        </p>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
