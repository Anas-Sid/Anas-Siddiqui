import React from 'react';
import { FaPaintBrush, FaCode, FaTools } from 'react-icons/fa';
const services = [
  {
    icon: <FaPaintBrush size={28} />,
    title: 'Design',
    desc: 'Modern, responsive, and user-friendly UI/UX designs tailored to client needs—ensuring consistency across all screen sizes',
  },
  {
    icon: <FaCode size={28} />,
    title: 'Development',
    desc: 'Building robust front-end & scalable back-end solutions using modern frameworks and best practices.',
  },
  {
    icon: <FaTools size={28} />,
    title: 'Maintenance',
    desc: 'Ensuring smooth operation with real-time debugging, optimization, and continuous feature enhancement.',
  },
];

const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-16 bg-gray-300 -mt-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-black">What I Do</h2>
        <p className="text-gray-600">Here are a few areas I specialize in.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden bg-gray-100 rounded-xl p-6 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl group"
          >
            {/* Animated black overlay */}
            <div className="absolute inset-0 bg-[#1a1a1a] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>

            {/* Content over the overlay */}
            <div className="relative z-10">
              <div className="text-black mb-4 group-hover:text-white transition duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black group-hover:text-white transition duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm group-hover:text-gray-300 transition duration-300">
                {service.desc}
              </p>
            </div>
          </div>

        ))}
      </div>
    </section>
  );
};

export default AboutMe;
