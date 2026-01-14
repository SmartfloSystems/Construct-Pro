import React from 'react';
import { HardHat, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <HardHat className="text-accent" size={32} />
              <h3 className="text-2xl font-black uppercase">Construct Pro</h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Building the foundations for a better future. We are a global leader in construction management and civil engineering.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-wider mb-6 text-gray-200">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              {['About Us', 'Leadership', 'Careers', 'News & Media'].map(item => (
                <li key={item}>
                  <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-accent transition-colors block">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-wider mb-6 text-gray-200">Services</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              {['Pre-Construction', 'General Contracting', 'Construction Management', 'Design-Build'].map(item => (
                <li key={item}>
                  <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-accent transition-colors block">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-wider mb-6 text-gray-200">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent mt-0.5 flex-shrink-0" size={18} />
                <span>1234 Skyline Blvd, Suite 400<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent flex-shrink-0" size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent flex-shrink-0" size={18} />
                <span>info@constructpro.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2024 Construct Pro. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;