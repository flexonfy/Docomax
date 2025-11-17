import { ComprehensiveDisease } from './types';

export const diverseConditions: ComprehensiveDisease[] = [
  {
    id: 'allergic-rhinitis',
    name: {
      en: 'Allergic Rhinitis',
      fr: 'Rhinite Allergique',
      sw: 'Allergic Rhinitis'
    },
    category: 'respiratory',
    severity: 'low',
    symptoms: {
      en: ['sneezing', 'nasal congestion', 'runny nose', 'itchy eyes', 'itchy nose', 'post-nasal drip', 'watery eyes'],
      fr: ['éternuements', 'congestion nasale', 'nez qui coule', 'yeux qui piquent'],
      sw: ['mapumziko', 'pua iliyozuiwa', 'pua inayoingia maji', 'macho yenye kichimbachimba', 'pua yenye kichimbachimba', 'kutoweka kwa pua', 'macho yenye maji']
    },
    commonSymptoms: {
      en: ['sneezing', 'nasal congestion', 'runny nose'],
      fr: ['éternuements', 'congestion nasale', 'nez qui coule'],
      sw: ['mapumziko', 'pua iliyozuiwa', 'pua inayoingia maji']
    },
    rareSymptoms: {
      en: ['severe asthma', 'anaphylaxis', 'sleep apnea'],
      fr: ['asthme grave', 'anaphylaxie', 'apnée du sommeil'],
      sw: ['asthma kali', 'anaphylaxis', 'sleep apnea']
    },
    causes: {
      en: ['pollen', 'dust mites', 'pet dander', 'mold', 'air pollution'],
      fr: ['pollen', 'acariens', 'pellicules d\'animaux de compagnie', 'moisissures'],
      sw: ['unga wa maua', 'mbu wa mavumbi', 'joleo la wanyama', 'fungus', 'uchumi duni wa hewa']
    },
    riskFactors: {
      en: ['family history', 'asthma', 'eczema', 'age 10-30', 'male gender'],
      fr: ['antécédents familiaux', 'asthme', 'eczéma', 'âge 10-30'],
      sw: ['historia ya familia', 'asthma', 'eczema', 'umri 10-30', 'kijinsia cha kiume']
    },
    treatment: {
      en: 'Antihistamines, nasal corticosteroids, decongestants, immunotherapy.',
      fr: 'Antihistaminiques, corticostéroïdes nasaux, décongestionnants.',
      sw: 'Antihistamines, corticosteroids ya pua, decongestants, immunotherapy.'
    },
    prevention: {
      en: 'Avoid allergens, use air purifiers, regular cleaning, nasal saline rinse.',
      fr: 'Éviter les allergènes, utiliser des purificateurs d\'air, nettoyage régulier.',
      sw: 'Zuia allergens, tumia purifiers ya hewa, kusafisha kawaida, kumimina pua kwa maji.'
    },
    whenToSeekHelp: {
      en: 'Seek help if symptoms interfere with daily activities or sleep.',
      fr: 'Cherchez de l\'aide si les symptômes interfèrent avec les activités quotidiennes.',
      sw: 'Tafuta msaada kama dalili zina thiri kwa shughuli za kila siku au utumiaji.'
    },
    complications: {
      en: ['sinusitis', 'otitis media', 'asthma exacerbation', 'sleep disturbance'],
      fr: ['sinusite', 'otite moyenne', 'exacerbation de l\'asthme'],
      sw: ['sinusitis', 'otitis media', 'kuongezeka kwa asthma', 'kuanguka kwa utumiaji']
    },
    diagnosis: {
      en: 'Clinical evaluation, allergy testing, nasal examination.',
      fr: 'Évaluation clinique, test d\'allergie, examen nasal.',
      sw: ['Mtihani wa kliniki, test ya allerji, mtihani wa pua']
    },
    prognosis: {
      en: 'Symptoms can be managed with treatment. Chronic but not life-threatening.',
      fr: 'Les symptômes peuvent être gérés avec le traitement.',
      sw: 'Dalili zinaweza kusimamia na matibabu. Ya mahabadiliko lakini si kuumiza maisha.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'medium',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'acne-vulgaris',
    name: {
      en: 'Acne Vulgaris',
      fr: 'Acné Vulgaire',
      sw: 'Acne Vulgaris'
    },
    category: 'skin',
    severity: 'low',
    symptoms: {
      en: ['pimples', 'blackheads', 'whiteheads', 'cysts', 'nodules', 'oily skin', 'scarring'],
      fr: ['boutons', 'points noirs', 'points blancs', 'kystes', 'nodules', 'peau grasse'],
      sw: ['matope', 'kumba nyeusi', 'kumba weupe', 'cysts', 'nodules', 'ngozi ya mafuta', 'kidonda']
    },
    commonSymptoms: {
      en: ['pimples', 'blackheads', 'oily skin'],
      fr: ['boutons', 'points noirs', 'peau grasse'],
      sw: ['matope', 'kumba nyeusi', 'ngozi ya mafuta']
    },
    rareSymptoms: {
      en: ['severe scarring', 'cystic acne', 'severe psychological distress'],
      fr: ['cicatrisation grave', 'acné kystique', 'détresse psychologique grave'],
      sw: ['kidonda kali', 'acne ya cystic', 'tabu ya akili kali']
    },
    causes: {
      en: ['sebum overproduction', 'bacteria', 'hormonal changes', 'genetics', 'inflammation'],
      fr: ['surproduction de sébum', 'bactéries', 'changements hormonaux', 'génétique'],
      sw: ['kumzi zaidi ya sebum', 'bacterium', 'mabadiliko ya hormone', 'jenetiki', 'inflammation']
    },
    riskFactors: {
      en: ['puberty', 'hormonal changes', 'family history', 'oily skin', 'stress'],
      fr: ['puberté', 'changements hormonaux', 'antécédents familiaux', 'peau grasse'],
      sw: ['uzamili', 'mabadiliko ya hormone', 'historia ya familia', 'ngozi ya mafuta', 'shida']
    },
    treatment: {
      en: 'Topical retinoids, benzoyl peroxide, antibiotics, oral medications, isotretinoin.',
      fr: 'Rétinoïdes topiques, peroxyde de benzoyle, antibiotiques, médicaments oraux.',
      sw: 'Topical retinoids, benzoyl peroxide, antibiotics, dawa ya kinywa, isotretinoin.'
    },
    prevention: {
      en: 'Regular cleansing, avoid heavy oils, stress management, adequate sleep.',
      fr: 'Nettoyage régulier, éviter les huiles lourdes, gestion du stress.',
      sw: 'Kusafisha kawaida, zuia mafuta mazito, kusimamia shida, utumiaji wa kutosha.'
    },
    whenToSeekHelp: {
      en: 'Seek help for severe acne or if causing psychological distress.',
      fr: 'Cherchez de l\'aide pour acné grave ou cause de détresse psychologique.',
      sw: 'Tafuta msaada kwa acne kali au kama inasababisha tabu ya akili.'
    },
    complications: {
      en: ['scarring', 'post-inflammatory hyperpigmentation', 'psychological issues'],
      fr: ['cicatrisation', 'hyperpigmentation post-inflammatoire', 'problèmes psychologiques'],
      sw: ['kidonda', 'kubwa ya rangi baada ya inflammation', 'shida ya akili']
    },
    diagnosis: {
      en: 'Clinical evaluation, visual examination.',
      fr: 'Évaluation clinique, examen visuel.',
      sw: ['Mtihani wa kliniki, mtihani wa macho']
    },
    prognosis: {
      en: 'With treatment, most patients improve significantly. Severity varies.',
      fr: 'Avec le traitement, la plupart des patients s\'améliorent considérablement.',
      sw: 'Na matibabu, wagonjwa wengi wanarudi sana. Kali inabadilika.'
    },
    source: 'dermatology',
    prevalenceInAfrica: 'high',
    ageGroup: 'pediatric',
    gender: 'all'
  },
  {
    id: 'psoriasis',
    name: {
      en: 'Psoriasis',
      fr: 'Psoriasis',
      sw: 'Psoriasis'
    },
    category: 'skin',
    severity: 'medium',
    symptoms: {
      en: ['red patches', 'silvery scales', 'itching', 'burning', 'thickened skin', 'cracked skin', 'bleeding'],
      fr: ['plaques rouges', 'écailles argentées', 'démangeaisons', 'brûlure'],
      sw: ['kumba nyekundu', 'pembe nyingi', 'kichimbachimba', 'moto', 'ngozi iliyothikisha', 'ngozi iliyovunjika', 'kutokwa damu']
    },
    commonSymptoms: {
      en: ['red patches', 'silvery scales', 'itching'],
      fr: ['plaques rouges', 'écailles argentées', 'démangeaisons'],
      sw: ['kumba nyekundu', 'pembe nyingi', 'kichimbachimba']
    },
    rareSymptoms: {
      en: ['erythrodermic psoriasis', 'pustular psoriasis', 'arthritis'],
      fr: ['psoriasis érythrodermique', 'psoriasis pustuleux', 'arthrite'],
      sw: ['erythrodermic psoriasis', 'pustular psoriasis', 'arthritis']
    },
    causes: {
      en: ['genetic factors', 'immune system dysfunction', 'streptococcal infection', 'stress', 'medications'],
      fr: ['facteurs génétiques', 'dysfonctionnement du système immunitaire', 'infection streptococcique'],
      sw: ['sababu ya jenetiki', 'kasoro ya kinga', 'ambukizo la streptococcal', 'shida', 'dawa']
    },
    riskFactors: {
      en: ['family history', 'stress', 'infection', 'obesity', 'smoking', 'alcohol'],
      fr: ['antécédents familiaux', 'stress', 'infection', 'obésité', 'tabagisme', 'alcool'],
      sw: ['historia ya familia', 'shida', 'ambukizo', 'uzani zaidi', 'sigara', 'pombe']
    },
    treatment: {
      en: 'Topical corticosteroids, vitamin D analogues, retinoids, immunosuppressants, biologics.',
      fr: 'Corticostéroïdes topiques, analogues de la vitamine D, rétinoïdes.',
      sw: 'Topical corticosteroids, vitamin D analogues, retinoids, immunosuppressants, biologics.'
    },
    prevention: {
      en: 'Stress management, avoid triggers, maintain skin moisture, avoid infections.',
      fr: 'Gestion du stress, éviter les déclencheurs, maintenir l\'humidité de la peau.',
      sw: 'Kusimamia shida, zuia mambo ya kueza, tengeneza joto la ngozi, zuia ambukizo.'
    },
    whenToSeekHelp: {
      en: 'Seek help for persistent skin symptoms or if affecting quality of life.',
      fr: 'Cherchez de l\'aide pour les symptômes cutanés persistants.',
      sw: 'Tafuta msaada kwa dalili ya ngozi ya mahabadiliko au kama inathiri ubora wa maisha.'
    },
    complications: {
      en: ['psoriatic arthritis', 'infections', 'depression', 'reduced quality of life'],
      fr: ['arthrite psoriasique', 'infections', 'dépression'],
      sw: ['psoriatic arthritis', 'ambukizo', 'kutaka kufa', 'kupungua kwa ubora wa maisha']
    },
    diagnosis: {
      en: 'Clinical evaluation, skin biopsy if needed.',
      fr: 'Évaluation clinique, biopsie cutanée si nécessaire.',
      sw: ['Mtihani wa kliniki, biopsy ya ngozi kama inahitajika']
    },
    prognosis: {
      en: 'Chronic condition. With treatment, many achieve good symptom control.',
      fr: 'Condition chronique. Avec le traitement, beaucoup atteignent un bon contrôle des symptômes.',
      sw: 'Homa ya mahabadiliko. Na matibabu, wengi hupata kudhibiti dalili vizuri.'
    },
    source: 'dermatology',
    prevalenceInAfrica: 'low',
    ageGroup: 'adult',
    gender: 'all'
  },
  {
    id: 'eczema',
    name: {
      en: 'Eczema (Atopic Dermatitis)',
      fr: 'Eczéma (Dermatite Atopique)',
      sw: 'Eczema (Atopic Dermatitis)'
    },
    category: 'skin',
    severity: 'medium',
    symptoms: {
      en: ['itching', 'dry skin', 'redness', 'small raised bumps', 'cracks', 'swelling', 'sensitivity'],
      fr: ['démangeaisons', 'peau sèche', 'rougeur', 'petites bosses élevées'],
      sw: ['kichimbachimba', 'ngozi kavu', 'kumba', 'kumba kidogo', 'vunjika', 'kubwa', 'heshimu']
    },
    commonSymptoms: {
      en: ['itching', 'dry skin', 'redness'],
      fr: ['démangeaisons', 'peau sèche', 'rougeur'],
      sw: ['kichimbachimba', 'ngozi kavu', 'kumba']
    },
    rareSymptoms: {
      en: ['severe infections', 'eczema herpeticum', 'complete disability'],
      fr: ['infections graves', 'eczéma herpétiforme', 'invalidité complète'],
      sw: ['ambukizo kali', 'eczema herpeticum', 'kukamatia kabisa']
    },
    causes: {
      en: ['genetic factors', 'immune dysfunction', 'environmental factors', 'irritants', 'allergens'],
      fr: ['facteurs génétiques', 'dysfonctionnement immunitaire', 'facteurs environnementaux'],
      sw: ['sababu ya jenetiki', 'kasoro ya kinga', 'sababu za mazingira', 'vitu vya msako', 'allergens']
    },
    riskFactors: {
      en: ['family history', 'allergies', 'asthma', 'age under 5', 'female gender'],
      fr: ['antécédents familiaux', 'allergies', 'asthme', 'âge moins de 5 ans'],
      sw: ['historia ya familia', 'maalergeny', 'asthma', 'umri chini ya miaka 5', 'kijinsia cha kike']
    },
    treatment: {
      en: 'Moisturizers, topical corticosteroids, topical calcineurin inhibitors, antihistamines.',
      fr: 'Hydratants, corticostéroïdes topiques, inhibiteurs de la calcineurine.',
      sw: 'Moisturizers, topical corticosteroids, topical calcineurin inhibitors, antihistamines.'
    },
    prevention: {
      en: 'Moisturize regularly, avoid irritants, manage stress, avoid allergens.',
      fr: 'Hydrater régulièrement, éviter les irritants, gérer le stress.',
      sw: 'Kuongeza joto kawaida, zuia vitu vya msako, simamia shida, zuia allergens.'
    },
    whenToSeekHelp: {
      en: 'Seek help for severe itching or if symptoms worsen.',
      fr: 'Cherchez de l\'aide pour démangeaisons graves.',
      sw: 'Tafuta msaada kwa kichimbachimba kali au kama dalili zibadilishwa.'
    },
    complications: {
      en: ['secondary infection', 'sleep deprivation', 'psychological distress', 'disability'],
      fr: ['infection secondaire', 'privation de sommeil', 'détresse psychologique'],
      sw: ['ambukizo la pili', 'kupungua kwa utumiaji', 'tabu ya akili', 'kukamatia']
    },
    diagnosis: {
      en: 'Clinical evaluation, Hanifin and Rajka criteria, patch testing.',
      fr: 'Évaluation clinique, critères de Hanifin et Rajka.',
      sw: ['Mtihani wa kliniki, Hanifin na Rajka criteria, patch testing']
    },
    prognosis: {
      en: 'Many children outgrow eczema. Others have lifelong condition. With treatment, symptoms improve.',
      fr: 'Beaucoup d\'enfants surpassent l\'eczéma.',
      sw: 'Watoto wengi hupita kwa eczema. Wengine wana homa ya umri wote. Na matibabu, dalili zinaboresha.'
    },
    source: 'dermatology',
    prevalenceInAfrica: 'medium',
    ageGroup: 'pediatric',
    gender: 'all'
  },
  {
    id: 'asthma',
    name: {
      en: 'Asthma',
      fr: 'Asthme',
      sw: 'Asthma'
    },
    category: 'respiratory',
    severity: 'high',
    symptoms: {
      en: ['shortness of breath', 'chest tightness', 'wheezing', 'cough', 'difficulty speaking', 'panic', 'fatigue'],
      fr: ['essoufflement', 'serrement thoracique', 'respiration sifflante', 'toux'],
      sw: ['upungufu wa hewa', 'tightness ya kiganja', 'kusikiliza mlio wa hewa', 'kikohozi', 'shida ya kusema', 'hofu', 'uchovu']
    },
    commonSymptoms: {
      en: ['shortness of breath', 'wheezing', 'cough'],
      fr: ['essoufflement', 'respiration sifflante', 'toux'],
      sw: ['upungufu wa hewa', 'kusikiliza mlio wa hewa', 'kikohozi']
    },
    rareSymptoms: {
      en: ['status asthmaticus', 'respiratory failure', 'death'],
      fr: ['status asthmatique', 'insuffisance respiratoire', 'décès'],
      sw: ['status asthmaticus', 'kushindwa kwa ukoffi', 'kifo']
    },
    causes: {
      en: ['allergies', 'triggers', 'infections', 'exercise', 'air pollution', 'smoking'],
      fr: ['allergies', 'déclencheurs', 'infections', 'exercice', 'pollution de l\'air'],
      sw: ['maalergeny', 'mambo ya kueza', 'ambukizo', 'mwendo', 'uchumi duni', 'sigara']
    },
    riskFactors: {
      en: ['family history', 'allergies', 'obesity', 'smoking exposure', 'early respiratory infections'],
      fr: ['antécédents familiaux', 'allergies', 'obésité', 'exposition au tabac'],
      sw: ['historia ya familia', 'maalergeny', 'uzani zaidi', 'kupatikana na sigara', 'ambukizo la respiratory mapema']
    },
    treatment: {
      en: 'Inhalers, corticosteroids, bronchodilators, leukotriene modifiers, immunotherapy.',
      fr: 'Inhalateurs, corticostéroïdes, bronchodilatateurs, modificateurs des leucotriènes.',
      sw: 'Inhalers, corticosteroids, bronchodilators, leukotriene modifiers, immunotherapy.'
    },
    prevention: {
      en: 'Avoid triggers, maintain good hygiene, exercise regularly, manage allergies.',
      fr: 'Éviter les déclencheurs, maintenir une bonne hygiène, faire de l\'exercice régulièrement.',
      sw: 'Zuia mambo ya kueza, tengeneza usafi mzuri, tengeneza mwendo, simamia maalergeny.'
    },
    whenToSeekHelp: {
      en: 'Seek emergency care for severe asthma attack or breathing difficulty.',
      fr: 'Cherchez des soins d\'urgence pour une crise d\'asthme grave.',
      sw: 'Tafuta huduma za haraka kwa mshtuko wa asthma kali au shida ya kupumua.'
    },
    complications: {
      en: ['status asthmaticus', 'respiratory failure', 'pneumothorax', 'death'],
      fr: ['status asthmatique', 'insuffisance respiratoire', 'pneumothorax', 'décès'],
      sw: ['status asthmaticus', 'kushindwa kwa ukoffi', 'pneumothorax', 'kifo']
    },
    diagnosis: {
      en: 'Spirometry, peak flow measurement, bronchial challenge test.',
      fr: 'Spirométrie, mesure du débit de pointe, test de provocation bronchique.',
      sw: ['Spirometry, peak flow measurement, bronchial challenge test']
    },
    prognosis: {
      en: 'With proper management, most people control symptoms and live normal lives.',
      fr: 'Avec une bonne gestion, la plupart des gens contrôlent les symptômes.',
      sw: 'Na kusimamia vizuri, watu wengi wanadhibiti dalili na kuishi maisha ya kawaida.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'medium',
    ageGroup: 'pediatric',
    gender: 'all'
  },
  {
    id: 'copd',
    name: {
      en: 'Chronic Obstructive Pulmonary Disease',
      fr: 'Maladie Pulmonaire Obstructive Chronique',
      sw: 'Chronic Obstructive Pulmonary Disease'
    },
    category: 'respiratory',
    severity: 'high',
    symptoms: {
      en: ['persistent cough', 'shortness of breath', 'wheezing', 'chest tightness', 'fatigue', 'frequent infections'],
      fr: ['toux persistante', 'essoufflement', 'respiration sifflante', 'serrement thoracique'],
      sw: ['kikohozi kila wakati', 'upungufu wa hewa', 'kusikiliza mlio wa hewa', 'tightness ya kiganja', 'uchovu', 'ambukizo kila wakati']
    },
    commonSymptoms: {
      en: ['persistent cough', 'shortness of breath', 'wheezing'],
      fr: ['toux persistante', 'essoufflement', 'respiration sifflante'],
      sw: ['kikohozi kila wakati', 'upungufu wa hewa', 'kusikiliza mlio wa hewa']
    },
    rareSymptoms: {
      en: ['respiratory failure', 'heart failure', 'lung cancer', 'death'],
      fr: ['insuffisance respiratoire', 'insuffisance cardiaque', 'cancer du poumon', 'décès'],
      sw: ['kushindwa kwa ukoffi', 'kushindwa kwa moyo', 'cancer ya mapafu', 'kifo']
    },
    causes: {
      en: ['smoking', 'air pollution', 'occupational exposure', 'genetic factors'],
      fr: ['tabagisme', 'pollution de l\'air', 'exposition professionnelle', 'facteurs génétiques'],
      sw: ['sigara', 'uchumi duni', 'kupatikana kazi', 'sababu ya jenetiki']
    },
    riskFactors: {
      en: ['smoking', 'long-term air pollution', 'occupational exposure', 'age over 40', 'alpha-1 antitrypsin deficiency'],
      fr: ['tabagisme', 'pollution de l\'air à long terme', 'exposition professionnelle'],
      sw: ['sigara', 'uchumi duni wa muda mrefu', 'kupatikana kazi', 'umri zaidi ya 40', 'alpha-1 antitrypsin deficiency']
    },
    treatment: {
      en: 'Smoking cessation, bronchodilators, corticosteroids, oxygen therapy, pulmonary rehabilitation.',
      fr: 'Cessation du tabagisme, bronchodilatateurs, corticostéroïdes, oxygénothérapie.',
      sw: 'Kuacha sigara, bronchodilators, corticosteroids, oxygen therapy, pulmonary rehabilitation.'
    },
    prevention: {
      en: 'Don\'t smoke, avoid air pollution, occupational safety, vaccinations.',
      fr: 'Ne pas fumer, éviter la pollution de l\'air, sécurité professionnelle.',
      sw: 'Usiute sigara, zuia uchumi duni, usalama wa kazi, chanjo.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for worsening shortness of breath or persistent cough.',
      fr: 'Cherchez des soins médicaux pour l\'essoufflement qui s\'aggrave.',
      sw: 'Tafuta huduma za kimatibabu kwa upungufu wa hewa unaoongezeka au kikohozi kila wakati.'
    },
    complications: {
      en: ['respiratory failure', 'heart disease', 'pneumonia', 'lung cancer', 'depression'],
      fr: ['insuffisance respiratoire', 'maladie cardiaque', 'pneumonie', 'cancer du poumon'],
      sw: ['kushindwa kwa ukoffi', 'ugonjwa wa moyo', 'pneumonia', 'cancer ya mapafu', 'kutaka kufa']
    },
    diagnosis: {
      en: 'Spirometry, chest X-ray, CT scan, arterial blood gas.',
      fr: 'Spirométrie, radiographie thoracique, tomodensitométrie.',
      sw: ['Spirometry, picha ya kiganja, CT scan, arterial blood gas']
    },
    prognosis: {
      en: 'Progressive disease. Early detection and lifestyle changes can slow progression.',
      fr: 'Maladie progressive. La détection précoce peut ralentir la progression.',
      sw: 'Homa inayoongezeka. Kubaini mapema na mabadiliko ya maisha kunaweza kupunguza maendeleo.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'medium',
    ageGroup: 'elderly',
    gender: 'all'
  },
  {
    id: 'type-2-diabetes',
    name: {
      en: 'Type 2 Diabetes',
      fr: 'Diabète de Type 2',
      sw: 'Type 2 Diabetes'
    },
    category: 'endocrine',
    severity: 'high',
    symptoms: {
      en: ['increased thirst', 'frequent urination', 'fatigue', 'blurred vision', 'slow healing wounds', 'numbness', 'tingling'],
      fr: ['soif accrue', 'miction fréquente', 'fatigue', 'vision trouble'],
      sw: ['kando ya kunywa maji', 'kumimina kawaida', 'uchovu', 'macho yenye fufu', 'kufa kwa jeraha polepole', 'kutomkuta', 'kuchimbachimba']
    },
    commonSymptoms: {
      en: ['increased thirst', 'frequent urination', 'fatigue'],
      fr: ['soif accrue', 'miction fréquente', 'fatigue'],
      sw: ['kando ya kunywa maji', 'kumimina kawaida', 'uchovu']
    },
    rareSymptoms: {
      en: ['diabetic ketoacidosis', 'hyperosmolar state', 'death'],
      fr: ['acidocétose diabétique', 'état hyperosmolaire', 'décès'],
      sw: ['diabetic ketoacidosis', 'hyperosmolar state', 'kifo']
    },
    causes: {
      en: ['insulin resistance', 'genetic factors', 'obesity', 'poor diet', 'sedentary lifestyle'],
      fr: ['résistance à l\'insuline', 'facteurs génétiques', 'obésité', 'régime médiocre'],
      sw: ['kuzuia insulin', 'sababu ya jenetiki', 'uzani zaidi', 'chakula kibaya', 'kufa kwa macho']
    },
    riskFactors: {
      en: ['obesity', 'age over 45', 'family history', 'sedentary lifestyle', 'poor diet', 'gestational diabetes history'],
      fr: ['obésité', 'âge supérieur à 45 ans', 'antécédents familiaux', 'mode de vie sédentaire'],
      sw: ['uzani zaidi', 'umri zaidi ya 45', 'historia ya familia', 'kufa kwa macho', 'chakula kibaya', 'historia ya gestational diabetes']
    },
    treatment: {
      en: 'Lifestyle changes, metformin, other oral medications, insulin therapy, blood glucose monitoring.',
      fr: 'Changements de mode de vie, metformine, autres médicaments oraux, insulinothérapie.',
      sw: 'Mabadiliko ya maisha, metformin, dawa zingine, insulin therapy, kuzima sukari ya damu.'
    },
    prevention: {
      en: 'Weight management, regular exercise, healthy diet, avoid smoking, stress management.',
      fr: 'Gestion du poids, exercice régulier, régime sain, éviter le tabac.',
      sw: ['Kusimamia uzani, mwendo wa kawaida, chakula kizuri, zuia sigara, kusimamia shida']
    },
    whenToSeekHelp: {
      en: 'Seek help for increased thirst, frequent urination, or fatigue.',
      fr: 'Cherchez de l\'aide pour soif accrue, miction fréquente.',
      sw: 'Tafuta msaada kwa kando ya kunywa maji, kumimina kawaida, au uchovu.'
    },
    complications: {
      en: ['neuropathy', 'nephropathy', 'retinopathy', 'cardiovascular disease', 'foot ulcers', 'amputation'],
      fr: ['neuropathie', 'néphropathie', 'rétinopathie', 'maladie cardiovasculaire'],
      sw: ['neuropathy', 'nephropathy', 'retinopathy', 'ugonjwa wa moyo', 'ulcers ya mguu', 'kukatia']
    },
    diagnosis: {
      en: 'Fasting glucose, hemoglobin A1C, oral glucose tolerance test.',
      fr: 'Glucose à jeun, hémoglobine A1C, test de tolérance au glucose.',
      sw: ['Fasting glucose, hemoglobin A1C, oral glucose tolerance test']
    },
    prognosis: {
      en: 'With proper management, most control blood sugar and prevent complications.',
      fr: 'Avec une bonne gestion, la plupart contrôlent la glycémie.',
      sw: 'Na kusimamia vizuri, wengi wanadhibiti sukari ya damu na kuzenga shida.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'high',
    ageGroup: 'adult',
    gender: 'all'
  },
  {
    id: 'hypertension',
    name: {
      en: 'Hypertension',
      fr: 'Hypertension',
      sw: 'Hypertension'
    },
    category: 'cardiovascular',
    severity: 'high',
    symptoms: {
      en: ['usually asymptomatic', 'headache', 'shortness of breath', 'nosebleeds', 'chest pain', 'dizziness'],
      fr: ['généralement asymptomatique', 'mal de tête', 'essoufflement', 'saignements de nez'],
      sw: ['kawaida hauna dalili', 'maumivu ya kichwa', 'upungufu wa hewa', 'kutokwa damu kwa pua', 'maumivu ya kiganja', 'kuzunguka']
    },
    commonSymptoms: {
      en: ['usually asymptomatic', 'headache', 'chest pain'],
      fr: ['généralement asymptomatique', 'mal de tête', 'douleur thoracique'],
      sw: ['kawaida hauna dalili', 'maumivu ya kichwa', 'maumivu ya kiganja']
    },
    rareSymptoms: {
      en: ['stroke', 'heart attack', 'kidney failure', 'death'],
      fr: ['accident vasculaire cérébral', 'crise cardiaque', 'insuffisance rénale', 'décès'],
      sw: ['kumimina kwa akili', 'seriali ya moyo', 'kushindwa kwa figo', 'kifo']
    },
    causes: {
      en: ['obesity', 'stress', 'excessive salt', 'alcohol', 'lack of exercise', 'age', 'genetics'],
      fr: ['obésité', 'stress', 'sel excessif', 'alcool', 'manque d\'exercice'],
      sw: ['uzani zaidi', 'shida', 'chumvi zaidi', 'pombe', 'ukosefu wa mwendo', 'umri', 'jenetiki']
    },
    riskFactors: {
      en: ['age over 65', 'obesity', 'family history', 'excessive salt', 'alcohol use', 'sedentary lifestyle', 'stress'],
      fr: ['âge supérieur à 65 ans', 'obésité', 'antécédents familiaux', 'sel excessif'],
      sw: ['umri zaidi ya 65', 'uzani zaidi', 'historia ya familia', 'chumvi zaidi', 'kunywa pombe', 'kufa kwa macho', 'shida']
    },
    treatment: {
      en: 'Lifestyle changes, ACE inhibitors, beta-blockers, calcium channel blockers, diuretics.',
      fr: 'Changements de mode de vie, inhibiteurs de l\'ECA, bêtabloquants.',
      sw: 'Mabadiliko ya maisha, ACE inhibitors, beta-blockers, calcium channel blockers, diuretics.'
    },
    prevention: {
      en: 'Maintain healthy weight, reduce salt, limit alcohol, exercise regularly, manage stress.',
      fr: 'Maintenir un poids santé, réduire le sel, limiter l\'alcool, faire de l\'exercice.',
      sw: 'Tengeneza uzani mzuri, punguza chumvi, zuia pombe, tengeneza mwendo, simamia shida.'
    },
    whenToSeekHelp: {
      en: 'Get blood pressure checked regularly. Seek urgent care for chest pain or severe headache.',
      fr: 'Faites vérifier régulièrement votre tension artérielle.',
      sw: 'Pima shinikizo la damu kawaida. Tafuta huduma kwa maumivu ya kiganja au maumivu ya kichwa kali.'
    },
    complications: {
      en: ['stroke', 'heart disease', 'kidney disease', 'eye damage', 'heart failure'],
      fr: ['accident vasculaire cérébral', 'maladie cardiaque', 'maladie rénale', 'dommages oculaires'],
      sw: ['kumimina kwa akili', 'ugonjwa wa moyo', 'ugonjwa wa figo', 'dharau ya macho', 'kushindwa kwa moyo']
    },
    diagnosis: {
      en: 'Blood pressure measurement, ambulatory monitoring, kidney function tests.',
      fr: 'Mesure de la tension artérielle, surveillance ambulatoire.',
      sw: ['Blood pressure measurement, ambulatory monitoring, kidney function tests']
    },
    prognosis: {
      en: 'With medication and lifestyle changes, most achieve good blood pressure control.',
      fr: 'Avec les médicaments et les changements de mode de vie, la plupart contrôlent bien la tension.',
      sw: 'Na dawa na mabadiliko ya maisha, wengi wanadhibiti shinikizo la damu vizuri.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'very-high',
    ageGroup: 'adult',
    gender: 'all'
  }
];
