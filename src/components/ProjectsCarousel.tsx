// src/components/ProjectsCarousel.tsx
import { projects as allProjects } from '@/data/projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectsCarouselProps {
  projects?: typeof allProjects;
  title?: string;
}

export default function ProjectsCarousel({ projects = allProjects, title }: ProjectsCarouselProps) {
  return (
    <div className="space-y-6">
      {title && (
        <h2 className="text-2xl font-bold text-center">{title}</h2>
      )}

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <Link
              href={`/projects/${project.slug}`}
              className="block bg-white border rounded-xl shadow-sm hover:shadow-md overflow-hidden transition"
            >
              <div className="aspect-[4/3] relative w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}