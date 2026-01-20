import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Mountain,
  Home as HomeIcon,
  Car,
  Wifi,
  Users,
  ArrowRight,
  Volume2,
  VolumeX,
  Bed,
  Bath,
  UtensilsCrossed,
  ChevronLeft,
  ChevronRight,
  Calendar,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Section } from '../components/ui/Section';
import { SectionHeader } from '../components/ui/SectionHeader';
import { DatePickerModal } from '../components/ui/DatePickerModal';
import { PROPERTY, TRUST_HIGHLIGHTS, STAY_OPTIONS, CONTACT } from '../constants';
import { PRIVATE_ROOM_IMAGES } from '../constants/privateRoomImages';
import { TWO_BHK_IMAGES } from '../constants/twoBhkImages';
import { WHOLE_HOME_IMAGES } from '../constants/wholeHomeImages';
import { MeetHostsPreview } from '../components/home/MeetHostsPreview';
import { AmenitiesShowcase } from '../components/home/AmenitiesShowcase';
import { GalleryPreview } from '../components/home/GalleryPreview';
import { TestimonialsCarousel } from '../components/home/TestimonialsCarousel';
import { LocationPreview } from '../components/home/LocationPreview';
import { ExperiencesPreview } from '../components/home/ExperiencesPreview';
import { QuickContactStrip } from '../components/home/QuickContactStrip';
import { SocialMediaFeeds } from '../components/home/SocialMediaFeeds';

const iconMap: Record<string, React.ReactNode> = {
  Mountain: <Mountain className="w-6 h-6" />,
  Home: <HomeIcon className="w-6 h-6" />,
  Car: <Car className="w-6 h-6" />,
  Wifi: <Wifi className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
};

const heroImages = [
  { src: '/hhs-hero1.jpg', objectPosition: 'center center' },
  { src: '/hhs-hero2.jpg', objectPosition: 'center 70%' },
  { src: '/hhs-hero3.jpeg', objectPosition: 'center center' },
  { src: '/hhs-hero4.avif', objectPosition: 'center center' },
  { src: '/hhs-hero-5.jpg', objectPosition: 'center center' },
  { src: '/hhs-hero-6.jpg', objectPosition: 'center center' },
];

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0, 1]));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % heroImages.length;
        const preloadNext = (next + 1) % heroImages.length;
        setLoadedImages((loaded) => new Set([...loaded, next, preloadNext]));
        return next;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          loadedImages.has(index) && (
            <img
              key={image.src}
              src={image.src}
              alt="Himalayan Valley Homestead"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ objectPosition: image.objectPosition }}
              fetchPriority={index === 0 ? 'high' : 'low'}
            />
          )
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-stone-900/30 to-stone-900/60" />
      </div>

      <div className="relative z-10 section-container text-center text-white pt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-xl text-white mb-6 animate-fade-in">
            {PROPERTY.tagline}
          </h1>
          <p className="text-xl md:text-2xl text-cream-200 mb-4 font-light">
            {PROPERTY.subtagline}
          </p>
          <p className="text-lg text-cream-300/80 mb-10 max-w-2xl mx-auto">
            {PROPERTY.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button href="/booking" size="lg">
              Book Your Stay
            </Button>
            <Button href="/stay-options" variant="white" size="lg">
              Explore Stay Options
            </Button>
          </div>

          <a
            href={CONTACT.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cream-200 hover:text-white transition-colors"
          >
            <Mountain className="w-5 h-5" />
            <span>View Location in Palampur, Himachal Pradesh</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-6'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustHighlights() {
  return (
    <section className="bg-white border-b border-stone-100">
      <div className="section-container py-8">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-12 lg:gap-x-16">
          {TRUST_HIGHLIGHTS.map((highlight) => (
            <div
              key={highlight.title}
              className="flex items-center gap-3 text-stone-600"
            >
              <span className="text-forest-600">{iconMap[highlight.icon]}</span>
              <span className="text-sm md:text-base font-medium">{highlight.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WelcomeSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <Section bg="cream" padding="lg">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <span className="text-forest-600 font-medium tracking-wide uppercase text-sm mb-4 block">
            Welcome
          </span>
          <h2 className="heading-lg text-stone-800 mb-6">
            Welcome to Himalayan Valley Homestead
          </h2>
          <p className="body-md text-stone-600 mb-6">
            Set amidst the lush landscapes of Palampur, Himalayan Valley Homestead is
            a peaceful mountain retreat designed for travelers who value space,
            comfort, and nature.
          </p>
          <p className="body-md text-stone-600 mb-8">
            Whether you're planning a short escape, a family holiday, or a longer
            work-from-the-hills stay, the homestead offers flexible accommodation
            options to suit your needs.
          </p>
          <div className="flex flex-wrap gap-6 text-stone-600">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-serif font-medium text-forest-600">
                {PROPERTY.stats.bedrooms}
              </span>
              <span className="text-sm">Bedrooms</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-serif font-medium text-forest-600">
                {PROPERTY.stats.bathrooms}
              </span>
              <span className="text-sm">Bathrooms</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-serif font-medium text-forest-600">
                {PROPERTY.stats.kitchens}
              </span>
              <span className="text-sm">Kitchens</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-serif font-medium text-forest-600">
                {PROPERTY.stats.parking}
              </span>
              <span className="text-sm">Parking</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden aspect-[3/4] relative group">
              <video
                ref={videoRef}
                src="/welcome-to-hhs.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 bg-stone-900/80 hover:bg-stone-900 text-white p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img
                src="/entrance-road.jpg"
                alt="Entrance road to Himalayan Valley Homestead"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="/hhs-hero-6.jpg"
                alt="Himalayan Valley Homestead at night"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const OPTION_IMAGES: Record<string, { src: string; alt: string }[]> = {
  'private-rooms': PRIVATE_ROOM_IMAGES,
  '2bhk': TWO_BHK_IMAGES,
  'entire-homestead': WHOLE_HOME_IMAGES,
};

const OPTION_HIGHLIGHTS: Record<string, { icon: React.ElementType; label: string; value: string }[]> = {
  'private-rooms': [
    { icon: Bed, label: 'Beds', value: 'Queen/Double' },
    { icon: Bath, label: 'Bathroom', value: 'Shared' },
    { icon: Users, label: 'Guests', value: '1-2' },
  ],
  '2bhk': [
    { icon: Bed, label: 'Bedrooms', value: '2' },
    { icon: Bath, label: 'Bathrooms', value: '2 Attached' },
    { icon: UtensilsCrossed, label: 'Kitchen', value: 'Private' },
  ],
  'entire-homestead': [
    { icon: Bed, label: 'Bedrooms', value: '5' },
    { icon: Bath, label: 'Bathrooms', value: '5' },
    { icon: Car, label: 'Parking', value: '5 Cars' },
  ],
};

function ImageCarousel({ images, title }: { images: { src: string; alt: string }[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayImages = images.slice(0, 5);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      <div className="aspect-[4/3] rounded-xl overflow-hidden">
        <img
          src={displayImages[currentIndex]?.src}
          alt={displayImages[currentIndex]?.alt || title}
          className="w-full h-full object-cover transition-opacity duration-300"
          loading="lazy"
        />
      </div>
      <button
        onClick={goToPrevious}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-stone-700 p-2 rounded-full shadow-md transition-all"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-stone-700 p-2 rounded-full shadow-md transition-all"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {displayImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? 'bg-white w-4' : 'bg-white/60 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function EnhancedStayOptionCard({ option }: { option: (typeof STAY_OPTIONS)[0] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const images = OPTION_IMAGES[option.id] || [];
  const highlights = OPTION_HIGHLIGHTS[option.id] || [];

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-stone-100 hover:shadow-lg transition-shadow duration-300">
        <ImageCarousel images={images} title={option.title} />
        <div className="p-6">
          <h3 className="text-xl font-serif font-medium text-stone-800 mb-2">
            {option.shortTitle}
          </h3>
          <p className="text-stone-600 text-sm mb-4">{option.subtitle}</p>

          <div className="grid grid-cols-3 gap-2 mb-5">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="text-center p-2 bg-cream-50 rounded-lg">
                <highlight.icon className="w-4 h-4 text-forest-600 mx-auto mb-1" />
                <div className="text-xs text-stone-500">{highlight.label}</div>
                <div className="text-sm font-medium text-stone-700">{highlight.value}</div>
              </div>
            ))}
          </div>

          <ul className="space-y-2 mb-5">
            {option.features.slice(0, 3).map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-stone-600">
                <span className="w-1.5 h-1.5 rounded-full bg-forest-500 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {option.idealFor.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-forest-50 text-forest-700 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <Link
              to={option.ctaLink}
              className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-forest-600 text-forest-600 hover:bg-forest-50 py-2.5 px-4 rounded-lg font-medium transition-colors group"
            >
              View Details
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2.5 px-4 rounded-lg font-medium transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Book Now
            </button>
          </div>
        </div>
      </div>
      <DatePickerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        stayOption={option.shortTitle}
      />
    </>
  );
}

function StayOptionsSection() {
  return (
    <Section bg="white" padding="lg">
      <SectionHeader
        title="Choose Your Stay"
        subtitle="Himalayan Valley Homestead offers three thoughtfully designed accommodation options. All guests enjoy access to shared outdoor spaces, scenic views, and a peaceful environment."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {STAY_OPTIONS.map((option) => (
          <EnhancedStayOptionCard key={option.id} option={option} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Button href="/stay-options" variant="secondary" size="lg">
          View More Details
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </Section>
  );
}

function CTASection() {
  return (
    <Section bg="forest" padding="lg">
      <div className="text-center">
        <h2 className="heading-lg text-white mb-6">
          Ready for Your Mountain Escape?
        </h2>
        <p className="body-md text-cream-200 max-w-2xl mx-auto mb-10">
          Book directly with us for the best rates, or reach out to discuss whole-home
          bookings, long stays, and group retreats.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/booking" variant="white" size="lg">
            Book Your Stay
          </Button>
          <Button href="/contact" variant="secondary" size="lg" className="border-cream-300 text-cream-300 hover:bg-cream-300 hover:text-forest-800">
            Contact Us
          </Button>
        </div>
      </div>
    </Section>
  );
}

export function Home() {
  return (
    <>
      <HeroSection />
      <TrustHighlights />
      <WelcomeSection />
      <StayOptionsSection />
      <AmenitiesShowcase />
      <GalleryPreview />
      <ExperiencesPreview />
      <LocationPreview />
      <TestimonialsCarousel />
      <MeetHostsPreview />
      <SocialMediaFeeds />
      <QuickContactStrip />
      <CTASection />
    </>
  );
}
