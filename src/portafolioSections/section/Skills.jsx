import { ParticlesComponent } from '../components/Particle';

import React, { useState } from 'react';

export const Skills = ({ darkMode }) => {
  const [zIndex, setZIndex] = useState(true);
  const [count, setCount] = useState(0);

  const handleZIndex = () => {
    setZIndex((prevState) => !prevState);
    setCount((prevCount) => prevCount + 1);
    if (count === 2) {
      setCount(0);
    }
  };

  return (
    <main className="relavite flex h-screen min-w-280 flex-col items-center justify-center md:mx-0" id="skills">
      <h1
        className={`z-30 mb-96 flex cursor-pointer items-center  rounded-lg p-3 text-center font-Raleway text-4xl 
        transition-colors duration-500 hover:bg-sky-400 hover:text-white hover:transition-all hover:duration-500 dark:text-white hover:dark:rounded-lg hover:dark:bg-sky-400 
        hover:dark:text-white sm:mb-64 md:mb-72 md:text-5xl 2xl:mb-80 2xl:text-6xl ${
          count === 2 ? 'animate-pulse opacity-5 hover:bg-inherit hover:text-current dark:hover:bg-inherit' : ''
        }`}
        onClick={handleZIndex}>
        <span className="material-symbols-outlined pr-2">left_click</span>
        Skills
      </h1>
      <section className={`absolute mx-auto min-w-280 ${zIndex === true ? 'z-20' : count === 1 && 'z-20'}`}>
        <div className={`mx-2 rounded-lg p-4 md:mx-52 2xl:mx-auto 2xl:w-7/12 2xl:p-16 ${count === 2 ? 'hidden' : ''}`}>
          <h3 className="mb-1 font-Kanit text-2xl dark:text-white 2xl:mb-4 2xl:text-4xl">Tengo conocimientos en:</h3>
          <p className=" font-victorMono text-sm dark:text-white 2xl:text-lg">
            Node.js, JS, Angular, React, Angular Material, PrimeNG, PrimeFlex, MaterialUi,Tailwind CSS, CSS, HTML,
            Webpack, Vite, sql, mysql y mongodb. Experiencia en desarrollo web frontend y backend, creación de
            aplicaciones dinámicas, gestión del estado y diseño de interfaces atractivas y funcionales.
          </p>
        </div>
      </section>
      <ParticlesComponent darkMode={darkMode} id="tsparticles" zIndex={zIndex} count={count} />
    </main>
  );
};
