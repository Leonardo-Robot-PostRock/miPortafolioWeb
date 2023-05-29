import { ParticlesComponent } from '../components/Particle';

import React from 'react';

export const Skills = (darkMode) => {
  return (
    <main className="relavite flex h-screen min-w-280 justify-center md:mx-0" id="skills">
      <section className="absolute mx-auto min-w-280">
        <h1 className="mb-5 mt-32 text-center font-Raleway text-2xl dark:text-white md:mb-10 md:text-5xl">Skills</h1>
        <div className="mx-2 rounded-lg p-4 md:mx-52 2xl:mx-auto 2xl:w-7/12 2xl:p-16">
          <h3 className="mb-1 font-Kanit text-2xl dark:text-white 2xl:mb-4 2xl:text-4xl">Tengo conocimientos en:</h3>
          <p className=" font-victorMono text-sm dark:text-white 2xl:text-2xl">
            Node.js, JS, Angular, React, Angular Material, PrimeNG, PrimeFlex, Tailwind CSS, CSS, HTML, Webpack, sql, mysql, mongodb y
            Vite. Experiencia en desarrollo web frontend y backend, creación de aplicaciones dinámicas, gestión del
            estado y diseño de interfaces atractivas y funcionales.
          </p>
        </div>
      </section>
      <ParticlesComponent className="absolute" darkMode={darkMode} id="skills" />
    </main>
  );
};
