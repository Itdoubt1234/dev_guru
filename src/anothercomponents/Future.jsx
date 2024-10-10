import React from "react";
import img from "../assets/img/girl.png";
import img3 from "../assets/img/image-5.png";
const Future = () => {
  return (
    <div
      className=" bg-no-repeat mt-10 ml-5"
      style={{
        backgroundImage: `url(${img3})`,
      }}
    >
      <section className="flex flex-col md:flex-row justify-between items-center  ">
        <div className="md:w-1/2 text-center md:text-left pl-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Together, Let's Shape the
            <span className="text-black">Future of Technology</span>
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Allow our team to offer you a complimentary technical proposal for
            your upcoming enterprise custom project, with no obligations.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white py-3 px-6 rounded-full text-lg font-semibold hover:scale-105 transition-transform">
            Have An Project In Mind
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center ">
          <img src={img} alt="/" className=" h-96/2 object-contain mb-10" />
        </div>
      </section>
    </div>
  );
};

export default Future;
