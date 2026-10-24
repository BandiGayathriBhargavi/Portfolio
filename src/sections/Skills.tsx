import { useState } from 'react';
import * as Icons from 'lucide-react';
import { skillCategories } from '@/data/portfolio';
import { TechIcon } from '@/components/TechIcon';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';

export function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  const current = skillCategories[activeTab];

  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Technical Skills"
          title={
            <>
              The tools I use to{' '}
              <span className="text-gradient">build and explore.</span>
            </>
          }
          description="Organized by category — technologies I have worked with across academic projects, application development, and platform work."
        />

        <Reveal>
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {skillCategories.map((cat, i) => {
              const IconComp = Icons[cat.icon as keyof typeof Icons] as Icons.LucideIcon;
              return (
                <button
                  key={cat.title}
                  onClick={() => setActiveTab(i)}
                  className={`focus-ring inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === i
                      ? 'bg-[rgb(var(--accent))] text-white shadow-glow'
                      : 'border border-base bg-card text-fg-soft hover:text-fg'
                  }`}
                >
                  {IconComp && <IconComp size={15} />}
                  {cat.title}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div key={activeTab} className="anim-enter">
          <Reveal>
            <div className="flex flex-wrap gap-3 rounded-2xl border border-base bg-card p-6">
              {current.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-2 rounded-xl border border-base bg-soft px-4 py-2.5 text-sm font-medium text-fg transition-colors hover:border-[rgb(var(--accent))]/40"
                >
                  <TechIcon name={skill.icon} className="h-4 w-4 text-[rgb(var(--accent))]" />
                  {skill.name}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat, i) => {
            const IconComp = Icons[cat.icon as keyof typeof Icons] as Icons.LucideIcon;
            return (
              <Reveal key={cat.title} delay={i * 0.04}>
                <button
                  onClick={() => {
                    setActiveTab(i);
                    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`luminous-border group w-full rounded-2xl border p-5 text-left transition-colors ${
                    activeTab === i
                      ? 'border-[rgb(var(--accent))]/40 bg-card'
                      : 'border-base bg-card'
                  }`}
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[rgb(var(--accent))]/10 text-accent">
                    {IconComp && <IconComp size={20} />}
                  </div>
                  <h3 className="text-sm font-bold text-fg">{cat.title}</h3>
                  <p className="mt-1 text-xs text-fg-soft">
                    {cat.skills.length} technologies
                  </p>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
