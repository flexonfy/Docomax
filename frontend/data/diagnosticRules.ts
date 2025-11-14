/**
 * Clinical decision rules and diagnostic heuristics
 * Based on evidence-based medicine and epidemiology
 */

/**
 * Classic differential diagnosis rule:
 * "When you hear hoofbeats, think horses, not zebras"
 * This boosts common diseases and reduces rare diseases
 */
export function applyCommonVsRareRule(
  confidence: number,
  prevalenceInAfrica: string,
  symptomMatch: number
): number {
  // Boost common diseases
  const prevalenceMultiplier: Record<string, number> = {
    'very-high': 1.3,  // Very common - high boost
    'high': 1.2,       // Common - moderate boost
    'medium': 1.0,     // Average
    'low': 0.85,       // Rare - moderate penalty
    'rare': 0.7,       // Very rare - strong penalty
  };

  const multiplier = prevalenceMultiplier[prevalenceInAfrica] || 1.0;
  return confidence * multiplier;
}

/**
 * Symptom severity/onset temporal rules
 * Helps differentiate diseases with similar presentations but different patterns
 */
export interface TemporalPattern {
  onsetType: 'sudden' | 'gradual' | 'insidious';
  typicalDuration: string;
  durationDays?: [number, number]; // [min, max]
  progressionPattern: 'stable' | 'progressive' | 'cyclical' | 'improving';
}

export const TEMPORAL_PATTERNS: Record<string, TemporalPattern> = {
  'common-cold': {
    onsetType: 'sudden',
    typicalDuration: '3-7 days',
    durationDays: [3, 7],
    progressionPattern: 'progressive'
  },
  'influenza': {
    onsetType: 'sudden',
    typicalDuration: '3-7 days',
    durationDays: [3, 7],
    progressionPattern: 'progressive'
  },
  'pneumonia': {
    onsetType: 'gradual',
    typicalDuration: '2-3 weeks',
    durationDays: [14, 21],
    progressionPattern: 'progressive'
  },
  'malaria': {
    onsetType: 'sudden',
    typicalDuration: '10-14 days (without treatment)',
    durationDays: [10, 14],
    progressionPattern: 'cyclical' // fever cycles
  },
  'tuberculosis': {
    onsetType: 'insidious',
    typicalDuration: 'weeks to months',
    durationDays: [42, 180],
    progressionPattern: 'progressive'
  },
  'acute-gastroenteritis': {
    onsetType: 'sudden',
    typicalDuration: '1-7 days',
    durationDays: [1, 7],
    progressionPattern: 'progressive'
  },
};

/**
 * Age-specific likelihood modifications
 * Certain diseases are much more common or severe in specific age groups
 */
export const AGE_SPECIFIC_RULES: Record<string, Record<string, number>> = {
  // Pediatric-specific boost
  'pediatric-diseases': {
    'measles': 1.5,
    'chickenpox': 1.5,
    'whooping-cough': 1.4,
    'group-a-streptococcus': 1.3,
  },
  // Elderly-specific boost
  'elderly-diseases': {
    'pneumonia': 1.4,
    'stroke': 1.3,
    'heart-attack': 1.3,
    'hypertension': 1.3,
    'diabetes': 1.2,
    'atrial-fibrillation': 1.4,
  },
  // Pregnancy-specific
  'pregnancy-related': {
    'gestational-diabetes': 1.5,
    'preeclampsia': 1.4,
    'eclampsia': 1.5,
    'ectopic-pregnancy': 1.3,
  },
};

/**
 * Geographic/epidemiological rules for African context
 * Boosts common diseases in specific regions or seasons
 */
export const EPIDEMIOLOGICAL_RULES: Record<string, { boost: number; season?: string; region?: string }> = {
  'malaria': { boost: 1.5, season: 'rainy' },
  'typhoid': { boost: 1.3, season: 'rainy' },
  'cholera': { boost: 1.4, season: 'rainy' },
  'meningitis': { boost: 1.3, season: 'dry', region: 'sahel' },
  'sleeping-sickness': { boost: 1.2, region: 'central-africa' },
  'onchocerciasis': { boost: 1.2, region: 'forest-areas' },
  'dengue': { boost: 1.3, season: 'rainy' },
  'yellow-fever': { boost: 1.2, region: 'endemic' },
};

/**
 * Rule of thirds for malaria
 * In endemic areas with fever: 1/3 malaria, 1/3 other infectious, 1/3 non-infectious
 * This contextualizes malaria's importance
 */
export function applyMalariaRuleOfThirds(
  diseaseId: string,
  hasUnexplainedFever: boolean,
  isInMalariaEndemicArea: boolean
): number {
  if (!hasUnexplainedFever || !isInMalariaEndemicArea) return 1.0;

  if (diseaseId === 'malaria') return 1.5;  // Boost malaria
  if (diseaseId.includes('infectious')) return 1.2;  // Moderate other infections
  return 0.9;  // Slightly reduce non-infectious
}

/**
 * Negative predictive value rules
 * If certain diseases are ruled out, their similar counterparts become more likely
 * Example: If it's NOT viral - bacterial infection more likely
 */
export const EXCLUSION_RULES: Record<string, Record<string, number>> = {
  // If NOT malaria (no cycles, different geography)
  'not-malaria': {
    'typhoid': 1.3,
    'dengue': 1.2,
    'bacterial-sepsis': 1.2,
  },
  // If NOT acute (gradual onset)
  'not-acute': {
    'tuberculosis': 1.4,
    'chronic-hepatitis': 1.3,
    'hiv-aids': 1.3,
  },
  // If NOT respiratory (no cough/dyspnea)
  'not-respiratory': {
    'malaria': 1.2,
    'gastroenteritis': 1.2,
    'meningitis': 1.2,
  },
};

/**
 * Key symptom cluster rules
 * Certain symptom combinations strongly suggest specific diagnoses
 */
export const SYMPTOM_CLUSTER_RULES: Record<string, { boost: number; symptoms: string[] }> = {
  'meningitis-triad': {
    boost: 2.5,
    symptoms: ['fever', 'severe-headache', 'stiff-neck']
  },
  'malaria-acute': {
    boost: 2.0,
    symptoms: ['fever', 'chills', 'body-aches', 'headache']
  },
  'acute-coronary': {
    boost: 2.5,
    symptoms: ['chest-pain', 'shortness-of-breath', 'diaphoresis']
  },
  'stroke-alert': {
    boost: 2.5,
    symptoms: ['facial-drooping', 'arm-weakness', 'speech-difficulty']
  },
  'gastroenteritis-severe': {
    boost: 2.0,
    symptoms: ['nausea', 'vomiting', 'diarrhea', 'abdominal-pain']
  },
  'respiratory-infection': {
    boost: 1.8,
    symptoms: ['cough', 'sore-throat', 'runny-nose']
  },
};

/**
 * Apply symptom cluster rules to boost confidence
 */
export function applySymptomClusterRules(
  selectedSymptoms: string[],
  diseaseId: string
): number {
  let boost = 1.0;
  const selectedLower = selectedSymptoms.map(s => s.toLowerCase());

  Object.entries(SYMPTOM_CLUSTER_RULES).forEach(([clusterName, rule]) => {
    // Check if disease benefits from this cluster
    const matchCount = rule.symptoms.filter(symptom =>
      selectedLower.some(s => s.includes(symptom.toLowerCase()))
    ).length;

    // If 2+ symptoms from cluster match, apply boost
    if (matchCount >= 2) {
      boost = Math.max(boost, rule.boost);
    }
  });

  return boost;
}

/**
 * Risk factor weighted scoring
 * Presence of risk factors increases likelihood of certain diseases
 */
export const RISK_FACTOR_ASSOCIATIONS: Record<string, { risk: string; boost: number }[]> = {
  'heart-attack': [
    { risk: 'smoking', boost: 1.4 },
    { risk: 'diabetes', boost: 1.3 },
    { risk: 'hypertension', boost: 1.3 },
    { risk: 'family-history', boost: 1.3 },
    { risk: 'obesity', boost: 1.2 },
  ],
  'stroke': [
    { risk: 'hypertension', boost: 1.4 },
    { risk: 'atrial-fibrillation', boost: 1.5 },
    { risk: 'diabetes', boost: 1.3 },
    { risk: 'smoking', boost: 1.3 },
    { risk: 'high-cholesterol', boost: 1.2 },
  ],
  'tuberculosis': [
    { risk: 'hiv', boost: 2.0 },
    { risk: 'immunosuppressed', boost: 1.8 },
    { risk: 'poor-nutrition', boost: 1.3 },
    { risk: 'crowded-housing', boost: 1.3 },
  ],
  'pneumonia': [
    { risk: 'smoking', boost: 1.4 },
    { risk: 'elderly', boost: 1.5 },
    { risk: 'diabetes', boost: 1.3 },
    { risk: 'hiv', boost: 1.5 },
  ],
};

/**
 * Bayesian-inspired prior probabilities
 * Base rates for diseases in different presentations
 */
export const CONDITION_PRIORS: Record<string, number> = {
  // Common presenting complaints
  'fever': {
    'malaria': 0.25,
    'pneumonia': 0.15,
    'typhoid': 0.10,
    'influenza': 0.15,
    'other-infections': 0.30,
    'non-infectious-fever': 0.05,
  } as any,
  
  'cough': {
    'common-cold': 0.30,
    'pneumonia': 0.20,
    'bronchitis': 0.15,
    'asthma': 0.15,
    'tuberculosis': 0.05,
    'other': 0.15,
  } as any,
  
  'abdominal-pain': {
    'gastroenteritis': 0.25,
    'appendicitis': 0.10,
    'ulcer': 0.15,
    'intestinal-obstruction': 0.05,
    'other': 0.45,
  } as any,
  
  'headache': {
    'tension-headache': 0.40,
    'migraine': 0.20,
    'meningitis': 0.01,
    'sinusitis': 0.20,
    'other': 0.19,
  } as any,
};

/**
 * Calculate likelihood ratio for diagnostic test results
 * Helps combine symptoms with any test results available
 */
export function calculateLikelihoodRatio(
  testPositive: boolean,
  sensitivity: number,
  specificity: number
): number {
  // LR+ = sensitivity / (1 - specificity)
  // LR- = (1 - sensitivity) / specificity
  if (testPositive) {
    return sensitivity / (1 - specificity);
  } else {
    return (1 - sensitivity) / specificity;
  }
}

/**
 * Apply pre-test to post-test probability
 * Uses Bayesian math to update probability with test results
 */
export function updateWithTestResult(
  preTestProbability: number,
  likelihoodRatio: number
): number {
  // Convert probability to odds
  const preTestOdds = preTestProbability / (1 - preTestProbability);
  // Multiply by likelihood ratio
  const postTestOdds = preTestOdds * likelihoodRatio;
  // Convert back to probability
  return postTestOdds / (1 + postTestOdds);
}
