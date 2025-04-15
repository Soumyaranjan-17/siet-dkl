import React from 'react';
import { BookOpen, Users, Trophy, Globe } from 'lucide-react';

const features = [
  {
    name: 'Academic Excellence',
    description: 'Comprehensive programs designed to meet industry demands',
    icon: BookOpen,
  },
  {
    name: 'Expert Faculty',
    description: 'Learn from industry professionals and experienced educators',
    icon: Users,
  },
  {
    name: 'Student Success',
    description: 'Outstanding placement record with top companies',
    icon: Trophy,
  },
  {
    name: 'Global Perspective',
    description: 'International collaborations and exchange programs',
    icon: Globe,
  },
];

const Features = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Why Choose SIET</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Excellence in Education
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute h-12 w-12 text-blue-600">
                  <feature.icon className="h-8 w-8" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;