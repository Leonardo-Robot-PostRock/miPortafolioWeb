import React from 'react';
import foto from './../../assets/images/foto.png';

export const Home = () => {
  return (
    <main className="flex font-victorMono place-content-center items-center h-screen w-screen min-w-280" id="home">
      <div>
        <div className="flex justify-center align-middle border stroke-orange-400">
          <figure className="flex justify-center">
            <img src={foto} alt="" className="rounded-full h-40" />
          </figure>
        </div>
        <div>
          <h1>Leonardo Gabriel Puebla</h1>
          <h2>FrontEnd Developer</h2>
        </div>
      </div>
    </main>
  );
};
