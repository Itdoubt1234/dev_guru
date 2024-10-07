import React from "react";
import img from "../assets/img/Group 1000004614.png";

const Technology = () => {
  return (
    <div>
      <div className="lg:text-center text-center">
        <h2 className="text-base text-blue-950  font-extrabold tracking-wide sm:text-4xl ">
          Technology
        </h2>
      </div>
      <p className="mt-4 text-lg text-gray-500 text-center">
        Our engineers understand your businees need and assest in selecting the
        apporoprite Technology for your solutions.
      </p>
      <br />
      <div className="pl-20 pr-20  flex items-center">
        <img className="" src={img} alt="Team working" />
      </div>
    </div>
  );
};

export default Technology;
