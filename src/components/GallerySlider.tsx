// src/components/GallerySlider.tsx
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GallerySliderProps {
  images: string[];
  activeIndex?: number;
  title?: string;
}

export default function GallerySlider({ images, activeIndex, title = 'Фото товара' }: GallerySliderProps) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof activeIndex === 'number') {
      setIndex(activeIndex);
    }
  }, [activeIndex]);

  return (
    <>
      <div className="relative max-w-[700px] mx-auto">
        <Carousel
          showThumbs={false}
          showArrows={true}
          showStatus={false}
          showIndicators={true}
          infiniteLoop
          selectedItem={index}
          onChange={(i) => setIndex(i)}
          onClickItem={(i) => {
            setIndex(i);
            setOpen(true);
          }}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            )
          }
        >
          {images.map((src, i) => (
            <div key={i} className="aspect-[4/3] relative w-full h-[300px] sm:h-[400px]">
              <Image
                src={src}
                alt={`${title} ${i + 1}`}
                fill
                className="rounded-lg object-cover cursor-zoom-in"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </Carousel>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((src, i) => ({ src, alt: `${title} ${i + 1}` }))}
        plugins={[Thumbnails]}
        on={{ view: ({ index: i }) => setIndex(i) }}
      />
    </>
  );
}
