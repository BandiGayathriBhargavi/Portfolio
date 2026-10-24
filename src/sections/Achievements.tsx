import { useState } from 'react';
import { Award, ExternalLink, Search, FileText, Image as ImageIcon, Star } from 'lucide-react';
import { certificates } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';

const categories = [
  'All',
  // 'Programming',
  // 'Data Structures and Algorithms',
  // 'AI/ML',
  // 'Salesforce',
  // 'Databases',
  // 'Professional Learning',
];

export function Achievements() {
  const [activeCat, setActiveCat] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = certificates.filter((cert) => {
    const matchesCat = activeCat === 'All' || cert.category === activeCat;
    const matchesQuery =
      !query ||
      cert.title.toLowerCase().includes(query.toLowerCase()) ||
      cert.organization.toLowerCase().includes(query.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const featured = certificates.find((c) => c.featured);

  return (
    <section id="achievements" className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Achievements & Certificates"
          title={
            <>
              Credentials earned,{' '}
              <span className="text-gradient">skills validated.</span>
            </>
          }
          description="A growing gallery of certifications and technical accomplishments."
        />

        {featured && (
          <Reveal>
            <div className="mb-10 overflow-hidden rounded-3xl border border-base bg-card luminous-border">
              <div className="grid gap-0 md:grid-cols-[1fr_1.5fr]">
                <div className="relative flex min-h-[200px] items-center justify-center bg-gradient-to-br from-violet-glow via-cyan-glow to-magenta-glow p-8">
                  <div className="absolute inset-0 grid-bg-fine opacity-30" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 backdrop-blur">
                    <Star size={36} className="text-white" />
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-3 p-7">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-[rgb(var(--accent))]/10 px-3 py-1 text-xs font-semibold text-accent">
                      Featured
                    </span>
                    <span className="rounded-full border border-base bg-soft px-3 py-1 text-xs font-medium text-fg-soft">
                      {featured.category}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-fg">
                    {featured.title}
                  </h3>
                  <p className="text-sm font-medium text-accent">
                    {featured.organization}
                  </p>
                  <p className="font-mono text-xs text-fg-soft">{featured.date}</p>
                  <p className="text-sm leading-relaxed text-fg-soft">
                    {featured.description}
                  </p>
                  <div className="mt-2">
                    {featured.type === 'placeholder' ? (
                      <span
                        className="inline-flex items-center gap-2 rounded-lg border border-dashed border-base px-4 py-2 text-sm font-semibold text-fg-soft"
                        title="Add the certificate image or PDF URL to the data file"
                      >
                        <ImageIcon size={15} />
                        Certificate (to be added)
                      </span>
                    ) : (
                      <a
                        href={featured.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring inline-flex items-center gap-2 rounded-lg bg-[rgb(var(--accent))]/10 px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-[rgb(var(--accent))]/20"
                      >
                        {featured.type === 'pdf' ? <FileText size={15} /> : <ImageIcon size={15} />}
                        {/* View Certificate */}
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* <Reveal>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-fg-soft"
              />
              <input
                type="text"
                placeholder="Search certificates..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search certificates"
                className="focus-ring w-full rounded-xl border border-base bg-card py-2.5 pl-10 pr-4 text-sm text-fg placeholder:text-fg-soft sm:w-64"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className={`focus-ring rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                    activeCat === cat
                      ? 'bg-[rgb(var(--accent))] text-white'
                      : 'border border-base bg-card text-fg-soft hover:text-fg'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal> */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 0.05} variant="scale">
              <article className="luminous-border group flex h-full flex-col rounded-2xl border border-base bg-card p-6">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgb(var(--accent))]/10 text-accent">
                    <Award size={22} />
                  </div>
                  <span className="rounded-full border border-base bg-soft px-2.5 py-1 text-xs font-medium text-fg-soft">
                    {cert.category}
                  </span>
                </div>
                <h3 className="mb-1 font-display text-base font-bold text-fg">
                  {cert.title}
                </h3>
                <p className="mb-2 text-sm font-medium text-accent">
                  {cert.organization}
                </p>
                <p className="mb-1 font-mono text-xs text-fg-soft">{cert.date}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-soft">
                  {cert.description}
                </p>
                <div className="mt-5 pt-1">
                  {cert.type === 'placeholder' ? (
                    <span
                      className="inline-flex items-center gap-2 rounded-lg border border-dashed border-base px-4 py-2 text-sm font-semibold text-fg-soft"
                      title="Add the certificate image or PDF URL to the data file"
                    >
                      <ImageIcon size={15} />
                      Certificate (to be added)
                    </span>
                  ) : (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex items-center gap-2 rounded-lg bg-[rgb(var(--accent))]/10 px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-[rgb(var(--accent))]/20"
                    >
                      {cert.type === 'pdf' ? <FileText size={15} /> : <ImageIcon size={15} />}
                      {/* View Certificate */}
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-12 text-center text-fg-soft">
            No certificates match your search.
          </p>
        )}
      </div>
    </section>
  );
}
