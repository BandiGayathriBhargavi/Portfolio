import { useEffect, useState } from 'react';

const roles = [
  'Software Developer',
  'Problem Solver',
  'AI/ML Explorer',
  'Salesforce Developer',
  'Continuous Learner',
];

export function useTypingEffect(speed = 90, pause = 1800) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setText(roles[0]);
      return;
    }

    let charIndex = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = roles[index];
      if (!deleting) {
        charIndex++;
        setText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timeout = setTimeout(tick, pause);
          return;
        }
      } else {
        charIndex--;
        setText(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          setIndex((i) => (i + 1) % roles.length);
          timeout = setTimeout(tick, speed);
          return;
        }
      }
      timeout = setTimeout(tick, deleting ? speed / 2 : speed);
    };

    timeout = setTimeout(tick, speed);
    return () => clearTimeout(timeout);
  }, [index, speed, pause]);

  return text;
}
