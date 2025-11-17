/**
 * Typical clinical presentations for diseases
 * Helps identify what's present vs. what's missing
 * Improves diagnostic confidence when compared to actual symptoms
 */

export interface TypicalPresentation {
  diseaseId: string;
  name: string;
  typicalSymptomsRequired: string[]; // Must have for diagnosis
  typicalSymptomsCommon: string[]; // Often present
  atypicalPresentations?: string[]; // Can happen but unusual
}

export const TYPICAL_PRESENTATIONS: Record<string, TypicalPresentation> = {
  'meningitis': {
    diseaseId: 'meningitis',
    name: 'Meningitis',
    typicalSymptomsRequired: ['fever', 'severe headache', 'stiff neck'],
    typicalSymptomsCommon: ['confusion', 'sensitivity to light', 'rash', 'chills'],
    atypicalPresentations: ['vomiting without other signs (incomplete meningitis)'],
  },
  'malaria': {
    diseaseId: 'malaria',
    name: 'Malaria',
    typicalSymptomsRequired: ['fever'],
    typicalSymptomsCommon: ['chills', 'body aches', 'headache', 'fatigue', 'nausea', 'vomiting'],
    atypicalPresentations: ['fever cycles (48-72 hours apart for some types)'],
  },
  'pneumonia': {
    diseaseId: 'pneumonia',
    name: 'Pneumonia',
    typicalSymptomsRequired: ['cough', 'fever'],
    typicalSymptomsCommon: ['shortness of breath', 'chest pain', 'fatigue', 'chills'],
    atypicalPresentations: ['minimal symptoms in elderly or immunocompromised'],
  },
  'typhoid-fever': {
    diseaseId: 'typhoid-fever',
    name: 'Typhoid Fever',
    typicalSymptomsRequired: ['prolonged fever', 'abdominal pain'],
    typicalSymptomsCommon: ['headache', 'weakness', 'loss of appetite', 'rose spots on chest'],
    atypicalPresentations: ['delirium, perforation peritonitis in untreated cases'],
  },
  'cholera': {
    diseaseId: 'cholera',
    name: 'Cholera',
    typicalSymptomsRequired: ['severe diarrhea', 'severe vomiting'],
    typicalSymptomsCommon: ['severe dehydration', 'muscle cramps', 'no fever'],
    atypicalPresentations: ['rice-water stools'],
  },
  'appendicitis': {
    diseaseId: 'appendicitis',
    name: 'Appendicitis',
    typicalSymptomsRequired: ['abdominal pain (RLQ)', 'fever'],
    typicalSymptomsCommon: ['nausea', 'vomiting', 'loss of appetite'],
    atypicalPresentations: ['pain may start around umbilicus then move to RLQ'],
  },
  'dengue': {
    diseaseId: 'dengue',
    name: 'Dengue',
    typicalSymptomsRequired: ['fever', 'body aches', 'headache'],
    typicalSymptomsCommon: ['rash', 'fatigue', 'eye pain', 'loss of appetite'],
    atypicalPresentations: ['hemorrhagic dengue: bleeding, shock'],
  },
  'tuberculosis': {
    diseaseId: 'tuberculosis',
    name: 'Tuberculosis',
    typicalSymptomsRequired: ['persistent cough (>3 weeks)', 'fever'],
    typicalSymptomsCommon: ['night sweats', 'weight loss', 'fatigue', 'coughing blood'],
    atypicalPresentations: ['minimal symptoms early, rapid progression in immunocompromised'],
  },
  'covid-19': {
    diseaseId: 'covid-19',
    name: 'COVID-19',
    typicalSymptomsRequired: ['fever', 'cough'],
    typicalSymptomsCommon: ['fatigue', 'loss of taste/smell', 'shortness of breath'],
    atypicalPresentations: ['asymptomatic carriers', 'GI symptoms without respiratory'],
  },
  'acute-coronary-syndrome': {
    diseaseId: 'acute-coronary-syndrome',
    name: 'Acute Coronary Syndrome (Heart Attack)',
    typicalSymptomsRequired: ['chest pain (central, pressure, burning)'],
    typicalSymptomsCommon: ['shortness of breath', 'nausea', 'diaphoresis', 'radiation to left arm'],
    atypicalPresentations: ['silent MI in elderly/diabetics, epigastric pain'],
  },
  'stroke': {
    diseaseId: 'stroke',
    name: 'Stroke',
    typicalSymptomsRequired: ['sudden onset'],
    typicalSymptomsCommon: ['facial drooping', 'arm weakness', 'speech difficulty', 'severe headache'],
    atypicalPresentations: ['posterior stroke: ataxia, visual loss, without classic symptoms'],
  },
  'common-cold': {
    diseaseId: 'common-cold',
    name: 'Common Cold',
    typicalSymptomsRequired: ['runny nose', 'cough'],
    typicalSymptomsCommon: ['sore throat', 'sneezing', 'mild headache', 'mild fatigue'],
    atypicalPresentations: ['usually no fever or low-grade only'],
  },
  'influenza': {
    diseaseId: 'influenza',
    name: 'Influenza',
    typicalSymptomsRequired: ['fever', 'cough'],
    typicalSymptomsCommon: ['body aches', 'headache', 'fatigue', 'sore throat'],
    atypicalPresentations: ['sudden onset of symptoms'],
  },
  'gastroenteritis': {
    diseaseId: 'gastroenteritis',
    name: 'Acute Gastroenteritis',
    typicalSymptomsRequired: ['diarrhea', 'nausea'],
    typicalSymptomsCommon: ['vomiting', 'abdominal pain', 'fever', 'chills'],
    atypicalPresentations: ['bloody diarrhea (bacterial)', 'severe dehydration'],
  },
  'urinary-tract-infection': {
    diseaseId: 'urinary-tract-infection',
    name: 'Urinary Tract Infection',
    typicalSymptomsRequired: ['frequent urination', 'dysuria'],
    typicalSymptomsCommon: ['urgency', 'suprapubic pain', 'low-grade fever'],
    atypicalPresentations: ['no symptoms (asymptomatic bacteriuria)', 'urosepsis'],
  },
  'hypertensive-crisis': {
    diseaseId: 'hypertensive-crisis',
    name: 'Hypertensive Crisis',
    typicalSymptomsRequired: ['very high blood pressure (>180/120)'],
    typicalSymptomsCommon: ['severe headache', 'chest pain', 'shortness of breath'],
    atypicalPresentations: ['asymptomatic in some cases'],
  },
  'acute-pancreatitis': {
    diseaseId: 'acute-pancreatitis',
    name: 'Acute Pancreatitis',
    typicalSymptomsRequired: ['severe epigastric pain', 'elevated amylase'],
    typicalSymptomsCommon: ['nausea', 'vomiting', 'fever', 'elevated lipase'],
    atypicalPresentations: ['radiating to back, grey-turner sign in severe cases'],
  },
};

/**
 * Calculate how complete the presentation is
 * Compare user's symptoms to typical presentation
 */
export function calculatePresentationCompleteness(
  userSymptoms: string[],
  diseaseId: string
): {
  completeness: number; // 0-100
  hasRequiredSymptoms: boolean;
  presentedRequired: string[];
  missingRequired: string[];
  presentedCommon: string[];
  missingCommon: string[];
  atypical: boolean;
} {
  const presentation = TYPICAL_PRESENTATIONS[diseaseId];
  if (!presentation) {
    return {
      completeness: 0,
      hasRequiredSymptoms: false,
      presentedRequired: [],
      missingRequired: [],
      presentedCommon: [],
      missingCommon: [],
      atypical: false,
    };
  }

  const userSymptomLower = userSymptoms.map(s => s.toLowerCase());

  // Check required symptoms
  const presentedRequired = presentation.typicalSymptomsRequired.filter(req =>
    userSymptomLower.some(us => us.includes(req.toLowerCase()) || req.toLowerCase().includes(us))
  );
  const missingRequired = presentation.typicalSymptomsRequired.filter(req =>
    !userSymptomLower.some(us => us.includes(req.toLowerCase()) || req.toLowerCase().includes(us))
  );

  // Check common symptoms
  const presentedCommon = presentation.typicalSymptomsCommon.filter(common =>
    userSymptomLower.some(us => us.includes(common.toLowerCase()) || common.toLowerCase().includes(us))
  );
  const missingCommon = presentation.typicalSymptomsCommon.filter(common =>
    !userSymptomLower.some(us => us.includes(common.toLowerCase()) || common.toLowerCase().includes(us))
  );

  // Completeness = (required met + 0.5 * common met) / total possible
  const requiredScore = presentedRequired.length / presentation.typicalSymptomsRequired.length;
  const commonScore =
    presentation.typicalSymptomsCommon.length > 0
      ? presentedCommon.length / presentation.typicalSymptomsCommon.length
      : 0;
  const completeness = Math.round((requiredScore * 0.7 + commonScore * 0.3) * 100);

  // Atypical if missing required but has some user symptoms
  const isAtypical = missingRequired.length > 0 && userSymptomLower.length > 0;

  return {
    completeness,
    hasRequiredSymptoms: missingRequired.length === 0,
    presentedRequired,
    missingRequired,
    presentedCommon,
    missingCommon,
    atypical: isAtypical,
  };
}

/**
 * Get presentation summary message
 */
export function getPresentationSummary(
  diseaseId: string,
  userSymptoms: string[],
  confidence: number
): string {
  const analysis = calculatePresentationCompleteness(userSymptoms, diseaseId);
  const presentation = TYPICAL_PRESENTATIONS[diseaseId];

  if (!presentation) return '';

  if (analysis.hasRequiredSymptoms && analysis.completeness >= 70) {
    return `✓ Classic presentation: You have the key symptoms`;
  }

  if (analysis.hasRequiredSymptoms && analysis.completeness < 70) {
    return `✓ Has key symptoms but atypical: Missing common features like ${analysis.missingCommon.slice(0, 2).join(', ')}`;
  }

  if (!analysis.hasRequiredSymptoms && analysis.missingRequired.length <= 2) {
    return `⚠️ Incomplete presentation: Missing key symptoms (${analysis.missingRequired.join(', ')})`;
  }

  return `❌ Very different from typical: Missing multiple key symptoms`;
}
