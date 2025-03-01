const CommitteeMembers = () => {
  return (
    <div className="bg-primary min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-primary text-center mb-12">
          Meet Our Team
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {committeeMembers.map((member, index) => (
            <div key={index} className="bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className={`w-full h-64 rounded-lg mb-4 object-cover ${
                    member.name === "Aryan Bingi" ? "h-56 object-top" : ""
                  }`}
                />
                <h2 className="text-xl font-bold text-primary">{member.name}</h2>
                <p className="text-accent font-medium text-primary">{member.position}</p>
              </div>
              <p className="text-secondary">{member.department}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const committeeMembers = [
  {
    name: "Samarth Shenavi",
    position: "President",
    department: "Third Year Electrical",
    image: "/assets/samarth.jpg"
  },
  {
    name: "Ishwari Jamale",
    position: "Vice President",
    department: "Third Year Electrical",
    image: "/assets/ishwari.jpg"
  },
  {
    name: "Gauri Dange",
    position: "Secretary",
    department: "Third Year Electrical",
    image: "/assets/gavri.jpg"
  },
  {
    name: "Swapnil Teli",
    position: "Finance Head",
    department: "Third Year Electrical",
    image: "/assets/swapnil.jpg"
  },
  {
    name: "Aryan Bingi",
    position: "IIIE Student Chapter Head",
    department: "Third Year Electrical",
    image: "/assets/aryan.jpg"
  },
  {
    name: "Prasad Munawali",
    position: "Technical Head",
    department: "Third Year Electrical",
    image: "/assets/prasad.jpg"
  },
  {
    name: "Shreyas Patil",
    position: "Event Head(Extra-Curriculam)",
    department: "Third Year Electrical",
    image: "/assets/shreyas.jpg"
  },
  {
    name: "Prathamesh Kulkarni",
    position: "Event Head(Sports)",
    department: "Third Year Electrical",
    image: "/assets/prathamesh.jpg"
  },
  {
    name: "Sayali Jadhav",
    position: "Publicity Head",
    department: "Third Year Electrical",
    image: "/assets/sayali.jpg"
  }
];
  
  export default CommitteeMembers;
  