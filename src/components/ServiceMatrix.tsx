import React from 'react';
import { Shield, FileCheck, Eye, Compass } from 'lucide-react';

const serviceGroups = [
  {
    icon: Shield,
    title: "1. On-Site Physical Security",
    list: [
      "Guards Protection",
      "Executive Security",
      "Event Security Services",
      "Access Control Systems",
      "Construction Site Security",
      "Hotel & Hospitality Security",
      "Fire Watch Guard Deployment"
    ]
  },
  {
    icon: FileCheck,
    title: "2. Corporate Vetting & Diligence",
    list: [
      "Security Clearance & Criminal Checks",
      "Document & Identity Verifications",
      "Guarantors Physical Verification",
      "Corporate Due Diligence Reports",
      "Employment Security Clearance",
      "Administrative Profiling"
    ]
  },
  {
    icon: Eye,
    title: "3. Strategic Threat Advisories",
    list: [
      "Risk Assessments & Threat Analysis",
      "Security Audits & Vulnerability Analysis",
      "Daily Security Bulletins & Situation Reports",
      "Travel Advisory & Security Briefings",
      "Special Investigations",
      "Loss Prevention Strategies"
    ]
  },
  {
    icon: Compass,
    title: "4. Specialized Operations",
    list: [
      "Journey Management & Route Mapping",
      "Maritime Security Support",
      "Private Investigations",
      "Events Security Management",
      "General Spy Consultancy",
      "Personal & VIP Security"
    ]
  }
];

export const ServiceMatrix: React.FC = () => {
  return (
    <section id="matrix" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <span className="text-xs font-bold text-gold-600 uppercase tracking-widest block mb-2">Operational Capabilities</span>
          <h2 className="text-2xl sm:text-3xl font-black text-navy-900">Professional Security Services Matrix</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceGroups.map((group, idx) => {
            const IconComponent = group.icon;
            return (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded p-6 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 bg-navy-900 text-gold-500 rounded flex items-center justify-center mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-navy-900 text-sm border-b border-slate-200 pb-3 mb-4">{group.title}</h3>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {group.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-navy-900 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};