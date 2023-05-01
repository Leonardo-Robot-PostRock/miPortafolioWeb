import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../ui/components/Navbar';
import { Main } from '../portafolioSections/pages/Main';

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        {/* Provisorio */}
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
    </>
  );
};
