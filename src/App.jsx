import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import MainScrollPage from './pages/MainScrollPage';
import ContactPage from './pages/ContactPage';
import DocsPage from './pages/DocsPage';
import TeamPage from './pages/TeamPage';
import ImpactPage from './pages/ImpactPage';
import TechPage from './pages/TechPage';
import RoadmapPage from './pages/RoadmapPage';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Initialize Lenis for extreme smooth scrolling
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <div className="min-h-screen w-full relative bg-white dark:bg-black transition-colors duration-300">
        <CustomCursor />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        <Routes>
          <Route path="/" element={<MainScrollPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/tech" element={<TechPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/docs" element={<DocsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
