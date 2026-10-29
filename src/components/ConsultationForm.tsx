import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export const ConsultationForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    const formData = new FormData(e.currentTarget);
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setError("The consultation form is not configured. Please contact us by phone or email.");
      setLoading(false);
      return;
    }

    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data: { success?: boolean; message?: string } = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || "The form service rejected the request.");
      }

      setSubmitted(true);
    } catch (submissionError) {
      console.error("Consultation form submission failed:", submissionError);
      setError("We could not submit your request. Please try again or contact us by phone or email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="consultation" className="py-20 bg-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white border border-slate-300 rounded-lg p-8 sm:p-12 shadow-sm">
          <div className="border-b border-slate-200 pb-6 mb-8">
            <span className="text-xs font-bold text-gold-600 uppercase tracking-widest block mb-1">Corporate Procurement</span>
            <h2 className="text-2xl font-black text-navy-900">Request Official Security Engagement</h2>
            <p className="text-xs text-slate-600 mt-1">Submit your facility or corporate requirements for a formal risk review and quote.</p>
          </div>

          {submitted ? (
            <div className="bg-navy-100 border border-navy-700/20 p-8 rounded text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-navy-900 mx-auto" />
              <h3 className="font-bold text-navy-900 text-lg">Request Logged Successfully</h3>
              <p className="text-xs text-slate-700 max-w-md mx-auto">
                An operations officer from Extra Eye Security Ltd will review your details and contact you directly via phone/email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <p role="alert" className="rounded border border-red-300 bg-red-50 p-3 text-xs text-red-800">
                  {error}
                </p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase mb-2">Company / Individual Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    className="w-full bg-slate-50 border border-slate-300 rounded px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-navy-900"
                    placeholder="e.g. Niger Delta Logistics Ltd"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase mb-2">Phone Contact</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    required 
                    className="w-full bg-slate-50 border border-slate-300 rounded px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-navy-900"
                    placeholder="080XXXXXXXX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    className="w-full bg-slate-50 border border-slate-300 rounded px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-navy-900"
                    placeholder="contact@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase mb-2">Primary Service Required</label>
                  <select 
                    name="service" 
                    className="w-full bg-slate-50 border border-slate-300 rounded px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-navy-900"
                  >
                    <option value="Guards Protection">Physical Guards Protection</option>
                    <option value="Executive Security">Executive & VIP Security</option>
                    <option value="Due Diligence">Document & Background Verifications</option>
                    <option value="Event Security">Event Security Management</option>
                    <option value="Audit & Assessment">Risk Assessment & Vulnerability Audit</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase mb-2">Deployment Scope / Remarks</label>
                <textarea 
                  name="message" 
                  rows={4} 
                  required 
                  className="w-full bg-slate-50 border border-slate-300 rounded px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-navy-900"
                  placeholder="Specify location details, guard headcount needed, or corporate vetting scope..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-navy-900 text-white font-bold text-xs uppercase tracking-wider py-4 rounded hover:bg-navy-800 transition-colors flex items-center justify-center gap-2"
              >
                {loading ? "Processing..." : (
                  <>
                    <Send className="w-4 h-4 text-gold-500" />
                    <span>Submit Procurement Request</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};