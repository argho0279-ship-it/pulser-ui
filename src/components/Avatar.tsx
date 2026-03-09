import React from 'react';

export interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const sizeStyles = {
  small: 'w-8 h-8 text-xs',
  medium: 'w-10 h-10 text-sm',
  large: 'w-12 h-12 text-base',
};

export const Avatar: React.FC<AvatarProps> = ({ 
  src, 
  alt = 'Avatar', 
  fallback, 
  size = 'medium', 
  className = '' 
}) => {
  const [imgError, setImgError] = React.useState(false);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className={`relative inline-flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden ${sizeStyles[size]} ${className}`}>
      {src && !imgError ? (
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="font-medium text-gray-600 dark:text-gray-300">
          {fallback ? getInitials(fallback) : '?'}
        </span>
      )}
    </div>
  );
};

export interface AvatarGroupProps {
  children: React.ReactNode;
  max?: number;
  className?: string;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ children, max = 3, className = '' }) => {
  const childArray = React.Children.toArray(children);
  const visibleAvatars = childArray.slice(0, max);
  const remainingCount = childArray.length - max;

  return (
    <div className={`flex -space-x-2 ${className}`}>
      {visibleAvatars.map((child, index) => (
        <div key={index} className="ring-2 ring-white dark:ring-gray-900 rounded-full">
          {child}
        </div>
      ))}
      {remainingCount > 0 && (
        <div className="flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-xs font-medium text-gray-600 dark:text-gray-300 ring-2 ring-white dark:ring-gray-900">
          +{remainingCount}
        </div>
      )}
    </div>
  );
};
