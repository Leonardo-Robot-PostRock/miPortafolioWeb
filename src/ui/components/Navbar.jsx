import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { MenuHamburger } from '../menu-hamburger/MenuHamburger';
import { ToggleDarkMode } from '../button-darkMode/ToggleDarkMode';

export const Navbar = ({ toggleDarkMode, darkMode, savedDarkMode }) => {
  const [isActiveLink, setisActiveLink] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-10 flex w-screen min-w-280 flex-wrap items-center justify-between bg-white p-4 font-baskerville text-cyan-600 shadow-md dark:bg-gray-950 dark:text-gray-100">
      <div className="flex flex-shrink-0 flex-wrap items-center justify-center lg:mr-72">
        <h2 className="w-100 mx-4 h-10 font-dancingScript text-4xl md:mx-6 md:text-5xl">Leolux</h2>
        <ToggleDarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode} savedDarkMode={savedDarkMode} />
      </div>
      {/* Menu Hamburger */}
      <MenuHamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`block w-full flex-grow lg:mt-0 lg:flex lg:w-auto lg:items-center lg:justify-end ${
          isOpen ? 'animate__animated animate__fadeInRight block' : 'hidden'
        }`}>
        <div className="sm:text-sm md:text-lg lg:mr-20 lg:flex lg:flex-grow lg:justify-end">
          <HashLink
            onClick={() => setisActiveLink('home')}
            className={`mr-8 block max-w-max py-3 text-cyan-600 transition duration-300 hover:text-gray-400 dark:text-gray-200 dark:hover:text-green-400 lg:mt-0 lg:inline-block ${
              isActiveLink === 'home' ? 'border-b-2 border-cyan-800 dark:border-green-400' : ''
            }`}
            smooth
            to={'/#home'}>
            Home
          </HashLink>
          <HashLink
            onClick={() => setisActiveLink('about')}
            className={`mr-8 block max-w-max py-3 text-cyan-600 transition duration-300 hover:text-gray-400 dark:text-gray-100 dark:hover:text-green-400 lg:mt-0  lg:inline-block ${
              isActiveLink === 'about' ? 'border-b-2 border-cyan-800 dark:border-green-400' : ''
            }`}
            smooth
            to={'/#about'}>
            About
          </HashLink>
          <HashLink
            onClick={() => setisActiveLink('porfolio')}
            className={`mr-8 block max-w-max py-3 text-cyan-600 transition duration-300 hover:text-gray-400 dark:text-gray-200 dark:hover:text-green-400 lg:mt-0 lg:inline-block ${
              isActiveLink === 'porfolio' ? 'border-b-2 border-cyan-800 dark:border-green-400' : ''
            }`}
            smooth
            to={'/#portfolio'}>
            Portfolio
          </HashLink>
          <HashLink
            onClick={() => setisActiveLink('contact')}
            className={`mr-8 block max-w-max py-3 text-cyan-600 transition duration-300 hover:text-gray-400 dark:text-gray-200 dark:hover:text-green-400 lg:mt-0 lg:inline-block ${
              isActiveLink === 'contact' ? 'border-b-2 border-cyan-800 dark:border-green-400' : ''
            }`}
            smooth
            to={'/#contact'}>
            Contact
          </HashLink>
        </div>
      </div>
    </nav>
  );
};
