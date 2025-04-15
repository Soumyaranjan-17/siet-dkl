import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-blue-600 pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2866&q=80"
          alt="Campus"
        />
        <div className="absolute inset-0 bg-blue-600 mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Welcome to SIET
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-100">
          Empowering minds, inspiring innovation, and building future leaders through excellence in education.
        </p>
        <div className="mt-10 flex space-x-4">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
          >
            Apply Now
          </a>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"
          >
            Explore Programs
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;