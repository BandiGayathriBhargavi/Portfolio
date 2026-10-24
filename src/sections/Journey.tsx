import * as Icons from 'lucide-react';
import { timeline } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';

export function Journey() {
  return (
    <section id="journey" className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Personal Journey"
          title={
            <>
              The path so far,{' '}
              <span className="text-gradient">step by step.</span>
            </>
          }
          description="A reflection of milestones in my development as a student and aspiring software professional."
        />

        <div className="relative hidden lg:block">
          <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-base to-transparent" />
          <div className="relative grid grid-cols-4 gap-4">
            {timeline.map((entry, i) => {
              const IconComp = Icons[entry.icon as keyof typeof Icons] as Icons.LucideIcon;
              const isTop = i % 2 === 0;
              return (
                <Reveal key={entry.title} delay={i * 0.1} className="relative">
                  <div
                    className={`flex flex-col items-center ${
                      isTop ? 'pb-16' : 'pt-16'
                    }`}
                  >
                    {isTop && (
                      <div className="mb-4 w-full rounded-2xl border border-base bg-card p-4 luminous-border">
                        <p className="mb-1 font-mono text-xs text-accent">
                          {entry.date}
                        </p>
                        <h3 className="mb-1.5 font-display text-sm font-bold text-fg">
                          {entry.title}
                        </h3>
                        <p className="text-xs leading-relaxed text-fg-soft">
                          {entry.description}
                        </p>
                      </div>
                    )}
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-base bg-card text-accent shadow-glow-soft">
                      {IconComp && <IconComp size={20} />}
                    </div>
                    {!isTop && (
                      <div className="mt-4 w-full rounded-2xl border border-base bg-card p-4 luminous-border">
                        <p className="mb-1 font-mono text-xs text-accent">
                          {entry.date}
                        </p>
                        <h3 className="mb-1.5 font-display text-sm font-bold text-fg">
                          {entry.title}
                        </h3>
                        <p className="text-xs leading-relaxed text-fg-soft">
                          {entry.description}
                        </p>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div className="relative lg:hidden">
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-[rgb(var(--accent))] via-base to-transparent" />
          <div className="flex flex-col gap-6">
            {timeline.map((entry, i) => {
              const IconComp = Icons[entry.icon as keyof typeof Icons] as Icons.LucideIcon;
              return (
                <Reveal key={entry.title} delay={i * 0.08}>
                  <div className="relative flex gap-5 pl-0">
                    <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-base bg-card text-accent">
                      {IconComp && <IconComp size={20} />}
                    </div>
                    <div className="flex-1 rounded-2xl border border-base bg-card p-4 luminous-border">
                      <p className="mb-1 font-mono text-xs text-accent">
                        {entry.date}
                      </p>
                      <h3 className="mb-1.5 font-display text-sm font-bold text-fg">
                        {entry.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-fg-soft">
                        {entry.description}
                      </p>
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
