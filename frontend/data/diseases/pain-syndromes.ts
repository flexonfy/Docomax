import { ComprehensiveDisease } from './types';

export const painSyndromes: ComprehensiveDisease[] = [
  {
    id: 'fibromyalgia',
    name: {
      en: 'Fibromyalgia',
      fr: 'Fibromyalgie',
      sw: 'Fibromyalgia'
    },
    category: 'chronic',
    severity: 'medium',
    symptoms: {
      en: ['widespread muscle pain', 'fatigue', 'sleep problems', 'memory problems', 'mood changes', 'headaches', 'abdominal pain'],
      fr: ['douleur musculaire généralisée', 'fatigue', 'problèmes de sommeil', 'problèmes de mémoire', 'changements d\'humeur', 'maux de tête'],
      sw: ['maumivu ya misuli kwa kila mahali', 'uchovu', 'shida ya utumiaji', 'shida ya kumbuka', 'mabadiliko ya hisia', 'maumivu ya kichwa', 'maumivu ya tumbo']
    },
    commonSymptoms: {
      en: ['widespread muscle pain', 'fatigue', 'sleep problems'],
      fr: ['douleur musculaire généralisée', 'fatigue', 'problèmes de sommeil'],
      sw: ['maumivu ya misuli kwa kila mahali', 'uchovu', 'shida ya utumiaji']
    },
    rareSymptoms: {
      en: ['severe disability', 'cognitive dysfunction', 'suicidal ideation'],
      fr: ['invalidité grave', 'dysfonctionnement cognitif', 'idées suicidaires'],
      sw: ['kukamatia kali', 'kasoro ya akili', 'wazo la kujua']
    },
    causes: {
      en: ['central nervous system sensitization', 'abnormal neurotransmitter levels', 'genetic factors', 'infection', 'trauma'],
      fr: ['sensibilisation du système nerveux central', 'niveaux de neurotransmetteurs anormaux', 'facteurs génétiques'],
      sw: ['kuongeza kwa akili', 'kiwango cha neurotransmitter kisicho kawaida', 'sababu ya jenetiki', 'ambukizo', 'maadhimisho']
    },
    riskFactors: {
      en: ['female gender', 'age 20-60', 'trauma', 'anxiety', 'depression', 'family history'],
      fr: ['sexe féminin', 'âge 20-60', 'trauma', 'anxiété', 'dépression', 'antécédents familiaux'],
      sw: ['kijinsia cha kike', 'umri 20-60', 'maadhimisho', 'wasiwasi', 'kutaka kufa', 'historia ya familia']
    },
    treatment: {
      en: 'Antidepressants, pain management, physical therapy, cognitive behavioral therapy, and exercise.',
      fr: 'Antidépresseurs, gestion de la douleur, physiothérapie, thérapie cognitivo-comportementale.',
      sw: 'Antidepressants, kudhibiti maumivu, matibabu ya kimwili, matibabu ya tabia, na mwendo.'
    },
    prevention: {
      en: 'Stress management, regular exercise, adequate sleep, and avoiding trauma.',
      fr: 'Gestion du stress, exercice régulier, sommeil adéquat, éviter les traumatismes.',
      sw: 'Kusimamia shida, mwendo wa kawaida, utumiaji wa kutosha, na kuzidi maadhimisho.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care if widespread pain persists for more than three months.',
      fr: 'Cherchez des soins médicaux si la douleur généralisée persiste pendant plus de trois mois.',
      sw: 'Tafuta huduma za kimatibabu kama maumivu kwa kila mahali yanaendelea kwa miezi zaidi ya tatu.'
    },
    complications: {
      en: ['depression', 'anxiety', 'disability', 'reduced quality of life', 'opioid dependency'],
      fr: ['dépression', 'anxiété', 'invalidité', 'qualité de vie réduite', 'dépendance aux opioïdes'],
      sw: ['kutaka kufa', 'wasiwasi', 'kukamatia', 'kupungua kwa ubora wa maisha', 'kutegemea opioid']
    },
    diagnosis: {
      en: 'Clinical evaluation, tender point assessment, or diagnostic criteria (ACR).',
      fr: 'Évaluation clinique, évaluation des points sensibles, ou critères diagnostiques (ACR).',
      sw: 'Mtihani wa kliniki, mtihani wa mahali yenye maumivu, au vigezo vya kubaini (ACR).'
    },
    prognosis: {
      en: 'Chronic condition. Symptoms may fluctuate but many patients improve with treatment.',
      fr: 'Condition chronique. Les symptômes peuvent fluctuer mais de nombreux patients s\'améliorent avec le traitement.',
      sw: 'Homa ya mahabadiliko. Dalili zinaweza kubadilika lakini wagonjwa wengi wanarudi heri na matibabu.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'medium',
    ageGroup: 'adult',
    gender: 'female'
  },
  {
    id: 'chronic-fatigue-syndrome',
    name: {
      en: 'Chronic Fatigue Syndrome',
      fr: 'Syndrome de Fatigue Chronique',
      sw: 'Chronic Fatigue Syndrome'
    },
    category: 'chronic',
    severity: 'medium',
    symptoms: {
      en: ['severe exhaustion', 'post-exertional malaise', 'memory problems', 'concentration problems', 'headaches', 'muscle pain', 'sore throat', 'fever'],
      fr: ['épuisement grave', 'malaise post-exertionnel', 'problèmes de mémoire', 'problèmes de concentration', 'maux de tête'],
      sw: ['uchovu mkubwa', 'homa baada ya kazi', 'shida ya kumbuka', 'shida ya kufikiri', 'maumivu ya kichwa', 'maumivu ya misuli', 'kula kwa pua', 'homa']
    },
    commonSymptoms: {
      en: ['severe exhaustion', 'post-exertional malaise', 'memory problems'],
      fr: ['épuisement grave', 'malaise post-exertionnel', 'problèmes de mémoire'],
      sw: ['uchovu mkubwa', 'homa baada ya kazi', 'shida ya kumbuka']
    },
    rareSymptoms: {
      en: ['complete disability', 'severe cognitive decline', 'orthostatic intolerance'],
      fr: ['invalidité complète', 'déclin cognitif grave', 'intolérance orthostatique'],
      sw: ['kukamatia kwa kukamatiana', 'kupungua kwa akili kali', 'kutoweza kusimama']
    },
    causes: {
      en: ['viral infection', 'immune dysfunction', 'mitochondrial dysfunction', 'genetic factors'],
      fr: ['infection virale', 'dysfonctionnement immunitaire', 'dysfonctionnement mitochondrial'],
      sw: ['ambukizo la virusi', 'kasoro ya kinga', 'kasoro ya mitochondrial', 'sababu ya jenetiki']
    },
    riskFactors: {
      en: ['female gender', 'age 40-60', 'previous infection', 'emotional stress', 'physical trauma'],
      fr: ['sexe féminin', 'âge 40-60', 'infection antérieure', 'stress émotionnel', 'traumatisme physique'],
      sw: ['kijinsia cha kike', 'umri 40-60', 'ambukizo hapo awali', 'shida ya hisia', 'maadhimisho ya kimwili']
    },
    treatment: {
      en: 'Pacing and activity management, cognitive behavioral therapy, and symptom management.',
      fr: 'Gestion du rythme et des activités, thérapie cognitivo-comportementale.',
      sw: 'Kusimamia kiwango na shughuli, matibabu ya tabia, na kudhibiti dalili.'
    },
    prevention: {
      en: 'Avoid overexertion, manage stress, and maintain adequate rest.',
      fr: 'Éviter le surmenage, gérer le stress, maintenir un repos adéquat.',
      sw: 'Zidi kazi zaidi, simamia shida, na tengeneza pumziko la kutosha.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care if severe fatigue persists for more than six months and impacts daily functioning.',
      fr: 'Cherchez des soins médicaux si la fatigue grave persiste pendant plus de six mois.',
      sw: 'Tafuta huduma za kimatibabu kama uchovu mkubwa unaendelea kwa miezi zaidi ya sita na inathiri kazi ya kila siku.'
    },
    complications: {
      en: ['depression', 'anxiety', 'disability', 'reduced quality of life', 'social isolation'],
      fr: ['dépression', 'anxiété', 'invalidité', 'qualité de vie réduite', 'isolement social'],
      sw: ['kutaka kufa', 'wasiwasi', 'kukamatia', 'kupungua kwa ubora wa maisha', 'kukamatia kwa kijamii']
    },
    diagnosis: {
      en: 'Clinical evaluation, exclusion of other conditions, symptom severity assessment.',
      fr: 'Évaluation clinique, exclusion d\'autres conditions, évaluation de la gravité des symptômes.',
      sw: 'Mtihani wa kliniki, kuzidi homa ingine, mtihani wa ukubwa wa dalili.'
    },
    prognosis: {
      en: 'Chronic condition. Some patients recover over time, while others improve gradually with management.',
      fr: 'Condition chronique. Certains patients se rétablissent avec le temps.',
      sw: 'Homa ya mahabadiliko. Wagonjwa wengine hupona kwa muda, wakati wengine wanarudi pole pole na kusimamia.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'low',
    ageGroup: 'adult',
    gender: 'female'
  },
  {
    id: 'complex-regional-pain-syndrome',
    name: {
      en: 'Complex Regional Pain Syndrome',
      fr: 'Syndrome Douloureux Régional Complexe',
      sw: 'Complex Regional Pain Syndrome'
    },
    category: 'chronic',
    severity: 'high',
    symptoms: {
      en: ['severe burning pain', 'swelling', 'color changes', 'temperature changes', 'skin changes', 'motor problems', 'functional impairment'],
      fr: ['douleur brûlante grave', 'gonflement', 'changements de couleur', 'changements de température', 'changements cutanés'],
      sw: ['maumivu makali ya moto', 'kubwa', 'mabadiliko ya rangi', 'mabadiliko ya joto', 'mabadiliko ya ngozi', 'shida ya motor', 'kasoro ya kazi']
    },
    commonSymptoms: {
      en: ['severe burning pain', 'swelling', 'color changes'],
      fr: ['douleur brûlante grave', 'gonflement', 'changements de couleur'],
      sw: ['maumivu makali ya moto', 'kubwa', 'mabadiliko ya rangi']
    },
    rareSymptoms: {
      en: ['severe disability', 'atrophy', 'permanent disability', 'suicide'],
      fr: ['invalidité grave', 'atrophie', 'invalidité permanente', 'suicide'],
      sw: ['kukamatia kali', 'kupungua kwa mwili', 'kukamatia ya mahabadiliko', 'kujua']
    },
    causes: {
      en: ['traumatic injury', 'nerve injury', 'surgery', 'immobilization', 'neuroinflammation'],
      fr: ['blessure traumatique', 'blessure nerveuse', 'chirurgie', 'immobilisation'],
      sw: ['jeraha la maadhimisho', 'jeraha la akili', 'operesheni', 'kusimamia', 'inflammation ya akili']
    },
    riskFactors: {
      en: ['traumatic injury', 'female gender', 'age 30-60', 'immobility'],
      fr: ['blessure traumatique', 'sexe féminin', 'âge 30-60', 'immobilité'],
      sw: ['jeraha la maadhimisho', 'kijinsia cha kike', 'umri 30-60', 'kutokuwa na mwendo']
    },
    treatment: {
      en: 'Physical therapy, medications, sympathetic nerve blocks, and psychotherapy.',
      fr: 'Physiothérapie, médicaments, blocs nerveux sympathiques, et psychothérapie.',
      sw: 'Matibabu ya kimwili, dawa, kuzuia akili, na matibabu ya akili.'
    },
    prevention: {
      en: 'Adequate pain management after injury and early rehabilitation.',
      fr: 'Gestion adéquate de la douleur après blessure et réadaptation précoce.',
      sw: 'Kudhibiti maumivu baada ya jeraha na kuleza haraka.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate care for severe pain after trauma, swelling, and color changes.',
      fr: 'Cherchez des soins immédiats pour une douleur grave après un traumatisme, un gonflement.',
      sw: 'Tafuta huduma za haraka kwa maumivu makali baada ya maadhimisho, kubwa, na mabadiliko ya rangi.'
    },
    complications: {
      en: ['permanent disability', 'muscle atrophy', 'bone loss', 'depression', 'suicide'],
      fr: ['invalidité permanente', 'atrophie musculaire', 'perte osseuse', 'dépression'],
      sw: ['kukamatia ya mahabadiliko', 'kupungua kwa misuli', 'kupoteza mifupa', 'kutaka kufa', 'kujua']
    },
    diagnosis: {
      en: 'Clinical evaluation, diagnostic criteria, imaging studies, or sympathetic skin response test.',
      fr: 'Évaluation clinique, critères diagnostiques, études d\'imagerie.',
      sw: 'Mtihani wa kliniki, vigezo vya kubaini, picha za mwili, au mtihani wa akili.'
    },
    prognosis: {
      en: 'Variable. Early treatment improves outcomes significantly. Some patients recover, others have persistent symptoms.',
      fr: 'Variable. Le traitement précoce améliore considérablement les résultats.',
      sw: 'Inabadilika. Matibabu ya mapema yunaboresha matokeo sana. Wagonjwa wengine hupona, wengine wana dalili ya mahabadiliko.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'low',
    ageGroup: 'adult',
    gender: 'all'
  },
  {
    id: 'neuropathic-pain',
    name: {
      en: 'Neuropathic Pain',
      fr: 'Douleur Neuropathique',
      sw: 'Neuropathic Pain'
    },
    category: 'neurological',
    severity: 'medium',
    symptoms: {
      en: ['burning sensation', 'tingling', 'numbness', 'shooting pain', 'electric shock sensation', 'weakness', 'loss of sensation'],
      fr: ['sensation de brûlure', 'picotements', 'engourdissement', 'douleur lancinante', 'sensation de choc électrique'],
      sw: ['moto', 'kuchimbachimba', 'kutomkuta', 'maumivu ya risasi', 'homa ya umeme', 'dhaufu', 'kupoteza heshimu']
    },
    commonSymptoms: {
      en: ['burning sensation', 'tingling', 'numbness'],
      fr: ['sensation de brûlure', 'picotements', 'engourdissement'],
      sw: ['moto', 'kuchimbachimba', 'kutomkuta']
    },
    rareSymptoms: {
      en: ['severe disability', 'amputation', 'complete loss of sensation'],
      fr: ['invalidité grave', 'amputation', 'perte complète de sensation'],
      sw: ['kukamatia kali', 'kukatia', 'kupoteza heshimu kabisa']
    },
    causes: {
      en: ['diabetes', 'infection', 'trauma', 'chemotherapy', 'certain medications', 'hereditary conditions'],
      fr: ['diabète', 'infection', 'traumatisme', 'chimiothérapie', 'certains médicaments'],
      sw: ['sukari', 'ambukizo', 'maadhimisho', 'chemotherapy', 'dawa za maalum', 'homa ya kurithi']
    },
    riskFactors: {
      en: ['diabetes', 'vitamin deficiencies', 'infections', 'cancer treatment', 'age over 60'],
      fr: ['diabète', 'carences en vitamines', 'infections', 'traitement du cancer'],
      sw: ['sukari', 'ukosefu wa vitamini', 'ambukizo', 'matibabu ya cancer', 'umri zaidi ya miaka 60']
    },
    treatment: {
      en: 'Treat underlying cause, pain medications, topical treatments, physical therapy, and lifestyle changes.',
      fr: 'Traiter la cause sous-jacente, analgésiques, traitements topiques, physiothérapie.',
      sw: 'Matibabu ya sababu ndani, dawa za maumivu, matibabu ya uso, matibabu ya kimwili, na mabadiliko ya maisha.'
    },
    prevention: {
      en: 'Manage underlying conditions, maintain healthy lifestyle, and avoid triggers.',
      fr: 'Gérer les conditions sous-jacentes, maintenir un mode de vie sain.',
      sw: 'Simamia homa ndani, tengeneza maisha mazuri, na zidi mambo ya kueza.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for persistent burning pain, numbness, or weakness affecting daily function.',
      fr: 'Cherchez des soins médicaux pour une douleur brûlante persistante, un engourdissement.',
      sw: 'Tafuta huduma za kimatibabu kwa maumivu ya moto ya mahabadiliko, kutomkuta, au dhaufu inayothiri kazi.'
    },
    complications: {
      en: ['chronic pain', 'disability', 'depression', 'reduced quality of life', 'amputation (if diabetic)'],
      fr: ['douleur chronique', 'invalidité', 'dépression', 'qualité de vie réduite', 'amputation (si diabétique)'],
      sw: ['maumivu ya mahabadiliko', 'kukamatia', 'kutaka kufa', 'kupungua kwa ubora wa maisha', 'kukatia']
    },
    diagnosis: {
      en: 'Clinical evaluation, EMG/NCS, skin biopsy, or quantitative sensory testing.',
      fr: 'Évaluation clinique, EMG/NCS, biopsie cutanée, ou test sensoriel quantitatif.',
      sw: 'Mtihani wa kliniki, EMG/NCS, biopsy ya ngozi, au mtihani wa heshimu kwa idadi.'
    },
    prognosis: {
      en: 'Depends on underlying cause. Managing the cause can improve symptoms.',
      fr: 'Dépend de la cause sous-jacente. Gérer la cause peut améliorer les symptômes.',
      sw: 'Inategemea sababu ndani. Kusimamia sababu kunaweza kuboresha dalili.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'high',
    ageGroup: 'adult',
    gender: 'all'
  },
  {
    id: 'migraine',
    name: {
      en: 'Migraine',
      fr: 'Migraine',
      sw: 'Migraine'
    },
    category: 'neurological',
    severity: 'medium',
    symptoms: {
      en: ['throbbing headache', 'sensitivity to light', 'sensitivity to sound', 'nausea', 'vomiting', 'aura', 'visual disturbances'],
      fr: ['mal de tête pulsatile', 'sensibilité à la lumière', 'sensibilité au son', 'nausée', 'vomissement'],
      sw: ['maumivu ya kichwa', 'heshimu kwa mwanga', 'heshimu kwa sauti', 'kichefuchefu', 'kutapika', 'aura', 'shida ya macho']
    },
    commonSymptoms: {
      en: ['throbbing headache', 'sensitivity to light', 'nausea'],
      fr: ['mal de tête pulsatile', 'sensibilité à la lumière', 'nausée'],
      sw: ['maumivu ya kichwa', 'heshimu kwa mwanga', 'kichefuchefu']
    },
    rareSymptoms: {
      en: ['status migrainosus', 'persistent aura', 'stroke', 'vision loss'],
      fr: ['status migrainosus', 'aura persistante', 'accident vasculaire cérébral', 'perte de vision'],
      sw: ['status migrainosus', 'aura inayobaaki', 'kumimina kwa akili', 'kupoteza macho']
    },
    causes: {
      en: ['neurological changes', 'hormonal fluctuations', 'food triggers', 'stress', 'weather changes', 'sleep disruption'],
      fr: ['changements neurologiques', 'fluctuations hormonales', 'déclencheurs alimentaires', 'stress'],
      sw: ['mabadiliko ya akili', 'mabadiliko ya hormone', 'mambo ya kueza ya chakula', 'shida', 'mabadiliko ya hewa', 'kuanguka kwa utumiaji']
    },
    riskFactors: {
      en: ['female gender', 'age 15-55', 'family history', 'hormonal changes', 'certain foods'],
      fr: ['sexe féminin', 'âge 15-55', 'antécédents familiaux', 'changements hormonaux'],
      sw: ['kijinsia cha kike', 'umri 15-55', 'historia ya familia', 'mabadiliko ya hormone', 'chakula cha maalum']
    },
    treatment: {
      en: 'Acute medications, preventive medications, lifestyle changes, and trigger avoidance.',
      fr: 'Médicaments aigus, médicaments préventifs, changements de mode de vie.',
      sw: 'Dawa za haraka, dawa za kuzida, mabadiliko ya maisha, na kuzidi mambo ya kueza.'
    },
    prevention: {
      en: 'Identify and avoid triggers, manage stress, maintain regular sleep schedule, and prophylactic medications.',
      fr: 'Identifier et éviter les déclencheurs, gérer le stress, maintenir un horaire de sommeil régulier.',
      sw: 'Tafuta na zidi mambo ya kueza, simamia shida, tengeneza utumiaji wa kawaida, na dawa ya kuzida.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for sudden severe headache, change in migraine pattern, or migraine with neurological symptoms.',
      fr: 'Cherchez des soins médicaux pour un mal de tête soudain grave, un changement de schéma de migraine.',
      sw: 'Tafuta huduma za kimatibabu kwa maumivu ya kichwa ya ghafla kali, mabadiliko ya patterini ya migraine, au migraine na dalili ya akili.'
    },
    complications: {
      en: ['chronic migraine', 'medication overuse headache', 'stroke', 'cognitive impairment', 'decreased quality of life'],
      fr: ['migraine chronique', 'mal de tête dû à l\'abus de médicaments', 'accident vasculaire cérébral', 'altération cognitive'],
      sw: ['migraine ya mahabadiliko', 'maumivu ya kichwa ya dawa zaidi', 'kumimina kwa akili', 'kukamatia kwa akili', 'kupungua kwa ubora wa maisha']
    },
    diagnosis: {
      en: 'Clinical evaluation, headache diary, or imaging studies if necessary.',
      fr: 'Évaluation clinique, journal des migraines, ou études d\'imagerie si nécessaire.',
      sw: 'Mtihani wa kliniki, kitabu cha maumivu ya kichwa, au picha za mwili kama inahitajika.'
    },
    prognosis: {
      en: 'Episodic. With proper management and trigger avoidance, migraines can be controlled.',
      fr: 'Épisodique. Avec une bonne gestion et l\'évitement des déclencheurs, les migraines peuvent être contrôlées.',
      sw: 'Inakuja wakati mwingine. Na kusimamia vizuri na kuzidi mambo ya kueza, migraines zinaweza kudhibitwa.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'medium',
    ageGroup: 'adult',
    gender: 'female'
  }
];
