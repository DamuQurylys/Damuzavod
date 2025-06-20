import React from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  children?: React.ReactNode;
  buttons?: {
    label: string;
    href: string;
    variant?: 'primary' | 'secondary';
  }[];
}

export default function Hero({
  title,
  subtitle,
  backgroundImage,
  buttons,
  children,
}: HeroProps) {
  return (
    <section
      className="relative w-full min-h-[80vh] bg-cover bg-center text-white pt-[120px] px-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Затемнение фона */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Контент поверх затемнённого фона */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center">
        <div className="max-w-xl space-y-6 pl-4 sm:pl-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight whitespace-nowrap">
           Завод бетонных изделий
          </h1>

          <div className="flex gap-4 flex-wrap">
            <a
              href="/catalog"
              className="group relative inline-block px-6 py-3 border border-white text-white text-sm sm:text-base font-medium overflow-hidden transition-all duration-300"
            >
              <span className="absolute inset-0 w-0 bg-white transition-all duration-300 group-hover:w-full z-0"></span>
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Каталог продукции
              </span>
            </a>

            <a
              href="/calculate"
              className="group relative inline-block px-6 py-3 border border-white text-white text-sm sm:text-base font-medium overflow-hidden transition-all duration-300"
            >
              <span className="absolute inset-0 w-0 bg-white transition-all duration-300 group-hover:w-full z-0"></span>
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Рассчитать стоимость
              </span>
            </a>
          </div>

          {children && (
            <div className="pt-4">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
