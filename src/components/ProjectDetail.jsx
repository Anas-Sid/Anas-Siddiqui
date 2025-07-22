;import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';// Add more images if available
import Doctor_Appointment from '../assets/Doctor_Appointment.jpg';
import Doc_ava from '../assets/Doctor_availability.jpg';
import doc_dash from '../assets/Doctors_Dashboard.jpg';
import patient1 from '../assets/Patient Portal 1.jpg';
import patient2 from '../assets/Patient Portal 2.jpg';
import pat_book from '../assets/patient_bookappointment.jpg';
import crypto1 from '../assets/Crypto tracker .jpg';
import crypto2 from '../assets/Crypto_Real time coin data.jpg';
import searchbar from '../assets/Working Search bar.jpg';
import medmatevedio from '../assets/Medmate.mp4';
import bakeryvedio from '../assets/baker.mp4';
import project5 from '../assets/project5.png';
import project5_1 from '../assets/project5_1.png';
import project5_2 from '../assets/project5_2.png';




const projects = [
  {
    title: 'Doctor Appointment Booking System',
    description: 'This is a full-stack web application where patients can easily book appointments with doctors. The platform allows:Patients to view available doctors, check their availability, and book appointments.Doctors to sign in securely, manage their profiles, and add or update their available time slots.I built this project using the MERN Stack (MongoDB, Express.js, React.js, Node.js). The backend handles authentication, appointment scheduling, and data storage, while the frontend offers a clean and user-friendly interface for both doctors and patients.',
    screenshots: [
      { type: 'image', src: doc_dash },
      { type: 'image', src: Doc_ava },
      { type: 'image', src: Doctor_Appointment },
      { type: 'image', src: patient1 },
      { type: 'image', src: patient2 },
      { type: 'image', src: pat_book }
    ],
    technologies: ['React.js', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Tailwind CSS', 'JWT (Authentication)', 'React Router', 'Axios', 'REST API', 'Postman', 'Git & GitHub', 'Vercel / Render (Deployment)']


  },
  {
    title: 'Crypto Price Tracker',
    description: 'This is a modern web application that allows users to track real-time prices of various cryptocurrencies. The app fetches live data from a public Crypto API and displays updated rates for popular coins like Bitcoin, Ethereum, Dogecoin, etc. Users can view key information such as current price, 24-hour change, and market cap in a clean and responsive UI.To ensure security and personalization, the app uses Firebase Authentication for user sign-up and login. Only authenticated users can access the main dashboard. The interface is built with React.js and styled using Tailwind CSS for a responsive and visually appealing experience. Data fetching is handled with Axios, and the app updates prices dynamically using real-time API polling.This project showcases integration with third-party APIs, secure authentication, and responsive frontend development, making it a solid example of a real-world React + Firebase application.',
    screenshots: [
      { type: 'image', src: crypto1 },
      { type: 'image', src: crypto2 },
      { type: 'image', src: searchbar }
    ],
    technologies: ['React.js', 'Firebase Authentication', 'Tailwind CSS', 'Axios', 'Crypto API', 'React Router', 'JavaScript', 'HTML5', 'CSS3'],
  },
   
    {
      title: 'HealthVault Portal',
      description:
        'HealthVault Portal is a web-based platform designed for hospitals to help patients securely store and manage their personal and medical information. The primary focus of this project is to deliver a visually engaging and user-friendly experience, built with modern UI design principles and smooth animations to enhance usability.The interface is built using React.js and styled with Tailwind CSS, combined with animation libraries to make the user experience more dynamic and interactive. Firebase is used for secure authentication, allowing patients to sign up and log in to manage their health records.This project emphasizes clean design, responsive layouts, and interactive elements, making it ideal for hospitals that want to offer a digital space for patients without overwhelming functionality.',
        screenshots: [
          { type: 'video', src: medmatevedio }
        ],
        technologies: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Firebase Authentication', 'Firebase Firestore', 'React Router DOM', 'Axios', 'Git', 'GitHub']

    },
    {
      title: 'Online Bakery Store',
      description:
        'This is a modern and responsive website built to showcase a bakerys full range of products online. The main goal of the project was to create a visually appealing and user-friendly interface where visitors can easily browse various bakery items such as cakes, pastries, cookies, and bread.The website features a clean layout, organized into categories with each product displayed alongside its image, description, and price. It includes pages like Home, Menu, About, and Contact, offering a complete frontend experience. Smooth animations, hover effects, and a responsive design ensure the site looks great on all devices.Built using React.js and Tailwind CSS, this project highlights strong UI design skills and frontend development best practices, making it ideal for small businesses looking to establish an online presence.',
        screenshots: [
          { type: 'video', src: bakeryvedio }
        ],
       technologies: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React Router DOM', 'Axios', 'RESTful API', 'Responsive Design', 'Git', 'GitHub']
    },
    {
      title: 'AI Blog Generator',
      description:
        'The Invoice Generator Web Application is a professional and responsive tool built using React.js and Bootstrap, designed to help users create clean and organized invoices quickly and efficiently. This application allows users to input sender and client information, invoice numbers, due dates, and additional notes, while also dynamically adding or editing multiple invoice items. Each item includes fields for description, quantity, price, and amount, with real-time calculations of subtotal and total amounts. A key feature of this app is the use of inline editable fields, which provide a smooth and interactive user experience without the need for reloading the page. The final invoice layout is print-ready and optimized for PDF export, making it easy for freelancers, small businesses, and professionals to generate and share invoices instantly. The project demonstrates strong front-end development skills, state management in React, and a practical use of component-based architecture.',
       screenshots: [
      { type: 'image', src: project5 },
      { type: 'image', src: project5_1 },
      { type: 'image', src: project5_2 }
    ],
       technologies: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React Hooks', 'Component-Based Architecture', 'Inline Editing', 'State Management', 'Responsive Design', 'Print & PDF Optimization', 'Git', 'GitHub']
,

    },
    
];

const ProjectDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const project = projects[id];

  const [selectedMedia, setSelectedMedia] = useState(null);
 // <-- for lightbox

  if (!project) return <div className="text-white">Project not found</div>;

  return (
    <section className="min-h-screen py-20 px-6 md:px-16 bg-black text-white relative">
      {/* Lightbox Overlay */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={() => setSelectedMedia(null)}
        >
          {selectedMedia.type === 'image' ? (
            <img
              src={selectedMedia.src}
              alt="Zoomed Screenshot"
              className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-xl"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <video
              src={selectedMedia.src}
              controls
              autoPlay
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}

      <button
        onClick={() => navigate(-1)}
        className="mb-12 px-4 py-2 bg-white hover:bg-gray-300 text-black rounded-md transition -mt-[200px]"
      >
        ← Back to Projects
      </button>

      <h2 className="text-3xl font-bold mb-6">{project.title}</h2>
      <p className="text-gray-300 mb-4">{project.description}</p>

      {/* Technologies */}
      <div className="mt-7 mb-10">
        <h4 className="text-3xl font-bold mb-6">Technologies Used</h4>
        <ul className="flex flex-wrap gap-3">
          {project.technologies.map((tech, index) => (
            <li
              key={index}
              className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* Screenshots */}
      <h4 className="text-3xl font-bold mb-6">Project UI</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {project.screenshots.map((media, index) => (
          media.type === 'image' ? (
            <img
              key={index}
              src={media.src}
              alt={`Screenshot ${index + 1}`}
              className="rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105 h-[170px] w-[500px] object-cover"
              onClick={() => setSelectedMedia(media)}
            />
          ) : (
            <video
              key={index}
              src={media.src}
              muted
              className="rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105 h-[170px] w-[500px] object-cover"
              onClick={() => setSelectedMedia(media)}
            />
          )
        ))}

      </div>
    </section>
  );
};

export default ProjectDetail;
