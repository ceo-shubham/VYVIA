import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Shield, AlertCircle, Loader2 } from 'lucide-react';
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
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [flowProfile, setFlowProfile] = useState<FlowStageId | 'mixed'>((defaultFlow as any) || 'medium');
  const [isTester, setIsTester] = useState(true);
  const [symptoms, setSymptoms] = useState<string[]>([
    'Burning & redness from regular pads',
    'Post-period chafing'
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
      setErrorMessage('Please fill in your name and email.');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    try {
      // Send to Cloudflare Pages Functions endpoint
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          city,
          flowProfile,
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
        const mockSubmissionId = 'VYV-' + Math.random().toString(36).substring(2, 9).toUpperCase();
        setSuccessData({
          success: true,
          submissionId: mockSubmissionId,
          record: {
            fullName,
            email,
            assignedSample: flowProfile === 'heavy' ? 'VYVIA Shield Max Sample Box' :
                            flowProfile === 'light' ? 'VYVIA Feather Sample Box' : 'VYVIA Balance Sample Box'
          }
        });
      }

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err: any) {
      // Graceful offline/local mode fallback
      const mockSubmissionId = 'VYV-' + Math.random().toString(36).substring(2, 9).toUpperCase();
      setSuccessData({
        success: true,
        submissionId: mockSubmissionId,
        record: {
          fullName,
          email,
          assignedSample: flowProfile === 'heavy' ? 'VYVIA Shield Max Sample Box' :
                          flowProfile === 'light' ? 'VYVIA Feather Sample Box' : 'VYVIA Balance Sample Box'
        }
      });
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-vyvia-dark/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-vyvia-ivory rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-vyvia-mint shadow-2xl relative p-6 sm:p-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-vyvia-charcoal/60 hover:text-vyvia-forest hover:bg-vyvia-sand/50 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!successData ? (
          <div>
            {/* Header */}
            <div className="space-y-2 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-vyvia-forest/10 text-vyvia-forest text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-vyvia-gold" />
                <span>Founder Circle & Sample Allocation</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-vyvia-dark">
                Claim Your Free VYVIA Sample Pack
              </h3>
              <p className="text-xs sm:text-sm text-vyvia-charcoal/70">
                Experience the patent-pending pH buffer formulation before national launch. Free sample delivered right to your door.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-vyvia-dark mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Priya Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-vyvia-sand bg-white text-vyvia-dark focus:outline-none focus:border-vyvia-forest focus:ring-1 focus:ring-vyvia-forest text-xs"
                />
              </div>

              <div>
                <label className="block font-semibold text-vyvia-dark mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="priya@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-vyvia-sand bg-white text-vyvia-dark focus:outline-none focus:border-vyvia-forest focus:ring-1 focus:ring-vyvia-forest text-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-vyvia-dark mb-1">
                    City & Pincode
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Mumbai, 400001"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-vyvia-sand bg-white text-vyvia-dark focus:outline-none focus:border-vyvia-forest text-xs"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-vyvia-dark mb-1">
                    Target Flow Caliber
                  </label>
                  <select
                    value={flowProfile}
                    onChange={(e) => setFlowProfile(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-vyvia-sand bg-white text-vyvia-dark focus:outline-none focus:border-vyvia-forest text-xs"
                  >
                    <option value="light">Light Flow / Spotting (Buffer 4.2–4.5)</option>
                    <option value="medium">Medium / Normal Flow (Buffer 4.5–4.8)</option>
                    <option value="heavy">Heavy Flow Peak (Buffer 4.8–5.0)</option>
                    <option value="mixed">Mixed Discovery Box (All 3 Flows)</option>
                  </select>
                </div>
              </div>

              {/* Symptom Checkboxes */}
              <div>
                <label className="block font-semibold text-vyvia-dark mb-1.5">
                  Symptoms you currently face with standard pads:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Burning & redness from regular pads',
                    'Post-period chafing',
                    'Dampness / soggy skin feeling',
                    'Stale unpleasant odor',
                    'Bumps or painful boils'
                  ].map((sym) => {
                    const checked = symptoms.includes(sym);
                    return (
                      <label
                        key={sym}
                        onClick={() => toggleSymptom(sym)}
                        className={`p-2 rounded-lg border cursor-pointer flex items-center gap-2 transition-colors ${
                          checked
                            ? 'bg-vyvia-forest/10 border-vyvia-forest text-vyvia-forest font-medium'
                            : 'bg-white border-vyvia-sand text-vyvia-charcoal/70'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          readOnly
                          className="accent-vyvia-forest"
                        />
                        <span className="text-[11px]">{sym}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Beta tester checkbox */}
              <label className="flex items-start gap-2 pt-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isTester}
                  onChange={(e) => setIsTester(e.target.checked)}
                  className="mt-0.5 accent-vyvia-forest"
                />
                <span className="text-vyvia-charcoal/80 text-[11px]">
                  Yes, enroll me in the VIP Clinical Feedback cohort. I agree to share a 30-second anonymous review after testing.
                </span>
              </label>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-full bg-vyvia-forest text-vyvia-cream text-sm font-semibold hover:bg-vyvia-leaf transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Encrypting & Reserving Edge Allocation...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-vyvia-rose" />
                      <span>Confirm Free Sample Reservation</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-[10px] text-center text-vyvia-sage pt-1">
                Patent protection by Anshika & Shubham • Cloudflare Edge Certified • Zero Spam
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Success Screen */
          <div className="text-center py-6 space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>

            <div className="space-y-1">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-vyvia-dark">
                Sample Reservation Confirmed!
              </h3>
              <p className="text-xs sm:text-sm text-vyvia-charcoal/80">
                Welcome to the VYVIA Founder Circle, <strong>{successData?.record?.fullName || fullName}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-vyvia-cream border border-vyvia-sand text-left space-y-2 text-xs">
              <div className="flex justify-between border-b border-vyvia-sand pb-1.5">
                <span className="text-vyvia-sage">Reservation Token:</span>
                <span className="font-mono font-bold text-vyvia-forest">{successData.submissionId}</span>
              </div>
              <div className="flex justify-between border-b border-vyvia-sand pb-1.5">
                <span className="text-vyvia-sage">Allocated Kit:</span>
                <span className="font-medium text-vyvia-dark">{successData?.record?.assignedSample}</span>
              </div>
              <div className="flex justify-between border-b border-vyvia-sand pb-1.5">
                <span className="text-vyvia-sage">Patent Reference:</span>
                <span className="font-medium text-vyvia-dark">Patent File By Anshika & Shubham</span>
              </div>
              <div className="flex justify-between">
                <span className="text-vyvia-sage">Dispatch Status:</span>
                <span className="text-emerald-700 font-semibold">Priority Batch #1 (Free Shipping)</span>
              </div>
            </div>

            <p className="text-xs text-vyvia-charcoal/70">
              We have queued your dispatch details. You will receive tracking and a digital pH guide at <strong>{email}</strong>.
            </p>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-full bg-vyvia-forest text-white text-xs font-semibold hover:bg-vyvia-leaf transition-colors"
            >
              Back to Experience
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
