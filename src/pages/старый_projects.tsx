import Image from 'next/image';
import { projects } from '@/data/projects';
import Hero from '@/components/Hero';

export default function Projects() {
  return (
    <>
      {/* Hero-блок */}
      <Hero
        title="Реализованные проекты"
        subtitle="Готовые объекты с нашей брусчаткой и бетонными изделиями"
        backgroundImage="/projects/projects-hero.jpg" // не забудь добавить фон в public
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold">Наши работы</h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Посмотрите, как выглядит наша продукция в реальных условиях: от частных дворов до общественных зон.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={500}
                className="w-full h-auto object-cover"
              />
              <div className="p-4 space-y-2">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
