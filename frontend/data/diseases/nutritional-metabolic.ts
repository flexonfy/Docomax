import { ComprehensiveDisease } from './types';

export const nutritionalMetabolicDiseases: ComprehensiveDisease[] = [
  {
    id: 'malnutrition',
    name: {
      en: 'Malnutrition',
      fr: 'Malnutrition',
      sw: 'Malnutrition'
    },
    category: 'metabolic',
    severity: 'high',
    symptoms: {
      en: ['weight loss', 'weakness', 'fatigue', 'hair loss', 'pale skin', 'diarrhea', 'depression', 'poor wound healing'],
      fr: ['perte de poids', 'faiblesse', 'fatigue', 'perte de cheveux', 'peau pâle', 'diarrhée'],
      sw: ['kupungua kwa uzani', 'dhaufu', 'uchovu', 'kupoteza nywele', 'ngozi nyepesi', 'kuhara', 'kutaka kufa', 'kufa kwa jeraha duni']
    },
    commonSymptoms: {
      en: ['weight loss', 'weakness', 'fatigue'],
      fr: ['perte de poids', 'faiblesse', 'fatigue'],
      sw: ['kupungua kwa uzani', 'dhaufu', 'uchovu']
    },
    rareSymptoms: {
      en: ['severe organ failure', 'infection', 'death'],
      fr: ['insuffisance d\'organe grave', 'infection', 'décès'],
      sw: ['kushindwa kwa kiungo kali', 'ambukizo', 'kifo']
    },
    causes: {
      en: ['insufficient food intake', 'poverty', 'food insecurity', 'illness', 'poor absorption'],
      fr: ['apport alimentaire insuffisant', 'pauvreté', 'insécurité alimentaire', 'maladie'],
      sw: ['kumla chakula kidogo', 'umaskini', 'kutokuwa na chakula', 'ugonjwa', 'kusambaza duni']
    },
    riskFactors: {
      en: ['poverty', 'food insecurity', 'age under 5', 'chronic disease', 'malabsorption'],
      fr: ['pauvreté', 'insécurité alimentaire', 'âge moins de 5 ans', 'maladie chronique'],
      sw: ['umaskini', 'kutokuwa na chakula', 'umri chini ya miaka 5', 'ugonjwa wa mahabadiliko', 'kusambaza duni']
    },
    treatment: {
      en: 'Nutritional supplementation, treat underlying cause, micronutrient fortification, and dietary counseling.',
      fr: 'Supplémentation nutritionnelle, traiter la cause sous-jacente, fortification micronutritive.',
      sw: 'Kuongeza virutubishi, matibabu ya sababu ndani, kueneza micronutrient, na shauri la chakula.'
    },
    prevention: {
      en: 'Food security, nutrition education, micronutrient supplementation, and addressing poverty.',
      fr: 'Sécurité alimentaire, éducation nutritionnelle, supplémentation micronutritive.',
      sw: 'Usalama wa chakula, elimu ya virutubishi, kuongeza micronutrient, na kusimamia umaskini.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for unexplained weight loss or signs of malnutrition.',
      fr: 'Cherchez des soins médicaux pour une perte de poids inexpliquée.',
      sw: 'Tafuta huduma za kimatibabu kwa kupungua kwa uzani bila sababu au dalili ya malnutrition.'
    },
    complications: {
      en: ['infections', 'poor wound healing', 'growth delays', 'cognitive impairment', 'death'],
      fr: ['infections', 'mauvaise cicatrisation', 'retards de croissance', 'altération cognitive'],
      sw: ['ambukizo', 'kufa kwa jeraha duni', 'chelewa kwa maendeleo', 'kukamatia kwa akili', 'kifo']
    },
    diagnosis: {
      en: 'Anthropometric measurements, BMI, serum albumin, micronutrient levels.',
      fr: 'Mesures anthropométriques, IMC, albumine sérique, niveaux de micronutriments.',
      sw: ['Anthropometric measurements, BMI, serum albumin, kiwango cha micronutrient']
    },
    prognosis: {
      en: 'With adequate nutrition, most people recover. Chronic malnutrition can cause permanent damage.',
      fr: 'Avec une nutrition adéquate, la plupart se rétablissent.',
      sw: 'Na virutubishi vya kutosha, watu wengi hupona. Malnutrition ya mahabadiliko inaweza kusababisha madhara ya mahabadiliko.'
    },
    source: 'who',
    prevalenceInAfrica: 'very-high',
    ageGroup: 'pediatric',
    gender: 'all'
  },
  {
    id: 'anemia',
    name: {
      en: 'Anemia',
      fr: 'Anémie',
      sw: 'Anemia'
    },
    category: 'metabolic',
    severity: 'medium',
    symptoms: {
      en: ['fatigue', 'weakness', 'shortness of breath', 'dizziness', 'pale skin', 'rapid heartbeat', 'headache', 'cold hands and feet'],
      fr: ['fatigue', 'faiblesse', 'essoufflement', 'vertiges', 'peau pâle', 'rythme cardiaque rapide'],
      sw: ['uchovu', 'dhaufu', 'upungufu wa hewa', 'kuzunguka', 'ngozi nyepesi', 'moyo unayobezebu', 'maumivu ya kichwa', 'mikono na miguu ya barafu']
    },
    commonSymptoms: {
      en: ['fatigue', 'weakness', 'pale skin'],
      fr: ['fatigue', 'faiblesse', 'peau pâle'],
      sw: ['uchovu', 'dhaufu', 'ngozi nyepesi']
    },
    rareSymptoms: {
      en: ['severe organ damage', 'heart failure', 'death'],
      fr: ['dommages d\'organe graves', 'insuffisance cardiaque', 'décès'],
      sw: ['dharau ya kiungo kali', 'kushindwa kwa moyo', 'kifo']
    },
    causes: {
      en: ['iron deficiency', 'vitamin B12 deficiency', 'folate deficiency', 'blood loss', 'hemolysis', 'chronic disease'],
      fr: ['carence en fer', 'carence en vitamine B12', 'carence en acide folique', 'saignement'],
      sw: ['ukosefu wa chuma', 'ukosefu wa vitamin B12', 'ukosefu wa folate', 'kutokwa damu', 'hemolysis', 'ugonjwa wa mahabadiliko']
    },
    riskFactors: {
      en: ['iron poor diet', 'pregnancy', 'heavy menstrual bleeding', 'chronic disease', 'malabsorption'],
      fr: ['régime pauvre en fer', 'grossesse', 'saignements menstruels abondants', 'maladie chronique'],
      sw: ['chakula kidogo chuma', 'ujauzito', 'kutokwa damu kwa kimashariki', 'ugonjwa wa mahabadiliko', 'kusambaza duni']
    },
    treatment: {
      en: 'Iron supplementation, vitamin B12 supplementation, folate supplementation, treat underlying cause.',
      fr: 'Supplémentation en fer, supplémentation en vitamine B12, supplémentation en acide folique.',
      sw: 'Kuongeza chuma, kuongeza vitamin B12, kuongeza folate, matibabu ya sababu ndani.'
    },
    prevention: {
      en: 'Iron-rich diet, vitamin supplementation, manage chronic diseases, and reduce blood loss.',
      fr: 'Régime riche en fer, supplémentation vitaminique, gestion des maladies chroniques.',
      sw: 'Chakula yenye chuma, kuongeza vitamini, simamia ugonjwa wa mahabadiliko, na kupungua kutokwa damu.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for persistent fatigue, weakness, or shortness of breath.',
      fr: 'Cherchez des soins médicaux pour une fatigue persistante, une faiblesse.',
      sw: 'Tafuta huduma za kimatibabu kwa uchovu wa mahabadiliko, dhaufu, au upungufu wa hewa.'
    },
    complications: {
      en: ['heart disease', 'organ damage', 'severe disability', 'death'],
      fr: ['maladie cardiaque', 'dommages d\'organe', 'invalidité grave'],
      sw: ['ugonjwa wa moyo', 'dharau ya kiungo', 'kukamatia kali', 'kifo']
    },
    diagnosis: {
      en: 'Complete blood count, iron studies, vitamin B12 level, folate level.',
      fr: 'Formule sanguine complète, études du fer, niveau de vitamine B12.',
      sw: ['Complete blood count, iron studies, vitamin B12 level, folate level']
    },
    prognosis: {
      en: 'With treatment, most types of anemia improve significantly.',
      fr: 'Avec le traitement, la plupart des types d\'anémie s\'améliorent considérablement.',
      sw: 'Na matibabu, aina nyingi za anemia zinaboresha sana.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'very-high',
    ageGroup: 'all',
    gender: 'female'
  },
  {
    id: 'vitamin-a-deficiency',
    name: {
      en: 'Vitamin A Deficiency',
      fr: 'Carence en Vitamine A',
      sw: 'Vitamin A Deficiency'
    },
    category: 'metabolic',
    severity: 'high',
    symptoms: {
      en: ['night blindness', 'dry eyes', 'corneal scarring', 'vision loss', 'skin problems', 'increased infections', 'impaired growth'],
      fr: ['cécité nocturne', 'yeux secs', 'cicatrisation cornéenne', 'perte de vision', 'problèmes cutanés'],
      sw: ['kufanya kazi duni kwa usiku', 'macho kavu', 'kidonda cha kona', 'kupoteza macho', 'shida ya ngozi', 'ambukizo zaidi', 'kasoro ya maendeleo']
    },
    commonSymptoms: {
      en: ['night blindness', 'dry eyes', 'vision problems'],
      fr: ['cécité nocturne', 'yeux secs', 'problèmes de vision'],
      sw: ['kufanya kazi duni kwa usiku', 'macho kavu', 'shida ya macho']
    },
    rareSymptoms: {
      en: ['corneal ulcer', 'blindness', 'death'],
      fr: ['ulcère cornéen', 'cécité', 'décès'],
      sw: ['mzio wa kona', 'mamakonde', 'kifo']
    },
    causes: {
      en: ['malnutrition', 'poor diet', 'malabsorption', 'chronic disease', 'zinc deficiency'],
      fr: ['malnutrition', 'régime médiocre', 'malabsorption', 'maladie chronique'],
      sw: ['malnutrition', 'chakula kibaya', 'kusambaza duni', 'ugonjwa wa mahabadiliko', 'ukosefu wa zinc']
    },
    riskFactors: {
      en: ['poverty', 'malnutrition', 'age under 5', 'measles', 'diarrhea', 'zinc deficiency'],
      fr: ['pauvreté', 'malnutrition', 'âge moins de 5 ans', 'rougeole', 'diarrhée'],
      sw: ['umaskini', 'malnutrition', 'umri chini ya miaka 5', 'measles', 'kuhara', 'ukosefu wa zinc']
    },
    treatment: {
      en: 'Vitamin A supplementation, treat underlying cause, nutritional support.',
      fr: 'Supplémentation en vitamine A, traiter la cause sous-jacente, support nutritionnel.',
      sw: 'Kuongeza vitamin A, matibabu ya sababu ndani, kusaidia kwa virutubishi.'
    },
    prevention: {
      en: 'Vitamin A supplementation, adequate diet, dietary fortification, zinc supplementation.',
      fr: 'Supplémentation en vitamine A, régime adéquat, fortification alimentaire.',
      sw: 'Kuongeza vitamin A, chakula kwa kutosha, kueneza chakula, kuongeza zinc.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for night blindness or vision problems.',
      fr: 'Cherchez des soins médicaux pour cécité nocturne ou problèmes de vision.',
      sw: 'Tafuta huduma za kimatibabu kwa kufanya kazi duni kwa usiku au shida ya macho.'
    },
    complications: {
      en: ['corneal scarring', 'blindness', 'increased infection risk', 'death (in severe cases)'],
      fr: ['cicatrisation cornéenne', 'cécité', 'risque d\'infection accru'],
      sw: ['kidonda cha kona', 'mamakonde', 'hatari ya ambukizo zaidi', 'kifo (katika visa kali)']
    },
    diagnosis: {
      en: 'Serum retinol level, clinical evaluation, Schirmer test.',
      fr: 'Niveau de rétinol sérique, évaluation clinique.',
      sw: ['Serum retinol level, mtihani wa kliniki, Schirmer test']
    },
    prognosis: {
      en: 'With supplementation, most cases improve. Corneal damage can be permanent.',
      fr: 'Avec la supplémentation, la plupart des cas s\'améliorent.',
      sw: 'Na kuongeza, nyingi za visa zinaboresha. Dharau ya kona inaweza kuwa ya mahabadiliko.'
    },
    source: 'who',
    prevalenceInAfrica: 'high',
    ageGroup: 'pediatric',
    gender: 'all'
  },
  {
    id: 'iodine-deficiency',
    name: {
      en: 'Iodine Deficiency Disorder',
      fr: 'Troubles Dus à la Carence en Iode',
      sw: 'Iodine Deficiency Disorder'
    },
    category: 'metabolic',
    severity: 'high',
    symptoms: {
      en: ['goiter', 'hypothyroidism', 'fatigue', 'weight gain', 'cold sensitivity', 'intellectual disability', 'delayed development'],
      fr: ['goître', 'hypothyroïdie', 'fatigue', 'gain de poids', 'sensibilité au froid'],
      sw: ['kumba kwa pua', 'hypothyroidism', 'uchovu', 'kupata uzani', 'heshimu ya barafu', 'kukamatia kwa akili', 'chelewa kwa maendeleo']
    },
    commonSymptoms: {
      en: ['goiter', 'fatigue', 'weight gain'],
      fr: ['goître', 'fatigue', 'gain de poids'],
      sw: ['kumba kwa pua', 'uchovu', 'kupata uzani']
    },
    rareSymptoms: {
      en: ['severe intellectual disability', 'cretinism', 'growth failure'],
      fr: ['déficience intellectuelle grave', 'crétinisme', 'retard de croissance'],
      sw: ['kukamatia kwa akili kali', 'cretinism', 'kushindwa kwa maendeleo']
    },
    causes: {
      en: ['insufficient iodine intake', 'iodine-poor soil', 'poor diet', 'goitrogens'],
      fr: ['apport insuffisant en iode', 'sol pauvre en iode', 'régime médiocre'],
      sw: ['kumla iodine kidogo', 'ardhi yenye iodine kidogo', 'chakula kibaya', 'goitrogens']
    },
    riskFactors: {
      en: ['living in iodine-deficient areas', 'poor diet', 'pregnancy', 'lactation'],
      fr: ['vivre dans des zones déficitaires en iode', 'régime médiocre', 'grossesse', 'allaitement'],
      sw: ['kuishi katika maeneo ya iodine kidogo', 'chakula kibaya', 'ujauzito', 'kunyonyeza']
    },
    treatment: {
      en: 'Iodine supplementation, iodized salt, iodine-rich diet, thyroid hormone replacement if needed.',
      fr: 'Supplémentation en iode, sel iodé, régime riche en iode.',
      sw: 'Kuongeza iodine, chumvi ya iodine, chakula yenye iodine, kurudia hormone ya thyroid kama inahitajika.'
    },
    prevention: {
      en: 'Iodized salt, iodine supplementation, iodine-rich diet, salt fortification programs.',
      fr: 'Sel iodé, supplémentation en iode, régime riche en iode.',
      sw: 'Chumvi ya iodine, kuongeza iodine, chakula yenye iodine, programu ya kueneza chumvi.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for goiter, fatigue, or developmental delays.',
      fr: 'Cherchez des soins médicaux pour goître, fatigue.',
      sw: 'Tafuta huduma za kimatibabu kwa kumba kwa pua, uchovu, au chelewa kwa maendeleo.'
    },
    complications: {
      en: ['severe intellectual disability', 'cretinism', 'growth failure', 'infertility'],
      fr: ['déficience intellectuelle grave', 'crétinisme', 'retard de croissance', 'infertilité'],
      sw: ['kukamatia kwa akili kali', 'cretinism', 'kushindwa kwa maendeleo', 'kutokuwa na watoto']
    },
    diagnosis: {
      en: 'TSH level, free T4, thyroid ultrasound, urinary iodine level.',
      fr: 'Niveau de TSH, T4 libre, échographie thyroïdienne.',
      sw: ['TSH level, free T4, thyroid ultrasound, urinary iodine level']
    },
    prognosis: {
      en: 'With iodine supplementation, most cases improve. Cretinism is irreversible.',
      fr: 'Avec la supplémentation en iode, la plupart des cas s\'améliorent.',
      sw: 'Na kuongeza iodine, nyinzi za visa zinaboresha. Cretinism haiwezi kubadirika.'
    },
    source: 'who',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'scurvy',
    name: {
      en: 'Scurvy (Vitamin C Deficiency)',
      fr: 'Scorbut (Carence en Vitamine C)',
      sw: 'Scurvy (Vitamin C Deficiency)'
    },
    category: 'metabolic',
    severity: 'medium',
    symptoms: {
      en: ['fatigue', 'weakness', 'depression', 'bleeding gums', 'poor wound healing', 'joint pain', 'skin rash', 'loose teeth'],
      fr: ['fatigue', 'faiblesse', 'dépression', 'saignement gingival', 'mauvaise cicatrisation'],
      sw: ['uchovu', 'dhaufu', 'kutaka kufa', 'kutokwa damu kwa jino', 'kufa kwa jeraha duni', 'maumivu ya mifumo', 'kumba ya ngozi', 'meno yasiyo imara']
    },
    commonSymptoms: {
      en: ['fatigue', 'weakness', 'bleeding gums'],
      fr: ['fatigue', 'faiblesse', 'saignement gingival'],
      sw: ['uchovu', 'dhaufu', 'kutokwa damu kwa jino']
    },
    rareSymptoms: {
      en: ['severe bleeding', 'anemia', 'death'],
      fr: ['saignement grave', 'anémie', 'décès'],
      sw: ['kutokwa damu kali', 'anemia', 'kifo']
    },
    causes: {
      en: ['vitamin C deficiency', 'poor diet', 'malnutrition', 'chronic disease'],
      fr: ['carence en vitamine C', 'régime médiocre', 'malnutrition'],
      sw: ['ukosefu wa vitamin C', 'chakula kibaya', 'malnutrition', 'ugonjwa wa mahabadiliko']
    },
    riskFactors: {
      en: ['poor diet', 'poverty', 'malnutrition', 'chronic illness'],
      fr: ['régime médiocre', 'pauvreté', 'malnutrition', 'maladie chronique'],
      sw: ['chakula kibaya', 'umaskini', 'malnutrition', 'ugonjwa wa mahabadiliko']
    },
    treatment: {
      en: 'Vitamin C supplementation, vitamin C-rich diet, treat underlying cause.',
      fr: 'Supplémentation en vitamine C, régime riche en vitamine C.',
      sw: 'Kuongeza vitamin C, chakula yenye vitamin C, matibabu ya sababu ndani.'
    },
    prevention: {
      en: 'Vitamin C-rich diet, nutritional education, food security.',
      fr: 'Régime riche en vitamine C, éducation nutritionnelle.',
      sw: 'Chakula yenye vitamin C, elimu ya virutubishi, usalama wa chakula.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for bleeding gums, poor wound healing, or joint pain.',
      fr: 'Cherchez des soins médicaux pour saignement gingival, mauvaise cicatrisation.',
      sw: 'Tafuta huduma za kimatibabu kwa kutokwa damu kwa jino, kufa kwa jeraha duni, au maumivu ya mifumo.'
    },
    complications: {
      en: ['severe bleeding', 'anemia', 'infection', 'death'],
      fr: ['saignement grave', 'anémie', 'infection', 'décès'],
      sw: ['kutokwa damu kali', 'anemia', 'ambukizo', 'kifo']
    },
    diagnosis: {
      en: 'Serum vitamin C level, clinical evaluation.',
      fr: 'Niveau de vitamine C sérique, évaluation clinique.',
      sw: ['Serum vitamin C level, mtihani wa kliniki']
    },
    prognosis: {
      en: 'With vitamin C supplementation, symptoms improve within days. Most cases recover fully.',
      fr: 'Avec la supplémentation en vitamine C, les symptômes s\'améliorent en jours.',
      sw: 'Na kuongeza vitamin C, dalili zinaboresha ndani ya siku. Nyinzi za visa hupona kabisa.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'low',
    ageGroup: 'all',
    gender: 'all'
  }
];
