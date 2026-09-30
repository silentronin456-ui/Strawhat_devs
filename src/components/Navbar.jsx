import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Impact', path: '/impact' },
    { name: 'Tech', path: '/tech' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'Team', path: '/team' },
    { name: 'Docs', path: '/docs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100]">
      {/* Top thin line */}
      <div className="w-full h-[1px] bg-neutral-200 dark:bg-neutral-800" />
      
      <div className="bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          
          <RouterLink to="/" className="text-xl md:text-2xl font-black tracking-tighter text-neutral-900 dark:text-white flex items-center gap-1 group overflow-hidden focus:outline-none">
            <motion.span 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              STRAWHAT DEVS
            </motion.span>
            <span className="text-strawhat-red font-black group-hover:scale-150 transition-transform duration-300 origin-bottom">.</span>
          </RouterLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <RouterLink
                key={link.name}
                to={link.path}
                className={`relative py-2 text-xs font-bold uppercase tracking-[0.15em] transition-colors focus:outline-none ${
                  location.pathname === link.path
                    ? 'text-strawhat-red dark:text-strawhat-red'
                    : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white group'
                }`}
              >
                {link.name}
                {/* Hover Underline Animation */}
                <span className={`absolute left-0 bottom-0 w-full h-[2px] transition-transform duration-300 origin-left ${
                  location.pathname === link.path 
                    ? 'scale-x-100 bg-strawhat-red' 
                    : 'scale-x-0 group-hover:scale-x-100 bg-neutral-900 dark:bg-white'
                }`} />
              </RouterLink>
            ))}
            
            <div className="w-[1px] h-4 bg-neutral-300 dark:bg-neutral-700 mx-2" />
            
            <button 
              onClick={toggleTheme}
              className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors relative overflow-hidden group p-1 focus:outline-none"
            >
              <div className="relative z-10 transition-transform duration-500 group-hover:rotate-180">
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </div>
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors focus:outline-none"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="text-neutral-900 dark:text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-black border-b border-neutral-200 dark:border-neutral-800 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {links.map((link) => (
                <RouterLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium tracking-wide text-sm focus:outline-none ${
                    location.pathname === link.path
                      ? 'text-strawhat-red dark:text-strawhat-red'
                      : 'text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  {link.name}
                </RouterLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
