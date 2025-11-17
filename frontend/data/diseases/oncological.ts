import { ComprehensiveDisease } from './types';

export const oncologicalDiseases: ComprehensiveDisease[] = [
  {
    id: 'breast-cancer',
    name: {
      en: 'Breast Cancer',
      fr: 'Cancer du Sein',
      sw: 'Saratani ya Matiti'
    },
    category: 'oncological',
    severity: 'high',
    symptoms: {
      en: ['lump in the breast', 'breast pain', 'nipple discharge', 'redness or dimpling of skin', 'swelling of breast', 'nipple turning inward'],
      fr: ['masse dans le sein', 'douleur mammaire', 'écoulement du mamelon', 'rougeur ou fossette de la peau', 'gonflement du sein', 'le mamelon se retourne vers l\'intérieur'],
      sw: ['uvimbe katika matiti', 'maumivu ya matiti', 'kutokwa na kitu kutoka kwa chopa', 'wekundu au kusugua kwa ngozi', 'uvimbe wa matiti', 'chopa kinaingia ndani']
    },
    commonSymptoms: {
      en: ['breast lump', 'breast pain', 'nipple discharge'],
      fr: ['masse mammaire', 'douleur mammaire', 'écoulement du mamelon'],
      sw: ['uvimbe wa matiti', 'maumivu ya matiti', 'kutokwa na kitu kutoka chopa']
    },
    rareSymptoms: {
      en: ['bone pain', 'shortness of breath', 'weight loss'],
      fr: ['douleur osseuse', 'essoufflement', 'perte de poids'],
      sw: ['maumivu ya mifupa', 'upungufu wa pumzi', 'kupungua uzito']
    },
    causes: {
      en: ['genetic mutations', 'hormonal factors', 'reproductive history', 'alcohol use'],
      fr: ['mutations génétiques', 'facteurs hormonaux', 'antécédents de reproduction', 'consommation d\'alcool'],
      sw: ['mabadiliko ya kijeni', 'mambo ya homoni', 'historia ya uzazi', 'matumizi ya pombe']
    },
    riskFactors: {
      en: ['female gender', 'age', 'family history', 'BRCA1/BRCA2 mutations', 'dense breast tissue'],
      fr: ['sexe féminin', 'âge', 'antécédents familiaux', 'mutations BRCA1/BRCA2', 'tissu mammaire dense'],
      sw: ['jinsia ya kike', 'umri', 'historia ya familia', 'mabadiliko ya BRCA1/BRCA2', 'tishu nene ya matiti']
    },
    treatment: {
      en: 'Surgery (lumpectomy, mastectomy), radiation, chemotherapy, hormone therapy, targeted therapy.',
      fr: 'Chirurgie (tumorectomie, mastectomie), radiothérapie, chimiothérapie, hormonothérapie, thérapie ciblée.',
      sw: 'Upasuaji (kuondoa uvimbe kidogo, kuondoa matiti), radiation, chemotherapy, tiba ya homoni, tiba inayolengwa.'
    },
    prevention: {
      en: 'Regular screening, healthy lifestyle, limit alcohol, maintain healthy weight.',
      fr: 'Dépistage régulier, mode de vie sain, limiter l\'alcool, maintenir un poids santé.',
      sw: 'Uchunguzi wa mara kwa mara, mtindo wa maisha wa afya, punguza pombe, dumisha uzito wenye afya.'
    },
    whenToSeekHelp: {
      en: 'See a doctor for any breast changes or lumps.',
      fr: 'Consultez un médecin pour tout changement ou masse mammaire.',
      sw: 'Muone daktari kwa mabadiliko yoyote ya matiti au uvimbe.'
    },
    complications: {
      en: ['metastasis', 'lymphedema', 'heart problems from treatment'],
      fr: ['métastases', 'lymphœdème', 'problèmes cardiaques dus au traitement'],
      sw: ['metastasis', 'lymphedema', 'matatizo ya moyo kutokana na matibabu']
    },
    diagnosis: {
      en: 'Mammography, ultrasound, MRI, biopsy.',
      fr: 'Mammographie, échographie, IRM, biopsie.',
      sw: 'Mammography, ultrasound, MRI, biopsy.'
    },
    prognosis: {
      en: 'Depends on stage and type. Early detection improves survival rates significantly.',
      fr: 'Dépend du stade et du type. La détection précoce améliore considérablement les taux de survie.',
      sw: 'Inaetegemea hatua na aina. Utambuzi wa mapema unaboresha viwango vya kuishi.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'high',
    ageGroup: 'adult',
    gender: 'female'
  },
  {
    id: 'prostate-cancer',
    name: {
      en: 'Prostate Cancer',
      fr: 'Cancer de la Prostate',
      sw: 'Saratani ya Prostate'
    },
    category: 'oncological',
    severity: 'high',
    symptoms: {
      en: ['difficulty urinating', 'weak urine stream', 'blood in urine', 'blood in semen', 'painful ejaculation', 'pain in bones'],
      fr: ['difficulté à uriner', 'faible débit urinaire', 'sang dans les urines', 'sang dans le sperme', 'éjaculation douloureuse', 'douleur osseuse'],
      sw: ['ugumu wa kukojoa', 'mtiririko dhaifu wa mkojo', 'damu kwenye mkojo', 'damu kwenye maji ya kingono', 'kutapiwa wakati wa kutoka kwa maji', 'maumivu ya mifupa']
    },
    commonSymptoms: {
      en: ['difficulty urinating', 'weak urine stream', 'blood in urine'],
      fr: ['difficulté à uriner', 'faible débit urinaire', 'sang dans les urines'],
      sw: ['ugumu wa kukojoa', 'mtiririko dhaifu wa mkojo', 'damu kwenye mkojo']
    },
    rareSymptoms: {
      en: ['erectile dysfunction', 'urinary incontinence', 'back pain'],
      fr: ['dysfonction érectile', 'incontinence urinaire', 'mal de dos'],
      sw: ['shida za kingono', 'ukojwa bila kudhibiti', 'maumivu ya mgongo']
    },
    causes: {
      en: ['genetic mutations', 'age', 'hormonal factors'],
      fr: ['mutations génétiques', 'âge', 'facteurs hormonaux'],
      sw: ['mabadiliko ya kijeni', 'umri', 'mambo ya homoni']
    },
    riskFactors: {
      en: ['age over 50', 'family history', 'African ancestry', 'obesity'],
      fr: ['âge supérieur à 50 ans', 'antécédents familiaux', 'ascendance africaine', 'obésité'],
      sw: ['umri zaidi ya miaka 50', 'historia ya familia', 'asili ya kiafrika', 'unene kupita kiasi']
    },
    treatment: {
      en: 'Surgery, radiation, hormone therapy, chemotherapy, active surveillance.',
      fr: 'Chirurgie, radiothérapie, hormonothérapie, chimiothérapie, surveillance active.',
      sw: 'Upasuaji, radiation, tiba ya homoni, chemotherapy, ufuatiliaji wa haraka.'
    },
    prevention: {
      en: 'Maintain healthy weight, exercise, healthy diet, limit red meat.',
      fr: 'Maintenir un poids santé, faire de l\'exercice, alimentation saine, limiter la viande rouge.',
      sw: 'Dumisha uzito wenye afya, fanya mazoezi, lishe bora, punguza nyama nyekundu.'
    },
    whenToSeekHelp: {
      en: 'See a doctor for urinary symptoms or if you have risk factors.',
      fr: 'Consultez un médecin pour des symptômes urinaires ou si vous avez des facteurs de risque.',
      sw: 'Muone daktari kwa dalili za mkojo au ikiwa una sababu za hatari.'
    },
    complications: {
      en: ['erectile dysfunction', 'urinary incontinence', 'metastasis'],
      fr: ['dysfonction érectile', 'incontinence urinaire', 'métastases'],
      sw: ['shida za kingono', 'ukojwa bila kudhibiti', 'metastasis']
    },
    diagnosis: {
      en: 'PSA blood test, digital rectal exam, biopsy, imaging.',
      fr: 'Test sanguin PSA, toucher rectal, biopsie, imagerie.',
      sw: 'Kipimo cha damu cha PSA, uchunguzi wa kidole wa rektamu, biopsy, picha.'
    },
    prognosis: {
      en: 'Many prostate cancers grow slowly. Early detection improves outcomes.',
      fr: 'De nombreux cancers de la prostate se développent lentement. La détection précoce améliore les résultats.',
      sw: 'Saratani nyingi za prostate huenea polepole. Utambuzi wa mapema unaboresha matokeo.'
    },
    source: 'cdc',
    prevalenceInAfrica: 'high',
    ageGroup: 'elderly',
    gender: 'male'
  },
  {
    id: 'cervical-cancer',
    name: {
      en: 'Cervical Cancer',
      fr: 'Cancer du Col de l\'Utérus',
      sw: 'Saratani ya Kilevu'
    },
    category: 'oncological',
    severity: 'high',
    symptoms: {
      en: ['abnormal vaginal bleeding', 'pelvic pain', 'pain during intercourse', 'vaginal discharge'],
      fr: ['saignements vaginaux anormaux', 'douleur pelvienne', 'douleur pendant les rapports sexuels', 'écoulement vaginal'],
      sw: ['kutokwa damu kwa uke kuisiyo ya kawaida', 'maumivu ya nyonga', 'maumivu wakati wa kujamiiana', 'kutokwa na kitu kutoka kwa uke']
    },
    commonSymptoms: {
      en: ['abnormal vaginal bleeding', 'pelvic pain', 'vaginal discharge'],
      fr: ['saignements vaginaux anormaux', 'douleur pelvienne', 'écoulement vaginal'],
      sw: ['kutokwa damu kwa uke kuisiyo ya kawaida', 'maumivu ya nyonga', 'kutokwa na kitu kutoka kwa uke']
    },
    rareSymptoms: {
      en: ['leg swelling', 'back pain', 'weight loss'],
      fr: ['gonflement des jambes', 'mal de dos', 'perte de poids'],
      sw: ['uvimbe wa miguu', 'maumivu ya mgongo', 'kupungua uzito']
    },
    causes: {
      en: ['HPV infection', 'smoking', 'immunosuppression'],
      fr: ['infection par le VPH', 'tabagisme', 'immunosuppression'],
      sw: ['maambukizi ya HPV', 'uvutaji sigara', 'upungufu wa kinga']
    },
    riskFactors: {
      en: ['HPV infection', 'smoking', 'multiple sexual partners', 'early sexual activity', 'weak immune system'],
      fr: ['infection par le VPH', 'tabagisme', 'partenaires sexuels multiples', 'activité sexuelle précoce', 'système immunitaire faible'],
      sw: ['maambukizi ya HPV', 'uvutaji sigara', 'washirika wengi wa kingono', 'kazi ya kingono ya mapema', 'mfumo dhaifu wa kinga']
    },
    treatment: {
      en: 'Surgery, radiation, chemotherapy.',
      fr: 'Chirurgie, radiothérapie, chimiothérapie.',
      sw: 'Upasuaji, radiation, chemotherapy.'
    },
    prevention: {
      en: 'HPV vaccination, pap smears, safe sex, avoid smoking.',
      fr: 'Vaccination contre le VPH, frottis cervicaux, rapports sexuels protégés, éviter de fumer.',
      sw: 'Chanjo ya HPV, kucheza kwa cervical, ngono salama, epuka kuvuta sigara.'
    },
    whenToSeekHelp: {
      en: 'See a doctor for abnormal vaginal bleeding or if you\'re due for a pap smear.',
      fr: 'Consultez un médecin en cas de saignements vaginaux anormaux ou si vous êtes due pour un frottis cervical.',
      sw: 'Muone daktari kwa kutokwa damu kwa uke kuisiyo ya kawaida au ikiwa umehitaji kucheza kwa cervical.'
    },
    complications: {
      en: ['metastasis', 'infertility', 'bladder problems'],
      fr: ['métastases', 'infertilité', 'problèmes de vessie'],
      sw: ['metastasis', 'utasa', 'matatizo ya kibofu']
    },
    diagnosis: {
      en: 'Pap smear, HPV test, colposcopy, biopsy.',
      fr: 'Frottis cervical, test VPH, colposcopie, biopsie.',
      sw: 'Kucheza kwa cervical, kipimo cha HPV, colposcopy, biopsy.'
    },
    prognosis: {
      en: 'Excellent if detected early. Preventable with HPV vaccination.',
      fr: 'Excellent si détecté tôt. Prévention possible avec la vaccination contre le VPH.',
      sw: 'Nzuri sana ikiwa kugunduliwa mapema. Inaweza kuzuiwa na chanjo ya HPV.'
    },
    source: 'who',
    prevalenceInAfrica: 'very-high',
    ageGroup: 'adult',
    gender: 'female'
  },
  {
    id: 'ovarian-cancer',
    name: {
      en: 'Ovarian Cancer',
      fr: 'Cancer de l\'Ovaire',
      sw: 'Saratani ya Ovari'
    },
    category: 'oncological',
    severity: 'high',
    symptoms: {
      en: ['abdominal bloating', 'abdominal pain', 'pelvic pain', 'back pain', 'constipation', 'loss of appetite'],
      fr: ['ballonnements abdominaux', 'douleur abdominale', 'douleur pelvienne', 'mal de dos', 'constipation', 'perte d\'appétit'],
      sw: ['kuvimbiwa kwa tumbo', 'maumivu ya tumbo', 'maumivu ya nyonga', 'maumivu ya mgongo', 'choo kigumu', 'kupoteza hamu']
    },
    commonSymptoms: {
      en: ['abdominal bloating', 'abdominal pain', 'pelvic pain'],
      fr: ['ballonnements abdominaux', 'douleur abdominale', 'douleur pelvienne'],
      sw: ['kuvimbiwa kwa tumbo', 'maumivu ya tumbo', 'maumivu ya nyonga']
    },
    rareSymptoms: {
      en: ['vaginal bleeding', 'urinary frequency', 'fatigue'],
      fr: ['saignements vaginaux', 'fréquence urinaire', 'fatigue'],
      sw: ['kutokwa damu kwa uke', 'mara kwa mara ya kukojoa', 'uchovu']
    },
    causes: {
      en: ['genetic mutations', 'hormonal factors', 'age'],
      fr: ['mutations génétiques', 'facteurs hormonaux', 'âge'],
      sw: ['mabadiliko ya kijeni', 'mambo ya homoni', 'umri']
    },
    riskFactors: {
      en: ['age over 50', 'family history', 'BRCA mutations', 'obesity', 'never having children'],
      fr: ['âge supérieur à 50 ans', 'antécédents familiaux', 'mutations BRCA', 'obésité', 'ne jamais avoir d\'enfants'],
      sw: ['umri zaidi ya miaka 50', 'historia ya familia', 'mabadiliko ya BRCA', 'unene kupita kiasi', 'kutowahi kuwa na watoto']
    },
    treatment: {
      en: 'Surgery, chemotherapy, targeted therapy.',
      fr: 'Chirurgie, chimiothérapie, thérapie ciblée.',
      sw: 'Upasuaji, chemotherapy, tiba inayolengwa.'
    },
    prevention: {
      en: 'Maintain healthy weight, pregnancy, oral contraceptives may reduce risk.',
      fr: 'Maintenir un poids santé, la grossesse, les contraceptifs oraux peuvent réduire le risque.',
      sw: 'Dumisha uzito wenye afya, ujauzito, vidonge vya kuzuia mimba vinaweza kupunguza hatari.'
    },
    whenToSeekHelp: {
      en: 'See a doctor for persistent abdominal or pelvic symptoms.',
      fr: 'Consultez un médecin en cas de symptômes abdominaux ou pelviens persistants.',
      sw: 'Muone daktari kwa dalili za tumbo au nyonga zinazoendelea.'
    },
    complications: {
      en: ['metastasis', 'bowel obstruction', 'blood clots'],
      fr: ['métastases', 'occlusion intestinale', 'caillots sanguins'],
      sw: ['metastasis', 'kuziba kwa utumbo', 'maganda ya damu']
    },
    diagnosis: {
      en: 'Pelvic exam, ultrasound, CT scan, blood tests (CA-125).',
      fr: 'Examen pelvien, échographie, scanner, tests sanguins (CA-125).',
      sw: 'Uchunguzi wa nyonga, ultrasound, CT scan, vipimo vya damu (CA-125).'
    },
    prognosis: {
      en: 'Depends on stage at diagnosis. Early detection improves survival rates.',
      fr: 'Dépend du stade au moment du diagnostic. La détection précoce améliore les taux de survie.',
      sw: 'Inaetegemea hatua wakati wa utambuzi. Utambuzi wa mapema unaboresha viwango vya kuishi.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'low',
    ageGroup: 'elderly',
    gender: 'female'
  },
  {
    id: 'melanoma',
    name: {
      en: 'Melanoma (Skin Cancer)',
      fr: 'Mélanome (Cancer de la Peau)',
      sw: 'Melanoma (Saratani ya Ngozi)'
    },
    category: 'oncological',
    severity: 'high',
    symptoms: {
      en: ['unusual mole or skin growth', 'change in mole appearance', 'mole that bleeds or oozes', 'dark lesion on skin'],
      fr: ['grain de beauté ou croissance cutanée inhabituel', 'changement d\'apparence du grain de beauté', 'grain de beauté qui saigne ou suinte', 'lésion foncée sur la peau'],
      sw: ['fungu au ukuaji wa ngozi usio wa kawaida', 'mabadiliko ya muonekano wa fungu', 'fungu linalotokwa damu au kumtoka', 'jeraha la giza kwenye ngozi']
    },
    commonSymptoms: {
      en: ['new or changing mole', 'dark skin lesion'],
      fr: ['grain de beauté nouveau ou changeant', 'lésion cutanée foncée'],
      sw: ['fungu jipya au linabadilika', 'jeraha la giza la ngozi']
    },
    rareSymptoms: {
      en: ['itching mole', 'painful mole', 'swollen lymph nodes'],
      fr: ['grain de beauté qui démange', 'grain de beauté douloureux', 'ganglions lymphatiques enflés'],
      sw: ['fungu inayowasha', 'fungu linauma', 'tezi iliyovimba']
    },
    causes: {
      en: ['sun exposure', 'UV radiation', 'genetic factors'],
      fr: ['exposition au soleil', 'rayonnement UV', 'facteurs génétiques'],
      sw: ['mfichuo wa jua', 'mionzi ya UV', 'sababu za kijeni']
    },
    riskFactors: {
      en: ['fair skin', 'many moles', 'family history', 'previous skin cancer', 'sun exposure'],
      fr: ['peau claire', 'nombreux grains de beauté', 'antécédents familiaux', 'antécédents de cancer de la peau', 'exposition au soleil'],
      sw: ['ngozi nyeupe', 'mifungu mingi', 'historia ya familia', 'historia ya saratani ya ngozi', 'mfichuo wa jua']
    },
    treatment: {
      en: 'Surgery, immunotherapy, targeted therapy, chemotherapy.',
      fr: 'Chirurgie, immunothérapie, thérapie ciblée, chimiothérapie.',
      sw: 'Upasuaji, immunotherapy, tiba inayolengwa, chemotherapy.'
    },
    prevention: {
      en: 'Limit sun exposure, use sunscreen, wear protective clothing, avoid tanning beds.',
      fr: 'Limiter l\'exposition au soleil, utiliser un écran solaire, porter des vêtements de protection, éviter les cabines de bronzage.',
      sw: 'Punguza mfichuo wa jua, tumia kuzuia jua, vaa nguo za kujikinga, epuka kabili za jua.'
    },
    whenToSeekHelp: {
      en: 'See a dermatologist for any new or changing skin growth.',
      fr: 'Consultez un dermatologue pour toute nouvelle croissance cutanée ou changeante.',
      sw: 'Muone daktari wa ngozi kwa ukuaji yeyote mpya au wa ngozi unabadilika.'
    },
    complications: {
      en: ['metastasis', 'spread to brain or lungs'],
      fr: ['métastases', 'propagation au cerveau ou aux poumons'],
      sw: ['metastasis', 'kuenea kwenye ubongo au mapafu']
    },
    diagnosis: {
      en: 'Skin biopsy, imaging (if spread suspected).',
      fr: 'Biopsie cutanée, imagerie (si propagation suspectée).',
      sw: 'Biopsy ya ngozi, picha (ikiwa kuenea kinashukiwa).'
    },
    prognosis: {
      en: 'Excellent if detected in early stages. Advanced melanoma has lower survival rates.',
      fr: 'Excellent si détecté aux premiers stades. Le mélanome avancé a des taux de survie plus faibles.',
      sw: 'Nzuri sana ikiwa kugunduliwa katika hatua za mapema. Melanoma ya hali ya juu ina viwango vya kuishi vya chini.'
    },
    source: 'cdc',
    prevalenceInAfrica: 'low',
    ageGroup: 'all',
    gender: 'all'
  }
];
