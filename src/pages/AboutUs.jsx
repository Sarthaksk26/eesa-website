
const AboutUs = () => {
  return (
    <div className="bg-primary min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary text-center mb-12">About EESA</h1>
        
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-secondary p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
            <p className="text-primary">
              To create a collaborative environment for the wholesome growth of students and foster 
              innovation in electrical engineering education.
            </p>
          </div>
          <div className="bg-secondary p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-primary">
              Empowering students to reach their full potential through skill development, 
              knowledge sharing, and engaging extracurricular activities.
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-secondary p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">Who We Are</h2>
          <p className="text-primary mb-4">
            EESA is a dynamic platform that brings together electrical engineering students 
            to foster growth, innovation, and excellence. Through various activities including 
            industrial visits, expert talks, workshops, and technical events, we create 
            opportunities for students to excel both academically and professionally.
          </p>
        </div>

        {/* Objectives */}
        <div className="bg-secondary p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-primary mb-6">Our Objectives</h2>
          <div className="space-y-4">
            {objectives.map((objective, index) => (
              <div key={index} className="flex items-start">
                <span className="text-accent font-bold mr-2">•</span>
                <p className="text-primary">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
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
  