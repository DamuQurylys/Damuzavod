// src/pages/index.tsx
import dynamic from 'next/dynamic';

const Carousel = dynamic(() =>
  import('react-responsive-carousel').then(mod => mod.Carousel),
  { ssr: false }
) as any;
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import { projects } from '@/data/projects';
import ProjectsCarousel from '@/components/ProjectsCarousel';
import { products } from '@/data/products';

export default function Home() {
  return (
    <>
      {/* Hero-блок */}
       <Hero backgroundImage="/hero/main-hero.webp" buttons={[
        { label: 'Каталог продукции', href: '/catalog' },
        { label: 'Рассчитать стоимость', href: '/calculate' }
      ]}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Завод бетонных изделий
        </h1>
        <p className="text-lg sm:text-xl">Гарантия 6 лет.</p>
      </Hero>



      <main className="px-4 sm:px-6 md:px-8 py-12 space-y-16">
        {/* Преимущества */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm sm:text-base">
          {["Автоматическая линия", "Гарантия 6 лет", "Низкие цены без посредников", "Выполнениие под ключ"].map((item, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded-lg shadow">
              {item}
            </div>
          ))}
        </section>

        {/* Популярные позиции */}
        <section id="catalog" className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Популярные позиции</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.slice(0, 6).map((product, index) => (
              <div key={index} className="border p-4 rounded-lg hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded">
                  <Carousel
                    showThumbs={false}
                    infiniteLoop
                    autoPlay={false}
                    showStatus={false}
                    showIndicators={false}
                    swipeable={true}
                    emulateTouch={true}
                  >
                    {product.previewImages.map((img, i) => (
                      <div key={i} className="w-full h-auto">
                        <Image
                          src={img}
                          alt={`${product.title} ${i + 1}`}
                          width={800}
                          height={600}
                          className="object-cover w-full h-auto rounded"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          unoptimized
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
                <h3 className="font-semibold text-lg mt-4 line-clamp-2">{product.title}</h3>
                <p className="text-sm text-gray-600">{product.price}</p>
                <Link href={`/catalog/${product.slug}`} className="text-blue-600 hover:underline">Подробнее</Link>
              </div>
            ))}
          </div>
        </section>

        {/* О заводе */}
        <section id="about" className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <Image src="/factory.jpg" alt="Завод" width={600} height={400} className="rounded-lg w-full object-cover" />
          </div>
          <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
            <h2 className="text-2xl font-bold">О заводе</h2>
            <p>10 лет на рынке. Современное оборудование. Производим до 500 м² в сутки.</p>
            <p>Сертификаты качества, опытные сотрудники, надёжные поставки по всему РК.</p>
          </div>
        </section>

        {/* Объекты */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Выполненные объекты</h2>
          <ProjectsCarousel projects={projects.slice(0, 6)} />
        </section>

        {/* Клиенты */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Нам доверяют</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 items-center justify-items-center">
            {[
              'kusto.png',
              'bi-group.png',
              'gas-station.png',
              'almaty-akimat.png',
              'mall.png',
              'school.png',
            ].map((logo, i) => (
              <div key={i} className="w-28 h-20 relative grayscale hover:grayscale-0 transition">
                <Image
                  src={`/clients/${logo}`}
                  alt={`Клиент ${i + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 80px, 120px"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Новости */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Новости компании</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="border p-4 rounded-lg">
                <Image
                  src="/news.jpg"
                  alt={`Новость ${i}`}
                  width={400}
                  height={250}
                  className="rounded mb-2 w-full object-cover"
                />
                <h3 className="font-semibold">Запуск новой производственной линии</h3>
                <p className="text-sm text-gray-600">апрель 2025</p>
              </div>
            ))}
          </div>
        </section>

        {/* Статьи */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Полезные статьи</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map(i => (
              <div key={i} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg">Как выбрать брусчатку</h3>
                <p>Советы по выбору прочной и долговечной брусчатки для вашего участка.</p>
                <Link href="/articles" className="text-blue-600 hover:underline">Читать далее</Link>
              </div>
            ))}
          </div>
        </section>

        {/* Видео */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Видео с производства</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map(i => (
              <div key={i} className="aspect-video w-full">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Видео"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
