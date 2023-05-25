import React from 'react';
import foto from './../../assets/images/foto.png';
import fotoWhite from './../../assets/images/foto_bgWhite.jpg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as Github } from '../../assets/icons/github.svg';
import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg';

export const Home = ({ darkMode }) => {
  return (
    <main
      className="flex h-screen min-w-280 flex-col place-content-center items-center bg-slate-100 font-victorMono dark:bg-neutral-900 dark:text-slate-300 md:mx-28"
      id="home">
      <section className="flex justify-center">
        <div className="md:mt-20">
          <figure className="lg:w-50 mx-auto mb-5 mt-32 w-60 justify-center rounded-full border-4 border-solid border-neutral-50 shadow-lg dark:border-sky-400 dark:shadow-none md:mt-10 md:w-60 lg:border-8 2xl:w-96">
            {!darkMode ? (
              <img
                src={fotoWhite}
                alt=""
                className="w-full rounded-full border-4 border-solid border-sky-400 dark:border-neutral-900 lg:border-4"
              />
            ) : (
              <img
                src={foto}
                alt=""
                className="w-full rounded-full border-4 border-solid border-sky-400 dark:border-neutral-900 lg:border-4"
              />
            )}
          </figure>
          <h2 className="px-2 text-center font-victorMonoBold text-3xl text-neutral-950 dark:text-white md:text-3xl lg:text-4xl lg:tracking-wider xl:mb-5 xl:text-4xl xl:tracking-widest">
            Hello, I'm
          </h2>
          <p className="mb-4 mt-2 text-center font-victorMonoBold text-4xl tracking-wider text-sky-400 xl:text-5xl 2xl:text-6xl">
            Leonardo
          </p>
          <h2 className="mt-3 px-1 text-center font-Raleway text-2xl tracking-wider text-neutral-950 dark:text-white sm:text-3xl md:text-3xl lg:text-4xl xl:mt-5 2xl:mt-10 2xl:text-5xl">
            FrontEnd Developer
          </h2>
          <div className="my-5 flex justify-center gap-6">
            <div className="flex h-max animate-pulse items-center rounded-lg border-2 border-solid border-sky-400">
              <a href="https://twitter.com/LeonardoPu65507">
                <Twitter
                  className="w-10 cursor-pointer fill-sky-400 dark:fill-white md:p-1 2xl:w-16 2xl:p-2"
                  alt="red social Twitter"
                />
              </a>
            </div>
            <div className="flex animate-pulse items-center rounded-lg border-2 border-solid border-sky-400">
              <a href="https://github.com/Leonardo-Robot-PostRock?tab=repositories">
                <Github
                  className="w-10 cursor-pointer fill-sky-400 dark:fill-white 2xl:w-16"
                  alt="repositorio Github"
                />
              </a>
            </div>
            <div className="flex animate-pulse items-center rounded-lg border-2 border-solid border-sky-400">
              <a href="https://www.linkedin.com/in/leonardo-puebla-1a2b71229/">
                <Linkedin
                  className="w-10 cursor-pointer fill-sky-400 dark:fill-white 2xl:w-16"
                  alt="red social Linkedin"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
