import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // <-- Use next/link
import { X, ChevronDown, Home, BookOpen, Users, School, Building2, GraduationCap, 
  Heart, Calendar, Image, Briefcase, Users as Alumni, FileText, Phone, LogIn } from 'lucide-react';
import sidebarData from '../data/sidebarData';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const icons: { [key: string]: { icon: React.ElementType; color: string; bgColor: string } } = {
  "Home": { icon: Home, color: "text-emerald-600", bgColor: "bg-emerald-50" },
  "About Us": { icon: FileText, color: "text-blue-600", bgColor: "bg-blue-50" },
  "Departments": { icon: Building2, color: "text-purple-600", bgColor: "bg-purple-50" },
  "Courses": { icon: School, color: "text-indigo-600", bgColor: "bg-indigo-50" },
  "Admissions": { icon: GraduationCap, color: "text-pink-600", bgColor: "bg-pink-50" },
  "Faculty": { icon: Users, color: "text-yellow-600", bgColor: "bg-yellow-50" },
  "Student Life": { icon: Heart, color: "text-red-600", bgColor: "bg-red-50" },
  "Events & News": { icon: Calendar, color: "text-orange-600", bgColor: "bg-orange-50" },
  "Gallery": { icon: Image, color: "text-cyan-600", bgColor: "bg-cyan-50" },
  "Placements": { icon: Briefcase, color: "text-teal-600", bgColor: "bg-teal-50" },
  "Alumni": { icon: Alumni, color: "text-violet-600", bgColor: "bg-violet-50" },
  "Resources": { icon: BookOpen, color: "text-lime-600", bgColor: "bg-lime-50" },
  "Contact Us": { icon: Phone, color: "text-amber-600", bgColor: "bg-amber-50" },
  "Login": { icon: LogIn, color: "text-blue-600", bgColor: "bg-blue-50" }
};

interface MenuItemProps {
  title: string;
  content: string | Record<string, string>;
  level?: number;
  activeMenu: string | null;
  setActiveMenu: (menu: string | null) => void;
  onClose: () => void;  // Add onClose prop
}

const MenuItem: React.FC<MenuItemProps> = ({ title, content, level = 0, activeMenu, setActiveMenu, onClose }) => {
  const isOpen = activeMenu === title;
  const iconData = icons[title] || { icon: FileText, color: "text-gray-600", bgColor: "bg-gray-50" };
  const Icon = iconData.icon;
  const isLink = typeof content === 'string';

  const handleClick = () => {
    if (!isLink) {
      setActiveMenu(isOpen ? null : title);
    } else {
      onClose?.();
    }
  };

  return (
    <div className={`${level > 0 ? 'ml-3' : ''} relative group`}>
      {isLink ? (
        <Link
          href={content}
          className={`
            flex items-center py-1.5 px-3 rounded-lg transition-all duration-200 ease-in-out
            ${level === 0 ? `${iconData.bgColor} hover:scale-102 hover:shadow-sm` : 'hover:bg-gray-50'}
            transform hover:-translate-y-0.5
          `}
          onClick={handleClick}
        >
          {level === 0 && (
            <div className={`p-1.5 rounded-lg ${iconData.bgColor} transition-transform duration-200 group-hover:scale-110`}>
              <Icon className={`h-5 w-5 ${iconData.color}`} />
            </div>
          )}
          <span className={`ml-2 font-medium ${level === 0 ? iconData.color : 'text-gray-700'}`}>
            {title}
          </span>
        </Link>
      ) : (
        <>
          <button
            onClick={handleClick}
            className={`
              flex items-center justify-between w-full py-1.5 px-3 rounded-lg
              transition-all duration-200 ease-in-out
              ${level === 0 ? `${iconData.bgColor} hover:scale-102` : 'hover:bg-gray-50'}
              ${isOpen ? 'shadow-sm' : ''}
              transform hover:-translate-y-0.5
            `}
          >
            <div className="flex items-center">
              {level === 0 && (
                <div className={`p-1.5 rounded-lg ${iconData.bgColor} transition-transform duration-200 group-hover:scale-110`}>
                  <Icon className={`h-5 w-5 ${iconData.color}`} />
                </div>
              )}
              <span className={`ml-2 font-medium ${level === 0 ? iconData.color : 'text-gray-700'}`}>
                {title}
              </span>
            </div>
            <ChevronDown 
              className={`
                h-4 w-4 ${level === 0 ? iconData.color : 'text-gray-500'}
                transform transition-transform duration-200
                ${isOpen ? 'rotate-180' : ''}
              `}
            />
          </button>
          <div
            className={`
              overflow-hidden transition-all duration-300 ease-in-out
              ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
            `}
          >
            <div className="pl-2 border-l border-gray-100 mt-1 space-y-0.5">
              {Object.entries(content).map(([subTitle, subContent]) => (
                <MenuItem
                  key={subTitle}
                  title={subTitle}
                  content={subContent}
                  level={level + 1}
                  activeMenu={activeMenu}
                  setActiveMenu={setActiveMenu}
                  onClose={onClose}  // Pass onClose prop
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [shouldAutoOpen, setShouldAutoOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const threshold = window.innerWidth - 30;
      if (e.clientX >= threshold && !isOpen) {
        setShouldAutoOpen(true);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isOpen]);

  useEffect(() => {
    if (shouldAutoOpen) {
      onClose();
      setShouldAutoOpen(false);
    }
  }, [shouldAutoOpen, onClose]);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`
          fixed inset-0 bg-black transition-opacity duration-300 ease-in-out z-40
          ${isOpen ? 'opacity-50 backdrop-blur-sm' : 'opacity-0 pointer-events-none'}
        `}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 right-0 h-full w-80 bg-white shadow-lg
          transform transition-all duration-300 ease-in-out z-50
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          flex flex-col
        `}
      >
        <div className="p-3 border-b pt-14">
          <button 
            className="absolute top-3 right-3 p-1.5 text-gray-500 hover:text-gray-700 
                       hover:bg-gray-100 rounded-full transition-all duration-200 
                       transform hover:scale-110"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-2 px-3">
          <div className="space-y-1">
            {Object.entries(sidebarData).map(([title, content]) => (
              <MenuItem
                key={title}
                title={title}
                content={content}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                onClose={onClose}  // Pass onClose prop
              />
            ))}
          </div>
        </div>

        <div className="p-3 border-t">
          <button
            className="w-full py-2 mb-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            onClick={() => alert('Login functionality will be implemented in the future.')}
          >
            Login
          </button>
          <button
            className="w-full py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 whitespace-nowrap"
            onClick={() => alert('Sign Up functionality will be implemented in the future.')}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;