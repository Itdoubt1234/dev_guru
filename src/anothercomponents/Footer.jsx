import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Main Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Email</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  ##
                </a>
              </li>
              <li className="mb-2">
                <h3 className="text-lg font-semibold mb-4">Phone</h3>
                <a href="#" className="text-gray-400 hover:text-white">
                  91+
                </a>
              </li>
              <li className="mb-2">
                <h3 className="text-lg font-semibold mb-4">Address</h3>
                <a href="#" className="text-gray-400 hover:text-white">
                  ##
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <div className="flex space-x-6">Legal information</div>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-500">
          <p>&copy;2024 IT DOUBT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
