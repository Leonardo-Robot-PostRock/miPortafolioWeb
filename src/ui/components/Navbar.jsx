import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { MenuHamburger } from '../menu-hamburger/MenuHamburger';
import { ToggleDarkMode } from '../button-darkMode/ToggleDarkMode';

export const Navbar = ({ toggleDarkMode, darkMode, savedDarkMode }) => {
  const [isActiveLink, setisActiveLink] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-10 flex w-screen min-w-280 flex-wrap items-center justify-between bg-white p-4 font-Raleway text-neutral-950 shadow-md dark:bg-neutral-950 dark:text-gray-100">
      <div className="flex flex-shrink-0 flex-wrap items-center justify-center align-middle lg:mr-72">
        <h2 className="w-100 mx-4 text-2xl md:mx-6 md:text-4xl">Leolux</h2>
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
            className={`dark:hover:text-skborder-sky-400 mr-8 block max-w-max py-3 text-neutral-950 transition duration-300 hover:text-sky-500 dark:text-white dark:hover:text-sky-400 lg:mt-0 lg:inline-block ${
              isActiveLink === 'home' ? 'border-b-2 border-sky-400 dark:border-sky-400' : ''
            }`}
            smooth
            to={'/#home'}>
            Home
          </HashLink>
          <HashLink
            onClick={() => setisActiveLink('about')}
            className={`dark:hover:text-skborder-sky-400 mr-8 block max-w-max py-3 text-neutral-950 transition duration-300 hover:text-sky-500 dark:text-white dark:hover:text-sky-400 lg:mt-0  lg:inline-block ${
              isActiveLink === 'about' ? 'border-b-2 border-sky-400 dark:border-sky-400' : ''
            }`}
            smooth
            to={'/#about'}>
            About
          </HashLink>
          <HashLink
            onClick={() => setisActiveLink('skills')}
            className={`dark:hover:text-skborder-sky-400 mr-8 block max-w-max py-3 text-neutral-950 transition duration-300 hover:text-sky-500 dark:text-white dark:hover:text-sky-400 lg:mt-0  lg:inline-block ${
              isActiveLink === 'skills' ? 'border-b-2 border-sky-400 dark:border-sky-400' : ''
            }`}
            smooth
            to={'/#skills'}>
            Skills
          </HashLink>
          <HashLink
            onClick={() => setisActiveLink('porfolio')}
            className={`dark:hover:text-skborder-sky-400 mr-8 block max-w-max py-3 text-neutral-950 transition duration-300 hover:text-sky-500 dark:text-white dark:hover:text-sky-400 lg:mt-0 lg:inline-block ${
              isActiveLink === 'porfolio' ? 'border-b-2 border-sky-400 dark:border-sky-400' : ''
            }`}
            smooth
            to={'/#portfolio'}>
            Portfolio
          </HashLink>
          <HashLink
            onClick={() => setisActiveLink('contact')}
            className={`dark:hover:text-skborder-sky-400 mr-8 block max-w-max py-3 text-neutral-950 transition duration-300 hover:text-sky-500 dark:text-white dark:hover:text-sky-400 lg:mt-0 lg:inline-block ${
              isActiveLink === 'contact' ? 'border-b-2 border-sky-400 dark:border-sky-400' : ''
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
