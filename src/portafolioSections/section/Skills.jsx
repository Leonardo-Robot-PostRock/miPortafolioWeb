import { ParticlesComponent } from '../components/Particle';
import React, { useState } from 'react';

export const Skills = ({ darkMode }) => {
  const [zIndex, setZIndex] = useState(true);
  const [count, setCount] = useState(0);

  const handleZIndex = () => {
    setCount((prevCount) => prevCount + 1);
    if (count === 3) {
      setZIndex((prevState) => !prevState);
      setCount(0);
    }
  };

  return (
    <main
      className={`relavite flex h-screen min-w-280 flex-col items-center justify-center text-black dark:text-white md:mx-0`}
      id="skills">
      {/* Estilos dinámicos para h1 */}
      <h1
        className={`z-30 mb-96 flex cursor-pointer items-center rounded-lg p-3 text-center font-Raleway text-4xl 
      transition-colors duration-500 hover:bg-sky-400 hover:text-white hover:transition-all hover:duration-500 dark:text-white hover:dark:rounded-lg hover:dark:bg-sky-400 
      hover:dark:text-white sm:mb-64 md:mb-72 md:text-5xl 2xl:mb-80 2xl:text-6xl ${
        count === 0
          ? 'animate-bounce opacity-100 hover:bg-inherit hover:text-current dark:hover:bg-none'
          : count === 3
          ? 'animate-pulse opacity-5 hover:bg-inherit hover:text-current dark:hover:bg-none'
          : ''
      }`}
        onClick={handleZIndex}>
        <span className="material-symbols-outlined pr-2">left_click</span>
        Skills
      </h1>

      {/* section de habilidades con distintos estilos dependiendo de count */}
      <section
        className={`absolute mx-auto min-w-280 md:mt-28 ${
          count === 1
            ? 'hidden'
            : count === 0
            ? 'animate__animated animate__fadeInRight animate__faster z-20'
            : count === 2
            ? 'text-neutral-800 dark:text-white'
            : count === 3 && 'hidden'
        }`}>
        <div
          className={`mx-2 mt-10 rounded-lg p-4 md:mx-52 md:mt-0 2xl:mx-auto 2xl:w-7/12 2xl:p-16 ${
            count === 3 ? 'hidden' : 'z-0'
          }`}>
          <div
            className={`font-victorMono text-sm 2xl:text-lg ${
              count === 0
                ? 'relative z-20 inline-block p-3 before:absolute before:inset-0 before:block before:-skew-y-1 before:bg-neutral-200 dark:text-white dark:before:bg-sky-950 sm:p-4 md:p-10 md:before:-skew-y-1 2xl:before:-skew-y-2'
                : ''
            }`}>
            <h3
              className={`animate__animated animate__bounceInLeft relative mb-1 font-Kanit text-2xl dark:text-white 2xl:mb-4 2xl:text-4xl ${
                count === 0 ? 'animate__delay-1s' : ''
              }`}>
              Tengo conocimientos en:
            </h3>
            <p
              className={`animate__animated animate__bounceInLeft relative dark:text-white ${
                count === 0 ? 'animate__delay-1s' : ''
              }`}>
              Node.js, JS, Angular, React, Angular Material, PrimeNG, PrimeFlex,
              MaterialUi,Tailwind CSS, CSS, HTML, Webpack, Vite, sql, mysql y
              mongodb. Experiencia en desarrollo web frontend y backend,
              creación de aplicaciones dinámicas, gestión del estado y diseño de
              interfaces atractivas y funcionales.
            </p>
          </div>
        </div>
      </section>
      <ParticlesComponent
        darkMode={darkMode}
        id="tsparticles"
        zIndex={zIndex}
        count={count}
      />
    </main>
  );
};
