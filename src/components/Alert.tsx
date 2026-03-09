import React from 'react';

export interface AlertProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  className?: string;
}

const variantStyles = {
  default: 'bg-gray-100 border-gray-200 text-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300',
  success: 'bg-green-100 border-green-200 text-green-800 dark:bg-green-900/30 dark:border-green-800 dark:text-green-300',
  warning: 'bg-yellow-100 border-yellow-200 text-yellow-800 dark:bg-yellow-900/30 dark:border-yellow-800 dark:text-yellow-300',
  error: 'bg-red-100 border-red-200 text-red-800 dark:bg-red-900/30 dark:border-red-800 dark:text-red-300',
  info: 'bg-blue-100 border-blue-200 text-blue-800 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300',
};

const icons = {
  default: 'ℹ️',
  success: '✓',
  warning: '⚠',
  error: '✕',
  info: 'ℹ',
};

export const Alert: React.FC<AlertProps> = ({ 
  children, 
  variant = 'default', 
  className = '' 
}) => {
  return (
    <div className={`p-4 rounded-lg border ${variantStyles[variant]} ${className}`}>
      <div className="flex items-start gap-3">
        <span className="text-lg">{icons[variant]}</span>
        <div>{children}</div>
      </div>
    </div>
  );
};

export interface AlertTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const AlertTitle: React.FC<AlertTitleProps> = ({ children, className = '' }) => (
  <h4 className={`font-medium mb-1 ${className}`}>{children}</h4>
);

export interface AlertDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const AlertDescription: React.FC<AlertDescriptionProps> = ({ children, className = '' }) => (
  <p className={`text-sm opacity-90 ${className}`}>{children}</p>
);
