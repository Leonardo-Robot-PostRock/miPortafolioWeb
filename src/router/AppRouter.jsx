import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../ui/components/Navbar';
import { Main } from '../portafolioSections/pages/Main';
import { useState } from 'react';

export const AppRouter = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        {/* Provisorio */}
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
    </>
  );
};
