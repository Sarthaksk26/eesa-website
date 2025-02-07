import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle"; // Import ThemeToggle component

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);

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

  return (
    <nav className="bg-emerald-50 dark:bg-gray-900 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-primary dark:text-white">
          EESA
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map(({ to, text }) => (
            <Link
              key={to}
              to={to}
              className="text-primary hover:text-accent transition-colors duration-200 dark:text-white dark:hover:text-gray-400"
            >
              {text}
            </Link>
          ))}
          {/* Dropdown for Academics */}
          <div
            className="relative"
            onMouseEnter={() => setIsAcademicsOpen(true)}
            onMouseLeave={() => setIsAcademicsOpen(false)}
          >
            <button className="text-primary hover:text-accent transition-colors duration-200 dark:text-white dark:hover:text-gray-400">
              Academics
            </button>
            <div
              className={`absolute left-0 mt-2 w-48 rounded-md bg-white/90 dark:bg-gray-800 backdrop-blur-lg shadow-lg transition-opacity duration-300 ${
                isAcademicsOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              {academicsLinks.map(({ to, text }) => (
                <Link
                  key={to}
                  to={to}
                  className="block px-4 py-2 text-sm font-medium text-primary hover:text-accent transition-colors duration-200 dark:text-white dark:hover:text-gray-400"
                >
                  {text}
                </Link>
              ))}
            </div>
          </div>

          {/* Theme Toggle Button */}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary dark:text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md transition-transform duration-300 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 p-4">
          {links.map(({ to, text }) => (
            <Link
              key={to}
              to={to}
              className="text-primary hover:text-accent transition-colors duration-200 dark:text-white dark:hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              {text}
            </Link>
          ))}
          {/* Mobile Dropdown for Academics */}
          <div>
            <button
              className="text-primary hover:text-accent transition-colors duration-200 dark:text-white dark:hover:text-gray-400"
              onClick={() => setIsAcademicsOpen(!isAcademicsOpen)}
            >
              Academics
            </button>
            {isAcademicsOpen && (
              <div className="mt-2 w-48 rounded-md bg-white/90 dark:bg-gray-800 backdrop-blur-lg shadow-lg">
                {academicsLinks.map(({ to, text }) => (
                  <Link
                    key={to}
                    to={to}
                    className="block px-4 py-2 text-sm font-medium text-primary hover:text-accent transition-colors duration-200 dark:text-white dark:hover:text-gray-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {text}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle Button */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
