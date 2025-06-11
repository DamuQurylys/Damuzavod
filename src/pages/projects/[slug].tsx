import { useRouter } from 'next/router';
import { projects } from '@/data/projects';
import Head from 'next/head';
import Link from 'next/link';
import GallerySlider from '@/components/GallerySlider';

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-semibold mb-4">Проект не найден</h1>
        <Link href="/projects" className="text-blue-600 hover:underline">
          ← Вернуться к списку проектов
        </Link>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{project.title} | Проекты | Damu Qurylys</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.image} />
        <meta property="og:type" content="article" />
      </Head>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Хлебные крошки */}
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:underline text-blue-600">Главная</Link>
          <span className="mx-2">/</span>
          <Link href="/projects" className="hover:underline text-blue-600">Проекты</Link>
          <span className="mx-2">/</span>
          <span>{project.title}</span>
        </nav>

        <div className="space-y-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">{project.title}</h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {project.description}
          </p>
        </div>

        <GallerySlider images={project.images} alt={project.title} />

        {project.details && (
          <div className="prose prose-blue max-w-3xl mx-auto text-gray-800 prose-p:leading-relaxed prose-p:text-base">
            <p>{project.details}</p>
          </div>
        )}

        <hr className="my-12 border-t border-gray-200" />

        <div className="text-center pt-8">
          <Link href="/projects" className="inline-block text-blue-600 hover:underline">
            ← Все проекты
          </Link>
        </div>
      </main>
    </>
  );
}
