/**
 * Disambiguation questions for low-confidence results
 * Helps narrow down between similar presentations
 */

export interface DisambiguationQuestion {
  id: string;
  question: { en: string; fr: string; sw: string };
  type: 'boolean' | 'select';
  options?: { value: string; label: { en: string; fr: string; sw: string } }[];
  diseaseIds: string[]; // Which diseases does this help differentiate
  scoringRules: Record<string, Record<string, number>>; // [diseaseId][answerValue] = confidence_boost
}

export const DISAMBIGUATION_QUESTIONS: Record<string, DisambiguationQuestion> = {
  'fever-onset-speed': {
    id: 'fever-onset-speed',
    question: {
      en: 'How quickly did the fever start?',
      fr: 'À quelle vitesse la fièvre a-t-elle commencé?',
      sw: 'Homa ilianza haraka vipi?'
    },
    type: 'select',
    options: [
      {
        value: 'sudden',
        label: { en: 'Very suddenly (within minutes to hours)', fr: 'Très soudainement (en minutes à heures)', sw: 'Haraka sana (dakika hadi saa)' }
      },
      {
        value: 'gradual',
        label: { en: 'Gradually (over a day or two)', fr: 'Graduellement (sur un ou deux jours)', sw: 'Polepole (siku au mbili)' }
      },
      {
        value: 'insidious',
        label: { en: 'Very gradually (weeks)', fr: 'Très graduellement (semaines)', sw: 'Polepole sana (wiki)' }
      }
    ],
    diseaseIds: ['malaria', 'typhoid', 'tuberculosis', 'pneumonia'],
    scoringRules: {
      'malaria': { 'sudden': 1.3, 'gradual': 1.0, 'insidious': 0.7 },
      'typhoid': { 'sudden': 0.8, 'gradual': 1.3, 'insidious': 1.0 },
      'tuberculosis': { 'sudden': 0.5, 'gradual': 0.8, 'insidious': 1.5 },
      'pneumonia': { 'sudden': 1.2, 'gradual': 1.0, 'insidious': 0.6 },
    }
  },

  'fever-pattern': {
    id: 'fever-pattern',
    question: {
      en: 'How does the fever behave?',
      fr: 'Comment la fièvre se comporte-t-elle?',
      sw: 'Homa inakubiri nini?'
    },
    type: 'select',
    options: [
      {
        value: 'continuous',
        label: { en: 'Continuous (always hot)', fr: 'Continue (toujours chaud)', sw: 'Daima (joto daima)' }
      },
      {
        value: 'cyclical',
        label: { en: 'Cyclical (hot then normal, repeating)', fr: 'Cyclique (chaud puis normal, répétition)', sw: 'Mzunguko (joto halafu kawaida, kurudia)' }
      },
      {
        value: 'remittent',
        label: { en: 'Remittent (high at night, normal during day)', fr: 'Rémittente (élevée la nuit)', sw: 'Jioni kali, asubuhi kawaida' }
      }
    ],
    diseaseIds: ['malaria', 'typhoid', 'tuberculosis', 'pneumonia', 'dengue'],
    scoringRules: {
      'malaria': { 'cyclical': 1.5, 'continuous': 1.0, 'remittent': 0.9 },
      'typhoid': { 'remittent': 1.4, 'continuous': 1.1, 'cyclical': 0.7 },
      'tuberculosis': { 'remittent': 1.3, 'continuous': 1.0, 'cyclical': 0.6 },
      'pneumonia': { 'continuous': 1.2, 'remittent': 0.9, 'cyclical': 0.6 },
      'dengue': { 'continuous': 1.3, 'remittent': 1.0, 'cyclical': 0.7 },
    }
  },

  'meningitis-stiff-neck': {
    id: 'meningitis-stiff-neck',
    question: {
      en: 'Can you bend your neck forward to touch your chin to your chest?',
      fr: 'Pouvez-vous plier votre cou vers l\'avant pour toucher votre menton à votre poitrine?',
      sw: 'Unaweza kulipua koo kwako mbele ili kugusa ki mento yako kwenye breasti?'
    },
    type: 'boolean',
    diseaseIds: ['meningitis', 'common-cold', 'tension-headache'],
    scoringRules: {
      'meningitis': { 'false': 1.5, 'true': 0.7 },
      'common-cold': { 'true': 1.2, 'false': 0.8 },
      'tension-headache': { 'true': 1.0, 'false': 0.7 },
    }
  },

  'chest-pain-type': {
    id: 'chest-pain-type',
    question: {
      en: 'What type of chest pain?',
      fr: 'Quel type de douleur thoracique?',
      sw: 'Aina gani ya maumivu ya kifua?'
    },
    type: 'select',
    options: [
      {
        value: 'pressure',
        label: { en: 'Pressure/crushing/heavy', fr: 'Pression/écrasement/lourd', sw: 'Shinikizo/kubana/uzani' }
      },
      {
        value: 'sharp',
        label: { en: 'Sharp/stabbing', fr: 'Aigu/coup de poignard', sw: 'Kali/kama kuchomwa' }
      },
      {
        value: 'pleuritic',
        label: { en: 'Sharp, worse with breathing', fr: 'Aiguë, pire en respirant', sw: 'Kali, mbaya sana wakati wa kupumua' }
      }
    ],
    diseaseIds: ['acute-coronary-syndrome', 'pneumonia', 'pleurisy'],
    scoringRules: {
      'acute-coronary-syndrome': { 'pressure': 1.5, 'sharp': 0.6, 'pleuritic': 0.5 },
      'pneumonia': { 'pleuritic': 1.4, 'pressure': 0.7, 'sharp': 0.8 },
      'pleurisy': { 'pleuritic': 1.6, 'pressure': 0.5, 'sharp': 0.8 },
    }
  },

  'abdominal-pain-location': {
    id: 'abdominal-pain-location',
    question: {
      en: 'Where is the abdominal pain?',
      fr: 'Où se situe la douleur abdominale?',
      sw: 'Maumivu ya tumbo yako yako wapi?'
    },
    type: 'select',
    options: [
      {
        value: 'rlq',
        label: { en: 'Right lower area', fr: 'Zone inférieure droite', sw: 'Chini kwenye kulia' }
      },
      {
        value: 'epigastric',
        label: { en: 'Upper middle (stomach area)', fr: 'Milieu supérieur (région de l\'estomac)', sw: 'Juu na katikati (tumbo)' }
      },
      {
        value: 'diffuse',
        label: { en: 'Throughout the abdomen', fr: 'Dans tout l\'abdomen', sw: 'Kote tumbo' }
      }
    ],
    diseaseIds: ['appendicitis', 'acute-pancreatitis', 'gastroenteritis'],
    scoringRules: {
      'appendicitis': { 'rlq': 1.6, 'epigastric': 0.6, 'diffuse': 0.7 },
      'acute-pancreatitis': { 'epigastric': 1.5, 'rlq': 0.5, 'diffuse': 1.0 },
      'gastroenteritis': { 'diffuse': 1.3, 'epigastric': 0.8, 'rlq': 0.6 },
    }
  },

  'cough-characteristics': {
    id: 'cough-characteristics',
    question: {
      en: 'What type of cough?',
      fr: 'Quel type de toux?',
      sw: 'Aina gani ya kikohozi?'
    },
    type: 'select',
    options: [
      {
        value: 'dry',
        label: { en: 'Dry/non-productive', fr: 'Sèche/non-productive', sw: 'Kikavu' }
      },
      {
        value: 'productive',
        label: { en: 'Productive with phlegm/sputum', fr: 'Productive avec mucosités', sw: 'Chenye makohozi' }
      },
      {
        value: 'bloody',
        label: { en: 'Coughing blood', fr: 'Toux avec sang', sw: 'Kukohoa damu' }
      }
    ],
    diseaseIds: ['common-cold', 'pneumonia', 'tuberculosis', 'covid-19'],
    scoringRules: {
      'common-cold': { 'dry': 1.3, 'productive': 1.0, 'bloody': 0.2 },
      'pneumonia': { 'productive': 1.4, 'dry': 0.8, 'bloody': 1.1 },
      'tuberculosis': { 'bloody': 1.6, 'productive': 1.2, 'dry': 0.7 },
      'covid-19': { 'dry': 1.4, 'productive': 0.9, 'bloody': 0.5 },
    }
  },

  'travel-or-endemic': {
    id: 'travel-or-endemic',
    question: {
      en: 'Have you traveled to areas with malaria, typhoid, or dengue in the past month?',
      fr: 'Avez-vous voyagé dans des zones avec paludisme, fièvre typhoïde ou dengue le mois dernier?',
      sw: 'Je umesafiri kwenye maeneo na malaria, typhoid, au dengue miezi iliyopita?'
    },
    type: 'boolean',
    diseaseIds: ['malaria', 'typhoid', 'dengue'],
    scoringRules: {
      'malaria': { 'true': 1.4, 'false': 0.8 },
      'typhoid': { 'true': 1.3, 'false': 0.7 },
      'dengue': { 'true': 1.3, 'false': 0.6 },
    }
  },

  'contact-with-sick': {
    id: 'contact-with-sick',
    question: {
      en: 'Have you had close contact with someone who was sick with similar symptoms?',
      fr: 'Avez-vous eu un contact étroit avec quelqu\'un qui avait des symptômes similaires?',
      sw: 'Je umekutana karibu na mtu aliyekuwa mgonjwa na dalili sawa?'
    },
    type: 'boolean',
    diseaseIds: ['covid-19', 'influenza', 'common-cold', 'meningitis'],
    scoringRules: {
      'covid-19': { 'true': 1.3, 'false': 0.8 },
      'influenza': { 'true': 1.3, 'false': 0.8 },
      'common-cold': { 'true': 1.2, 'false': 0.9 },
      'meningitis': { 'true': 1.2, 'false': 0.9 },
    }
  },

  'weight-loss-duration': {
    id: 'weight-loss-duration',
    question: {
      en: 'How long have you had weight loss?',
      fr: 'Depuis combien de temps avez-vous une perte de poids?',
      sw: 'Umepungua uzito kwa muda gani?'
    },
    type: 'select',
    options: [
      {
        value: 'none',
        label: { en: 'No weight loss', fr: 'Pas de perte de poids', sw: 'Hakuna kupungua uzito' }
      },
      {
        value: 'recent',
        label: { en: 'Recent (past 2 weeks)', fr: 'Récent (2 dernières semaines)', sw: 'Hivi karibuni (wiki 2)' }
      },
      {
        value: 'chronic',
        label: { en: 'Chronic (weeks to months)', fr: 'Chronique (semaines à mois)', sw: 'Muda mrefu (wiki hadi miezi)' }
      }
    ],
    diseaseIds: ['tuberculosis', 'hiv-aids', 'cancer'],
    scoringRules: {
      'tuberculosis': { 'chronic': 1.4, 'recent': 1.0, 'none': 0.7 },
      'hiv-aids': { 'chronic': 1.3, 'recent': 0.9, 'none': 0.6 },
      'cancer': { 'chronic': 1.4, 'recent': 1.0, 'none': 0.6 },
    }
  },
};

/**
 * Get relevant disambiguation questions for a set of diseases
 */
export function getDisambiguationQuestions(diseaseIds: string[]): DisambiguationQuestion[] {
  const relevantQuestions = Object.values(DISAMBIGUATION_QUESTIONS).filter(q =>
    q.diseaseIds.some(dId => diseaseIds.includes(dId))
  );

  // Prioritize questions that help differentiate between the specific diseases
  return relevantQuestions.sort((a, b) => {
    const aCount = a.diseaseIds.filter(d => diseaseIds.includes(d)).length;
    const bCount = b.diseaseIds.filter(d => diseaseIds.includes(d)).length;
    return bCount - aCount; // More relevant questions first
  });
}

/**
 * Apply disambiguation scores to results
 */
export function applyDisambiguationScores(
  diseaseId: string,
  questionAnswers: Record<string, string | boolean>
): number {
  let scoreMultiplier = 1.0;

  Object.entries(questionAnswers).forEach(([questionId, answer]) => {
    const question = DISAMBIGUATION_QUESTIONS[questionId];
    if (question && question.scoringRules[diseaseId]) {
      const answerStr = String(answer);
      scoreMultiplier *= question.scoringRules[diseaseId][answerStr] || 1.0;
    }
  });

  return scoreMultiplier;
}
