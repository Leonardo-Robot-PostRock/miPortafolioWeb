import React from 'react';
import { Home } from '../section/Home';
import { About } from '../section/About';
import { Portfolio } from '../section/Portfolio';
import { Contact } from './../section/Contact';

export const Main = ({ darkMode }) => {
  return (
    <main className="bg-slate-100 dark:bg-neutral-900">
      <Home darkMode={darkMode} />
      <About />
      <Portfolio />
      <Contact />
    </main>
  );
};
