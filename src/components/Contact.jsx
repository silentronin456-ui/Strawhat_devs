export default function Contact() {
  return (
    <section className="w-full min-h-[80vh] flex flex-col items-center justify-center px-6 py-24 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-2xl w-full">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 dark:text-white mb-4">Contact</h2>
          <p className="text-neutral-600 dark:text-neutral-400">Get in touch with the Strawhat Devs.</p>
        </div>
        
        <div className="sharp-panel p-8 md:p-12 border-t-2 border-t-strawhat-yellow">
          <form className="flex flex-col space-y-6">
            <div className="flex flex-col">
              <label className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-2">Name</label>
              <input 
                type="text" 
                className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white p-3 text-sm focus:outline-none focus:border-strawhat-yellow transition-colors"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-2">Email</label>
              <input 
                type="email" 
                className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white p-3 text-sm focus:outline-none focus:border-strawhat-yellow transition-colors"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-2">Message</label>
              <textarea 
                rows={5}
                className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white p-3 text-sm focus:outline-none focus:border-strawhat-yellow transition-colors resize-none"
              />
            </div>
            
            <button 
              type="button"
              className="mt-4 py-4 bg-neutral-900 dark:bg-white text-white dark:text-black text-sm font-semibold tracking-wide hover:bg-strawhat-yellow dark:hover:bg-strawhat-yellow hover:text-white transition-all duration-300"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
