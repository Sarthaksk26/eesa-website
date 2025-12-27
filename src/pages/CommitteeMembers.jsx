import committeeMembers from "../data/committeeMembers";

const CommitteeMembers = () => {
  return (
    <div className="bg-primary min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-primary text-center mb-12 animate-fadeIn">
          Meet Our Team
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {committeeMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-secondary p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 opacity-0 animate-cardFadeIn group"
              style={{animationDelay: `${index * 150}ms`, animationFillMode: 'forwards'}}
            >
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className={`w-full h-64 rounded-lg mb-4 object-cover transition-all duration-700 transform group-hover:scale-110 group-hover:rotate-2 ${
                    member.name === "Aryan Bingi" ? "h-56 object-top" : ""
                  }`}
                />
                <h2 className="text-xl font-bold text-primary transition-colors duration-300 group-hover:text-accent">
                  {member.name}
                </h2>
                <p className="text-accent font-medium text-primary transition-all duration-300 group-hover:translate-x-1">
                  {member.position}
                </p>
              </div>
              <p className="text-secondary transition-opacity duration-300 group-hover:opacity-80">
                {member.department}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes cardFadeIn {
          from { opacity: 0; transform: translateY(30px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-cardFadeIn {
          animation: cardFadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CommitteeMembers;