import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="focus-ring anim-enter fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-base bg-card text-fg shadow-glow-soft transition-colors hover:border-[rgb(var(--accent))]/60"
    >
      <ArrowUp size={20} />
    </button>
  );
}
