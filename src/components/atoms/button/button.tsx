import React, { CSSProperties, ReactNode, useEffect } from 'react';

import './button.css';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  style?: CSSProperties;
  className?: string;
  type?: 'container' | 'outline' | 'text';
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  isDisabled,
  isLoading,
  style,
  className,
  type = 'container',
}) => {
  let baseClass = '';

  switch (type) {
    case 'container':
    default:
      baseClass = 'button-container';
      break;
    case 'outline':
      baseClass = 'button-outline';
      break;
    case 'text':
      baseClass = 'button-text';
      break;
  }

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      style={style}
      className={`${baseClass} ${className || ''}`}
    >
      {isLoading ? 'Loading' : children}
    </button>
  );
};
