import { Link } from 'react-router-dom';
import { ArrowRight, Camera } from 'lucide-react';
import { Section } from '../ui/Section';

const galleryPreviewImages = [
  {
    src: '/hhs-hero1.jpg',
    alt: 'Homestead exterior with mountain backdrop',
    category: 'Exteriors',
    span: 'col-span-2 row-span-2',
    aspect: 'aspect-square',
  },
  {
    src: '/room-hhs.avif',
    alt: 'Cozy bedroom with views',
    category: 'Rooms',
    span: 'col-span-1 row-span-1',
    aspect: 'aspect-square',
  },
  {
    src: '/outdoor-view.jpeg',
    alt: 'Mountain views from terrace',
    category: 'Views',
    span: 'col-span-1 row-span-1',
    aspect: 'aspect-square',
  },
  {
    src: '/life-at-homestead.jpg',
    alt: 'Life at the homestead',
    category: 'Living',
    span: 'col-span-1 row-span-1',
    aspect: 'aspect-square',
  },
  {
    src: '/hhs-hero-6.jpg',
    alt: 'Homestead evening view',
    category: 'Exteriors',
    span: 'col-span-1 row-span-1',
    aspect: 'aspect-square',
  },
  {
    src: '/palampur-tea-plantation.webp',
    alt: 'Tea gardens nearby',
    category: 'Surroundings',
    span: 'col-span-2 row-span-1',
    aspect: 'aspect-[2/1]',
  },
];

export function GalleryPreview() {
  return (
    <Section bg="cream" padding="lg">
      <div className="text-center mb-12">
        <span className="text-forest-600 font-medium tracking-wide uppercase text-sm mb-4 block">
          Photo Gallery
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-800 mb-4">
          Glimpses of the Homestead
        </h2>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
          Explore our rooms, outdoor spaces, and the stunning Himalayan views that
          await you.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto mb-10">
        {galleryPreviewImages.map((image, index) => (
          <Link
            key={index}
            to="/gallery"
            className={`${image.span} rounded-xl md:rounded-2xl overflow-hidden group relative`}
          >
            <div className={`${image.aspect} w-full`}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium text-stone-700">
                <Camera className="w-3 h-3 md:w-4 md:h-4" />
                {image.category}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 bg-stone-800 text-white px-8 py-4 rounded-xl font-medium hover:bg-stone-900 transition-colors group shadow-lg hover:shadow-xl"
        >
          <Camera className="w-5 h-5" />
          Explore Full Gallery
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </Section>
  );
}
