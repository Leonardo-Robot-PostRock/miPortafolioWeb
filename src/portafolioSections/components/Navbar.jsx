import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { MenuHamburger } from '../../ui/components/MenuHamburger';
import { ToggleDarkMode } from '../../ui/components/ToggleDarkMode';

export const Navbar = ({ toggleDarkMode, darkMode, savedDarkMode }) => {
  const [isActiveLink, setisActiveLink] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'skills', text: 'Skills' },
    { id: 'portfolio', text: 'Portfolio' },
    { id: 'contact', text: 'Contact' }
  ];

  const handleLinkClick = (id) => {
    setisActiveLink(id);
  };

  return (
    <nav className="fixed z-40 flex w-screen min-w-280 flex-wrap items-center justify-between bg-white p-4 font-Raleway text-neutral-950 shadow-md dark:bg-neutral-950 dark:text-gray-100">
      <div className="flex flex-shrink-0 flex-wrap items-center justify-center align-middle">
        <h2 className="w-100 mx-4 text-2xl md:mx-6 md:text-3xl">Leolux</h2>
        <ToggleDarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode} savedDarkMode={savedDarkMode} />
      </div>
      {/* Menu Hamburger */}
      <MenuHamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`block w-full flex-grow lg:mt-0 lg:flex lg:w-auto lg:items-center lg:justify-end ${
          isOpen ? 'animate__animated animate__fadeInRight block' : 'hidden'
        }`}>
        <div className="sm:text-sm md:text-lg lg:mr-20 lg:flex lg:flex-grow lg:justify-end">
          {navLinks.map((link) => (
            <HashLink
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`dark:hover:text-skborder-sky-400 mr-8 block max-w-max py-3 text-neutral-950 transition duration-300 hover:text-sky-500 dark:text-white dark:hover:text-sky-400 lg:mt-0 lg:inline-block ${
                isActiveLink === link.id ? 'border-b-2 border-sky-400 dark:border-sky-400' : ''
              }`}
              smooth
              to={`/#${link.id}`}>
              {link.text}
            </HashLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
