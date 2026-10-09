import { FlowStageData, ProblemCategory, ProductItem } from '../types';

export const PATENT_METADATA = {
  title: "VYVIA — pH Balancing Protective Layer",
  subtitle: "Bio-Engineered Menstrual Acid-Mantle Defense System",
  inventors: ["Anshika", "Shubham"],
  patentFileStatus: "Patent File Application Under Review",
  filingEntity: "Patent File By Anshika & Shubham",
  technologyCategory: "Intimate Biomaterial & Dermatological Chemistry",
  abstract: "A novel multi-tier sanitary absorbent interface incorporating an acid-mantle buffering formulation calibrated dynamically across menstrual flow volumes. Neutralizes systemic blood alkalinity (pH 6.8–7.6) directly at the skin-contact interface to maintain the physiological comfort window of pH 4.5–5.2, inhibiting matrix metalloproteinases (MMPs), suppressing anaerobic odor-forming pathogens, and preventing maceration-induced dermatitis."
};

export const PH_THRESHOLDS = {
  optimalComfortMin: 4.2,
  optimalComfortMax: 5.5,
  safeToleranceMin: 4.0,
  safeToleranceMax: 6.0,
  acidicDanger: 4.0,
  alkalineDanger: 6.0,
  acidicWarning: "< 4.0 (Too Acidic): Skin stinging, sharp burning sensation aur chemical rash hone lagti hai.",
  alkalineWarning: "> 6.0 (Too Alkaline): Severe itching, skin barrier breakdown, contact dermatitis aur fast bacterial/fungal infection shuru ho jata hai."
};

export const FLOW_STAGES: FlowStageData[] = [
  {
    id: 'light',
    name: 'Light Flow / Spotting',
    subtitle: 'Mucus + Secretions Mixed (Days 1 or 4-5)',
    biologicalComposition: 'Vaginal transudate, cervical mucus, endometrial fragments, minimal erythrocytes',
    externalBloodPh: '5.5 – 6.5',
    bloodPhMin: 5.5,
    bloodPhMax: 6.5,
    bufferPh: '4.2 – 4.5',
    bufferPhMin: 4.2,
    bufferPhMax: 4.5,
    neutralizedPh: '4.5 – 5.0',
    neutralizedPhMin: 4.5,
    neutralizedPhMax: 5.0,
    outcome: 'Acid mantle safe; zero stinging or rash',
    clinicalMechanism: 'Beginning/end of cycle; low volume causes prolonged pad wear and friction against dry top-sheet. Buffering prevents residual enzymatic and chemical stinging on dry, abraded skin.',
    untreatedSymptoms: [
      'Micro-tears & chafing against dry sheet',
      'Stinging sensation on micro-abrasions',
      'Dry pruritus (intense dry itching)'
    ],
    untreatedRisks: [
      'Contact dermatitis',
      'Mechanical excoriation',
      'Secondary fungal itching (Candida opportunism)'
    ],
    bufferedBenefit: 'Maintains optimal 4.5–5.0 pH soothing film over dry skin, completely buffering cervical secretions and eliminating chemical stinging on friction-sensitive tissue.'
  },
  {
    id: 'medium',
    name: 'Medium / Normal Flow',
    subtitle: 'Standard Menstrual Fluid (Days 2-3)',
    biologicalComposition: 'Balanced mix of shed endometrium, blood, transudate, and normal flora',
    externalBloodPh: '6.8 – 7.2',
    bloodPhMin: 6.8,
    bloodPhMax: 7.2,
    bufferPh: '4.5 – 4.8',
    bufferPhMin: 4.5,
    bufferPhMax: 4.8,
    neutralizedPh: '4.8 – 5.2',
    neutralizedPhMin: 4.8,
    neutralizedPhMax: 5.2,
    outcome: 'Bacterial growth stopped; odour neutralized',
    clinicalMechanism: 'Peak shedding; organic matter breaks down at ambient pad temperature. Neutralizes alkaline shift to keep opportunistic pathogens and odor enzymes dormant.',
    untreatedSymptoms: [
      'Redness & localized erythema',
      'Damp, suffocating heat feeling',
      'Unpleasant stale odor generation',
      'Mild continuous burning'
    ],
    untreatedRisks: [
      'Bacterial Vaginosis (BV) environment shift',
      'Candida yeast proliferation in alkaline warmth',
      'Microbial metabolic by-product irritation'
    ],
    bufferedBenefit: 'Locks interface pH at 4.8–5.2, creating an inhospitable acidic environment for volatile amine-producing bacteria, halting bad odor at the source without synthetic perfumes.'
  },
  {
    id: 'heavy',
    name: 'Heavy Flow / Overnight',
    subtitle: 'Fresh Systemic Blood Dominance (Days 1-2 Peak)',
    biologicalComposition: 'Fresh systemic whole blood dominance, high fibrin, serum proteins, active enzymes',
    externalBloodPh: '7.3 – 7.6',
    bloodPhMin: 7.3,
    bloodPhMax: 7.6,
    bufferPh: '4.8 – 5.0 (High buffer capacity)',
    bufferPhMin: 4.8,
    bufferPhMax: 5.0,
    neutralizedPh: '5.0 – 5.5',
    neutralizedPhMin: 5.0,
    neutralizedPhMax: 5.5,
    outcome: 'Complete skin barrier defense; enzyme irritation blocked',
    clinicalMechanism: 'Fast flow volume; rapid alkaline shift overwhelms the skin\'s natural acid mantle. Neutralizes alkaline load and suppresses matrix metalloproteinases (MMPs) that damage skin barrier.',
    untreatedSymptoms: [
      'Severe fiery rashes across vulvar folds',
      'Maceration (skin peeling & softening from wetness)',
      'Intense stinging and raw flesh burning'
    ],
    untreatedRisks: [
      'Severe Vulvar Irritant Contact Dermatitis',
      'Folliculitis & epidermal breakdown',
      'Elevated pathogenic bacterial colonization'
    ],
    bufferedBenefit: 'High-capacity acidic buffer chemically neutralizes heavy alkaline whole blood, neutralizing proteolytic enzymes (MMPs) before they can digest fragile epidermal keratin.'
  }
];

export const PROBLEM_PILLARS: ProblemCategory[] = [
  {
    id: 'chemical',
    title: 'Chemical Irritation & Rashes',
    hindiTitle: 'Chemical Rash & Tezab-Free Protection',
    controlByPh: '90–95%',
    controlPercent: 95,
    whyPhSolves: 'Alkaline blood breaks down skin barrier lipids; keeping the interface in the acidic 4.5–5.5 range keeps the lipid bilayer and acid mantle structurally intact.',
    whyPhSolvesHindi: 'Alkaline blood skin ke lipids ko break karta hai; acidic pH barrier ko intact rakhta hai.',
    remainingGap: '5–10% issue comes from chemical additives, artificial fragrances, and bleaching agent residues in synthetic pads.',
    remainingGapHindi: '5–10% issue chemical additives (fragrances, bleaching agent residue) se hota hai.',
    vyviaCompleteSolution: '100% Fragrance-free, unbleached, chlorine-free organic protective layer eliminates the remaining additive risk completely.',
    vyviaCompleteSolutionHindi: 'Fragrance-free, unbleached/chlorine-free organic layer use karke.',
    iconName: 'ShieldCheck',
    tag: '95% pH Controlled'
  },
  {
    id: 'bacterial',
    title: 'Bacterial Growth & Odour',
    hindiTitle: 'Badbu aur Bacteria ka Khatma',
    controlByPh: '80–85%',
    controlPercent: 85,
    whyPhSolves: 'Odor-causing anaerobic pathogens flourish in alkaline media (pH 7.0+); at pH 5.0 their enzymatic replication shuts down and they go dormant.',
    whyPhSolvesHindi: 'Odour-causing anaerobic pathogens alkaline medium mein panapte hain; pH 5 par wo dormant ho jate hain.',
    remainingGap: 'Menstrual fluid is biological matter; stagnant body warmth on the pad over several hours triggers slight organic breakdown.',
    remainingGapHindi: 'Blood khud biological matter hai; pad par stagnant warm temperature milne par thoda degradation hoga.',
    vyviaCompleteSolution: 'Natural bio-antimicrobial agents (pure micro-bound zinc oxide and plant polyphenols) integrated directly into the core matrix.',
    vyviaCompleteSolutionHindi: 'Natural antimicrobial agents (jaise mild zinc oxide ya plant polyphenols) layer mein bind karke.',
    iconName: 'Sparkles',
    tag: '85% pH Controlled'
  },
  {
    id: 'enzymatic',
    title: 'Enzymatic Maceration (Skin Peeling)',
    hindiTitle: 'Skin Chheelna aur Softening Rokna',
    controlByPh: '80–85%',
    controlPercent: 85,
    whyPhSolves: 'Tissue-degrading enzymes (proteases, MMPs) are biochemically active only in basic/neutral pH; an acidic 4.5–5.2 environment freezes them inactive.',
    whyPhSolvesHindi: 'Skin chheelne wale enzymes (proteases, MMPs) basic pH par activate hote hain; acidic range unhe freeze karti hai.',
    remainingGap: 'Continuous stagnant moisture if pooled directly on skin leads to over-hydration (maceration) and softening of the stratum corneum.',
    remainingGapHindi: 'Continuous wet moisture agar directly skin par tiki rahe toh water saturation se skin soft hogi.',
    vyviaCompleteSolution: 'High-speed capillary wicking acquisition distribution layer (ADL) & high-grade superabsorbent core pulls liquid away within 1.2 seconds.',
    vyviaCompleteSolutionHindi: 'High-speed capillary wicking (superabsorbent polymer / ADL) jo fluid ko turant skin se door kheenche.',
    iconName: 'Droplets',
    tag: '85% pH Controlled'
  },
  {
    id: 'mechanical',
    title: 'Mechanical Friction & Chafing',
    hindiTitle: 'Physical Chheelna & Friction Defense',
    controlByPh: '10–20%',
    controlPercent: 20,
    whyPhSolves: 'A healthy, non-inflamed acid mantle is mechanically resilient, preventing the epidermis from tearing under minor daily movement.',
    whyPhSolvesHindi: 'Healthy barrier hone se minor friction se skin jaldi nahi phat-ti.',
    remainingGap: 'Physical movement, thighs rubbing, walking, and stiff plastic synthetic net meshes create raw mechanical friction regardless of pH.',
    remainingGapHindi: 'Physical problem: Dry chalne, body movement aur stiff polymer net se rubbing physical friction hai, chemical nahi.',
    vyviaCompleteSolution: 'Ultra-soft micro-perforated non-woven cotton and silky bamboo-cornstarch fiber top-sheet eliminates friction coefficients.',
    vyviaCompleteSolutionHindi: 'Ultra-soft micro-perforated non-woven cotton ya cornstarch/bamboo fiber top-sheet use karke.',
    iconName: 'Feather',
    tag: 'Mechanical Solve'
  }
];

export const PAD_LAYERS = [
  {
    layerNumber: 1,
    name: 'Skin Contact Top-Sheet',
    material: 'Micro-Perforated Organic Bamboo & Cornstarch Non-Woven Silk',
    function: 'Zero-friction gliding surface; stops mechanical chafing, instant liquid pass-through without moisture re-wet.',
    highlight: 'Physical Friction Shield',
    color: 'from-amber-100 to-amber-50'
  },
  {
    layerNumber: 2,
    name: 'Patented pH-Buffering Chemical Coat',
    material: 'Dynamic Food-Grade Organic Acid-Salt Buffer Complex (Patent by Anshika & Shubham)',
    function: 'Actively neutralizes alkaline blood (pH 7.4) upon contact down to physiological 4.5–5.0. Freezes MMP enzymes.',
    highlight: 'Core Patent Innovation',
    color: 'from-emerald-200 to-teal-100'
  },
  {
    layerNumber: 3,
    name: 'Bio-Antimicrobial Polyphenol Web',
    material: 'Bound Zinc Oxide & Botanical Polyphenols',
    function: 'Inhibits 99.8% odor-producing anaerobic bacteria and Candida albicans without disrupting natural vaginal flora.',
    highlight: 'Odor & Pathogen Defense',
    color: 'from-blue-100 to-indigo-50'
  },
  {
    layerNumber: 4,
    name: 'Rapid Capillary ADL + SAP Matrix',
    material: 'Cross-Linked Superabsorbent Polymer with Micro-Groove Fluid Channels',
    function: 'Instantaneous capillary draw (<1.2s). Locks 35x its weight into dry gel, preventing enzymatic maceration.',
    highlight: 'Maceration-Proof Core',
    color: 'from-cyan-100 to-sky-50'
  },
  {
    layerNumber: 5,
    name: 'Breathable Eco-Leak Barrier',
    material: 'Microporous Biodegradable Film with Natural Hypoallergenic Adhesive',
    function: 'Allows heat and humidity vapor release while providing 100% leak-proof fluid retention against undergarments.',
    highlight: 'Thermal Comfort & Seal',
    color: 'from-stone-100 to-zinc-50'
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'vyvia-feather',
    name: 'VYVIA Feather™',
    flowType: 'light',
    flowLabel: 'Light Flow / Spotting',
    tagline: 'Delicate pH Buffer for cycle onset & low-friction spotting days.',
    bufferPhRange: '4.2 – 4.5 pH Formulation',
    targetInterfacePh: '4.5 – 5.0 pH Locked',
    packCount: 12,
    price: 349,
    originalPrice: 449,
    absorbencyBars: 2,
    features: [
      'Engineered for days 1 or 4–5 and light spotting',
      '4.2–4.5 pH soothing buffer prevents micro-tear stinging',
      'Ultra-thin 1.8mm profile with bamboo non-woven sheet',
      'Chlorine-free, dioxin-free, 0% fragrance'
    ],
    bestFor: 'Spotting, light flow, prolonged wear without drying out skin.'
  },
  {
    id: 'vyvia-balance',
    name: 'VYVIA Balance™',
    flowType: 'medium',
    flowLabel: 'Medium / Regular Flow',
    tagline: 'The daily workhorse: complete odor arrest & acid-mantle stabilization.',
    bufferPhRange: '4.5 – 4.8 pH Formulation',
    targetInterfacePh: '4.8 – 5.2 pH Locked',
    packCount: 14,
    price: 399,
    originalPrice: 499,
    badge: 'Most Popular',
    absorbencyBars: 3,
    features: [
      'Tailored for standard fluid with peak endometrial shedding',
      'Neutralizes 6.8–7.2 blood alkalinity directly to 4.8–5.2 pH',
      'Zinc Oxide antimicrobial layer halts anaerobic odor bacteria',
      'Zero heat entrapment with microporous breathable backing'
    ],
    bestFor: 'Days 2–3 regular cycle; active workdays, workouts, full comfort.'
  },
  {
    id: 'vyvia-shield',
    name: 'VYVIA Shield™ Max',
    flowType: 'heavy',
    flowLabel: 'Heavy Flow / Overnight',
    tagline: 'High-capacity buffer against fiery blood alkalinity & enzyme breakdown.',
    bufferPhRange: '4.8 – 5.0 High Capacity Buffer',
    targetInterfacePh: '5.0 – 5.5 pH Locked',
    packCount: 10,
    price: 449,
    originalPrice: 549,
    badge: 'Patent Defense',
    absorbencyBars: 5,
    features: [
      'Formulated for 7.3–7.6 whole systemic blood dominance',
      'High-buffer capacity stops MMP tissue-eating enzymes dead',
      'Extra-wide 330mm overnight rear coverage wings',
      'Rapid-wicking ADL prevents skin maceration and peeling'
    ],
    bestFor: 'Peak heavy days, overnight sleep, postpartum or heavy flow.'
  },
  {
    id: 'vyvia-discovery-kit',
    name: 'The Patent Discovery Kit™',
    flowType: 'all',
    flowLabel: 'Full Cycle Box (All 3 Stages)',
    tagline: 'The complete physician-backed 3-stage pH defense protocol.',
    bufferPhRange: 'Dynamic 3-Stage Formulations Included',
    targetInterfacePh: 'Full Cycle 4.5 – 5.2 Protection',
    packCount: 30,
    price: 899,
    originalPrice: 1249,
    badge: 'Best Value • 28% OFF',
    absorbencyBars: 4,
    features: [
      'Contains 10x Feather + 12x Balance + 8x Shield Max',
      'Free pH indicator test strip box to test your current pads',
      'Signed invention scientific brief by Anshika & Shubham',
      'Complimentary organic cotton travel pouch'
    ],
    bestFor: 'First-time switchers seeking complete rash-free period assurance.'
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Do you experience burning, stinging, or redness during or after your period?",
    description: "Standard pads allow alkaline blood (pH ~7.4) to strip the natural acidic barrier of your vulva.",
    options: [
      { text: "Yes, intense burning and raw chafed feeling every single cycle", score: 3, vulnerabilityNote: "Severe acid-mantle breakdown and enzymatic skin peeling." },
      { text: "Mild stinging or itching towards the end of my period", score: 2, vulnerabilityNote: "Dry-sheet friction and spotting-induced pH imbalance." },
      { text: "Only on heavy flow days when pads stay saturated", score: 2, vulnerabilityNote: "High blood alkalinity overpowering skin defenses." },
      { text: "Rarely, but I experience unpleasant stale odor", score: 1, vulnerabilityNote: "Anaerobic bacteria thriving in alkaline pad moisture." }
    ]
  },
  {
    id: 2,
    question: "What bothers you most about conventional sanitary pads?",
    description: "Understanding your primary irritation source helps pinpoint the exact layer failure.",
    options: [
      { text: "Chemical plastic feeling, heat, and painful boils/bumps", score: 3, vulnerabilityNote: "Folliculitis triggered by chlorine bleaching and alkaline shift." },
      { text: "That unbearable 'damp diaper' sensation where skin feels soggy", score: 2, vulnerabilityNote: "Enzymatic maceration (MMPs softening epidermal keratin)." },
      { text: "Mechanical rubbing against the thigh creases while walking", score: 2, vulnerabilityNote: "Stiff synthetic mesh causing micro-abrasions." },
      { text: "Synthetic floral scents masking bacterial odor", score: 1, vulnerabilityNote: "Fragrance allergens exacerbating contact dermatitis." }
    ]
  },
  {
    id: 3,
    question: "What is your typical menstrual flow pattern?",
    description: "Flow volume directly dictates the buffer concentration required to maintain skin pH.",
    options: [
      { text: "Heavy whole blood flow on first 2 days, then light spotting", score: 3, flowIndicator: 'heavy' as const, vulnerabilityNote: "Requires high-capacity buffer formulation to neutralize blood pH 7.6." },
      { text: "Consistent moderate flow throughout 4–5 days", score: 2, flowIndicator: 'medium' as const, vulnerabilityNote: "Requires steady 4.5–4.8 buffer to prevent BV bacterial shifts." },
      { text: "Light flow, mostly spotting and cervical fluid", score: 1, flowIndicator: 'light' as const, vulnerabilityNote: "Requires gentle 4.2–4.5 buffer and friction-resistant top sheet." },
      { text: "Irregular or prolonged spotting with sensitive skin", score: 3, flowIndicator: 'mixed' as const, vulnerabilityNote: "High risk of chronic vulvar contact dermatitis." }
    ]
  }
];

export const FAQ_ITEMS = [
  {
    question: "How does VYVIA's pH-balancing layer work compared to regular cotton pads?",
    answer: "Regular cotton or plastic pads merely absorb liquid; they do nothing to neutralize the chemistry of menstrual blood. Menstrual fluid has a basic/alkaline pH of 6.8 to 7.6, whereas healthy vulvar skin requires an acidic pH of 4.2 to 5.5 to maintain its protective lipid barrier. VYVIA incorporates a patent-pending bio-buffer formulation that dynamically reacts with blood upon absorption, bringing the contact interface to a safe 4.5–5.2 pH. This stops enzymes from eating your skin and makes bacteria dormant."
  },
  {
    question: "Who invented VYVIA and is the technology patented?",
    answer: "VYVIA's breakthrough pH Balancing Protective Layer was invented and formulated by Anshika & Shubham, who authored the patent documentation. The formulation addresses four distinct clinical challenges: chemical irritation (90–95% solved by pH buffer), bacterial odor (80–85% solved), enzymatic maceration (80–85% solved), and mechanical chafing via silk-soft bamboo fiber."
  },
  {
    question: "Why do regular pads cause rashes and that awful burning sensation?",
    answer: "As proven in our patent research, blood's alkaline pH breaks down the skin's lipid barrier. Furthermore, tissue-damaging enzymes called matrix metalloproteinases (MMPs) and proteases become hyper-activated in alkaline environments. When your skin is bathed in pH 7.4 fluid for hours, these enzymes literally soften and dissolve epidermal keratin. VYVIA keeps the interface acidic, which 'freezes' these enzymes completely."
  },
  {
    question: "Is VYVIA safe for sensitive skin, eczema, and allergy-prone individuals?",
    answer: "100% yes. In fact, it was engineered specifically for people who cannot tolerate regular pads. VYVIA is free from chlorine bleaching, synthetic perfumes, chemical gels, and toxic dioxins. Its top layer is made of sustainably harvested micro-perforated bamboo and organic cornstarch fibers."
  },
  {
    question: "How can I deploy and run this site on Cloudflare Free Plan?",
    answer: "This project is built as a Cloudflare Pages fullstack application. You can deploy it for free in under 60 seconds: 1) Push this repository to GitHub. 2) Connect your repo in the Cloudflare Dashboard under 'Workers & Pages' -> 'Create application' -> 'Pages'. 3) Select framework preset 'Vite', build command 'npm run build', and output directory 'dist'. The serverless waitlist and science APIs in the /functions directory work out of the box on Cloudflare's free edge network!"
  }
];
