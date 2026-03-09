import React, { useState, useEffect, createContext, useContext } from 'react';

interface Toast {
  id: string;
  message: string;
  variant: 'default' | 'success' | 'warning' | 'error' | 'info';
}

interface ToastContextType {
  toasts: Toast[];
  addToast: (message: string, variant?: Toast['variant']) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within ToastProvider');
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, variant: Toast['variant'] = 'default') => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, message, variant }]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

const variantStyles = {
  default: 'bg-gray-100 border-gray-200 text-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300',
  success: 'bg-green-100 border-green-200 text-green-800 dark:bg-green-900/30 dark:border-green-800 dark:text-green-300',
  warning: 'bg-yellow-100 border-yellow-200 text-yellow-800 dark:bg-yellow-900/30 dark:border-yellow-800 dark:text-yellow-300',
  error: 'bg-red-100 border-red-200 text-red-800 dark:bg-red-900/30 dark:border-red-800 dark:text-red-300',
  info: 'bg-blue-100 border-blue-200 text-blue-800 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300',
};

export const Toast: React.FC<{
  message: string;
  variant?: Toast['variant'];
  duration?: number;
  onClose?: () => void;
}> = ({ message, variant = 'default', duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsLeaving(true);
      setTimeout(() => onClose?.(), 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div 
      className={`p-4 rounded-lg border shadow-lg transition-all duration-300 ${
        isVisible && !isLeaving ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      } ${variantStyles[variant]}`}
    >
      <div className="flex items-center justify-between gap-3">
        <span>{message}</span>
        <button onClick={onClose} className="opacity-70 hover:opacity-100">✕</button>
      </div>
    </div>
  );
};

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2">
      {toasts.map(toast => (
        <Toast 
          key={toast.id} 
          message={toast.message} 
          variant={toast.variant}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};
