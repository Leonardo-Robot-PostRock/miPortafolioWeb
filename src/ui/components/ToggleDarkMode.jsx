import { useEffect, useState } from 'react';
import '../styles/ToggleDarkMode.css';

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
    <div className="relative overflow-hidden text-white">
      {loading ? (
        <></>
      ) : (
        <>
          <input
            className="dn absolute -left-[99px]"
            type="checkbox"
            onChange={handleToggle}
            checked={darkMode}
            id="dn"
          />
          <label
            htmlFor="dn"
            className="toggle relative ml-[10px] inline-block h-8 w-[70px] cursor-pointer rounded-[84px] bg-cyan-500 text-[18px] text-[#749ed7] transition-colors duration-200 ease-[cubic-bezier(0.445,0.05,0.55,0.95)] before:absolute before:-left-[50px] before:top-[15px] before:text-[18px] after:absolute after:-right-[58px] after:top-[15px]">
            <span className="toggle__handler relative left-[5px] top-[5px] z-[1] inline-block h-5 w-5 -rotate-45 rounded-[50px] bg-[#ffcf96] shadow-[0_2px_6px_rgba(0,0,0,0.3)] transition-all duration-[400ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]">
              <span className="absolute crater left-[4px] top-[10px] h-1 w-1 rounded-[100%] bg-[#e8cda5] transition-opacity duration-200 ease-in-out"></span>
              <span className="absolute crater left-[10px] top-[10px] h-[6px] w-[6px] rounded-[100%] bg-[#e8cda5] transition-opacity duration-200 ease-in-out"></span>
              <span className="absolute crater left-[10px] top-[3px] h-[5px] w-[5px] rounded-[100%] bg-[#e8cda5] transition-opacity duration-200 ease-in-out"></span>
            </span>
            <span className="star--1 absolute left-[18px] top-[7px] z-0 h-1 w-[30px] rounded-[50%] bg-white transition-all duration-300 ease-[cubic-bezier(0.445,0.05,0.55,0.95)]"></span>
            <span className="star--2 absolute left-[14px] top-[14px] z-[1] h-[3px] w-[26px] rounded-[50%] bg-white transition-all duration-300 ease-[cubic-bezier(0.445,0.05,0.55,0.95)]"></span>
            <span className="star--3 absolute left-4 top-5 z-0 h-[3px] w-[30px] rounded-[50%] bg-white transition-all duration-300 ease-[cubic-bezier(0.445,0.05,0.55,0.95)]"></span>
            <span className="star--4 absolute left-5 top-4 z-0 h-[2px] w-[2px] translate-x-3 transform rounded-[50%] bg-white opacity-0 transition-all duration-300 ease-[cubic-bezier(0.445,0.05,0.55,0.95)]"></span>
            <span className="star--5 absolute left-6 top-[10px] z-0 h-[3px] w-[3px] translate-x-3 transform rounded-[50%] bg-white opacity-0 transition-all duration-300 ease-[cubic-bezier(0.445,0.05,0.55,0.95)]"></span>
            <span className="star--6 absolute left-7 top-5 z-0 h-[2px] w-[2px] translate-x-3 transform rounded-[50%] bg-white opacity-0 transition-all duration-300 ease-[cubic-bezier(0.445,0.05,0.55,0.95)]"></span>
          </label>
        </>
      )}
    </div>
  );
};
