import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImage from '../assets/Profile.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#f1f1f1] ">
      {/* Split Background with Angle */}
      <div className="absolute inset-0 z-0 flex">
        {/* Desktop angled background */}
        <div className="w-1/2 bg-[#f1f1f1] md:block hidden"></div>
        <div className="w-1/2 bg-[#1a1a1a] clip-diagonal-right md:block hidden"></div>

        {/* Mobile background fallback */}
        <div className="w-full h-[820px] md:h-full md:hidden absolute inset-0 bg-gradient-to-b from-[#f1f1f1] to-[#1a1a1a]" />
      </div>

      {/* Hero Content */}
      <div className=" md:relative z-20 flex w-full px-6 md:px-16 justify-between items-center flex-col md:flex-row mt-[85px] md:mt-0 gap-8 md:gap-0"> 
        {/* Text on top (mobile), left side (desktop) */}
        <div className="text-center md:text-left md:w-1/2 md:text-black md:mt-[-130px]">
          <h3 className="text-sm text-black md:text-lg md:text-gray-700">Hi, I am</h3>
          <h1 className="text-3xl text-black md:text-black md:text-5xl font-bold mb-2">Anas Siddiqui</h1>
          <p className="md:text-gray-600 text-black text-lg md:text-xl mb-4">Full Stack Developer</p>
          <div className="flex justify-center md:justify-start gap-4 flex-wrap">
            <a href="https://github.com/Anas-Sid" target="_blank" rel="noopener noreferrer">
              <FaGithub size={22} className="text-black md:text-gray-700 hover:text-black mt-1 md:mt-2" />
            </a>
            <a href="https://www.linkedin.com/in/anssiddiqui/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={22} className="text-black md:text-gray-700 hover:text-black mt-1 md:mt-2" />
            </a>
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black md:bg-black md:text-white px-7 py-1.5 rounded-lg font-semibold hover:bg-gray-600 transition-all ml-2"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Image below text on mobile */}
        <div className="md:w-1/2 flex justify-center mb-10 md:mt-[80px]">
          <img
            src={profileImage}
            alt="Profile"
            className="w-75 md:w-72 h-auto object-cover rounded-lg z-20 md:ml-30 md:mt-8"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
