// src/components/Header.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow py-3 px-4 sm:px-6 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Логотип */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Damu Qurylys — тротуарная плитка и бетонные изделия"
            width={160}
            height={60}
            priority
          />
        </Link>

        {/* Навигация на десктопе */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/">Главная</Link>
          <Link href="/about">О нас</Link>
          <Link href="/catalog">Продукция</Link>
          <Link href="/turnkey">Под ключ</Link>
          <Link href="/calculate">Рассчитать</Link>
          <Link href="/projects">Проекты</Link>
          <Link href="/contacts">Контакты</Link>
        </nav>

        {/* Контакты на десктопе */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://wa.me/77001234567" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
          </a>
          <a href="tel:+77001234567" className="text-blue-600 font-semibold text-sm">+7 700 718 03 38</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
            Заказать звонок
          </button>
        </div>

        {/* Бургер на мобилке */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <Image
            src={open ? '/icons/close.svg' : '/icons/menu.svg'}
            alt={open ? 'Закрыть меню' : 'Открыть меню'}
            width={28}
            height={28}
          />
        </button>
      </div>

      {/* Мобильное меню */}
      {open && (
        <div className="md:hidden mt-4 space-y-4 text-sm font-medium">
          <Link href="/" onClick={() => setOpen(false)}>Главная</Link>
          <Link href="/about" onClick={() => setOpen(false)}>О нас</Link>
          <Link href="/catalog" onClick={() => setOpen(false)}>Продукция</Link>
          <Link href="/turnkey" onClick={() => setOpen(false)}>Под ключ</Link>
          <Link href="/calculate" onClick={() => setOpen(false)}>Рассчитать</Link>
          <Link href="/projects" onClick={() => setOpen(false)}>Проекты</Link>
          <Link href="/contacts" onClick={() => setOpen(false)}>Контакты</Link>
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
