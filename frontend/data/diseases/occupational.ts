import { ComprehensiveDisease } from './types';

export const occupationalDiseases: ComprehensiveDisease[] = [
  {
    id: 'silicosis',
    name: {
      en: 'Silicosis',
      fr: 'Silicose',
      sw: 'Silicosis'
    },
    category: 'respiratory',
    severity: 'high',
    symptoms: {
      en: ['progressive shortness of breath', 'persistent cough', 'chest pain', 'fatigue', 'wheezing', 'bluish lips', 'chest tightness'],
      fr: ['essoufflement progressif', 'toux persistante', 'douleur thoracique', 'fatigue', 'respiration sifflante'],
      sw: ['upungufu wa hewa unaoongezeka', 'kikohozi kila wakati', 'maumivu ya kiganja', 'uchovu', 'kusikiliza mlio wa hewa', 'midomo ya bluu', 'tightness ya kiganja']
    },
    commonSymptoms: {
      en: ['shortness of breath', 'persistent cough', 'chest pain'],
      fr: ['essoufflement', 'toux persistante', 'douleur thoracique'],
      sw: ['upungufu wa hewa', 'kikohozi kila wakati', 'maumivu ya kiganja']
    },
    rareSymptoms: {
      en: ['respiratory failure', 'heart failure', 'tuberculosis', 'death'],
      fr: ['insuffisance respiratoire', 'insuffisance cardiaque', 'tuberculose', 'décès'],
      sw: ['kushindwa kwa ukoffi', 'kushindwa kwa moyo', 'TB', 'kifo']
    },
    causes: {
      en: ['inhalation of silica dust', 'occupational exposure', 'mining', 'sandblasting', 'foundry work'],
      fr: ['inhalation de poussière de silice', 'exposition professionnelle', 'exploitation minière', 'sablage'],
      sw: ['kumimina povu ya silica', 'kupatikana kazi', 'mgodi', 'sandblasting', 'kazi ya kutengeneza']
    },
    riskFactors: {
      en: ['mining work', 'stonecutting', 'sandblasting', 'duration of exposure', 'inadequate respiratory protection'],
      fr: ['travail minier', 'taille de pierre', 'sablage', 'durée d\'exposition'],
      sw: ['kazi ya mgodi', 'kuchimba mawe', 'sandblasting', 'muda wa kupatikana', 'kinga ya respiratory duni']
    },
    treatment: {
      en: 'Supportive care, respiratory management, oxygen therapy, and disease monitoring.',
      fr: 'Soins de soutien, gestion respiratoire, oxygénothérapie, surveillance de la maladie.',
      sw: 'Huduma ya kusaidia, kusimamia ukoffi, matibabu ya oxygen, na kuzima homa.'
    },
    prevention: {
      en: 'Use respiratory protection, proper ventilation, wet drilling, and occupational health screening.',
      fr: 'Utiliser la protection respiratoire, ventilation appropriée, forage humide.',
      sw: 'Tumia kinga ya respiratory, hewa ya kawaida, kumena kwa maji, na kupima afya ya kazi.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for progressive shortness of breath or chest symptoms.',
      fr: 'Cherchez des soins médicaux pour un essoufflement progressif ou des symptômes thoraciques.',
      sw: 'Tafuta huduma za kimatibabu kwa upungufu wa hewa unaoongezeka au dalili ya kiganja.'
    },
    complications: {
      en: ['progressive lung fibrosis', 'respiratory failure', 'tuberculosis', 'heart disease', 'death'],
      fr: ['fibrose pulmonaire progressive', 'insuffisance respiratoire', 'tuberculose', 'maladie cardiaque'],
      sw: ['kupungua kwa mapafu', 'kushindwa kwa ukoffi', 'TB', 'ugonjwa wa moyo', 'kifo']
    },
    diagnosis: {
      en: 'Chest X-ray, CT scan, pulmonary function tests, or occupational history.',
      fr: 'Radiographie thoracique, tomodensitométrie, tests de fonction pulmonaire.',
      sw: ['picha ya kiganja, CT scan, mtihani wa kazi ya mapafu, au historia ya kazi']
    },
    prognosis: {
      en: 'Progressive disease. Early detection and prevention of exposure improves outcomes.',
      fr: 'Maladie progressive. La détection précoce et la prévention de l\'exposition améliorent les résultats.',
      sw: 'Homa inayoongezeka. Kubaini mapema na kuzidi kupatikana kunaboresha matokeo.'
    },
    source: 'cdc',
    prevalenceInAfrica: 'high',
    ageGroup: 'adult',
    gender: 'all'
  },
  {
    id: 'asbestosis',
    name: {
      en: 'Asbestosis',
      fr: 'Asbestose',
      sw: 'Asbestosis'
    },
    category: 'respiratory',
    severity: 'high',
    symptoms: {
      en: ['shortness of breath', 'persistent cough', 'chest pain', 'chest tightness', 'wheezing', 'bluish lips'],
      fr: ['essoufflement', 'toux persistante', 'douleur thoracique', 'respiration sifflante'],
      sw: ['upungufu wa hewa', 'kikohozi kila wakati', 'maumivu ya kiganja', 'tightness ya kiganja', 'kusikiliza mlio wa hewa', 'midomo ya bluu']
    },
    commonSymptoms: {
      en: ['shortness of breath', 'persistent cough', 'chest pain'],
      fr: ['essoufflement', 'toux persistante', 'douleur thoracique'],
      sw: ['upungufu wa hewa', 'kikohozi kila wakati', 'maumivu ya kiganja']
    },
    rareSymptoms: {
      en: ['mesothelioma', 'lung cancer', 'respiratory failure', 'death'],
      fr: ['mésothéliome', 'cancer du poumon', 'insuffisance respiratoire', 'décès'],
      sw: ['mesothelioma', 'cancer ya mapafu', 'kushindwa kwa ukoffi', 'kifo']
    },
    causes: {
      en: ['inhalation of asbestos fibers', 'occupational exposure', 'construction work', 'insulation installation'],
      fr: ['inhalation de fibres d\'amiante', 'exposition professionnelle', 'travaux de construction', 'installation d\'isolation'],
      sw: ['kumimina nchi ya asbestos', 'kupatikana kazi', 'kazi ya kujenga', 'kuandika kuzida joto']
    },
    riskFactors: {
      en: ['construction work', 'exposure to asbestos', 'duration of exposure', 'smoking'],
      fr: ['travaux de construction', 'exposition à l\'amiante', 'durée d\'exposition', 'tabagisme'],
      sw: ['kazi ya kujenga', 'kupatikana na asbestos', 'muda wa kupatikana', 'kuvuta sigara']
    },
    treatment: {
      en: 'Supportive care, respiratory management, oxygen therapy, and symptom management.',
      fr: 'Soins de soutien, gestion respiratoire, oxygénothérapie, gestion des symptômes.',
      sw: 'Huduma ya kusaidia, kusimamia ukoffi, matibabu ya oxygen, na kudhibiti dalili.'
    },
    prevention: {
      en: 'Avoid asbestos exposure, proper respiratory protection, and occupational safety measures.',
      fr: 'Éviter l\'exposition à l\'amiante, protection respiratoire appropriée, mesures de sécurité professionnelle.',
      sw: 'Zidi kupatikana na asbestos, kinga ya respiratory kawaida, na hatua za usalama wa kazi.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for shortness of breath, persistent cough, or chest pain.',
      fr: 'Cherchez des soins médicaux pour un essoufflement, une toux persistante, une douleur thoracique.',
      sw: 'Tafuta huduma za kimatibabu kwa upungufu wa hewa, kikohozi kila wakati, au maumivu ya kiganja.'
    },
    complications: {
      en: ['lung fibrosis', 'mesothelioma', 'lung cancer', 'respiratory failure', 'death'],
      fr: ['fibrose pulmonaire', 'mésothéliome', 'cancer du poumon', 'insuffisance respiratoire', 'décès'],
      sw: ['mapafu yenye kasoro', 'mesothelioma', 'cancer ya mapafu', 'kushindwa kwa ukoffi', 'kifo']
    },
    diagnosis: {
      en: 'Chest X-ray, CT scan, pulmonary function tests, or occupational history.',
      fr: 'Radiographie thoracique, tomodensitométrie, tests de fonction pulmonaire.',
      sw: 'Picha ya kiganja, CT scan, mtihani wa kazi ya mapafu, au historia ya kazi.'
    },
    prognosis: {
      en: 'Incurable. Severity depends on duration of exposure. Complications can be life-threatening.',
      fr: 'Incurable. La gravité dépend de la durée de l\'exposition.',
      sw: 'Haiwezi kutibu. Kali inategemea muda wa kupatikana. Shida zinaweza kuumiza maisha.'
    },
    source: 'cdc',
    prevalenceInAfrica: 'medium',
    ageGroup: 'adult',
    gender: 'all'
  },
  {
    id: 'lead-poisoning',
    name: {
      en: 'Lead Poisoning',
      fr: 'Empoisonnement au Plomb',
      sw: 'Lead Poisoning'
    },
    category: 'environmental',
    severity: 'high',
    symptoms: {
      en: ['abdominal pain', 'constipation', 'anemia', 'fatigue', 'weakness', 'headache', 'cognitive problems', 'behavioral problems'],
      fr: ['douleur abdominale', 'constipation', 'anémie', 'fatigue', 'faiblesse', 'mal de tête'],
      sw: ['maumivu ya tumbo', 'kushikamana', 'upungufu wa damu', 'uchovu', 'dhaufu', 'maumivu ya kichwa', 'shida ya akili', 'shida ya tabia']
    },
    commonSymptoms: {
      en: ['abdominal pain', 'fatigue', 'weakness'],
      fr: ['douleur abdominale', 'fatigue', 'faiblesse'],
      sw: ['maumivu ya tumbo', 'uchovu', 'dhaufu']
    },
    rareSymptoms: {
      en: ['seizures', 'coma', 'death', 'severe neurological damage'],
      fr: ['crises épileptiques', 'coma', 'décès', 'dommages neurologiques graves'],
      sw: ['mshtuko', 'tunifu', 'kifo', 'dharau makali ya akili']
    },
    causes: {
      en: ['lead exposure', 'contaminated water', 'lead paint', 'occupational exposure', 'lead-contaminated food'],
      fr: ['exposition au plomb', 'eau contaminée', 'peinture au plomb', 'exposition professionnelle'],
      sw: ['kupatikana na risasi', 'maji yenye kamukafu', 'rangi ya risasi', 'kupatikana kazi', 'chakula kisicho safi']
    },
    riskFactors: {
      en: ['occupational exposure', 'residence in old buildings', 'contaminated water', 'children', 'pregnancy'],
      fr: ['exposition professionnelle', 'résidence dans les vieux bâtiments', 'eau contaminée', 'enfants'],
      sw: ['kupatikana kazi', 'kuishi katika nyumba za zamani', 'maji yenye kamukafu', 'watoto', 'ujauzito']
    },
    treatment: {
      en: 'Remove source of exposure, chelation therapy for high levels, supportive care, and monitoring.',
      fr: 'Éliminer la source d\'exposition, thérapie de chélation pour les niveaux élevés.',
      sw: 'Ondoa chanzo cha kupatikana, chelation therapy kwa kiwango cha juu, huduma ya kusaidia, na kuzima.'
    },
    prevention: {
      en: 'Remove lead paint, test water for lead, use protective equipment, and avoid lead exposure.',
      fr: 'Enlever la peinture au plomb, tester l\'eau pour le plomb, utiliser un équipement de protection.',
      sw: 'Ondoa rangi ya risasi, jaribu maji kwa risasi, tumia vifaa vya kinga, na zidi kupatikana.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care if exposed to lead or experiencing abdominal pain, fatigue, or neurological symptoms.',
      fr: 'Cherchez des soins médicaux si vous êtes exposé au plomb ou si vous avez des symptômes.',
      sw: 'Tafuta huduma za kimatibabu kama umepatikana na risasi au una dalili.'
    },
    complications: {
      en: ['neurological damage', 'anemia', 'kidney damage', 'reproductive damage', 'developmental delays'],
      fr: ['dommages neurologiques', 'anémie', 'dommages rénaux', 'dommages reproductifs'],
      sw: ['dharau ya akili', 'upungufu wa damu', 'dharau ya figo', 'dharau ya uzazi', 'chelewa kwa maendeleo']
    },
    diagnosis: {
      en: 'Blood lead level test, environmental testing, or occupational assessment.',
      fr: 'Test du taux de plomb dans le sang, tests environnementaux.',
      sw: 'Mtihani wa kiwango cha risasi katika damu, mtihani wa mazingira, au mtihani wa kazi.'
    },
    prognosis: {
      en: 'With removal of lead source, symptoms improve. Chronic exposure can cause permanent damage.',
      fr: 'Avec l\'enlèvement de la source de plomb, les symptômes s\'améliorent.',
      sw: 'Na kuondoa chanzo cha risasi, dalili zinaboresha. Kupatikana kwa muda mrefu kunaweza kusababisha madhara ya mahabadiliko.'
    },
    source: 'cdc',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'mercury-poisoning',
    name: {
      en: 'Mercury Poisoning',
      fr: 'Empoisonnement au Mercure',
      sw: 'Mercury Poisoning'
    },
    category: 'environmental',
    severity: 'high',
    symptoms: {
      en: ['tremors', 'mood changes', 'memory problems', 'insomnia', 'kidney problems', 'heart rate changes', 'headaches', 'peripheral neuropathy'],
      fr: ['tremblements', 'changements d\'humeur', 'problèmes de mémoire', 'insomnie', 'problèmes rénaux'],
      sw: ['kutikitika', 'mabadiliko ya hisia', 'shida ya kumbuka', 'insomnia', 'shida ya figo', 'mabadiliko ya moyo', 'maumivu ya kichwa', 'neuropathy']
    },
    commonSymptoms: {
      en: ['tremors', 'mood changes', 'memory problems'],
      fr: ['tremblements', 'changements d\'humeur', 'problèmes de mémoire'],
      sw: ['kutikitika', 'mabadiliko ya hisia', 'shida ya kumbuka']
    },
    rareSymptoms: {
      en: ['kidney failure', 'death', 'severe neurological damage', 'loss of consciousness'],
      fr: ['insuffisance rénale', 'décès', 'dommages neurologiques graves'],
      sw: ['kushindwa kwa figo', 'kifo', 'dharau makali ya akili', 'kupoteza fahamu']
    },
    causes: {
      en: ['mercury exposure', 'contaminated fish', 'occupational exposure', 'industrial pollution', 'dental fillings'],
      fr: ['exposition au mercure', 'poisson contaminé', 'exposition professionnelle', 'pollution industrielle'],
      sw: ['kupatikana na mercury', 'samaki yenye kamukafu', 'kupatikana kazi', 'uchumi duni', 'meno ya kuziba']
    },
    riskFactors: {
      en: ['occupational exposure', 'consumption of contaminated fish', 'pregnancy', 'children', 'industrial work'],
      fr: ['exposition professionnelle', 'consommation de poisson contaminé', 'grossesse', 'enfants'],
      sw: ['kupatikana kazi', 'kumla samaki yenye kamukafu', 'ujauzito', 'watoto', 'kazi ya uchumi']
    },
    treatment: {
      en: 'Remove source of exposure, supportive care, and chelation therapy for acute poisoning.',
      fr: 'Éliminer la source d\'exposition, soins de soutien, thérapie de chélation.',
      sw: 'Ondoa chanzo cha kupatikana, huduma ya kusaidia, chelation therapy kwa umeme haraka.'
    },
    prevention: {
      en: 'Avoid contaminated fish, proper industrial safety measures, and minimizing dental fillings.',
      fr: 'Éviter le poisson contaminé, mesures de sécurité industrielle appropriées.',
      sw: 'Zidi samaki yenye kamukafu, hatua za usalama wa uchumi, na kupungua kwa meno ya kuziba.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate care for tremors, personality changes, or neurological symptoms after mercury exposure.',
      fr: 'Cherchez des soins immédiats pour des tremblements, des changements de personnalité.',
      sw: 'Tafuta huduma za haraka kwa kutikitika, mabadiliko ya tabia, au dalili ya akili baada ya kupatikana na mercury.'
    },
    complications: {
      en: ['kidney failure', 'neurological damage', 'psychiatric illness', 'reproductive damage', 'death'],
      fr: ['insuffisance rénale', 'dommages neurologiques', 'maladie psychiatrique', 'dommages reproductifs'],
      sw: ['kushindwa kwa figo', 'dharau ya akili', 'ugonjwa wa akili', 'dharau ya uzazi', 'kifo']
    },
    diagnosis: {
      en: 'Blood mercury level, urine mercury test, or environmental testing.',
      fr: 'Niveau de mercure dans le sang, test de mercure dans l\'urine.',
      sw: 'Kiwango cha mercury katika damu, mtihani wa mercury katika mkojo, au mtihani wa mazingira.'
    },
    prognosis: {
      en: 'With removal of exposure source, some symptoms improve. Neurological damage may be permanent.',
      fr: 'Avec l\'enlèvement de la source d\'exposition, certains symptômes s\'améliorent.',
      sw: 'Na kuondoa chanzo cha kupatikana, dalili zingine zinaboresha. Dharau ya akili inaweza kuwa ya mahabadiliko.'
    },
    source: 'cdc',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'radon-exposure',
    name: {
      en: 'Radon Exposure',
      fr: 'Exposition au Radon',
      sw: 'Radon Exposure'
    },
    category: 'respiratory',
    severity: 'high',
    symptoms: {
      en: ['shortness of breath', 'cough', 'chest pain', 'hoarseness', 'wheezing', 'repeated respiratory infections'],
      fr: ['essoufflement', 'toux', 'douleur thoracique', 'enrouement', 'respiration sifflante'],
      sw: ['upungufu wa hewa', 'kikohozi', 'maumivu ya kiganja', 'sauti batili', 'kusikiliza mlio wa hewa', 'ambukizo la respiratory kila wakati']
    },
    commonSymptoms: {
      en: ['shortness of breath', 'cough'],
      fr: ['essoufflement', 'toux'],
      sw: ['upungufu wa hewa', 'kikohozi']
    },
    rareSymptoms: {
      en: ['lung cancer', 'respiratory failure', 'death'],
      fr: ['cancer du poumon', 'insuffisance respiratoire', 'décès'],
      sw: ['cancer ya mapafu', 'kushindwa kwa ukoffi', 'kifo']
    },
    causes: {
      en: ['radon gas exposure', 'radon in buildings', 'geological sources', 'indoor accumulation'],
      fr: ['exposition au gaz radon', 'radon dans les bâtiments', 'sources géologiques', 'accumulation intérieure'],
      sw: ['kupatikana na gesi radon', 'radon katika nyumba', 'vyanzo vya ardhi', 'kumkutania ndani']
    },
    riskFactors: {
      en: ['living in radon-prone areas', 'poor ventilation', 'smoking', 'occupation in mines'],
      fr: ['vivre dans des zones sujettes au radon', 'ventilation insuffisante', 'tabagisme'],
      sw: ['kuishi katika maeneo ya radon', 'hewa duni', 'kuvuta sigara', 'kazi ya mgodi']
    },
    treatment: {
      en: 'Remove radon source through ventilation, radon mitigation, and symptom management.',
      fr: 'Éliminer la source de radon par la ventilation, l\'atténuation du radon.',
      sw: 'Ondoa chanzo cha radon kupitia hewa, kudhibiti radon, na kudhibiti dalili.'
    },
    prevention: {
      en: 'Test for radon, proper ventilation, radon mitigation systems, and avoid smoking.',
      fr: 'Tester le radon, ventilation appropriée, systèmes d\'atténuation du radon.',
      sw: 'Jaribu radon, hewa kawaida, mifumo ya kudhibiti radon, na zidi sigara.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for persistent cough, shortness of breath, or respiratory symptoms.',
      fr: 'Cherchez des soins médicaux pour une toux persistante, un essoufflement.',
      sw: 'Tafuta huduma za kimatibabu kwa kikohozi kila wakati, upungufu wa hewa, au dalili ya respiratory.'
    },
    complications: {
      en: ['lung cancer', 'respiratory disease', 'respiratory failure'],
      fr: ['cancer du poumon', 'maladie respiratoire', 'insuffisance respiratoire'],
      sw: ['cancer ya mapafu', 'ugonjwa wa respiratory', 'kushindwa kwa ukoffi']
    },
    diagnosis: {
      en: 'Radon testing in home or workplace, lung imaging if symptomatic.',
      fr: 'Test du radon à la maison ou au travail, imagerie pulmonaire si symptomatique.',
      sw: 'Mtihani wa radon nyumbani au kazini, picha ya mapafu kama una dalili.'
    },
    prognosis: {
      en: 'With removal of radon source, risk is significantly reduced. Lung cancer risk persists with chronic exposure.',
      fr: 'Avec l\'enlèvement de la source de radon, le risque est considérablement réduit.',
      sw: 'Na kuondoa chanzo cha radon, hatari inapungua sana. Hatari ya cancer ya mapafu inaendelea na kupatikana kwa muda mrefu.'
    },
    source: 'cdc',
    prevalenceInAfrica: 'low',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'chemical-burn',
    name: {
      en: 'Chemical Burns',
      fr: 'Brûlures Chimiques',
      sw: 'Chemical Burns'
    },
    category: 'emergency',
    severity: 'high',
    symptoms: {
      en: ['pain', 'redness', 'blistering', 'tissue destruction', 'blackened skin', 'numbness', 'respiratory distress if inhaled'],
      fr: ['douleur', 'rougeur', 'ampoules', 'destruction des tissus', 'peau noircie'],
      sw: ['maumivu', 'kumba', 'kumimina', 'kufa kwa tishu', 'ngozi nyeusi', 'kutomkuta', 'upungufu wa hewa kama umimina']
    },
    commonSymptoms: {
      en: ['pain', 'redness', 'blistering'],
      fr: ['douleur', 'rougeur', 'ampoules'],
      sw: ['maumivu', 'kumba', 'kumimina']
    },
    rareSymptoms: {
      en: ['severe tissue necrosis', 'respiratory failure', 'systemic toxicity', 'death'],
      fr: ['nécrose grave des tissus', 'insuffisance respiratoire', 'toxicité systémique', 'décès'],
      sw: ['vifo vya tishu kali', 'kushindwa kwa ukoffi', 'umeme wa kundi', 'kifo']
    },
    causes: {
      en: ['contact with chemicals', 'acids', 'bases', 'oxidizing agents', 'occupational exposure'],
      fr: ['contact avec des produits chimiques', 'acides', 'bases', 'agents oxydants'],
      sw: ['kukamatiana na kemikali', 'asidi', 'misingi', 'wakala wa oxidizing', 'kupatikana kazi']
    },
    riskFactors: {
      en: ['occupational exposure', 'inadequate protective equipment', 'carelessness', 'industrial work'],
      fr: ['exposition professionnelle', 'équipement de protection insuffisant', 'négligence'],
      sw: ['kupatikana kazi', 'vifaa vya kinga duni', 'kupuuza', 'kazi ya uchumi']
    },
    treatment: {
      en: 'Immediate decontamination, flush with water, remove contaminated clothing, wound care, and hospitalization for severe cases.',
      fr: 'Décontamination immédiate, rinçage à l\'eau, retrait des vêtements contaminés, soins des plaies.',
      sw: 'Kuondoa kamukafu haraka, kumimina kwa maji, kuondoa nguo yenye kamukafu, huduma ya jeraha, na huyduma ya hospitali.'
    },
    prevention: {
      en: 'Use proper protective equipment, follow safety procedures, proper storage of chemicals, and training.',
      fr: 'Utiliser un équipement de protection approprié, suivre les procédures de sécurité, stockage approprié des produits chimiques.',
      sw: 'Tumia vifaa vya kinga kawaida, fuata taratibu za usalama, kukamatiana kawaida ya kemikali, na mafunzo.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate emergency care for any chemical burn.',
      fr: 'Cherchez des soins d\'urgence immédiats pour toute brûlure chimique.',
      sw: 'Tafuta huduma za haraka kwa chemical burn yoyote.'
    },
    complications: {
      en: ['infection', 'scarring', 'contracture', 'disfigurement', 'systemic toxicity', 'death'],
      fr: ['infection', 'cicatrisation', 'contracture', 'défigurement', 'toxicité systémique'],
      sw: ['ambukizo', 'kidonda', 'contracture', 'mabadiliko ya uso', 'umeme wa kundi', 'kifo']
    },
    diagnosis: {
      en: 'Clinical evaluation, wound assessment, systemic toxicity screening.',
      fr: 'Évaluation clinique, évaluation de la plaie, dépistage de la toxicité systémique.',
      sw: 'Mtihani wa kliniki, mtihani wa jeraha, mtihani wa umeme wa kundi.'
    },
    prognosis: {
      en: 'Depends on depth and extent of burn. Early treatment improves outcomes.',
      fr: 'Dépend de la profondeur et de l\'étendue de la brûlure.',
      sw: 'Inategemea kina at ubwa wa umeme. Matibabu ya haraka yunaboresha matokeo.'
    },
    source: 'cdc',
    prevalenceInAfrica: 'medium',
    ageGroup: 'all',
    gender: 'all'
  }
];
