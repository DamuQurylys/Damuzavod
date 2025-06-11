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
      className="relative w-full min-h-[50vh] sm:min-h-[20vh] lg:min-h-[20vh] bg-cover bg-center text-white py-16 px-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h1>
        {subtitle && <p className="text-base sm:text-lg">{subtitle}</p>}
        {children && <div>{children}</div>}
        {buttons && (
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {buttons.map((btn, idx) => (
              <a
                key={idx}
                href={btn.href}
                className={
                  btn.variant === 'secondary'
                    ? 'bg-white text-gray-800 py-2 px-5 rounded-lg'
                    : 'bg-blue-600 text-white py-2 px-5 rounded-lg'
                }
              >
                {btn.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
