import { Download } from 'lucide-react';
import { profile } from '@/data/portfolio';

export function ResumeButton({ compact = false }: { compact?: boolean }) {
  const hasResume = profile.resumeFile && !profile.resumeFile.startsWith('[ADD');

  if (hasResume) {
    return (
      <a
        href={`${import.meta.env.BASE_URL}${profile.resumeFile}`}
        download={profile.resumeFile}
        type="application/pdf"
        aria-label="Download resume PDF"
        className="focus-ring group inline-flex items-center gap-2 rounded-xl bg-[rgb(var(--accent))] px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all hover:shadow-glow-soft hover:brightness-110"
      >
        <Download size={compact ? 15 : 17} />
        {compact ? 'Resume' : 'Download Resume'}
      </a>
    );
  }

  return (
    <span
      className="group inline-flex items-center gap-2 rounded-xl border border-dashed border-base px-5 py-2.5 text-sm font-semibold text-fg-soft"
      title="Resume file not yet added — add the PDF path to profile.resumeFile"
    >
      <Download size={compact ? 15 : 17} />
      {compact ? 'Resume' : 'Resume (pending)'}
    </span>
  );
}
