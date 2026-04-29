import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4 overflow-hidden relative">
      <SEOHead title="404 - Page Not Found" description="The page you are looking for does not exist." />
      
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-md w-full glass p-12 rounded-2xl text-center relative z-10 animate-scale-in">
        <h1 className="text-9xl font-black gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-bold text-primary mb-4">Oops! Page not found</h2>
        <p className="text-secondary mb-8 leading-relaxed">
          The page you're looking for might have been moved, deleted, or never existed in the first place.
        </p>
        
        <div className="flex flex-col gap-4">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            <Home size={18} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg glass text-primary font-semibold hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
