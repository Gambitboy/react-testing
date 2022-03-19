import React from 'react';

type InputProps = {
  name: string;
  label: string;
};

export const Input: React.FC<InputProps> = ({ name, label }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} className="input-container" />
    </>
  );
};
