import React, { useEffect, useState } from 'react';

import { Home } from '../sections/Home';
import { About } from '../sections/About';
import { Portfolio } from '../sections/Portfolio';
import { Contact } from '../sections/Contact';
import { Skills } from '../sections/Skills';

export const Main = ({ darkMode }) => {
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
        <button
          className="backToTop fixed bottom-5 active:bg-cyan-300 right-5 z-50 h-10 w-10 rounded-[100%] bg-cyan-400 text-white shadow-md md:h-14 md:w-14"
          onClick={scrollToTop}>
          <span className="material-symbols-outlined">arrow_upward</span>
        </button>
      )}
    </main>
  );
};
