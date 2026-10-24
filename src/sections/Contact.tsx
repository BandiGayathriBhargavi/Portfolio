import { useState, type FormEvent } from 'react';
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Linkedin,
  Github,
} from 'lucide-react';
import { profile } from '@/data/portfolio';
import { supabase } from '@/lib/supabase';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';

type Status = 'idle' | 'submitting' | 'success' | 'error';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.trim()) e.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Please enter a valid email address.';
    if (!form.subject.trim()) e.subject = 'Please enter a subject.';
    if (!form.message.trim()) e.message = 'Please enter a message.';
    else if (form.message.trim().length < 10)
      e.message = 'Message should be at least 10 characters.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      });
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const hasEmail = profile.contact.email && !profile.contact.email.startsWith('[ADD');
  const hasLinkedIn =
    profile.contact.linkedin && !profile.contact.linkedin.startsWith('[ADD');
  const hasGitHub =
    profile.contact.github && !profile.contact.github.startsWith('[ADD');

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Have an Idea or Opportunity?{' '}
              <span className="text-gradient">Let&apos;s Connect.</span>
            </>
          }
          description="Whether it is a project, a collaboration, or just a hello — I would love to hear from you."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="flex h-full flex-col gap-5 rounded-2xl border border-base bg-card p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgb(var(--accent))]/10 text-accent">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="mb-2 font-display text-xl font-bold text-fg">
                  Let&apos;s connect
                </h3>
                <p className="text-sm leading-relaxed text-fg-soft">
                  Reach out through the form or via any of the channels below. I
                  usually respond within a few days.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {hasEmail ? (
                  <a
                    href={`mailto:${profile.contact.email}`}
                    className="focus-ring flex items-center gap-3 rounded-xl border border-base bg-soft p-4 text-sm text-fg transition-colors hover:border-[rgb(var(--accent))]/40"
                  >
                    <Mail size={18} className="text-accent" />
                    {profile.contact.email}
                  </a>
                ) : (
                  <div className="flex items-center gap-3 rounded-xl border border-dashed border-base bg-soft p-4 text-sm text-fg-soft">
                    <Mail size={18} />
                    Email — to be added
                  </div>
                )}

                {hasLinkedIn && (
                  <a
                    href={profile.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring flex items-center gap-3 rounded-xl border border-base bg-soft p-4 text-sm text-fg transition-colors hover:border-[rgb(var(--accent))]/40"
                  >
                    <Linkedin size={18} className="text-accent" />
                    LinkedIn
                  </a>
                )}

                {hasGitHub && (
                  <a
                    href={profile.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring flex items-center gap-3 rounded-xl border border-base bg-soft p-4 text-sm text-fg transition-colors hover:border-[rgb(var(--accent))]/40"
                  >
                    <Github size={18} className="text-accent" />
                    GitHub
                  </a>
                )}
              </div>

              {!hasEmail && (
                <p className="mt-auto rounded-lg border border-dashed border-base bg-soft p-3 text-xs text-fg-soft">
                  The email link will appear here once you add your email to the
                  profile data file. As a fallback, you can also connect via
                  LinkedIn or GitHub once those links are added.
                </p>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-5 rounded-2xl border border-base bg-card p-7"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  label="Name"
                  id="name"
                  value={form.name}
                  onChange={(v) => handleChange('name', v)}
                  error={errors.name}
                  required
                />
                <FormField
                  label="Email"
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(v) => handleChange('email', v)}
                  error={errors.email}
                  required
                />
              </div>
              <FormField
                label="Subject"
                id="subject"
                value={form.subject}
                onChange={(v) => handleChange('subject', v)}
                error={errors.subject}
                required
              />
              <FormField
                label="Message"
                id="message"
                textarea
                value={form.message}
                onChange={(v) => handleChange('message', v)}
                error={errors.message}
                required
              />

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-[rgb(var(--accent))] px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:shadow-glow-soft hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={17} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={17} />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <div
                  className="anim-enter flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-600 dark:text-green-400"
                  role="status"
                >
                  <CheckCircle2 size={18} />
                  Thank you! Your message has been sent. I will get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div
                  className="anim-enter flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-600 dark:text-red-400"
                  role="alert"
                >
                  <AlertCircle size={18} />
                  Something went wrong. Please try again, or reach out via email directly.
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

interface FormFieldProps {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
  type?: string;
  textarea?: boolean;
}

function FormField({
  label,
  id,
  value,
  onChange,
  error,
  required,
  type = 'text',
  textarea,
}: FormFieldProps) {
  const baseClass = `focus-ring w-full rounded-xl border bg-soft px-4 py-3 text-sm text-fg placeholder:text-fg-soft transition-colors ${
    error
      ? 'border-red-500/50 focus-visible:ring-red-500/40'
      : 'border-base focus-visible:border-[rgb(var(--accent))]/50'
  }`;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-fg">
        {label}
        {required && <span className="ml-0.5 text-[rgb(var(--accent-3))]">*</span>}
      </label>
      {textarea ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          rows={5}
          className={`${baseClass} resize-none`}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className={baseClass}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      )}
      {error && (
        <p id={`${id}-error`} className="anim-enter text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
