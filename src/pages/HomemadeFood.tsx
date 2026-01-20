import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  UtensilsCrossed,
  Coffee,
  Sun,
  Moon,
  IceCream,
  GlassWater,
  Clock,
  Phone,
  ChefHat,
  Heart,
  Leaf,
  X,
  ZoomIn,
} from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { CONTACT } from '../constants';

const menuCategories = [
  {
    id: 'breakfast',
    title: 'Breakfast',
    icon: Sun,
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    description: 'Start your mountain morning with wholesome, home-cooked favorites',
    items: [
      { name: 'Vegetable Poha', price: 75, description: 'Light flattened rice with peanuts and fresh vegetables' },
      { name: 'Vegetable Upma', price: 75, description: 'Savory semolina with mixed vegetables and spices' },
      { name: 'Parantha with Pickle, Curd & Green Chutney', price: '80-100', description: 'Stuffed flatbread (Aaloo, Aaloo Pyaaz, Paneer, Mix)', isPopular: true },
      { name: 'Cold Sandwich', price: 120, description: 'Fresh vegetables layered between soft bread slices' },
      { name: 'Veg Grilled Sandwich', price: 150, description: 'Crispy grilled sandwich with cheese and vegetables', isPopular: true },
      { name: 'Puri, Aaloo Bhaji & Raita', price: 230, description: '4 fluffy puris with spiced potato curry and yogurt' },
      { name: 'Boiled Eggs (2 Pcs)', price: 30, description: 'Farm-fresh eggs, perfectly boiled' },
    ],
  },
  {
    id: 'lunch-dinner',
    title: 'Lunch & Dinner',
    icon: UtensilsCrossed,
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    description: 'Hearty North Indian meals prepared with love and fresh ingredients',
    items: [
      { name: 'Dal Tadka', price: 150, description: 'Yellow lentils tempered with aromatic spices' },
      { name: 'Mix Veg / Seasonal Veg', price: 180, description: 'Fresh garden vegetables cooked in mild spices' },
      { name: 'Shahi Paneer', price: 320, description: 'Cottage cheese in rich, creamy tomato gravy', isPopular: true },
      { name: 'Paneer Bhurji', price: 320, description: 'Scrambled cottage cheese with onions and spices' },
      { name: 'Raita Bowl', price: 120, description: 'Cooling yogurt with cucumber and mild spices' },
      { name: 'Plain Curd Bowl', price: 100, description: 'Fresh homemade yogurt' },
      { name: 'Chole Chawal Thali', price: 180, description: 'Spiced chickpea curry with steamed rice' },
      { name: 'Rajma Chawal', price: 180, description: 'Kidney beans curry with fragrant rice', isPopular: true },
      { name: 'Kadi Chawal', price: 120, description: 'Tangy yogurt curry with rice' },
      { name: 'Vegetable Soup', price: 85, description: 'Warm, comforting soup with fresh vegetables' },
      { name: 'Green Salad', price: 120, description: 'Fresh onion, tomato, and cucumber' },
      { name: 'Veg Thali', price: 250, description: 'Complete meal: Dal, mix veg, raita, rice, 3 rotis, salad', isPopular: true },
      { name: 'Tawa Roti', price: 15, description: 'Fresh whole wheat flatbread' },
      { name: 'Maggi Plain / Veg', price: '50/70', description: 'Classic instant noodles, plain or with vegetables' },
    ],
  },
  {
    id: 'himachali-dham',
    title: 'Himachali Dham',
    icon: Heart,
    color: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-50',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    description: 'Traditional Himachali feast - A royal culinary experience',
    isSpecial: true,
    price: 350,
    items: [
      { name: 'Dal Channa', description: 'Traditional lentil preparation' },
      { name: 'Dal Maha', description: 'Black lentils cooked overnight' },
      { name: 'Black Channa Khata', description: 'Tangy chickpea curry' },
      { name: 'Madra', description: 'Yogurt-based curry with chickpeas' },
      { name: 'Sweet Rice', description: 'Aromatic sweet saffron rice' },
    ],
  },
  {
    id: 'dessert',
    title: 'Dessert',
    icon: IceCream,
    color: 'from-pink-500 to-purple-500',
    bgColor: 'bg-pink-50',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
    description: 'Sweet endings to complete your meal',
    items: [
      { name: 'Vanilla Ice Cream', price: 30, description: 'Creamy classic vanilla' },
      { name: 'Gulab Jamun (1 Pc)', price: 30, description: 'Soft milk dumplings in rose syrup' },
    ],
  },
  {
    id: 'refreshments',
    title: 'Refreshments',
    icon: Coffee,
    color: 'from-amber-600 to-yellow-500',
    bgColor: 'bg-amber-50',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-700',
    description: 'Hot and cold beverages to refresh you',
    items: [
      { name: 'Mineral Water', price: 20, description: 'Packaged drinking water' },
      { name: 'Masala Tea', price: 25, description: 'Spiced Indian chai with mountain herbs', isPopular: true },
      { name: 'Coffee', price: 50, description: 'Hot brewed coffee' },
      { name: 'Milk Glass', price: 40, description: 'Fresh warm milk' },
    ],
  },
];

const timings = [
  { label: 'Breakfast', time: '8:30 AM - 10:00 AM', icon: Sun },
  { label: 'Dinner', time: '8:00 PM - 10:00 PM', subtext: 'Last order till 9 PM', icon: Moon },
];

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/homemade-food/cuisine-images/shahi-paneer.jpg"
          alt="Homemade Indian food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/70 to-stone-900/90" />
      </div>
      <div className="relative z-10 section-container text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <ChefHat className="w-5 h-5 text-amber-400" />
          <span className="text-cream-200 text-sm font-medium">Prepared with Love</span>
        </div>
        <h1 className="heading-xl text-white mb-6">
          Homemade Himalayan Kitchen
        </h1>
        <p className="text-xl md:text-2xl text-cream-200 max-w-3xl mx-auto mb-8">
          Savor authentic North Indian and traditional Himachali dishes, freshly prepared by our hosts using local ingredients and time-honored recipes.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
            <Leaf className="w-5 h-5 text-green-400" />
            <span className="text-cream-100">Fresh Ingredients</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
            <Heart className="w-5 h-5 text-rose-400" />
            <span className="text-cream-100">Home-Cooked</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
            <UtensilsCrossed className="w-5 h-5 text-amber-400" />
            <span className="text-cream-100">Vegetarian</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimingsCard() {
  return (
    <div className="bg-gradient-to-br from-forest-600 to-forest-700 rounded-2xl p-6 md:p-8 text-white">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
          <Clock className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-serif font-semibold">Meal Timings</h3>
          <p className="text-cream-200 text-sm">Plan your meals ahead</p>
        </div>
      </div>
      <div className="space-y-4">
        {timings.map((timing) => (
          <div key={timing.label} className="flex items-start gap-4 bg-white/10 rounded-xl p-4">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <timing.icon className="w-5 h-5" />
            </div>
            <div>
              <div className="font-medium">{timing.label}</div>
              <div className="text-cream-200">{timing.time}</div>
              {timing.subtext && (
                <div className="text-cream-300 text-sm mt-1">{timing.subtext}</div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-white/20">
        <p className="text-cream-200 text-sm mb-4">
          Please place your food orders at least 2 hours in advance for the best experience.
        </p>
        <a
          href={`tel:${CONTACT.phones[0]}`}
          className="flex items-center justify-center gap-2 w-full bg-white text-forest-700 py-3 rounded-lg font-medium hover:bg-cream-100 transition-colors"
        >
          <Phone className="w-4 h-4" />
          Order Now: {CONTACT.phones[0]}
        </a>
      </div>
    </div>
  );
}

function MenuCategory({ category }: { category: typeof menuCategories[0] }) {
  const IconComponent = category.icon;

  return (
    <div className={`${category.bgColor} rounded-2xl p-6 md:p-8`}>
      <div className="flex items-start gap-4 mb-6">
        <div className={`w-14 h-14 ${category.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
          <IconComponent className={`w-7 h-7 ${category.iconColor}`} />
        </div>
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-serif font-semibold text-stone-800">{category.title}</h3>
            {category.isSpecial && (
              <span className="px-3 py-1 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-medium rounded-full">
                Special
              </span>
            )}
          </div>
          <p className="text-stone-600 mt-1">{category.description}</p>
          {category.price && (
            <div className="mt-2">
              <span className="text-2xl font-bold text-stone-800">Rs {category.price}/-</span>
              <span className="text-stone-500 text-sm ml-2">per person</span>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-3">
        {category.items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow border border-stone-100"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium text-stone-800">{item.name}</h4>
                  {'isPopular' in item && item.isPopular && (
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                {item.description && (
                  <p className="text-stone-500 text-sm mt-1">{item.description}</p>
                )}
              </div>
              {'price' in item && item.price && (
                <div className="text-right flex-shrink-0">
                  <span className="text-lg font-semibold text-forest-600">
                    Rs {item.price}/-
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MenuImageModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/90" onClick={onClose}>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
      >
        <X className="w-6 h-6" />
      </button>
      <img
        src="/homemade-food/homemade-food-menu.png"
        alt="Full Food Menu"
        className="max-w-full max-h-[90vh] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

function MenuImagePreview() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-stone-100">
        <div className="bg-gradient-to-r from-forest-600 to-forest-700 p-4 text-white">
          <h3 className="text-lg font-serif font-semibold">Download Menu Card</h3>
          <p className="text-cream-200 text-sm">View or save our complete menu</p>
        </div>
        <div className="p-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="relative w-full aspect-[3/4] rounded-lg overflow-hidden group cursor-pointer"
          >
            <img
              src="/homemade-food/homemade-food-menu.png"
              alt="Food Menu Preview"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                <ZoomIn className="w-6 h-6 text-stone-700" />
              </div>
            </div>
          </button>
          <p className="text-center text-stone-500 text-sm mt-3">Click to view full menu</p>
        </div>
      </div>
      <MenuImageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

function FoodGallery() {
  const foodImages = [
    { src: '/homemade-food/cuisine-images/vegetable-poha.jpg', alt: 'Vegetable Poha - Light breakfast' },
    { src: '/homemade-food/cuisine-images/shahi-paneer.jpg', alt: 'Shahi Paneer - Rich curry' },
    { src: '/homemade-food/cuisine-images/masala-tea.webp', alt: 'Masala Tea - Spiced chai' },
    { src: '/homemade-food/cuisine-images/himachali-dham.webp', alt: 'Himachali Dham - Traditional feast' },
  ];

  return (
    <Section bg="cream" padding="lg">
      <div className="text-center mb-12">
        <span className="text-forest-600 font-medium tracking-wide uppercase text-sm mb-4 block">
          Our Kitchen
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-800 mb-4">
          A Taste of Home
        </h2>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
          Every dish is prepared fresh in our kitchen, using locally sourced ingredients and traditional recipes passed down through generations.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        <div className="col-span-2 row-span-2 rounded-xl overflow-hidden">
          <img
            src="/homemade-food/cuisine-images/food-gallery.jpg"
            alt="Homemade food spread"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        {foodImages.map((image, idx) => (
          <div key={idx} className="aspect-square rounded-xl overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}

function OrderInfo() {
  return (
    <Section bg="sage" padding="lg">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-stone-800 mb-3">
              How to Order
            </h2>
            <p className="text-stone-600">Simple steps to enjoy home-cooked meals during your stay</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-forest-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-forest-600">1</span>
              </div>
              <h3 className="font-medium text-stone-800 mb-2">Browse Menu</h3>
              <p className="text-stone-600 text-sm">
                Check our menu and decide what you'd like to have
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-forest-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-forest-600">2</span>
              </div>
              <h3 className="font-medium text-stone-800 mb-2">Place Order</h3>
              <p className="text-stone-600 text-sm">
                Inform us 2 hours before your preferred meal time
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-forest-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-forest-600">3</span>
              </div>
              <h3 className="font-medium text-stone-800 mb-2">Enjoy Fresh</h3>
              <p className="text-stone-600 text-sm">
                Savor freshly prepared meals in the dining area or your room
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-stone-200 text-center">
            <p className="text-stone-600 mb-4">
              For special dietary requirements or bulk orders, please contact us in advance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${CONTACT.phones[0]}`}
                className="inline-flex items-center gap-2 bg-forest-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-forest-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call to Order
              </a>
              <Button href="/contact" variant="secondary">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function CTASection() {
  return (
    <Section bg="forest" padding="lg">
      <div className="text-center">
        <h2 className="heading-lg text-white mb-6">
          Ready to Experience Mountain Hospitality?
        </h2>
        <p className="body-md text-cream-200 max-w-2xl mx-auto mb-10">
          Book your stay and enjoy delicious home-cooked meals prepared with love by our hosts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/booking" variant="white" size="lg">
            Book Your Stay
          </Button>
          <Link
            to="/amenities"
            className="inline-flex items-center justify-center gap-2 border-2 border-cream-300 text-cream-300 hover:bg-cream-300 hover:text-forest-800 py-3 px-6 rounded-lg font-medium transition-colors"
          >
            View All Amenities
          </Link>
        </div>
      </div>
    </Section>
  );
}

export function HomemadeFood() {
  return (
    <>
      <HeroSection />
      <FoodGallery />
      <Section bg="white" padding="lg">
        <div className="text-center mb-12">
          <span className="text-forest-600 font-medium tracking-wide uppercase text-sm mb-4 block">
            Food Menu
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-800 mb-4">
            Our Complete Menu
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            All dishes are prepared fresh to order. Prices are in Indian Rupees (INR).
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {menuCategories.map((category) => (
              <MenuCategory key={category.id} category={category} />
            ))}
          </div>
          <div className="space-y-6">
            <TimingsCard />
            <MenuImagePreview />
            <div className="bg-cream-50 rounded-2xl p-6 border border-cream-200">
              <h3 className="font-serif font-semibold text-stone-800 mb-3">Good to Know</h3>
              <ul className="space-y-3 text-stone-600 text-sm">
                <li className="flex items-start gap-2">
                  <Leaf className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  All dishes are 100% vegetarian
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  Prepared fresh with love by Lalita ji
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  Advance notice of 2 hours required
                </li>
                <li className="flex items-start gap-2">
                  <UtensilsCrossed className="w-4 h-4 text-forest-600 flex-shrink-0 mt-0.5" />
                  Self-cooking kitchens also available
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      <OrderInfo />
      <CTASection />
    </>
  );
}
