import React, { lazy, useEffect, useRef } from 'react';

import iphoneX from '../../assets/images/deviceShots/iphoneX.png';
import ipadMini from '../../assets/images/deviceShots/ipadMini.png';
import macBookPro16 from '../../assets/images/deviceShots/macBookPro16.png';

const AudioPlayer = lazy(() => import('../components/AudioPlayer'));

import { usePortfolioHooks } from '../hooks/usePortfolioHooks';

export const Portfolio = () => {
  const [animation, animationTwo, songs, setSongs, isPlaying, setIsPlaying, currentSong, setCurrentSong] =
    usePortfolioHooks();

  const audioElem = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isPlaying, currentSong]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({ ...currentSong, progress: (ct / duration) * 100, length: duration });
  };

  return (
    <main className="h-max min-w-280 font-victorMono text-black  md:h-screen" id="portfolio">
      <section className="mt-24 flex min-w-280 flex-col flex-wrap justify-center">
        <h1 className="mb-10 text-center font-Raleway text-3xl dark:text-white md:text-5xl">Portfolio</h1>
        <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
        <AudioPlayer
          songs={songs}
          setSongs={setSongs}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioElem={audioElem}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
        />
        <p className="mx-5 mt-4 p-1 dark:text-white md:text-center">
          Proyecto de publicidad para el mundial de fútbol 2022 para LatinAd.
        </p>
        <div className="mx-auto h-full md:grid md:grid-cols-6 md:gap-32 2xl:mx-96">
          <div className="relative mx-2 flex w-56 flex-col justify-center overflow-hidden p-1 xs:mx-auto xs:w-60 375:w-80 md:col-span-3 md:w-96 md:overflow-visible">
            <img
              className={`animate__animated z-0 xs:mx-auto xs:w-72 375:w-80 md:mx-0 md:w-full ${animationTwo}`}
              src={macBookPro16}
              alt="Mac Book Pro 16 publicidad mundial"
            />
            <img
              className={`animate__animated absolute right-5 z-20 w-24 xs:right-5 xs:top-20 xs:w-24 375:top-28 375:w-36 md:bottom-64 md:right-10 md:w-44 ${animation}`}
              src={iphoneX}
              alt="Iphone X publicidad mundial"
            />
            <img
              className={`animate__animated absolute right-0 w-20 xs:right-0 xs:top-10 xs:w-20 375:top-16 375:w-28 md:-right-2 md:w-32 ${animation}`}
              src={ipadMini}
              alt="Ipad Mini publicidad mundial"
            />
          </div>
          <div className="relative bottom-8 mx-5 leading-6 md:col-span-3 md:flex md:w-72 md:items-center 2xl:w-96">
            <p className="p-1 dark:text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, doloremque maiores vel et maxime
              harum pariatur commodi placeat a nostrum minus ex porro officia aliquid nisi sed ratione! Ducimus
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
