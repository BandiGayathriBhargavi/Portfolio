import { Compass, Lightbulb, Code2, BookOpen, User } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { profile, timeline } from '@/data/portfolio';
import * as Icons from 'lucide-react';

const storyParts = [
  {
    icon: Compass,
    title: 'My Foundation',
    body: `My engineering journey at ${profile.education.institution} helped me develop a foundation in computer science, programming, databases, and data science. With a CGPA of ${profile.education.cgpa}, I built a base that spans both theory and hands-on building.`,
  },
  {
    icon: Code2,
    title: 'My Exploration',
    body: 'Through projects, coding practice, certifications, and technology-focused learning, I have explored different areas of software development and applied my knowledge to practical problems — from Python applications to machine learning and Salesforce.',
  },
  {
    icon: Lightbulb,
    title: 'My Direction',
    body: 'I want to continue growing as a software developer, strengthen my problem-solving skills, work with modern technologies, and contribute to meaningful software products that solve real problems.',
  },
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              More Than Code —{' '}
              <span className="text-gradient">My Journey.</span>
            </>
          }
          description="A personal story of foundation, exploration, and direction as a student and aspiring software professional."
        />

        <div className="grid gap-5 sm:grid-cols-3">
          {storyParts.map((part, i) => (
            <Reveal key={part.title} delay={i * 0.08}>
              <article className="luminous-border group h-full rounded-2xl border border-base bg-card p-7 transition-colors">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgb(var(--accent))]/10 text-accent transition-colors group-hover:bg-[rgb(var(--accent))]/20">
                  <part.icon size={22} />
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-fg">
                  {part.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-fg-soft">{part.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 rounded-2xl border border-base bg-soft p-6">
            <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-bold text-fg">
              <User size={20} className="text-accent" />
              The Person Behind the Portfolio
            </h3>
            <p className="text-[15px] leading-relaxed text-fg-soft">
              I am someone who genuinely enjoys learning. I find satisfaction in
              figuring out why something works — not just that it works. Whether it
              is a new algorithm, a framework, or a platform, the
              part that excites me is the moment a concept clicks and I can use it
              to build something real. This section can later include my interests,
              values, lessons learned, and career aspirations.
            </p>
          </div>
        </Reveal>

        {/* <Reveal delay={0.3}>
          <div className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl border border-base bg-card p-5 text-sm">
            <span className="font-mono text-xs uppercase tracking-wider text-fg-soft">
              Education
            </span>
            <span className="text-fg">
              {profile.education.field} — {profile.education.institution},{' '}
              {profile.education.location}
            </span>
            <span className="rounded-full bg-[rgb(var(--accent))]/10 px-3 py-1 text-xs font-semibold text-accent">
              CGPA: {profile.education.cgpa}
            </span>
          </div>
        </Reveal> */}

        <Reveal delay={0.35}>
          <div className="mt-8">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-fg-soft">
              Academic Milestones
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {timeline.map((entry) => {
                const IconComp = Icons[entry.icon as keyof typeof Icons] as Icons.LucideIcon;
                return (
                  <div
                    key={entry.title}
                    className="rounded-xl border border-base bg-card p-4"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      {IconComp && <IconComp size={16} className="text-accent" />}
                      <span className="font-mono text-xs text-accent">{entry.date}</span>
                    </div>
                    <h4 className="text-sm font-bold text-fg">{entry.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-fg-soft">
                      {entry.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
