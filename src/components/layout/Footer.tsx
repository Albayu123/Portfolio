'use client';

import React from 'react';
import { personalInfo } from '@/data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="max-w-7xl mx-auto w-full px-6 py-16 border-t border-black/5 dark:border-white/5 mt-20">
      <div className="flex flex-col items-center justify-center text-center py-12 md:py-20">
        {/* Let's Talk massive banner */}
        <h2 className="font-header font-extrabold text-6xl sm:text-7xl md:text-9xl tracking-tighter mb-16 md:mb-24 leading-none text-black dark:text-white">
          {"LET'S TALK"}
        </h2>

        {/* Social Redirect links */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 text-xs sm:text-sm font-semibold uppercase tracking-widest">
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative py-2 transition-colors text-black dark:text-white hover:text-brand-lime dark:hover:text-brand-lime"
          >
            LINKEDIN
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-lime transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative py-2 transition-colors text-black dark:text-white hover:text-brand-lime dark:hover:text-brand-lime"
          >
            GITHUB
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-lime transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href={personalInfo.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative py-2 transition-colors text-black dark:text-white hover:text-brand-lime dark:hover:text-brand-lime"
          >
            INSTAGRAM
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-lime transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href={personalInfo.socials.email}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative py-2 transition-colors text-black dark:text-white hover:text-brand-lime dark:hover:text-brand-lime"
          >
            EMAIL
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-lime transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>

      {/* Copyright banner */}
      <div className="flex flex-col sm:flex-row items-center justify-between pt-12 border-t mt-12 text-[10px] sm:text-xs font-semibold border-black/5 text-gray-750 dark:border-white/5 dark:text-gray-500">
        <span className="mb-4 sm:mb-0 font-header font-extrabold tracking-wide text-sm text-black dark:text-white">
          Alief.Dev
        </span>
        <span>&copy; {currentYear} ALIEF.DEV. Crafted with technical precision.</span>
      </div>
    </footer>
  );
}
