/**
 * Safety module for symptom checker
 * Ensures user safety through emergency detection,
 * confidence thresholds, and appropriate disclaimers
 */

/**
 * Critical emergency symptoms that require immediate action
 * These ALWAYS warrant emergency evaluation regardless of other factors
 */
export const CRITICAL_EMERGENCY_SYMPTOMS = [
  'difficulty breathing',
  'loss of consciousness',
  'unconscious',
  'unresponsive',
  'severe chest pain',
  'severe bleeding',
  'severe hemorrhage',
  'choking',
  'seizures',
  'seizure',
  'severe allergic reaction',
  'anaphylaxis',
  'acute severe abdominal pain',
  'acute abdomen',
  'poisoning',
  'overdose',
  'severe head injury',
  'drowning',
  'electrocution',
  'severe burn',
  'trauma',
  'suicide attempt',
  'self-harm',
];

/**
 * High-priority emergency symptoms
 * Warrant urgent evaluation (within 1-2 hours)
 */
export const URGENT_EMERGENCY_SYMPTOMS = [
  'severe headache with stiff neck',
  'meningitis',
  'stroke symptoms',
  'facial drooping',
  'arm weakness',
  'speech difficulty',
  'acute confusion',
  'severe weakness',
  'acute paralysis',
  'severe eye pain',
  'acute vision loss',
  'signs of stroke',
  'signs of severe infection',
];

/**
 * Safety check results
 */
export interface SafetyCheckResult {
  isEmergency: boolean;
  emergencyLevel: 'critical' | 'urgent' | 'routine';
  requiresImmediateAction: boolean;
  message: string;
  actionRequired: string;
  localEmergencyNumber: string;
}

/**
 * Check if selected symptoms contain critical emergencies
 */
export function detectCriticalEmergency(symptoms: string[]): SafetyCheckResult {
  const symptomLower = symptoms.map(s => s.toLowerCase());

  const hasCritical = symptomLower.some(s =>
    CRITICAL_EMERGENCY_SYMPTOMS.some(critical => s.includes(critical.toLowerCase()))
  );

  if (hasCritical) {
    return {
      isEmergency: true,
      emergencyLevel: 'critical',
      requiresImmediateAction: true,
      message: '🚨 CRITICAL EMERGENCY DETECTED 🚨',
      actionRequired: 'CALL EMERGENCY SERVICES IMMEDIATELY. Do not wait for diagnosis. These symptoms require immediate medical evaluation.',
      localEmergencyNumber: 'Call your local emergency number (911 in US, 112 in EU, 999 in UK, etc.)'
    };
  }

  const hasUrgent = symptomLower.some(s =>
    URGENT_EMERGENCY_SYMPTOMS.some(urgent => s.includes(urgent.toLowerCase()))
  );

  if (hasUrgent) {
    return {
      isEmergency: true,
      emergencyLevel: 'urgent',
      requiresImmediateAction: true,
      message: '⚠️ URGENT EMERGENCY SYMPTOMS ⚠️',
      actionRequired: 'Seek emergency medical care within 1-2 hours. Do not delay treatment.',
      localEmergencyNumber: 'Call your local emergency number'
    };
  }

  return {
    isEmergency: false,
    emergencyLevel: 'routine',
    requiresImmediateAction: false,
    message: '',
    actionRequired: '',
    localEmergencyNumber: ''
  };
}

/**
 * Confidence threshold rules
 * Determines if confidence score is high enough to present results
 */
export interface ConfidenceThresholdResult {
  meetsThreshold: boolean;
  minimumConfidenceRequired: number;
  confidence: number;
  recommendation: string;
}

export function assessConfidenceThreshold(
  confidence: number,
  symptomCount: number,
  matchQuality: 'excellent' | 'good' | 'fair' | 'poor'
): ConfidenceThresholdResult {
  // Minimum confidence required depends on number of symptoms and match quality
  let minimumRequired = 40;

  // With few symptoms, require higher confidence
  if (symptomCount === 1) minimumRequired = 60;
  if (symptomCount === 2) minimumRequired = 50;

  // Match quality affects threshold
  if (matchQuality === 'poor') minimumRequired += 15;
  if (matchQuality === 'fair') minimumRequired += 10;
  if (matchQuality === 'excellent') minimumRequired = Math.max(minimumRequired - 10, 20);

  return {
    meetsThreshold: confidence >= minimumRequired,
    minimumConfidenceRequired: minimumRequired,
    confidence,
    recommendation: confidence < minimumRequired
      ? `Confidence (${confidence}%) is below recommended threshold (${minimumRequired}%). Results should be interpreted with caution and verified by a healthcare professional.`
      : `Confidence level is acceptable for diagnostic guidance.`
  };
}

/**
 * Medical disclaimer for triage results
 */
export const MEDICAL_DISCLAIMER = {
  en: `IMPORTANT MEDICAL DISCLAIMER

This symptom checker tool provides general medical information for educational purposes only. It is NOT a substitute for professional medical advice, diagnosis, or treatment.

DO NOT:
• Use this tool to self-diagnose or self-treat serious conditions
• Ignore symptoms that concern you
• Delay seeking professional medical care
• Share or rely on these results as medical advice

DO:
• Always consult with a qualified healthcare provider for proper diagnosis
• Seek immediate emergency care for critical symptoms
• Provide complete medical history to your healthcare provider
• Get a second opinion if you have concerns

LIMITATIONS:
• This tool cannot examine you physically
• It cannot perform medical tests or imaging
• It cannot consider all possible medical conditions
• Results are based on statistical patterns and may not apply to your individual situation

In any medical emergency, call your local emergency services immediately. This tool is designed to complement, not replace, professional medical judgment.`,

  fr: `AVERTISSEMENT MÉDICAL IMPORTANT

Cet outil de vérificateur de symptômes fournit des informations médicales générales à titre informatif uniquement. Ce n'est PAS un substitut aux conseils, diagnostics ou traitements médicaux professionnels.

NE PAS:
• Utiliser cet outil pour l'auto-diagnostic ou l'automédication
• Ignorer les symptômes qui vous préoccupent
• Retarder la recherche de soins médicaux professionnels
• Partager ou vous fier à ces résultats comme conseils médicaux

FAIRE:
• Toujours consulter un professionnel de la santé qualifié pour un diagnostic approprié
• Chercher des soins d'urgence immédiatement en cas de symptômes critiques
• Fournir un historique médical complet à votre prestataire de santé
• Demander un deuxième avis si vous avez des préoccupations

LIMITES:
• Cet outil ne peut pas vous examiner physiquement
• Il ne peut pas effectuer de tests ou d'imagerie médicale
• Il ne peut pas considérer toutes les conditions médicales possibles
• Les résultats sont basés sur des modèles statistiques qui peuvent ne pas s'appliquer à votre situation individuelle

En cas d'urgence médicale, appelez immédiatement les services d'urgence locaux. Cet outil est conçu pour compléter, et non remplacer, le jugement médical professionnel.`,

  sw: `KANUSHO MUHIMU WA KIMATIBABU

Zana hii ya mkaguzi wa dalili hutoa taarifa za jumla za kimatibabu kwa madhumuni ya kielimu tu. SI mbadala wa ushauri, utambuzi, au matibabu wa kitaalamu wa kimatibabu.

USITUMIE:
• Zana hii kwa ajili ya kujidiagnoza au kujitibu
• Kupuuza dalili zinazokusumbua
• Kuchelewa kutafuta huduma za kitaalamu
• Kushiriki au kutegemea matokeo haya kama ushauri wa kimatibabu

TENDA:
• Daima wasiliana na mtaalamu wa afya aliyehitimu kwa utambuzi sahihi
• Tafuta huduma za dharura mara moja kwa dalili mahimu
• Toa historia kamili ya kimatibabu kwa mtoa huduma wako
• Omba maoni ya pili ikiwa una wasiwasi

VIZUIZI:
• Zana hii haipaswi kuangalia kimwili
• Hainezi fanya majaribio au kupigia picha ya matibabu
• Hainezi kuzingatia hali zote zinazowezekana
• Matokeo yanalingana na mifumo ya takwimu na huenda isitokeane na hali yako

Katika dharura ya kimatibabu, piga simu ya huduma za dharura mara moja. Zana hii imeundwa ili kusambaza, si kubadilisha, hukumu ya kitaalamu wa kimatibabu.`
};

/**
 * Get appropriate disclaimer language
 */
export function getDisclaimerText(language: 'en' | 'fr' | 'sw'): string {
  return MEDICAL_DISCLAIMER[language] || MEDICAL_DISCLAIMER.en;
}

/**
 * Red flag combination checker
 * Certain symptom combinations indicate severe conditions
 */
export const DANGEROUS_SYMPTOM_COMBINATIONS = [
  {
    name: 'Meningitis Alert',
    symptoms: ['fever', 'severe headache', 'stiff neck'],
    threshold: 3,
    action: 'SEEK EMERGENCY CARE - Possible meningitis'
  },
  {
    name: 'Stroke Alert',
    symptoms: ['facial drooping', 'arm weakness', 'speech difficulty'],
    threshold: 2,
    action: 'CALL EMERGENCY SERVICES - Possible stroke'
  },
  {
    name: 'Cardiac Emergency',
    symptoms: ['chest pain', 'shortness of breath', 'diaphoresis', 'nausea'],
    threshold: 2,
    action: 'CALL EMERGENCY SERVICES - Possible heart attack'
  },
  {
    name: 'Severe Dehydration',
    symptoms: ['severe diarrhea', 'severe vomiting', 'dizziness', 'rapid heartbeat', 'dark urine'],
    threshold: 3,
    action: 'SEEK EMERGENCY CARE - Severe dehydration'
  },
  {
    name: 'Sepsis/Severe Infection',
    symptoms: ['high fever', 'rapid heartbeat', 'rapid breathing', 'confusion', 'hypotension'],
    threshold: 3,
    action: 'SEEK EMERGENCY CARE - Possible sepsis'
  },
];

/**
 * Check for dangerous symptom combinations
 */
export function checkDangerousSymptomCombinations(symptoms: string[]): string[] {
  const alerts: string[] = [];
  const symptomLower = symptoms.map(s => s.toLowerCase());

  DANGEROUS_SYMPTOM_COMBINATIONS.forEach(combination => {
    const matchedCount = combination.symptoms.filter(symptom =>
      symptomLower.some(s => s.includes(symptom.toLowerCase()))
    ).length;

    if (matchedCount >= combination.threshold) {
      alerts.push(combination.action);
    }
  });

  return alerts;
}

/**
 * Safety checklist before showing results
 */
export interface SafetyChecklistResult {
  passed: boolean;
  emergencies: string[];
  warnings: string[];
  disclaimerRequired: boolean;
}

export function performComprehensiveSafetyCheck(
  symptoms: string[],
  confidence: number
): SafetyChecklistResult {
  const emergencyCheck = detectCriticalEmergency(symptoms);
  const combinationAlerts = checkDangerousSymptomCombinations(symptoms);

  return {
    passed: !emergencyCheck.requiresImmediateAction && combinationAlerts.length === 0,
    emergencies: emergencyCheck.requiresImmediateAction ? [emergencyCheck.message] : [],
    warnings: combinationAlerts,
    disclaimerRequired: true, // Always show disclaimer
  };
}

/**
 * Infection control and hygiene recommendations
 * Based on presenting symptoms
 */
export const HYGIENE_RECOMMENDATIONS: Record<string, string[]> = {
  'fever': [
    'Isolate if contagious illness suspected',
    'Rest and avoid spreading to others',
    'Practice good hand hygiene'
  ],
  'cough': [
    'Cover mouth when coughing (tissue/elbow)',
    'Isolate if infectious',
    'Wear mask if around vulnerable people'
  ],
  'diarrhea': [
    'Practice frequent handwashing',
    'Use separate bathroom if possible',
    'Do not prepare food for others',
    'Stay hydrated'
  ],
  'skin rash': [
    'Avoid touching/scratching affected area',
    'Wash hands after touching',
    'Do not share personal items'
  ],
};

/**
 * Get hygiene recommendations based on symptoms
 */
export function getHygieneRecommendations(symptoms: string[]): string[] {
  const recommendations = new Set<string>();

  symptoms.forEach(symptom => {
    const lowerSymptom = symptom.toLowerCase();
    Object.entries(HYGIENE_RECOMMENDATIONS).forEach(([key, recs]) => {
      if (lowerSymptom.includes(key)) {
        recs.forEach(rec => recommendations.add(rec));
      }
    });
  });

  return Array.from(recommendations);
}
