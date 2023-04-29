import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex min-w-280 items-center justify-between flex-wrap bg-white shadow-lg p-4 text-cyan-600 font-baskerville">
      <div className="flex items-center flex-shrink-0 lg:ml-20 mr-6 lg:mr-72">
        <h2 className="w-100 h-10 font-dancingScript mr-2 text-5xl">Leolux</h2>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400">
          <svg
            className={`fill-current h-5 w-5 ${isOpen ? 'hidden' : 'block'}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow mt-10 lg:flex lg:items-center lg:justify-end lg:w-auto lg:mt-0 ${
          isOpen ? 'block' : 'hidden'
        }`}>
        <div className="sm:text-sm md:text-lg lg:flex lg:flex-grow lg:justify-end lg:mr-20">
          <NavLink
            className={({ isActive }) =>
              `max-w-max block lg:inline-block text-cyan-600 hover:text-gray-400 transition duration-300 py-3 mr-4 lg:mt-0 ${
                isActive ? 'border-b-4 border-cyan-800' : ''
              }`
            }
            to={'/'}>
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `max-w-max block lg:inline-block text-cyan-600 hover:text-gray-400 transition duration-300 py-3 mr-4 lg:mt-0 ${
                isActive ? 'border-b-4 border-cyan-800' : ''
              }`
            }
            to={'/portfolio'}>
            Portfolio
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `max-w-max block lg:inline-block text-cyan-600 hover:text-gray-400 transition duration-300 py-3 mr-4 lg:mt-0 ${
                isActive ? 'border-b-4 border-cyan-800' : ''
              }`
            }
            to={'/Contact'}>
            Contact
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `max-w-max block lg:inline-block text-cyan-600 hover:text-gray-400 transition duration-300 py-3 mr-4 lg:mt-0 ${
                isActive ? 'border-b-4 border-cyan-800' : ''
              }`
            }
            to={'/About'}>
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
