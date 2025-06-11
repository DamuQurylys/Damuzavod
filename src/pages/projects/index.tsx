// src/pages/projects/index.tsx
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import Hero from '@/components/Hero';

export default function Projects() {
  return (
    <>
      {/* Hero-блок */}
      <Hero
        title="Реализованные проекты"
        subtitle="Готовые объекты с нашей брусчаткой и бетонными изделиями"
        backgroundImage="/projects/projects-hero.jpg"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold">Наши работы</h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Посмотрите, как выглядит наша продукция в реальных условиях: от частных дворов до общественных зон.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group block bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-blue-500 transition duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 space-y-2">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">{project.title}</h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
