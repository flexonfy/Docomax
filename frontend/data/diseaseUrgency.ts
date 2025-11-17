/**
 * Disease urgency scoring system
 * Helps classify diseases into appropriate response time categories
 * Based on typical presentation and African healthcare context
 */

export interface DiseaseUrgencyProfile {
  diseaseId: string;
  urgencyScore: number; // 0-100, higher = more urgent
  timeToTreatment: {
    critical: number; // minutes until critical deterioration possible
    emergent: number; // hours
    urgent: number; // hours to days
  };
  keyRedFlags: string[]; // Symptoms indicating need for immediate care
  highRiskGroups: string[]; // age groups, conditions most at risk
  mortalityRateWithoutTreatment: string; // e.g., "30%", "rare", "high"
  seasonalPeaks: string[]; // e.g., "rainy season", "dry season", "year-round"
}

export const DISEASE_URGENCY_DATA: Record<string, DiseaseUrgencyProfile> = {
  // CRITICAL/LIFE-THREATENING
  'cerebral-malaria': {
    diseaseId: 'cerebral-malaria',
    urgencyScore: 95,
    timeToTreatment: { critical: 30, emergent: 2, urgent: 12 },
    keyRedFlags: ['confusion', 'seizures', 'loss of consciousness', 'high fever'],
    highRiskGroups: ['children under 5', 'pregnant women', 'non-immune travelers'],
    mortalityRateWithoutTreatment: '15-20%',
    seasonalPeaks: ['rainy season', 'post-rainy season'],
  },
  'meningitis': {
    diseaseId: 'meningitis',
    urgencyScore: 95,
    timeToTreatment: { critical: 15, emergent: 1, urgent: 6 },
    keyRedFlags: ['severe headache', 'stiff neck', 'fever', 'confusion', 'rash'],
    highRiskGroups: ['children', 'young adults', 'elderly'],
    mortalityRateWithoutTreatment: '25-50%',
    seasonalPeaks: ['dry season (meningitis belt)', 'year-round'],
  },
  'sepsis': {
    diseaseId: 'sepsis',
    urgencyScore: 95,
    timeToTreatment: { critical: 20, emergent: 1, urgent: 4 },
    keyRedFlags: ['fever', 'rapid heartbeat', 'rapid breathing', 'confusion', 'hypotension'],
    highRiskGroups: ['infants', 'elderly', 'immunocompromised'],
    mortalityRateWithoutTreatment: '30-40%',
    seasonalPeaks: ['year-round'],
  },
  'severe-dehydration': {
    diseaseId: 'severe-dehydration',
    urgencyScore: 90,
    timeToTreatment: { critical: 60, emergent: 2, urgent: 12 },
    keyRedFlags: ['severe diarrhea', 'persistent vomiting', 'sunken eyes', 'no urine output'],
    highRiskGroups: ['infants', 'young children', 'elderly'],
    mortalityRateWithoutTreatment: '10-20% (in children)',
    seasonalPeaks: ['rainy season (cholera)', 'year-round'],
  },
  'acute-coronary-syndrome': {
    diseaseId: 'acute-coronary-syndrome',
    urgencyScore: 95,
    timeToTreatment: { critical: 30, emergent: 1, urgent: 4 },
    keyRedFlags: ['chest pain', 'shortness of breath', 'diaphoresis', 'nausea'],
    highRiskGroups: ['elderly', 'smokers', 'diabetics', 'hypertensive'],
    mortalityRateWithoutTreatment: '5-15%',
    seasonalPeaks: ['year-round'],
  },
  'stroke': {
    diseaseId: 'stroke',
    urgencyScore: 95,
    timeToTreatment: { critical: 60, emergent: 1, urgent: 3 },
    keyRedFlags: ['sudden weakness', 'facial drooping', 'slurred speech', 'sudden headache'],
    highRiskGroups: ['elderly', 'hypertensive', 'diabetics'],
    mortalityRateWithoutTreatment: '10-20%',
    seasonalPeaks: ['year-round', 'cold season'],
  },
  'eclampsia': {
    diseaseId: 'eclampsia',
    urgencyScore: 95,
    timeToTreatment: { critical: 15, emergent: 1, urgent: 4 },
    keyRedFlags: ['seizures', 'severe headache', 'high blood pressure', 'loss of consciousness'],
    highRiskGroups: ['pregnant women', 'postpartum women'],
    mortalityRateWithoutTreatment: '5-15%',
    seasonalPeaks: ['year-round'],
  },
  'choking': {
    diseaseId: 'choking',
    urgencyScore: 100,
    timeToTreatment: { critical: 4, emergent: 1, urgent: 60 },
    keyRedFlags: ['inability to breathe', 'inability to speak', 'loss of consciousness'],
    highRiskGroups: ['infants', 'young children'],
    mortalityRateWithoutTreatment: '100% (without intervention)',
    seasonalPeaks: ['year-round'],
  },

  // URGENT/HIGH PRIORITY
  'severe-pneumonia': {
    diseaseId: 'severe-pneumonia',
    urgencyScore: 85,
    timeToTreatment: { critical: 120, emergent: 4, urgent: 24 },
    keyRedFlags: ['severe dyspnea', 'fever', 'chest pain', 'altered mental status'],
    highRiskGroups: ['elderly', 'young children', 'immunocompromised'],
    mortalityRateWithoutTreatment: '20-30%',
    seasonalPeaks: ['cold/dry season'],
  },
  'acute-appendicitis': {
    diseaseId: 'acute-appendicitis',
    urgencyScore: 85,
    timeToTreatment: { critical: 480, emergent: 6, urgent: 24 },
    keyRedFlags: ['severe RLQ pain', 'fever', 'vomiting', 'peritoneal signs'],
    highRiskGroups: ['children', 'young adults'],
    mortalityRateWithoutTreatment: '5-10% (with perforation)',
    seasonalPeaks: ['year-round'],
  },
  'ketoacidosis-diabetic': {
    diseaseId: 'ketoacidosis-diabetic',
    urgencyScore: 90,
    timeToTreatment: { critical: 120, emergent: 2, urgent: 12 },
    keyRedFlags: ['severe dehydration', 'rapid breathing', 'confusion', 'fruity breath odor'],
    highRiskGroups: ['type 1 diabetics', 'new diabetics'],
    mortalityRateWithoutTreatment: '5-15%',
    seasonalPeaks: ['year-round'],
  },
  'acute-asthma-attack': {
    diseaseId: 'acute-asthma-attack',
    urgencyScore: 85,
    timeToTreatment: { critical: 120, emergent: 1, urgent: 6 },
    keyRedFlags: ['severe dyspnea', 'wheezing', 'lack of air entry', 'confusion'],
    highRiskGroups: ['children', 'people with asthma'],
    mortalityRateWithoutTreatment: '1-5%',
    seasonalPeaks: ['year-round', 'allergen/cold season'],
  },

  // MODERATELY URGENT (24-48 hours)
  'malaria': {
    diseaseId: 'malaria',
    urgencyScore: 75,
    timeToTreatment: { critical: 480, emergent: 12, urgent: 48 },
    keyRedFlags: ['high fever', 'severe headache', 'severe weakness', 'altered consciousness'],
    highRiskGroups: ['children under 5', 'non-immune', 'pregnant women'],
    mortalityRateWithoutTreatment: '1-5%',
    seasonalPeaks: ['rainy season', 'post-rainy season'],
  },
  'typhoid-fever': {
    diseaseId: 'typhoid-fever',
    urgencyScore: 75,
    timeToTreatment: { critical: 960, emergent: 24, urgent: 72 },
    keyRedFlags: ['prolonged fever', 'rose spots', 'delirium', 'perforation'],
    highRiskGroups: ['children', 'non-immune travelers'],
    mortalityRateWithoutTreatment: '20-30%',
    seasonalPeaks: ['year-round', 'rainy season'],
  },
  'cholera': {
    diseaseId: 'cholera',
    urgencyScore: 85,
    timeToTreatment: { critical: 120, emergent: 2, urgent: 12 },
    keyRedFlags: ['severe watery diarrhea', 'severe dehydration', 'rapid deterioration'],
    highRiskGroups: ['infants', 'young children', 'elderly'],
    mortalityRateWithoutTreatment: '30-50% (untreated)',
    seasonalPeaks: ['rainy season', 'post-rainy season'],
  },

  // ROUTINE (can be managed outpatient)
  'common-cold': {
    diseaseId: 'common-cold',
    urgencyScore: 20,
    timeToTreatment: { critical: 10080, emergent: 168, urgent: 336 },
    keyRedFlags: [],
    highRiskGroups: ['very young', 'very elderly', 'immunocompromised'],
    mortalityRateWithoutTreatment: '<0.1%',
    seasonalPeaks: ['cold season', 'year-round'],
  },
  'upper-respiratory-infection': {
    diseaseId: 'upper-respiratory-infection',
    urgencyScore: 25,
    timeToTreatment: { critical: 10080, emergent: 168, urgent: 336 },
    keyRedFlags: [],
    highRiskGroups: ['young children', 'elderly'],
    mortalityRateWithoutTreatment: '<0.1%',
    seasonalPeaks: ['cold season'],
  },
  'acute-gastroenteritis': {
    diseaseId: 'acute-gastroenteritis',
    urgencyScore: 45,
    timeToTreatment: { critical: 240, emergent: 12, urgent: 48 },
    keyRedFlags: ['severe dehydration', 'bloody diarrhea', 'fever >39C'],
    highRiskGroups: ['infants', 'young children', 'elderly'],
    mortalityRateWithoutTreatment: '1-5% (in children without treatment)',
    seasonalPeaks: ['year-round', 'rainy season'],
  },
  'urinary-tract-infection': {
    diseaseId: 'urinary-tract-infection',
    urgencyScore: 40,
    timeToTreatment: { critical: 480, emergent: 24, urgent: 72 },
    keyRedFlags: ['fever', 'flank pain', 'sepsis signs'],
    highRiskGroups: ['elderly women', 'pregnant women', 'catheterized'],
    mortalityRateWithoutTreatment: '5-10% (if progresses to sepsis)',
    seasonalPeaks: ['year-round'],
  },
  'hypertensive-crisis': {
    diseaseId: 'hypertensive-crisis',
    urgencyScore: 80,
    timeToTreatment: { critical: 60, emergent: 1, urgent: 6 },
    keyRedFlags: ['severe headache', 'visual changes', 'chest pain', 'altered consciousness'],
    highRiskGroups: ['uncontrolled hypertensives', 'elderly'],
    mortalityRateWithoutTreatment: '5-15%',
    seasonalPeaks: ['year-round', 'cold season'],
  },
};

/**
 * Get urgency profile for a disease
 */
export function getDiseaseUrgency(diseaseId: string): DiseaseUrgencyProfile | null {
  return DISEASE_URGENCY_DATA[diseaseId] || null;
}

/**
 * Categorize urgency score into clinical categories
 */
export function getUrgencyCategory(score: number): 'critical' | 'emergent' | 'urgent' | 'routine' {
  if (score >= 90) return 'critical';
  if (score >= 75) return 'emergent';
  if (score >= 40) return 'urgent';
  return 'routine';
}

/**
 * Get time-to-treatment guidance
 */
export function getTimeToTreatment(diseaseId: string): string {
  const profile = getDiseaseUrgency(diseaseId);
  if (!profile) return 'See healthcare provider as soon as possible';

  const category = getUrgencyCategory(profile.urgencyScore);
  if (category === 'critical') {
    return `⚠️ CRITICAL: Call emergency services immediately (${profile.timeToTreatment.critical} minutes)`;
  } else if (category === 'emergent') {
    return `🔴 EMERGENT: Seek emergency care within ${profile.timeToTreatment.emergent} hours`;
  } else if (category === 'urgent') {
    return `🟠 URGENT: See doctor within ${profile.timeToTreatment.urgent} hours`;
  } else {
    return `🟢 ROUTINE: See healthcare provider within ${profile.timeToTreatment.urgent} hours`;
  }
}

/**
 * Disease severity/mortality reference table
 * Helps context about disease seriousness
 */
export const DISEASE_SEVERITY_REFERENCE: Record<string, { cfr: string; description: string }> = {
  'cerebral-malaria': { cfr: '15-20%', description: 'High mortality even with treatment' },
  'meningitis': { cfr: '15-30%', description: 'Mortality depends on organism type' },
  'sepsis': { cfr: '20-40%', description: 'Mortality depends on source and treatment' },
  'cholera': { cfr: '1% (treated), 50% (untreated)', description: 'Highly treatable with ORS/IV fluids' },
  'tuberculosis': { cfr: '3-5%', description: 'Very treatable with proper therapy' },
  'covid-19': { cfr: '0.5-2%', description: 'Varies by age and comorbidities' },
  'malaria': { cfr: '1-5%', description: 'Highly treatable if caught early' },
};
