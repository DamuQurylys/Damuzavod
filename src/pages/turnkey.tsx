import Image from 'next/image';
import Hero from '@/components/Hero';

export default function Turnkey() {
  return (
    <>
      <Hero
        title="Благоустройство под ключ"
        subtitle="От производства до укладки — реализуем проект полностью силами нашей команды"
        backgroundImage="/turnkey-hero.jpg"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Заголовок страницы */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center">Проекты под ключ</h1>

        {/* Описание услуги */}
        <section className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-800 text-center md:text-left">
          <p>
            Компания <strong>Damu Qurylys</strong> реализует комплексные проекты по благоустройству территорий <strong>под ключ</strong>. Мы не только производим качественную тротуарную плитку и бетонные изделия, но и выполняем полный цикл работ — от проектирования до укладки и озеленения.
          </p>
          <p>
            При выборе услуги под ключ вы получаете <strong>гарантию на продукцию и работы до 6 лет</strong>. Все работы выполняются собственной командой: у нас есть лицензии, квалифицированные сотрудники, спецтехника и полный набор оборудования.
          </p>
        </section>

        {/* Фото + список */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 gap-y-10 items-center">
          <div>
            <Image
              src="/turnkey.jpg"
              alt="Работы под ключ"
              width={600}
              height={400}
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>
          <ul className="space-y-3 text-gray-700 text-base sm:text-lg">
            <li>✅ Полный цикл: от производства до укладки</li>
            <li>✅ Гарантия на продукцию и работы — 6 лет</li>
            <li>✅ Наличие лицензий и СМР-допусков</li>
            <li>✅ Вся необходимая техника и инструменты</li>
            <li>✅ Опытная команда монтажников</li>
            <li>✅ Работаем по всему Казахстану</li>
          </ul>
        </section>

        {/* Партнёры */}
        <section className="text-center mt-12 space-y-6">
          <h2 className="text-2xl font-semibold">С нами работают:</h2>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <Image src="/partner1.png" alt="Партнёр 1" width={120} height={60} className="object-contain" />
            <Image src="/partner2.png" alt="Партнёр 2" width={120} height={60} className="object-contain" />
            <Image src="/partner3.png" alt="Партнёр 3" width={120} height={60} className="object-contain" />
          </div>
        </section>
      </main>
    </>
  );
}
