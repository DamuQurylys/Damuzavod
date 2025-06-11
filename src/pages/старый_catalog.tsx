// src/pages/catalog.tsx
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';

export default function Catalog() {
  const products = [
    {
      id: 1,
      name: 'Кирпичик 100×200',
      image: '/product1.jpg',
      href: '/catalog/kirpichik-100x200',
      description: 'Классическая форма для тротуаров и дворов. Прочность и универсальность.',
    },
    {
      id: 2,
      name: 'Квадрат 200×200',
      image: '/product2.jpg',
      href: '/catalog/kvadrat-200x200',
      description: 'Популярный вариант для парковок и площадок.',
    },
    {
      id: 3,
      name: 'Ландхаус',
      image: '/product3.jpg',
      href: '/catalog/landhaus',
      description: 'Имитирует натуральный камень. Для декоративного мощения.',
    },
    {
      id: 4,
      name: 'Триада',
      image: '/product4.jpg',
      href: '/catalog/triada',
      description: 'Состоит из трёх элементов. Уникальные узоры.',
    },
    {
      id: 5,
      name: '600×300',
      image: '/product5.jpg',
      href: '/catalog/600x300',
      description: 'Плитка для тротуаров и промышленных территорий.',
    },
    {
      id: 6,
      name: '300×300',
      image: '/product6.jpg',
      href: '/catalog/300x300',
      description: 'Удобна в укладке. Для дорожек и аллей.',
    },
    {
      id: 7,
      name: 'Решётка газонная',
      image: '/product7.jpg',
      href: '/catalog/reshotka-gazon',
      description: 'Укрепляет почву. Парковки и подъездные пути.',
    },
    {
      id: 8,
      name: 'Бордюр',
      image: '/product8.jpg',
      href: '/catalog/bordyur',
      description: 'Для отделения тротуаров, клумб, проездов.',
    },
    {
      id: 9,
      name: 'Поребрик',
      image: '/product9.jpg',
      href: '/catalog/porebrik',
      description: 'Компактный. Прост в монтаже.',
    },
    {
      id: 10,
      name: 'Старая Азия',
      image: '/product10.jpg',
      href: '/catalog/staraya-aziya',
      description: 'Создаёт эффект старины. Декоративные проекты.',
    },
    {
      id: 11,
      name: 'Кирпичик 120×240',
      image: '/product11.jpg',
      href: '/catalog/kirpichik-120x240',
      description: 'Удобен для укладки. Для улиц и террас.',
    },
    {
      id: 12,
      name: 'Калейдоскоп',
      image: '/product12.jpg',
      href: '/catalog/kaleidoskop',
      description: 'Яркие узоры. Оригинальная форма.',
    },
  ];

  return (
    <>
      <Hero
        title="Каталог"
        subtitle="В наличии брусчатка, бордюр, поребрик. Доставка по всему Казахстану. Гарантия 6 лет."
        backgroundImage="/catalog-hero.jpg"
      />

      <main className="px-4 sm:px-6 md:px-8 py-12 space-y-16">
        <section>
          <h1 className="text-3xl font-bold mb-8 text-center">Каталог продукции</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                className="block bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4 space-y-2">
                  <h2 className="text-xl font-semibold line-clamp-2">{product.name}</h2>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{product.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
