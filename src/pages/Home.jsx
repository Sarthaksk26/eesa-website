import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/ui/SectionHeading';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import Card from '../components/ui/Card';
import ImageWithFallback from '../components/ui/ImageWithFallback';
import useScrollAnimation from '../hooks/useScrollAnimation';
import events from '../data/events';
import { Link } from 'react-router-dom';
import { Calendar, Users, Award, Zap, ArrowRight } from 'lucide-react';

const Home = () => {
  const upcomingEvents = events.filter(e => e.status === 'upcoming').slice(0, 3);
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-primary">
      <SEOHead
        title="Home"
        description="EESA — Electrical Engineering Students Association at Government College of Engineering, Karad. Empowering students through innovation and collaboration."
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 text-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Circuit Trace SVG - Increased visibility */}
          <svg className="absolute top-0 left-0 w-full h-full opacity-[0.08] text-blue-400" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,100 L100,100 L150,150 L300,150 L350,100 L500,100 M600,200 L700,200 L750,250 L900,250 M100,400 L200,400 L250,350 L400,350 L450,400 L600,400 M700,500 L800,500 L850,550 L1000,550 M50,700 L150,700 L200,750 L350,750 L400,700 M600,800 L750,800 L800,850 L950,850" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="100" cy="100" r="4" fill="currentColor" className="circuit-node" />
            <circle cx="300" cy="150" r="4" fill="currentColor" className="circuit-node" style={{ animationDelay: '0.5s' }} />
            <circle cx="700" cy="200" r="4" fill="currentColor" className="circuit-node" style={{ animationDelay: '1s' }} />
            <circle cx="200" cy="400" r="4" fill="currentColor" className="circuit-node" style={{ animationDelay: '1.5s' }} />
            <circle cx="850" cy="550" r="4" fill="currentColor" className="circuit-node" style={{ animationDelay: '2s' }} />
          </svg>

          {/* Increased Glow visibility */}
          <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500/15 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-[450px] h-[450px] bg-purple-500/15 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        <div ref={heroRef} className={`max-w-5xl mx-auto relative z-10 ${heroVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
          {/* Logos Container - Symmetrical & Centered */}
          <div className="flex justify-center items-center mb-12">
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[3rem] blur opacity-15 group-hover:opacity-30 transition duration-1000"></div>
              
              <div className="relative glass px-10 py-10 md:px-16 md:py-12 rounded-[3rem] flex items-center justify-center gap-10 md:gap-20 border border-white/10 shadow-2xl">
                <img
                  src="/assets/eesa-logo.png"
                  alt="EESA Logo"
                  className="w-auto h-24 md:h-36 lg:h-40 object-contain animate-logo-float"
                />
                <div className="w-px h-16 bg-white/10" /> {/* Subtle Separator */}
                <img
                  src="/assets/college-logo.png"
                  alt="Government College of Engineering Karad Logo"
                  className="w-auto h-24 md:h-36 lg:h-40 object-contain animate-logo-float"
                  style={{ animationDelay: '0.3s' }}
                />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            <span className="gradient-text text-neon">EESA Committee</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-secondary mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Government College of Engineering, Karad
          </h2>
          <p className="text-lg text-secondary italic mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            &ldquo;We are in a service to empower the students&rdquo;
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link
              to="/events"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2"
            >
              Explore Events <ArrowRight size={18} />
            </Link>
            <Link
              to="/committee"
              className="px-8 py-3 rounded-lg glass text-primary font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <AnimatedCounter end={50} suffix="+" label="Events Organized" icon={<Calendar className="inline text-blue-400" />} />
          <AnimatedCounter end={500} suffix="+" label="Students Reached" icon={<Users className="inline text-purple-400" />} />
          <AnimatedCounter end={9} label="Committee Members" icon={<Award className="inline text-yellow-400" />} />
          <AnimatedCounter end={15} suffix="+" label="Years of Excellence" icon={<Zap className="inline text-green-400" />} />
        </div>
      </section>

      {/* Upcoming Events Preview */}
      {upcomingEvents.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              title="Upcoming Events"
              subtitle="Don't miss out on our latest activities and programs"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <Card key={event.id} delay={index * 100}>
                  {event.image && (
                    <ImageWithFallback
                      src={event.image}
                      alt={event.title}
                      className="w-full h-44 rounded-lg mb-4"
                    />
                  )}
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-400 mb-3">
                    {event.category}
                  </span>
                  <h3 className="text-lg font-bold text-primary mb-2">{event.title}</h3>
                  <p className="text-secondary text-sm mb-3">{event.description.slice(0, 100)}...</p>
                  <p className="text-xs text-secondary">
                    📅 {new Date(event.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                to="/events"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass text-primary font-semibold hover:scale-105 transition-all duration-300"
              >
                View All Events <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Gallery Preview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Gallery"
            subtitle="Moments captured from our events and activities"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["/event_photos/img_1.JPG", "/event_photos/img_2.JPG", "/event_photos/img_3.JPG"].map((src, i) => (
              <div key={i} className="overflow-hidden rounded-xl group cursor-pointer">
                <ImageWithFallback
                  src={src}
                  alt={`EESA Event ${i + 1}`}
                  className="w-full h-52 transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass text-primary font-semibold hover:scale-105 transition-all duration-300"
            >
              View Full Gallery <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links / CTA Section */}
      <section className="py-16 px-4" ref={ctaRef}>
        <div className={`max-w-4xl mx-auto grid md:grid-cols-3 gap-6 ${ctaVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
          {[
            { to: '/about', icon: '🎯', title: 'Our Mission', desc: 'Learn about our vision and objectives' },
            { to: '/achievements', icon: '🏆', title: 'Achievements', desc: 'See our awards and accomplishments' },
            { to: '/contact', icon: '📬', title: 'Get in Touch', desc: 'Reach out to the EESA committee' }
          ].map((item, i) => (
            <Link key={i} to={item.to} className="group">
              <Card delay={i * 100}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-secondary text-sm">{item.desc}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;