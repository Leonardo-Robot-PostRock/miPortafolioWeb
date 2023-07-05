import React, { useEffect } from 'react';
import foto from './../../assets/images/foto.png';
import fotoWhite from './../../assets/images/foto_bgWhite.jpg';
import { ReactComponent as Twitter } from '../../assets/icons/social/twitter.svg';
import { ReactComponent as Github } from '../../assets/icons/social/github.svg';
import { ReactComponent as Linkedin } from '../../assets/icons/social/linkedin.svg';

export const Home = ({ darkMode }) => {
  useEffect(() => {
    const imageUrls = [foto, fotoWhite];
    imageUrls.forEach((imageUrl) => {
      const image = new Image();
      image.src = imageUrl;
    });
  }, []);

  return (
    <main
      className="flex h-screen min-w-280 place-content-center items-center bg-slate-100 font-victorMono dark:bg-neutral-900 md:mx-28 md:mb-20"
      id="home">
      <section className="mt-32 flex justify-center md:mt-14 2xl:my-20">
        <div className="md:mt-16 2xl:mt-24">
          <figure className="lg:w-50 mx-auto mb-5 w-44 justify-center rounded-full border-4 border-solid border-neutral-300 shadow-lg dark:border-neutral-950 dark:shadow-none md:mt-10 md:w-44 lg:border-8 2xl:w-72">
            {!darkMode ? (
              <img
                src={fotoWhite}
                alt="Leonardo Puebla"
                className="w-full rounded-full border-4 border-solid border-sky-400 brightness-105 lg:border-4"
                width={44}
                height={44}
              />
            ) : (
              <img
                src={foto}
                alt="Leonardo Puebla"
                className="w-full rounded-full border-4 border-solid border-sky-400 contrast-125 lg:border-4"
                width={44}
                height={44}
              />
            )}
          </figure>
          <h2 className="px-2 text-center font-Kanit text-3xl text-neutral-950 dark:text-white md:text-3xl lg:text-3xl lg:tracking-wider xl:text-4xl xl:tracking-widest">
            Hello, I'm
          </h2>
          <p className="mb-4 text-center font-Raleway text-4xl tracking-wider text-sky-400 lg:text-4xl xl:text-5xl 2xl:text-6xl">
            Leonardo
          </p>
          <h2 className="xl:text-1xl mt-3 px-1 text-center font-victorMonoBold text-2xl tracking-wider text-neutral-950 dark:text-white sm:text-3xl md:text-3xl lg:text-2xl xl:mt-5 2xl:my-10 2xl:text-5xl">
            FrontEnd Developer
          </h2>
          <div className="my-5 flex justify-center gap-6">
            <div className="flex h-max animate-pulse items-center rounded-lg border-2 border-solid border-sky-400 dark:border-white">
              <a href="https://twitter.com/LeonardoPu65507">
                <Twitter
                  className="w-10 cursor-pointer fill-sky-400 p-1 dark:fill-white 2xl:w-16 2xl:p-2"
                  alt="red social Twitter"
                />
              </a>
            </div>
            <div className="flex animate-pulse items-center rounded-lg border-2 border-solid border-sky-400 dark:border-white">
              <a href="https://github.com/Leonardo-Robot-PostRock?tab=repositories">
                <Github
                  className="w-10 cursor-pointer fill-sky-400 dark:fill-white 2xl:w-16"
                  alt="repositorio Github"
                />
              </a>
            </div>
            <div className="flex animate-pulse items-center rounded-lg border-2 border-solid border-sky-400 dark:border-white">
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
