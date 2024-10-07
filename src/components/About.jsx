import React from "react";
import img3 from "../assets/img/blog3.jpg";
const AboutSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-400  font-extrabold tracking-wide uppercase sm:text-4xl ">
            About Us
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 md:text-4xl">
            IT Doubts is a Software based Campany.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            eaque pariatur, dolorem minus harum natus obcaecati, nisi minima
            tempora officiis qui quisquam nemo labore sapiente a ab excepturi
            sequi nam?
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 pt-10">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-blue-800 mb-4 animate-fadeInDown">
              Building a Better Tech World, One Solution at a Time
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed animate-fadeIn">
              At <span className="text-indigo-600 font-semibold">IT DOUBT</span>
              , we specialize in empowering the next generation of tech talent.
              Our expertise spans{" "}
              <span className="text-indigo-600 font-semibold">Java</span>,
              <span className="text-indigo-600 font-semibold">Python</span>,
              <span className="text-indigo-600 font-semibold">React</span>,
              <span className="text-indigo-600 font-semibold">Node.js</span>,
              and <span className="text-indigo-600 font-semibold">Shopify</span>
              . We’re committed to providing freshers with
              <span className="text-indigo-600 font-semibold">
                hands-on online internships
              </span>
              , in a fully remote, global work environment.
            </p>
          </div>

          <div className="md:w-1/2">
            <div className="relative group ">
              <img
                className="w-full rounded-lg shadow-lg transform transition duration-500 group-hover:scale-105 animate-fadeInRight skew-y-0 skew-x-6"
                src={img3}
                alt="Team working"
              />
              <div className="absolute inset-0 bg-blue-400 opacity-0 p-10 group-hover:opacity-50 transition duration-300 flex items-center justify-center text-white text-2xl font-bold animate-fadeIn skew-y-0 skew-x-6 group-hover:scale-75 ">
                Our expertise spans across multiple technologies like **Java,
                Python, React, Node.js**, and **Shopify**, ensuring that we meet
                the diverse needs of clients from different industries.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center animate-fadeInUp">
          <p className="text-lg text-gray-600">
            Join us and be a part of our journey to foster innovation,
            creativity, and success in the tech industry.
          </p>
          <p className="text-blue-600 text-xl font-semibold mt-4">
            Together, we bring your vision to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
