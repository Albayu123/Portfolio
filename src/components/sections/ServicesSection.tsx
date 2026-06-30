import React from 'react';
import { services } from '@/data/portfolio';
import { renderIcon } from '@/utils/iconMapping';

export default function ServicesSection() {
  const iconClass = "w-6 h-6 text-brand-lime";

  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-12 border-t border-black/5 dark:border-white/5">
      <div className="flex items-center space-x-3 mb-10">
        <span className="w-1 h-5 bg-brand-lime rounded-full"></span>
        <h2 className="font-header font-extrabold text-sm uppercase tracking-wider text-black dark:text-white">
          EXPERTISE
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-8 rounded-2xl border transition-all duration-300 transform hover:scale-[1.02] hover:border-black/40 dark:hover:border-brand-lime/80 dark:hover:shadow-[0_0_30px_rgba(152,205,0,0.08)] bg-brand-lightSurface/50 border-black/5 dark:bg-brand-darkSurface/30 dark:border-white/5"
          >
            <div className="w-12 h-12 rounded-full bg-brand-lime/10 flex items-center justify-center mb-6">
              {renderIcon(service.icon, iconClass)}
            </div>
            <h3 className="text-xl font-header font-extrabold mb-3 text-black dark:text-white">
              {service.title}
            </h3>
            <p className="text-xs leading-relaxed text-gray-700 dark:text-gray-300 dark:opacity-70">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
