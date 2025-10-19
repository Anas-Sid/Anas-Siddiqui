import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// Add more images if availab
import latour from '../assets/Latourimage.jpg';
import Cooperandkid from '../assets/Cooperandkid.jpg';
import Algorarose from '../assets/Algora.jpg';
import myhomes from '../assets/myhomes.jpg';
import health from '../assets/health.jpg';

// --- Projects array (you can keep this in a separate file) ---
// NOTE: you can optionally add a `liveUrl` key to any project object to enable the "Visit Live Website" button.
const projects = [
  {
    title: 'LA Highlights Tour Website',
    description:
      'A fully responsive and visually captivating website designed for LA Highlights Tour, a travel and sightseeing company offering guided tours across Los Angeles. The platform provides visitors with detailed information about tour packages, schedules, and booking options. I developed this project focusing on a smooth user experience, fast performance, and elegant presentation — integrating modern web design, responsive layouts, and SEO best practices to enhance visibility and engagement.',
    screenshots: [{ type: 'image', src: latour }],
    technologies: [
      'React.js',
      'Next.js',
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Mongoose',
    'RESTful API',
    'Tailwind CSS',
    'Axios',
    'Postman',
    'JWT (Authentication)',
    'Vercel (Deployment)',
    'VS Code (Development Environment)',
    'Git & GitHub',
    'SEO Optimization'
    ],
    liveUrl: 'https://www.lahighlightstour.com/',
  },
  {
    title: 'Cooper & Kid Website',
    description:
      'A fully responsive e-commerce site developed for Cooper & Kid—a family-focused brand delivering immersive, story-based subscription boxes. The site features engaging visuals, seamless product browsing, secure checkout, and an intuitive subscription flow. I built this project with a focus on performance, user experience, and mobile-first design to create a joyful and easy way for parents and children to explore creative adventures together.',
    screenshots: [
      { type: 'image', src: Cooperandkid },
    ],
    technologies: [
      'React.js',
  'Firebase Authentication',
  'Tailwind CSS',
  'Axios',
  'React Router',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Stripe Payment Integration',
  'Framer Motion (for animations)',
  'Context API (state management)',
  'Vercel Deployment',
  'Git & GitHub Version Control'
    ],
    liveUrl: 'https://cooperandkid.com/',
  },
  {
    title: 'Algora Rose Website',
    description:
      'A fully responsive personal portfolio website built for Algora Rose, designed to highlight their work, skills, and professional journey. The site features smooth animations, clear project listings, and a contact form for seamless connection. I focused on performance optimization, mobile-first layout, and a polished UI/UX to ensure an elegant presentation of the individual’s brand and capabilities.',
    screenshots: [{ type: 'image', src: Algorarose }],
    technologies: ['Next.js',
  'Tailwind CSS',
  'JavaScript (ES6+)',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Mongoose',
  'RESTful API',
  'OpenAI API Integration',
  'Axios',
  'Git',
  'GitHub',
  'Postman (API Testing)',
  'Vercel Deployment',
  'JSON Web Token (JWT)',
  'Cloudinary (Media Storage)',
  'Framer Motion (Animations)',
  'Next Auth (Authentication)'],
    liveUrl: 'https://algora-rose.vercel.app/',
  },
  {
    title: 'MyHome.ie Property Portal',
    description:
      'A large-scale, responsive web platform for MyHome.ie, built to enable users and estate agents to seamlessly search, list, and manage residential and commercial property across Ireland. The site supports advanced filtering (price, location, property type), map views, virtual tours, and integrates key data feeds (e.g., property price register) to ensure listings stay up-to-date. I worked on the front-end performance optimization, mobile-first architecture, dynamic listing components, and UI/UX design to deliver fast searches and an intuitive user experience across devices.' ,
    screenshots: [{ type: 'image', src: myhomes }],
    technologies: [
  'Next.js',
  'Tailwind CSS',
  'JavaScript (ES6+)',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Mongoose',
  'RESTful API',
  'OpenAI API Integration',
  'Axios',
  'Git',
  'GitHub',
  'Postman (API Testing)',
  'Vercel Deployment',
  'JSON Web Token (JWT)',
  'Cloudinary (Media Storage)',
  'Framer Motion (Animations)',
  'Next Auth (Authentication)'
],
    liveUrl: 'https://www.myhome.ie/',
  },
  {
    title: 'Hā Health Wellness Platform',
    description:
      'A fully responsive web platform for Hā Health that combines cutting-edge AI technology with human-centred design to create personalised wellness plans. The site allows users to set health goals, track fitness and nutrition progress, and access tailored content—delivered through a clean UI, mobile-first interface, and smooth performance. I developed this project focusing on scalable front-end architecture, interactive user experiences, and seamless integration with backend services to drive engagement and retention..',
    screenshots: [
      { type: 'image', src: health },
    ],
    technologies: [
      'Next.js',
  'React.js',
  'Tailwind CSS',
  'JavaScript (ES6+)',
  'Node.js',
  'Express.js',
  'MongoDB',
  'RESTful API',
  'JSON Web Token (JWT)',
  'Next Auth (Authentication)',
  'Cloudinary (Media Storage)',
  'Git',
  'GitHub',
  'Postman (API Testing)',
  'Vercel Deployment',
  ],
    liveUrl: 'https://staging.haahealth.com/',
  }
];

const ProjectDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const project = projects[id];

  // lightbox + animation states
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [showNoUrlModal, setShowNoUrlModal] = useState(false);

  useEffect(() => {
    // trigger mount animation
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  if (!project) return <div className="min-h-screen flex items-center justify-center text-black bg-black ">Project not found</div>;

  // Prefer showing a single screenshot (the first) — keeps layout clean and responsive
  const primary = project.screenshots && project.screenshots.length > 0 ? project.screenshots[0] : null;

  return (
    <section className={`min-h-screen py-12 px-4 md:px-16 bg-black text-white relative overflow-x-hidden`}>
      {/* Lightbox Overlay */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedMedia(null)}
        >
          {selectedMedia.type === 'image' ? (
            <img
              src={selectedMedia.src}
              alt="Zoomed Screenshot"
              className="max-w-[95%] max-h-[95%] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <video
              src={selectedMedia.src}
              controls
              autoPlay
              className="max-w-[95%] max-h-[95%] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}

      {/* Back button */}
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-md shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-0.5 cursor-pointer"
        >
          ← Back to Projects
        </button>

        <div
          className={`grid gap-8 md:grid-cols-2 items-start transition-all duration-600 ease-out transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

          {/* Left: Media */}
          <div className="w-full">
            <div className="relative rounded-2xl overflow-hidden border border-white/5 shadow-lg">
              {/* Primary media large preview */}
              {primary ? (
                primary.type === 'image' ? (
                  <img
                    src={primary.src}
                    alt={project.title}
                    onClick={() => setSelectedMedia(primary)}
                    className="w-full h-[360px] md:h-[520px] object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <video
                    src={primary.src}
                    controls
                    className="w-full h-[360px] md:h-[520px] object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                  />
                )
              ) : (
                <div className="w-full h-64 md:h-[420px] flex items-center justify-center text-gray-300">No preview available</div>
              )}

              {/* Decorative corner tag */}
              <div className="absolute top-4 left-4 bg-white/6 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                Project Preview
              </div>

              {/* Thumbnails strip (if you later add more screenshots) */}
              {project.screenshots && project.screenshots.length > 1 && (
                <div className="absolute bottom-4 left-4 right-4 flex gap-3 overflow-x-auto pr-4">
                  {project.screenshots.map((m, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedMedia(m)}
                      className="w-20 h-12 rounded-md overflow-hidden border border-white/10 flex-shrink-0 shadow-sm"
                    >
                      {m.type === 'image' ? (
                        <img src={m.src} alt={`thumb-${i}`} className="w-full h-full object-cover" />
                      ) : (
                        <video src={m.src} className="w-full h-full object-cover" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Caption / small description under image */}
            
          </div>

          {/* Right: Details */}
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{project.title}</h2>

            <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="bg-white/6 text-sm px-3 py-1 rounded-full">{tech}</span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 items-center flex-wrap">
              {/* Visit Live Website button: only active if liveUrl exists */}
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transform transition"
                >
                  {/* SVG external link icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 3h7m0 0v7m0-7L10 14" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21H3V3" />
                  </svg>
                  Visit Live Website
                </a>
              ) : (
                <button
                  onClick={() => setShowNoUrlModal(true)}
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-gray-700 to-gray-600 text-white font-semibold shadow-inner hover:brightness-110 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01" />
                  </svg>
                  Visit Live Website
                </button>
              )}

              
              {/* Small CTA: View screenshots */}
              {primary && (
                <button
                  onClick={() => setSelectedMedia(primary)}
                  className="ml-2 px-3 py-2 text-sm rounded-md bg-white/6 hover:bg-white/8 transition cursor-pointer"
                >
                  Preview
                </button>
              )}
            </div>

            {/* Modal when liveUrl missing */}
            {showNoUrlModal && (
              <div className="fixed inset-0 z-40 flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-black/70" onClick={() => setShowNoUrlModal(false)}></div>
                <div className="relative bg-gray-900 rounded-lg p-6 max-w-sm w-full text-center shadow-2xl">
                  <h3 className="text-lg font-semibold mb-2">Live URL not provided</h3>
                  <p className="text-sm text-gray-300 mb-4">You haven't added a live website URL for this project yet. Add <code className="bg-white/6 px-2 py-0.5 rounded">liveUrl</code> to the project object to enable this button.</p>
                  <button onClick={() => setShowNoUrlModal(false)} className="mt-2 px-4 py-2 rounded-md bg-blue-500">Got it</button>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Helpful note for future single-screenshot usage */}
        
      </div>
    </section>
  );
};

export default ProjectDetail;
