import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-secondary shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src="/assets/eesa-logo.png" alt="EESA Logo" className="h-8 w-auto" />
            <span className="ml-2 text-lg font-semibold text-primary">EESA</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-secondary pb-4">
            <div className="flex flex-col space-y-4 px-4">
              <NavLinks mobile />
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLinks = ({ mobile }) => {
  const links = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/committee', text: 'Committee' },
    { to: '/contact', text: 'Contact' }
  ];

  const baseClasses = "text-primary hover:text-accent transition-colors duration-200";
  const mobileClasses = "block py-2 text-base font-medium";
  const desktopClasses = "text-sm font-medium";

  return links.map(({ to, text }) => (
    <Link
      key={to}
      to={to}
      className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}
    >
      {text}
    </Link>
  ));
};

export default Navbar;