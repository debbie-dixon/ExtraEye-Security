import React from 'react';
import { ShieldCheck, Target, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold text-gold-600 uppercase tracking-widest block mb-1">Corporate Profile</span>
              <h2 className="text-2xl sm:text-3xl font-black text-navy-900">About Extra Eye Security Ltd.</h2>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              Extra Eye Security Ltd (EES) is a premier security and risk mitigation firm headquartered in Port Harcourt, Rivers State. We specialize in safeguarding corporate assets, commercial properties, and executive personnel around the clock.
            </p>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-navy-900 text-gold-500 rounded shrink-0 mt-0.5">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 text-sm">Our Vision at Extra Eye Security (EES)</h4>
                  <ul className="mt-2 space-y-2 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-gold-600 font-bold">•</span>
                      <span>Creating an enabling environment for businesses to thrive through safety and protection.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-600 font-bold">•</span>
                      <span>Providing services that ensure uncompromising protection and safety of our clients and their businesses.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-600 font-bold">•</span>
                      <span>Becoming a leading provider of comprehensive, excellent security services.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs font-bold text-navy-900">
              <MapPin className="w-4 h-4 text-gold-600" />
              <span>Head Office: Prince Clement Haven, Chief David Olunwa Avenue, Amadi-Ama, Port Harcourt.</span>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-navy-900 text-white p-6 rounded flex flex-col justify-between">
              <ShieldCheck className="w-8 h-8 text-gold-500 mb-4" />
              <div>
                <h3 className="font-bold text-base mb-1">24/7 Readiness</h3>
                <p className="text-xs text-slate-300">Continuous monitoring and tactical guard deployment across all operational sectors.</p>
              </div>
            </div>

            <div className="bg-slate-100 border border-slate-300 text-navy-900 p-6 rounded flex flex-col justify-between mt-0 sm:mt-6">
              <span className="text-gold-600 font-black text-2xl mb-4">100%</span>
              <div>
                <h3 className="font-bold text-base mb-1">Thorough Vetting</h3>
                <p className="text-xs text-slate-600">Rigorous background checks, guarantor validation, and criminal history screening for all personnel.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};