import React from "react";
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import logo from "./image/shop.jpg";

const Footer = () => {

  return (
    <footer className="bg-gray-900 text-white py-4" >
      <div className="container mx-auto flex justify-center items-center">
        <a
          href="https://www.instagram.com/example_instagram/"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="mailto:pixelmagicin@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope size={24} />
        </a>
      </div>
      <p className="text-center mt-4 text-gray-400 text-sm">
        Photograph &copy; 2023
      </p>
    </footer>
  );
};
export default Footer;
