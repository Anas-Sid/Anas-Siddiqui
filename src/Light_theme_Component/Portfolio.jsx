import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import latour from '../assets/Latourimage.jpg';
import Cooperandkid from '../assets/Cooperandkid.jpg';
import Algorarose from '../assets/Algora.jpg';
import myhomes from '../assets/myhomes.jpg';
import health from '../assets/health.jpg';
const projects = [
  {
    title: 'LA Highlights Tour Website',
    description:
      'A modern, responsive website for LA Highlights Tour, showcasing premium sightseeing experiences and easy online booking for Los Angeles visitors.',
    image: latour,
    liveLink: 'https://www.lahighlightstour.com/', // 🔹 Replace with actual live link
    featured: true,
  },
  {
    title: 'Cooper & Kid Website',
    description:
      'A vibrant subscription-box website for families, crafted to deliver story-based, educational adventures for kids and parents.',
    image: Cooperandkid,
    liveLink: 'https://cooperandkid.com/', // 🔹 Replace with actual live link
    featured: true,
  },
  {
    title: 'Algora Rose Website',
    description:
      'A vibrant subscription-box website for families, crafted to deliver story-based, educational adventures for kids and parents.',
    image: Algorarose,
    liveLink: 'https://algora-rose.vercel.app/', // 🔹 Replace with actual live link
    featured: true,
  },
  {
    title: 'MyHome.ie Property Portal',
    description:
      'A comprehensive Irish property portal allowing users to browse thousands of homes for sale or rent across Ireland.',
    image: myhomes,
    liveLink: 'https://www.myhome.ie/', // 🔹 Replace with actual live link
    featured: true,
  },
  {
    title: 'Hā Health Wellness Platform',
    description:
      'A modern, AI-powered wellness platform that delivers personalised lifestyle, nutrition and fitness plans tailored to the user’s goals.',
    image: health,
    liveLink: 'https://staging.haahealth.com/', // 🔹 Replace with actual live link
    featured: true,
  },
];

const Portfolio = () => {
  const navigate = useNavigate();

  const handleDetailsClick = (index) => {
    navigate(`/project/${index}`);
  };

  return (
    <section id="projects" className="py-8 px-4 sm:px-2 bg-gray-300">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-800">Some of my best work, showcased cleanly.</p>
      </div>

      <div className="bg-[#1a1a1a] text-white rounded-3xl w-full md:w-full mx-auto px-4 sm:px-6 md:px-12 py-10 flex flex-col gap-16 md:mr-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            } items-center gap-8`}
          >
            {/* Image */}
            <div className="md:w-1/2 w-full">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg shadow-md object-cover w-full h-auto"
              />
            </div>

            {/* Text */}
            <div className="md:w-1/2 w-full">
              <p className="text-sm text-purple-400 font-medium mb-1">
                Featured Project
              </p>
              <Link to={`/project/${index}`}>
                <h3 className="text-2xl font-bold mb-3 cursor-pointer">{project.title}</h3>
              </Link>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap items-center gap-4 mt-5">
                <button
                  type="button"
                  onClick={() => handleDetailsClick(index)}
                  className="bg-white text-black px-6 py-1.5 rounded-md hover:bg-gray-800 hover:text-white transition-all cursor-pointer"
                >
                  Project Details →
                </button>

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border border-white text-white px-6 py-1.5 rounded-md hover:bg-white hover:text-black transition-all cursor-pointer"
                  >
                    Live Website
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
