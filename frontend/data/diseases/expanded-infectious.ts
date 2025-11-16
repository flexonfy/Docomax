import { ComprehensiveDisease } from './types';

export const expandedInfectiousDiseases: ComprehensiveDisease[] = [
  {
    id: 'meningitis',
    name: {
      en: 'Meningitis',
      fr: 'Méningite',
      sw: 'Meningitis'
    },
    category: 'infectious',
    severity: 'emergency',
    symptoms: {
      en: ['severe headache', 'high fever', 'stiff neck', 'sensitivity to light', 'rash', 'confusion', 'lethargy', 'seizures'],
      fr: ['mal de tête grave', 'fièvre élevée', 'raideur nucale', 'sensibilité à la lumière', 'éruption'],
      sw: ['maumivu ya kichwa makali', 'homa kali', 'kuvimba kwa shingo', 'heshimu kwa mwanga', 'kumba', 'kuchanganyikiwa', 'uchovu', 'mshtuko']
    },
    commonSymptoms: {
      en: ['severe headache', 'high fever', 'stiff neck'],
      fr: ['mal de tête grave', 'fièvre élevée', 'raideur nucale'],
      sw: ['maumivu ya kichwa makali', 'homa kali', 'kuvimba kwa shingo']
    },
    rareSymptoms: {
      en: ['septic shock', 'brain damage', 'deafness', 'death'],
      fr: ['choc septique', 'dommages cérébraux', 'surdité', 'décès'],
      sw: ['mshtuko wa septic', 'dharau ya akili', 'kufa kwa sauti', 'kifo']
    },
    causes: {
      en: ['bacterial infection', 'viral infection', 'fungal infection', 'meningococcal infection'],
      fr: ['infection bactérienne', 'infection virale', 'infection fongique', 'infection méningococcique'],
      sw: ['ambukizo la bacterium', 'ambukizo la virusi', 'ambukizo la fungus', 'ambukizo la meningococcal']
    },
    riskFactors: {
      en: ['age under 5 or over 65', 'immunocompromised', 'close contact with infected person', 'crowded environments'],
      fr: ['âge moins de 5 ans ou plus de 65 ans', 'immunodéprimé', 'contact étroit avec personne infectée'],
      sw: ['umri chini ya miaka 5 au zaidi ya 65', 'kinga duni', 'kukamatiana karibu na mtu aliyeambukizwa', 'mazingira ya kumkutania']
    },
    treatment: {
      en: 'Antibiotics (for bacterial), antivirals (for viral), supportive care, and hospitalization.',
      fr: 'Antibiotiques (pour bactérienne), antiviraux (pour virale), soins de soutien.',
      sw: 'Antibiotics (kwa bacterium), antivirals (kwa virusi), huduma ya kusaidia, na huyduma ya hospitali.'
    },
    prevention: {
      en: 'Meningococcal vaccine, good hygiene, avoid sharing drinks/utensils, and early treatment.',
      fr: 'Vaccin méningococcique, bonne hygiène, éviter de partager les boissons/ustensiles.',
      sw: 'Chanjo ya meningococcal, usafi mzuri, zidi kushiriki chakula/vifaa, na matibabu ya haraka.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate emergency care for severe headache, high fever with stiff neck, or rash.',
      fr: 'Cherchez des soins d\'urgence immédiats pour mal de tête grave, fièvre élevée.',
      sw: 'Tafuta huduma za haraka kwa maumivu ya kichwa makali, homa kali na kuvimba kwa shingo, au kumba.'
    },
    complications: {
      en: ['brain damage', 'septic shock', 'deafness', 'neurological damage', 'death'],
      fr: ['dommages cérébraux', 'choc septique', 'surdité', 'dommages neurologiques'],
      sw: ['dharau ya akili', 'mshtuko wa septic', 'kufa kwa sauti', 'dharau ya akili', 'kifo']
    },
    diagnosis: {
      en: 'CSF analysis, Gram stain, culture, PCR, blood culture.',
      fr: 'Analyse du LCR, coloration de Gram, culture, PCR.',
      sw: 'CSF analysis, Gram stain, culture, PCR, blood culture.'
    },
    prognosis: {
      en: 'With prompt treatment, mortality is reduced significantly. Delayed treatment worsens outcomes.',
      fr: 'Avec un traitement rapide, la mortalité est réduite considérablement.',
      sw: 'Na matibabu ya haraka, kifo kinapungua sana. Matibabu yenye chelewa hubadilisha matokeo.'
    },
    source: 'cdc',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'typhoid',
    name: {
      en: 'Typhoid Fever',
      fr: 'Fièvre Typhoïde',
      sw: 'Typhoid Fever'
    },
    category: 'infectious',
    severity: 'high',
    symptoms: {
      en: ['prolonged fever', 'headache', 'muscle aches', 'weakness', 'abdominal pain', 'diarrhea or constipation', 'rose spots rash'],
      fr: ['fièvre prolongée', 'mal de tête', 'douleurs musculaires', 'faiblesse', 'douleur abdominale'],
      sw: ['homa ya muda mrefu', 'maumivu ya kichwa', 'maumivu ya misuli', 'dhaufu', 'maumivu ya tumbo', 'kuhara au kushikamana', 'kumba ya waridi']
    },
    commonSymptoms: {
      en: ['prolonged fever', 'headache', 'weakness'],
      fr: ['fièvre prolongée', 'mal de tête', 'faiblesse'],
      sw: ['homa ya muda mrefu', 'maumivu ya kichwa', 'dhaufu']
    },
    rareSymptoms: {
      en: ['perforation of intestines', 'peritonitis', 'septic shock', 'encephalitis', 'death'],
      fr: ['perforation des intestins', 'péritonite', 'choc septique', 'encéphalite'],
      sw: ['mtu unayohara', 'peritonitis', 'mshtuko wa septic', 'encephalitis', 'kifo']
    },
    causes: {
      en: ['salmonella typhi bacteria', 'contaminated food or water', 'poor sanitation'],
      fr: ['bactérie salmonella typhi', 'aliments ou eau contaminés', 'assainissement insuffisant'],
      sw: ['bacterium salmonella typhi', 'chakula au maji yenye kamukafu', 'usafi duni']
    },
    riskFactors: {
      en: ['travel to endemic areas', 'poor sanitation', 'contaminated water', 'poor food hygiene'],
      fr: ['voyage dans les zones endémiques', 'assainissement insuffisant', 'eau contaminée'],
      sw: ['kusafiri kwenda maeneo ya ugonjwa', 'usafi duni', 'maji yenye kamukafu', 'usafi duni wa chakula']
    },
    treatment: {
      en: 'Antibiotics (fluoroquinolones or cephalosporins), supportive care, and hydration.',
      fr: 'Antibiotiques (fluoroquinolones ou céphalosporines), soins de soutien.',
      sw: 'Antibiotics (fluoroquinolones au cephalosporins), huduma ya kusaidia, na kumimina kwa maji.'
    },
    prevention: {
      en: 'Typhoid vaccine, clean water, good sanitation, proper food handling, and hand hygiene.',
      fr: 'Vaccin typhoïde, eau propre, bonne assainissement, manipulation appropriée des aliments.',
      sw: 'Chanjo ya typhoid, maji safi, usafi mzuri, kumeta chakula vizuri, na usafi wa mikono.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for sustained high fever lasting more than a few days.',
      fr: 'Cherchez des soins médicaux pour une fièvre élevée soutenue.',
      sw: 'Tafuta huduma za kimatibabu kwa homa kali ya muda mrefu.'
    },
    complications: {
      en: ['intestinal perforation', 'peritonitis', 'septic shock', 'encephalitis', 'myocarditis'],
      fr: ['perforation intestinale', 'péritonite', 'choc septique', 'encéphalite'],
      sw: ['mtu unayohara', 'peritonitis', 'mshtuko wa septic', 'encephalitis', 'myocarditis']
    },
    diagnosis: {
      en: 'Blood culture, Widal test, stool culture, urine culture.',
      fr: 'Culture sanguine, test de Widal, culture fécale, culture d\'urine.',
      sw: 'Blood culture, Widal test, stool culture, urine culture.'
    },
    prognosis: {
      en: 'With antibiotics, mortality is low. Without treatment, mortality is high.',
      fr: 'Avec les antibiotiques, la mortalité est faible.',
      sw: 'Na antibiotics, kifo ni kidogo. Bila matibabu, kifo ni kali.'
    },
    source: 'who',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'measles',
    name: {
      en: 'Measles',
      fr: 'Rougeole',
      sw: 'Measles'
    },
    category: 'infectious',
    severity: 'high',
    symptoms: {
      en: ['high fever', 'cough', 'runny nose', 'conjunctivitis', 'koplik spots', 'rash', 'muscle aches'],
      fr: ['fièvre élevée', 'toux', 'nez qui coule', 'conjonctivite', 'taches de Koplik', 'éruption'],
      sw: ['homa kali', 'kikohozi', 'pua inayoingia maji', 'conjunctivitis', 'koplik spots', 'kumba', 'maumivu ya misuli']
    },
    commonSymptoms: {
      en: ['high fever', 'cough', 'rash'],
      fr: ['fièvre élevée', 'toux', 'éruption'],
      sw: ['homa kali', 'kikohozi', 'kumba']
    },
    rareSymptoms: {
      en: ['encephalitis', 'pneumonia', 'subacute sclerosing panencephalitis', 'death'],
      fr: ['encéphalite', 'pneumonie', 'pan-encéphalite sclérosante subaiguë'],
      sw: ['encephalitis', 'pneumonia', 'subacute sclerosing panencephalitis', 'kifo']
    },
    causes: {
      en: ['measles virus', 'airborne transmission', 'respiratory droplets'],
      fr: ['virus de la rougeole', 'transmission par voie aérienne', 'gouttelettes respiratoires'],
      sw: ['virusi ya measles', 'kuambukizwa kwa hewa', 'matone ya respiratory']
    },
    riskFactors: {
      en: ['unvaccinated status', 'age under 5', 'immunocompromised', 'malnutrition'],
      fr: ['statut non vacciné', 'âge moins de 5 ans', 'immunodéprimé', 'malnutrition'],
      sw: ['kuwa hauna chanjo', 'umri chini ya miaka 5', 'kinga duni', 'mkate duni']
    },
    treatment: {
      en: 'Supportive care, vitamin A supplementation, treat complications, and isolation.',
      fr: 'Soins de soutien, supplémentation en vitamine A, traitement des complications.',
      sw: 'Huduma ya kusaidia, kuongeza vitamin A, matibabu ya shida, na kukamatia.'
    },
    prevention: {
      en: 'MMR vaccine, good hygiene, respiratory precautions, and malnutrition prevention.',
      fr: 'Vaccin RRO, bonne hygiène, précautions respiratoires.',
      sw: 'Chanjo ya MMR, usafi mzuri, hatua za respiratory, na kuzida mkate duni.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for fever with rash, especially in unvaccinated individuals.',
      fr: 'Cherchez des soins médicaux pour la fièvre avec éruption.',
      sw: 'Tafuta huduma za kimatibabu kwa homa na kumba, hapo awali katika watu wasiobadilika.'
    },
    complications: {
      en: ['encephalitis', 'pneumonia', 'otitis media', 'diarrhea', 'subacute sclerosing panencephalitis'],
      fr: ['encéphalite', 'pneumonie', 'otite moyenne', 'diarrhée'],
      sw: ['encephalitis', 'pneumonia', 'otitis media', 'kuhara', 'subacute sclerosing panencephalitis']
    },
    diagnosis: {
      en: 'Clinical evaluation, measles IgM antibody, viral culture, PCR.',
      fr: 'Évaluation clinique, anticorps IgM rougeole, culture virale.',
      sw: 'Mtihani wa kliniki, measles IgM antibody, viral culture, PCR.'
    },
    prognosis: {
      en: 'Most patients recover with supportive care. Complications can be serious.',
      fr: 'La plupart des patients se rétablissent avec les soins de soutien.',
      sw: 'Wagonjwa wengi hupona na huduma ya kusaidia. Shida zinaweza kuwa kali.'
    },
    source: 'cdc',
    prevalenceInAfrica: 'high',
    ageGroup: 'pediatric',
    gender: 'all'
  },
  {
    id: 'whooping-cough',
    name: {
      en: 'Whooping Cough',
      fr: 'Coqueluche',
      sw: 'Whooping Cough'
    },
    category: 'respiratory',
    severity: 'high',
    symptoms: {
      en: ['runny nose', 'sneezing', 'mild cough', 'severe cough', 'whooping sound', 'breathing difficulty', 'vomiting after cough'],
      fr: ['nez qui coule', 'éternuements', 'toux légère', 'toux grave', 'son de coqueluche', 'difficulté à respirer'],
      sw: ['pua inayoingia maji', 'mapumziko', 'kikohozi kidogo', 'kikohozi kali', 'sauti ya whooping', 'shida ya kupumua', 'kutapika baada ya kikohozi']
    },
    commonSymptoms: {
      en: ['runny nose', 'mild cough', 'severe cough'],
      fr: ['nez qui coule', 'toux légère', 'toux grave'],
      sw: ['pua inayoingia maji', 'kikohozi kidogo', 'kikohozi kali']
    },
    rareSymptoms: {
      en: ['pneumonia', 'seizures', 'encephalitis', 'death (especially in infants)'],
      fr: ['pneumonie', 'crises épileptiques', 'encéphalite', 'décès (surtout chez les nourrissons)'],
      sw: ['pneumonia', 'mshtuko', 'encephalitis', 'kifo (hapo awali kwa watoto)']
    },
    causes: {
      en: ['bordetella pertussis bacteria', 'airborne transmission', 'respiratory droplets'],
      fr: ['bactérie bordetella pertussis', 'transmission par voie aérienne', 'gouttelettes respiratoires'],
      sw: ['bacterium bordetella pertussis', 'kuambukizwa kwa hewa', 'matone ya respiratory']
    },
    riskFactors: {
      en: ['unvaccinated status', 'age under 1 year', 'close contact with infected person'],
      fr: ['statut non vacciné', 'âge moins d\'un an', 'contact étroit avec personne infectée'],
      sw: ['kuwa hauna chanjo', 'umri chini ya mwaka 1', 'kukamatiana karibu na mtu aliyeambukizwa']
    },
    treatment: {
      en: 'Antibiotics (azithromycin), supportive care, isolation, and nutrition.',
      fr: 'Antibiotiques (azithromycine), soins de soutien, isolement.',
      sw: 'Antibiotics (azithromycin), huduma ya kusaidia, kukamatia, na virutubishi.'
    },
    prevention: {
      en: 'DTaP/Tdap vaccine, good hygiene, respiratory precautions, and prophylactic antibiotics for contacts.',
      fr: 'Vaccin DTC/dTcP, bonne hygiène, précautions respiratoires.',
      sw: 'Chanjo ya DTaP/Tdap, usafi mzuri, hatua za respiratory, na antibiotics ya kuzida kwa watu wakaribuni.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for severe cough lasting more than two weeks, especially in children.',
      fr: 'Cherchez des soins médicaux pour une toux grave pendant plus de deux semaines.',
      sw: 'Tafuta huduma za kimatibabu kwa kikohozi kali kwa wiki zaidi ya mbili, hapo awali kwa watoto.'
    },
    complications: {
      en: ['pneumonia', 'seizures', 'encephalitis', 'death (infants)', 'apnea spells'],
      fr: ['pneumonie', 'crises épileptiques', 'encéphalite', 'décès (nourrissons)'],
      sw: ['pneumonia', 'mshtuko', 'encephalitis', 'kifo', 'apnea spells']
    },
    diagnosis: {
      en: 'Nasopharyngeal swab culture, PCR, serology.',
      fr: 'Culture nasopharyngée, PCR, sérologie.',
      sw: 'Nasopharyngeal swab culture, PCR, serology.'
    },
    prognosis: {
      en: 'With antibiotics, symptoms improve. Cough may persist for weeks. Infants have highest risk of complications.',
      fr: 'Avec les antibiotiques, les symptômes s\'améliorent.',
      sw: 'Na antibiotics, dalili zinaboresha. Kikohozi kinaweza kuendelea kwa juma. Watoto wana hatari ya juu ya shida.'
    },
    source: 'cdc',
    prevalenceInAfrica: 'medium',
    ageGroup: 'pediatric',
    gender: 'all'
  },
  {
    id: 'rotavirus',
    name: {
      en: 'Rotavirus',
      fr: 'Rotavirus',
      sw: 'Rotavirus'
    },
    category: 'infectious',
    severity: 'medium',
    symptoms: {
      en: ['watery diarrhea', 'vomiting', 'fever', 'abdominal pain', 'loss of appetite', 'dehydration'],
      fr: ['diarrhée aqueuse', 'vomissement', 'fièvre', 'douleur abdominale', 'perte d\'appétit'],
      sw: ['kuhara kwa maji', 'kutapika', 'homa', 'maumivu ya tumbo', 'kupoteza kando', 'kupoteza maji']
    },
    commonSymptoms: {
      en: ['watery diarrhea', 'vomiting', 'fever'],
      fr: ['diarrhée aqueuse', 'vomissement', 'fièvre'],
      sw: ['kuhara kwa maji', 'kutapika', 'homa']
    },
    rareSymptoms: {
      en: ['severe dehydration', 'electrolyte imbalance', 'death (especially in young children)'],
      fr: ['déshydratation grave', 'déséquilibre électrolytique', 'décès (surtout chez les jeunes enfants)'],
      sw: ['kupoteza maji kali', 'kukamatia kwa electrolyte', 'kifo (hapo awali kwa watoto)']
    },
    causes: {
      en: ['rotavirus infection', 'fecal-oral transmission', 'contaminated food or water'],
      fr: ['infection par rotavirus', 'transmission fécale-orale', 'aliments ou eau contaminés'],
      sw: ['ambukizo la rotavirus', 'kuambukizwa kwa njia ya mavi-kinywa', 'chakula au maji yenye kamukafu']
    },
    riskFactors: {
      en: ['age 6 months to 3 years', 'poor sanitation', 'malnutrition', 'immunocompromised'],
      fr: ['âge 6 mois à 3 ans', 'assainissement insuffisant', 'malnutrition', 'immunodéprimé'],
      sw: ['umri miezi 6 hadi miaka 3', 'usafi duni', 'mkate duni', 'kinga duni']
    },
    treatment: {
      en: 'Oral rehydration therapy, supportive care, zinc supplementation, and vitamin A if deficient.',
      fr: 'Thérapie de réhydratation orale, soins de soutien, supplémentation en zinc.',
      sw: 'Matibabu ya kumimina kwa kinywa, huduma ya kusaidia, kuongeza zinc, na vitamin A.'
    },
    prevention: {
      en: 'Rotavirus vaccine, good hygiene, proper sanitation, safe water, and breastfeeding.',
      fr: 'Vaccin rotavirus, bonne hygiène, assainissement approprié, eau sécurisée.',
      sw: 'Chanjo ya rotavirus, usafi mzuri, usafi mzuri, maji salama, na kunyonyeza mama.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for severe diarrhea, persistent vomiting, or signs of dehydration.',
      fr: 'Cherchez des soins médicaux pour une diarrhée grave, un vomissement persistant.',
      sw: 'Tafuta huduma za kimatibabu kwa kuhara kali, kutapika kila wakati, au dalili ya kupoteza maji.'
    },
    complications: {
      en: ['dehydration', 'electrolyte imbalance', 'malnutrition', 'death', 'impaired growth'],
      fr: ['déshydratation', 'déséquilibre électrolytique', 'malnutrition', 'décès'],
      sw: ['kupoteza maji', 'kukamatia kwa electrolyte', 'mkate duni', 'kifo', 'kasoro ya maendeleo']
    },
    diagnosis: {
      en: 'Stool antigen detection, electron microscopy, viral culture.',
      fr: 'Détection d\'antigène fécal, microscopie électronique, culture virale.',
      sw: ['Stool antigen detection, electron microscopy, viral culture']
    },
    prognosis: {
      en: 'Most children recover within 3-8 days with supportive care. Mortality related to dehydration.',
      fr: 'La plupart des enfants se rétablissent en 3-8 jours avec les soins de soutien.',
      sw: 'Watoto wengi hupona ndani ya siku 3-8 na huduma ya kusaidia. Kifo kinategemea kupoteza maji.'
    },
    source: 'cdc',
    prevalenceInAfrica: 'high',
    ageGroup: 'pediatric',
    gender: 'all'
  },
  {
    id: 'hepatitis-a',
    name: {
      en: 'Hepatitis A',
      fr: 'Hépatite A',
      sw: 'Hepatitis A'
    },
    category: 'infectious',
    severity: 'medium',
    symptoms: {
      en: ['jaundice', 'abdominal pain', 'dark urine', 'pale stools', 'nausea', 'vomiting', 'fatigue', 'fever'],
      fr: ['jaunisse', 'douleur abdominale', 'urine foncée', 'selles pâles', 'nausée', 'vomissement'],
      sw: ['ukungu', 'maumivu ya tumbo', 'mkojo weusi', 'mavi ya paali', 'kichefuchefu', 'kutapika', 'uchovu', 'homa']
    },
    commonSymptoms: {
      en: ['jaundice', 'abdominal pain', 'dark urine'],
      fr: ['jaunisse', 'douleur abdominale', 'urine foncée'],
      sw: ['ukungu', 'maumivu ya tumbo', 'mkojo weusi']
    },
    rareSymptoms: {
      en: ['fulminant hepatic failure', 'acute liver failure', 'death'],
      fr: ['insuffisance hépatique fulminante', 'insuffisance hépatique aiguë', 'décès'],
      sw: ['kushindwa kwa ini fulminant', 'kushindwa kwa ini haraka', 'kifo']
    },
    causes: {
      en: ['hepatitis A virus', 'fecal-oral transmission', 'contaminated food or water', 'close contact'],
      fr: ['virus de l\'hépatite A', 'transmission fécale-orale', 'aliments ou eau contaminés'],
      sw: ['virusi ya hepatitis A', 'kuambukizwa kwa njia ya mavi-kinywa', 'chakula au maji yenye kamukafu', 'kukamatiana karibu']
    },
    riskFactors: {
      en: ['travel to endemic areas', 'poor sanitation', 'contaminated water', 'close contact with infected person'],
      fr: ['voyage dans les zones endémiques', 'assainissement insuffisant', 'eau contaminée'],
      sw: ['kusafiri kwenda maeneo ya ugonjwa', 'usafi duni', 'maji yenye kamukafu', 'kukamatiana karibu na mtu aliyeambukizwa']
    },
    treatment: {
      en: 'Supportive care, rest, hydration, avoid alcohol and fatty foods, monitor liver function.',
      fr: 'Soins de soutien, repos, hydratation, éviter l\'alcool et les aliments gras.',
      sw: 'Huduma ya kusaidia, kupumzika, kumimina kwa maji, zidi pombe na chakula cha mafuta, kuzima kazi ya ini.'
    },
    prevention: {
      en: 'Hepatitis A vaccine, good hygiene, safe water, proper sanitation, and careful food handling.',
      fr: 'Vaccin hépatite A, bonne hygiène, eau sécurisée, assainissement approprié.',
      sw: 'Chanjo ya hepatitis A, usafi mzuri, maji salama, usafi mzuri, na kumeta chakula vizuri.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for jaundice, abdominal pain, or dark urine.',
      fr: 'Cherchez des soins médicaux pour une jaunisse, douleur abdominale.',
      sw: 'Tafuta huduma za kimatibabu kwa ukungu, maumivu ya tumbo, au mkojo weusi.'
    },
    complications: {
      en: ['fulminant hepatitis', 'acute liver failure', 'cholestasis', 'relapsing hepatitis'],
      fr: ['hépatite fulminante', 'insuffisance hépatique aiguë', 'cholestase'],
      sw: ['hepatitis fulminant', 'kushindwa kwa ini haraka', 'cholestasis', 'relapsing hepatitis']
    },
    diagnosis: {
      en: 'Hepatitis A IgM antibody, liver function tests, hepatitis A RNA PCR.',
      fr: 'Anticorps IgM hépatite A, tests de la fonction hépatique.',
      sw: ['Hepatitis A IgM antibody, liver function tests, hepatitis A RNA PCR']
    },
    prognosis: {
      en: 'Full recovery in most cases. Fulminant hepatitis can be fatal.',
      fr: 'Récupération complète dans la plupart des cas.',
      sw: 'Uponyaji kamili katika nyingi za visa. Hepatitis fulminant inaweza kuumiza.'
    },
    source: 'cdc',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  }
];
