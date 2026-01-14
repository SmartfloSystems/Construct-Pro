import React from 'react';
import { CheckCircle, ShieldCheck } from 'lucide-react';

const Safety: React.FC = () => {
  return (
    <section className="bg-primary text-white py-20 lg:py-28 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
          backgroundSize: '32px 32px' 
        }}
      />
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-accent font-bold text-xs uppercase tracking-widest border border-white/10">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Safety First
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black leading-tight">
              Uncompromising Standards.<br />
              Certified Excellence.
            </h2>
            
            <p className="text-lg text-gray-300 max-w-xl">
              We maintain the highest safety protocols in the industry. Our commitment to zero-harm workplaces ensures every project is built on a foundation of trust and integrity.
            </p>
            
            <ul className="space-y-4 pt-2">
              {[
                "ISO 45001 Certified for Occupational Health",
                "0 Lost Time Injuries in 2023",
                "Sustainable Building Practices (LEED Gold)"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <CheckCircle className="text-accent flex-shrink-0" size={24} />
                  <span className="text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex-shrink-0 relative">
            {/* Badge/Seal Graphic Visualization */}
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 flex items-center justify-center rounded-full border-4 border-white/20 bg-white/5 backdrop-blur-sm">
              <div className="absolute inset-0 border-2 border-accent/50 rounded-full scale-110 animate-[spin_12s_linear_infinite] opacity-30 border-dashed"></div>
              <div className="absolute inset-0 border-2 border-white/10 rounded-full scale-125"></div>
              
              <div className="text-center flex flex-col items-center">
                <ShieldCheck className="text-accent mb-2" size={80} strokeWidth={1.5} />
                <div className="text-2xl font-black uppercase tracking-wider leading-none">Safety<br />Certified</div>
                <div className="text-sm font-medium text-gray-400 mt-2 uppercase tracking-wide">Global Standards</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Safety;