import React from 'react';

const programs = [
  {
    name: 'Computer Science Engineering',
    description: 'Learn software development, artificial intelligence, and more.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
  {
    name: 'Mechanical Engineering',
    description: 'Study machine design, thermodynamics, and manufacturing processes.',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
  {
    name: 'Electrical Engineering',
    description: 'Focus on power systems, electronics, and control systems.',
    image: 'https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
];

const Programs = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Programs</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Academic Programs
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {programs.map((program) => (
              <div
                key={program.name}
                className="relative bg-white rounded-2xl shadow-xl group overflow-hidden flex flex-col h-full transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="h-48 relative">
                  <img
                    className="w-full h-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
                    src={program.image}
                    alt={program.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-t-2xl" />
                </div>
                <div className="flex-1 flex flex-col px-6 py-5">
                  <h3 className="text-xl font-extrabold text-blue-800 mb-1 leading-tight group-hover:text-blue-600 transition-colors">
                    {program.name}
                  </h3>
                  <p className="text-base text-gray-600 mb-4 flex-1">
                    {program.description}
                  </p>
                  <a
                    href="#"
                    className="mt-auto inline-flex items-center font-semibold text-blue-600 hover:text-blue-800 transition-colors group"
                    tabIndex={0}
                  >
                    Learn more
                    <span className="ml-2 text-lg group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;