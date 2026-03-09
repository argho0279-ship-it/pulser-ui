import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
}

const variantStyles = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700',
  secondary: 'bg-gray-500 text-white hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700',
  outline: 'bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white',
};

const sizeStyles = {
  small: 'px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm w-16 sm:w-20',
  medium: 'px-3 py-1.5 text-sm sm:px-5 sm:py-2.5 sm:text-base w-20 sm:w-24 md:w-28',
  large: 'px-5 py-2.5 text-base sm:px-7 sm:py-3.5 sm:text-lg w-24 sm:w-28 md:w-32',
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  className = '',
}) => {
  return (
    <button
      className={`inline-flex items-center justify-center font-medium rounded-md cursor-pointer transition-all duration-200 ${className} ${variantStyles[variant]} ${sizeStyles[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};