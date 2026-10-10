export type FlowStageId = 'light' | 'medium' | 'heavy';

export interface FlowStageData {
  id: FlowStageId;
  name: string;
  subtitle: string;
  biologicalComposition: string;
  externalBloodPh: string;
  bloodPhMin: number;
  bloodPhMax: number;
  bufferPh: string;
  bufferPhMin: number;
  bufferPhMax: number;
  neutralizedPh: string;
  neutralizedPhMin: number;
  neutralizedPhMax: number;
  outcome: string;
  clinicalMechanism: string;
  untreatedSymptoms: string[];
  untreatedRisks: string[];
  bufferedBenefit: string;
}

export interface ProblemCategory {
  id: string;
  title: string;
  hindiTitle: string;
  controlByPh: string;
  controlPercent: number;
  whyPhSolves: string;
  whyPhSolvesHindi: string;
  remainingGap: string;
  remainingGapHindi: string;
  vyviaCompleteSolution: string;
  vyviaCompleteSolutionHindi: string;
  iconName: string;
  tag: string;
}

export interface ProductItem {
  id: string;
  name: string;
  flowType: FlowStageId | 'all';
  flowLabel: string;
  tagline: string;
  bufferPhRange: string;
  targetInterfacePh: string;
  packCount?: number;
  price?: number;
  originalPrice?: number;
  features: string[];
  bestFor: string;
  badge?: string;
  absorbencyBars: number;
  stageStatus?: string;
  researchCode?: string;
}

export interface RoadmapStage {
  step: string;
  title: string;
  status: 'completed' | 'current' | 'upcoming';
  timeframe: string;
  description: string;
  highlights: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  description: string;
  options: {
    text: string;
    score: number;
    flowIndicator?: FlowStageId;
    vulnerabilityNote: string;
  }[];
}

export interface WaitlistSubmission {
  fullName: string;
  email: string;
  flowProfile: FlowStageId | 'mixed';
  symptoms: string[];
  city: string;
  isTester: boolean;
  notes?: string;
}
