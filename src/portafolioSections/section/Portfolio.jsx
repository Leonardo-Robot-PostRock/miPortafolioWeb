import React, { useEffect, useState } from 'react';

import iphoneX from '../../assets/images/deviceShots/iphoneX.png';
import ipadMini from '../../assets/images/deviceShots/ipadMini.png';
import macBookPro16 from '../../assets/images/deviceShots/macBookPro16.png';

export const Portfolio = () => {
  const [animation, setAnimation] = useState('');
  const [animationTwo, setAnimationTwo] = useState('');
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setContador((prevValue) => prevValue + 1);

      if (contador === 3) {
        setAnimation('animate__fadeInDown');
        setAnimationTwo('animate__fadeInLeft');
        setContador(0);
      }
      setTimeout(() => {
        setAnimation('');
        setAnimationTwo('');
        return clearTimeout(timeout);
      }, 2000);
    }, [1000]);
  }, [contador]);

  return (
    <main className="h-screen min-w-280" id="portfolio">
      <section className="mt-20 flex flex-col justify-center">
        <h1 className="mb-5 text-center font-Raleway text-3xl dark:text-white">Portfolio</h1>
        <div className="flex h-full justify-center">
          <div className="relative">
            <img className={`animate__animated z-0 w-96 ${animationTwo}`} src={macBookPro16} alt="Mac Book Pro 16" />
            <figure className={`animate__animated abosolute z-10 flex w-full items-center justify-evenly ${animation}`}>
              <img className="relative z-20 h-44  md:-right-44 md:bottom-64" src={iphoneX} alt="Iphone X" />
              <img className="relative h-72 md:-right-20 md:bottom-72" src={ipadMini} alt="Ipad Mini" />
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
};
