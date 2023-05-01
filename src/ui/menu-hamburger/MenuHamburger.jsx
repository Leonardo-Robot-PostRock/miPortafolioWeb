import React, { useEffect, useRef } from 'react';
import Hamburger from 'hamburger-react';

export const MenuHamburger = ({ isOpen, setIsOpen }) => {
  const btnRef = useRef();

  useEffect(() => {
    const closeMenu = (e) => {
      const path = e.path || (e.composedPath && e.composedPath());
      console.log(e.composedPath());
      if (!path.includes(btnRef.current)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener('click', closeMenu);

    return () => document.body.removeEventListener('click', closeMenu);
  }, []);

  return (
    <div ref={btnRef} className="block lg:hidden">
      <Hamburger toggled={isOpen} toggle={setIsOpen} />
    </div>
  );
};
