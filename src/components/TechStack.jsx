import { motion } from 'framer-motion';

const techItems = [
  { name: 'React', category: 'Interface', desc: 'Component-driven UI for the dashboard.' },
  { name: 'Tailwind CSS', category: 'Styling', desc: 'Utility-first styling system.' },
  { name: 'Three.js', category: '3D Engine', desc: 'Renders the UAV structural twin.' },
  { name: 'Python', category: 'Telemetry', desc: 'Backend data processing and modeling.' },
  { name: 'WebSockets', category: 'Network', desc: 'Low-latency data streaming.' },
  { name: 'PostgreSQL', category: 'Database', desc: 'Persistent historical flight logs.' },
];

export default function TechStack() {
  return (
    <section className="w-full py-32 px-6 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-24 flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-neutral-900 dark:text-white mb-4 uppercase">Architecture</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl font-mono uppercase text-xs md:text-sm tracking-[0.2em]">The core technologies powering the high-speed data ingestion and visualization engine.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techItems.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1, type: "spring" }}
              className="group relative bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 p-8 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_50px_rgba(255,255,255,0.05)] hover:scale-[1.02] hover:-translate-y-2 hover:bg-neutral-900 dark:hover:bg-white overflow-hidden cursor-default"
            >
              {/* Animated background slash */}
              <div className="absolute inset-0 bg-strawhat-red transform -translate-x-full skew-x-12 group-hover:-translate-x-1/2 transition-transform duration-700 ease-out opacity-[0.15]" />
              
              <div className="relative z-10 flex justify-between items-start mb-6">
                <h3 className="text-3xl font-black text-neutral-900 dark:text-white group-hover:text-white dark:group-hover:text-black uppercase tracking-tight transition-colors duration-500">{tech.name}</h3>
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 group-hover:bg-white/20 dark:group-hover:bg-black/10 group-hover:text-white dark:group-hover:text-black px-2 py-1 transition-colors duration-500">{tech.category}</span>
              </div>
              <p className="relative z-10 text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-300 dark:group-hover:text-neutral-700 font-mono transition-colors duration-500">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
