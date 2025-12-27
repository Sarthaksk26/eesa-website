const Home = () => {
  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center space-x-8 mb-8 bg-secondary p-12 rounded-4xl border-2 animate-logoFadeIn">
            <img 
              src="/assets/eesa-logo.png" 
              alt="EESA Logo" 
              className="w-32 h-32 md:w-40 md:h-40 object-contain transition-all duration-700 hover:scale-110 hover:rotate-12 animate-logoFloat" 
            />
            <img 
              src="/assets/college-logo.png" 
              alt="College Logo"
              className="w-32 h-32 md:w-40 md:h-40 object-contain transition-all duration-700 hover:scale-110 hover:-rotate-12 animate-logoFloat" 
              style={{animationDelay: '0.2s'}}
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 animate-slideDown">
            EESA Committee
          </h1>
          <h2 className="text-xl md:text-2xl text-secondary mb-8 animate-fadeIn" style={{animationDelay: '0.2s'}}>
            Government College of Engineering, Karad
          </h2>
          <p className="text-lg text-primary italic animate-fadeIn" style={{animationDelay: '0.4s'}}>
            "We are in a service to empower the students"
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center animate-fadeIn">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg animate-zoomIn" style={{animationDelay: '0.1s'}}>
              <img 
                src="/event_photos/img_1.JPG"
                alt="Event 1" 
                className="w-full h-52 object-cover rounded-lg shadow-lg hover:scale-110 transition-transform duration-700 hover:rotate-2"
              />
            </div>
            <div className="overflow-hidden rounded-lg animate-zoomIn" style={{animationDelay: '0.2s'}}>
              <img 
                src="/event_photos/img_2.JPG"
                alt="Event 2" 
                className="w-full h-52 object-cover rounded-lg shadow-lg hover:scale-110 transition-transform duration-700 hover:rotate-2"
              />
            </div>
            <div className="overflow-hidden rounded-lg animate-zoomIn" style={{animationDelay: '0.3s'}}>
              <img 
                src="/event_photos/img_3.JPG"
                alt="Event 3" 
                className="w-full h-52 object-cover rounded-lg shadow-lg hover:scale-110 transition-transform duration-700 hover:rotate-2"
              />
            </div>
          </div>
          <div className="mt-8 text-center animate-fadeInUp">
            <a
              href="https://drive.google.com/drive/folders/1-tWFiEPB7dslu6rTqPntfdeyBKTKToEu?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-lg font-semibold text-primary bg-secondary px-6 py-3 rounded-lg shadow-lg hover:bg-opacity-80 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              View More
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes logoFadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes logoFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-logoFadeIn {
          animation: logoFadeIn 0.8s ease-out;
        }

        .animate-logoFloat {
          animation: logoFloat 3s ease-in-out infinite;
        }

        .animate-slideDown {
          animation: slideDown 0.8s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
          animation-fill-mode: both;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out 0.5s both;
        }

        .animate-zoomIn {
          animation: zoomIn 0.6s ease-out;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
};

export default Home;