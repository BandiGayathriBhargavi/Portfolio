import { ArrowRight, Mail, Sparkles, Terminal, Github, Linkedin } from 'lucide-react';
import { profile, techStackHero } from '@/data/portfolio';
import { TechIcon } from '@/components/TechIcon';
import { ResumeButton } from '@/components/ResumeButton';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Hero() {
  const typed = useTypingEffect();
  const reduced = useReducedMotion();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const hasGitHub = profile.contact.github && !profile.contact.github.startsWith('[ADD');
  const hasLinkedIn = profile.contact.linkedin && !profile.contact.linkedin.startsWith('[ADD');

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <AnimatedBackground reduced={reduced} />

      <div className="container-px relative z-10 grid items-center gap-12 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div className="flex flex-col gap-6">
          <span
            className={`anim-fade-in inline-flex w-fit items-center gap-2 rounded-full border border-base bg-card/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-fg-soft backdrop-blur sm:text-xs`}
          >
            <Sparkles size={13} className="text-accent" />
            {profile.eyebrow}
          </span>

          <h1
            className="anim-fade-in font-display text-4xl font-bold leading-[1.1] text-fg sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '0.1s' }}
          >
            {profile.fullName.split(' ').slice(0, 2).join(' ')}{' '}
            <span className="text-gradient">{profile.fullName.split(' ').slice(2).join(' ')}</span>
            <span className="block mt-2 text-3xl sm:text-4xl lg:text-5xl text-fg-soft font-semibold">
              {profile.heroHeading}
            </span>
          </h1>

          <p
            className="anim-fade-in max-w-xl text-base leading-relaxed text-fg-soft sm:text-lg"
            style={{ animationDelay: '0.2s' }}
          >
            {profile.heroSupporting}
          </p>

          <div
            className="anim-fade-in flex flex-wrap items-center gap-3"
            style={{ animationDelay: '0.3s' }}
          >
            <button
              onClick={() => scrollTo('projects')}
              className="focus-ring group inline-flex items-center gap-2 rounded-xl bg-[rgb(var(--accent))] px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:shadow-glow-soft hover:brightness-110"
            >
              Explore My Projects
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
            </button>
            <ResumeButton />
            <button
              onClick={() => scrollTo('contact')}
              className="focus-ring inline-flex items-center gap-2 rounded-xl border border-base bg-card px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-[rgb(var(--accent))]/60"
            >
              <Mail size={17} />
              Contact Me
            </button>
          </div>

          <div
            className="anim-fade-in flex flex-wrap items-center gap-3 pt-2"
            style={{ animationDelay: '0.4s' }}
          >
            {hasGitHub && (
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-xl border border-base bg-card text-fg-soft transition-colors hover:border-[rgb(var(--accent))]/60 hover:text-fg"
              >
                <Github size={18} />
              </a>
            )}
            {hasLinkedIn && (
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-xl border border-base bg-card text-fg-soft transition-colors hover:border-[rgb(var(--accent))]/60 hover:text-fg"
              >
                <Linkedin size={18} />
              </a>
            )}
          </div>

          <div
            className="anim-fade-in flex flex-wrap items-center gap-x-5 gap-y-3 pt-2"
            style={{ animationDelay: '0.5s' }}
          >
            <span className="font-mono text-xs uppercase tracking-wider text-fg-soft">
              Tech stack
            </span>
            <div className="flex flex-wrap items-center gap-3">
              {techStackHero.map((tech) => (
                <div
                  key={tech.name}
                  className="group flex items-center gap-2 rounded-lg border border-base bg-card px-3 py-1.5 text-sm text-fg-soft transition-colors hover:border-[rgb(var(--accent))]/40 hover:text-fg"
                  title={tech.name}
                >
                  <TechIcon name={tech.icon} className="h-4 w-4 text-[rgb(var(--accent))]" />
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        <TerminalPanel typed={typed} reduced={reduced} />
      </div>
    </section>
  );
}

function AnimatedBackground({ reduced }: { reduced: boolean }) {
  return (
    <div className="absolute inset-0 -z-0 overflow-hidden" aria-hidden="true">
      <div
        className={`absolute inset-0 grid-bg ${reduced ? '' : 'anim-pulse-slow'}`}
        style={{
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 80%)',
        }}
      />
      {!reduced && (
        <>
          <div className="absolute -left-20 top-20 h-[400px] w-[400px] rounded-full bg-[rgb(var(--accent))] opacity-[0.12] blur-[120px] anim-float-slow" />
          <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-[rgb(var(--accent-2))] opacity-[0.1] blur-[100px] anim-float-med" />
          <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-[rgb(var(--accent-3))] opacity-[0.08] blur-[100px] anim-float-slow" />
        </>
      )}
    </div>
  );
}

function TerminalPanel({ typed, reduced }: { typed: string; reduced: boolean }) {
  return (
    <div
      className="anim-fade-in relative mx-auto w-full max-w-md lg:max-w-none"
      style={{ animationDelay: '0.3s' }}
    >
      <div className="luminous-border glass-strong overflow-hidden rounded-2xl shadow-2xl">
        <div className="flex items-center gap-2 border-b border-base px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
          <span className="ml-2 flex items-center gap-1.5 font-mono text-xs text-fg-soft">
            <Terminal size={12} />
            bandigayathribhargavi@portfolio: ~
          </span>
        </div>
        <div className="space-y-2 p-5 font-mono text-sm leading-relaxed">
          <p className="text-fg-soft">
            <span className="text-[rgb(var(--accent-2))]">$</span> who am i?
          </p>
          <p className="text-fg">{profile.fullName}</p>
          <p className="text-fg-soft">
            <span className="text-[rgb(var(--accent-2))]">$</span> cat role.txt
          </p>
          <p className="text-fg">
            <span className="text-gradient">{typed}</span>
            {!reduced && (
              <span className="ml-0.5 inline-block h-4 w-2 anim-blink bg-[rgb(var(--accent))]" />
            )}
          </p>
          <p className="text-fg-soft">
            <span className="text-[rgb(var(--accent-2))]">$</span> Ex-Junior Application Engineer at Redbot Innovations Pvt. Ltd. --help
          </p>
          <p className="text-fg text-xs pl-3">
            <span className="text-fg-soft">Machine Vision, Computer Vision, Deep Learning, Artificial Intelligence, and Data Science...</span>
          </p>
          <p className="text-fg text-xs pl-3">
            <span className="text-fg-soft"></span>
          </p>
          <p className="text-fg text-xs pl-3">
            <span className="text-green-400">Ready.</span>{' '}
            <span className="text-fg-soft"></span>
          </p>
          <p className="text-fg-soft pt-1">
            <span className="text-[rgb(var(--accent-2))]">$</span> echo $STATUS
          </p>
          <p className="text-fg">
            <span className="text-green-400">{'\u25CF'}</span> Open to opportunities &amp; learning
          </p>
        </div>
      </div>

      {!reduced && (
        <div className="absolute -right-4 -top-4 -z-10 h-24 w-24 rounded-2xl border border-base bg-card/40 backdrop-blur anim-float-slow" />
      )}
      {!reduced && (
        <div
          className="absolute -bottom-6 -left-6 -z-10 h-20 w-20 rounded-full border border-base bg-card/40 backdrop-blur anim-float-med"
        />
      )}
    </div>
  );
}
