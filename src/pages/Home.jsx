const Home = () => {
  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center space-x-8 mb-8">
            <img 
              src="/assets/eesa-logo.png" 
              alt="EESA Logo" 
              className="w-32 h-32 md:w-40 md:h-40 object-contain" 
            />
            <img 
              src="/assets/college-logo.png" 
              alt="College Logo"
              className="w-32 h-32 md:w-40 md:h-40 object-contain" 
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            EESA Committee
          </h1>
          <h2 className="text-xl md:text-2xl text-secondary mb-8">
            Government College of Engineering, Karad
          </h2>
          <p className="text-lg text-primary italic">
            "We are in a service to empower the students"
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
              alt="Event 1" 
              className="w-full h-52 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
            <img 
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94"
              alt="Event 2" 
              className="w-full h-52 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
            <img 
              src="https://images.unsplash.com/photo-1544531585-9847b68c8c86"
              alt="Event 3" 
              className="w-full h-52 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </section>
    </div>
  );
};


export default Home;