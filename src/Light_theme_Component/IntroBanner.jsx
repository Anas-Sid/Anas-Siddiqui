import React from 'react';

const IntroBanner = () => {
  return (
    <section className="md:relative bg-[#0a0a0a] text-white py-16 px-6 md:px-16 md:overflow-hidden md:-mt-[150px]">
      {/* Angled Background Effect */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-full bg-[#0a0a0a] md:bg-[#1a1a1a] transform -skew-y-3 z-0"></div>

      {/* Content on top of skew */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="bg-white text-black inline-block px-4 py-1 mb-4 rounded-md font-semibold text-sm tracking-wide">
          IT Berries
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Full Stack Developer Based in Pakistan
        </h2>
        <p className="text-gray-300 md:w-[980px] md:-mr-[360px]">
          I thrive on building robust, scalable web applications from front to back. With a deep understanding of both client-side and server-side technologies, I turn ideas into complete, high-performance digital solutions.
        </p>
      </div>
    </section>
  );
};

export default IntroBanner;
