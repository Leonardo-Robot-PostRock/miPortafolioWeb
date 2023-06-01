import React from 'react';

import iphoneX from '../../assets/images/deviceShots/iphoneX.png';
import ipadMini from '../../assets/images/deviceShots/ipadMini.png';
import macBookPro16 from '../../assets/images/deviceShots/macBookPro16.png';

export const Portfolio = () => {
  return (
    <main className="h-screen min-w-280" id="portfolio">
      <section className="mt-20 flex flex-col justify-center">
        <h1 className="mb-5 text-center font-Raleway text-3xl dark:text-white">Portfolio</h1>
        <div className="flex h-full">
          <figure className="relative w-full">
            <figure className="z-10 flex w-full justify-evenly">
              <img className="top-0 z-10 h-44" src={iphoneX} alt="" />
              <img className="top-10 z-10 h-56" src={ipadMini} alt="" />
            </figure>
            <img className="top-0 z-0 w-full" src={macBookPro16} alt="" />
          </figure>
        </div>
      </section>
    </main>
  );
};
