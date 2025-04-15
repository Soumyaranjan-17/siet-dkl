import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Features from './components/Features';
import Programs from './components/Programs';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={
            <main>
              <Hero />
              <Features />
              <Programs />
              <News />
            </main>
          } />

          {/* About Routes */}
          <Route path="/about/*" element={<Features />} />

          {/* Department Routes */}
          <Route path="/departments/*" element={<Programs />} />

          {/* Course Routes */}
          <Route path="/courses/*" element={<Programs />} />

          {/* Contact Routes */}
          <Route path="/contact/*" element={<News />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;