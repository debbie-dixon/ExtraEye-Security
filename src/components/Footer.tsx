import React from 'react';
import { Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-tactical-dark border-t border-tactical-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center space-x-3">
          <div className="p-1.5 bg-tactical-accent/10 border border-tactical-accent/30 rounded-lg">
            <Shield className="w-5 h-5 text-tactical-accent" />
          </div>
          <div>
            <span className="text-sm font-bold tracking-wider text-white uppercase">Extra Eye Security Ltd.</span>
            <p className="text-xs text-tactical-muted">Watching Round the Clock</p>
          </div>
        </div>

        <p className="text-xs text-tactical-muted text-center sm:text-right">
          © {new Date().getFullYear()} Extra Eye Security Ltd. All rights reserved. <br />
          Port Harcourt, Rivers State, Nigeria.
        </p>

      </div>
    </footer>
  );
};