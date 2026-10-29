// import React from 'react';
import { HeaderBanner } from './components/HeaderBanner';
import { Navbar } from './components/Navbar';
import { ExecutiveHero } from './components/ExecutiveHero';
import { AboutSection } from './components/AboutSection';
import { ServiceMatrix } from './components/ServiceMatrix';
import { VerificationSection } from './components/VerificationSection';
import { ConsultationForm } from './components/ConsultationForm';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <HeaderBanner />
      <Navbar />
      <ExecutiveHero />
      <AboutSection />
      <ServiceMatrix />
      <VerificationSection />
      <ConsultationForm />
      
      <footer className="bg-navy-900 text-slate-400 py-8 text-center text-xs border-t border-navy-800">
        <p>© {new Date().getFullYear()} Extra Eye Security Ltd. All Rights Reserved.</p>
        <p className="mt-1 text-slate-500">Prince Clement Haven, Chief David Olunwa Avenue, Amadi-Ama, Port Harcourt.</p>
      </footer>
    </div>
  );
}