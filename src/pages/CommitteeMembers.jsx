import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import ImageWithFallback from '../components/ui/ImageWithFallback';
import committeeMembers from '../data/committeeMembers';
import { Linkedin, Mail } from 'lucide-react';

const CommitteeMembers = () => {
  const years = Object.keys(committeeMembers);
  const [selectedYear, setSelectedYear] = useState(years[0] || '2026-27');
  const [hoveredId, setHoveredId] = useState(null);

  const activeMembers = committeeMembers[selectedYear] || [];

  return (
    <div className="bg-primary min-h-screen py-16 px-4">
      <SEOHead
        title="Committee Members"
        description="Meet the EESA Committee — the team driving electrical engineering student excellence at GCEK."
      />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Meet Our Team"
          subtitle="The passionate individuals driving EESA forward"
        />

        {/* Academic Year Selector */}
        {years.length > 1 && (
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 bg-secondary/80 backdrop-blur-md border border-white/5 rounded-2xl shadow-inner relative z-10">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    selectedYear === year
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 font-bold scale-105'
                      : 'text-secondary hover:text-primary hover:bg-white/5'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        )}

        <div key={selectedYear} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeMembers.map((member, index) => (
            <Card key={member.id} delay={index * 100}>
              <div
                className="relative group"
                onMouseEnter={() => setHoveredId(member.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="overflow-hidden rounded-xl mb-4">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-64 transition-transform duration-700 group-hover:scale-110 ${
                      member.name === "Aryan Bingi" ? "object-top" : ""
                    }`}
                    fallbackText="👤"
                  />
                </div>

                <h3 className="text-xl font-bold text-primary group-hover:text-blue-400 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-blue-400 font-medium text-sm mb-1">
                  {member.position}
                </p>
                <p className="text-secondary text-sm mb-3">
                  {member.department}
                </p>

                {/* Bio - shows on hover */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  hoveredId === member.id ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-secondary text-xs leading-relaxed border-t border-white/10 pt-3">
                    {member.bio}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 mt-3">
                  {member.socialLinks?.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg glass hover:scale-110 hover:text-blue-400 transition-all duration-300"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                  {member.socialLinks?.email && (
                    <a
                      href={member.socialLinks.email}
                      className="p-2 rounded-lg glass hover:scale-110 hover:text-blue-400 transition-all duration-300"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={16} />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommitteeMembers;