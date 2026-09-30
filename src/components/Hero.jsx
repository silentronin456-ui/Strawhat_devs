import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const navigate = useNavigate();
  const ref = useRef(null);
  
  // Parallax scrolling effects
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative w-full h-screen flex flex-col items-center justify-center pt-16 overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      
      {/* Intense Perspective Grid */}
      <div className="absolute inset-0 pointer-events-none flex items-end justify-center" style={{ perspective: '1000px' }}>
        
        {/* Light Mode Grid (Black Lines) */}
        <div 
          className="absolute w-[200vw] h-[100vh] bottom-0 origin-bottom opacity-30 dark:opacity-0 transition-opacity duration-500"
          style={{
            backgroundImage: `linear-gradient(to right, #000 2px, transparent 2px), linear-gradient(to bottom, #000 2px, transparent 2px)`,
            backgroundSize: '60px 60px',
            transform: 'rotateX(75deg) translateY(0)',
          }}
        />
        
        {/* Dark Mode Grid (White Lines) */}
        <div 
          className="absolute w-[200vw] h-[100vh] bottom-0 origin-bottom opacity-0 dark:opacity-[0.4] transition-opacity duration-500"
          style={{
            backgroundImage: `linear-gradient(to right, #fff 2px, transparent 2px), linear-gradient(to bottom, #fff 2px, transparent 2px)`,
            backgroundSize: '60px 60px',
            transform: 'rotateX(75deg) translateY(0)',
          }}
        />
        
        {/* Animated Scanning Line */}
        <motion.div 
          className="absolute w-[200vw] h-[2px] bg-strawhat-red shadow-[0_0_20px_#ff2a2a] bottom-0 origin-bottom opacity-80"
          animate={{ transform: ['rotateX(75deg) translateY(-800px)', 'rotateX(75deg) translateY(800px)'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Fade Out Gradient */}
        <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-white via-transparent to-transparent dark:from-black dark:via-transparent dark:to-transparent" />
      </div>

      <motion.div style={{ y: yText, opacity }} className="z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center w-full">
        
        {/* Top HUD Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex items-center gap-4"
        >
          <div className="h-px w-12 bg-neutral-300 dark:bg-neutral-700" />
          <div className="flex items-center gap-2 border border-neutral-200 dark:border-neutral-800 px-4 py-1.5 bg-white/50 dark:bg-black/50 backdrop-blur-md">
            <div className="w-1.5 h-1.5 bg-strawhat-red rounded-full animate-pulse shadow-[0_0_10px_#ff2a2a]" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-900 dark:text-white">Live Telemetry</span>
          </div>
          <div className="h-px w-12 bg-neutral-300 dark:bg-neutral-700" />
        </motion.div>

        {/* Masked Text Reveal */}
        <div className="overflow-hidden mb-6 py-2">
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter text-neutral-900 dark:text-white leading-none uppercase"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            VAYUTWIN
          </motion.h1>
        </div>
        
        <motion.p 
          className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl font-mono tracking-tight"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Predictive stress modeling for next-generation UAVs.
        </motion.p>
        
        {/* Aggressive Button Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <button
            onClick={() => navigate('/prototype')}
            className="group relative bg-neutral-900 dark:bg-white text-white dark:text-black px-10 py-5 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-white dark:group-hover:text-black">
              Initialize System
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-strawhat-red transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-500 ease-out" />
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-900 dark:text-white">Scroll</span>
        <ChevronDown size={16} className="text-neutral-900 dark:text-white" />
      </motion.div>
    </section>
  );
}
