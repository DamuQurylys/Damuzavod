// src/pages/catalog/[slug].tsx
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { products } from '@/data/products';
import GallerySlider from '@/components/GallerySlider';

export default function ProductPage() {
  const router = useRouter();
  const { slug } = router.query;
  const product = products.find((p) => p.slug === slug);
  const [selectedColor, setSelectedColor] = useState(0);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-semibold mb-4">Товар не найден</h1>
        <Link href="/catalog" className="text-blue-600 hover:underline">
          ← Вернуться к каталогу
        </Link>
      </div>
    );
  }

  const colors = [
    { name: 'Серый', index: 0 },
    { name: 'Черный', index: 1 },
    { name: 'Красный', index: 2 },
    { name: 'Коричневый', index: 3 },
    { name: 'Желтый', index: 4 },
    { name: 'Оранжевый', index: 5 },
    { name: 'Белый', index: 6 },
  ];

  return (
    <>
      <Head>
        <title>{product.title} | Каталог | Damu Qurylys</title>
        <meta name="description" content={product.shortDescription} />
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.shortDescription} />
        <meta property="og:image" content={product.fullImages?.[selectedColor] || product.fullImages?.[0]} />
      </Head>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:underline text-blue-600">Главная</Link>
          <span className="mx-2">/</span>
          <Link href="/catalog" className="hover:underline text-blue-600">Продукция</Link>
          <span className="mx-2">/</span>
          <span>{product.title}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <GallerySlider images={product.fullImages} activeIndex={selectedColor} />

            <div className="flex flex-wrap gap-2">
              {colors.map((color, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedColor(color.index)}
                  className={`w-8 h-8 rounded-full border-2 ${selectedColor === color.index ? 'ring-2 ring-blue-500' : ''}`}
                  style={{ backgroundColor: getColorCode(color.name) }}
                  title={color.name}
                ></button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-3xl sm:text-4xl font-bold">{product.title}</div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {product.shortDescription}
            </p>
            <div className="prose prose-blue max-w-none text-gray-800 prose-p:leading-relaxed prose-p:text-base">
              <p>{product.fullDescription}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow text-gray-700 space-y-3">
              <h2 className="text-lg font-semibold mb-2">Характеристики</h2>
              <ul className="space-y-1">
                {product.specs &&
                  Object.entries(product.specs).map(([key, value]) => (
                    <li key={key}>
                      <strong className="capitalize">{key}:</strong> {value}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center pt-12">
          <Link href="/catalog" className="text-blue-600 hover:underline">
            ← Вернуться к каталогу
          </Link>
        </div>
      </main>
    </>
  );
}

function getColorCode(name: string) {
  const map: Record<string, string> = {
    Серый: '#a0a0a0',
    Черный: '#2e2e2e',
    Красный: '#c0392b',
    Коричневый: '#7b3f00',
    Желтый: '#f1c40f',
    Оранжевый: '#e67e22',
    Белый: '#ecf0f1',
  };
  return map[name] || '#cccccc';
}
