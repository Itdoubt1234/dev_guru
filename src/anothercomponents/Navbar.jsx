import React from "react";
import logo from "../assets/img/logo.png";

export default function Navbar() {
  return (
    <nav
      style={{
        boxShadow:
          "inset 1px 1px 15px rgba(1, 16, 60, 0.2), inset -1px -1px 15px rgba(1, 16, 60, 0.2)",
      }}
      className="fixed z-[100] top-[25px] w-[80%] flex justify-between items-center py-2 ml-40 px-3 bg-[#f6f8fa] text-black rounded-full"
    >
      <a href="/" className={"p-semibold text-lg uppercase"}>
        <img
          className="absolute top-1/2 -translate-y-1/2 -left-[35px] h-[75px]"
          src={logo}
          alt=""
        />
      </a>
      <div className="flex gap-7">
        <a
          href="/"
          className={({ isActive }) =>
            `text-sm transition duration-300 ${
              isActive
                ? "border-b-2 border-black font-medium"
                : "border-b-2 border-transparent"
            }`
          }
        >
          Home
        </a>
        <a
          href="/about"
          className={({ isActive }) =>
            `text-sm transition duration-300 ${
              isActive
                ? "border-b-2 border-black font-medium"
                : "border-b-2 border-transparent"
            }`
          }
        >
          About Us
        </a>
        <a
          href="/services"
          className={({ isActive }) =>
            `text-sm transition duration-300 ${
              isActive
                ? "border-b-2 border-black font-medium"
                : "border-b-2 border-transparent"
            }`
          }
        >
          Our Services
        </a>
        <a
          href="/internships"
          className={({ isActive }) =>
            `text-sm transition duration-300 ${
              isActive
                ? "border-b-2 border-black font-medium"
                : "border-b-2 border-transparent"
            }`
          }
        >
          Internships
        </a>
      </div>
      <button className="text-[#FAF9F6] bg-blue-400 p-medium rounded-full py-1 px-4">
        <a href="/contact" className="text-sm">
          Get in Touch
        </a>
      </button>
    </nav>
  );
}
