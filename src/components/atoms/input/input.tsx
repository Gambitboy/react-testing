import React, { ChangeEvent } from 'react';

type InputProps = {
  name: string;
  label?: string;
  value?: string;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({ name, label, value, onChange }) => {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <input id={name} name={name} value={value} onChange={onChange} className="input-container" />
    </>
  );
};
