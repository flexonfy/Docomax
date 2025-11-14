/**
 * Comprehensive metadata for symptoms to improve matching and accuracy
 */
export interface SymptomInfo {
  name: string;
  severity: 'mild' | 'moderate' | 'severe' | 'critical';
  onsetType: 'acute' | 'gradual' | 'sudden' | 'variable';
  isRedFlag: boolean;
  relatedDiseases: string[];
  conflictsWith: string[];
  commonlyOccursWith: string[];
  bodySystem: string;
  notes: string;
}

export const SYMPTOM_DATABASE: Record<string, SymptomInfo> = {
  // Critical/Emergency symptoms
  'difficulty breathing': {
    name: 'Difficulty breathing',
    severity: 'critical',
    onsetType: 'sudden',
    isRedFlag: true,
    relatedDiseases: ['pneumonia', 'asthma', 'anaphylaxis', 'pulmonary-embolism', 'covid-19'],
    conflictsWith: [],
    commonlyOccursWith: ['chest pain', 'rapid heartbeat', 'wheezing'],
    bodySystem: 'respiratory',
    notes: 'Requires immediate medical attention',
  },
  'chest pain': {
    name: 'Chest pain',
    severity: 'severe',
    onsetType: 'sudden',
    isRedFlag: true,
    relatedDiseases: ['heart-attack', 'angina', 'pneumonia', 'pulmonary-embolism', 'pleurisy'],
    conflictsWith: [],
    commonlyOccursWith: ['difficulty breathing', 'rapid heartbeat', 'shortness of breath'],
    bodySystem: 'cardiovascular',
    notes: 'High priority symptom',
  },
  'loss of consciousness': {
    name: 'Loss of consciousness',
    severity: 'critical',
    onsetType: 'sudden',
    isRedFlag: true,
    relatedDiseases: ['stroke', 'seizure', 'cardiac-arrest', 'severe-shock', 'hypoglycemia'],
    conflictsWith: [],
    commonlyOccursWith: ['seizures', 'severe headache'],
    bodySystem: 'neurological',
    notes: 'Call emergency services immediately',
  },
  'severe bleeding': {
    name: 'Severe bleeding',
    severity: 'critical',
    onsetType: 'sudden',
    isRedFlag: true,
    relatedDiseases: ['hemorrhage', 'coagulopathy', 'trauma'],
    conflictsWith: [],
    commonlyOccursWith: ['dizziness', 'rapid heartbeat', 'weakness'],
    bodySystem: 'circulatory',
    notes: 'Apply direct pressure and seek emergency care',
  },
  'seizures': {
    name: 'Seizures',
    severity: 'critical',
    onsetType: 'sudden',
    isRedFlag: true,
    relatedDiseases: ['epilepsy', 'cerebral-malaria', 'high-fever', 'eclampsia', 'meningitis'],
    conflictsWith: [],
    commonlyOccursWith: ['loss of consciousness', 'fever', 'headache'],
    bodySystem: 'neurological',
    notes: 'Protect airway, call emergency services',
  },

  // High severity symptoms
  'severe headache': {
    name: 'Severe headache',
    severity: 'severe',
    onsetType: 'sudden',
    isRedFlag: true,
    relatedDiseases: ['meningitis', 'stroke', 'migraine', 'cerebral-malaria', 'hypertensive-crisis'],
    conflictsWith: [],
    commonlyOccursWith: ['fever', 'stiff neck', 'confusion', 'sensitivity to light'],
    bodySystem: 'neurological',
    notes: 'Especially concerning with fever and stiff neck (meningitis)',
  },
  'stiff neck': {
    name: 'Stiff neck',
    severity: 'severe',
    onsetType: 'acute',
    isRedFlag: true,
    relatedDiseases: ['meningitis', 'subarachnoid-hemorrhage', 'cervical-spondylosis'],
    conflictsWith: [],
    commonlyOccursWith: ['severe headache', 'fever', 'confusion'],
    bodySystem: 'neurological',
    notes: 'Red flag for meningitis when combined with fever and headache',
  },
  'high fever': {
    name: 'High fever (>39°C)',
    severity: 'severe',
    onsetType: 'acute',
    isRedFlag: true,
    relatedDiseases: ['malaria', 'typhoid', 'meningitis', 'severe-pneumonia', 'sepsis'],
    conflictsWith: ['hypothermia'],
    commonlyOccursWith: ['chills', 'fatigue', 'body aches'],
    bodySystem: 'general',
    notes: 'Especially concerning in malaria-endemic areas',
  },
  'persistent vomiting': {
    name: 'Persistent vomiting',
    severity: 'severe',
    onsetType: 'acute',
    isRedFlag: true,
    relatedDiseases: ['dehydration', 'gastroenteritis', 'appendicitis', 'meningitis', 'cholera'],
    conflictsWith: [],
    commonlyOccursWith: ['diarrhea', 'abdominal pain', 'fever'],
    bodySystem: 'gastrointestinal',
    notes: 'Risk of dehydration, monitor fluid intake',
  },
  'coughing blood': {
    name: 'Coughing blood',
    severity: 'severe',
    onsetType: 'acute',
    isRedFlag: true,
    relatedDiseases: ['tuberculosis', 'pneumonia', 'lung-cancer', 'bronchitis'],
    conflictsWith: [],
    commonlyOccursWith: ['persistent cough', 'fever', 'night sweats', 'chest pain'],
    bodySystem: 'respiratory',
    notes: 'Requires investigation for TB in endemic areas',
  },
  'severe abdominal pain': {
    name: 'Severe abdominal pain',
    severity: 'severe',
    onsetType: 'sudden',
    isRedFlag: true,
    relatedDiseases: ['appendicitis', 'ectopic-pregnancy', 'perforated-ulcer', 'intussusception'],
    conflictsWith: [],
    commonlyOccursWith: ['vomiting', 'fever', 'bloody stools'],
    bodySystem: 'gastrointestinal',
    notes: 'Surgical emergency if acute onset',
  },
  'bloody stools': {
    name: 'Bloody stools',
    severity: 'severe',
    onsetType: 'acute',
    isRedFlag: true,
    relatedDiseases: ['dysentery', 'hemorrhoids', 'inflammatory-bowel-disease', 'cholera'],
    conflictsWith: [],
    commonlyOccursWith: ['diarrhea', 'abdominal pain', 'fever'],
    bodySystem: 'gastrointestinal',
    notes: 'Assess for infection vs. other causes',
  },
  'severe dehydration': {
    name: 'Severe dehydration',
    severity: 'severe',
    onsetType: 'acute',
    isRedFlag: true,
    relatedDiseases: ['cholera', 'severe-diarrhea', 'heat-stroke', 'burns'],
    conflictsWith: [],
    commonlyOccursWith: ['diarrhea', 'vomiting', 'dizziness', 'rapid heartbeat'],
    bodySystem: 'general',
    notes: 'Requires IV fluids in severe cases',
  },

  // Moderate severity symptoms
  'fever': {
    name: 'Fever',
    severity: 'moderate',
    onsetType: 'acute',
    isRedFlag: false,
    relatedDiseases: ['malaria', 'pneumonia', 'influenza', 'covid-19', 'urinary-tract-infection'],
    conflictsWith: ['hypothermia'],
    commonlyOccursWith: ['chills', 'body aches', 'fatigue'],
    bodySystem: 'general',
    notes: 'Temperature >37.5°C (99.5°F)',
  },
  'cough': {
    name: 'Cough',
    severity: 'moderate',
    onsetType: 'acute',
    isRedFlag: false,
    relatedDiseases: ['common-cold', 'pneumonia', 'bronchitis', 'asthma', 'tuberculosis'],
    conflictsWith: [],
    commonlyOccursWith: ['sore throat', 'runny nose', 'fever'],
    bodySystem: 'respiratory',
    notes: 'Assess for dry vs. productive cough',
  },
  'headache': {
    name: 'Headache',
    severity: 'moderate',
    onsetType: 'variable',
    isRedFlag: false,
    relatedDiseases: ['migraine', 'tension-headache', 'sinusitis', 'influenza', 'fever'],
    conflictsWith: [],
    commonlyOccursWith: ['neck stiffness', 'sensitivity to light', 'nausea'],
    bodySystem: 'neurological',
    notes: 'Common in many illnesses',
  },
  'body aches': {
    name: 'Body aches',
    severity: 'moderate',
    onsetType: 'acute',
    isRedFlag: false,
    relatedDiseases: ['influenza', 'malaria', 'dengue', 'covid-19', 'common-cold'],
    conflictsWith: [],
    commonlyOccursWith: ['fever', 'fatigue', 'headache'],
    bodySystem: 'musculoskeletal',
    notes: 'Myalgia, common in viral illnesses',
  },
  'sore throat': {
    name: 'Sore throat',
    severity: 'mild',
    onsetType: 'acute',
    isRedFlag: false,
    relatedDiseases: ['strep-throat', 'pharyngitis', 'common-cold', 'mononucleosis'],
    conflictsWith: [],
    commonlyOccursWith: ['fever', 'cough', 'runny nose'],
    bodySystem: 'respiratory',
    notes: 'Usually viral, but assess for bacterial',
  },
  'fatigue': {
    name: 'Fatigue',
    severity: 'mild',
    onsetType: 'gradual',
    isRedFlag: false,
    relatedDiseases: ['anemia', 'hypothyroidism', 'depression', 'sleep-apnea', 'cancer'],
    conflictsWith: [],
    commonlyOccursWith: ['weakness', 'poor concentration', 'irritability'],
    bodySystem: 'general',
    notes: 'Non-specific symptom, needs context',
  },

  // Mild-moderate symptoms
  'nausea': {
    name: 'Nausea',
    severity: 'mild',
    onsetType: 'variable',
    isRedFlag: false,
    relatedDiseases: ['gastroenteritis', 'migraines', 'food-poisoning', 'pregnancy'],
    conflictsWith: [],
    commonlyOccursWith: ['vomiting', 'abdominal pain', 'diarrhea'],
    bodySystem: 'gastrointestinal',
    notes: 'Precursor to vomiting',
  },
  'vomiting': {
    name: 'Vomiting',
    severity: 'moderate',
    onsetType: 'acute',
    isRedFlag: false,
    relatedDiseases: ['gastroenteritis', 'food-poisoning', 'migraines', 'appendicitis'],
    conflictsWith: [],
    commonlyOccursWith: ['nausea', 'diarrhea', 'abdominal pain'],
    bodySystem: 'gastrointestinal',
    notes: 'Monitor for dehydration',
  },
  'diarrhea': {
    name: 'Diarrhea',
    severity: 'moderate',
    onsetType: 'acute',
    isRedFlag: false,
    relatedDiseases: ['gastroenteritis', 'cholera', 'dysentery', 'food-poisoning', 'ibs'],
    conflictsWith: ['constipation'],
    commonlyOccursWith: ['nausea', 'vomiting', 'abdominal pain', 'fever'],
    bodySystem: 'gastrointestinal',
    notes: 'Assess hydration status',
  },
  'chills': {
    name: 'Chills',
    severity: 'mild',
    onsetType: 'acute',
    isRedFlag: false,
    relatedDiseases: ['fever', 'malaria', 'typhoid', 'pneumonia'],
    conflictsWith: [],
    commonlyOccursWith: ['fever', 'body aches'],
    bodySystem: 'general',
    notes: 'Usually accompanied by fever',
  },
  'weakness': {
    name: 'Weakness',
    severity: 'moderate',
    onsetType: 'gradual',
    isRedFlag: false,
    relatedDiseases: ['anemia', 'myopathy', 'stroke', 'guillain-barre-syndrome'],
    conflictsWith: [],
    commonlyOccursWith: ['fatigue', 'dizziness'],
    bodySystem: 'musculoskeletal',
    notes: 'Assess for focal vs. generalized weakness',
  },
  'dizziness': {
    name: 'Dizziness',
    severity: 'mild',
    onsetType: 'variable',
    isRedFlag: false,
    relatedDiseases: ['anemia', 'low-blood-pressure', 'inner-ear-infection', 'anxiety'],
    conflictsWith: [],
    commonlyOccursWith: ['weakness', 'blurred vision', 'headache'],
    bodySystem: 'neurological',
    notes: 'Assess for vertigo vs. lightheadedness',
  },
  'rapid heartbeat': {
    name: 'Rapid heartbeat',
    severity: 'moderate',
    onsetType: 'acute',
    isRedFlag: false,
    relatedDiseases: ['anemia', 'hyperthyroidism', 'fever', 'anxiety', 'arrhythmia'],
    conflictsWith: ['bradycardia'],
    commonlyOccursWith: ['shortness of breath', 'dizziness', 'chest pain'],
    bodySystem: 'cardiovascular',
    notes: '>100 bpm at rest (tachycardia)',
  },
  'shortness of breath': {
    name: 'Shortness of breath',
    severity: 'moderate',
    onsetType: 'variable',
    isRedFlag: false,
    relatedDiseases: ['pneumonia', 'asthma', 'heart-failure', 'anemia', 'anxiety'],
    conflictsWith: [],
    commonlyOccursWith: ['chest pain', 'rapid heartbeat', 'cough'],
    bodySystem: 'respiratory',
    notes: 'Dyspnea, assess severity',
  },
  'runny nose': {
    name: 'Runny nose',
    severity: 'mild',
    onsetType: 'acute',
    isRedFlag: false,
    relatedDiseases: ['common-cold', 'allergies', 'sinusitis', 'influenza'],
    conflictsWith: [],
    commonlyOccursWith: ['cough', 'sore throat', 'sneezing'],
    bodySystem: 'respiratory',
    notes: 'Rhinorrhea, usually viral',
  },
  'loss of appetite': {
    name: 'Loss of appetite',
    severity: 'mild',
    onsetType: 'gradual',
    isRedFlag: false,
    relatedDiseases: ['depression', 'cancer', 'hepatitis', 'tuberculosis', 'hyperthyroidism'],
    conflictsWith: ['excessive hunger'],
    commonlyOccursWith: ['weight loss', 'fatigue', 'nausea'],
    bodySystem: 'general',
    notes: 'Non-specific, needs investigation if persistent',
  },
  'night sweats': {
    name: 'Night sweats',
    severity: 'mild',
    onsetType: 'gradual',
    isRedFlag: false,
    relatedDiseases: ['tuberculosis', 'hiv-aids', 'lymphoma', 'menopause', 'hyperthyroidism'],
    conflictsWith: [],
    commonlyOccursWith: ['fever', 'weight loss', 'fatigue'],
    bodySystem: 'general',
    notes: 'Can be soaking, often TB or infection',
  },
  'weight loss': {
    name: 'Weight loss',
    severity: 'mild',
    onsetType: 'gradual',
    isRedFlag: false,
    relatedDiseases: ['tuberculosis', 'hiv-aids', 'cancer', 'diabetes', 'hyperthyroidism'],
    conflictsWith: [],
    commonlyOccursWith: ['fatigue', 'loss of appetite', 'night sweats'],
    bodySystem: 'general',
    notes: 'Unintentional weight loss significant',
  },
  'skin rash': {
    name: 'Skin rash',
    severity: 'mild',
    onsetType: 'acute',
    isRedFlag: false,
    relatedDiseases: ['measles', 'chickenpox', 'dengue', 'hiv', 'drug-reaction', 'eczema'],
    conflictsWith: [],
    commonlyOccursWith: ['fever', 'itching'],
    bodySystem: 'skin',
    notes: 'Assess for type, location, and spread',
  },
  'itching': {
    name: 'Itching',
    severity: 'mild',
    onsetType: 'variable',
    isRedFlag: false,
    relatedDiseases: ['allergies', 'eczema', 'scabies', 'malaria', 'eczema'],
    conflictsWith: [],
    commonlyOccursWith: ['skin rash', 'redness'],
    bodySystem: 'skin',
    notes: 'Pruritus, often allergic or parasitic',
  },
  'confusion': {
    name: 'Confusion',
    severity: 'severe',
    onsetType: 'acute',
    isRedFlag: true,
    relatedDiseases: ['meningitis', 'cerebral-malaria', 'stroke', 'sepsis', 'delirium'],
    conflictsWith: [],
    commonlyOccursWith: ['fever', 'severe headache', 'stiff neck'],
    bodySystem: 'neurological',
    notes: 'Red flag, assess mental status',
  },
  'abdominal pain': {
    name: 'Abdominal pain',
    severity: 'moderate',
    onsetType: 'variable',
    isRedFlag: false,
    relatedDiseases: ['gastroenteritis', 'appendicitis', 'cholera', 'ulcer', 'ibs'],
    conflictsWith: [],
    commonlyOccursWith: ['diarrhea', 'vomiting', 'fever'],
    bodySystem: 'gastrointestinal',
    notes: 'Assess location and character',
  },
  'constipation': {
    name: 'Constipation',
    severity: 'mild',
    onsetType: 'gradual',
    isRedFlag: false,
    relatedDiseases: ['ibs', 'hypothyroidism', 'medication-side-effect'],
    conflictsWith: ['diarrhea'],
    commonlyOccursWith: ['bloating', 'abdominal pain'],
    bodySystem: 'gastrointestinal',
    notes: '<3 bowel movements per week',
  },
};

/**
 * Get symptoms by body system for categorized selection
 */
export function getSymptomsByBodySystem(system: string): string[] {
  return Object.entries(SYMPTOM_DATABASE)
    .filter(([_, info]) => info.bodySystem === system)
    .map(([name, _]) => name);
}

/**
 * Get all body systems for UI organization
 */
export const BODY_SYSTEMS = [
  'general',
  'respiratory',
  'cardiovascular',
  'gastrointestinal',
  'neurological',
  'skin',
  'musculoskeletal',
  'urological',
];

/**
 * Check if symptom is a red flag
 */
export function isRedFlagSymptom(symptom: string): boolean {
  const info = SYMPTOM_DATABASE[symptom.toLowerCase()];
  return info?.isRedFlag ?? false;
}

/**
 * Get related diseases for a symptom
 */
export function getRelatedDiseases(symptom: string): string[] {
  const info = SYMPTOM_DATABASE[symptom.toLowerCase()];
  return info?.relatedDiseases ?? [];
}
