// src/components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <Link href="/">
        <Image src="/logo.png" alt="Damu Qurylys" width={160} height={60} priority />
      </Link>
      <nav className="space-x-4 hidden md:flex">
        <Link href="/">Главная</Link>
        <Link href="/about">О нас</Link>
        <Link href="/catalog">Продукция</Link>
        <Link href="/turnkey">Под ключ</Link>
        <Link href="/calculate">Рассчитать стоимость</Link>
        <Link href="/projects">Проекты</Link>
        <Link href="/contacts">Контакты</Link>
      </nav>
      <div className="flex items-center space-x-4">
        <a href="https://wa.me/77001234567" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold">WhatsApp</a>
        <a href="tel:+77001234567" className="font-semibold text-blue-600">+7 700 718 03 38</a>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hidden md:block">Заказать звонок</button>
      </div>
    </header>
  );
}
