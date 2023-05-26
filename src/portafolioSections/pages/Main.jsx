import React from 'react';
import { Home } from '../section/Home';
import { About } from '../section/About';
import { Portfolio } from '../section/Portfolio';
import { Contact } from './../section/Contact';
import { Skills } from '../section/Skills';

export const Main = ({ darkMode }) => {
  return (
    <main className="divide-y-8 divide-double divide-sky-400 bg-slate-100 font-victorMono dark:bg-neutral-900">
      <Home darkMode={darkMode} />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  );
};
