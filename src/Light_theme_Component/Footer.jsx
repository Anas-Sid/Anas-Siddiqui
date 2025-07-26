import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-10 px-6 md:px-16 text-center">
      {/* Back to Top */}
      <div className="mb-6">
        <a href="#top" className="text-sm uppercase tracking-wider text-gray-400 hover:text-white transition">
          Back to Top
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-6">
        <a href="https://github.com/Anas-Sid" target="_blank" rel="noopener noreferrer">
          <FaGithub size={22} className="hover:text-gray-300" />
        </a>
        {/* <a href="https://www.linkedin.com/in/anssiddiqui/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={22} className="hover:text-gray-300" />
        </a> */}
        {/* <a href="mailto:anas.siddiqui7707@gmail.com">
          <FaEnvelope size={22} className="hover:text-gray-300" />
        </a> */}
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Anas Siddiqui. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
