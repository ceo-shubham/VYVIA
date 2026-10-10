import React, { useState } from 'react';
import { QUIZ_QUESTIONS, PRODUCTS } from '../data/scienceData';
import { Sparkles, CheckCircle, ArrowRight, RotateCcw, AlertTriangle, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AssessmentQuizProps {
  onSelectProduct: (productId: string) => void;
  onRequestSampleForFlow: (flow: string) => void;
}

export const AssessmentQuiz: React.FC<AssessmentQuizProps> = ({
  onSelectProduct,
  onRequestSampleForFlow,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleSelectOption = (optionIndex: number) => {
    const updated = [...answers];
    updated[currentStep] = optionIndex;
    setAnswers(updated);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 }
      });
    }
  };

  const handleReset = () => {
    setAnswers([]);
    setCurrentStep(0);
    setShowResults(false);
  };

  // Determine recommendation based on answers
  const calculateResult = () => {
    const totalScore = answers.reduce((sum, optIdx, qIdx) => {
      const q = QUIZ_QUESTIONS[qIdx];
      return sum + (q.options[optIdx]?.score || 1);
    }, 0);

    const flowChoice = answers[2] !== undefined ? (QUIZ_QUESTIONS[2].options[answers[2]] as any)?.flowIndicator : 'medium';

    let recommendedProductId = 'vyvia-balance';
    let vulnerabilityLevel = 'Moderate Acid-Mantle Stress';
    let riskPercentage = 68;

    if (flowChoice === 'heavy' || totalScore >= 7) {
      recommendedProductId = 'vyvia-shield';
      vulnerabilityLevel = 'High Risk of Alkaline Maceration & Enzyme Rash';
      riskPercentage = 92;
    } else if (flowChoice === 'light') {
      recommendedProductId = 'vyvia-feather';
      vulnerabilityLevel = 'Friction & Micro-Tear Vulnerability';
      riskPercentage = 54;
    } else if (flowChoice === 'mixed') {
      recommendedProductId = 'vyvia-discovery-kit';
      vulnerabilityLevel = 'Multi-Phase Flow Sensitivity';
      riskPercentage = 84;
    }

    const recommendedProduct = PRODUCTS.find((p) => p.id === recommendedProductId) || PRODUCTS[1];

    return {
      totalScore,
      riskPercentage,
      vulnerabilityLevel,
      recommendedProduct,
      flowChoice: flowChoice || 'medium'
    };
  };

  const result = calculateResult();

  return (
    <section id="quiz" className="py-16 lg:py-24 bg-vyvia-ivory">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-vyvia-forest/10 text-vyvia-forest text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-vyvia-gold" />
            <span>Clinical Self-Assessment</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-vyvia-dark">
            Vulvar Irritation & Acid Mantle Diagnostic
          </h2>
          <p className="text-sm sm:text-base text-vyvia-charcoal/70 max-w-xl mx-auto">
            Answer 3 quick questions to discover your skin's exact vulnerability to menstrual alkalinity and receive your custom buffer protocol.
          </p>
        </div>

        {/* Quiz Card */}
        <div className="glass-panel p-6 sm:p-10 rounded-2xl border border-vyvia-mint shadow-soft relative overflow-hidden">
          {!showResults ? (
            <div className="space-y-6">
              {/* Progress indicator */}
              <div className="flex items-center justify-between text-xs font-semibold text-vyvia-sage uppercase tracking-wider pb-2 border-b border-vyvia-sand">
                <span>Step {currentStep + 1} of {QUIZ_QUESTIONS.length}</span>
                <span>{Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-vyvia-sand h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-vyvia-forest h-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Question */}
              <div className="space-y-2 pt-2">
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-vyvia-dark">
                  {QUIZ_QUESTIONS[currentStep].question}
                </h3>
                <p className="text-xs sm:text-sm text-vyvia-charcoal/70">
                  {QUIZ_QUESTIONS[currentStep].description}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3 pt-2">
                {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className="w-full p-4 rounded-xl text-left bg-white border border-vyvia-sand hover:border-vyvia-forest hover:bg-vyvia-cream/60 transition-all flex items-center justify-between group shadow-sm"
                  >
                    <span className="text-xs sm:text-sm font-medium text-vyvia-charcoal group-hover:text-vyvia-dark pr-4">
                      {option.text}
                    </span>
                    <ArrowRight className="w-4 h-4 text-vyvia-sand group-hover:text-vyvia-forest group-hover:translate-x-1 transition-all shrink-0" />
                  </button>
                ))}
              </div>

              {/* Step Navigation Back */}
              {currentStep > 0 && (
                <div className="pt-2">
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-xs text-vyvia-sage hover:text-vyvia-forest font-semibold"
                  >
                    ← Previous Question
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Results View */
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between pb-4 border-b border-vyvia-sand">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                    Clinical Diagnosis Complete
                  </span>
                </div>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 text-xs text-vyvia-sage hover:text-vyvia-forest font-semibold"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Quiz</span>
                </button>
              </div>

              {/* Vulnerability Score Meter */}
              <div className="p-5 rounded-2xl bg-vyvia-cream border border-vyvia-sand flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs uppercase font-bold tracking-wider text-vyvia-sage">
                    Estimated Acid-Mantle Vulnerability Score
                  </div>
                  <div className="font-serif text-2xl font-semibold text-vyvia-dark">
                    {result.vulnerabilityLevel}
                  </div>
                  <p className="text-xs text-vyvia-charcoal/70">
                    Based on your answers, ordinary pads expose your stratum corneum to prolonged alkaline degradation.
                  </p>
                </div>
                <div className="shrink-0 text-center sm:text-right">
                  <div className="font-mono text-3xl sm:text-4xl font-bold text-red-600">
                    {result.riskPercentage}%
                  </div>
                  <div className="text-[11px] text-vyvia-charcoal/60 uppercase font-semibold">
                    Irritation Risk
                  </div>
                </div>
              </div>

              {/* Recommended Product Box */}
              <div className="p-6 rounded-2xl bg-emerald-50/90 border border-emerald-300 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] uppercase font-bold tracking-wider text-emerald-800">
                      Recommended Buffer Formulation:
                    </span>
                    <h4 className="font-serif text-2xl font-bold text-emerald-950">
                      {result.recommendedProduct.name}
                    </h4>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-700 text-white self-start sm:self-auto">
                    {result.recommendedProduct.bufferPhRange}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                  {result.recommendedProduct.tagline} Calibrated to lock skin interface at <strong>{result.recommendedProduct.targetInterfacePh}</strong>.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => onRequestSampleForFlow(result.flowChoice)}
                    className="px-6 py-2.5 rounded-full bg-vyvia-forest text-white text-xs sm:text-sm font-semibold hover:bg-vyvia-leaf transition-all shadow-sm flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-vyvia-rose" />
                    <span>Request Early Beta Allocation For This Profile</span>
                  </button>

                  <button
                    onClick={() => onSelectProduct(result.recommendedProduct.id)}
                    className="px-5 py-2.5 rounded-full bg-white border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-semibold hover:bg-emerald-100 transition-colors"
                  >
                    Inspect Formulation Engineering
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
