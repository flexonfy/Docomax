export interface TriageQuestion {
  id: string;
  question: { en: string; fr: string; sw: string };
  type: 'select' | 'boolean' | 'number';
  options?: { value: string; label: { en: string; fr: string; sw: string } }[];
  unit?: string;
  relevantSymptoms: string[]; 
}

export const triageQuestions: TriageQuestion[] = [
  {
    id: 'fever_duration',
    question: {
      en: 'How long have you been feeling hot/feverish?',
      fr: 'Depuis combien de temps vous vous sentez chaud/fièvreux ?',
      sw: 'Umejisikia joto kwa muda gani?'
    },
    type: 'select',
    options: [
      { value: '<1day', label: { en: 'Less than 1 day', fr: 'Moins de 1 jour', sw: 'Chini ya siku 1' } },
      { value: '1-3days', label: { en: '1 to 3 days', fr: '1 à 3 jours', sw: 'Siku 1 hadi 3' } },
      { value: '>3days', label: { en: 'More than 3 days', fr: 'Plus de 3 jours', sw: 'Zaidi ya siku 3' } }
    ],
    relevantSymptoms: ['fever', 'high fever']
  },
  {
    id: 'fever_feel',
    question: {
      en: 'How is your fever?',
      fr: 'Comment est votre fièvre ?',
      sw: 'Joto lako ni kama nini?'
    },
    type: 'select',
    options: [
      { value: 'normal', label: { en: 'Normal (you feel normal)', fr: 'Normal', sw: 'Kawaida' } },
      { value: 'mild', label: { en: 'Mild (feels a little warm)', fr: 'Légère', sw: 'Kidogo' } },
      { value: 'high', label: { en: 'High (feels very hot)', fr: 'Élevée', sw: 'Joto sana' } }
    ],
    relevantSymptoms: ['fever', 'high fever']
  },
  {
    id: 'cough_type',
    question: {
      en: 'Is your cough dry or do you cough up fluids?',
      fr: 'Votre toux est-elle sèche ou avez-vous des mucosités ?',
      sw: 'Kikohozi chako ni kikavu au una kileo?'
    },
    type: 'select',
    options: [
      { value: 'dry', label: { en: 'Dry cough (no fluids)', fr: 'Toux sèche', sw: 'Kikohozi kikavu' } },
      { value: 'productive', label: { en: 'Wet cough (coughing up fluids)', fr: 'Toux productive', sw: 'Kikohozi na kileo' } }
    ],
    relevantSymptoms: ['cough', 'persistent cough']
  },
  {
    id: 'cough_blood',
    question: {
      en: 'Is there any blood in what you cough up?',
      fr: 'Y a-t-il du sang quand vous toussez ?',
      sw: 'Kuna damu wakati unakohoa?'
    },
    type: 'boolean',
    relevantSymptoms: ['cough', 'persistent cough', 'coughing blood']
  },
  {
    id: 'headache_severity',
    question: {
      en: 'How bad is your headache?',
      fr: 'Quelle est la gravité de votre mal de tête ?',
      sw: 'Je, maumivu ya kichwa ni makali kama nini?'
    },
    type: 'select',
    options: [
      { value: 'mild', label: { en: 'Mild (can manage)', fr: 'Légère', sw: 'Kidogo' } },
      { value: 'moderate', label: { en: 'Moderate (bothersome)', fr: 'Modérée', sw: 'Kawaida' } },
      { value: 'severe', label: { en: 'Severe (very painful)', fr: 'Grave', sw: 'Makali sana' } }
    ],
    relevantSymptoms: ['headache', 'severe headache']
  },
  {
    id: 'stiff_neck',
    question: {
      en: 'Can you touch your chin to your chest?',
      fr: 'Pouvez-vous toucher votre menton à votre poitrine ?',
      sw: 'Unaweza kusimama na kujifanya kinyumnyum?'
    },
    type: 'boolean',
    relevantSymptoms: ['stiff neck', 'neck pain', 'headache', 'severe headache']
  },
  {
    id: 'diarrhea_blood',
    question: {
      en: 'Is there blood in your stool?',
      fr: 'Y a-t-il du sang dans vos selles ?',
      sw: 'Kuna damu kwenye choo chako?'
    },
    type: 'boolean',
    relevantSymptoms: ['diarrhea']
  },
  {
    id: 'diarrhea_frequency',
    question: {
      en: 'How many loose stools today?',
      fr: 'Combien de selles molles avez-vous eu aujourd\'hui ?',
      sw: 'Uma pata choo laini mara ngapi leo?'
    },
    type: 'select',
    options: [
      { value: '1-3', label: { en: '1-3 times', fr: '1-3 fois', sw: 'Mara 1-3' } },
      { value: '4-6', label: { en: '4-6 times', fr: '4-6 fois', sw: 'Mara 4-6' } },
      { value: '7plus', label: { en: 'More than 7 times', fr: 'Plus de 7 fois', sw: 'Zaidi ya mara 7' } }
    ],
    relevantSymptoms: ['diarrhea']
  },
  {
    id: 'chest_pain_type',
    question: {
      en: 'What does your chest pain feel like?',
      fr: 'À quoi ressemble votre douleur thoracique ?',
      sw: 'Maumivu ya kifua yanavyojifahamu kama nini?'
    },
    type: 'select',
    options: [
      { value: 'sharp', label: { en: 'Sharp stabbing pain', fr: 'Douleur aiguë', sw: 'Maumivu makali' } },
      { value: 'pressure', label: { en: 'Feeling of pressure/squeezing', fr: 'Sensation de pression', sw: 'Kumaa/kubana' } },
      { value: 'burning', label: { en: 'Burning feeling', fr: 'Sensation de brûlure', sw: 'Kuungua' } },
      { value: 'dull_ache', label: { en: 'Dull, aching pain', fr: 'Douleur sourde', sw: 'Maumivu butu' } }
    ],
    relevantSymptoms: ['chest pain']
  },
  {
    id: 'body_aches',
    question: {
      en: 'Do your muscles and joints hurt all over?',
      fr: 'Avez-vous des douleurs musculaires et articulaires partout ?',
      sw: 'Je, misuli na viungo vyako inauma kote?'
    },
    type: 'boolean',
    relevantSymptoms: ['body aches', 'muscle pain', 'joint pain']
  },
  {
    id: 'chills',
    question: {
      en: 'Do you have chills or feel very cold?',
      fr: 'Avez-vous des frissons ou vous sentez très froid ?',
      sw: 'Una baridi au unajisikia baridi sana?'
    },
    type: 'boolean',
    relevantSymptoms: ['chills', 'fever', 'high fever']
  }
];
