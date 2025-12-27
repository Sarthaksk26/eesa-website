import { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "../data/navLinks";



const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-secondary shadow z-50 text-primary dark:text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between p-4">
        <a href="/" className="font-bold text-xl hover:text-accent transition-colors duration-300 transform hover:scale-105">
          EESA
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(({ to, label }, index) => (
            <a 
              key={to} 
              href={to} 
              className="hover:text-accent transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {label}
            </a>
          ))}
           <ThemeToggle />
        </div>

        {/* Mobile */}
        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden transition-transform duration-300 transform hover:scale-110"
        >
          <div className="relative w-6 h-6">
            <FaBars 
              className={`absolute inset-0 transition-all duration-300 ${
                open ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
              }`} 
            />
            <FaTimes 
              className={`absolute inset-0 transition-all duration-300 ${
                open ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
              }`} 
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-6 pb-6">
          {navLinks.map(({ to, label }, index) => (
            <a
              key={to}
              href={to}
              onClick={() => setOpen(false)}
              className="hover:text-accent transition-all duration-300 transform hover:scale-110 hover:translate-x-2"
              style={{ 
                transitionDelay: open ? `${index * 75}ms` : '0ms',
                animation: open ? `slideIn 0.5s ease-out ${index * 75}ms both` : 'none'
              }}
            >
              {label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;