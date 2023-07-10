import React from 'react';
import { Home } from '../sections/Home';
import { About } from '../sections/About';
import { Portfolio } from '../sections/Portfolio';
import { Contact } from '../sections/Contact';
import { Skills } from '../sections/Skills';

export const Main = ({ darkMode }) => {
  return (
    <main className="divide-y-8 divide-transparent bg-slate-100 font-victorMono dark:bg-neutral-900">
      <Home darkMode={darkMode} />
      <About />
      <Skills darkMode={darkMode} />
      <Portfolio darkMode={darkMode} />
      <Contact />
    </main>
  );
};
