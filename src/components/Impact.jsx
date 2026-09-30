import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Impact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={ref} className="w-full min-h-[80vh] flex items-center justify-center px-6 py-24 border-t border-neutral-200 dark:border-neutral-800 relative overflow-hidden bg-white dark:bg-black">
      {/* Background graphic */}
      <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #888 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative z-10">
        
        <motion.div style={{ y: y1 }} className="group">
          <h2 className="text-sm font-bold text-strawhat-red tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
            <div className="w-2 h-2 bg-strawhat-red" /> The Challenge
          </h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral-900 dark:text-white mb-6 leading-tight group-hover:pl-4 transition-all duration-500">
            Standard telemetry is not enough.
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-mono text-sm uppercase tracking-wider">
            DRDO UAV systems require real-time monitoring in active combat zones. Relying on basic dashboard telemetry fails to predict structural or hardware failures before they occur. We need a dynamic, low-latency VayuTwin to simulate physical stress in real-time.
          </p>
        </motion.div>
        
        <motion.div style={{ y: y2 }} className="group mt-12 md:mt-32">
          <h2 className="text-sm font-bold text-strawhat-yellow tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
            <div className="w-2 h-2 bg-strawhat-yellow" /> The Solution
          </h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral-900 dark:text-white mb-6 leading-tight group-hover:pl-4 transition-all duration-500">
            Predictive simulation.
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-mono text-sm uppercase tracking-wider">
            By mapping live data to a high-fidelity 3D model, VayuTwin allows commanders to visualize stress points, predict maintenance needs, and reduce catastrophic hardware failure, significantly increasing mission success rates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
