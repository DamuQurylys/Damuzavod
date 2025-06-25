// src/pages/contacts.tsx
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';

export default function Contacts() {
  return (
    <>
      <Hero backgroundImage="/contacts-hero.jpg">
        <div className="max-w-4xl mx-auto text-left space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Контакты</h1>
          <p className="text-lg md:text-xl font-medium">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>
      </Hero>


      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Левая часть: контактная информация */}
          <div className="space-y-4 text-gray-800 text-base sm:text-lg leading-relaxed">
            <p><strong>Адрес:</strong> г. Алматы, мкр. Айгерим-1, ул. МТФ-1, дом 8Б</p>
            <p>
              <strong>Телефон:</strong>{' '}
              <a href="tel:+77007180338" className="text-blue-600 hover:underline">
                +7 (700) 718 03 38
              </a>
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:info@damuzavod.kz" className="text-blue-600 hover:underline">
                info@damuzavod.kz
              </a>
            </p>
            <p><strong>Время работы:</strong> Пн–Сб: 9:00–18:00</p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://wa.me/77007180338"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                WhatsApp
              </a>
              <a
                href="https://t.me/damu_qurylys"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Telegram
              </a>
            </div>
          </div>

          {/* Правая часть: карта и ссылки */}
          <div>
            <iframe
              className="w-full h-72 sm:h-80 lg:h-96 rounded-lg border"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.0152098373575!2d76.888432!3d43.238949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836ebf4a19e6e9%3A0x5fa0b8889eaf6c2c!2z0JDQstGC0L7QvdC-0LzQvtCz0YDQsNC00YHQutCw0Y8!5e0!3m2!1sru!2skz!4v1617180000000!5m2!1sru!2skz"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта"
            ></iframe>

            <div className="text-sm text-gray-600 mt-3">
              <span className="block mb-1">Открыть в картах:</span>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://go.2gis.com/mYF89"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-blue-600 font-medium transition"
                >
                  2ГИС
                </a>
                <a
                  href="https://yandex.kz/maps/ru/-/CHVTnYP5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-blue-600 font-medium transition"
                >
                  Яндекс.Карты
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Форма обратной связи */}
        <form className="bg-gray-50 rounded-xl shadow p-6 sm:p-8 max-w-xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-center">Форма обратной связи</h2>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Имя
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Ваше имя"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="Ваш email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Сообщение
            </label>
            <textarea
              id="message"
              required
              rows={4}
              placeholder="Ваше сообщение"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg w-full sm:w-auto mx-auto block"
          >
            Отправить
          </button>
        </form>
      </main>
    </>
  );
}
