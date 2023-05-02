import React from 'react';
import foto from './../../assets/images/foto.png';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as Github } from '../../assets/icons/github.svg';
import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg';

export const Home = () => {
  return (
    <main className="flex bg-blue-100 font-victorMono place-content-center items-center h-screen min-w-280" id="home">
      <div className="mt-40 items-end">
        <div className="flex justify-center relative align-middle">
          <figure className="flex justify-center absolute -top-24 shadow-lg rounded-full border-8 border-solid border-cyan-50">
            <img src={foto} alt="" className="w-full border-4 border-solid border-cyan-700 rounded-full h-48 lg:h-56" />
          </figure>
        </div>
        <div className="flex flex-col px-4 w-64 lg:w-96 bg-blue-200 shadow-lg rounded-2xl mt-6 h-72 place-content-end">
          <h1 className="text-16px lg:text-2xl font-victorMonoBold text-center text-cyan-900">
            Leonardo Gabriel Puebla
          </h1>
          <h2 className="text-3xl font-dancingScript text-center text-cyan-900">FrontEnd Developer</h2>
          <div className="flex justify-evenly my-5">
            <div className="flex items-center rounded-lg h-max border-solid border-2 border-cyan-800">
              <Twitter className="w-10 fill-cyan-700" />
            </div>
            <div className="flex items-center rounded-lg border-solid border-2 border-cyan-800">
              <Github className="w-10 fill-cyan-700" />
            </div>
            <div className="flex items-center rounded-lg border-solid border-2 border-cyan-800">
              <Linkedin className="w-10 fill-cyan-700" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
