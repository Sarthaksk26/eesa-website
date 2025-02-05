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
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-bold text-primary">{member.name}</h2>
                <p className="text-accent font-medium">{member.position}</p>
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
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    name: "Ishwari Jamale",
    position: "Vice President",
    department: "Third Year Electrical",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    name: "Gauri Dange",
    position: "Secretary",
    department: "Third Year Electrical",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  },
  {
    name: "Swapnil Teli",
    position: "Finance Head",
    department: "Third Year Electrical",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  },
  {
    name: "Aryan Bingi",
    position: "IIIE Student Chapter Head",
    department: "Third Year Electrical",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  },
  {
    name: "Prasad Munawali",
    position: "Technical Head",
    department: "Third Year Electrical",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  },
  {
    name: "Shreyas Patil",
    position: "Event Head(Extra-Curriculam)",
    department: "Third Year Electrical",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556"
  },
  {
    name: "Prathamesh Kulkarni",
    position: "Event Head(Sports)",
    department: "Third Year Electrical",
    image: "https://images.unsplash.com/photo-1557555187-23d685287bc3"
  },
  {
    name: "Sayali Jadhav",
    position: "Publicity Head",
    department: "Third Year Electrical",
    image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf"
  }
];
  
  export default CommitteeMembers;
  