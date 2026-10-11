import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipForward, SkipBack, Maximize2, Sparkles, ShieldCheck, Droplet, Layers, Eye, Volume2, VolumeX, CheckCircle2, ArrowRight } from 'lucide-react';

interface CinematicMotionPlayerProps {
  onJoinWaitlist: () => void;
}

export const CinematicMotionPlayer: React.FC<CinematicMotionPlayerProps> = ({ onJoinWaitlist }) => {
  const [activeChapter, setActiveChapter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isTheaterMode, setIsTheaterMode] = useState(false);
  const [ambientSoundActive, setAmbientSoundActive] = useState(false);

  const chapters = [
    {
      id: 0,
      code: '01',
      title: 'The Biological Conflict',
      subtitle: 'Alkaline Blood (pH 7.4) vs Acidic Skin (pH 4.8)',
      image: '/images/vyvia_pad_comparison.jpg',
      badge: 'Chapter 01: Biological Mismatch',
      description:
        'When blood touches your delicate intimate skin, its alkaline chemistry dissolves natural lipids like harsh chemical detergent. Conventional pads leave fluid trapped for hours, triggering stinging rashes and odor.',
      metrics: [
        { label: 'Blood Alkalinity', val: 'pH 7.4 – 7.6', color: 'text-rose-400' },
        { label: 'Unbuffered Trap Time', val: '4–6 Hours', color: 'text-amber-400' },
        { label: 'Regular Pad Outcome', val: 'Chemical Rashes & Burning', color: 'text-rose-400' },
      ],
    },
    {
      id: 1,
      code: '02',
      title: 'Molecular Buffer Reaction',
      subtitle: 'Dynamic pH Balance in <1.2 Seconds',
      image: '/images/vyvia_cinematic_motion.jpg',
      badge: 'Chapter 02: The Patent Reaction',
      description:
        'The instant fluid touches VYVIA, our patented organic buffer coating dynamically reacts. The contact surface drops from dangerous alkaline 7.6 down into your skin’s comfort zone of pH 4.8.',
      metrics: [
        { label: 'Neutralization Speed', val: '< 1.2 Seconds', color: 'text-emerald-400' },
        { label: 'Skin Contact Target', val: 'pH 4.8 Locked', color: 'text-emerald-400' },
        { label: 'Tissue-Eating Enzymes', val: '100% Frozen Dormant', color: 'text-emerald-400' },
      ],
    },
    {
      id: 2,
      code: '03',
      title: '5-Tier Biomaterial Layering',
      subtitle: 'Organic Bamboo Silk & Plant Gel Core',
      image: '/images/vyvia_pad_layers.jpg',
      badge: 'Chapter 03: Layer Architecture',
      description:
        'Engineered from 100% micro-perforated organic bamboo silk, antimicrobial zinc web, and rapid plant-based superabsorbent gel that locks 35x its weight into dry gel within seconds.',
      metrics: [
        { label: 'Top-Sheet Fiber', val: '100% Organic Bamboo', color: 'text-emerald-400' },
        { label: 'Dry Gel Lock Speed', val: '< 1.2s Rapid Draw', color: 'text-emerald-400' },
        { label: 'Chlorine & Bleach', val: '0% Dioxins / 0% Fragrance', color: 'text-emerald-400' },
      ],
    },
    {
      id: 3,
      code: '04',
      title: 'The Rash-Free Cycle',
      subtitle: 'Monitored Across 240+ Clinical Pilot Cycles',
      image: '/images/vyvia_pad_hero.jpg',
      badge: 'Chapter 04: Clinical Relief',
      description:
        'Tested in monitored clinical cohorts. Dermatologists confirmed zero post-period rashes, zero stinging when washing or urinating, and zero stale menstrual odor — without artificial masking perfumes.',
      metrics: [
        { label: 'Zero Post-Cycle Rashes', val: '98.4% Documented', color: 'text-emerald-400' },
        { label: 'Zero Stale Odor', val: '94.2% Natural Control', color: 'text-emerald-400' },
        { label: 'Zero Plastic Chafing', val: '100% Friction Relief', color: 'text-emerald-400' },
      ],
    },
    {
      id: 4,
      code: '05',
      title: 'Sustainable Luxury Unboxing',
      subtitle: 'Sliding Drawer Box Reserved for VIP Waitlist',
      image: '/images/vyvia_packaging.jpg',
      badge: 'Chapter 05: Pre-Launch Unboxing',
      description:
        'Crafted from certified sustainable fiber with embossed metallic gold detailing. The first production batch is allocated strictly to our VIP Early Access circle before global retail availability.',
      metrics: [
        { label: 'Packaging Format', val: 'Sliding Drawer Box', color: 'text-amber-400' },
        { label: 'First Batch Access', val: 'VIP Waitlist Priority', color: 'text-emerald-400' },
        { label: 'Global Commercial Release', val: 'Launching Soon', color: 'text-emerald-400' },
      ],
    },
  ];

  const current = chapters[activeChapter];

  // Auto-play timer loop
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveChapter((c) => (c + 1) % chapters.length);
          return 0;
        }
        return prev + 2; // ~5 seconds per chapter
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, chapters.length]);

  const selectChapter = (idx: number) => {
    setActiveChapter(idx);
    setProgress(0);
  };

  const nextChapter = () => {
    setActiveChapter((c) => (c + 1) % chapters.length);
    setProgress(0);
  };

  const prevChapter = () => {
    setActiveChapter((c) => (c - 1 + chapters.length) % chapters.length);
    setProgress(0);
  };

  return (
    <section id="motion-reel" className="py-16 lg:py-24 bg-vyvia-dark text-white relative overflow-hidden">
      {/* Background ambient lighting ribbons */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-vyvia-rose/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-emerald-400 text-xs font-semibold backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="uppercase tracking-widest font-mono text-[11px]">4K Cinematic Product Reel</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
            The Motion Graphic Showcase
          </h2>

          <p className="text-sm sm:text-base text-vyvia-sand/75 leading-relaxed max-w-2xl mx-auto">
            Experience the technology unfold through high-fidelity visual motion. Explore the biological mismatch, the rapid buffer kinetics, and our luxury prototype unboxing.
          </p>
        </div>

        {/* CINEMATIC MOTION PLAYER CONTAINER */}
        <div
          className={`relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-black transition-all duration-500 ${
            isTheaterMode ? 'fixed inset-4 z-50 rounded-2xl border-white/20' : 'max-w-6xl mx-auto'
          }`}
        >
          {/* Main Visual Screen with Ken-Burns Camera Motion */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-stone-950">
            {/* Background Render with smooth dissolve */}
            <img
              key={current.image}
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover object-center transform scale-100 hover:scale-105 transition-all duration-1000 ease-out"
            />

            {/* Cinematic Gradient Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60 pointer-events-none" />

            {/* Top Bar inside Player */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between z-20">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-emerald-400 font-mono text-[10px] sm:text-xs font-bold border border-emerald-500/30 uppercase tracking-widest">
                  {current.badge}
                </span>

                <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-white/70 font-mono px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>CGI Motion Telemetry</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsTheaterMode(!isTheaterMode)}
                  className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white/80 hover:text-white backdrop-blur-md border border-white/10 transition-colors"
                  title="Toggle Theater Mode"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Center Play Overlay on Pause */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/30 backdrop-blur-[2px]">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 text-vyvia-dark flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                >
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-vyvia-dark ml-1" />
                </button>
              </div>
            )}

            {/* Bottom Overlay: Title, Description, and Telemetry Metrics */}
            <div className="absolute bottom-16 sm:bottom-20 left-4 sm:left-8 right-4 sm:right-8 z-20 space-y-3 sm:space-y-4">
              <div className="max-w-2xl space-y-1.5 sm:space-y-2">
                <div className="text-xs sm:text-sm font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  {current.subtitle}
                </div>
                <h3 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                  {current.title}
                </h3>
                <p className="text-xs sm:text-sm text-vyvia-sand/90 leading-relaxed max-w-xl line-clamp-3 sm:line-clamp-none">
                  {current.description}
                </p>
              </div>

              {/* 3 Live Telemetry Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 max-w-3xl">
                {current.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 sm:p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 space-y-0.5"
                  >
                    <div className="text-[10px] text-vyvia-sand/60 font-mono uppercase tracking-wider">
                      {m.label}
                    </div>
                    <div className={`font-mono text-xs sm:text-sm font-bold ${m.color}`}>
                      {m.val}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-14 sm:h-16 bg-gradient-to-t from-black via-black/90 to-transparent flex items-center justify-between px-4 sm:px-8 z-30 border-t border-white/10">
              {/* Media Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-full bg-white text-vyvia-dark hover:bg-vyvia-cream transition-transform hover:scale-105"
                  aria-label={isPlaying ? 'Pause Reel' : 'Play Reel'}
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-vyvia-dark" /> : <Play className="w-4 h-4 fill-vyvia-dark ml-0.5" />}
                </button>

                <button
                  onClick={prevChapter}
                  className="p-1.5 text-white/70 hover:text-white transition-colors"
                  aria-label="Previous Chapter"
                >
                  <SkipBack className="w-4 h-4" />
                </button>

                <button
                  onClick={nextChapter}
                  className="p-1.5 text-white/70 hover:text-white transition-colors"
                  aria-label="Next Chapter"
                >
                  <SkipForward className="w-4 h-4" />
                </button>

                <span className="font-mono text-xs text-white/60 ml-2">
                  0{activeChapter + 1} / 0{chapters.length}
                </span>
              </div>

              {/* Action Button inside Player */}
              <div className="flex items-center gap-3">
                <button
                  onClick={onJoinWaitlist}
                  className="px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs transition-all shadow-md flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Reserve First Batch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Animated Progress Timeline Bar at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-40">
              <div
                className="h-full bg-emerald-400 transition-all duration-100 ease-linear shadow-[0_0_10px_#34D399]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Interactive Chapter Selector Bar underneath video */}
          <div className="bg-black/95 p-3 sm:p-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-5 gap-2">
            {chapters.map((ch, idx) => {
              const isActive = idx === activeChapter;
              return (
                <button
                  key={ch.id}
                  onClick={() => selectChapter(idx)}
                  className={`p-2.5 rounded-xl text-left transition-all border ${
                    isActive
                      ? 'bg-white/15 border-emerald-400/80 shadow-md ring-1 ring-emerald-400/50'
                      : 'bg-white/5 border-white/5 hover:bg-white/10 text-white/70'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                    <span className={isActive ? 'text-emerald-400 font-bold' : 'text-white/40'}>
                      CH {ch.code}
                    </span>
                    {isActive && isPlaying && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    )}
                  </div>
                  <div className="text-xs font-semibold text-white truncate">
                    {ch.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
