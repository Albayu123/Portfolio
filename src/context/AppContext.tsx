'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AppContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  showToast: (message: string) => void;
  toastMessage: string;
  toastOpen: boolean;
  setToastOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const showToast = (message: string) => {
    setToastMessage(message);
    setToastOpen(true);
  };

  return (
    <AppContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        mobileMenuOpen,
        setMobileMenuOpen,
        showToast,
        toastMessage,
        toastOpen,
        setToastOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
}
