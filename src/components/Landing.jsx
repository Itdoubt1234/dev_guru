import React from "react";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";

function Landing() {
  return (
    <div className=" bg-white-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">IT DOUBT</div>
          <nav>
            <a href="#" className=" hover:text-blue-600 mx-4">
              Home
            </a>
            <a href="#" className=" hover:text-blue-600 mx-4">
              Services
            </a>
            <a href="#" className=" hover:text-blue-600 mx-4">
              About
            </a>
            <a href="#" className=" hover:text-blue-600 mx-4">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <div>
        <section
          className="bg-fixed bg-center bg-cover h-screen"
          style={{
            backgroundImage: `url(${img3})`,
          }}
        >
          <div className="h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">Welcome to IT Doubt</h1>
              <p className="text-lg mb-8">
                We craft beautiful interior solutions that make your home stand
                out.
              </p>
              <button className="bg-white hover:text-white text-blue-400 hover:bg-blue-600 py-2 px-6 rounded-full font-semibold">
                Get Started
              </button>
            </div>
          </div>
        </section>
      </div>

      <section className="py-2 bg-fixed">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">
            Why Choose IT Doubt
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pl-20">
            <div className="w-[190px] h-[254px] rounded-2xl bg-white relative p-7 border-2 border-gray-300 transition ease-out duration-500 overflow-visible hover:border-blue-500 hover:shadow-lg shadow-inner shadow-blue-600">
              <div className="text-black h-full grid gap-2 place-content-center">
                <h3 className="text-2xl font-bold text-blue-400">
                  👨‍💻
                  <br /> Web Development
                </h3>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae iste.
                </p>
              </div>
            </div>
            <div className="w-[190px] h-[254px] rounded-2xl bg-white relative p-7 border-2 border-gray-300 transition ease-out duration-500 overflow-visible hover:border-blue-500 hover:shadow-lg shadow-inner shadow-blue-600">
              <div className="text-black h-full grid gap-2 place-content-center">
                <h3 className="text-2xl font-bold  text-blue-400">
                  🖥️
                  <br /> Full Stack Engineer
                </h3>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae iste .
                </p>
              </div>
            </div>
            <div className="w-[190px] h-[254px] rounded-2xl bg-white relative p-7 border-2 border-gray-300 transition ease-out duration-500 overflow-visible hover:border-blue-500 hover:shadow-lg shadow-inner shadow-blue-600">
              <div className="text-black h-full grid gap-2 place-content-center">
                <h3 className="text-2xl font-bold  text-blue-400">
                  🧑‍💻
                  <br /> DevOps developer
                </h3>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae iste .
                </p>
              </div>
            </div>
            <div className="w-[190px] h-[254px] rounded-2xl bg-white relative p-7 border-2 border-gray-300 transition ease-out duration-500 overflow-visible hover:border-blue-500 hover:shadow-lg shadow-inner shadow-blue-600">
              <div className="text-black h-full grid gap-2 place-content-center">
                <h3 className="text-2xl font-bold  text-blue-400">
                  📑
                  <br /> Backend Developer
                </h3>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae iste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
