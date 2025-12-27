const AboutUs = () => {
  return (
    <div className="bg-primary min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary text-center mb-12 animate-fadeIn">
          About EESA
        </h1>
        
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-secondary p-6 rounded-lg shadow-lg transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl animate-slideInLeft">
            <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
            <p className="text-primary">
              To create a collaborative environment for the wholesome growth of students and foster 
              innovation in electrical engineering education.
            </p>
          </div>
          <div className="bg-secondary p-6 rounded-lg shadow-lg transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl animate-slideInRight">
            <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-primary">
              Empowering students to reach their full potential through skill development, 
              knowledge sharing, and engaging extracurricular activities.
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-secondary p-8 rounded-lg shadow-lg mb-12 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl animate-fadeInUp">
          <h2 className="text-2xl font-bold text-primary mb-4">Who We Are</h2>
          <p className="text-primary mb-4">
            EESA is a dynamic platform that brings together electrical engineering students 
            to foster growth, innovation, and excellence. Through various activities including 
            industrial visits, expert talks, workshops, and technical events, we create 
            opportunities for students to excel both academically and professionally.
          </p>
        </div>

        {/* Objectives */}
        <div className="bg-secondary p-8 rounded-lg shadow-lg transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl animate-fadeInUp" style={{animationDelay: '200ms'}}>
          <h2 className="text-2xl font-bold text-primary mb-6">Our Objectives</h2>
          <div className="space-y-4">
            {objectives.map((objective, index) => (
              <div 
                key={index} 
                className="flex items-start transform hover:translate-x-2 transition-all duration-300 opacity-0 animate-slideInObjective"
                style={{animationDelay: `${index * 100}ms`, animationFillMode: 'forwards'}}
              >
                <span className="text-accent font-bold mr-2 transform hover:scale-150 transition-transform duration-300">•</span>
                <p className="text-primary">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInObjective {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-slideInObjective {
          animation: slideInObjective 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

const objectives = [
  "Foster technical excellence through workshops, seminars, and hands-on projects",
  "Develop leadership and organizational skills through event management",
  "Create networking opportunities with industry professionals",
  "Promote innovation and research in electrical engineering",
  "Encourage participation in technical competitions and hackathons",
  "Support academic growth through peer learning and mentorship"
];
  
export default AboutUs;