import React from 'react';

export interface ProgressProps {
  value?: number;
  max?: number;
  variant?: 'default' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  showValue?: boolean;
  className?: string;
}

const sizeStyles = {
  small: 'h-1',
  medium: 'h-2',
  large: 'h-3',
};

const variantStyles = {
  default: 'bg-blue-500',
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  error: 'bg-red-500',
};

export const Progress: React.FC<ProgressProps> = ({ 
  value = 0, 
  max = 100,
  variant = 'default',
  size = 'medium',
  showValue = false,
  className = '' 
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={`w-full ${className}`}>
      <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden ${sizeStyles[size]}`}>
        <div 
          className={`h-full transition-all duration-300 ${variantStyles[variant]}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showValue && (
        <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">{Math.round(percentage)}%</span>
      )}
    </div>
  );
};

export interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const spinnerSizes = {
  small: 'w-4 h-4',
  medium: 'w-6 h-6',
  large: 'w-8 h-8',
};

export const Spinner: React.FC<SpinnerProps> = ({ size = 'medium', className = '' }) => (
  <div className={`${spinnerSizes[size]} animate-spin rounded-full border-2 border-gray-300 border-t-blue-500 ${className}`} />
);

export const Skeleton: React.FC<{ 
  width?: string; 
  height?: string; 
  className?: string;
  rounded?: boolean;
}> = ({ 
  width = 'w-full', 
  height = 'h-4', 
  className = '',
  rounded = true 
}) => (
  <div className={`animate-pulse bg-gray-300 dark:bg-gray-700 ${width} ${height} ${rounded ? 'rounded' : ''} ${className}`} />
);
