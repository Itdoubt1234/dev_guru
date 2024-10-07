import React from "react";
import img2 from "../assets/img/image (1).png";
import img1 from "../assets/img/image.png";
import img3 from "../assets/img/image (2).png";

const About = () => {
  return (
    <div className="">
      <h2 className=" text-center text-base text-blue-950  font-extrabold tracking-wide sm:text-4xl ">
        About Us
      </h2>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0 ">
          <img
            src={img1}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-4xl font-bold mb-4 text-blue-950">
            Your Trusted Development and Digital Marketing Parter
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            officiis numquam, dolore voluptatibus placeat natus tempore sit,
            asperiores impedit itaque cum architecto, similique laboriosam
            itaque cum architecto, similique laboriosam. Itaque molestiae
            officiis.
          </p>

          <p className="text-gray-700 mb-4">
            ☑️ officiis numquam, dolore voluptatibus placeat
            <br />
            ☑️ natus tempore Lorem ipsum dolor sit amet consectetur adipisicing
            elit,
            <br />
            ☑️asperiores impedit itaque cum architecto,
            <br />
            ☑️Itaque molestiae officiis voluptas atque?
          </p>

          <button className="bg-gradient-to-r from-red-500  to-yellow-500  text-white py-2 px-6 rounded-full font-semibold">
            Explore Services
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 gap-4 py-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-4xl font-bold mb-4 text-blue-950">Who We Are</h1>
          <p className="text-lg text-gray-700 mb-4">
            officiis numquam, dolore voluptatibus placeat natus tempore sit,
            asperiores impedit itaque cum architecto, similique laboriosam
            itaque cum architecto, similique laboriosam. Itaque molestiae
            officiis.
          </p>

          <p className="text-gray-700 mb-4">
            officiis numquam, dolore voluptatibus placeat natus tempore sit,
            asperiores impedit itaque cum architecto, similique laboriosam.
            Itaque molestiae officiis voluptas atque?
          </p>

          <button className="bg-gradient-to-r from-red-500  to-yellow-500  text-white py-2 px-6 rounded-full font-semibold">
            Explore Services
          </button>
        </div>
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src={img2}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0 ">
          <img
            src={img3}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-4xl font-bold mb-4 text-blue-950">Our Mission</h1>
          <p className="text-lg text-gray-700 mb-4 pb-10">
            officiis numquam, dolore voluptatibus placeat natus tempore sit,
            asperiores impedit itaque cum architecto, similique laboriosam
            itaque cum architecto, similique laboriosam. Itaque molestiae
            officiis.
          </p>

          <button className="bg-gradient-to-r from-red-500  to-yellow-500  text-white py-2 px-6 rounded-full font-semibold">
            Explore Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
