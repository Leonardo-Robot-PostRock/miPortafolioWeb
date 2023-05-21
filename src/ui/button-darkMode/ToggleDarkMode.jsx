import React, { useEffect, useState } from 'react';
import './ToggleDarkMode.css';

export const ToggleDarkMode = ({ toggleDarkMode, darkMode, savedDarkMode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (savedDarkMode === 'true') {
      toggleDarkMode();
    }
    setLoading(false);
  }, []);

  const handleToggle = () => {
    toggleDarkMode();
  };

  return (
    <div className="toggleWrapper">
      {loading ? (
        <></>
      ) : (
        <>
          <input type="checkbox" onChange={handleToggle} checked={darkMode} className="dn" id="dn" />
          <label htmlFor="dn" className="toggle">
            <span className="toggle__handler">
              <span className="crater crater--1"></span>
              <span className="crater crater--2"></span>
              <span className="crater crater--3"></span>
            </span>
            <span className="star star--1"></span>
            <span className="star star--2"></span>
            <span className="star star--3"></span>
            <span className="star star--4"></span>
            <span className="star star--5"></span>
            <span className="star star--6"></span>
          </label>
        </>
      )}
    </div>
  );
};
