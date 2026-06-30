'use client';

import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';

export default function Toast() {
  const { toastOpen, setToastOpen, toastMessage, darkMode } = useApp();

  useEffect(() => {
    if (toastOpen) {
      const timer = setTimeout(() => {
        setToastOpen(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toastOpen, setToastOpen]);

  return (
    <AnimatePresence>
      {toastOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 left-4 sm:left-auto z-50 p-4 rounded-xl border flex items-center space-x-3 shadow-2xl backdrop-blur-md max-w-sm ${
            darkMode
              ? 'bg-brand-darkSurface/95 border-brand-lime/20 text-white'
              : 'bg-white/95 border-brand-lime/40 text-black'
          }`}
        >
          <div className="w-8 h-8 rounded-full bg-brand-lime/20 flex items-center justify-center">
            <ExternalLink className="w-4 h-4 text-brand-lime" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold">{toastMessage}</p>
          </div>
          <button
            onClick={() => setToastOpen(false)}
            className="p-1 hover:bg-black/10 dark:hover:bg-white/10 rounded-full cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
