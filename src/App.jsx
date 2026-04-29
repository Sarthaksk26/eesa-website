import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop, { ScrollRestoration } from './components/ui/ScrollToTop';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const CommitteeMembers = lazy(() => import('./pages/CommitteeMembers'));
const Events = lazy(() => import('./pages/Events'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Achievements = lazy(() => import('./pages/Achievements'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading fallback
const PageLoader = () => (
  <div className="min-h-screen bg-primary flex items-center justify-center">
    <div className="relative">
      <div className="w-16 h-16 rounded-full border-4 border-blue-500/20 border-t-blue-500 animate-spin" />
      <div className="absolute inset-0 flex items-center justify-center text-blue-500 font-bold text-xs">
        EESA
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollRestoration />
        <div className="flex flex-col min-h-screen bg-primary text-primary selection:bg-blue-500/30">
          <Navbar />
          <main className="flex-grow pt-0"> {/* Removed padding to let hero reach top */}
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/committee" element={<CommitteeMembers />} />
                <Route path="/events" element={<Events />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;