import React from 'react';

export const Input = ({ label, type, name }) => {
  return (
    <div className="flex flex-col">
      <label className="font-Kanit xl:mb-0 2xl:mb-2 xl:text-base 2xl:text-lg">{label}</label>
      <input
        className="h-10 xl:h-10 2xl:h-14 rounded-sm xl:rounded-md border-2 border-solid border-neutral-200 p-2 text-neutral-950 outline-none dark:border-none dark:bg-neutral-800 dark:text-white"
        type={type}
        name={name}
      />
    </div>
  );
};
