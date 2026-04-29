import { useState, useMemo } from 'react';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import achievements, { achievementLevels } from '../data/achievements';

const Achievements = () => {
  const [activeLevel, setActiveLevel] = useState('All');

  const filtered = useMemo(() => {
    if (activeLevel === 'All') return achievements;
    return achievements.filter(a => a.level === activeLevel);
  }, [activeLevel]);

  const levelColors = {
    College: 'bg-blue-500/20 text-blue-400',
    State: 'bg-purple-500/20 text-purple-400',
    National: 'bg-yellow-500/20 text-yellow-400'
  };

  return (
    <div className="bg-primary min-h-screen py-16 px-4">
      <SEOHead title="Achievements" description="Explore EESA's achievements, awards, and competition wins at GCEK." />
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Achievements" subtitle="Our proudest moments and accomplishments" />
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {achievementLevels.map(level => (
            <button key={level} onClick={() => setActiveLevel(level)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeLevel === level
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                  : 'glass text-secondary hover:text-primary'
              }`}>
              {level}
            </button>
          ))}
        </div>
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🏆</div>
            <p className="text-secondary text-lg">No achievements found for this filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((achievement, index) => (
              <Card key={achievement.id} delay={index * 100}>
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{achievement.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${levelColors[achievement.level]}`}>
                        {achievement.level}
                      </span>
                      <span className="text-xs text-secondary">{achievement.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">{achievement.title}</h3>
                    <p className="text-secondary text-sm leading-relaxed mb-3">{achievement.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {achievement.students.map((student, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-md bg-white/5 text-secondary">
                          {student}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Achievements;
