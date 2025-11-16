import { ComprehensiveDisease } from './types';

export const inflammatoryDiseases: ComprehensiveDisease[] = [
  {
    id: 'rheumatoid-arthritis',
    name: {
      en: 'Rheumatoid Arthritis',
      fr: 'Polyarthrite Rhumatoïde',
      sw: 'Rheumatoid Arthritis'
    },
    category: 'autoimmune',
    severity: 'high',
    symptoms: {
      en: ['joint pain', 'joint swelling', 'joint stiffness', 'fatigue', 'fever', 'weight loss', 'morning stiffness'],
      fr: ['douleur articulaire', 'gonflement articulaire', 'raideur articulaire', 'fatigue', 'fièvre', 'perte de poids'],
      sw: ['maumivu ya mifumo', 'kubwa ya mifumo', 'mwigo wa mifumo', 'uchovu', 'homa', 'kupungua kwa uzani', 'mwigo wa asubuhi']
    },
    commonSymptoms: {
      en: ['joint pain', 'joint swelling', 'morning stiffness'],
      fr: ['douleur articulaire', 'gonflement articulaire', 'raideur matinale'],
      sw: ['maumivu ya mifumo', 'kubwa ya mifumo', 'mwigo wa asubuhi']
    },
    rareSymptoms: {
      en: ['severe joint destruction', 'organ involvement', 'vasculitis', 'disability'],
      fr: ['destruction articulaire grave', 'atteinte d\'organe', 'vascularite'],
      sw: ['kuharibu kwa mifumo kali', 'kukamatiana kwa kiungo', 'vasculitis', 'kukamatia']
    },
    causes: {
      en: ['autoimmune disorder', 'genetic predisposition', 'environmental factors', 'infection'],
      fr: ['trouble auto-immun', 'prédisposition génétique', 'facteurs environnementaux'],
      sw: ['shida ya kujikosea', 'tabia ya jenetiki', 'sababu za mazingira', 'ambukizo']
    },
    riskFactors: {
      en: ['female gender', 'age 40-60', 'smoking', 'family history', 'obesity'],
      fr: ['sexe féminin', 'âge 40-60', 'tabagisme', 'antécédents familiaux'],
      sw: ['kijinsia cha kike', 'umri 40-60', 'kuvuta sigara', 'historia ya familia', 'uzani zaidi']
    },
    treatment: {
      en: 'DMARDs, biologics, NSAIDs, corticosteroids, and physical therapy.',
      fr: 'ARMM, agents biologiques, AINS, corticostéroïdes, et physiothérapie.',
      sw: 'DMARDs, biologics, NSAIDs, corticosteroids, na matibabu ya kimwili.'
    },
    prevention: {
      en: 'Maintain healthy weight, avoid smoking, manage stress, and early treatment.',
      fr: 'Maintenir un poids santé, éviter le tabac, gérer le stress.',
      sw: 'Tengeneza uzani mzuri, zidi sigara, simamia shida, na matibabu ya mapema.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for persistent joint pain, swelling, or morning stiffness lasting more than six weeks.',
      fr: 'Cherchez des soins médicaux pour une douleur articulaire persistante ou une raideur matinale.',
      sw: 'Tafuta huduma za kimatibabu kwa maumivu ya mifumo ya mahabadiliko, kubwa, au mwigo wa asubuhi kwa wiki zaidi ya sita.'
    },
    complications: {
      en: ['joint destruction', 'disability', 'cardiovascular disease', 'infections', 'medication side effects'],
      fr: ['destruction articulaire', 'invalidité', 'maladie cardiovasculaire', 'infections'],
      sw: ['kuharibu kwa mifumo', 'kukamatia', 'ugonjwa wa moyo', 'ambukizo', 'matokeo ya side ya dawa']
    },
    diagnosis: {
      en: 'RF and anti-CCP antibodies, ESR, CRP, imaging studies.',
      fr: 'Anticorps RF et anti-CCP, VSH, CRP, études d\'imagerie.',
      sw: 'RF na anti-CCP antibodies, ESR, CRP, picha za mwili.'
    },
    prognosis: {
      en: 'With early treatment, remission is possible. Without treatment, progressive joint damage occurs.',
      fr: 'Avec un traitement précoce, la rémission est possible.',
      sw: 'Na matibabu ya haraka, kupumzika kunaweza kuwa. Bila matibabu, kuharibu kwa mifumo kunaendelea.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'medium',
    ageGroup: 'adult',
    gender: 'female'
  },
  {
    id: 'systemic-lupus-erythematosus',
    name: {
      en: 'Systemic Lupus Erythematosus',
      fr: 'Lupus Érythémateux Systémique',
      sw: 'Systemic Lupus Erythematosus'
    },
    category: 'autoimmune',
    severity: 'high',
    symptoms: {
      en: ['facial rash', 'joint pain', 'fatigue', 'fever', 'hair loss', 'mouth ulcers', 'shortness of breath', 'chest pain'],
      fr: ['éruption faciale', 'douleur articulaire', 'fatigue', 'fièvre', 'perte de cheveux', 'ulcères buccaux'],
      sw: ['kumba ya uso', 'maumivu ya mifumo', 'uchovu', 'homa', 'kupoteza nywele', 'matope ya kinywa', 'upungufu wa hewa', 'maumivu ya kiganja']
    },
    commonSymptoms: {
      en: ['facial rash', 'joint pain', 'fatigue'],
      fr: ['éruption faciale', 'douleur articulaire', 'fatigue'],
      sw: ['kumba ya uso', 'maumivu ya mifumo', 'uchovu']
    },
    rareSymptoms: {
      en: ['kidney disease', 'neurological complications', 'blood clots', 'heart disease', 'death'],
      fr: ['maladie rénale', 'complications neurologiques', 'caillots sanguins', 'maladie cardiaque'],
      sw: ['ugonjwa wa figo', 'shida ya akili', 'kumba damu', 'ugonjwa wa moyo', 'kifo']
    },
    causes: {
      en: ['autoimmune disorder', 'genetic predisposition', 'environmental factors', 'hormonal factors'],
      fr: ['trouble auto-immun', 'prédisposition génétique', 'facteurs environnementaux', 'facteurs hormonaux'],
      sw: ['shida ya kujikosea', 'tabia ya jenetiki', 'sababu za mazingira', 'sababu ya hormone']
    },
    riskFactors: {
      en: ['female gender', 'age 15-45', 'family history', 'ethnic background', 'sun exposure'],
      fr: ['sexe féminin', 'âge 15-45', 'antécédents familiaux', 'origine ethnique'],
      sw: ['kijinsia cha kike', 'umri 15-45', 'historia ya familia', 'asili ya kijamii', 'kupatikana na jua']
    },
    treatment: {
      en: 'NSAIDs, antimalarials, corticosteroids, immunosuppressants, and biologics.',
      fr: 'AINS, antipaludéens, corticostéroïdes, immunosuppresseurs.',
      sw: 'NSAIDs, antimalarials, corticosteroids, immunosuppressants, na biologics.'
    },
    prevention: {
      en: 'Sun protection, avoid triggers, regular monitoring, and compliance with treatment.',
      fr: 'Protection solaire, éviter les déclencheurs, surveillance régulière.',
      sw: 'Kinga ya jua, zidi mambo ya kueza, kuzima kawaida, na kutegemea matibabu.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for facial rash, joint pain, or systemic symptoms.',
      fr: 'Cherchez des soins médicaux pour une éruption faciale, une douleur articulaire.',
      sw: 'Tafuta huduma za kimatibabu kwa kumba ya uso, maumivu ya mifumo, au dalili ya kundi.'
    },
    complications: {
      en: ['kidney disease', 'neurological disease', 'blood clots', 'heart disease', 'infection'],
      fr: ['maladie rénale', 'maladie neurologique', 'caillots sanguins', 'maladie cardiaque'],
      sw: ['ugonjwa wa figo', 'ugonjwa wa akili', 'kumba damu', 'ugonjwa wa moyo', 'ambukizo']
    },
    diagnosis: {
      en: 'ANA test, anti-dsDNA, complement levels, CBC, and clinical evaluation.',
      fr: 'Test ANA, anti-dsDNA, niveaux de complément, CBC.',
      sw: 'ANA test, anti-dsDNA, kiwango cha complement, CBC, mtihani wa kliniki.'
    },
    prognosis: {
      en: 'Varies widely. With treatment, many patients have good outcomes. Kidney involvement worsens prognosis.',
      fr: 'Varie considérablement. Avec le traitement, de nombreux patients ont de bons résultats.',
      sw: 'Inabadilika sana. Na matibabu, wagonjwa wengi wana matokeo mazuri. Kukamatiana kwa figo kunabadilisha matokeo.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'medium',
    ageGroup: 'adult',
    gender: 'female'
  },
  {
    id: 'sjogrens-syndrome',
    name: {
      en: 'Sjögren\'s Syndrome',
      fr: 'Syndrome de Sjögren',
      sw: 'Sjögren\'s Syndrome'
    },
    category: 'autoimmune',
    severity: 'medium',
    symptoms: {
      en: ['dry eyes', 'dry mouth', 'joint pain', 'fatigue', 'swollen salivary glands', 'difficulty swallowing', 'skin rash'],
      fr: ['yeux secs', 'bouche sèche', 'douleur articulaire', 'fatigue', 'gonflement des glandes salivaires'],
      sw: ['macho kavu', 'kinywa kavu', 'maumivu ya mifumo', 'uchovu', 'nodi za kimya zilizoimba', 'shida ya kumimina', 'kumba ya ngozi']
    },
    commonSymptoms: {
      en: ['dry eyes', 'dry mouth', 'fatigue'],
      fr: ['yeux secs', 'bouche sèche', 'fatigue'],
      sw: ['macho kavu', 'kinywa kavu', 'uchovu']
    },
    rareSymptoms: {
      en: ['kidney disease', 'lung disease', 'neuropathy', 'lymphoma'],
      fr: ['maladie rénale', 'maladie pulmonaire', 'neuropathie', 'lymphome'],
      sw: ['ugonjwa wa figo', 'ugonjwa wa mapafu', 'neuropathy', 'lymphoma']
    },
    causes: {
      en: ['autoimmune disorder', 'genetic factors', 'environmental triggers'],
      fr: ['trouble auto-immun', 'facteurs génétiques', 'déclencheurs environnementaux'],
      sw: ['shida ya kujikosea', 'sababu ya jenetiki', 'mambo ya kueza ya mazingira']
    },
    riskFactors: {
      en: ['female gender', 'age 40-60', 'family history'],
      fr: ['sexe féminin', 'âge 40-60', 'antécédents familiaux'],
      sw: ['kijinsia cha kike', 'umri 40-60', 'historia ya familia']
    },
    treatment: {
      en: 'Artificial tears, saliva substitutes, NSAIDs, antimalarials, and immunosuppressants.',
      fr: 'Larmes artificielles, substituts de salive, AINS, antipaludéens.',
      sw: 'Machozi ya bandia, mbadala ya kimya, NSAIDs, antimalarials, na immunosuppressants.'
    },
    prevention: {
      en: 'Regular eye care, good oral hygiene, and early treatment of complications.',
      fr: 'Soins oculaires réguliers, bonne hygiène buccale.',
      sw: 'Huduma ya macho ya kawaida, usafi mzuri wa kinywa, na matibabu ya haraka ya shida.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for persistent dry eyes or mouth.',
      fr: 'Cherchez des soins médicaux pour des yeux ou une bouche persistemment secs.',
      sw: 'Tafuta huduma za kimatibabu kwa macho au kinywa kavu kila wakati.'
    },
    complications: {
      en: ['eye infections', 'dental disease', 'kidney disease', 'lung disease', 'lymphoma'],
      fr: ['infections oculaires', 'maladie dentaire', 'maladie rénale', 'maladie pulmonaire', 'lymphome'],
      sw: ['ambukizo la macho', 'ugonjwa wa meno', 'ugonjwa wa figo', 'ugonjwa wa mapafu', 'lymphoma']
    },
    diagnosis: {
      en: 'Schirmer test, anti-SSA and anti-SSB antibodies, salivary gland imaging.',
      fr: 'Test de Schirmer, anticorps anti-SSA et anti-SSB, imagerie des glandes salivaires.',
      sw: 'Schirmer test, anti-SSA na anti-SSB antibodies, picha za glande ya kimya.'
    },
    prognosis: {
      en: 'Chronic condition. Most patients have good quality of life with treatment.',
      fr: 'Condition chronique. La plupart des patients ont une bonne qualité de vie avec le traitement.',
      sw: 'Homa ya mahabadiliko. Wagonjwa wengi wana ubora mzuri wa maisha na matibabu.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'low',
    ageGroup: 'adult',
    gender: 'female'
  },
  {
    id: 'scleroderma',
    name: {
      en: 'Scleroderma',
      fr: 'Sclérodermie',
      sw: 'Scleroderma'
    },
    category: 'autoimmune',
    severity: 'high',
    symptoms: {
      en: ['skin tightening', 'skin thickening', 'raynaud phenomenon', 'joint pain', 'fatigue', 'shortness of breath', 'heartburn', 'swallowing difficulty'],
      fr: ['resserrement cutané', 'épaississement cutané', 'phénomène de Raynaud', 'douleur articulaire', 'fatigue'],
      sw: ['kutoa kwa ngozi', 'kuziba kwa ngozi', 'raynaud phenomenon', 'maumivu ya mifumo', 'uchovu', 'upungufu wa hewa', 'moto ndani', 'shida ya kumimina']
    },
    commonSymptoms: {
      en: ['skin tightening', 'skin thickening', 'raynaud phenomenon'],
      fr: ['resserrement cutané', 'épaississement cutané', 'phénomène de Raynaud'],
      sw: ['kutoa kwa ngozi', 'kuziba kwa ngozi', 'raynaud phenomenon']
    },
    rareSymptoms: {
      en: ['skin ulcers', 'kidney failure', 'heart failure', 'lung disease', 'organ failure'],
      fr: ['ulcères cutanés', 'insuffisance rénale', 'insuffisance cardiaque', 'maladie pulmonaire'],
      sw: ['matope ya ngozi', 'kushindwa kwa figo', 'kushindwa kwa moyo', 'ugonjwa wa mapafu', 'kushindwa kwa kiungo']
    },
    causes: {
      en: ['autoimmune disorder', 'genetic factors', 'environmental triggers'],
      fr: ['trouble auto-immun', 'facteurs génétiques', 'déclencheurs environnementaux'],
      sw: ['shida ya kujikosea', 'sababu ya jenetiki', 'mambo ya kueza ya mazingira']
    },
    riskFactors: {
      en: ['female gender', 'age 30-50', 'family history'],
      fr: ['sexe féminin', 'âge 30-50', 'antécédents familiaux'],
      sw: ['kijinsia cha kike', 'umri 30-50', 'historia ya familia']
    },
    treatment: {
      en: 'Immunosuppressants, vasodilators, physical therapy, and organ-specific treatments.',
      fr: 'Immunosuppresseurs, vasodilatateurs, physiothérapie.',
      sw: 'Immunosuppressants, vasodilators, matibabu ya kimwili, na matibabu ya kiungo.'
    },
    prevention: {
      en: 'Avoid triggers, regular monitoring, and early treatment of complications.',
      fr: 'Éviter les déclencheurs, surveillance régulière, traitement précoce des complications.',
      sw: 'Zidi mambo ya kueza, kuzima kawaida, na matibabu ya haraka ya shida.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for progressive skin changes or organ symptoms.',
      fr: 'Cherchez des soins médicaux pour des changements cutanés progressifs.',
      sw: 'Tafuta huduma za kimatibabu kwa mabadiliko ya ngozi au dalili ya kiungo.'
    },
    complications: {
      en: ['skin ulcers', 'kidney disease', 'heart disease', 'lung disease', 'GI complications', 'disability'],
      fr: ['ulcères cutanés', 'maladie rénale', 'maladie cardiaque', 'maladie pulmonaire', 'complications GI'],
      sw: ['matope ya ngozi', 'ugonjwa wa figo', 'ugonjwa wa moyo', 'ugonjwa wa mapafu', 'shida ya matumbo', 'kukamatia']
    },
    diagnosis: {
      en: 'Anti-scl-70 antibodies, anticentromere antibodies, skin biopsy, imaging.',
      fr: 'Anticorps anti-scl-70, anticorps anticentromères, biopsie cutanée.',
      sw: 'Anti-scl-70 antibodies, anticentromere antibodies, biopsy ya ngozi, picha.'
    },
    prognosis: {
      en: 'Varies widely. Limited form has better prognosis than diffuse form.',
      fr: 'Varie largement. La forme limitée a un meilleur pronostic que la forme diffuse.',
      sw: 'Inabadilika sana. Fomu ya mipaka ina matokeo mazuri zaidi kuliko fomu diffuse.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'low',
    ageGroup: 'adult',
    gender: 'female'
  },
  {
    id: 'vasculitis',
    name: {
      en: 'Vasculitis',
      fr: 'Vascularite',
      sw: 'Vasculitis'
    },
    category: 'autoimmune',
    severity: 'high',
    symptoms: {
      en: ['fever', 'fatigue', 'weight loss', 'joint pain', 'skin rash', 'headache', 'neurological symptoms', 'organ involvement'],
      fr: ['fièvre', 'fatigue', 'perte de poids', 'douleur articulaire', 'éruption cutanée', 'mal de tête'],
      sw: ['homa', 'uchovu', 'kupungua kwa uzani', 'maumivu ya mifumo', 'kumba ya ngozi', 'maumivu ya kichwa', 'shida ya akili', 'kukamatiana kwa kiungo']
    },
    commonSymptoms: {
      en: ['fever', 'fatigue', 'rash'],
      fr: ['fièvre', 'fatigue', 'éruption'],
      sw: ['homa', 'uchovu', 'kumba']
    },
    rareSymptoms: {
      en: ['organ failure', 'neurological complications', 'stroke', 'death'],
      fr: ['insuffisance d\'organe', 'complications neurologiques', 'accident vasculaire cérébral'],
      sw: ['kushindwa kwa kiungo', 'shida ya akili', 'kumimina kwa akili', 'kifo']
    },
    causes: {
      en: ['autoimmune disorder', 'infection', 'medications', 'genetic predisposition'],
      fr: ['trouble auto-immun', 'infection', 'médicaments', 'prédisposition génétique'],
      sw: ['shida ya kujikosea', 'ambukizo', 'dawa', 'tabia ya jenetiki']
    },
    riskFactors: {
      en: ['age 50-70', 'infections', 'certain medications'],
      fr: ['âge 50-70', 'infections', 'certains médicaments'],
      sw: ['umri 50-70', 'ambukizo', 'dawa za maalum']
    },
    treatment: {
      en: 'Corticosteroids, immunosuppressants, and treatment of underlying cause.',
      fr: 'Corticostéroïdes, immunosuppresseurs, traitement de la cause sous-jacente.',
      sw: 'Corticosteroids, immunosuppressants, na matibabu ya sababu ya chini.'
    },
    prevention: {
      en: 'Treat underlying infections, avoid causative medications, and regular monitoring.',
      fr: 'Traiter les infections sous-jacentes, éviter les médicaments causatifs.',
      sw: 'Matibabu ya ambukizo ya chini, zidi dawa ya sababu, na kuzima kawaida.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate care for fever, rash with organ symptoms.',
      fr: 'Cherchez des soins immédiats pour la fièvre, éruption avec symptômes d\'organe.',
      sw: 'Tafuta huduma za haraka kwa homa, kumba na dalili ya kiungo.'
    },
    complications: {
      en: ['organ damage', 'organ failure', 'disability', 'death'],
      fr: ['dommages d\'organe', 'insuffisance d\'organe', 'invalidité', 'décès'],
      sw: ['dharau ya kiungo', 'kushindwa kwa kiungo', 'kukamatia', 'kifo']
    },
    diagnosis: {
      en: 'Elevated inflammatory markers, biopsy, imaging, clinical evaluation.',
      fr: 'Marqueurs inflammatoires élevés, biopsie, imagerie, évaluation clinique.',
      sw: ['alama za juu ya inflammation, biopsy, picha, mtihani wa kliniki']
    },
    prognosis: {
      en: 'With treatment, many patients achieve remission. Depends on type and organs involved.',
      fr: 'Avec le traitement, de nombreux patients atteignent la rémission.',
      sw: 'Na matibabu, wagonjwa wengi hupumzika. Inategemea aina na miundo inayokamatiana.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'low',
    ageGroup: 'adult',
    gender: 'all'
  }
];
