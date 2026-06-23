'use client';
/* eslint-disable @next/next/no-img-element */

import React from 'react';
import { personalInfo } from '@/data/portfolio';

export default function AboutSection() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-16 border-t border-black/5 dark:border-white/5">
      <div className="flex items-center space-x-3 mb-12">
        <span className="w-1 h-5 bg-brand-lime rounded-full"></span>
        <h2 className="font-header font-extrabold text-sm uppercase tracking-wider text-black dark:text-white">
          ABOUT ME
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        {/* Profile Photo */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative group w-full max-w-[360px] aspect-square rounded-3xl overflow-hidden border-2 border-dashed transition-all duration-500 hover:border-brand-lime/50 border-black/10 bg-brand-lightSurface dark:border-white/10 dark:bg-brand-darkSurface">
            <img
              src="/images/profile/profil.jpg"
              alt={`${personalInfo.name} Portrait`}
              className="w-full h-full object-cover transition-all duration-700 ease-out filter grayscale group-hover:grayscale-0 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://placehold.co/600x600/16171A/8A8F98?text=Profile+Photo';
              }}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <span className="text-white text-xs font-semibold tracking-wider uppercase">
                {personalInfo.name}
              </span>
            </div>
          </div>
        </div>

        {/* Bio and Stats */}
        <div className="md:col-span-7 space-y-6 text-black dark:text-white">
          <h3 className="font-header font-extrabold text-2xl md:text-3xl tracking-tight leading-snug">
            Turning Ideas Into Scalable Web Applications
          </h3>

          {personalInfo.bio.map((paragraph, index) => (
            <p
              key={index}
              className="text-sm md:text-base leading-relaxed text-gray-800 dark:text-gray-300 font-medium dark:font-normal"
            >
              {paragraph}
            </p>
          ))}

          {/* Mini Stats row */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-black/5 dark:border-white/5">
            <div>
              <span className="block font-header font-extrabold text-2xl text-brand-lime">
                {personalInfo.stats.experience}
              </span>
              <span className="text-[10px] md:text-xs tracking-wider uppercase font-semibold text-gray-600 dark:text-gray-400">
                Years of Experience
              </span>
            </div>
            <div>
              <span className="block font-header font-extrabold text-2xl text-brand-lime">
                {personalInfo.stats.projects}
              </span>
              <span className="text-[10px] md:text-xs tracking-wider uppercase font-semibold text-gray-600 dark:text-gray-400">
                Projects Completed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
