import React, { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          <div className="flex items-center gap-3">
            <div className="p-2 bg-navy-900 rounded-md text-gold-500">
              <Shield className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xl font-black text-navy-900 tracking-tight block uppercase">EXTRA EYE</span>
              <span className="text-xs font-bold text-gold-600 tracking-widest uppercase block -mt-1">SECURITY LTD.</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-700">
            <a href="#about" className="hover:text-navy-900 transition-colors">About Firm</a>
            <a href="#matrix" className="hover:text-navy-900 transition-colors">Service Matrix</a>
            <a href="#verification" className="hover:text-navy-900 transition-colors">Background & Vetting</a>
            <a 
              href="#consultation" 
              className="bg-navy-900 text-white px-5 py-2.5 rounded-md hover:bg-navy-800 transition-colors text-xs uppercase tracking-wider font-bold"
            >
              Request Quote
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-50 border-b border-slate-200 px-4 py-4 space-y-3">
          <a href="#about" onClick={() => setIsOpen(false)} className="block py-2 text-slate-800 font-semibold text-sm">About Firm</a>
          <a href="#matrix" onClick={() => setIsOpen(false)} className="block py-2 text-slate-800 font-semibold text-sm">Service Matrix</a>
          <a href="#verification" onClick={() => setIsOpen(false)} className="block py-2 text-slate-800 font-semibold text-sm">Background & Vetting</a>
          <a href="#consultation" onClick={() => setIsOpen(false)} className="block py-2 bg-navy-900 text-white text-center rounded-md font-bold text-xs uppercase">Request Quote</a>
        </div>
      )}
    </nav>
  );
};