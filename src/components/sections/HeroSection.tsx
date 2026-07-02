'use client';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/portfolio';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function HeroSection() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 pt-16 md:pt-28 pb-16 md:pb-24 overflow-hidden">
      {/* Grid background — ponytail: CSS gradients, no JS, zero cost */}
      <div className="absolute inset-0 hero-grid opacity-40 dark:opacity-20 pointer-events-none" />

      <motion.div variants={container} initial="hidden" animate="visible">
        <motion.div variants={item} className="inline-flex items-center space-x-2 bg-brand-lightSurface dark:bg-brand-darkSurface border border-black/5 dark:border-white/5 px-4 py-1.5 rounded-full mb-8">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-lime pulse-dot" />
          <span className="text-xs font-mono font-semibold uppercase tracking-wider opacity-90 text-black dark:text-white">
            FULLSTACK DEVELOPER
          </span>
        </motion.div>

        <motion.h1 variants={item} className="font-header font-extrabold text-[clamp(2.25rem,4vw+1rem,6rem)] sm:text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] mb-8 max-w-5xl text-black dark:text-white">
          BUILDING DIGITAL<br />SOLUTIONS THAT SOLVE<br />REAL PROBLEMS.
        </motion.h1>

        <motion.p variants={item} className="text-sm md:text-lg mb-10 leading-relaxed text-gray-800 dark:text-gray-300 font-medium dark:font-normal opacity-90 dark:opacity-80 max-w-2xl">
          {personalInfo.subtitle}
        </motion.p>

        <motion.div variants={item}>
          <a href="#projects" className="inline-flex items-center justify-center bg-white dark:bg-white text-black font-semibold text-sm py-3.5 px-8 rounded-full transition-all duration-300 hover:bg-brand-lime transform hover:scale-105 active:scale-95 shadow-xl shadow-black/10 border border-black/10 dark:border-none">
            View My Projects
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
