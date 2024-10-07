import React from "react";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";

const services = [
  {
    title: "Web Development",
    description:
      "We provide modern and responsive web development services with the latest technologies.",
    imgUrl: img1,
  },
  {
    title: "UI/UX Design",
    description:
      "Crafting user-friendly and beautiful interfaces for web and mobile applications.",
    imgUrl: img2,
  },
  {
    title: "Backend Developer",
    description:
      "Boost your online presence with our expert SEO services and rank higher on search engines.",
    imgUrl: img3,
  },
  {
    title: "React Developer",
    description:
      "Boost your online presence with our expert SEO services and rank higher on search engines.",
    imgUrl: img1,
  },
  {
    title: "Java Full stack",
    description:
      "Boost your online presence with our expert SEO services and rank higher on search engines.",
    imgUrl: img2,
  },
  {
    title: "SEO Optimization",
    description:
      "Boost your online presence with our expert SEO services and rank higher on search engines.",
    imgUrl: img3,
  },
];

const Services = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-400 sm:text-4xl">
            Our Services
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            From development to design, we have all the Technologies you need.
          </p>
        </div>
        <div className="mt-32 bg-opacity-25">
          <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300"
              >
                <div className="flex items-center justify-center w-52 h-16 text-blue-500 rounded-full mx-auto  ">
                  <img
                    src={service.imgUrl}
                    alt={service.title}
                    className="w-full h-26 object-cover group-hover:scale-150 transition-transform duration-300 rounded-lg"
                  />
                </div>
                <h3 className="mt-10 text-lg font-bold text-blue-800 text-center">
                  {service.title}
                </h3>
                <p className="mt-4 text-base text-gray-500 hover:text-blue-800 text-center">
                  {service.description}
                </p>

                <div className="absolute inset-0 rounded-lg transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
