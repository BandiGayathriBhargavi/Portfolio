import { Heart, ArrowUp } from 'lucide-react';
import { profile, navLinks } from '@/data/portfolio';

export function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const hasEmail = profile.contact.email && !profile.contact.email.startsWith('[ADD');
  const hasLinkedIn = profile.contact.linkedin && !profile.contact.linkedin.startsWith('[ADD');
  const hasGitHub = profile.contact.github && !profile.contact.github.startsWith('[ADD');

  return (
    <footer className="relative mt-20 border-t border-base bg-soft">
      <div className="container-px py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-3">
            <span className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-base bg-card font-mono text-sm font-bold text-gradient">
                {profile.monogram}
              </span>
              <span className="font-display text-sm font-bold text-fg">
                {profile.fullName}
              </span>
            </span>
            <p className="max-w-xs text-sm leading-relaxed text-fg-soft">
              {profile.tagline}
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-col gap-2">
            <h3 className="mb-1 font-mono text-xs uppercase tracking-wider text-fg-soft">
              Navigate
            </h3>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="focus-ring w-fit text-sm text-fg-soft transition-colors hover:text-fg"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2">
            <h3 className="mb-1 font-mono text-xs uppercase tracking-wider text-fg-soft">
              Connect
            </h3>
            {hasEmail ? (
              <a
                href={`mailto:${profile.contact.email}`}
                className="focus-ring w-fit text-sm text-fg-soft transition-colors hover:text-fg"
              >
                {profile.contact.email}
              </a>
            ) : (
              <span className="text-sm text-fg-soft">Email — to be added</span>
            )}
            {hasLinkedIn && (
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring w-fit text-sm text-fg-soft transition-colors hover:text-fg"
              >
                LinkedIn
              </a>
            )}
            {hasGitHub && (
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring w-fit text-sm text-fg-soft transition-colors hover:text-fg"
              >
                GitHub
              </a>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-base pt-6 sm:flex-row">
          <p className="flex items-center gap-1.5 text-sm text-fg-soft">
            &copy; {year} {profile.fullName}. Designed with curiosity. Built with code.
            <Heart size={13} className="text-[rgb(var(--accent-3))]" />
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="focus-ring inline-flex items-center gap-1.5 text-sm text-fg-soft transition-colors hover:text-fg"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
