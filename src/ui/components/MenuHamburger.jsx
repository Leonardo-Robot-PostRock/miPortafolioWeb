import React, { useEffect, useRef } from 'react';
import Hamburger from 'hamburger-react';

export const MenuHamburger = ({ isOpen, setIsOpen }) => {
  const btnRef = useRef();

  //se selecciona elemento del componente ToggleDarkMode por querySelector
  const toggleEventDarkMode = document.querySelector('.toggleWrapper');

  useEffect(() => {
    const closeMenu = (e) => {
      const path = e.path || (e.composedPath && e.composedPath());
      if (toggleEventDarkMode && toggleEventDarkMode.contains(e.target)) return;
      if (!path.includes(btnRef.current)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener('click', closeMenu);

    return () => document.body.removeEventListener('click', closeMenu);
  }, [btnRef]);

  return (
    <div ref={btnRef} className="block lg:hidden">
      <Hamburger toggled={isOpen} toggle={setIsOpen} />
    </div>
  );
};
