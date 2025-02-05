import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary py-8 text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a href="mailto:eesagcek2025@gmail.com" className="flex items-center hover:text-accent">
                <Mail size={16} className="mr-2" />
                eesagcek2025@gmail.com
              </a>
              <a href="tel:+919766926060" className="flex items-center hover:text-accent">
              <Phone size={16} className="mr-2" />
              +91 9766926060
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/eesa_gcek?igsh=OHJ4aW90MXBjdDZk" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-accent">
                <Instagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/eesa-gcek-35a878349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"
                 className="hover:text-accent">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Location</h3>
            <p>EESA Library,<br />Government College of Engineering,<br />Karad, Maharashtra</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>© {new Date().getFullYear()} EESA Committee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;