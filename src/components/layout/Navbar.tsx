'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { darkMode, toggleDarkMode, mobileMenuOpen, setMobileMenuOpen } = useApp();

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full backdrop-blur-md transition-colors duration-300 border-b ${
      darkMode ? 'bg-brand-darkBg/80 border-white/5' : 'bg-brand-lightBg/80 border-black/5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-header font-extrabold text-xl tracking-tight hover:opacity-80 transition-opacity">
          ALIEF.DEV
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-mono font-semibold uppercase tracking-wider">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative py-2 transition-colors hover:text-black dark:hover:text-brand-lime group animate-none"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-lime transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors focus:outline-none cursor-pointer"
            title="Ubah Tema"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-brand-lime" />
            ) : (
              <Moon className="w-5 h-5 text-black" />
            )}
          </button>
          <a
            href="#contact"
            className="bg-brand-lime hover:bg-white text-black font-semibold text-xs py-2.5 px-5 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-lime/10"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Navbar Controls */}
        <div className="flex items-center space-x-3 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors focus:outline-none cursor-pointer"
            title="Ubah Tema"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-brand-lime" />
            ) : (
              <Moon className="w-5 h-5 text-black" />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-brand-lime" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`md:hidden absolute top-20 left-0 w-full shadow-2xl border-b z-40 ${
              darkMode ? 'bg-brand-darkBg/95 border-white/5' : 'bg-brand-lightBg/95 border-black/5'
            }`}
          >
            <div className="px-6 py-8 flex flex-col space-y-6 text-center">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-mono font-semibold uppercase tracking-wider hover:text-brand-lime transition-colors py-2"
                >
                  {item.name}
                </a>
              ))}
              <div className={`pt-4 border-t ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-block bg-brand-lime text-black font-semibold text-sm py-3 px-8 rounded-full shadow-md w-full max-w-xs mx-auto"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
