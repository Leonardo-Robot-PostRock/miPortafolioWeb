import React from 'react';

export const Input = ({ label, type, name }) => {
  return (
    <div className="flex flex-col">
      <label className="font-Kanit">{label}</label>
      <input
        className="h-10 p-1 text-neutral-950 outline-none dark:bg-neutral-800 dark:text-white"
        type={type}
        name={name}
      />
    </div>
  );
};
