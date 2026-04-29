import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [responseType, setResponseType] = useState(''); // 'success' | 'error'
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();

  const googleAppsScriptURL =
    import.meta.env.VITE_CONTACT_FORM_URL ||
    "https://script.google.com/macros/s/AKfycbwcT1sBCPhl2LIQuMqT9nOu3S3dWBcXNBQGBw5gfyCwgEQhDTBdKlzTWwFnS3O9mmKl/exec";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Please enter your name.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) return 'Please enter a message.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      setResponseMessage(error);
      setResponseType('error');
      return;
    }

    setIsSubmitting(true);
    setResponseMessage('');

    try {
      await fetch(googleAppsScriptURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });

      setResponseMessage('Message sent successfully! We\'ll get back to you soon.');
      setResponseType('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Contact form error:', err);
      setResponseMessage('An error occurred. Please try again or email us directly.');
      setResponseType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-primary min-h-screen py-16 px-4">
      <SEOHead
        title="Contact Us"
        description="Get in touch with the EESA Committee at Government College of Engineering, Karad."
      />

      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Contact Us"
          subtitle="Have a question or want to collaborate? We'd love to hear from you."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card delay={0}>
            <h3 className="text-2xl font-bold text-primary mb-6">Get in Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="p-3 rounded-lg glass group-hover:scale-110 transition-transform">
                  <MapPin size={20} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Location</h4>
                  <p className="text-secondary text-sm leading-relaxed">
                    EESA Library,<br />
                    Government College of Engineering,<br />
                    Karad, Maharashtra
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="p-3 rounded-lg glass group-hover:scale-110 transition-transform">
                  <Mail size={20} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Email</h4>
                  <a
                    href="mailto:eesagcoek@gmail.com"
                    className="text-blue-400 text-sm hover:underline transition-all duration-300"
                  >
                    eesagcoek@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="p-3 rounded-lg glass group-hover:scale-110 transition-transform">
                  <Phone size={20} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Phone</h4>
                  <p className="text-secondary text-sm">
                    President: +91 97669 26060<br />
                    Secretary: +91 89994 70941
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Contact Form */}
          <div
            ref={formRef}
            className={`${formVisible ? 'scroll-visible' : 'scroll-hidden'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <Card hover={false}>
              <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="contact-name" className="block text-secondary text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-primary border border-white/10 text-primary placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-secondary text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-primary border border-white/10 text-primary placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-secondary text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-primary border border-white/10 text-primary placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 resize-none"
                    placeholder="How can we help?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>

                {responseMessage && (
                  <div className={`text-center p-3 rounded-lg text-sm font-medium animate-fade-in ${
                    responseType === 'success'
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                      : 'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}>
                    {responseMessage}
                  </div>
                )}
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;