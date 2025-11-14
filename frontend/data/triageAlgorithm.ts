import { ComprehensiveDisease } from './diseases/types';
import { getDiseaseUrgency, getUrgencyCategory, DISEASE_SEVERITY_REFERENCE } from './diseaseUrgency';

/**
 * Enhanced symptom metadata for better matching
 */
export interface SymptomMetadata {
  name: string;
  severity: 'mild' | 'moderate' | 'severe' | 'critical';
  onset: 'acute' | 'gradual' | 'sudden';
  duration?: number; // in hours/days
  isRedFlag?: boolean; // emergency indicator
  typicalDiseases?: string[]; // disease IDs commonly associated
  conflictsWith?: string[]; // symptoms that rarely occur together
}

/**
 * Enhanced disease with urgency/emergency scoring
 */
export interface EnhancedDiseaseResult {
  disease: ComprehensiveDisease;
  baselineConfidence: number; // Prior probability
  bayesianScore: number; // Posterior probability after symptom matching
  finalConfidence: number; // Overall confidence (0-100)
  matchedSymptoms: string[];
  unmatchedCommonSymptoms: string[];
  riskScore: number;
  emergencyLevel: 'routine' | 'urgent' | 'emergent' | 'critical';
  reasoning: {
    strongMatches: string[];
    symptomCombinations: string[];
    riskFactorMatches: string[];
    ageGenderFactors: string[];
  };
}

/**
 * Baseline prevalence rates for diseases (prior probabilities)
 * Approximate prevalence per 10,000 population in African contexts
 */
const DISEASE_BASELINE_PREVALENCE: Record<string, number> = {
  'common-cold': 2500,
  'malaria': 1200,
  'covid-19': 300,
  'pneumonia': 150,
  'tuberculosis': 200,
  'typhoid': 50,
  'dengue': 100,
  'influenza': 400,
  'urinary-tract-infection': 80,
  'diabetes': 120,
  'hypertension': 150,
  'hiv-aids': 50,
  'anemia': 300,
  'asthma': 200,
};

/**
 * Calculate Bayesian confidence score
 * P(Disease|Symptoms) = P(Symptoms|Disease) * P(Disease) / P(Symptoms)
 */
export function calculateBayesianScore(
  matchedSymptomCount: number,
  totalSymptomCount: number,
  diseaseSymptomCount: number,
  baselinePrevalence: number,
  commonSymptomCount: number,
  rareSymptomCount: number
): number {
  // Likelihood: P(Symptoms|Disease)
  // How likely are we to see these symptoms if person has this disease?
  const likelihoodMatched = matchedSymptomCount / Math.max(totalSymptomCount, 1);
  const likelihoodDiseaseSymptoms = matchedSymptomCount / Math.max(diseaseSymptomCount, 1);
  
  // Weight rare symptoms higher (more specific)
  const rareSymptomBonus = rareSymptomCount * 0.15;
  const likelihood = (likelihoodMatched * 0.4 + likelihoodDiseaseSymptoms * 0.4 + rareSymptomBonus * 0.2);

  // Prior: P(Disease) - baseline prevalence
  const prior = Math.log(baselinePrevalence + 1) / Math.log(10000 + 1);

  // Combined score (0-100)
  let score = (likelihood * 70) + (prior * 30);
  return Math.min(95, Math.max(5, Math.round(score)));
}

/**
 * Detect symptom conflicts - symptoms that rarely occur together
 * Returns confidence reduction factor
 */
export function detectSymptomConflicts(
  selectedSymptoms: string[],
  commonSymptoms: string[],
  rareSymptoms: string[]
): number {
  const conflictPairs: [string, string][] = [
    ['diarrhea', 'constipation'],
    ['fever', 'hypothermia'],
    ['rapid heartbeat', 'bradycardia'],
    ['high blood pressure', 'low blood pressure'],
    ['loss of appetite', 'excessive hunger'],
    ['insomnia', 'excessive sleepiness'],
    ['dry cough', 'productive cough'],
  ];

  let conflictPenalty = 1.0;
  const selectedLower = selectedSymptoms.map(s => s.toLowerCase());

  for (const [symptom1, symptom2] of conflictPairs) {
    const has1 = selectedLower.some(s => s.includes(symptom1.toLowerCase()));
    const has2 = selectedLower.some(s => s.includes(symptom2.toLowerCase()));
    if (has1 && has2) {
      conflictPenalty *= 0.5; // Reduce confidence by 50% for each conflict
    }
  }

  return conflictPenalty;
}

/**
 * Score symptom combinations that commonly occur together
 * E.g., fever + cough + fatigue = strong respiratory infection indicator
 */
export function scoreSymptomCombinations(
  selectedSymptoms: string[],
  disease: ComprehensiveDisease
): { combinationBonus: number; matchedPattern: string } {
  const selectedLower = selectedSymptoms.map(s => s.toLowerCase());

  // Define high-confidence symptom clusters
  const respiratoryClusters = [
    ['fever', 'cough', 'shortness of breath'],
    ['cough', 'sore throat', 'runny nose'],
    ['fever', 'fatigue', 'muscle pain'],
  ];

  const gastrointestinalClusters = [
    ['nausea', 'vomiting', 'diarrhea'],
    ['abdominal pain', 'diarrhea', 'loss of appetite'],
    ['vomiting', 'diarrhea', 'fever'],
  ];

  const neurorologicalClusters = [
    ['headache', 'fever', 'stiff neck'],
    ['dizziness', 'headache', 'confusion'],
    ['weakness', 'numbness', 'tingling'],
  ];

  const allClusters = [
    ...respiratoryClusters,
    ...gastrointestinalClusters,
    ...neurorologicalClusters,
  ];

  let combinationBonus = 1.0;
  let matchedPattern = '';

  for (const cluster of allClusters) {
    const matchCount = cluster.filter(symptom =>
      selectedLower.some(s => s.includes(symptom.toLowerCase()))
    ).length;

    // If 2+ symptoms from a cluster match
    if (matchCount >= 2) {
      combinationBonus += 0.1 * matchCount;
      matchedPattern = cluster.join(' + ');
    }
  }

  return { combinationBonus: Math.min(1.3, combinationBonus), matchedPattern };
}

/**
 * Calculate emergency level based on red flag symptoms and disease urgency
 */
export function assessEmergencyLevel(
  selectedSymptoms: string[],
  disease: ComprehensiveDisease,
  severity: string,
  riskScore: number
): 'routine' | 'urgent' | 'emergent' | 'critical' {
  const selectedLower = selectedSymptoms.map(s => s.toLowerCase());

  // Critical red flags
  const criticalFlags = [
    'difficulty breathing',
    'unconscious',
    'severe chest pain',
    'severe bleeding',
    'loss of consciousness',
    'seizures',
    'severe allergic reaction',
    'acute severe abdominal pain',
    'choking',
  ];

  // Emergency red flags
  const emergencyFlags = [
    'severe headache',
    'stiff neck',
    'high fever',
    'persistent vomiting',
    'bloody stools',
    'coughing blood',
    'severe dehydration',
    'acute confusion',
  ];

  const hasCritical = criticalFlags.some(flag =>
    selectedLower.some(s => s.includes(flag.toLowerCase()))
  );

  if (hasCritical) return 'critical';

  const hasEmergency = emergencyFlags.some(flag =>
    selectedLower.some(s => s.includes(flag.toLowerCase()))
  );

  if (hasEmergency) return 'emergent';

  // Check disease urgency score
  const urgencyProfile = getDiseaseUrgency(disease.id);
  if (urgencyProfile) {
    const urgencyLevel = getUrgencyCategory(urgencyProfile.urgencyScore);
    if (urgencyLevel === 'critical' || urgencyLevel === 'emergent') {
      return urgencyLevel;
    }
  }

  // Based on disease severity
  if (severity === 'emergency') return 'emergent';
  if (severity === 'high' && riskScore > 70) return 'urgent';

  return 'routine';
}

/**
 * Generate human-readable reasoning for diagnosis
 */
export function generateReasoningExplanation(
  matchedSymptoms: string[],
  unmatchedCommonSymptoms: string[],
  riskFactors: string[],
  age: string,
  gender: string,
  combinationPattern: string
): { strongMatches: string[]; symptomCombinations: string[]; riskFactorMatches: string[]; ageGenderFactors: string[] } {
  return {
    strongMatches: matchedSymptoms.slice(0, 3),
    symptomCombinations: combinationPattern ? [combinationPattern] : [],
    riskFactorMatches: riskFactors.slice(0, 2),
    ageGenderFactors: age || gender ? [`Assessed for ${age ? 'age ' + age : ''} ${gender ? gender : ''}`] : [],
  };
}

/**
 * Apply prevalence-weighted baseline confidence
 */
export function getBaselineConfidence(diseaseId: string, prevalence: string): number {
  const basePrev = DISEASE_BASELINE_PREVALENCE[diseaseId] || 50;
  const prevalenceMultiplier = {
    'very-high': 1.5,
    'high': 1.2,
    'medium': 1.0,
    'low': 0.8,
    'rare': 0.5,
  };
  
  const multiplier = prevalenceMultiplier[prevalence as keyof typeof prevalenceMultiplier] || 1.0;
  const normalized = Math.log(basePrev * multiplier + 1) / Math.log(10000);
  return Math.min(30, Math.round(normalized * 30));
}

/**
 * Calculate risk factors boost
 */
export function calculateRiskFactorBoost(
  userRiskFactors: { smoking: 'never' | 'former' | 'current'; chronic: boolean; age: number },
  diseaseRiskFactors: string[],
  diseaseAgeGroup: string
): number {
  let boost = 1.0;

  // Smoking risk
  if (userRiskFactors.smoking === 'current') {
    if (diseaseRiskFactors.some(rf =>
      rf.toLowerCase().includes('smoking') || rf.toLowerCase().includes('tobacco')
    )) {
      boost *= 1.15;
    }
  }

  // Chronic condition risk
  if (userRiskFactors.chronic) {
    if (diseaseRiskFactors.some(rf =>
      ['diabetes', 'hypertension', 'heart disease', 'asthma'].some(c =>
        rf.toLowerCase().includes(c)
      )
    )) {
      boost *= 1.15;
    }
  }

  // Age-specific risk
  if (userRiskFactors.age > 60 && diseaseAgeGroup === 'elderly') {
    boost *= 1.1;
  } else if (userRiskFactors.age < 18 && diseaseAgeGroup === 'pediatric') {
    boost *= 1.1;
  }

  return boost;
}
