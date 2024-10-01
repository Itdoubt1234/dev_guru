import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-blue-400">Contact Us</h2>
          <p className="mt-4 text-lg text-blue-200">
            We’re here to help! Whether you have a question about our services,
            want to discuss a project, or are interested in our internship
            programs, don’t hesitate to reach out. Our team is available 24/7 to
            assist you with any queries.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
          <div>
            <p className="text-gray-900 font-medium">Email</p>
            <p className="text-blue-400">info@itdoubt.com</p>
          </div>
          <div>
            <p className="text-gray-900 font-medium">Phone</p>
            <p className="text-blue-400">+1-123-456-7890 (International)</p>
            <p className="text-blue-400">+91-9876543210 (Local)</p>
          </div>
          <div>
            <p className="text-gray-900 font-medium">Location</p>
            <p className="text-blue-400">
              Fully online, serving clients worldwide
            </p>
          </div>
        </div>

        <div className="mt-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-extrabold  text-blue-400"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm  font-extrabold  text-blue-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-extrabold  text-blue-400"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Subject"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-extrabold  text-blue-400"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg text-blue-500 font-bold">
            We look forward to solving your IT challenges. Reach out today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
