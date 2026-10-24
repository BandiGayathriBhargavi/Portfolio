import { type ReactNode } from 'react';
import { Reveal } from '@/components/Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`mb-12 flex flex-col gap-4 sm:mb-16 ${
        align === 'center' ? 'items-center text-center' : 'items-start text-left'
      }`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-base bg-card px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-accent">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {eyebrow}
      </span>
      <h2 className="max-w-3xl font-display text-3xl font-bold leading-[1.15] text-fg sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-fg-soft sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
