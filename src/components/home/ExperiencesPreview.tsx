import { Link } from 'react-router-dom';
import { MapPin, Coffee, Laptop, Star, Heart, ArrowRight } from 'lucide-react';

const nearbyAttractions = [
  {
    name: 'Palampur Tea Gardens',
    distance: '8 km',
    image: '/palampur-tea-plantation.webp',
  },
  {
    name: 'Baijnath Temple',
    distance: '16 km',
    image: '/baijnath-temple-palampur.jpg',
  },
  {
    name: 'Bir Billing',
    distance: '35 km',
    image: '/bir-billing.jpg',
  },
];

const slowExperiences = [
  { title: 'Morning tea on the terrace', icon: Coffee, color: 'bg-amber-100 text-amber-600' },
  { title: 'Work from the mountains', icon: Laptop, color: 'bg-sky-100 text-sky-600' },
  { title: 'Stargazing evenings', icon: Star, color: 'bg-violet-100 text-violet-600' },
  { title: 'Quality family time', icon: Heart, color: 'bg-rose-100 text-rose-600' },
];

export function ExperiencesPreview() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/life-at-homestead.jpg"
          alt="Life at the Homestead"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/90 via-stone-900/80 to-stone-900/90" />
      </div>

      <div className="relative z-10 section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-cream-400 font-medium tracking-wide uppercase text-sm mb-4 block">
              Things to Do
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4">
              Experiences & Attractions
            </h2>
            <p className="text-lg text-cream-200 max-w-2xl mx-auto">
              From tea gardens and temple trails to quiet evenings on the rooftop
              terrace, your stay is shaped by the rhythm of the mountains.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {nearbyAttractions.map((attraction) => (
              <Link
                key={attraction.name}
                to="/experiences"
                className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 text-cream-300 text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    {attraction.distance} away
                  </div>
                  <h3 className="text-xl font-serif font-medium text-white group-hover:text-cream-200 transition-colors">
                    {attraction.name}
                  </h3>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-4 h-4 text-stone-700" />
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-serif font-medium text-white text-center mb-6">
              Slow Experiences at the Homestead
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {slowExperiences.map((exp) => {
                const IconComponent = exp.icon;
                return (
                  <div
                    key={exp.title}
                    className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl ${exp.color} flex items-center justify-center mx-auto mb-3`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-medium text-stone-800">{exp.title}</h4>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/experiences"
              className="inline-flex items-center gap-2 bg-white text-stone-800 px-8 py-4 rounded-xl font-medium hover:bg-cream-100 transition-colors group shadow-lg"
            >
              Discover All Experiences
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
