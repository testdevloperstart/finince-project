import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo or Brand Name */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Brand Logo</h2>
            <p className="text-gray-400">Making your financial dreams come true.</p>
          </div>

          {/* Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-yellow-500">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-yellow-500">About</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-yellow-500">Services</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-yellow-500">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-yellow-500">Facebook</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">Twitter</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">Instagram</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">LinkedIn</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p>Email: info@yourbrand.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 Finance St, Business City, USA</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400">
          &copy; 2024 Your Brand Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
