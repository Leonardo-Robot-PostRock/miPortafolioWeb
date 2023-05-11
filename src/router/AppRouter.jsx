import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../ui/components/Navbar';
import { Main } from '../portafolioSections/pages/Main';
import { useState } from 'react';

export const AppRouter = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
    console.log();
  };

  return (
    <div
      className={`mx-auto h-full w-full 
    ${darkMode ? 'dark' : ''}`}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        {/* Provisorio */}
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
    </div>
  );
};
