import React, { useState } from 'react';
import { X, Cloud, Terminal, CheckCircle2, Copy, Check, ExternalLink, Zap, Shield, ArrowRight } from 'lucide-react';

interface CloudflareDeployGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CloudflareDeployGuideModal: React.FC<CloudflareDeployGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'git' | 'cli'>('git');

  if (!isOpen) return null;

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-vyvia-dark/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-vyvia-mint shadow-2xl relative p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-vyvia-charcoal/60 hover:text-vyvia-dark hover:bg-vyvia-sand/60"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-900 border border-amber-300 text-xs font-semibold">
            <Cloud className="w-3.5 h-3.5 text-amber-600" />
            <span>Cloudflare Free Plan Live Deployment Guide</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-vyvia-dark">
            Deploy VYVIA to Cloudflare in 2 Minutes
          </h3>
          <p className="text-xs sm:text-sm text-vyvia-charcoal/70">
            This project is 100% pre-configured for <strong>Cloudflare Pages &amp; Pages Functions</strong>. 
            Enjoy free global CDN hosting, free custom domains, free automatic SSL, and 100,000 serverless API requests per day at zero cost.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-vyvia-sand mb-5">
          <button
            onClick={() => setActiveTab('git')}
            className={`pb-2.5 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
              activeTab === 'git'
                ? 'border-vyvia-forest text-vyvia-forest'
                : 'border-transparent text-vyvia-charcoal/60 hover:text-vyvia-charcoal'
            }`}
          >
            Method 1: GitHub &amp; Cloudflare Pages (Recommended)
          </button>
          <button
            onClick={() => setActiveTab('cli')}
            className={`pb-2.5 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
              activeTab === 'cli'
                ? 'border-vyvia-forest text-vyvia-forest'
                : 'border-transparent text-vyvia-charcoal/60 hover:text-vyvia-charcoal'
            }`}
          >
            Method 2: 1-Line CLI (Wrangler)
          </button>
        </div>

        {activeTab === 'git' ? (
          <div className="space-y-4 text-xs">
            {/* Step 1 */}
            <div className="p-4 rounded-xl bg-vyvia-cream border border-vyvia-sand space-y-2">
              <div className="font-bold text-vyvia-dark flex items-center justify-between">
                <span>Step 1: Push this code to your GitHub Repository</span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-vyvia-sand text-vyvia-charcoal">Terminal</span>
              </div>
              <div className="relative bg-vyvia-dark text-vyvia-cream p-3 rounded-lg font-mono text-[11px] overflow-x-auto">
                <code>
                  git init<br />
                  git add .<br />
                  git commit -m "Initial commit for VYVIA full stack website"<br />
                  git branch -M main<br />
                  git remote add origin https://github.com/YOUR_USERNAME/vyvia.git<br />
                  git push -u origin main
                </code>
                <button
                  onClick={() => copyToClipboard('git init\ngit add .\ngit commit -m "Initial commit for VYVIA full stack website"\ngit branch -M main', 1)}
                  className="absolute top-2 right-2 p-1.5 rounded bg-white/10 hover:bg-white/20 text-white"
                  title="Copy commands"
                >
                  {copiedIndex === 1 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-xl bg-vyvia-cream border border-vyvia-sand space-y-2">
              <div className="font-bold text-vyvia-dark">
                Step 2: Connect to Cloudflare Pages (Free Plan)
              </div>
              <ol className="list-decimal list-inside space-y-1 text-vyvia-charcoal/80 leading-relaxed">
                <li>Log in to <a href="https://dash.cloudflare.com" target="_blank" rel="noreferrer" className="text-vyvia-forest font-semibold underline">Cloudflare Dashboard</a>.</li>
                <li>Go to <strong>Compute (Workers &amp; Pages)</strong> → click <strong>Create application</strong> → choose <strong>Pages</strong> tab.</li>
                <li>Click <strong>Connect to Git</strong> and select your <code className="bg-vyvia-sand px-1 rounded">vyvia</code> repository.</li>
              </ol>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 space-y-2">
              <div className="font-bold text-emerald-950 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Step 3: Build Settings (Pre-Configured)</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="bg-white p-2 rounded border border-emerald-200">
                  <span className="text-vyvia-sage font-mono block text-[10px]">Framework Preset</span>
                  <strong className="text-vyvia-dark">Vite</strong>
                </div>
                <div className="bg-white p-2 rounded border border-emerald-200">
                  <span className="text-vyvia-sage font-mono block text-[10px]">Build Command</span>
                  <strong className="text-vyvia-dark">npm run build</strong>
                </div>
                <div className="bg-white p-2 rounded border border-emerald-200">
                  <span className="text-vyvia-sage font-mono block text-[10px]">Build Output Directory</span>
                  <strong className="text-vyvia-dark">dist</strong>
                </div>
                <div className="bg-white p-2 rounded border border-emerald-200">
                  <span className="text-vyvia-sage font-mono block text-[10px]">Functions Directory</span>
                  <strong className="text-vyvia-dark">functions (Auto-detected)</strong>
                </div>
              </div>
              <p className="text-[11px] text-emerald-900 pt-1">
                Click <strong>Save and Deploy</strong>. Cloudflare will deploy your site in ~30 seconds with a free <code className="bg-emerald-100 px-1 py-0.5 rounded">.pages.dev</code> domain!
              </p>
            </div>
          </div>
        ) : (
          /* Wrangler CLI Tab */
          <div className="space-y-4 text-xs">
            <div className="p-4 rounded-xl bg-vyvia-cream border border-vyvia-sand space-y-2">
              <div className="font-bold text-vyvia-dark flex items-center justify-between">
                <span>Deploy directly from your terminal using Wrangler</span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-vyvia-sand text-vyvia-charcoal">CLI</span>
              </div>
              <p className="text-vyvia-charcoal/80">
                You can build and deploy directly to Cloudflare Pages right from this machine:
              </p>
              <div className="relative bg-vyvia-dark text-vyvia-cream p-3 rounded-lg font-mono text-[11px] overflow-x-auto">
                <code>
                  # 1. Build the production bundle<br />
                  npm run build<br /><br />
                  # 2. Deploy directly to Cloudflare Pages (Free)<br />
                  npx wrangler pages deploy dist --project-name=vyvia
                </code>
                <button
                  onClick={() => copyToClipboard('npm run build\nnpx wrangler pages deploy dist --project-name=vyvia', 2)}
                  className="absolute top-2 right-2 p-1.5 rounded bg-white/10 hover:bg-white/20 text-white"
                  title="Copy command"
                >
                  {copiedIndex === 2 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-vyvia-cream border border-vyvia-sand space-y-1">
              <div className="font-bold text-vyvia-dark">Local Preview with Cloudflare Edge Functions:</div>
              <p className="text-vyvia-charcoal/70">
                To test the exact Cloudflare Functions locally:
              </p>
              <code className="block bg-vyvia-dark text-vyvia-cream p-2.5 rounded font-mono text-[11px]">
                npx wrangler pages dev dist
              </code>
            </div>
          </div>
        )}

        {/* Free Plan Perks Callout */}
        <div className="mt-5 p-3.5 rounded-xl bg-vyvia-forest text-vyvia-cream text-xs space-y-1.5">
          <div className="flex items-center gap-1.5 font-bold text-vyvia-rose">
            <Zap className="w-4 h-4" />
            <span>Included on Cloudflare's Free Tier:</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px] text-vyvia-cream/90">
            <div>✓ Unlimited Bandwidth &amp; CDN</div>
            <div>✓ Free SSL / TLS Certificates</div>
            <div>✓ 100,000 Free API Requests/Day</div>
            <div>✓ Custom Domain Routing (e.g. vyvia.in)</div>
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-vyvia-sand text-vyvia-dark text-xs font-semibold hover:bg-vyvia-mint/70 transition-colors"
          >
            Got it, Let's Build!
          </button>
        </div>
      </div>
    </div>
  );
};
