'use client';
/* eslint-disable @next/next/no-img-element */

import React from 'react';
import Link from 'next/link';
import { projects } from '@/data/portfolio';
import { useApp } from '@/context/AppContext';

export default function ProjectsSection() {
  const { showToast } = useApp();

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-12 border-t border-black/5 dark:border-white/5">
      <div className="flex items-center space-x-3 mb-10">
        <span className="w-1 h-5 bg-brand-lime rounded-full"></span>
        <h2 className="font-header font-extrabold text-sm uppercase tracking-wider text-black dark:text-white">
          SELECTED WORKS
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.redirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => showToast(`Redirecting to ${project.title} Live Demo...`)}
            className="group cursor-pointer relative overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-2 flex flex-col h-[380px] md:h-[450px] bg-white border-black/5 shadow-sm dark:bg-brand-darkSurface dark:border-white/5 dark:shadow-none"
          >
            <div className="w-full h-full relative overflow-hidden">
              <img
                src={project.imageUrl}
                alt={`${project.title} Preview`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/1200x600/16171A/8A8F98?text=Image+Load+Failed';
                }}
              />

              {/* Overlay details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent p-8 flex flex-col justify-end">
                {project.techStack && project.techStack.length > 0 && (
                  <div className="inline-flex items-center justify-center bg-black/65 backdrop-blur-md border border-white/10 rounded-full px-4 py-1 text-[10px] font-mono font-bold tracking-widest text-brand-lime uppercase w-fit mb-4">
                    {project.techStack[0]}
                  </div>
                )}
                <h3 className="text-2xl sm:text-3xl font-header font-extrabold text-white tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-350 opacity-90 font-medium">
                  {project.category}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
