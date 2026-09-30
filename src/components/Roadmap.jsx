import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Roadmap() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const milestones = [
    { title: 'Ideation', desc: 'Conceptualizing the UAV VayuTwin and telemetry pipelines.' },
    { title: 'Architecture', desc: 'Designing the dashboard and backend data schemas.' },
    { title: 'Integration', desc: 'Connecting simulated sensor data to the front-end.' },
    { title: 'Deployment', desc: 'Finalizing the prototype for SIH presentation.' },
  ];

  return (
    <section ref={ref} className="w-full py-32 px-6 border-t border-neutral-200 dark:border-neutral-800 relative overflow-hidden">
      
      {/* Background graphic */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-10" 
        style={{ 
          backgroundImage: 'repeating-linear-gradient(45deg, #888 25%, transparent 25%, transparent 75%, #888 75%, #888)', 
          backgroundSize: '20px 20px',
          y: useTransform(scrollYProgress, [0, 1], [0, 200])
        }} 
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-24 flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-neutral-900 dark:text-white mb-4 uppercase">Roadmap</h2>
          <p className="text-neutral-600 dark:text-neutral-400 font-mono uppercase text-xs md:text-sm tracking-[0.2em]">The path to deployment.</p>
        </div>
        
        <div className="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-4 md:ml-0">
          
          {/* Animated Progress Line */}
          <motion.div 
            className="absolute top-0 left-[-2px] w-[2px] bg-strawhat-red origin-top"
            style={{ scaleY: useTransform(scrollYProgress, [0.2, 0.8], [0, 1]) }}
          />

          {milestones.map((ms, index) => (
            <motion.div 
              key={ms.title} 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
              className="mb-16 pl-12 relative group"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-7px] top-4 w-3 h-3 rounded-full bg-neutral-200 dark:bg-neutral-800 group-hover:bg-strawhat-red transition-colors duration-300 z-10" />
              
              <div className="sharp-panel p-8 w-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-strawhat-red bg-white dark:bg-black overflow-hidden relative">
                {/* Accent glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-strawhat-red/0 via-strawhat-red/10 to-strawhat-red/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                
                <h3 className="relative z-10 text-2xl font-black text-neutral-900 dark:text-white mb-3 uppercase tracking-tight">{ms.title}</h3>
                <p className="relative z-10 text-sm text-neutral-600 dark:text-neutral-400 font-mono">{ms.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
