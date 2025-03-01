import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("dark");
  const academicsRef = useRef(null);
  // Add a key to force re-render of the dropdown
  const [dropdownKey, setDropdownKey] = useState(0);

  // Listen for theme changes on mount and update
  useEffect(() => {
    // Check if theme exists in localStorage, otherwise use system preference or default to dark
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Set initial theme
    if (storedTheme) {
      setCurrentTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      setCurrentTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
    
    // Listen for storage changes (when theme toggle occurs in other tabs)
    const handleStorageChange = (e) => {
      if (e.key === "theme") {
        setCurrentTheme(e.newValue || "dark");
        document.documentElement.classList.toggle("dark", e.newValue === "dark");
        // Force dropdown to re-render when theme changes
        setDropdownKey(prev => prev + 1);
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const links = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/committee", text: "Committee" },
    { to: "/contact", text: "Contact" },
  ];

  const academicsLinks = [
    { to: "/notes", text: "Notes" },
    { to: "/research", text: "Research Papers" },
  ];

  // Close academics dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (academicsRef.current && !academicsRef.current.contains(event.target)) {
        setIsAcademicsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to show modal
  const handleComingSoon = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    setIsAcademicsOpen(false);
  };

  // Handle theme change
  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
    
    // Increment dropdown key to force re-render of the dropdown
    setDropdownKey(prev => prev + 1);
    
    // Dispatch custom event for other components to detect
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: theme }));
  };

  return (
    <nav className="sticky top-0 z-50 bg-secondary dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-xl font-bold text-primary dark:text-white transition-colors duration-200 hover:text-accent"
        >
          EESA
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map(({ to, text }) => (
            <Link
              key={to}
              to={to}
              className="text-primary dark:text-white hover:text-accent dark:hover:text-gray-400 transition-colors duration-200 relative group"
            >
              {text}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}

          {/* Dropdown for Academics */}
          <div className="relative" ref={academicsRef}>
            <button
              onClick={() => setIsAcademicsOpen(!isAcademicsOpen)}
              className="text-primary dark:text-white hover:text-accent dark:hover:text-gray-400 transition-colors duration-200 cursor-pointer relative group flex items-center"
            >
              Academics
              <svg 
                className={`ml-1 w-4 h-4 transition-transform duration-300 ${isAcademicsOpen ? 'rotate-180' : ''}`} 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </button>

            {isAcademicsOpen && (
              <div 
                key={`desktop-dropdown-${dropdownKey}`}
                className="absolute left-0 mt-2 w-48 rounded-md dark:bg-gray-800 shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                {academicsLinks.map(({ to, text }) => (
                  <button
                    key={to}
                    onClick={handleComingSoon}
                    className="block px-4 py-2 text-sm font-medium text-primary dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer w-full text-left"
                  >
                    {text}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle Button */}
          <ThemeToggle onThemeChange={handleThemeChange} currentTheme={currentTheme} />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary dark:text-white focus:outline-none hover:text-accent transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`fixed top-16 left-0 w-full h-screen bg-secondary dark:bg-gray-900 shadow-md transition-all duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } md:hidden`}
      >
        <div className="flex flex-col items-center space-y-6 p-6">
          {links.map(({ to, text }) => (
            <Link
              key={to}
              to={to}
              className="text-lg text-primary dark:text-white hover:text-accent dark:hover:text-gray-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {text}
            </Link>
          ))}

          {/* Mobile Dropdown for Academics */}
          <div className="w-full flex flex-col items-center">
            <button
              className="text-lg text-primary dark:text-white hover:text-accent dark:hover:text-gray-400 transition-colors duration-200 flex items-center"
              onClick={() => setIsAcademicsOpen(!isAcademicsOpen)}
            >
              Academics (coming soon)
              <svg 
                className={`ml-1 w-4 h-4 transition-transform duration-300 ${isAcademicsOpen ? 'rotate-180' : ''}`} 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {isAcademicsOpen && (
              <div 
                key={`mobile-dropdown-${dropdownKey}`}
                className="mt-4 w-48 rounded-md bg-auto dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                {academicsLinks.map(({ to, text }) => (
                  <button
                    key={to}
                    onClick={handleComingSoon}
                    className="block px-4 py-3 text-sm font-medium text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer w-full text-left border-b border-gray-200 dark:border-gray-700 last:border-0"
                  >
                    {text}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle Button */}
          <div className="mt-4">
            <ThemeToggle onThemeChange={handleThemeChange} currentTheme={currentTheme} />
          </div>
        </div>
      </div>

      {/* Modal for "Coming Soon" */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-sm mx-4" onClick={e => e.stopPropagation()}>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-800 dark:text-gray-300 mb-6">
              This feature is under development. Stay tuned!
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-accent text-white px-4 py-2 rounded-md hover:bg-opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;