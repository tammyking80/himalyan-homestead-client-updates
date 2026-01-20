import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';

const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const StayOptions = lazy(() => import('./pages/StayOptions').then(m => ({ default: m.StayOptions })));
const WholeHomeRetreat = lazy(() => import('./pages/WholeHomeRetreat').then(m => ({ default: m.WholeHomeRetreat })));
const TwoBhkHomestay = lazy(() => import('./pages/TwoBhkHomestay').then(m => ({ default: m.TwoBhkHomestay })));
const PrivateRooms = lazy(() => import('./pages/PrivateRooms').then(m => ({ default: m.PrivateRooms })));
const Amenities = lazy(() => import('./pages/Amenities').then(m => ({ default: m.Amenities })));
const HomemadeFood = lazy(() => import('./pages/HomemadeFood').then(m => ({ default: m.HomemadeFood })));
const Experiences = lazy(() => import('./pages/Experiences').then(m => ({ default: m.Experiences })));
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Location = lazy(() => import('./pages/Location').then(m => ({ default: m.Location })));
const Policies = lazy(() => import('./pages/Policies').then(m => ({ default: m.Policies })));
const Booking = lazy(() => import('./pages/Booking').then(m => ({ default: m.Booking })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Testimonials = lazy(() => import('./pages/Testimonials').then(m => ({ default: m.Testimonials })));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 border-3 border-forest-200 border-t-forest-600 rounded-full animate-spin" />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Suspense fallback={<PageLoader />}><About /></Suspense>} />
          <Route path="stay-options" element={<Suspense fallback={<PageLoader />}><StayOptions /></Suspense>} />
          <Route path="stay-options/whole-home-retreat" element={<Suspense fallback={<PageLoader />}><WholeHomeRetreat /></Suspense>} />
          <Route path="stay-options/2bhk-homestay" element={<Suspense fallback={<PageLoader />}><TwoBhkHomestay /></Suspense>} />
          <Route path="stay-options/private-rooms" element={<Suspense fallback={<PageLoader />}><PrivateRooms /></Suspense>} />
          <Route path="amenities" element={<Suspense fallback={<PageLoader />}><Amenities /></Suspense>} />
          <Route path="homemade-food" element={<Suspense fallback={<PageLoader />}><HomemadeFood /></Suspense>} />
          <Route path="experiences" element={<Suspense fallback={<PageLoader />}><Experiences /></Suspense>} />
          <Route path="gallery" element={<Suspense fallback={<PageLoader />}><Gallery /></Suspense>} />
          <Route path="location" element={<Suspense fallback={<PageLoader />}><Location /></Suspense>} />
          <Route path="policies" element={<Suspense fallback={<PageLoader />}><Policies /></Suspense>} />
          <Route path="testimonials" element={<Suspense fallback={<PageLoader />}><Testimonials /></Suspense>} />
          <Route path="booking" element={<Suspense fallback={<PageLoader />}><Booking /></Suspense>} />
          <Route path="contact" element={<Suspense fallback={<PageLoader />}><Contact /></Suspense>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
