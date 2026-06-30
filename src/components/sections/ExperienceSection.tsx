import React from 'react';
import { experiences } from '@/data/portfolio';

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 py-12 border-t border-black/5 dark:border-white/5">
      <div className="flex items-center space-x-3 mb-10">
        <span className="w-1 h-5 bg-brand-lime rounded-full"></span>
        <h2 className="font-header font-extrabold text-sm uppercase tracking-wider text-black dark:text-white">
          EXPERIENCE
        </h2>
      </div>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-black/10 dark:bg-white/10"></div>
        {/* Glowing line top decoration */}
        <div className="absolute left-[7px] top-0 w-0.5 h-12 bg-gradient-to-b from-brand-lime to-transparent"></div>

        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative pl-8 pb-8 last:pb-0 group">
            {/* Timeline Dot */}
            {index === 0 ? (
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 bg-brand-lime border-brand-lime group-hover:scale-125 group-hover:shadow-[0_0_12px_#98CD00]"></div>
            ) : (
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 bg-brand-lightBg border-black/20 group-hover:border-brand-lime dark:bg-brand-darkBg dark:border-white/20"></div>
            )}

            {/* Content Card */}
            <div className="p-6 rounded-2xl border transition-all duration-300 bg-brand-lightSurface/50 border-black/5 hover:border-brand-lime/20 dark:bg-brand-darkSurface/30 dark:border-white/5 dark:hover:border-brand-lime/10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-header font-extrabold tracking-tight text-black dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-bold uppercase tracking-wider mt-0.5 text-gray-950 dark:text-brand-lime">
                    {exp.company}
                  </p>
                </div>
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full w-fit self-start sm:self-center bg-black/5 text-gray-700 dark:bg-white/5 dark:text-gray-400">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm mb-4 leading-relaxed text-gray-800 dark:text-gray-300">
                {exp.description}
              </p>

              {exp.skills && exp.skills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono font-bold px-2.5 py-1 rounded-md uppercase tracking-wider bg-black/5 text-gray-700 dark:bg-white/5 dark:text-gray-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
