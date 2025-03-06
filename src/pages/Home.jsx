const Home = () => {
  return (
    <div className="min-h-screen bg-primary">
      {/* Notice Bar
      <div className="bg-red-600 text-white text-center py-2 font-semibold">
      📢 <strong>Upcoming EESA Events!</strong> <br />
      📍 <strong>March 5:</strong> LinkedIn & Resume Building Workshop <br />
      ⚡ Enhance your career & clear your doubts! Stay tuned!
      </div> */}

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center space-x-8 mb-8 bg-secondary p-12 rounded-4xl border-2">
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
              src="/assets/IMG_1148.JPG"
              alt="Event 1" 
              className="w-full h-52 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
            <img 
              src="/assets/IMG_1320.JPG"
              alt="Event 2" 
              className="w-full h-52 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
            <img 
              src="/assets/IMG_2836.JPG"
              alt="Event 3" 
              className="w-full h-52 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
          </div>

          {/* Google Photos Link */}
          <div className="mt-8 text-center">
            <a
              href="https://drive.google.com/drive/folders/1-tWFiEPB7dslu6rTqPntfdeyBKTKToEu?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-white bg-secondary px-6 py-3 rounded-lg shadow-lg hover:bg-opacity-80 transition"
            >
              View More on Google Drive
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
