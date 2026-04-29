import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navLinks } from '../data/navLinks';

const Footer = () => (
  <footer className="bg-secondary text-primary py-16 border-t border-white/5 relative overflow-hidden">
    {/* Background Glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Brand Section */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/assets/eesa-logo.png" 
              alt="EESA Logo" 
              className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <span className="font-bold text-xl tracking-tight text-primary">EESA</span>
          </Link>
          <p className="text-secondary text-sm leading-relaxed max-w-xs">
            Electrical Engineering Students Association at Government College of Engineering, Karad. 
            Empowering students since inception through technical and cultural excellence.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/eesa_gcek?igsh=OHJ4aW90MXBjdDZk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-lg glass text-secondary hover:text-blue-400 transition-all duration-300 hover:scale-110"
              aria-label="Follow EESA on Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/eesa-gcek-35a878349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg glass text-secondary hover:text-blue-400 transition-all duration-300 hover:scale-110"
              aria-label="Connect with EESA on LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-6 text-primary">Quick Links</h3>
          <ul className="space-y-3">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link 
                  to={to} 
                  className="text-secondary text-sm hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-blue-500 scale-0 group-hover:scale-100 transition-transform duration-300" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-6 text-primary">Contact</h3>
          <ul className="space-y-4">
            <li>
              <a 
                href="mailto:eesagcek2025@gmail.com" 
                className="flex items-start gap-3 group text-secondary text-sm hover:text-blue-400 transition-all duration-300"
              >
                <div className="p-2 rounded-lg glass group-hover:scale-110 transition-transform shrink-0">
                  <Mail size={16} />
                </div>
                <span>eesagcek2025@gmail.com</span>
              </a>
            </li>
            <li>
              <a 
                href="tel:+919766926060" 
                className="flex items-start gap-3 group text-secondary text-sm hover:text-blue-400 transition-all duration-300"
              >
                <div className="p-2 rounded-lg glass group-hover:scale-110 transition-transform shrink-0">
                  <Phone size={16} />
                </div>
                <span>+91 97669 26060</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h3 className="font-bold text-lg mb-6 text-primary">Location</h3>
          <a 
            href="https://www.google.co.in/maps/place/Government+College+of+Engineering,+Karad/@17.3095557,74.1823467,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc1826400000001:0x34bdd98ca25093e3!8m2!3d17.3095558!4d74.1872176!16s%2Fm%2F02pwjk8?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-start gap-3 group text-secondary text-sm hover:text-blue-400 transition-all duration-300"
          >
            <div className="p-2 rounded-lg glass group-hover:scale-110 transition-transform shrink-0">
              <MapPin size={16} />
            </div>
            <span>
              EESA Library, <br />
              Government College of Engineering, <br />
              Karad, Maharashtra
            </span>
          </a>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary">
        <p>© {new Date().getFullYear()} EESA GCEK. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Developed with <span className="text-red-500 animate-pulse">❤️</span> by EESA Tech Team
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;