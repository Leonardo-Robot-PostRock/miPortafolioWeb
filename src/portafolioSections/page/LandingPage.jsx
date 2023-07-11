import React, { useEffect, useState } from 'react';

import { Home } from '../sections/Home';
import { About } from '../sections/About';
import { Portfolio } from '../sections/Portfolio';
import { Contact } from '../sections/Contact';
import { Skills } from '../sections/Skills';
import { Footer } from '../components/Footer';
import { GoHome } from '../../ui/components/GoHome';

export const LandingPage = ({ darkMode }) => {
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    };
    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <main className="relative divide-y-8 divide-transparent bg-slate-100 font-victorMono dark:bg-neutral-900">
      <Home darkMode={darkMode} />
      <About />
      <Skills darkMode={darkMode} />
      <Portfolio darkMode={darkMode} />
      <Contact />
      {scrollTop && (
        <GoHome
          arrowMaterialSymbols={'arrow_upward'}
          scrollToTop={scrollToTop}
        />
      )}
      <Footer />
    </main>
  );
};
