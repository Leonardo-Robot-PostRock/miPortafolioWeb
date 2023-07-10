import React from 'react';

export const BoxInfo = ({ materialSymbols, info }) => {
  return (
    <div>
      <span className="material-symbols-outlined">{materialSymbols}</span>
      <p className="">{info}</p>
    </div>
  );
};
