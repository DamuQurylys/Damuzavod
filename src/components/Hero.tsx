'use client';

import React from 'react';

export interface HeroProps {
  backgroundImage: string;
  children?: React.ReactNode;
  buttons?: {
    label: string;
    href: string;
    variant?: 'primary' | 'secondary';
  }[];
}

const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  buttons,
  children,
}) => {
  return (
    <section
      className="relative w-full min-h-[80vh] bg-cover bg-center text-white pt-[100px] sm:pt-[120px] pb-24 px-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Градиентное затемнение сверху */}
      <div className="absolute top-0 left-0 w-full h-[250px] bg-gradient-to-b from-black/80 via-black/50 to-transparent pointer-events-none z-0" />

      {/* Контент внизу слева */}
      {children && (
        <div className="absolute bottom-8 left-4 sm:left-8 z-10 text-left space-y-4 max-w-[90%] sm:max-w-[60%]">
          {children}
        </div>
      )}

      {/* Кнопки — внизу справа */}
      {buttons && (
        <div className="absolute bottom-8 right-4 sm:right-8 z-10 flex flex-wrap justify-end gap-4">
          {buttons.map((btn, idx) => (
            <a
              key={idx}
              href={btn.href}
              className="relative overflow-hidden border border-white text-white px-6 py-2 transition-all duration-300 group text-sm sm:text-base"
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
