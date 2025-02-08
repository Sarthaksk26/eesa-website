import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

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
    <nav className="bg-[var(--secondary)] dark:bg-gray-900 shadow-md transition-colors duration-300">
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
          <div className="relative">
            <button
              onClick={() => setIsAcademicsOpen(!isAcademicsOpen)}
              className="text-primary hover:text-accent transition-colors duration-200 dark:text-white dark:hover:text-gray-400 cursor-pointer"
            >
              Academics
            </button>

            {isAcademicsOpen && (
              <div className="absolute left-0 mt-2 w-48 rounded-md bg-secondary dark:bg-gray-900 backdrop-blur-lg shadow-lg transition-opacity duration-300">
                {academicsLinks.map(({ to, text }) => (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setIsAcademicsOpen(false)}
                    className="block px-4 py-2 text-sm font-medium text-primary hover:text-accent transition-colors duration-200 dark:text-white dark:hover:text-gray-400"
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
        className={`fixed top-16 left-0 w-full bg-secondary dark:bg-gray-900 shadow-md transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
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
              <div className="mt-2 w-48 rounded-md bg-secondary dark:bg-gray-800 backdrop-blur-lg shadow-lg">
                {academicsLinks.map(({ to, text }) => (
                  <Link
                    key={to}
                    to={to}
                    className="block px-4 py-2 text-sm font-medium text-primary hover:text-accent transition-colors duration-200 dark:text-white dark:hover:text-gray-400"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsAcademicsOpen(false);
                    }}
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
