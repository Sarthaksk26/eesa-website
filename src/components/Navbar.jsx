const NavLinks = ({ mobile }) => {
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);

  const links = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/committee', text: 'Committee' },
    { to: '/contact', text: 'Contact' },
    { to: '/gallery', text: 'Gallery' }
  ];

  const academicsLinks = [
    { to: '/notes', text: 'Notes' },
    { to: '/research', text: 'Research Papers' }
  ];

  const baseClasses = "text-primary hover:text-accent transition-colors duration-200";
  const mobileClasses = "block py-2 text-base font-medium";
  const desktopClasses = "text-sm font-medium";

  return (
    <>
      {links.map(({ to, text }) => (
        <Link
          key={to}
          to={to}
          className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}
        >
          {text}
        </Link>
      ))}
      <div
        className="relative"
        onMouseEnter={() => setIsAcademicsOpen(true)}
        onMouseLeave={() => setIsAcademicsOpen(false)}
      >
        <button
          className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}
        >
          Academics
        </button>
        <div className={`absolute mt-2 rounded-md dropdown-content ${isAcademicsOpen ? '' : 'hidden'}`}>
          {academicsLinks.map(({ to, text }) => (
            <Link
              key={to}
              to={to}
              className="block px-4 py-2 text-sm font-medium text-primary hover:text-accent transition-colors duration-200"
            >
              {text}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
