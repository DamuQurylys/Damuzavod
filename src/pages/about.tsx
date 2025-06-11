import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';

export default function About() {
  return (
    <>
      <Hero
        title="О компании Damu Qurylys"
        subtitle="10 лет надёжного производства вибропрессованной брусчатки"
        backgroundImage="/about-hero.jpg"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 space-y-16">
        {/* О компании */}
        <section className="space-y-6 text-gray-800">
          <h2 className="text-3xl font-bold text-center md:text-left">О компании Damu Qurylys</h2>
          <p className="leading-relaxed">
            Компания <strong>Damu Qurylys</strong> — это современный завод по производству вибропрессованной брусчатки и бетонных изделий,
            работающий на рынке более 10 лет. Мы гордимся высоким качеством продукции, автоматизированным производственным циклом и командой
            профессионалов, которые сопровождают каждый этап: от проектирования до доставки.
          </p>
          <p className="leading-relaxed">
            Основные направления нашей работы — это производство тротуарной плитки, бордюров, элементов мощения, а также выполнение индивидуальных
            заказов по чертежам клиентов. Мы стремимся обеспечить не только высокое качество, но и доступную цену, работая напрямую без посредников.
          </p>
        </section>

        {/* Фото + список преимуществ */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-6 items-center">
          <div>
            <Image src="/factory-inside.jpg" alt="Цех производства" width={600} height={400} className="rounded-xl w-full object-cover" />
          </div>
          <ul className="space-y-3 text-gray-700 text-base text-center md:text-left">
            <li>✅ Современное оборудование</li>
            <li>✅ Собственные производственные линии</li>
            <li>✅ Квалифицированный персонал</li>
            <li>✅ Сертифицированная продукция</li>
            <li>✅ Доставка по всему Казахстану</li>
          </ul>
        </section>

        {/* Партнёры */}
        <section className="text-center space-y-6">
          <h2 className="text-2xl font-semibold">Наши партнёры</h2>
          <p className="text-gray-600 leading-relaxed">Мы работаем с застройщиками, муниципалитетами и частными клиентами по всему Казахстану.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            <Image src="/partner1.png" alt="Партнёр 1" width={120} height={60} className="object-contain" />
            <Image src="/partner2.png" alt="Партнёр 2" width={120} height={60} className="object-contain" />
            <Image src="/partner3.png" alt="Партнёр 3" width={120} height={60} className="object-contain" />
          </div>
        </section>
      </main>
    </>
  );
}
