'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 40 && !scrolled) {
        setScrolled(true);
      } else if (currentScroll < 10 && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-white text-black shadow-sm py-2' : 'bg-transparent text-white py-4'
      } px-4 sm:px-6`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-start">
        {/* Левый блок — логотип */}
        <Link href="/" className="flex-shrink-0">
          <div
            className={`relative transition-all duration-300 ease-in-out ${
              scrolled ? 'w-[120px] h-[48px]' : 'w-[180px] h-[68px]'
            }`}
          >
            <Image
              src="/logo.svg"
              alt="Damu Qurylys — Завод тротуарной плитки, брусчатки, бордюров и поребриков"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Правый блок */}
        <div className="flex flex-col items-end gap-3 w-full md:w-auto mt-2 md:mt-0">
          {/* Верхняя строка: соцсети, телефон, кнопка */}
          <div className="flex items-center gap-6">
            <a href="https://wa.me/77007180338" aria-label="WhatsApp">
              <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={22} height={22} />
            </a>
            <a href="https://t.me/damuzavod" aria-label="Telegram">
              <Image src="/icons/telegram.svg" alt="Telegram" width={22} height={22} />
            </a>
            <a href="https://instagram.com/damuzavod" aria-label="Instagram">
              <Image src="/icons/instagram.svg" alt="Instagram" width={22} height={22} />
            </a>

            <span className="text-sm font-medium whitespace-nowrap">
              +7 700 718 03 38
            </span>

            <button className="text-sm font-semibold underline hover:opacity-80 transition whitespace-nowrap">
              Заказать звонок
            </button>
          </div>

          {/* Нижняя строка: навигация */}
          <nav className="flex gap-6 text-sm font-medium">
            <Link href="/">Главная</Link>
            <Link href="/about">О нас</Link>
            <Link href="/catalog">Продукция</Link>
            <Link href="/turnkey">Под ключ</Link>
            <Link href="/calculate">Рассчитать</Link>
            <Link href="/projects">Проекты</Link>
            <Link href="/contacts">Контакты</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
