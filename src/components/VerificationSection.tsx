import React from 'react';
import { FileSearch, UserCheck, ShieldAlert, Building } from 'lucide-react';

const verificationSteps = [
  {
    icon: FileSearch,
    title: "Criminal Background Checks",
    desc: "Rigorous security clearance protocols and criminal record checks to ensure total reliability of staff and personnel."
  },
  {
    icon: UserCheck,
    title: "Guarantors Verification",
    desc: "Physical and administrative field verification of guarantors provided by prospective employees or business partners."
  },
  {
    icon: Building,
    title: "Corporate Due Diligence",
    desc: "Comprehensive background investigations on business entities, vendors, and corporate partners to mitigate operational risk."
  },
  {
    icon: ShieldAlert,
    title: "Administrative Profiling",
    desc: "Detailed security profiling, document verifications, and risk assessment tracking for high-security environments."
  }
];

export const VerificationSection: React.FC = () => {
  return (
    <section id="verification" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-gold-600 uppercase tracking-widest block mb-2">Vetting & Intelligence</span>
          <h2 className="text-2xl sm:text-3xl font-black text-navy-900">Background Vetting & Security Clearances</h2>
          <p className="text-xs text-slate-600 mt-2">Beyond physical guards, Extra Eye Security provides meticulous investigative and verification protocols.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {verificationSteps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div key={idx} className="bg-white border border-slate-200 rounded p-6 shadow-sm hover:border-navy-900 transition-colors">
                <div className="w-10 h-10 bg-navy-100 text-navy-900 rounded flex items-center justify-center mb-4">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};