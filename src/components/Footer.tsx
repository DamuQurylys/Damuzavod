import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-16 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 gap-y-4 text-sm sm:text-base text-gray-700 text-center md:text-left">
        <div className="space-y-2">
          <Link href="/">
            <Image src="/logo.png" alt="Damu Qurylys" width={140} height={50} className="mx-auto md:mx-0" />
          </Link>
          <p>Завод Damu Qurylys — надёжный производитель вибропрессованной брусчатки и бетонных изделий в Алматы. Доставка по всему Казахстану.</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Навигация</h3>
          <ul className="space-y-1">
            <li><Link href="/">Главная</Link></li>
            <li><Link href="/about">О нас</Link></li>
            <li><Link href="/catalog">Продукция</Link></li>
            <li><Link href="/turnkey">Под ключ</Link></li>
            <li><Link href="/calculate">Рассчитать стоимость</Link></li>
            <li><Link href="/projects">Проекты</Link></li>
            <li><Link href="/contacts">Контакты</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Контакты</h3>
          <p>г. Алматы, ул. Примерная, 123</p>
          <p>+7 (700) 123 45 67</p>
          <p>Email: info@damu.kz</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Мы в мессенджерах</h3>
          <div className="flex justify-center md:justify-start gap-3">
            <a href="https://wa.me/77007180338" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="https://t.me/damu_qurylys" target="_blank" rel="noopener noreferrer">Telegram</a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        © 2025 Damu Qurylys. Все права защищены.
      </div>
    </footer>
  );
}
