import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/navLinks.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? "bg-primary/80 backdrop-blur-md border-b border-white/5 py-2" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group"
          >
            <img 
              src="/assets/eesa-logo.png" 
              alt="EESA Logo" 
              className="w-12 h-12 md:w-14 md:h-14 object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <span className="font-bold text-xl tracking-tight text-primary group-hover:text-blue-400 transition-colors">
              EESA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => {
              const isActive = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? "text-blue-400 bg-blue-500/10" 
                      : "text-secondary hover:text-primary hover:bg-white/5"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg glass text-primary hover:text-blue-400 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="mx-4 mt-2 p-4 glass rounded-2xl border border-white/10 shadow-2xl">
          <div className="flex flex-col gap-2">
            {navLinks.map(({ to, label }, index) => {
              const isActive = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    isActive 
                      ? "text-blue-400 bg-blue-500/10" 
                      : "text-secondary hover:text-primary hover:bg-white/5"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;