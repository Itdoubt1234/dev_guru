import React from "react";
import bgImage from "../assets/img/image 3.png";
const About1 = () => {
  return (
    <div
      className="relative h-96 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl font-bold mb-2">About Us</h1>
        <p>Home › About Us</p>
      </div>
    </div>
  );
};
export default About1;
