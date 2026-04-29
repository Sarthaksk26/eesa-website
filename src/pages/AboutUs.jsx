import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import useScrollAnimation from '../hooks/useScrollAnimation';

const objectives = [
  "Foster technical excellence through workshops, seminars, and hands-on projects",
  "Develop leadership and organizational skills through event management",
  "Create networking opportunities with industry professionals",
  "Promote innovation and research in electrical engineering",
  "Encourage participation in technical competitions and hackathons",
  "Support academic growth through peer learning and mentorship"
];

const AboutUs = () => {
  const { ref: whoRef, isVisible: whoVisible } = useScrollAnimation();
  const { ref: objRef, isVisible: objVisible } = useScrollAnimation();

  return (
    <div className="bg-primary min-h-screen py-16 px-4">
      <SEOHead
        title="About Us"
        description="Learn about EESA — our vision, mission, and objectives for empowering electrical engineering students at GCEK."
      />

      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="About EESA"
          subtitle="Empowering electrical engineering students since inception"
        />

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card delay={0}>
            <div className="text-3xl mb-4">🔭</div>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-secondary leading-relaxed">
              To create a collaborative environment for the wholesome growth of students and foster
              innovation in electrical engineering education.
            </p>
          </Card>
          <Card delay={100}>
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-secondary leading-relaxed">
              Empowering students to reach their full potential through skill development,
              knowledge sharing, and engaging extracurricular activities.
            </p>
          </Card>
        </div>

        {/* Who We Are */}
        <div
          ref={whoRef}
          className={`mb-12 ${whoVisible ? 'scroll-visible' : 'scroll-hidden'}`}
        >
          <Card hover={false}>
            <div className="text-3xl mb-4">💡</div>
            <h3 className="text-2xl font-bold text-primary mb-4">Who We Are</h3>
            <p className="text-secondary leading-relaxed">
              EESA is a dynamic platform that brings together electrical engineering students
              to foster growth, innovation, and excellence. Through various activities including
              industrial visits, expert talks, workshops, and technical events, we create
              opportunities for students to excel both academically and professionally.
            </p>
          </Card>
        </div>

        {/* Objectives */}
        <div
          ref={objRef}
          className={`${objVisible ? 'scroll-visible' : 'scroll-hidden'}`}
        >
          <Card hover={false}>
            <h3 className="text-2xl font-bold text-primary mb-6">Our Objectives</h3>
            <div className="space-y-4">
              {objectives.map((objective, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-sm font-bold text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                    {index + 1}
                  </span>
                  <p className="text-secondary leading-relaxed pt-1">{objective}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;