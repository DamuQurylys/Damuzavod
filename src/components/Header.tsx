'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-1 shadow-sm' : 'py-4 shadow'
      } px-4 sm:px-6`}
    >
      <div className="flex justify-between items-center">
        {/* Логотип */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Damu Qurylys — тротуарная плитка и бетонные изделия"
            width={scrolled ? 100 : 160}
            height={scrolled ? 40 : 60}
            priority
          />
        </Link>

        {/* Навигация (десктоп) */}
        <nav
          className={`hidden md:flex items-center space-x-6 transition-all duration-300 ${
            scrolled ? 'text-sm' : 'text-base'
          }`}
        >
          <Link href="/">Главная</Link>
          <Link href="/about">О нас</Link>
          <Link href="/catalog">Продукция</Link>
          <Link href="/turnkey">Под ключ</Link>
          <Link href="/calculate">Рассчитать</Link>
          <Link href="/projects">Проекты</Link>
          <Link href="/contacts">Контакты</Link>
        </nav>

        {/* Контакты (десктоп) */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://wa.me/77001234567"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
          </a>
          <a href="tel:+77001234567" className="text-blue-600 font-semibold text-sm">
            +7 700 718 03 38
          </a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
            Заказать звонок
          </button>
        </div>

        {/* Бургер (мобилка) */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          <Image
            src={menuOpen ? '/icons/close.svg' : '/icons/menu.svg'}
            alt={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            width={28}
            height={28}
          />
        </button>
      </div>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-sm font-medium">
          <Link href="/" onClick={() => setMenuOpen(false)}>Главная</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>О нас</Link>
          <Link href="/catalog" onClick={() => setMenuOpen(false)}>Продукция</Link>
          <Link href="/turnkey" onClick={() => setMenuOpen(false)}>Под ключ</Link>
          <Link href="/calculate" onClick={() => setMenuOpen(false)}>Рассчитать</Link>
          <Link href="/projects" onClick={() => setMenuOpen(false)}>Проекты</Link>
          <Link href="/contacts" onClick={() => setMenuOpen(false)}>Контакты</Link>
          <div className="flex gap-4 pt-2">
            <a href="https://wa.me/77001234567" aria-label="WhatsApp">
              <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
            </a>
            <a href="https://t.me/damu_qurylys" aria-label="Telegram">
              <Image src="/icons/telegram.svg" alt="Telegram" width={20} height={20} />
            </a>
            <a href="https://instagram.com/damu_qurylys" aria-label="Instagram">
              <Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
