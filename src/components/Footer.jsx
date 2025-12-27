import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => (
  <footer className="bg-secondary text-primary py-8 transition-all duration-300">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">

      <div className="transform hover:scale-105 transition-transform duration-300">
        <h3 className="font-semibold mb-2">Contact</h3>
        <a 
          href="mailto:eesagcek2025@gmail.com" 
          className="flex items-center hover:text-accent transition-all duration-300 hover:translate-x-1 mb-2"
        >
          <Mail size={16} className="mr-2 transition-transform duration-300 hover:rotate-12" />
          eesagcek2025@gmail.com
        </a>
        <a 
          href="tel:+919766926060" 
          className="flex items-center hover:text-accent transition-all duration-300 hover:translate-x-1"
        >
          <Phone size={16} className="mr-2 transition-transform duration-300 hover:rotate-12" />
          +91 9766926060
        </a>
      </div>

      <div className="transform hover:scale-105 transition-transform duration-300">
        <h3 className="font-semibold mb-2">Follow Us</h3>
        <div className="flex gap-4">
          <a 
            href="https://www.instagram.com/eesa_gcek?igsh=OHJ4aW90MXBjdDZk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-accent transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 hover:rotate-12"
          >
            <Instagram size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/eesa-gcek-35a878349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-accent transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 hover:rotate-12"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>

      <div className="transform hover:scale-105 transition-transform duration-300">
        <h3 className="font-semibold mb-2">Location</h3>
        <a 
          href="https://www.google.co.in/maps/place/Government+College+of+Engineering,+Karad/@17.3095557,74.1823467,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc1826400000001:0x34bdd98ca25093e3!8m2!3d17.3095558!4d74.1872176!16s%2Fm%2F02pwjk8?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D" 
          target="_blank" 
          className="hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block"
        >
          <p>EESA Library,<br />Government College of Engineering,<br />Karad, Maharashtra</p>
        </a>
      </div>

    </div>

    <p className="text-center mt-6 text-sm opacity-80 hover:opacity-100 transition-opacity duration-300">
      © {new Date().getFullYear()} EESA Committee
    </p>
  </footer>
);

export default Footer;