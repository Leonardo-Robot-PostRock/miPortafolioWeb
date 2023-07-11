import React from 'react';
import './../styles/ArrowsOfSwiper.css';

export const ArrowsOfSwiper = ({ arrowMaterialSymbols, direction }) => {
  return (
    <div
      className={`swiper-button flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400 transition-all duration-500 hover:opacity-50 md:h-10 md:w-10 ${
        direction === 'next'
          ? 'image-swiper-button-next'
          : 'prev' && 'image-swiper-button-prev'
      }`}>
      <span className="material-symbols-outlined text-base text-white md:text-xl xl:text-2xl">
        {arrowMaterialSymbols}
      </span>
    </div>
  );
};
