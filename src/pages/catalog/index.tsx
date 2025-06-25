import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';
import Hero from '@/components/Hero';

export default function CatalogPage() {
  return (
    <>
      <Hero backgroundImage="/hero/catalog-hero.png">
        <div className="max-w-4xl mx-auto text-left space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Каталог продукции</h1>
          <p className="text-lg md:text-xl font-medium">
            Вся наша продукция с характеристиками и примерами
          </p>
        </div>
      </Hero>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold">Ассортимент</h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Ознакомьтесь с характеристиками, размерами и фото каждого изделия.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/catalog/${product.slug}`}
              className="group block bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-blue-500 transition duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={product.previewImages[0]}
                  alt={product.title}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 space-y-2">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  {product.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                  {product.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
