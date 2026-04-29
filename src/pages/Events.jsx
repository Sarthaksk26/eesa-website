import { useState, useMemo } from 'react';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import ImageWithFallback from '../components/ui/ImageWithFallback';
import events, { eventCategories } from '../data/events';
import { Calendar, Tag } from 'lucide-react';

const Events = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'upcoming' | 'past'

  const filteredEvents = useMemo(() => {
    let filtered = events;

    if (activeCategory !== 'All') {
      filtered = filtered.filter(e => e.category === activeCategory);
    }

    if (activeTab === 'upcoming') {
      filtered = filtered.filter(e => e.status === 'upcoming');
    } else if (activeTab === 'past') {
      filtered = filtered.filter(e => e.status === 'past');
    }

    return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [activeCategory, activeTab]);

  const categoryColors = {
    Technical: 'bg-blue-500/20 text-blue-400',
    Cultural: 'bg-purple-500/20 text-purple-400',
    Sports: 'bg-green-500/20 text-green-400'
  };

  return (
    <div className="bg-primary min-h-screen py-16 px-4">
      <SEOHead
        title="Events"
        description="Explore EESA's events — technical symposiums, cultural evenings, workshops, sports tournaments, and more at GCEK."
      />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Events"
          subtitle="From technical symposiums to cultural celebrations — explore our journey"
        />

        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          {/* Status tabs */}
          <div className="flex justify-center gap-2">
            {['all', 'upcoming', 'past'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 capitalize ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                    : 'glass text-secondary hover:text-primary'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Category filter */}
          <div className="flex justify-center gap-2 flex-wrap">
            {eventCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    : 'glass text-secondary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        {filteredEvents.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-secondary text-lg">No events found for this filter.</p>
          </div>
        ) : (
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

            <div className="space-y-12">
              {filteredEvents.map((event, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={event.id}
                    className={`relative flex items-start gap-8 ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-primary z-10 shadow-lg shadow-blue-500/50" />

                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-[45%] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                      <Card delay={index * 100}>
                        {event.image && (
                          <ImageWithFallback
                            src={event.image}
                            alt={event.title}
                            className="w-full h-48 rounded-lg mb-4"
                          />
                        )}

                        <div className="flex items-center gap-2 mb-3 flex-wrap">
                          <span className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full ${categoryColors[event.category] || 'bg-gray-500/20 text-gray-400'}`}>
                            <Tag size={12} />
                            {event.category}
                          </span>
                          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                            event.status === 'upcoming'
                              ? 'bg-green-500/20 text-green-400'
                              : 'bg-gray-500/20 text-gray-400'
                          }`}>
                            {event.status === 'upcoming' ? '🟢 Upcoming' : '✓ Completed'}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-primary mb-2">{event.title}</h3>

                        <div className="flex items-center gap-2 text-secondary text-sm mb-3">
                          <Calendar size={14} />
                          {new Date(event.date).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </div>

                        <p className="text-secondary text-sm leading-relaxed mb-4">{event.description}</p>

                        {event.highlights && (
                          <div className="flex flex-wrap gap-2">
                            {event.highlights.map((h, i) => (
                              <span key={i} className="text-xs px-2 py-1 rounded-md bg-white/5 text-secondary">
                                {h}
                              </span>
                            ))}
                          </div>
                        )}
                      </Card>
                    </div>

                    {/* Spacer for other side */}
                    <div className="hidden md:block md:w-[45%]" />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
