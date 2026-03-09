import React, { useState, createContext, useContext } from 'react';

interface DropdownContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const DropdownContext = createContext<DropdownContextType | null>(null);

export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) throw new Error('useDropdown must be used within Dropdown');
  return context;
};

export interface DropdownProps {
  children: React.ReactNode;
}

export const Dropdown: React.FC<DropdownProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DropdownContext.Provider>
  );
};

export const DropdownTrigger: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className = '' }) => {
  const { isOpen, setIsOpen } = useDropdown();

  return (
    <div onClick={() => setIsOpen(!isOpen)} className={className}>
      {children}
    </div>
  );
};

export const DropdownMenu: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  align?: 'start' | 'center' | 'end';
}> = ({ children, className = '', align = 'start' }) => {
  const { isOpen, setIsOpen } = useDropdown();
  if (!isOpen) return null;

  const alignClass = {
    start: 'left-0',
    center: 'left-1/2 -translate-x-1/2',
    end: 'right-0',
  };

  return (
    <div className="relative">
      <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      <div className={`absolute top-full mt-2 ${alignClass[align]} z-50 min-w-[180px] bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 ${className}`}>
        {children}
      </div>
    </div>
  );
};

export const DropdownItem: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  onClick?: () => void;
}> = ({ children, className = '', onClick }) => {
  const { setIsOpen } = useDropdown();

  const handleClick = () => {
    onClick?.();
    setIsOpen(false);
  };

  return (
    <button 
      onClick={handleClick}
      className={`w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${className}`}
    >
      {children}
    </button>
  );
};

export const DropdownSeparator: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`h-px bg-gray-200 dark:bg-gray-700 my-1 ${className}`} />
);

export const DropdownLabel: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className = '' }) => (
  <div className={`px-4 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 ${className}`}>
    {children}
  </div>
);
