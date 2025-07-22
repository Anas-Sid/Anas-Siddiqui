import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
// import Doctor_Main from '../assets/Doc Main.png';
import crypto1 from '../assets/Crypto tracker .jpg';
import project3 from '../assets/project 3.jpg';
import doc_dash from '../assets/Doctors_Dashboard.jpg';
import bakery from '../assets/Bakery main.jpg';
import project5 from '../assets/project5.png';


const projects = [
  {
    title: 'Doctor Appointment Booking System',
    description:
      'A full-stack MERN web app that allows patients to book appointments and doctors to manage their availability through a secure portal.',
    image: doc_dash,
    featured: true,
  },
  {
    title: 'Crypto Price Tracker',
    description:
      'A real-time cryptocurrency tracker that displays live coin prices using public APIs',
      image: crypto1,
    featured: true,
  },
  {
    title: 'HealthVault Portal',
    description:
      'A secure hospital portal where patients can register and store their personal and medical information for easy access and management.',
      image: project3,
    featured: true,
  },
  {
    title: 'Online Bakery Store',
    description:
      'A visually appealing bakery website that displays all products with categories, pricing, and responsive design.',
      image: bakery ,
    featured: true,
  },
  {
    title: 'Invoice Generator',
    description:
      'A simple web app to create and preview invoices dynamically. Built using React.js and Tailwind CSS with editable fields and clean UI.',
     image: project5,
    featured: true,
  },
  
];

const Portfolio = () => {

  const navigate = useNavigate();

  const handleDetailsClick = (index) => {
    navigate(`/project/${index}`);
  };
  
  return (
    <section id="projects" className="py-20  px-6 md:px-16 bg-[#1a1a1a] text-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-400">Some of my best work, showcased cleanly.</p>
      </div>

      <div className="flex flex-col gap-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            } items-center gap-8`}
          >
            {/* Image */}
            <div className="md:w-1/2">
              
                <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: project.width, height: project.height }}
                    className="rounded-lg shadow-md object-cover cursor-pointer"
                  />
            </div>

            {/* Text */}
            <div className="md:w-1/2">
              <p className="text-sm text-purple-400 font-medium mb-1">
                Featured Project
              </p>
              <Link to={`/project/${index}`}>
                <h3 className="text-2xl font-bold mb-3 cursor-pointer">{project.title}</h3>
              </Link>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>

               <button
                type="button"
                onClick={() => handleDetailsClick(index)}
                className="bg-white text-black px-8 py-1.5 rounded-md hover:bg-gray-800 transition-all cursor-pointer mt-5"
              >
                Project Details →
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
