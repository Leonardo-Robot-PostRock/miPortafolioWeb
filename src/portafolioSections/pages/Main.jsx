import React from 'react';
import { Home } from '../section/Home';
import { About } from '../section/About';
import { Portfolio } from '../section/Portfolio';
import { Contact } from './../section/Contact';

export const Main = () => {
  return (
    <>
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
};
