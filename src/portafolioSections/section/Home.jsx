import React from 'react';
import foto from './../../assets/images/foto.png';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as Github } from '../../assets/icons/github.svg';
import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg';
import { PresentationWithEffects } from '../components/PresentationWithEffects';

export const Home = () => {
  return (
    <main
      className="flex min-w-280 flex-wrap place-content-center items-center bg-slate-100 font-victorMono sm:h-max md:h-screen"
      id="home">
      <section className="W-2/4 mt-10 items-end md:mt-32">
        <div className="relative flex justify-center align-middle">
          <figure className="absolute mt-20 flex justify-center rounded-full border-8 border-solid border-cyan-50 shadow-lg sm:top-0 md:-top-40 lg:-top-40">
            <img
              src={foto}
              alt=""
              className="flex h-40 w-full rounded-full border-4 border-solid border-cyan-700 lg:h-56"
            />
          </figure>
        </div>
        <div className="mt-40 flex h-64 w-64 flex-col place-content-end rounded-2xl bg-blue-200 shadow-lg sm:mt-40 sm:w-80 md:mt-0 md:w-80 lg:mt-10 lg:h-72 lg:w-96">
          <h1 className="text-16px text-center font-victorMonoBold text-cyan-900 lg:text-2xl">
            Leonardo Gabriel Puebla
          </h1>
          <h2 className="text-center font-dancingScript text-3xl text-cyan-900">FrontEnd Developer</h2>
          <div className="my-5 flex justify-center gap-6">
            <div className="flex h-max animate-pulse items-center rounded-lg border-2 border-solid border-cyan-800">
              <a href="https://twitter.com/LeonardoPu65507">
                <Twitter className="w-10 cursor-pointer fill-cyan-700" alt="red social Twitter" />
              </a>
            </div>
            <div className="flex animate-pulse items-center rounded-lg border-2 border-solid border-cyan-800">
              <a href="https://github.com/Leonardo-Robot-PostRock?tab=repositories">
                <Github className="w-10 cursor-pointer fill-cyan-700" alt="repositorio Github" />
              </a>
            </div>
            <div className="flex animate-pulse items-center rounded-lg border-2 border-solid border-cyan-800">
              <a href="https://www.linkedin.com/in/leonardo-puebla-1a2b71229/">
                <Linkedin className="w-10 cursor-pointer fill-cyan-700" alt="red social Linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="flex h-auto sm:w-max md:w-2/4">
        <PresentationWithEffects />
      </section>
    </main>
  );
};
