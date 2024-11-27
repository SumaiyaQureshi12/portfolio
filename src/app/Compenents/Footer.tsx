import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-16 py-6 text-center bg-accent bg-pink-600 text-white">
      {/* Footer Content */}
      <div className="container mx-auto px-4">
        {/* Copyright Text */}
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} sumaiya. All Rights Reserved.
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-all"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-all"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-all"
          >
            <FaTwitter size={24} />
          </a>
        </div>

        {/* Additional Links */}
        <div className="text-sm">
          <a
            href="#privacy"
            className="hover:text-gray-300 mr-4 transition-all"
          >
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-gray-300 transition-all">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
