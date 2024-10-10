import React from "react";
import bgImage from "../assets/img/Rectangle.png";
import img18 from "../assets/img/image 18.png";
import img17 from "../assets/img/image 17.png";
import img16 from "../assets/img/image 16.png";
function Features() {
  return (
    <div
      className=" h-96 overflow-hidden p-10 w-full   bg-slate-100 bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="flex items-center flex-row justify-center gap-20  h-96 float-start pl-10 ">
        <img src={img18} alt="/" className="w-96 h-auto object-contain " />
        <img src={img17} alt="/" className="w-60 h-80 object-contain " />
        <div className="mb-80 flex flex-row gap-5">
          <img
            src={img16}
            alt="/"
            className="w-20 h-40 object-contain pt-10 "
          />
          <h1 className="text-2xl font-bold pt-20 text-white">
            Online Beer Store
            <br />
            <p className="text-xl">www.beerstore.com.au ➡️</p>
            <hr className="text-white" />
          </h1>
        </div>
      </div>
      <div className="mt-28  ">
        <p className="text-white ">The Beerstore is a family run business,</p>
      </div>
    </div>
  );
}

export default Features;
