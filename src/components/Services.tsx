import React from 'react';
import { ShieldAlert, FileText, Users,  Compass } from 'lucide-react';

const serviceCategories = [
  {
    icon: Users,
    title: "Personnel & Guard Services",
    items: ["Guards Protection", "Executive Security", "Event Security Services", "Access Control", "Fire Watch Guards", "Hotel Security"]
  },
  {
    icon: FileText,
    title: "Vetting & Investigations",
    items: ["Security Clearance & Criminal Background Checks", "Document Verifications", "Corporate Due Diligence", "Guarantors Verification", "Administrative Profiling", "Special Investigations"]
  },
  {
    icon: ShieldAlert,
    title: "Risk & Tactical Advisory",
    items: ["Risk Assessments & Threat Analysis", "Security Audits & Vulnerability Assessments", "Travel Advisory & Security Briefings", "Daily Security Bulletins & Situation Reports"]
  },
  {
    icon: Compass,
    title: "Specialized Operations",
    items: ["Journey Management & Route Mapping", "Maritime Security", "Construction Site Security", "Loss Prevention", "General Spy Consultancy", "Personal Security"]
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-tactical-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-tactical-accent mb-3">Professional Security Services</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">Comprehensive Protection for Businesses, Events & Personal Safety</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCategories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <div key={idx} className="bg-tactical-card border border-tactical-border rounded-2xl p-6 flex flex-col justify-between hover:border-tactical-accent/50 transition-all group">
                <div>
                  <div className="w-12 h-12 bg-tactical-dark rounded-xl border border-tactical-border flex items-center justify-center text-tactical-accent mb-6 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4">{cat.title}</h3>
                  <ul className="space-y-2.5 mb-6">
                    {cat.items.map((item, i) => (
                      <li key={i} className="text-xs text-tactical-muted flex items-start gap-2">
                        <span className="text-tactical-accent mt-0.5">▪</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a 
                  href="#contact" 
                  className="text-xs font-semibold text-tactical-accent hover:text-amber-400 inline-flex items-center gap-1 mt-auto pt-4 border-t border-tactical-border"
                >
                  Inquire about this service &rarr;
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};