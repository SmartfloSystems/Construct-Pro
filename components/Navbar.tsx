import React, { useState } from 'react';
import { HardHat, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="text-primary">
            <HardHat size={36} strokeWidth={1.5} className="fill-current text-primary" />
          </div>
          <h2 className="text-primary text-xl font-black tracking-tight uppercase">Construct Pro</h2>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {['Services', 'Projects', 'Safety', 'Careers'].map((item) => (
            <a 
              key={item}
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-sm font-bold uppercase tracking-wider text-[#121416] hover:text-accent transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center justify-center h-10 px-6 bg-primary hover:bg-primary/90 text-white text-sm font-bold rounded uppercase tracking-wide transition-all shadow-md">
            Contact Us
          </button>
          
          <button 
            className="lg:hidden text-[#121416] p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-2">
          {['Services', 'Projects', 'Safety', 'Careers'].map((item) => (
            <a 
              key={item}
              href="#"
              className="text-lg font-bold uppercase tracking-wider text-[#121416] hover:text-accent transition-colors py-2"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
              }}
            >
              {item}
            </a>
          ))}
          <button className="w-full h-12 mt-4 bg-primary hover:bg-primary/90 text-white text-base font-bold rounded uppercase tracking-wide transition-all">
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;