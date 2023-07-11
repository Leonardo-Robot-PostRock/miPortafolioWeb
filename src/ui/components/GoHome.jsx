import React from 'react';

export const GoHome = ({ scrollToTop, arrowMaterialSymbols }) => {
  return (
    <button
      className="backToTop fixed bottom-5 right-5 z-50 h-10 w-10 rounded-[100%] bg-cyan-400 text-white shadow-md active:bg-cyan-300 md:h-14 md:w-14"
      onClick={scrollToTop}>
      <span className="material-symbols-outlined">{arrowMaterialSymbols}</span>
    </button>
  );
};
