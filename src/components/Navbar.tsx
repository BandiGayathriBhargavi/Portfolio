import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, profile } from '@/data/portfolio';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ResumeButton } from '@/components/ResumeButton';
import { useActiveSection } from '@/hooks/useActiveSection';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between gap-4 sm:h-18">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="focus-ring group flex items-center gap-2.5"
          aria-label="Home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-base bg-card font-mono text-sm font-bold text-gradient">
            {profile.monogram}
          </span>
          <span className="hidden font-display text-sm font-bold text-fg sm:block">
            {/* {profile.shortName} */}
            <span className="text-accent">Bandi Gayathri Bhargavi.dev</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.replace('#', '');
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`focus-ring relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-fg' : 'text-fg-soft hover:text-fg'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-0 -z-10 rounded-lg bg-[rgb(var(--accent))]/10" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2.5">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <div className="hidden sm:block">
            <ResumeButton compact />
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-xl border border-base bg-card text-fg lg:hidden"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="glass-strong overflow-hidden border-t border-base lg:hidden">
          <ul className="container-px flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              const isActive = active === link.href.replace('#', '');
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`focus-ring block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[rgb(var(--accent))]/10 text-fg'
                        : 'text-fg-soft hover:bg-soft hover:text-fg'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li className="mt-2 px-4">
              <ResumeButton />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
