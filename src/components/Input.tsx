import React, { forwardRef } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  className = '',
  ...props
}, ref) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>}
      <input
        ref={ref}
        {...props}
        className={`px-3 py-2 border rounded-md text-sm outline-none transition-all duration-200
          ${error ? 'border-red-500 focus:border-red-500 dark:border-red-400' : 'border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:focus:border-blue-400'}
          ${props.disabled ? 'bg-gray-100 cursor-not-allowed dark:bg-gray-800' : 'bg-white dark:bg-gray-900'}
          dark:text-white
          ${className}
        `}
      />
      {error && <span className="text-xs text-red-500 dark:text-red-400">{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';
