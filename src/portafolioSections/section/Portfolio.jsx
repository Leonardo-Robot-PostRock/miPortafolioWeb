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
    <main className="h-max min-w-280 font-victorMono dark:text-white md:h-screen" id="portfolio">
      <section className="mb-24 mt-24 flex min-w-280 flex-col flex-wrap justify-center">
        <h1 className="mb-5 text-center font-Raleway text-3xl dark:text-white">Portfolio</h1>
        <p className="mx-5 mb-10 p-1 md:text-center">
          Proyecto de publicidad para el mundial de fútbol 2022 para LatinAd.
        </p>
        <div className="mx-auto h-full md:grid md:grid-cols-6 md:gap-32 2xl:mx-96">
          <div className="relative mx-2 flex w-56 flex-col justify-center p-1 xs:mx-auto xs:w-60 375:w-80 md:col-span-3 md:w-96">
            <img
              className={`animate__animated z-0 xs:mx-auto xs:w-72 375:w-80 md:mx-0 md:w-full ${animationTwo}`}
              src={macBookPro16}
              alt="Mac Book Pro 16"
            />
            <img
              className={`animate__animated absolute right-5 z-20 w-24 xs:right-5 xs:top-20 xs:w-24 375:top-28 375:w-36 md:bottom-64 md:right-10 md:w-44 ${animation}`}
              src={iphoneX}
              alt="Iphone X"
            />
            <img
              className={`animate__animated absolute -right-4 w-20 xs:-right-4 xs:top-10 xs:w-20 375:top-16 375:w-28 md:-right-2 md:w-32 ${animation}`}
              src={ipadMini}
              alt="Ipad Mini"
            />
          </div>
          <div className="relative bottom-8 mx-5 leading-6 dark:text-white md:col-span-3 md:flex md:w-72 md:items-center 2xl:w-96">
            <p className="p-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, doloremque maiores vel et maxime
              harum pariatur commodi placeat a nostrum minus ex porro officia aliquid nisi sed ratione! Ducimus
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
