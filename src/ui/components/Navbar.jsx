import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg p-2 text-cyan-600 font-baskerville">
      <div className="max-w-7xl mx-auto px-4">
        <div class="flex justify-between">
          <div className="flex">
            <li className="mr-4 list-none font-dancingScript text-5xl">Leolux</li>
          </div>
          <div class="hidden md:flex items-center">
            <NavLink
              className={({ isActive }) =>
                `text-cyan-600 hover:text-gray-400 transition duration-300 py-3 mr-3 ${
                  isActive ? 'border-b-4 border-cyan-800' : ''
                }`
              }
              to={'/'}>
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-cyan-600 hover:text-gray-400 transition duration-300 py-3 mr-3 ${
                  isActive ? 'border-b-4 border-cyan-800' : ''
                }`
              }
              to={'/portfolio'}>
              Portfolio
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-cyan-600 hover:text-gray-400 transition duration-300 py-3 mr-3 ${
                  isActive ? 'border-b-4 border-cyan-800' : ''
                }`
              }
              to={'/Contact'}>
              Contact
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-cyan-600 hover:text-gray-400 transition duration-300 py-3 mr-3 ${
                  isActive ? 'border-b-4 border-cyan-800' : ''
                }`
              }
              to={'/About'}>
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
