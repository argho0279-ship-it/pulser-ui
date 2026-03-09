import React, { forwardRef } from 'react';

export interface NavbarProps {
  children?: React.ReactNode;
  className?: string;
  logo?: React.ReactNode;
  justify?: 'between' | 'center' | 'start' | 'end';
}

export const Navbar = forwardRef<HTMLDivElement, NavbarProps>(({ children, className = '', logo, justify = 'between' }, ref) => {
  const justifyClass = {
    between: 'justify-between',
    center: 'justify-center',
    start: 'justify-start',
    end: 'justify-end',
  };

  return (
    <nav
      ref={ref}
      className={`flex items-center ${justifyClass[justify]} px-6 py-4 bg-white border-b border-gray-200 ${className}`}
    >
      {logo && <div className="flex items-center">{logo}</div>}
      <div className="flex items-center gap-4">{children}</div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export interface NavbarItemProps {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
  onClick?: () => void;
}

export const NavbarItem: React.FC<NavbarItemProps> = ({ children, className = '', active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-sm font-medium transition-colors duration-200 ${
        active ? 'text-blue-500' : 'text-gray-600 hover:text-gray-900'
      } ${className}`}
    >
      {children}
    </button>
  );
};
