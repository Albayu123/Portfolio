'use client';

import React from 'react';
import { personalInfo } from '@/data/portfolio';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-16 md:pt-28 pb-16 md:pb-24">
      {/* Availability Tag */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center space-x-2 bg-brand-lightSurface dark:bg-brand-darkSurface border border-black/5 dark:border-white/5 px-4 py-1.5 rounded-full mb-8"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-brand-lime pulse-dot"></span>
        <span className="text-xs font-mono font-semibold uppercase tracking-wider opacity-90 text-black dark:text-white">
          AVAILABLE FOR PROJECTS
        </span>
      </motion.div>

      {/* Hero Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-header font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] mb-8 max-w-5xl text-black dark:text-white"
      >
        CREATING DIGITAL EXPERIENCES THAT MATTER.
      </motion.h1>

      {/* Hero Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-sm md:text-lg mb-10 leading-relaxed text-gray-800 dark:text-gray-300 font-medium dark:font-normal opacity-90 dark:opacity-80"
      >
        {personalInfo.subtitle}
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <a
          href="#contact"
          className="inline-flex items-center justify-center bg-white dark:bg-white text-black font-semibold text-sm py-3.5 px-8 rounded-full transition-all duration-300 hover:bg-brand-lime transform hover:scale-105 active:scale-95 shadow-xl shadow-black/10 border border-black/10 dark:border-none"
        >
          Get in touch
        </a>
      </motion.div>
    </section>
  );
}
