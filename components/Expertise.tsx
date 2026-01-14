import React from 'react';
import { Building, Building2, Factory, ArrowRight, ArrowUpRight } from 'lucide-react';

interface ExpertiseCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  imageUrl: string;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ title, subtitle, icon, imageUrl }) => {
  return (
    <div className="group relative flex flex-col h-[550px] overflow-hidden rounded-lg bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
      {/* Top Border Accent */}
      <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-gray-300 to-gray-500 z-20"></div>
      
      {/* Background Image Area */}
      <div 
        className="h-3/5 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
        style={{ backgroundImage: `url("${imageUrl}")` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between flex-1 p-8 bg-metallic-gradient">
        <div>
          <div className="p-3 bg-primary/10 w-fit rounded-lg mb-6 text-primary">
            {icon}
          </div>
          <h3 className="text-3xl font-black text-[#121416] mb-2 uppercase tracking-tight">{title}</h3>
          <p className="text-gray-600 font-medium">{subtitle}</p>
        </div>
        
        <div className="pt-6 border-t border-gray-300/50">
          <a 
            href="#" 
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-2 text-sm font-bold uppercase text-primary group-hover:text-accent transition-colors"
          >
            Explore Sector <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Expertise: React.FC = () => {
  const cards = [
    {
      title: "Residential",
      subtitle: "Luxury Living & High-Rise",
      icon: <Building size={32} />,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJwY_CnRyjTl7bxaMa9hu_3ZdPQaqHjUxnGQENHTtVOqEakSRCXZn1imG-NbQQkTow8Q7OvjNEorZPemJwMBQ6Lo7s2l1qJ9T_oPo2bbhS1KwjqOxoDoQXy1t4HbXPav8RZSTvDHF9f816jjQ4k31pkl69p9IwxeCouYOUvdvGU-hNTxQjDyS-1rVmxJhm4mC1y_PLAvwH4L8uNyhE9lp6SUGLYDEKyeJ1lIi_5TV09TIqtWGt1jPUK7ndpXiChbXqe8rX2UqNmJ6D"
    },
    {
      title: "Commercial",
      subtitle: "Corporate Hubs & Retail",
      icon: <Building2 size={32} />,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY2rc5iTpUEUoyP3BCUmiPmhGnOmOBPpqNxuLAYjGrVGPSw3fahk4PJ6XaGpdL2Qc-V0BOfVDd3Qco9BUJ1XnPBwFFXfUno9wzMymTjhTXl2OjLF8oH6UyzVFf-FG1XjoZ5V4QY-s3G_XmUlbNN8kT2GSbjJ-XTm0bkVkHWjgG9glp4-jV5CYjWk__7EWaglaQauTnMzspwTP8F8aELLwDLRd7jZGW7NYnJHrIpZisqSxeGeWXmgF1DmVKLFDGtjBqIyogbzA_hZU0"
    },
    {
      title: "Industrial",
      subtitle: "Logistics & Power Infrastructure",
      icon: <Factory size={32} />,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-4UbPQ32308F8-Wol-glNCPo2VWhoYPneXpIUAqIOoF-aeCBVn1Sy_kYuHoHVocj5eM32abJo5CQuNpcMaxp9Kc6k2RN_jC1yb7bUv4qcxAdsHd6CAk1IWT6l7mm7gO7EyMIwRxec_c5V2QcT2RnqRw_pA698QM0QtYFvRTY578gofj0msioqCFyOvm_kd4GVFIcK56HrnkyOx-xuvq0CdrxtgLDbQXmHK7nCEA4t0GyOPsDnD72MXmkSCvOlXgdbG1wG7A7H1tX1"
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-[#f6f7f8]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#121416] tracking-tight mb-4">Our Expertise</h2>
            <p className="text-gray-600 max-w-2xl text-lg">Delivering complex infrastructure across three key sectors.</p>
          </div>
          <a 
            href="#" 
            onClick={(e) => e.preventDefault()}
            className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider hover:text-accent transition-colors group"
          >
            All Capabilities <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <ExpertiseCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;