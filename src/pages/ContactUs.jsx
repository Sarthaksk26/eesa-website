import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  // Replace with your Google Apps Script Web App URL
  const googleAppsScriptURL =
    "https://script.google.com/macros/s/AKfycbwcT1sBCPhl2LIQuMqT9nOu3S3dWBcXNBQGBw5gfyCwgEQhDTBdKlzTWwFnS3O9mmKl/exec"; // Replace this with the URL from Apps Script deployment

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await fetch(googleAppsScriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });
  
      // Show success message without waiting for a response
      setResponseMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
  
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("An error occurred, but your message was submitted.");
    }
  };
  
  return (
    <div className="bg-primary min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary text-center mb-12">
          Contact Us
        </h1>

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
                <a
                  href="mailto:eesagcoek@gmail.com"
                  className="text-accent text-primary hover:underline"
                >
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
            <h2 className="text-2xl font-bold text-primary mb-6">
              Send us a Message
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
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
                  className="w-full p-2 rounded-md border text-primary border-gray-300 focus:outline-none focus:border-accent"
                />
              </div>

              <div>
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
                  className="w-full p-2 rounded-md border text-primary border-gray-300 focus:outline-none focus:border-accent"
                />
              </div>

              <div>
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
                  className="w-full p-2 text-primary rounded-md border border-gray-300 focus:outline-none focus:border-accent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>

              {responseMessage && (
                <p className="text-center text-primary mt-4">{responseMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
