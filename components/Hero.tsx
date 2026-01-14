import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
      {/* Left Side: Image */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto bg-gray-200 relative overflow-hidden group">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms] group-hover:scale-105" 
          role="img"
          aria-label="Skyscraper construction"
          style={{
            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDKuD7E86VfK9p2JtuVjJP_dOrzytEuXYLv94pOaDTq8dQOQgnYJEWfDr6xOTqOocVvLOg48JXsGVG5kNccdtDIljiALuJrxcZXJhC7-zODvQCMD62bdrDh9XzT6Vep5phnFmw7J7to8q7fCr18en3nUY8XmwYp40eup5ckkUW-C2KuEHct0JmAkv4zAO7MJvTJXX6wx9lPPTJBO-c7olNbaJZixHAaHSrUfhcAV5jjASLy-DC8CT7zkAnETDgIM_9xDjDsWlrXEiH5")'
          }}
        />
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
      </div>

      {/* Right Side: Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-16 lg:p-24 bg-white">
        <div className="max-w-xl mx-auto lg:mx-0">
          <div className="flex items-center gap-2 mb-6">
            <span className="h-1 w-12 bg-accent"></span>
            <span className="text-accent font-bold uppercase tracking-widest text-sm">Est. 1985</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black text-[#121416] leading-[1.1] tracking-tight mb-8">
            Engineering Stability.<br />
            <span className="text-gray-400">Constructing the Future.</span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
            Premier construction management for the world's most ambitious projects. We build the skyline with unwavering precision and massive scale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center h-14 px-8 bg-accent hover:bg-accent/90 text-white text-base font-bold rounded shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all uppercase tracking-wide">
              Request a Quote
            </button>
            <button className="flex items-center justify-center h-14 px-8 border-2 border-[#121416] hover:bg-gray-50 text-[#121416] text-base font-bold rounded transition-all uppercase tracking-wide">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;