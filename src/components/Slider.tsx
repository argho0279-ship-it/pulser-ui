import React, { useState, createContext, useContext, useEffect } from 'react';

interface SliderContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const SliderContext = createContext<SliderContextType | null>(null);

export interface SliderProps {
  children: React.ReactNode;
  className?: string;
  content?: React.ReactNode;
  side?: 'left' | 'right' | 'top' | 'bottom';
}

export const Slider: React.FC<SliderProps> = ({ children, className = '', content, side = 'right' }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const getTransform = () => {
    if (!isOpen) {
      switch (side) {
        case 'right': return 'translateX(100%)';
        case 'left': return 'translateX(-100%)';
        case 'top': return 'translateY(-100%)';
        case 'bottom': return 'translateY(100%)';
      }
    }
    return 'translateX(0)';
  };

  const getPosition = () => {
    switch (side) {
      case 'right': return 'top-0 right-0 h-full';
      case 'left': return 'top-0 left-0 h-full';
      case 'top': return 'top-0 left-0 w-full h-auto max-h-[80vh]';
      case 'bottom': return 'bottom-0 left-0 w-full h-auto max-h-[80vh]';
    }
  };

  const getWidthHeight = () => {
    if (side === 'top' || side === 'bottom') {
      return 'w-full';
    }
    return 'w-72';
  };

  return (
    <SliderContext.Provider value={{ isOpen, setIsOpen }}>
      <div className={`relative ${className}`}>
        <div className="flex items-center justify-between">
          {children}
        </div>
        
        {content && (
          <>
            <div 
              className={`fixed inset-0 bg-black/50 z-40 ${isOpen ? 'block' : 'hidden'}`}
              onClick={() => setIsOpen(false)}
            />
            <div 
              className={`fixed ${getPosition()} ${getWidthHeight()} bg-white dark:bg-gray-900 z-50 shadow-lg`}
              style={{ transition: 'transform 0.3s', transform: getTransform() }}
            >
              <div className="p-4 flex flex-col">
                <div className="flex justify-end mb-4">
                  <button onClick={() => setIsOpen(false)} className="text-2xl p-2 dark:text-white">✕</button>
                </div>
                <div className="flex flex-col gap-2">
                  {content}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </SliderContext.Provider>
  );
};

export const SliderLogo: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`flex items-center ${className}`}>{children}</div>
);

export const SliderLink: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  active?: boolean;
  onClick?: () => void;
}> = ({ children, className = '', active = false, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full text-left px-4 py-3 text-sm font-medium rounded-md transition-colors ${
      active ? 'text-blue-500 bg-blue-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
    } ${className}`}
  >
    {children}
  </button>
);

export const SliderButton: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  variant?: 'default' | 'outline' | 'primary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}> = ({ children, className = '', variant = 'primary', size = 'small', onClick }) => {
  const baseStyles = 'font-medium rounded-md transition-all duration-200 inline-flex items-center justify-center';
  const variantStyles = {
    default: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
  };
  const sizeStyles = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export const SliderItem: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  active?: boolean;
}> = ({ children, className = '', active = false }) => (
  <button
    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
      active ? 'text-blue-500 bg-blue-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
    } ${className}`}
  >
    {children}
  </button>
);

export const SliderTrigger: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  asChild?: boolean;
}> = ({ children, className = '', asChild = false }) => {
  const context = useContext(SliderContext);
  if (!context) return null;

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      onClick: () => context.setIsOpen(!context.isOpen),
    });
  }

  return (
    <button
      onClick={() => context.setIsOpen(!context.isOpen)}
      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 ${className}`}
    >
      {children}
    </button>
  );
};

export const SliderToggle: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const context = useContext(SliderContext);
  if (!context) return null;

  if (children) {
    if (React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        onClick: () => context.setIsOpen(!context.isOpen),
      });
    }
  }

  return (
    <button
      onClick={() => context.setIsOpen(!context.isOpen)}
      className={`w-10 h-10 flex items-center justify-center text-2xl ${className}`}
    >
      {children || '☰'}
    </button>
  );
};
