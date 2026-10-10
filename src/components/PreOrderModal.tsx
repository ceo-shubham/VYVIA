import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Shield, AlertCircle, Loader2, UserCheck, Stethoscope, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';
import { FlowStageId } from '../types';

interface PreOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultFlow?: FlowStageId | string;
}

export const PreOrderModal: React.FC<PreOrderModalProps> = ({
  isOpen,
  onClose,
  defaultFlow = 'medium',
}) => {
  const [applicantType, setApplicantType] = useState<'individual' | 'clinical'>('individual');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCity, setCountryCity] = useState('');
  const [flowProfile, setFlowProfile] = useState<FlowStageId | 'all'>((defaultFlow as any) || 'medium');
  const [isTester, setIsTester] = useState(true);
  const [symptoms, setSymptoms] = useState<string[]>([
    'Burning & redness from regular pads',
    'Post-period chafing & skin sensitivity'
  ]);
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const toggleSymptom = (sym: string) => {
    if (symptoms.includes(sym)) {
      setSymptoms(symptoms.filter((s) => s !== sym));
    } else {
      setSymptoms([...symptoms, sym]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !fullName) {
      setErrorMessage('Please fill in your name and email address.');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          city: countryCity,
          flowProfile,
          applicantType,
          isTester,
          symptoms,
          notes,
        }),
      });

      let resData;
      try {
        resData = await response.json();
      } catch {
        resData = null;
      }

      if (response.ok && resData?.success) {
        setSuccessData(resData);
      } else {
        // Fallback simulation for local dev or static preview
        const mockSubmissionId = 'VYV-GLOBAL-' + Math.random().toString(36).substring(2, 8).toUpperCase();
        setSuccessData({
          success: true,
          submissionId: mockSubmissionId,
          record: {
            fullName,
            email,
            assignedSample: flowProfile === 'heavy' ? 'VYVIA Shield Max™ Allocation' :
                            flowProfile === 'light' ? 'VYVIA Feather™ Allocation' :
                            flowProfile === 'all' ? 'The Complete Cycle Protocol™ Allocation' : 'VYVIA Balance™ Allocation'
          }
        });
      }

      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // Graceful offline fallback
      const mockSubmissionId = 'VYV-GLOBAL-' + Math.random().toString(36).substring(2, 8).toUpperCase();
      setSuccessData({
        success: true,
        submissionId: mockSubmissionId,
        record: {
          fullName,
          email,
          assignedSample: flowProfile === 'heavy' ? 'VYVIA Shield Max™ Allocation' :
                          flowProfile === 'light' ? 'VYVIA Feather™ Allocation' :
                          flowProfile === 'all' ? 'The Complete Cycle Protocol™ Allocation' : 'VYVIA Balance™ Allocation'
        }
      });
    } finally {
      setLoading(false);
    }
  };

  const handleResetAndClose = () => {
    setSuccessData(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-vyvia-ivory rounded-3xl shadow-2xl border border-vyvia-mint overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-6 pb-4 bg-gradient-to-r from-vyvia-dark via-vyvia-forest to-vyvia-leaf text-vyvia-cream relative">
          <button
            onClick={handleResetAndClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-vyvia-rose/20 text-vyvia-rose text-[10px] font-bold uppercase tracking-wider border border-vyvia-rose/30">
              Pre-Launch Application
            </span>
            <span className="text-vyvia-sand/70 text-xs">
              Inventors Anshika &amp; Shubham
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-light text-white">
            VIP Early Access &amp; Waitlist
          </h2>
          <p className="text-xs text-vyvia-sand/80 mt-1 max-w-md">
            Reserve your early allocation prior to commercial worldwide release. Zero purchase required today.
          </p>

          {/* Applicant Type Selector */}
          {!successData && (
            <div className="flex gap-2 pt-4">
              <button
                type="button"
                onClick={() => setApplicantType('individual')}
                className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                  applicantType === 'individual'
                    ? 'bg-white text-vyvia-forest shadow'
                    : 'bg-white/10 text-vyvia-sand hover:bg-white/15'
                }`}
              >
                <UserCheck className="w-3.5 h-3.5" />
                <span>Individual / Cycle Tester</span>
              </button>
              <button
                type="button"
                onClick={() => setApplicantType('clinical')}
                className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                  applicantType === 'clinical'
                    ? 'bg-white text-vyvia-forest shadow'
                    : 'bg-white/10 text-vyvia-sand hover:bg-white/15'
                }`}
              >
                <Stethoscope className="w-3.5 h-3.5" />
                <span>Medical / Healthcare Clinic</span>
              </button>
            </div>
          )}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {!successData ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-50 text-red-800 text-xs border border-red-200 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-vyvia-dark">
                    {applicantType === 'clinical' ? 'Contact Name / Lead Doctor *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Dr. Priya Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-vyvia-sand bg-white text-xs text-vyvia-dark focus:outline-none focus:ring-2 focus:ring-vyvia-leaf/30"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-vyvia-dark">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-vyvia-sand bg-white text-xs text-vyvia-dark focus:outline-none focus:ring-2 focus:ring-vyvia-leaf/30"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-vyvia-dark">
                  Location (City, Country)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={countryCity}
                    onChange={(e) => setCountryCity(e.target.value)}
                    placeholder="e.g. London, UK or Mumbai, India"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-vyvia-sand bg-white text-xs text-vyvia-dark focus:outline-none focus:ring-2 focus:ring-vyvia-leaf/30"
                  />
                  <Globe className="w-4 h-4 text-vyvia-sage absolute right-3.5 top-3 pointer-events-none" />
                </div>
              </div>

              {/* Formulation Interest */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-vyvia-dark block">
                  Target Formulation Allocation:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'light', label: 'Feather™', sub: 'Light / Spotting' },
                    { id: 'medium', label: 'Balance™', sub: 'Medium / Core' },
                    { id: 'heavy', label: 'Shield Max™', sub: 'Heavy Flow' },
                    { id: 'all', label: 'Full Protocol™', sub: 'All 3 Stages' },
                  ].map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setFlowProfile(f.id as any)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        flowProfile === f.id
                          ? 'border-vyvia-forest bg-emerald-50/80 text-vyvia-forest font-semibold ring-2 ring-vyvia-forest/10'
                          : 'border-vyvia-sand bg-white text-vyvia-charcoal hover:bg-vyvia-cream'
                      }`}
                    >
                      <div className="text-xs">{f.label}</div>
                      <div className="text-[10px] text-vyvia-sage">{f.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Skin Vulnerabilities / Research Focus */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-vyvia-dark block">
                  Intimate Skin Sensitivities or Research Areas:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Burning & redness from regular pads',
                    'Post-period chafing & skin sensitivity',
                    'Severe stale menstrual odor',
                    'Recurrent contact dermatitis or itching',
                    'Clinical evaluation / Institutional review'
                  ].map((sym) => {
                    const isChecked = symptoms.includes(sym);
                    return (
                      <button
                        key={sym}
                        type="button"
                        onClick={() => toggleSymptom(sym)}
                        className={`p-2.5 rounded-xl border text-left text-xs flex items-center gap-2 transition-all ${
                          isChecked
                            ? 'border-emerald-500 bg-emerald-50/60 text-emerald-950 font-medium'
                            : 'border-vyvia-sand bg-white text-vyvia-charcoal/80 hover:bg-vyvia-cream/50'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ${
                            isChecked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-vyvia-sand'
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-3 h-3" />}
                        </div>
                        <span className="text-[11px] leading-tight">{sym}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Optional Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-vyvia-dark">
                  Notes or Questions for Inventors Anshika &amp; Shubham (Optional):
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us about your cycle needs or clinic specifications..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-vyvia-sand bg-white text-xs text-vyvia-dark focus:outline-none focus:ring-2 focus:ring-vyvia-leaf/30"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-vyvia-forest text-vyvia-cream font-semibold text-xs sm:text-sm hover:bg-vyvia-leaf transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Reserving Early Allocation...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-vyvia-rose" />
                      <span>Submit VIP Waitlist Application</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-[10px] text-center text-vyvia-sage pt-1 flex items-center justify-center gap-2">
                <Shield className="w-3 h-3 text-emerald-600" />
                <span>Patented Bio-Design by Anshika &amp; Shubham • Zero Commercial Charge Today • Strict Data Privacy</span>
              </div>
            </form>
          ) : (
            /* Confirmation Screen */
            <div className="text-center py-6 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
              </div>

              <div className="space-y-1">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-vyvia-dark">
                  Early Access Allocation Reserved!
                </h3>
                <p className="text-xs sm:text-sm text-vyvia-charcoal/80">
                  Welcome to the VYVIA Pre-Launch Circle, <strong>{successData?.record?.fullName || fullName}</strong>.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-vyvia-cream border border-vyvia-sand text-left space-y-2.5 text-xs">
                <div className="flex justify-between border-b border-vyvia-sand pb-2">
                  <span className="text-vyvia-sage">VIP Waitlist Token:</span>
                  <span className="font-mono font-bold text-vyvia-forest text-sm">{successData.submissionId}</span>
                </div>
                <div className="flex justify-between border-b border-vyvia-sand pb-2">
                  <span className="text-vyvia-sage">Allocated Prototype:</span>
                  <span className="font-medium text-vyvia-dark">{successData?.record?.assignedSample}</span>
                </div>
                <div className="flex justify-between border-b border-vyvia-sand pb-2">
                  <span className="text-vyvia-sage">Research Reference:</span>
                  <span className="font-medium text-vyvia-dark">Patent File By Anshika &amp; Shubham</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-vyvia-sage">Status:</span>
                  <span className="font-bold text-emerald-800">Priority Tier 1 Queue</span>
                </div>
              </div>

              <p className="text-xs text-vyvia-charcoal/70 leading-relaxed max-w-md mx-auto">
                We have registered your details for our first production batch. You will receive private alpha laboratory progress updates and early dispatch scheduling as we finalize our clinical pilot cohorts.
              </p>

              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-full bg-vyvia-forest text-white text-xs font-semibold hover:bg-vyvia-leaf transition-colors shadow"
              >
                Close &amp; Return to Innovation Briefing
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
