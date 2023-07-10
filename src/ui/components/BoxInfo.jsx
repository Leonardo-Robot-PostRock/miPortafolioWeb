import React from 'react';

export const BoxInfo = ({ materialSymbols, info }) => {
  return (
    <div className="mb-4 md:mb-8 2xl:mb-12 flex h-20 2xl:h-24 w-full items-center rounded-sm 2xl:rounded-md bg-neutral-200 dark:bg-neutral-800 p-4">
      <span className="material-symbols-outlined mx-4 2xl:mx-10 xl:text-3xl">{materialSymbols}</span>
      <p className="tracking-wider font-Kanit xs:text-[12px] 375:text-sm xl:text-lg">{info}</p>
    </div>
  );
};
