import { ComprehensiveDisease } from './types';

export const cancerOncologyDiseases: ComprehensiveDisease[] = [
  {
    id: 'lung-cancer',
    name: {
      en: 'Lung Cancer',
      fr: 'Cancer du Poumon',
      sw: 'Lung Cancer'
    },
    category: 'oncological',
    severity: 'emergency',
    symptoms: {
      en: ['persistent cough', 'chest pain', 'shortness of breath', 'hemoptysis', 'hoarseness', 'fatigue', 'weight loss', 'wheezing'],
      fr: ['toux persistante', 'douleur thoracique', 'essoufflement', 'hémoptysie'],
      sw: ['kikohozi kila wakati', 'maumivu ya kiganja', 'upungufu wa hewa', 'kutokwa damu ndani ya mkambi', 'sauti batili', 'uchovu', 'kupungua kwa uzani', 'kusikiliza mlio wa hewa']
    },
    commonSymptoms: {
      en: ['persistent cough', 'chest pain', 'fatigue'],
      fr: ['toux persistante', 'douleur thoracique', 'fatigue'],
      sw: ['kikohozi kila wakati', 'maumivu ya kiganja', 'uchovu']
    },
    rareSymptoms: {
      en: ['respiratory failure', 'metastasis', 'death'],
      fr: ['insuffisance respiratoire', 'métastases', 'décès'],
      sw: ['kushindwa kwa ukoffi', 'kuenea kwa saratani', 'kifo']
    },
    causes: {
      en: ['smoking', 'secondhand smoke', 'radon', 'asbestos', 'air pollution', 'family history'],
      fr: ['tabagisme', 'fumée secondaire', 'radon', 'amiante', 'pollution de l\'air'],
      sw: ['sigara', 'moshi wa pili', 'radon', 'asbestos', 'uchumi duni', 'historia ya familia']
    },
    riskFactors: {
      en: ['smoking', 'age over 55', 'family history', 'occupational exposure', 'previous lung disease'],
      fr: ['tabagisme', 'âge supérieur à 55 ans', 'antécédents familiaux'],
      sw: ['sigara', 'umri zaidi ya 55', 'historia ya familia', 'kupatikana kazi', 'ugonjwa wa mapafu hapo awali']
    },
    treatment: {
      en: 'Surgery, chemotherapy, radiation therapy, targeted therapy, immunotherapy.',
      fr: 'Chirurgie, chimiothérapie, radiothérapie, thérapie ciblée.',
      sw: 'Operesheni, chemotherapy, radiation therapy, targeted therapy, immunotherapy.'
    },
    prevention: {
      en: 'Quit smoking, avoid secondhand smoke, avoid radon/asbestos, healthy diet, exercise.',
      fr: 'Arrêter de fumer, éviter la fumée secondaire, éviter le radon/amiante.',
      sw: 'Acha sigara, zuia moshi wa pili, zuia radon/asbestos, chakula kizuri, tengeneza mwendo.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for persistent cough lasting more than 3 weeks.',
      fr: 'Cherchez des soins médicaux pour une toux persistante.',
      sw: 'Tafuta huduma za kimatibabu kwa kikohozi kila wakati kwa juma zaidi ya tatu.'
    },
    complications: {
      en: ['metastasis', 'respiratory failure', 'superior vena cava syndrome', 'death'],
      fr: ['métastases', 'insuffisance respiratoire', 'syndrome de la veine cave supérieure'],
      sw: ['kuenea kwa saratani', 'kushindwa kwa ukoffi', 'superior vena cava syndrome', 'kifo']
    },
    diagnosis: {
      en: 'Chest X-ray, CT scan, biopsy, PET scan, bronchoscopy.',
      fr: 'Radiographie thoracique, tomodensitométrie, biopsie.',
      sw: ['Picha ya kiganja, CT scan, biopsy, PET scan, bronchoscopy']
    },
    prognosis: {
      en: 'Depends on stage at diagnosis. Early stage has better prognosis.',
      fr: 'Dépend du stade au diagnostic.',
      sw: 'Inategemea hatua ya kubaini. Hatua ya mapema ina matokeo mazuri.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'medium',
    ageGroup: 'elderly',
    gender: 'all'
  },
  {
    id: 'breast-cancer',
    name: {
      en: 'Breast Cancer',
      fr: 'Cancer du Sein',
      sw: 'Breast Cancer'
    },
    category: 'oncological',
    severity: 'emergency',
    symptoms: {
      en: ['breast lump', 'pain', 'nipple discharge', 'skin dimpling', 'redness', 'swelling', 'texture changes'],
      fr: ['masse mammaire', 'douleur', 'écoulement du mamelon', 'fossettes cutanées'],
      sw: ['kumba kwa matele', 'maumivu', 'kutokwa damu kwa matele', 'nguruguza ya ngozi', 'kumba', 'kubwa', 'mabadiliko ya muundo']
    },
    commonSymptoms: {
      en: ['breast lump', 'pain', 'skin changes'],
      fr: ['masse mammaire', 'douleur', 'changements cutanés'],
      sw: ['kumba kwa matele', 'maumivu', 'mabadiliko ya ngozi']
    },
    rareSymptoms: {
      en: ['metastasis', 'inflammatory breast cancer', 'death'],
      fr: ['métastases', 'cancer inflammatoire du sein', 'décès'],
      sw: ['kuenea kwa saratani', 'inflammatory breast cancer', 'kifo']
    },
    causes: {
      en: ['genetic mutations', 'hormones', 'age', 'family history', 'alcohol', 'obesity'],
      fr: ['mutations génétiques', 'hormones', 'âge', 'antécédents familiaux'],
      sw: ['mabadiliko ya jeni', 'hormones', 'umri', 'historia ya familia', 'pombe', 'uzani zaidi']
    },
    riskFactors: {
      en: ['female gender', 'age over 50', 'family history', 'BRCA mutations', 'estrogen exposure', 'obesity', 'alcohol'],
      fr: ['sexe féminin', 'âge supérieur à 50 ans', 'antécédents familiaux', 'mutations BRCA'],
      sw: ['kijinsia cha kike', 'umri zaidi ya 50', 'historia ya familia', 'BRCA mutations', 'kupatikana hormone', 'uzani zaidi', 'pombe']
    },
    treatment: {
      en: 'Surgery, radiation therapy, chemotherapy, hormone therapy, targeted therapy.',
      fr: 'Chirurgie, radiothérapie, chimiothérapie, hormonothérapie.',
      sw: 'Operesheni, radiation therapy, chemotherapy, hormone therapy, targeted therapy.'
    },
    prevention: {
      en: 'Regular screening, limit alcohol, maintain healthy weight, regular exercise, breastfeeding.',
      fr: 'Dépistage régulier, limiter l\'alcool, maintenir un poids sain.',
      sw: 'Kupima kawaida, zuia pombe, tengeneza uzani mzuri, tengeneza mwendo, kunyonyeza.'
    },
    whenToSeekHelp: {
      en: 'Seek help immediately for breast lump or skin changes.',
      fr: 'Cherchez de l\'aide immédiatement pour une masse mammaire.',
      sw: 'Tafuta msaada haraka kwa kumba kwa matele au mabadiliko ya ngozi.'
    },
    complications: {
      en: ['metastasis', 'lymphedema', 'bone loss', 'death'],
      fr: ['métastases', 'lymphœdème', 'perte osseuse'],
      sw: ['kuenea kwa saratani', 'lymphedema', 'kupoteza mifupa', 'kifo']
    },
    diagnosis: {
      en: 'Clinical exam, mammography, ultrasound, biopsy, MRI.',
      fr: 'Examen clinique, mammographie, échographie, biopsie.',
      sw: ['Mtihani wa kliniki, mammography, ultrasound, biopsy, MRI']
    },
    prognosis: {
      en: 'Varies by stage and type. Early detection improves prognosis significantly.',
      fr: 'Varie selon le stade et le type.',
      sw: 'Inabadilika kulingana na hatua na aina. Kubaini mapema kunaboresha matokeo.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'medium',
    ageGroup: 'adult',
    gender: 'female'
  },
  {
    id: 'colorectal-cancer',
    name: {
      en: 'Colorectal Cancer',
      fr: 'Cancer Colorectal',
      sw: 'Colorectal Cancer'
    },
    category: 'oncological',
    severity: 'emergency',
    symptoms: {
      en: ['blood in stool', 'change in bowel habits', 'abdominal pain', 'fatigue', 'weight loss', 'anemia'],
      fr: ['sang dans les selles', 'changement des habitudes intestinales', 'douleur abdominale'],
      sw: ['damu katika mavi', 'mabadiliko ya tabia ya mavi', 'maumivu ya tumbo', 'uchovu', 'kupungua kwa uzani', 'anemia']
    },
    commonSymptoms: {
      en: ['blood in stool', 'change in bowel habits', 'fatigue'],
      fr: ['sang dans les selles', 'changement des habitudes intestinales', 'fatigue'],
      sw: ['damu katika mavi', 'mabadiliko ya tabia ya mavi', 'uchovu']
    },
    rareSymptoms: {
      en: ['bowel obstruction', 'perforation', 'metastasis', 'death'],
      fr: ['obstruction intestinale', 'perforation', 'métastases', 'décès'],
      sw: ['kusomeka kwa matumbo', 'kumubuka', 'kuenea kwa saratani', 'kifo']
    },
    causes: {
      en: ['age', 'family history', 'inflammatory bowel disease', 'polyps', 'smoking', 'alcohol', 'diet', 'obesity'],
      fr: ['âge', 'antécédents familiaux', 'maladie inflammatoire de l\'intestin'],
      sw: ['umri', 'historia ya familia', 'ugonjwa wa inflammation ya matumbo', 'polyps', 'sigara', 'pombe', 'chakula', 'uzani zaidi']
    },
    riskFactors: {
      en: ['age over 50', 'family history', 'IBD', 'polyps', 'smoking', 'alcohol', 'high-fat diet', 'obesity', 'sedentary lifestyle'],
      fr: ['âge supérieur à 50 ans', 'antécédents familiaux', 'MICI', 'polypes'],
      sw: ['umri zaidi ya 50', 'historia ya familia', 'IBD', 'polyps', 'sigara', 'pombe', 'chakula yenye mafuta', 'uzani zaidi', 'kufa kwa macho']
    },
    treatment: {
      en: 'Surgery, chemotherapy, radiation therapy, targeted therapy, immunotherapy.',
      fr: 'Chirurgie, chimiothérapie, radiothérapie.',
      sw: 'Operesheni, chemotherapy, radiation therapy, targeted therapy, immunotherapy.'
    },
    prevention: {
      en: 'Regular screening, healthy diet, exercise, avoid smoking/alcohol, maintain healthy weight.',
      fr: 'Dépistage régulier, régime sain, exercice, éviter le tabac/alcool.',
      sw: ['Kupima kawaida, chakula kizuri, tengeneza mwendo, zuia sigara/pombe, tengeneza uzani mzuri']
    },
    whenToSeekHelp: {
      en: 'Seek help for blood in stool or persistent change in bowel habits.',
      fr: 'Cherchez de l\'aide pour du sang dans les selles.',
      sw: 'Tafuta msaada kwa damu katika mavi au mabadiliko ya tabia ya mavi.'
    },
    complications: {
      en: ['bowel obstruction', 'perforation', 'metastasis', 'anemia'],
      fr: ['obstruction intestinale', 'perforation', 'métastases', 'anémie'],
      sw: ['kusomeka kwa matumbo', 'kumubuka', 'kuenea kwa saratani', 'anemia']
    },
    diagnosis: {
      en: 'Colonoscopy, biopsy, CT scan, carcinoembryonic antigen test.',
      fr: 'Colonoscopie, biopsie, tomodensitométrie.',
      sw: ['Colonoscopy, biopsy, CT scan, carcinoembryonic antigen test']
    },
    prognosis: {
      en: 'Early stage has better prognosis. Regular screening significantly improves outcomes.',
      fr: 'Le stade précoce a un meilleur pronostic.',
      sw: 'Hatua ya mapema ina matokeo mazuri. Kupima kawaida kunaboresha matokeo.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'low',
    ageGroup: 'elderly',
    gender: 'all'
  },
  {
    id: 'prostate-cancer',
    name: {
      en: 'Prostate Cancer',
      fr: 'Cancer de la Prostate',
      sw: 'Prostate Cancer'
    },
    category: 'oncological',
    severity: 'high',
    symptoms: {
      en: ['difficulty urinating', 'weak urine stream', 'frequent urination', 'pain during urination', 'blood in urine', 'erectile dysfunction'],
      fr: ['difficulté à uriner', 'jet faible', 'miction fréquente', 'douleur à la miction'],
      sw: ['shida ya kumimina', 'mkondo duni wa mkojo', 'kumimina kawaida', 'maumivu ya kumimina', 'damu katika mkojo', 'kasoro ya jinsia']
    },
    commonSymptoms: {
      en: ['difficulty urinating', 'frequent urination', 'weak urine stream'],
      fr: ['difficulté à uriner', 'miction fréquente', 'jet faible'],
      sw: ['shida ya kumimina', 'kumimina kawaida', 'mkondo duni wa mkojo']
    },
    rareSymptoms: {
      en: ['severe pain', 'metastasis', 'bone metastases', 'death'],
      fr: ['douleur grave', 'métastases', 'métastases osseuses', 'décès'],
      sw: ['maumivu makali', 'kuenea kwa saratani', 'kuenea kwa mifupa', 'kifo']
    },
    causes: {
      en: ['age', 'genetics', 'hormones', 'family history', 'race/ethnicity'],
      fr: ['âge', 'génétique', 'hormones', 'antécédents familiaux'],
      sw: ['umri', 'jenetiki', 'hormones', 'historia ya familia', 'ukabila/asili']
    },
    riskFactors: {
      en: ['age over 65', 'family history', 'African American race', 'obesity', 'smoking'],
      fr: ['âge supérieur à 65 ans', 'antécédents familiaux', 'race afro-américaine'],
      sw: ['umri zaidi ya 65', 'historia ya familia', 'ukabila wa Afrika', 'uzani zaidi', 'sigara']
    },
    treatment: {
      en: 'Active surveillance, surgery, radiation therapy, hormone therapy, chemotherapy.',
      fr: 'Surveillance active, chirurgie, radiothérapie.',
      sw: ['Active surveillance, operesheni, radiation therapy, hormone therapy, chemotherapy']
    },
    prevention: {
      en: 'Regular screening after age 50, healthy diet, exercise, maintain healthy weight.',
      fr: 'Dépistage régulier après 50 ans, régime sain, exercice.',
      sw: ['Kupima kawaida baada ya umri 50, chakula kizuri, tengeneza mwendo, tengeneza uzani']
    },
    whenToSeekHelp: {
      en: 'Seek help for difficulty urinating or blood in urine. Get PSA test if over 50.',
      fr: 'Cherchez de l\'aide pour difficultés à uriner.',
      sw: 'Tafuta msaada kwa shida ya kumimina au damu katika mkojo. Pima PSA kama umri zaidi ya 50.'
    },
    complications: {
      en: ['erectile dysfunction', 'urinary incontinence', 'metastasis', 'hormone resistance'],
      fr: ['dysfonctionnement érectile', 'incontinence urinaire', 'métastases'],
      sw: ['kasoro ya jinsia', 'kutokutaka kumimina', 'kuenea kwa saratani', 'kuzuia hormone']
    },
    diagnosis: {
      en: 'PSA test, digital rectal exam, biopsy, imaging studies.',
      fr: 'Test PSA, toucher rectal, biopsie.',
      sw: ['PSA test, digital rectal exam, biopsy, imaging studies']
    },
    prognosis: {
      en: 'Many prostate cancers grow slowly. Early detection and treatment improve outcomes.',
      fr: 'De nombreux cancers de la prostate se développent lentement.',
      sw: 'Saratani nyingi za prostate huenea polepole. Kubaini na matibabu ya mapema yunaboresha matokeo.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'high',
    ageGroup: 'elderly',
    gender: 'male'
  },
  {
    id: 'cervical-cancer',
    name: {
      en: 'Cervical Cancer',
      fr: 'Cancer du Col de l\'Utérus',
      sw: 'Cervical Cancer'
    },
    category: 'oncological',
    severity: 'high',
    symptoms: {
      en: ['vaginal bleeding', 'unusual vaginal discharge', 'pelvic pain', 'pain during intercourse', 'postmenopausal bleeding'],
      fr: ['saignement vaginal', 'écoulement vaginal anormal', 'douleur pelvienne'],
      sw: ['kutokwa damu kwa uke', 'kumimitika kisicho kawaida', 'maumivu ya pelvis', 'maumivu ya jinsia', 'kutokwa damu baada ya menopause']
    },
    commonSymptoms: {
      en: ['vaginal bleeding', 'unusual discharge', 'pelvic pain'],
      fr: ['saignement vaginal', 'écoulement anormal', 'douleur pelvienne'],
      sw: ['kutokwa damu kwa uke', 'kumimitika kisicho kawaida', 'maumivu ya pelvis']
    },
    rareSymptoms: {
      en: ['metastasis', 'severe bleeding', 'uremia', 'death'],
      fr: ['métastases', 'saignement grave', 'urémie'],
      sw: ['kuenea kwa saratani', 'kutokwa damu kali', 'uremia', 'kifo']
    },
    causes: {
      en: ['HPV infection', 'sexual transmission', 'smoking', 'weak immune system', 'multiple partners'],
      fr: ['infection par VPH', 'transmission sexuelle', 'tabagisme', 'système immunitaire faible'],
      sw: ['ambukizo la HPV', 'kuambukizwa kwa njia ya jinsia', 'sigara', 'kinga duni', 'wanaume wengi']
    },
    riskFactors: {
      en: ['HPV infection', 'smoking', 'weak immune system', 'multiple sexual partners', 'age 30-65'],
      fr: ['infection par VPH', 'tabagisme', 'système immunitaire faible'],
      sw: ['ambukizo la HPV', 'sigara', 'kinga duni', 'wanaume wengi', 'umri 30-65']
    },
    treatment: {
      en: 'Surgery, radiation therapy, chemotherapy, laser therapy, immunotherapy.',
      fr: 'Chirurgie, radiothérapie, chimiothérapie.',
      sw: 'Operesheni, radiation therapy, chemotherapy, laser therapy, immunotherapy.'
    },
    prevention: {
      en: 'HPV vaccination, regular cervical screening, avoid smoking, safe sex.',
      fr: 'Vaccination par VPH, dépistage régulier du col.',
      sw: 'Chanjo ya HPV, kupima col kawaida, zuia sigara, jinsia salama.'
    },
    whenToSeekHelp: {
      en: 'Seek help for abnormal vaginal bleeding or unusual discharge.',
      fr: 'Cherchez de l\'aide pour saignement vaginal anormal.',
      sw: 'Tafuta msaada kwa kutokwa damu kisicho kawaida au kumimitika kisicho kawaida.'
    },
    complications: {
      en: ['metastasis', 'vaginal fistula', 'bowel obstruction', 'kidney failure', 'death'],
      fr: ['métastases', 'fistule vaginale', 'obstruction intestinale'],
      sw: ['kuenea kwa saratani', 'fistula ya uke', 'kusomeka kwa matumbo', 'kushindwa kwa figo', 'kifo']
    },
    diagnosis: {
      en: 'Pap smear, HPV test, colposcopy, biopsy, imaging.',
      fr: 'Frottis Pap, test VPH, colposcopie, biopsie.',
      sw: ['Pap smear, HPV test, colposcopy, biopsy, imaging']
    },
    prognosis: {
      en: 'Early stage cervical cancer has good prognosis. Regular screening prevents most cases.',
      fr: 'Le cancer du col utérin au stade précoce a un bon pronostic.',
      sw: 'Cancer ya cervical ya hatua ya mapema ina matokeo mazuri. Kupima kawaida kuzenga visa vingi.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'very-high',
    ageGroup: 'adult',
    gender: 'female'
  }
];
