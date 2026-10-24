import { type ReactNode, useEffect, useRef, ElementType } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
  variant?: 'up' | 'fade' | 'scale';
}

export function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className = '',
  variant = 'up',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('is-visible');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '-40px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const variantClass =
    variant === 'fade' ? 'reveal-fade' : variant === 'scale' ? 'reveal-scale' : 'reveal-up';

  return (
    <Tag
      ref={ref as never}
      className={`${variantClass} ${className}`}
    >
      {children}
    </Tag>
  );
}
