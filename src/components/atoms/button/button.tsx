import React, { ReactNode } from 'react';

import './button.css';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick, isDisabled, isLoading }) => {
  return (
    <button onClick={onClick} disabled={isDisabled} className="outline">
      {isLoading ? 'Loading' : children}
    </button>
  );
};
