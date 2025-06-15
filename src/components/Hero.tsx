'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 40 && !scrolled) {
        setScrolled(true);
      } else if (currentScroll < 10 && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-white shadow-sm py-1 text-black' : 'bg-transparent py-4 text-white'
      } px-4 sm:px-6`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-y-2">
        {/* Логотип */}
        <Link href="/" className="flex-shrink-0">
          <div
            className={`relative transition-all duration-300 ease-in-out ${
              scrolled ? 'w-[100px] h-[40px]' : 'w-[160px] h-[60px]'
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

        {/* Навигация */}
        <nav
          className={`hidden md:flex flex-wrap justify-start items-center gap-6 transition-all duration-300 ${
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

        {/* Контакты и соцсети */}
        <div className="hidden md:flex flex-col items-end gap-2 mt-2">
          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/77001234567"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
            </a>
            <a
              href="https://t.me/damu_qurylys"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <Image src="/icons/telegram.svg" alt="Telegram" width={24} height={24} />
            </a>
            <a
              href="https://instagram.com/damu_qurylys"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
            </a>
          </div>
          <a href="tel:+77001234567" className="font-semibold text-sm">
            +7 700 718 03 38
          </a>
          <button className="text-sm font-medium underline hover:opacity-80 transition">
            Заказать звонок
          </button>
        </div>

        {/* Бургер (мобилка) */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden self-end">
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
          <div className="flex gap-6 pt-2">
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
