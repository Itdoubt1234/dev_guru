import React from "react";
import img3 from "../assets/img/image 14.png";

const Landing = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 lg:px-24 text-gray-800">
      <h1 className="text-3xl lg:text-5xl font-bold text-center mb-10">
        Transforming businesses through <br />
        <span className="text-blue-950">excellence and expertise.</span>
      </h1>
      <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-10">
        <div className="relative w-full lg:w-1/2 h-80 lg:h-auto flex justify-center">
          <img src={img3} alt="/" className="h-full object-cover" />
        </div>

        <div className="mt-8 lg:mt-0 w-full lg:w-1/2 grid grid-cols-1 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold">Tailored Solutions</h2>
            <p className="mt-2 text-gray-600">
              Our software development expertise customizes solutions for
              businesses based on their specific needs.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold">Cutting-Edge Services</h2>
            <p className="mt-2 text-gray-600">
              We offer a comprehensive range of services to help you leverage
              the full potential of digital technology.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold">Different Approach</h2>
            <p className="mt-2 text-gray-600">
              Our solutions are highly adaptable to suit any business while
              enhancing their durability and reliability.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold">Bespoke Process</h2>
            <p className="mt-2 text-gray-600">
              Our objective is to offer personalized solutions that aid in the
              success of your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
