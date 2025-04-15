import React from 'react';
import { Calendar, Megaphone, Star, Trophy, Medal, Music } from 'lucide-react';
import { newsData, NewsType } from '../data/newsData';

const iconMap: Record<NewsType, React.ElementType> = {
  event: Star,
  announcement: Megaphone,
  achievement: Trophy,
  sports: Medal,
  cultural: Music,
  notice: Calendar,
};

const cardBgMap: Record<NewsType, string> = {
  event: 'bg-gradient-to-br from-blue-400 to-blue-700',
  announcement: 'bg-gradient-to-br from-yellow-400 to-yellow-700',
  achievement: 'bg-gradient-to-br from-green-400 to-green-700',
  sports: 'bg-gradient-to-br from-indigo-400 to-indigo-700',
  cultural: 'bg-gradient-to-br from-pink-400 to-pink-700',
  notice: 'bg-gradient-to-br from-red-400 to-red-700',
};

const News = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="pointer-events-none select-none absolute inset-0 z-0 opacity-20">
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <pattern id="dots" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#d1d5db" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-lg text-blue-700 font-semibold tracking-widest uppercase mb-1">Latest Updates</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-2">News & Events</p>
          <p className="text-gray-500 text-base font-medium">Stay up to date with the latest happenings at our college</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((item) => {
            const Icon = iconMap[item.type];
            const cardBg = cardBgMap[item.type];
            return (
              <div
                key={item.title}
                tabIndex={0}
                className={`relative flex flex-col justify-between h-full rounded-2xl ${cardBg} shadow-xl border border-white/10 backdrop-blur-lg bg-opacity-95 focus-visible:ring-2 focus-visible:ring-blue-400 focus:outline-none transition-all duration-200 overflow-hidden group`}
              >
                {/* Decorative blurred gradient blob */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl z-0" />
                {/* Decorative bottom accent */}
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-white/30 via-transparent to-white/10" />
                <div className="relative px-7 py-8 flex flex-col h-full z-10">
                  <div className="flex items-center mb-4">
                    <span className="inline-flex items-center justify-center p-3 bg-white bg-opacity-95 rounded-xl shadow-lg border border-white/30 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                      <Icon className="h-7 w-7 text-blue-700" strokeWidth={2.2} />
                    </span>
                    <span className="ml-4 text-xs font-bold tracking-wide px-3 py-1 rounded-lg shadow bg-white/80 text-blue-700 border border-blue-200/60">
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-white mb-2 leading-snug tracking-tight drop-shadow-lg">
                    {item.title}
                  </h3>
                  <p className="text-base text-white/90 mb-4 flex-1 leading-relaxed font-medium">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs font-medium text-blue-100 bg-blue-900/40 px-2 py-1 rounded-lg">
                      {item.date}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none" style={{boxShadow:'0 8px 32px 0 rgba(31,38,135,0.10), 0 1.5px 8px 0 rgba(0,0,0,0.08)'}}></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default News;