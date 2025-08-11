export interface TriageQuestion {
  id: string;
  question: { en: string; fr: string; sw: string };
  type: 'select' | 'boolean' | 'number';
  options?: { value: string; label: { en: string; fr: string; sw: string } }[];
  unit?: string;
  // This question is relevant if any of these symptoms are present
  relevantSymptoms: string[]; 
}

export const triageQuestions: TriageQuestion[] = [
  {
    id: 'fever_duration',
    question: {
      en: 'How long have you had the fever?',
      fr: 'Depuis combien de temps avez-vous de la fièvre ?',
      sw: 'Una homa kwa muda gani?'
    },
    type: 'select',
    options: [
      { value: '<1day', label: { en: '< 1 day', fr: '< 1 jour', sw: '< siku 1' } },
      { value: '1-3days', label: { en: '1-3 days', fr: '1-3 jours', sw: 'siku 1-3' } },
      { value: '>3days', label: { en: '> 3 days', fr: '> 3 jours', sw: '> siku 3' } }
    ],
    relevantSymptoms: ['fever', 'high fever']
  },
  {
    id: 'fever_temp',
    question: {
      en: 'What is the measured temperature?',
      fr: 'Quelle est la température mesurée ?',
      sw: 'Joto lililopimwa ni ngapi?'
    },
    type: 'number',
    unit: '°C',
    relevantSymptoms: ['fever', 'high fever']
  },
  {
    id: 'cough_type',
    question: {
      en: 'Is the cough dry or does it produce phlegm?',
      fr: 'La toux est-elle sèche ou productive (avec mucosités) ?',
      sw: 'Kikohozi ni kikavu au chenye makohozi?'
    },
    type: 'select',
    options: [
      { value: 'dry', label: { en: 'Dry', fr: 'Sèche', sw: 'Kikavu' } },
      { value: 'productive', label: { en: 'Productive (with phlegm)', fr: 'Productive (avec mucosités)', sw: 'Chenye makohozi' } }
    ],
    relevantSymptoms: ['cough', 'persistent cough']
  },
  {
    id: 'cough_blood',
    question: {
      en: 'Are you coughing up blood?',
      fr: 'Crachez-vous du sang ?',
      sw: 'Unakohoa damu?'
    },
    type: 'boolean',
    relevantSymptoms: ['cough', 'persistent cough', 'coughing blood']
  },
  {
    id: 'headache_type',
    question: {
      en: 'Is the headache throbbing or a constant ache?',
      fr: 'Le mal de tête est-il pulsatile ou une douleur constante ?',
      sw: 'Je, maumivu ya kichwa yanapwita au ni maumivu ya kudumu?'
    },
    type: 'select',
    options: [
      { value: 'throbbing', label: { en: 'Throbbing', fr: 'Pulsatile', sw: 'Yanayopwita' } },
      { value: 'constant', label: { en: 'Constant ache', fr: 'Douleur constante', sw: 'Maumivu ya kudumu' } }
    ],
    relevantSymptoms: ['headache', 'severe headache']
  },
  {
    id: 'diarrhea_blood',
    question: {
      en: 'Is there any blood in the diarrhea?',
      fr: 'Y a-t-il du sang dans la diarrhée ?',
      sw: 'Kuna damu kwenye kuhara?'
    },
    type: 'boolean',
    relevantSymptoms: ['diarrhea']
  },
  {
    id: 'diarrhea_frequency',
    question: {
      en: 'How many times have you had loose stools in the last 24 hours?',
      fr: 'Combien de fois avez-vous eu des selles molles au cours des dernières 24 heures ?',
      sw: 'Umepata choo laini mara ngapi katika masaa 24 yaliyopita?'
    },
    type: 'number',
    unit: 'times',
    relevantSymptoms: ['diarrhea']
  },
  {
    id: 'chest_pain_type',
    question: {
      en: 'How would you describe the chest pain?',
      fr: 'Comment décririez-vous la douleur thoracique ?',
      sw: 'Unawezaje kuelezea maumivu ya kifua?'
    },
    type: 'select',
    options: [
      { value: 'sharp', label: { en: 'Sharp, stabbing', fr: 'Aiguë, en coup de poignard', sw: 'Kali, kama kuchomwa' } },
      { value: 'pressure', label: { en: 'Pressure, tightness', fr: 'Pression, serrement', sw: 'Shinikizo, kubana' } },
      { value: 'burning', label: { en: 'Burning', fr: 'Brûlure', sw: 'Kuungua' } },
      { value: 'dull_ache', label: { en: 'Dull ache', fr: 'Douleur sourde', sw: 'Maumivu butu' } }
    ],
    relevantSymptoms: ['chest pain']
  }
];
