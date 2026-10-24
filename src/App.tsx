import { useState, useCallback, useEffect } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Skills } from '@/sections/Skills';
import { Projects } from '@/sections/Projects';
import { ProjectDetail } from '@/sections/ProjectDetail';
import { Experience } from '@/sections/Experience';
import { Journey } from '@/sections/Journey';
import { Achievements } from '@/sections/Achievements';
import { CodingProfiles } from '@/sections/CodingProfiles';
import { Contact } from '@/sections/Contact';
import { motion } from "framer-motion";

type View = { name: 'home' } | { name: 'project'; slug: string };

function App() {
  const { theme, toggleTheme } = useTheme();
  const [view, setView] = useState<View>({ name: 'home' });

  const handleSelectProject = useCallback((slug: string) => {
    setView({ name: 'project', slug });
  }, []);

  const handleBack = useCallback(() => {
    setView({ name: 'home' });
    requestAnimationFrame(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    });
  }, []);

  const handleHome = useCallback(() => {
    setView({ name: 'home' });
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }, []);

  useEffect(() => {
    if (view.name === 'project') {
      const project = view.slug
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase());
      document.title = `${project} — Bandi Gayathri Bhargavi`;
    } else {
      document.title = 'Bandi Gayathri Bhargavi — Aspiring Software Developer';
    }
  }, [view]);

  return (
    <div className="relative min-h-screen bg-base text-fg">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {view.name === 'home' ? (
        <main className="anim-fade-in">
          <Hero />
          <About />
          <Skills />
          <Projects onSelectProject={handleSelectProject} />
          <Experience />
          <Journey />
          <Achievements />
          <CodingProfiles />
          <Contact />
        </main>
      ) : (
        <main className="anim-fade-in" key={view.slug}>
          <ProjectDetail slug={view.slug} onBack={handleBack} onHome={handleHome} />
        </main>
      )}

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
