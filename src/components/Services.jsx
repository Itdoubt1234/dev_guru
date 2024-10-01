import React from "react";

const services = [
  {
    title: "Web Development",
    description:
      "We provide modern and responsive web development services with the latest technologies.",
    icon: "💻",
  },
  {
    title: "UI/UX Design",
    description:
      "Crafting user-friendly and beautiful interfaces for web and mobile applications.",
    icon: "🎨",
  },
  {
    title: "Backend Developer",
    description:
      "Boost your online presence with our expert SEO services and rank higher on search engines.",
    icon: "📈",
  },
  {
    title: "React Developer",
    description:
      "Boost your online presence with our expert SEO services and rank higher on search engines.",
    icon: "📑",
  },
  {
    title: "Java Full stack",
    description:
      "Boost your online presence with our expert SEO services and rank higher on search engines.",
    icon: "🧑‍💻",
  },
  {
    title: "SEO Optimization",
    description:
      "Boost your online presence with our expert SEO services and rank higher on search engines.",
    icon: "📈",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center ">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-400 sm:text-4xl">
            Our Services
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            From development to design, we have all the Technologies you need.
          </p>
        </div>
        <div className="mt-10 ">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-500 rounded-full mx-auto group-hover:bg-blue-300 transition-colors duration-300">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 text-center">
                  {service.title}
                </h3>
                <p className="mt-4 text-base text-gray-500 text-center">
                  {service.description}
                </p>

                {/* Add subtle animation on hover */}
                <div className="absolute inset-0 rounded-lg bg-indigo-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
