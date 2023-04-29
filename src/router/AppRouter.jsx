import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from '../portafolioSections/pages/About';
import { Contact } from '../portafolioSections/pages/Contact';
import { Home } from '../portafolioSections/pages/Home';
import { Portfolio } from '../portafolioSections/pages/Portfolio';
import { Navbar } from '../ui/components/Navbar';

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Portfolio" element={<Portfolio />}></Route>
        <Route path="About" element={<About />}></Route>
        <Route path="Contact" element={<Contact />}></Route>
        {/* Provisorio */}
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
    </>
  );
};
