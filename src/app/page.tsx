'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Programs from '@/components/Programs';
import News from '@/components/News';
import Footer from '@/components/Footer';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <main>
        <Hero />
        <Features />
        <Programs />
        <News />
      </main>
      <Footer />
    </div>
  );
}