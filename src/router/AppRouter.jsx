import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../portafolioSections/components/Navbar';
import { LandingPage } from '../portafolioSections/page/LandingPage';
import { useDarkMode } from '../hooks/useDarkMode';

export const AppRouter = () => {
  const [darkMode, toggleDarkMode, savedDarkMode] = useDarkMode();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    document.documentElement.classList.toggle('light', !darkMode);
  }, [darkMode]);

  return (
    <div
      className={`mx-auto h-full w-full 
    ${darkMode ? 'dark' : 'light'}`}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} savedDarkMode={savedDarkMode} />
      <Routes>
        <Route path="/" element={<LandingPage darkMode={darkMode} />}></Route>
        {/* Provisorio */}
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
    </div>
  );
};
