import React, { useEffect, useState } from 'react';

import iphoneX from '../../assets/images/deviceShots/iphoneX.png';
import ipadMini from '../../assets/images/deviceShots/ipadMini.png';
import macBookPro16 from '../../assets/images/deviceShots/macBookPro16.png';

export const Portfolio = () => {
  const [animation, setAnimation] = useState('');
  const [contador, setContador] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setContador((prevValue) => prevValue + 1);
      if (contador === 3) {
        setAnimation('animate__animated animate__fadeInDown');
        setContador(0);
      }
      setTimeout(() => {
        setAnimation('');
      }, 2000);
    }, [1000]);
  }, [contador]);

  return (
    <main className="h-screen min-w-280" id="portfolio">
      <section className="mt-20 flex flex-col justify-center">
        <h1 className="mb-5 text-center font-Raleway text-3xl dark:text-white">Portfolio</h1>
        <div className="flex h-full justify-center">
          <div className="relative">
            <img className="top-0 z-0 w-96" src={macBookPro16} alt="Mac Book Pro 16" />
            <figure className={`absolute top-44 z-10 flex w-full items-center justify-evenly ${animation}`}>
              <img className="h-44" src={iphoneX} alt="Iphone X" />
              <img className="h-72" src={ipadMini} alt="Ipad Mini" />
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
};
