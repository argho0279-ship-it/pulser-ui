import React, { useState, createContext, useContext } from 'react';

interface ModalContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within Modal');
  return context;
};

export interface ModalProps {
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const ModalTrigger: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className = '' }) => {
  const context = useContext(ModalContext);
  if (!context) return null;

  return (
    <div onClick={() => context.setIsOpen(true)} className={className}>
      {children}
    </div>
  );
};

export const ModalClose: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { setIsOpen } = useModal();

  return (
    <button 
      onClick={() => setIsOpen(false)}
      className={`absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 ${className}`}
    >
      ✕
    </button>
  );
};

export const ModalContent: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className = '' }) => {
  const context = useContext(ModalContext);
  if (!context) return null;

  if (!context.isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => context.setIsOpen(false)}
      />
      <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg ${className}`}>
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 relative">
          <ModalClose />
          {children}
        </div>
      </div>
    </>
  );
};

export const ModalHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`flex flex-col space-y-1.5 mb-4 ${className}`}>
    {children}
  </div>
);

export const ModalTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <h3 className={`text-lg font-semibold dark:text-white ${className}`}>
    {children}
  </h3>
);

export const ModalDescription: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <p className={`text-sm text-gray-500 dark:text-gray-400 ${className}`}>
    {children}
  </p>
);

export const ModalBody: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>
    {children}
  </div>
);

export const ModalFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`flex justify-end gap-2 ${className}`}>
    {children}
  </div>
);
