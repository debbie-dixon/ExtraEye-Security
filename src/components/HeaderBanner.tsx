import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const HeaderBanner: React.FC = () => {
  return (
    <div className="bg-navy-900 text-slate-300 text-xs py-2.5 px-4 border-b border-navy-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-gold-500" />
          <span>Prince Clement Haven, Chief David Olunwa Ave, Amadi-Ama, Port Harcourt</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="tel:08033138552" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5 text-gold-500" />
            <span>08033138552 | 07077048888</span>
          </a>
          <a href="mailto:extraeyeservices@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail className="w-3.5 h-3.5 text-gold-500" />
            <span>extraeyeservices@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};