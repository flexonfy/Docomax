import { ComprehensiveDisease } from './types';

export const genitourinaryDiseases: ComprehensiveDisease[] = [
  {
    id: 'urinary-tract-infection',
    name: {
      en: 'Urinary Tract Infection (UTI)',
      fr: 'Infection des Voies Urinaires (IVU)',
      sw: 'Maambukizi ya Njia za Mkojo (UTI)'
    },
    category: 'genitourinary',
    severity: 'medium',
    symptoms: {
      en: ['burning during urination', 'urge to urinate frequently', 'cloudy urine', 'blood in urine', 'strong urine odor', 'pelvic pain'],
      fr: ['brûlure lors de la miction', 'envie fréquente d\'uriner', 'urine trouble', 'sang dans les urines', 'forte odeur d\'urine', 'douleur pelvienne'],
      sw: ['kuungua wakati wa kukojoa', 'hamu ya mara kwa mara ya kukojoa', 'mkojo wa giza', 'damu kwenye mkojo', 'harufu kali ya mkojo', 'maumivu ya nyonga']
    },
    commonSymptoms: {
      en: ['burning with urination', 'frequent urination', 'cloudy urine'],
      fr: ['brûlure lors de la miction', 'miction fréquente', 'urine trouble'],
      sw: ['kuungua wakati wa kukojoa', 'kukojoa mara kwa mara', 'mkojo wa giza']
    },
    rareSymptoms: {
      en: ['fever', 'back pain', 'nausea'],
      fr: ['fièvre', 'mal de dos', 'nausées'],
      sw: ['homa', 'maumivu ya mgongo', 'kichefuchefu']
    },
    causes: {
      en: ['bacterial infection', 'E. coli', 'sexual activity'],
      fr: ['infection bactérienne', 'E. coli', 'activité sexuelle'],
      sw: ['maambukizi ya bakteria', 'E. coli', 'kazi ya kingono']
    },
    riskFactors: {
      en: ['female gender', 'pregnancy', 'urinary catheter', 'enlarged prostate', 'kidney stones'],
      fr: ['sexe féminin', 'grossesse', 'cathéter urinaire', 'hypertrophie prostatique', 'calculs rénaux'],
      sw: ['jinsia ya kike', 'ujauzito', 'catheter ya mkojo', 'prostate iliyopanuka', 'mawe kwenye figo']
    },
    treatment: {
      en: 'Antibiotics, increase fluid intake, rest.',
      fr: 'Antibiotiques, augmenter l\'apport en liquides, repos.',
      sw: 'Antibiotiki, ongeza ulaji wa maji, pumziko.'
    },
    prevention: {
      en: 'Drink plenty of water, empty bladder regularly, practice good hygiene, urinate after sex.',
      fr: 'Boire beaucoup d\'eau, vider la vessie régulièrement, pratiquer une bonne hygiène, uriner après les rapports sexuels.',
      sw: 'Kunywa maji mengi, kumutika kibofu mara kwa mara, fanya usafi mzuri, mkojea baada ya kingono.'
    },
    whenToSeekHelp: {
      en: 'See a doctor for severe symptoms, fever, or if symptoms persist after 48 hours.',
      fr: 'Consultez un médecin pour les symptômes graves, la fièvre ou si les symptômes persistent après 48 heures.',
      sw: 'Muone daktari kwa dalili kali, homa, au ikiwa dalili zinaendelea baada ya masaa 48.'
    },
    complications: {
      en: ['kidney infection', 'sepsis', 'pre-term labor in pregnancy'],
      fr: ['infection rénale', 'septicémie', 'travail prématuré pendant la grossesse'],
      sw: ['maambukizi ya figo', 'sepsis', 'kuzaliwa mapema wakati wa ujauzito']
    },
    diagnosis: {
      en: 'Urinalysis, urine culture.',
      fr: 'Analyse d\'urine, culture d\'urine.',
      sw: 'Uchambuzi wa mkojo, kilimo cha mkojo.'
    },
    prognosis: {
      en: 'Excellent with antibiotics. Most resolve within days.',
      fr: 'Excellent avec les antibiotiques. La plupart se résolvent en quelques jours.',
      sw: 'Nzuri sana na antibiotiki. Nyingi huisha ndani ya siku kadhaa.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'benign-prostate-hyperplasia',
    name: {
      en: 'Benign Prostatic Hyperplasia (BPH)',
      fr: 'Hyperplasie Bénigne de la Prostate (HBP)',
      sw: 'Hyperplasia Nzuri ya Prostate (BPH)'
    },
    category: 'genitourinary',
    severity: 'medium',
    symptoms: {
      en: ['weak urine stream', 'frequent urination', 'urgency to urinate', 'nocturia (waking at night to urinate)', 'incomplete bladder emptying', 'dribbling after urination'],
      fr: ['faible débit urinaire', 'miction fréquente', 'urgence à uriner', 'nycturie (se réveiller la nuit pour uriner)', 'vidage incomplet de la vessie', 'égouttement après la miction'],
      sw: ['mtiririko dhaifu wa mkojo', 'kukojoa mara kwa mara', 'haraka ya kukojoa', 'nocturia (kuamka usiku kukamatia mkojo)', 'kumutika kibofu kwa incomplete', 'kumtoka kutoka baada ya mkojea']
    },
    commonSymptoms: {
      en: ['weak urine stream', 'frequent urination', 'urgency'],
      fr: ['faible débit urinaire', 'miction fréquente', 'urgence'],
      sw: ['mtiririko dhaifu wa mkojo', 'kukojoa mara kwa mara', 'haraka']
    },
    rareSymptoms: {
      en: ['urinary retention', 'blood in urine', 'UTI'],
      fr: ['rétention urinaire', 'sang dans les urines', 'IVU'],
      sw: ['kumfanya mkojo kuchelewa', 'damu kwenye mkojo', 'UTI']
    },
    causes: {
      en: ['aging', 'hormone changes', 'family history'],
      fr: ['vieillissement', 'changements hormonaux', 'antécédents familiaux'],
      sw: ['kuzeeka', 'mabadiliko ya homoni', 'historia ya familia']
    },
    riskFactors: {
      en: ['age over 50', 'family history', 'male gender'],
      fr: ['âge supérieur à 50 ans', 'antécédents familiaux', 'sexe masculin'],
      sw: ['umri zaidi ya miaka 50', 'historia ya familia', 'jinsia ya kiume']
    },
    treatment: {
      en: 'Alpha-blockers, 5-alpha reductase inhibitors, surgery (TURP), lifestyle changes.',
      fr: 'Bloqueurs alpha, inhibiteurs de la 5-alpha réductase, chirurgie (RTUP), changements de mode de vie.',
      sw: 'Alpha-blockers, vizuizi vya 5-alpha reductase, upasuaji (TURP), mabadiliko ya mtindo wa maisha.'
    },
    prevention: {
      en: 'Regular exercise, limit fluids before bed, reduce caffeine and alcohol.',
      fr: 'Exercice régulier, limiter les liquides avant le coucher, réduire la caféine et l\'alcool.',
      sw: 'Mazoezi ya mara kwa mara, punguza maji kabla ya kulala, punguza kafeini na pombe.'
    },
    whenToSeekHelp: {
      en: 'See a doctor for bothersome urinary symptoms.',
      fr: 'Consultez un médecin pour des symptômes urinaires gênants.',
      sw: 'Muone daktari kwa dalili ya mkojo zinazosumbua.'
    },
    complications: {
      en: ['urinary retention', 'UTI', 'kidney damage'],
      fr: ['rétention urinaire', 'IVU', 'endommagement rénal'],
      sw: ['kumfanya mkojo kuchelewa', 'UTI', 'uharibifu wa figo']
    },
    diagnosis: {
      en: 'Digital rectal exam, urinalysis, prostate-specific antigen (PSA) test, uroflow study.',
      fr: 'Toucher rectal, analyse d\'urine, test de l\'antigène prostatique spécifique (PSA), étude du débit urinaire.',
      sw: 'Uchunguzi wa kidole wa rektamu, uchambuzi wa mkojo, kipimo cha PSA, uchunguzi wa mtiririko wa mkojo.'
    },
    prognosis: {
      en: 'Manageable with treatment. Symptoms typically worsen slowly over time.',
      fr: 'Gérable avec le traitement. Les symptômes s\'aggravent généralement lentement au fil du temps.',
      sw: 'Inaweza kudhibitiwa na matibabu. Dalili kawaida huozorota polepole kwa muda.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'high',
    ageGroup: 'elderly',
    gender: 'male'
  },
  {
    id: 'kidney-stones',
    name: {
      en: 'Kidney Stones',
      fr: 'Calculs Rénaux',
      sw: 'Mawe kwenye Figo'
    },
    category: 'genitourinary',
    severity: 'medium',
    symptoms: {
      en: ['severe pain in back or side', 'pain during urination', 'persistent urge to urinate', 'cloudy or red urine', 'nausea and vomiting', 'fever if infected'],
      fr: ['douleur grave dans le dos ou le flanc', 'douleur lors de la miction', 'envie persistante d\'uriner', 'urine trouble ou rougeâtre', 'nausées et vomissements', 'fièvre en cas d\'infection'],
      sw: ['maumivu makali ya mgongo au upande', 'maumivu wakati wa kukojoa', 'hamu inayoendelea ya kukojoa', 'mkojo wa giza au wekundu', 'kichefuchefu na kutapika', 'homa ikiwa ina maambukizi']
    },
    commonSymptoms: {
      en: ['severe back/side pain', 'urge to urinate', 'painful urination'],
      fr: ['douleur grave du dos/flanc', 'envie d\'uriner', 'miction douloureuse'],
      sw: ['maumivu makali ya mgongo/upande', 'hamu ya kukojoa', 'kutapiwa wakati wa mkojea']
    },
    rareSymptoms: {
      en: ['fever', 'blood in urine', 'nausea'],
      fr: ['fièvre', 'sang dans les urines', 'nausées'],
      sw: ['homa', 'damu kwenye mkojo', 'kichefuchefu']
    },
    causes: {
      en: ['dehydration', 'high sodium intake', 'family history', 'gout', 'urinary tract disorders'],
      fr: ['déshydratation', 'apport élevé en sodium', 'antécédents familiaux', 'goutte', 'troubles des voies urinaires'],
      sw: ['upungufu wa maji mwilini', 'ulaji mwingi wa sodiyamu', 'historia ya familia', 'gauti', 'matatizo ya njia za mkojo']
    },
    riskFactors: {
      en: ['male gender', 'age 30-50', 'family history', 'gout', 'obesity'],
      fr: ['sexe masculin', 'âge 30-50 ans', 'antécédents familiaux', 'goutte', 'obésité'],
      sw: ['jinsia ya kiume', 'umri wa miaka 30-50', 'historia ya familia', 'gauti', 'unene kupita kiasi']
    },
    treatment: {
      en: 'Pain relief, hydration, medication to relax ureter (alpha-blockers), removal by doctor if needed.',
      fr: 'Soulagement de la douleur, hydratation, médicaments pour détendre l\'uretère (bloqueurs alpha), ablation par le médecin si nécessaire.',
      sw: 'Kupunguza maumivu, kumoza kwa maji, dawa za kulegeza mrija (alpha-blockers), kuondoa kwa daktari ikiwa inahitajika.'
    },
    prevention: {
      en: 'Drink plenty of water, limit salt and animal protein, maintain healthy weight.',
      fr: 'Boire beaucoup d\'eau, limiter le sel et les protéines animales, maintenir un poids santé.',
      sw: 'Kunywa maji mengi, punguza chumvi na protini za wanyama, dumisha uzito wenye afya.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate help for severe pain or fever.',
      fr: 'Consultez immédiatement pour une douleur grave ou de la fièvre.',
      sw: 'Tafuta msaada wa haraka kwa maumivu makali au homa.'
    },
    complications: {
      en: ['urinary tract infection', 'kidney damage', 'blocked ureter'],
      fr: ['infection des voies urinaires', 'endommagement rénal', 'uretère bloqué'],
      sw: ['maambukizi ya njia za mkojo', 'uharibifu wa figo', 'mrija iliyozibwa']
    },
    diagnosis: {
      en: 'CT scan, X-ray, ultrasound, urinalysis.',
      fr: 'Scanner, radiographie, échographie, analyse d\'urine.',
      sw: 'CT scan, X-ray, ultrasound, uchambuzi wa mkojo.'
    },
    prognosis: {
      en: 'Most pass on their own. Those that don\'t can be removed.',
      fr: 'La plupart passent d\'elles-mêmes. Ceux qui ne le font pas peuvent être retirés.',
      sw: 'Nyingi huondoka peke yake. Wale wasiondoki wanaweza kuondolewa.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'high',
    ageGroup: 'adult',
    gender: 'all'
  }
];
