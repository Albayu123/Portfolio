'use client';

import React from 'react';
import { techStack } from '@/data/portfolio';
import { Atom, Palette, Server, Terminal, Code2 } from 'lucide-react';

export default function TechStackSection() {
  const renderIcon = (iconName: string) => {
    const iconClass = "w-8 h-8 mb-4 text-gray-800 dark:text-gray-400 group-hover:text-black dark:group-hover:text-brand-lime transition-all duration-500 group-hover:scale-110";

    switch (iconName) {
      case 'atom':
        return <Atom className={`${iconClass} group-hover:rotate-[360deg]`} />;
      case 'palette':
        return <Palette className={iconClass} />;
      case 'server':
        return <Server className={iconClass} />;
      case 'terminal':
        return <Terminal className={iconClass} />;
      case 'code-2':
        return <Code2 className={iconClass} />;
      case 'figma':
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${iconClass}`}
          >
            <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
            <path d="M12 2h3.5A3.5 3.5 0 0 1 19 5.5v0A3.5 3.5 0 0 1 15.5 9H12V2z" />
            <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
            <path d="M12 9h3.5a3.5 3.5 0 0 1 3.5 3.5v0a3.5 3.5 0 0 1-3.5 3.5H12V9z" />
            <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 0 1-3.5 3.5v0A3.5 3.5 0 0 1 5 19.5z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="tech-stack" className="max-w-7xl mx-auto px-6 py-12 border-t border-black/5 dark:border-white/5">
      <div className="flex items-center space-x-3 mb-10">
        <span className="w-1 h-5 bg-brand-lime rounded-full"></span>
        <h2 className="font-header font-extrabold text-sm uppercase tracking-wider text-black dark:text-white">
          SKILLS
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="group relative flex flex-col items-center justify-center p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 overflow-hidden bg-brand-lightSurface border-black/5 hover:border-brand-lime/40 dark:bg-brand-darkSurface/50 dark:hover:bg-brand-darkSurface dark:border-white/5 dark:hover:border-brand-lime/20"
          >
            {renderIcon(tech.icon)}
            <span className="text-xs font-semibold tracking-wider uppercase text-gray-900 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
