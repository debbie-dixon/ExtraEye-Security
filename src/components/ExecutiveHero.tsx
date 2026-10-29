import React from 'react';
import { CheckCircle2, ShieldAlert } from 'lucide-react';

export const ExecutiveHero: React.FC = () => {
  return (
    <section className="bg-slate-100 py-16 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block bg-navy-100 border border-navy-700/20 text-navy-900 text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
              Licensed Corporate Security Officers
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-navy-900 leading-tight">
              Enterprise Risk Mitigation & Executive Guard Services
            </h1>

            <p className="text-slate-600 text-base leading-relaxed">
              Extra Eye Security Ltd provides disciplined asset protection, corporate vetting, and risk advisories for corporate entities, commercial real estate, and high-net-worth individuals in Rivers State.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Armed & Unarmed Tactical Guards",
                "Corporate Background Vetting",
                "Journey & Route Management",
                "Security Audits & Risk Briefings"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-bold text-navy-900 bg-white p-3 rounded border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href="#consultation" 
                className="bg-navy-900 text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded hover:bg-navy-800 transition-all"
              >
                Initiate Security Assessment
              </a>
              <a 
                href="#matrix" 
                className="bg-white border border-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded hover:bg-slate-50 transition-all"
              >
                Full Operations List
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-navy-900 text-white p-8 rounded-lg border-4 border-gold-500 shadow-lg space-y-6">
              <div className="flex items-center gap-3 border-b border-navy-800 pb-4">
                <ShieldAlert className="w-8 h-8 text-gold-500" />
                <div>
                  <h3 className="font-bold text-lg">24/7 Operations Command</h3>
                  <p className="text-xs text-slate-300">Port Harcourt & Surrounding Zones</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <p>
                  <strong className="text-white block mb-1">OUR VISION AT EXTRA EYE SECURITY:</strong>
                  Creating an enabling environment for businesses to thrive, through safety, strategic protection, and reliable security assets.
                </p>
              </div>

              <div className="pt-2 border-t border-navy-800 flex justify-between items-center text-xs">
                <span className="text-slate-400">Primary Motto:</span>
                <span className="font-bold text-gold-500 uppercase tracking-wider">"Watching Round the Clock"</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};