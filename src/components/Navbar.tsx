import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, Search, User, ChevronDown, Home, Info, Building2, BookOpen, Phone } from 'lucide-react';
import sidebarData from '../data/sidebarData';

interface NavbarProps {
  onMenuClick: () => void;
}

const icons: { [key: string]: React.ElementType } = {
  "Home": Home,
  "About Us": Info,
  "Departments": Building2,
  "Courses": BookOpen,
  "Contact Us": Phone
};

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownClick = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleClickOutside = () => {
    setActiveDropdown(null);
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Get first 5 items from sidebarData
  const navItems = Object.entries(sidebarData).slice(0, 5);

  return (
    <nav className="sticky top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="https://synergyinstitute.net/images/logo2.png" 
              alt="SIET Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-3 xl:space-x-4">
            {navItems.map(([title, content]) => {
              const Icon = icons[title];
              const isDropdown = typeof content === 'object';

              if (isDropdown) {
                return (
                  <div 
                    key={title}
                    className="relative group"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDropdownClick(title);
                    }}
                  >
                    <button className="flex items-center px-2 py-1.5 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors space-x-1 focus:outline-none">
                      {Icon && <Icon className="h-5 w-5" />}
                      <span>{title}</span>
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div 
                      className={`absolute top-full left-0 w-56 bg-white shadow-lg rounded-md py-1.5 mt-1
                        ${activeDropdown === title ? 'block' : 'hidden group-hover:block'}`}
                    >
                      {Object.entries(content as Record<string, string>).map(([subTitle, subPath]) => (
                        <Link
                          key={subTitle}
                          href={subPath}
                          className="block px-4 py-1.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-md"
                        >
                          {subTitle}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={title}
                  href={content as string}
                  className="flex items-center px-2 py-1.5 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors space-x-1"
                >
                  {Icon && <Icon className="h-5 w-5" />}
                  <span>{title}</span>
                </Link>
              );
            })}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* <button className="hidden md:block text-gray-700 hover:text-blue-600">
              <Search className="h-5 w-5" />
            </button> */}
            <div className="flex space-x-2">
              <button className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium">
                Login
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium whitespace-nowrap">
                Sign Up
              </button>
            </div>
            <button 
              className="text-gray-700 hover:text-blue-600"
              onClick={onMenuClick}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;