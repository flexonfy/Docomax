export interface SymptomQuestion {
  question: { en: string; fr: string; sw: string };
  type: 'number' | 'select' | 'boolean';
  options?: { en: string; fr: string; sw: string }[];
  unit?: string;
}

export const symptomQuestions: Record<string, SymptomQuestion[]> = {
  'fever': [
    {
      question: { en: 'What is the temperature?', fr: 'Quelle est la température ?', sw: 'Joto ni ngapi?' },
      type: 'number',
      unit: '°C'
    },
    {
      question: { en: 'How long have you had the fever?', fr: 'Depuis combien de temps avez-vous de la fièvre ?', sw: 'Una homa kwa muda gani?' },
      type: 'select',
      options: [
        { en: '< 1 day', fr: '< 1 jour', sw: '< siku 1' },
        { en: '1-3 days', fr: '1-3 jours', sw: 'siku 1-3' },
        { en: '> 3 days', fr: '> 3 jours', sw: '> siku 3' }
      ]
    }
  ],
  'cough': [
    {
      question: { en: 'Is the cough dry or productive (with phlegm)?', fr: 'La toux est-elle sèche ou productive (avec mucosités) ?', sw: 'Kikohozi ni kikavu au chenye makohozi?' },
      type: 'select',
      options: [
        { en: 'Dry', fr: 'Sèche', sw: 'Kikavu' },
        { en: 'Productive', fr: 'Productive', sw: 'Chenye makohozi' }
      ]
    },
    {
      question: { en: 'Is there blood in the cough?', fr: 'Y a-t-il du sang dans la toux ?', sw: 'Kuna damu kwenye kikohozi?' },
      type: 'boolean'
    }
  ],
  'headache': [
    {
      question: { en: 'How would you rate the pain (0-10)?', fr: 'Comment évaluez-vous la douleur (0-10) ?', sw: 'Ungekadiri vipi maumivu (0-10)?' },
      type: 'number'
    },
    {
      question: { en: 'Is it a throbbing or constant pain?', fr: 'Est-ce une douleur lancinante ou constante ?', sw: 'Je, ni maumivu ya kupwita au ya kudumu?' },
      type: 'select',
      options: [
        { en: 'Throbbing', fr: 'Lancinante', sw: 'Ya kupwita' },
        { en: 'Constant', fr: 'Constante', sw: 'Ya kudumu' }
      ]
    }
  ],
  'diarrhea': [
    {
      question: { en: 'How many times have you had loose stools today?', fr: 'Combien de fois avez-vous eu des selles molles aujourd\'hui ?', sw: 'Umepata choo laini mara ngapi leo?' },
      type: 'number'
    },
    {
      question: { en: 'Is there blood in the stool?', fr: 'Y a-t-il du sang dans les selles ?', sw: 'Kuna damu kwenye kinyesi?' },
      type: 'boolean'
    }
  ]
};
