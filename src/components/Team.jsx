import { motion } from 'framer-motion';

export default function Team() {
  const team = [
    { name: 'Leader Name', role: 'Team Lead', link: '#' },
    { name: 'Member 2', role: 'Frontend Dev', link: '#' },
    { name: 'Member 3', role: 'Backend Dev', link: '#' },
    { name: 'Member 4', role: 'AI Specialist', link: '#' },
    { name: 'Member 5', role: '3D Designer', link: '#' },
    { name: 'Member 6', role: 'Data Engineer', link: '#' },
  ];

  const MemberCard = ({ member, delayIndex }) => (
    <motion.a 
      href={member.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delayIndex * 0.1, type: "spring" }}
      className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 p-8 group transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 hover:bg-neutral-900 hover:dark:bg-white flex flex-col items-center text-center overflow-hidden relative cursor-pointer w-full"
    >
      {/* Corner Targets */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-transparent group-hover:border-strawhat-yellow transition-all duration-300 m-2" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-transparent group-hover:border-strawhat-yellow transition-all duration-300 m-2" />
      
      <div className="w-24 h-24 bg-neutral-200 dark:bg-neutral-800 rounded-none mb-6 relative overflow-hidden transform group-hover:rotate-12 transition-transform duration-500">
        <div className="absolute inset-0 bg-neutral-300 dark:bg-neutral-700 opacity-50 group-hover:opacity-0 transition-opacity duration-300" />
        <div className="absolute inset-0 border border-neutral-400/20 group-hover:border-strawhat-yellow transition-colors duration-300" />
      </div>
      <div>
        <h3 className="text-2xl font-black text-neutral-900 dark:text-white group-hover:text-white group-hover:dark:text-black uppercase tracking-tight transition-colors mb-2">{member.name}</h3>
        <p className="text-xs font-mono font-bold text-neutral-500 dark:text-neutral-400 group-hover:text-strawhat-yellow uppercase tracking-[0.2em] transition-colors">{member.role}</p>
      </div>
    </motion.a>
  );

  return (
    <section className="w-full py-32 px-6 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-24 flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-neutral-900 dark:text-white mb-4 uppercase">Operatives</h2>
          <p className="text-neutral-600 dark:text-neutral-400 font-mono uppercase text-xs md:text-sm tracking-[0.2em]">Strawhat Devs Task Force.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {team.map((member, i) => (
             <MemberCard key={i} member={member} delayIndex={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
