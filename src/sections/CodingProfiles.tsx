import * as Icons from 'lucide-react';
import { ExternalLink, Terminal } from 'lucide-react';
import { codingProfiles } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';

export function CodingProfiles() {
  return (
    <section id="profiles" className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Coding Profiles"
          title={
            <>
              Where I{' '}
              <span className="text-gradient">practice and share.</span>
            </>
          }
          description="Links to my coding and development profiles."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {codingProfiles.map((p, i) => {
            const IconComp = Icons[p.icon as keyof typeof Icons] as Icons.LucideIcon;
            const available = p.available && !p.url.startsWith('[ADD');
            return (
              <Reveal key={p.platform} delay={i * 0.06} variant="scale">
                {available ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="luminous-border group flex h-full flex-col items-center gap-3 rounded-2xl border border-base bg-card p-6 text-center transition-colors"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgb(var(--accent))]/10 text-accent">
                      {IconComp && <IconComp size={22} />}
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold text-fg">
                        {p.platform}
                      </h3>
                      <span className="mt-1 inline-flex items-center gap-1 text-xs text-accent">
                        Visit Profile <ExternalLink size={11} />
                      </span>
                    </div>
                  </a>
                ) : (
                  <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-dashed border-base bg-soft p-6 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft text-fg-soft">
                      {IconComp && <IconComp size={22} />}
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold text-fg-soft">
                        {p.platform}
                      </h3>
                      <span className="mt-1 text-xs text-fg-soft">Link to be added</span>
                    </div>
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-base bg-card p-6 font-mono text-sm">
            <div className="mb-3 flex items-center gap-2 text-fg-soft">
              <Terminal size={14} />
              <span className="text-xs">beyond_the_code.txt</span>
            </div>
            <p className="leading-relaxed text-fg-soft">
              <span className="text-[rgb(var(--accent-2))]"># </span>
              Beyond the code, I am someone who genuinely enjoys learning. I find
              satisfaction in figuring out why something works — not just that it
              works. Whether it is a new algorithm, a framework, or a platform like
              Salesforce, the part that excites me is the moment a concept clicks
              and I can use it to build something real.
            </p>
            <p className="mt-3 leading-relaxed text-fg-soft">
              <span className="text-[rgb(var(--accent-2))]"># </span>
              I believe meaningful technology solves real problems without
              unnecessary complexity. That belief shapes how I approach every
              project — start with the problem, keep it honest, and build
              something that works.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
