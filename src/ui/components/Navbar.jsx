import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="p-2 bg-black text-cyan-600 font-baskerville">
      <div className="flex justify-between">
        <ul className="flex">
          <li className="font-dancingScript text-3xl">Leolux</li>
        </ul>
        <div className="flex justify-end">
          <NavLink
            className={({ isActive }) =>
              `text-cyan-600 hover:text-gray-400 py-2 mr-3 ${isActive ? 'border-b-4 border-cyan-800' : ''}`
            }
            to={'/'}>
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `text-cyan-600 hover:text-gray-400 py-2 mr-3 ${isActive ? 'border-b-4 border-cyan-800' : ''}`
            }
            to={'/portfolio'}>
            Portfolio
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `text-cyan-600 hover:text-gray-400 py-2 mr-3 ${isActive ? 'border-b-4 border-cyan-800' : ''}`
            }
            to={'/Contact'}>
            Contact
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `text-cyan-600 hover:text-gray-400 py-2 mr-3 ${isActive ? 'border-b-4 border-cyan-800' : ''}`
            }
            to={'/About'}>
            About
          </NavLink>
        </div>
      </div>
    </div>
  );
};
