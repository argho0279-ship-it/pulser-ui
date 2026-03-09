import React, { forwardRef } from 'react';

export interface HamburgerMenuProps {
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

export const HamburgerMenu = forwardRef<HTMLButtonElement, HamburgerMenuProps>(({ isOpen = false, onToggle, className = '' }, ref) => {
  return (
    <button
      ref={ref}
      onClick={onToggle}
      className={`flex flex-col justify-center items-center w-8 h-8 gap-1.5 p-1 ${className}`}
      aria-label="Toggle menu"
    >
      <span
        className={`w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${
          isOpen ? 'rotate-45 translate-y-2' : ''
        }`}
      />
      <span
        className={`w-6 h-0.5 bg-gray-600 transition-opacity duration-300 ${
          isOpen ? 'opacity-0' : ''
        }`}
      />
      <span
        className={`w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${
          isOpen ? '-rotate-45 -translate-y-2' : ''
        }`}
      />
    </button>
  );
});

HamburgerMenu.displayName = 'HamburgerMenu';

export interface MobileMenuProps {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, children, className = '' }) => {
  return (
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } ${className}`}
    >
      <div className="flex flex-col gap-4 p-4 bg-white border-t border-gray-200">
        {children}
      </div>
    </div>
  );
};
