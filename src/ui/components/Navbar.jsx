import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { MenuHamburger } from '../menu-hamburger/MenuHamburger';

export const Navbar = () => {
  const [isActiveLink, setisActiveLink] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex min-w-280 w-screen items-center justify-between flex-wrap bg-white shadow-lg p-4 text-cyan-600 font-baskerville fixed">
      <div className="flex items-center flex-shrink-0 lg:ml-20 mr-6 lg:mr-72">
        <h2 className="w-100 h-10 font-dancingScript mr-2 text-5xl">Leolux</h2>
      </div>
      {/* Menu Hamburger */}
      <MenuHamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`w-full block flex-grow mt-10 lg:flex lg:items-center lg:justify-end lg:w-auto lg:mt-0 animate__animated animate__fadeInRight ${
          isOpen ? 'block' : 'hidden'
        }`}>
        <div className="sm:text-sm md:text-lg lg:flex lg:flex-grow lg:justify-end lg:mr-20">
          <HashLink
            onClick={() => setisActiveLink('home')}
            className={`max-w-max block lg:inline-block text-cyan-600 hover:text-gray-400 transition duration-300 py-3 mr-8 lg:mt-0 ${
              isActiveLink === 'home' ? 'border-b-4 border-cyan-800' : ''
            }`}
            smooth
            to={'/#home'}>
            Home
          </HashLink>
          <HashLink
            onClick={() => setisActiveLink('about')}
            className={`max-w-max block lg:inline-block text-cyan-600 hover:text-gray-400 transition duration-300 py-3 mr-8 lg:mt-0 ${
              isActiveLink === 'about' ? 'border-b-4 border-cyan-800' : ''
            }`}
            smooth
            to={'/#about'}>
            About
          </HashLink>
          <HashLink
            onClick={() => setisActiveLink('porfolio')}
            className={`max-w-max block lg:inline-block text-cyan-600 hover:text-gray-400 transition duration-300 py-3 mr-8 lg:mt-0 ${
              isActiveLink === 'porfolio' ? 'border-b-4 border-cyan-800' : ''
            }`}
            smooth
            to={'/#portfolio'}>
            Portfolio
          </HashLink>
          <HashLink
            onClick={() => setisActiveLink('contact')}
            className={`max-w-max block lg:inline-block text-cyan-600 hover:text-gray-400 transition duration-300 py-3 mr-8 lg:mt-0 ${
              isActiveLink === 'contact' ? 'border-b-4 border-cyan-800' : ''
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
