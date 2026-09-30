export default function Docs() {
  return (
    <section className="w-full min-h-screen pt-32 px-6 pb-24 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-4xl mx-auto sharp-panel p-8 md:p-16 border-l-2 border-l-strawhat-red">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 dark:text-white mb-12">
          Documentation
        </h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-xl font-medium text-neutral-900 dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-4">1. Initialization</h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-12">
            [Placeholder text: Describe the start of the SIH journey and the initial ideas.]
          </p>
          
          <h2 className="text-xl font-medium text-neutral-900 dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-4">2. Architecture</h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-12">
            [Placeholder text: Detail the architecture of VayuTwin for the UAVs.]
          </p>

          <h2 className="text-xl font-medium text-neutral-900 dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-4">3. Deployment</h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-12">
            [Placeholder text: Explain how the system is deployed and monitored.]
          </p>
        </div>
      </div>
    </section>
  );
}
