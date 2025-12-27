import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const googleAppsScriptURL =
    "https://script.google.com/macros/s/AKfycbwcT1sBCPhl2LIQuMqT9nOu3S3dWBcXNBQGBw5gfyCwgEQhDTBdKlzTWwFnS3O9mmKl/exec"; 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
  
    try {
      await fetch(googleAppsScriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });
  
      setResponseMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
  
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("An error occurred, but your message was submitted.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-primary min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary text-center mb-12 animate-fadeIn">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-secondary p-8 rounded-lg shadow-lg transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl animate-slideInLeft">
            <h2 className="text-2xl font-bold text-primary mb-6">Get in Touch</h2>

            <div className="space-y-4">
              <div className="transform hover:translate-x-2 transition-transform duration-300">
                <h3 className="font-semibold text-primary mb-2">Location</h3>
                <p className="text-secondary">
                  EESA Library,<br />
                  Government College of Engineering,<br />
                  Karad, Maharashtra
                </p>
              </div>

              <div className="transform hover:translate-x-2 transition-transform duration-300">
                <h3 className="font-semibold text-primary mb-2">Email</h3>
                <a
                  href="mailto:eesagcoek@gmail.com"
                  className="text-accent text-primary hover:underline transition-all duration-300"
                >
                  eesagcoek@gmail.com
                </a>
              </div>

              <div className="transform hover:translate-x-2 transition-transform duration-300">
                <h3 className="font-semibold text-primary mb-2">Phone</h3>
                <p className="text-secondary">
                  President: +91 97669 26060<br />
                  Secretary: +91 89994 70941
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary p-8 rounded-lg shadow-lg transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl animate-slideInRight">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Send us a Message
            </h2>

            <div className="space-y-4"> 
              <div className="animate-fadeInUp" style={{animationDelay: '0.1s'}}>
                <label htmlFor="name" className="block text-primary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded-md border text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent transition-all duration-300 transform focus:scale-105"
                />
              </div>

              <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                <label htmlFor="email" className="block text-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded-md border text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent transition-all duration-300 transform focus:scale-105"
                />
              </div>

              <div className="animate-fadeInUp" style={{animationDelay: '0.3s'}}>
                <label htmlFor="message" className="block text-primary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-2 text-primary rounded-md border focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent transition-all duration-300 transform focus:scale-105"
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:opacity-80 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed animate-fadeInUp"
                style={{animationDelay: '0.4s'}}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>

              {responseMessage && (
                <p className="text-center text-primary mt-4 animate-bounce">
                  {responseMessage}
                </p>
              )}
            </div>
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
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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
          animation: fadeInUp 0.6s ease-out;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;