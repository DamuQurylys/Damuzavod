'use client';

import React from 'react';

export interface HeroProps {
  title?: string;
  backgroundImage: string;
  children?: React.ReactNode;
  buttons?: {
    label: string;
    href: string;
    variant?: 'primary' | 'secondary';
  }[];
}

const Hero: React.FC<HeroProps> = ({
  title,
  backgroundImage,
  buttons,
  children,
}) => {
  return (
    <section
      className="relative w-full min-h-[80vh] bg-cover bg-center text-white pt-[120px] pb-24 px-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Затемнение фона */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Основной контент */}
      <div className="relative z-10 max-w-5xl mx-auto text-left space-y-6">
        {title && (
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {title}
          </h1>
        )}
        {children && <div>{children}</div>}
      </div>

      {/* Кнопки — в правом нижнем углу */}
      {buttons && (
        <div className="absolute bottom-8 right-8 z-10 flex flex-wrap justify-end gap-4">
          {buttons.map((btn, idx) => (
            <a
              key={idx}
              href={btn.href}
              className="relative overflow-hidden border border-white text-white px-6 py-2 rounded-lg transition-all duration-300 group"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                {btn.label}
              </span>
              <span
                className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"
                aria-hidden="true"
              ></span>
            </a>
          ))}
        </div>
      )}
    </section>
  );
};

export default Hero;
