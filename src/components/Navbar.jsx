import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const NavLinks = ({ mobile, setMobileMenuOpen }) => {
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");
  const dropdownRef = useRef(null);
  
  const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/committee", text: "Committee" },
    { href: "/contact", text: "Contact" },
    { href: "/gallery", text: "Gallery" },
  ];

  const academicsLinks = [
    { href: "/notes", text: "Notes" },
    { href: "/research", text: "Research Papers" },
  ];

  // Update current path when component mounts and when URL changes
  useEffect(() => {
    setCurrentPath(window.location.pathname);
    const handlePathChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePathChange);
    return () => window.removeEventListener('popstate', handlePathChange);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAcademicsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const baseClasses = "transition-colors duration-200";
  const mobileClasses = "block py-3 text-base font-medium w-full text-left";
  const desktopClasses = "text-sm font-medium px-3 py-2 rounded-md";
  
  const isActive = (path) => {
    return currentPath === path 
      ? "bg-primary/10 text-primary" 
      : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800";
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    window.history.pushState({}, '', href);
    setCurrentPath(href);
    if (mobile && setMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {links.map(({ href, text }) => (
        <a
          key={href}
          href={href}
          className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses} ${isActive(href)}`}
          onClick={(e) => handleNavClick(e, href)}
        >
          {text}
        </a>
      ))}
      
      <div
        ref={dropdownRef}
        className="relative"
        onMouseEnter={() => !mobile && setIsAcademicsOpen(true)}
        onMouseLeave={() => !mobile && setIsAcademicsOpen(false)}
      >
        <button
          className={`${baseClasses} ${
            mobile ? mobileClasses : desktopClasses
          } ${isActive("/academics")} flex items-center gap-1`}
          onClick={() => setIsAcademicsOpen(!isAcademicsOpen)}
        >
          Academics
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              isAcademicsOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        
        <div
          className={`${
            mobile
              ? "relative w-full pl-4"
              : "absolute left-0 mt-2 w-48 rounded-md bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5"
          } transition-all duration-200 ${
            isAcademicsOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }`}
        >
          {academicsLinks.map(({ href, text }) => (
            <a
              key={href}
              href={href}
              className={`${baseClasses} ${
                mobile ? "py-2" : "px-4 py-2"
              } block text-sm font-medium ${isActive(href)}`}
              onClick={(e) => {
                handleNavClick(e, href);
                setIsAcademicsOpen(false);
              }}
            >
              {text}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a 
              href="/" 
              className="flex-shrink-0 flex items-center"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/');
              }}
            >
              <span className="text-xl font-bold text-primary">ESSA</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <NavLinks mobile={false} />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          <NavLinks mobile={true} setMobileMenuOpen={setMobileMenuOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;