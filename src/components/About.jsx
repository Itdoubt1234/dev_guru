import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-8 ">
            <div className="relative shadow-lg rounded-lg hover:border-2 border-cyan-300 p-10">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  🚀
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Our Mission
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
                labore dolore impedit? Voluptas ipsum expedita accusamus ab in
                quo..
              </dd>
            </div>

            <div className="relative shadow-lg rounded-lg hover:border-2 border-cyan-300 p-10">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  💡
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Our Vision
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                To empower businesses through technology, driving success and
                sustainability.
              </dd>
            </div>

            <div className="relative shadow-lg rounded-lg hover:border-2 border-blue-400 p-10">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  🌍
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Our Values
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                fuga repellendus facere et enim, voluptates vitae iure
                consequatur nobis.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default About;
