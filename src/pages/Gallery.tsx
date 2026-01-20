import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { GALLERY_IMAGES } from '../constants';

const categories = [
  'All',
  'Exteriors',
  'Rooms',
  'Private Rooms',
  '2BHK',
  'Whole Home',
  'Common Areas',
  'Rooftop & Views',
  'Food',
  'Guest Moments',
  'Surroundings',
];

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-forest-800">
      <div className="section-container text-center text-white">
        <span className="text-cream-400 font-medium tracking-wide uppercase text-sm mb-4 block">
          Photo Gallery
        </span>
        <h1 className="heading-xl text-white mb-6">Gallery</h1>
        <p className="body-lg text-cream-200 max-w-2xl mx-auto">
          Explore our rooms, balconies, rooftop terrace, and the stunning Himalayan
          views that await you at the homestead.
        </p>
      </div>
    </section>
  );
}

function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages =
    activeCategory === 'All'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Section bg="cream" padding="lg">
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeCategory === category
                ? 'bg-forest-600 text-white'
                : 'bg-white text-stone-600 hover:bg-cream-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            onClick={() => openLightbox(index)}
            className="aspect-square rounded-xl overflow-hidden group relative"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-stone-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-sm">{image.category}</span>
            </div>
          </button>
        ))}
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-stone-900/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-cream-400 transition-colors p-2"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 text-white hover:text-cream-400 transition-colors p-2"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 text-white hover:text-cream-400 transition-colors p-2"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="max-w-5xl max-h-[80vh] mx-4">
            <img
              src={filteredImages[currentImageIndex].src}
              alt={filteredImages[currentImageIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white text-sm">
                {filteredImages[currentImageIndex].category}
              </p>
              <p className="text-stone-400 text-sm mt-1">
                {currentImageIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}

export function Gallery() {
  return (
    <>
      <HeroSection />
      <GalleryGrid />
    </>
  );
}
