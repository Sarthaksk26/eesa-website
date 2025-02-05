const ContactUs = () => {
  return (
    <div className="bg-primary min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary text-center mb-12">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-secondary p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-6">Get in Touch</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-primary mb-2">Location</h3>
                <p className="text-secondary">
                  EESA Library,<br />
                  Government College of Engineering,<br />
                  Karad, Maharashtra
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-primary mb-2">Email</h3>
                <a href="mailto:eesagcoek@gmail.com" className="text-accent hover:underline">
                  eesagcoek@gmail.com
                </a>
              </div>
              
              <div>
                <h3 className="font-semibold text-primary mb-2">Phone</h3>
                <p className="text-secondary">
                  President: +91 97669 26060<br />
                  Secretary: +91 89994 70941
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-primary mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-accent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-primary mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-accent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-primary mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-accent"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-accent text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;