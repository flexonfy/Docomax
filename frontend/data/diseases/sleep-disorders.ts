import { ComprehensiveDisease } from './types';

export const sleepDisorders: ComprehensiveDisease[] = [
  {
    id: 'insomnia',
    name: {
      en: 'Insomnia',
      fr: 'Insomnie',
      sw: 'Insomnia'
    },
    category: 'chronic',
    severity: 'medium',
    symptoms: {
      en: ['difficulty falling asleep', 'difficulty staying asleep', 'waking up too early', 'daytime fatigue', 'irritability', 'difficulty concentrating', 'anxiety', 'depression'],
      fr: ['difficulté à s\'endormir', 'difficulté à rester endormi', 'réveil précoce', 'fatigue diurne', 'irritabilité'],
      sw: ['shida ya kufa', 'shida ya kuendelea kufa', 'kuamka mapema', 'uchovu wa mchana', 'kugombana', 'shida ya kufikiri', 'wasiwasi', 'kutaka kufa']
    },
    commonSymptoms: {
      en: ['difficulty falling asleep', 'daytime fatigue', 'irritability'],
      fr: ['difficulté à s\'endormir', 'fatigue diurne', 'irritabilité'],
      sw: ['shida ya kufa', 'uchovu wa mchana', 'kugombana']
    },
    rareSymptoms: {
      en: ['severe sleep deprivation', 'hallucinations', 'psychosis'],
      fr: ['privation de sommeil grave', 'hallucinations', 'psychose'],
      sw: ['kupungua kwa utumiaji kali', 'mahewani', 'akili hasimu']
    },
    causes: {
      en: ['stress', 'anxiety', 'depression', 'poor sleep hygiene', 'irregular sleep schedule', 'caffeine consumption', 'alcohol use', 'medications'],
      fr: ['stress', 'anxiété', 'dépression', 'mauvaise hygiène du sommeil', 'horaire de sommeil irrégulier'],
      sw: ['shida', 'wasiwasi', 'kutaka kufa', 'usafi duni wa utumiaji', 'ratiba ya utumiaji isiyo na kazi', 'kula kafein', 'kunywa pombe', 'dawa']
    },
    riskFactors: {
      en: ['age over 60', 'female gender', 'mental health disorders', 'chronic pain', 'shift work', 'jet lag'],
      fr: ['âge supérieur à 60 ans', 'sexe féminin', 'troubles de la santé mentale', 'douleur chronique'],
      sw: ['umri zaidi ya miaka 60', 'kijinsia cha kike', 'shida ya afya ya akili', 'maumivu ya mahabadiliko', 'kazi ya kukata', 'jet lag']
    },
    treatment: {
      en: 'Sleep hygiene improvements, cognitive behavioral therapy, relaxation techniques, and medications like sedatives if necessary.',
      fr: 'Amélioration de l\'hygiène du sommeil, thérapie cognitivo-comportementale, techniques de relaxation.',
      sw: 'Kuboresha usafi wa utumiaji, matibabu ya tabia, mbinu za kupumzika, na dawa kama sedatives.'
    },
    prevention: {
      en: 'Maintain regular sleep schedule, avoid caffeine and alcohol, exercise regularly, and manage stress.',
      fr: 'Maintenir un horaire de sommeil régulier, éviter la caféine et l\'alcool, faire de l\'exercice régulièrement.',
      sw: 'Tengeneza ratiba ya utumiaji, zidi kafein na pombe, tengeneza mwendo, na kusimamia shida.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care if insomnia persists for more than a few weeks and significantly impacts daily functioning.',
      fr: 'Cherchez des soins médicaux si l\'insomnie persiste pendant plus de quelques semaines.',
      sw: 'Tafuta huduma za kimatibabu kama insomnia inaendelea kwa juma zaidi na inathiri kazi ya kila siku.'
    },
    complications: {
      en: ['depression', 'anxiety disorders', 'cognitive impairment', 'increased accident risk', 'reduced quality of life'],
      fr: ['dépression', 'troubles anxieux', 'altération cognitive', 'risque d\'accident accru'],
      sw: ['kutaka kufa', 'shida ya wasiwasi', 'kukamatia kwa akili', 'hatari ya ajali', 'kupungua kwa ubora wa maisha']
    },
    diagnosis: {
      en: 'Clinical evaluation, sleep diary, or polysomnography.',
      fr: 'Évaluation clinique, journal du sommeil, ou polysomnographie.',
      sw: 'Mtihani wa kliniki, gitabu la utumiaji, au polysomnography.'
    },
    prognosis: {
      en: 'Most cases improve with behavioral interventions and lifestyle changes. Chronic insomnia may require long-term treatment.',
      fr: 'La plupart des cas s\'améliorent avec les interventions comportementales et les changements de mode de vie.',
      sw: 'Nyingi za visa zinaboresha na mabadiliko ya tabia at maisha. Insomnia ya mahabadiliko inaweza kuhitaji matibabu ya muda mrefu.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'medium',
    ageGroup: 'adult',
    gender: 'all'
  },
  {
    id: 'sleep-apnea',
    name: {
      en: 'Sleep Apnea',
      fr: 'Apnée du Sommeil',
      sw: 'Sleep Apnea'
    },
    category: 'chronic',
    severity: 'high',
    symptoms: {
      en: ['loud snoring', 'gasping for air', 'breathing pauses', 'daytime sleepiness', 'morning headaches', 'difficulty concentrating', 'irritability', 'nocturia'],
      fr: ['ronflement bruyant', 'halètement', 'pauses respiratoires', 'somnolence diurne', 'maux de tête matinaux'],
      sw: ['kufanya kelele kwa utumiaji', 'kupumua kwa haraka', 'pumzi zilizokoma', 'uchovu wa mchana', 'maumivu ya kichwa asubuhi', 'shida ya kufikiri', 'kugombana', 'kuzunguka kumimina']
    },
    commonSymptoms: {
      en: ['snoring', 'daytime sleepiness', 'morning headaches'],
      fr: ['ronflement', 'somnolence diurne', 'maux de tête matinaux'],
      sw: ['kufanya kelele kwa utumiaji', 'uchovu wa mchana', 'maumivu ya kichwa asubuhi']
    },
    rareSymptoms: {
      en: ['sudden cardiac death', 'severe arrhythmias', 'respiratory failure', 'sudden infant death'],
      fr: ['mort cardiaque subite', 'arythmies graves', 'insuffisance respiratoire'],
      sw: ['kifo kwa haraka cha moyo', 'matatizo makali ya moyo', 'kushindwa kwa ukoffi', 'kifo kwa haraka cha mtoto']
    },
    causes: {
      en: ['airway obstruction', 'obesity', 'narrow airways', 'enlarged tonsils', 'adenoids', 'nasal obstruction'],
      fr: ['obstruction des voies aériennes', 'obésité', 'voies aériennes étroites', 'amygdales hypertrophiées'],
      sw: ['kuzuia njia ya kupumua', 'uzani zaidi', 'njia za kupumua nyembamba', 'tonsil kubwa', 'adenoids', 'pua iliyozuiwa']
    },
    riskFactors: {
      en: ['obesity', 'age over 40', 'male gender', 'family history', 'alcohol use', 'smoking'],
      fr: ['obésité', 'âge supérieur à 40 ans', 'sexe masculin', 'antécédents familiaux'],
      sw: ['uzani zaidi', 'umri zaidi ya miaka 40', 'kijinsia cha kiume', 'historia ya familia', 'kunywa pombe', 'kuvuta sigara']
    },
    treatment: {
      en: 'CPAP therapy, oral appliances, positional therapy, weight loss, and surgery for severe cases.',
      fr: 'Thérapie CPAP, appareils buccaux, thérapie positionnelle, perte de poids.',
      sw: 'Matibabu ya CPAP, vifaa vya mdomo, matibabu ya nafasi, kupungua kwa uzani, na operesheni kwa visa kali.'
    },
    prevention: {
      en: 'Maintain healthy weight, avoid alcohol and smoking, sleep on your side, and manage nasal allergies.',
      fr: 'Maintenir un poids santé, éviter l\'alcool et le tabac, dormir sur le côté.',
      sw: 'Tengeneza uzani mzuri, zidi pombe na sigara, fa upande, na dhibiti maalergeny ya pua.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for loud snoring with breathing pauses, excessive daytime sleepiness, or morning headaches.',
      fr: 'Cherchez des soins médicaux pour un ronflement bruyant avec des pauses respiratoires.',
      sw: 'Tafuta huduma za kimatibabu kwa kufanya kelele kwa utumiaji na pumzi zilizokoma, uchovu zaidi wa mchana, au maumivu ya kichwa asubuhi.'
    },
    complications: {
      en: ['hypertension', 'heart disease', 'stroke', 'arrhythmias', 'sudden cardiac death', 'cognitive decline'],
      fr: ['hypertension', 'maladie cardiaque', 'accident vasculaire cérébral', 'arythmies', 'mort cardiaque subite'],
      sw: ['shinikizo la damu zaidi', 'ugonjwa wa moyo', 'kumimina kwa akili', 'matatizo ya moyo', 'kifo kwa haraka cha moyo', 'kupungua kwa akili']
    },
    diagnosis: {
      en: 'Sleep study (polysomnography), home sleep apnea test, or clinical evaluation.',
      fr: 'Étude du sommeil (polysomnographie), test d\'apnée du sommeil à domicile.',
      sw: 'Mtihani wa utumiaji (polysomnography), mtihani wa sleep apnea nyumbani, au mtihani wa kliniki.'
    },
    prognosis: {
      en: 'With CPAP or other treatment, symptoms improve significantly and complications are prevented.',
      fr: 'Avec la thérapie CPAP ou autre traitement, les symptômes s\'améliorent considérablement.',
      sw: 'Na CPAP au matibabu mengine, dalili zinaboresha sana na shida zinazidiwi.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'medium',
    ageGroup: 'adult',
    gender: 'all'
  },
  {
    id: 'narcolepsy',
    name: {
      en: 'Narcolepsy',
      fr: 'Narcolepsie',
      sw: 'Narcolepsy'
    },
    category: 'neurological',
    severity: 'medium',
    symptoms: {
      en: ['excessive daytime sleepiness', 'sleep attacks', 'cataplexy', 'sleep paralysis', 'hypnagogic hallucinations', 'disrupted nighttime sleep'],
      fr: ['somnolence diurne excessive', 'accès de sommeil', 'cataplexie', 'paralysie du sommeil', 'hallucinations hypnagogiques'],
      sw: ['uchovu zaidi wa mchana', 'kumimina kwa utumiaji', 'cataplexy', 'mlizizo wa utumiaji', 'mahewani ya hypnagogic', 'utumiaji wa usiku ulioanguka']
    },
    commonSymptoms: {
      en: ['excessive daytime sleepiness', 'sleep attacks'],
      fr: ['somnolence diurne excessive', 'accès de sommeil'],
      sw: ['uchovu zaidi wa mchana', 'kumimina kwa utumiaji']
    },
    rareSymptoms: {
      en: ['severe disability', 'injuries from accidents', 'severe disruption of life'],
      fr: ['invalidité grave', 'blessures dues à des accidents', 'perturbation grave de la vie'],
      sw: ['kukamatia kali', 'jeraha kutokana na ajali', 'kuanguka kwa ukubwa wa maisha']
    },
    causes: {
      en: ['loss of hypocretin neurons', 'genetic predisposition', 'autoimmune disorder'],
      fr: ['perte de neurones hypocretine', 'prédisposition génétique', 'trouble auto-immun'],
      sw: ['kupoteza hypocretin neurons', 'tabia ya jenetiki', 'shida ya kujikosea']
    },
    riskFactors: {
      en: ['family history of narcolepsy', 'teenage onset', 'certain HLA types'],
      fr: ['antécédents familiaux de narcolepsie', 'début à l\'adolescence'],
      sw: ['historia ya familia ya narcolepsy', 'kuanza kwa ujana', 'aina za HLA maalum']
    },
    treatment: {
      en: 'Stimulant medications, sodium oxybate, antidepressants, and behavioral strategies.',
      fr: 'Médicaments stimulants, oxybate de sodium, antidépresseurs.',
      sw: 'Dawa za kueneza moyo, sodium oxybate, antidepressants, na mbinu za tabia.'
    },
    prevention: {
      en: 'Maintain regular sleep schedule, avoid sleep deprivation, and manage stress.',
      fr: 'Maintenir un horaire de sommeil régulier, éviter la privation de sommeil.',
      sw: 'Tengeneza ratiba ya utumiaji, zidi kupungua kwa utumiaji, na kusimamia shida.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for excessive daytime sleepiness that impacts daily functioning or sudden muscle weakness.',
      fr: 'Cherchez des soins médicaux pour une somnolence diurne excessive qui affecte le fonctionnement quotidien.',
      sw: 'Tafuta huduma za kimatibabu kwa uchovu zaidi wa mchana unaothiri kazi ya kila siku au dhaufu ya misuli ya ghafla.'
    },
    complications: {
      en: ['accidents', 'injuries', 'depression', 'anxiety', 'reduced quality of life', 'social problems'],
      fr: ['accidents', 'blessures', 'dépression', 'anxiété', 'qualité de vie réduite'],
      sw: ['ajali', 'jeraha', 'kutaka kufa', 'wasiwasi', 'kupungua kwa ubora wa maisha', 'shida ya kijamii']
    },
    diagnosis: {
      en: 'Multiple Sleep Latency Test (MSLT), polysomnography, or cerebrospinal fluid hypocretin testing.',
      fr: 'Test de latence du sommeil multiple (MSLT), polysomnographie.',
      sw: 'Multiple Sleep Latency Test (MSLT), polysomnography, au mtihani wa hypocretin cerebrospinal.'
    },
    prognosis: {
      en: 'Chronic condition requiring lifelong management, but symptoms can be controlled with medication and lifestyle changes.',
      fr: 'Condition chronique nécessitant une gestion à vie, mais les symptômes peuvent être contrôlés.',
      sw: 'Homa ya mahabadiliko inayohitaji kusimamia umri wote, lakini dalili zinaweza kudhibitwa na dawa na mabadiliko ya maisha.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'low',
    ageGroup: 'adult',
    gender: 'all'
  },
  {
    id: 'restless-legs-syndrome',
    name: {
      en: 'Restless Legs Syndrome',
      fr: 'Syndrome des Jambes Sans Repos',
      sw: 'Restless Legs Syndrome'
    },
    category: 'neurological',
    severity: 'low',
    symptoms: {
      en: ['urge to move legs', 'discomfort in legs', 'tingling sensation', 'burning sensation', 'aching sensation', 'disrupted sleep', 'daytime fatigue'],
      fr: ['envie de bouger les jambes', 'inconfort dans les jambes', 'sensation de fourmillement', 'sensation de brûlure', 'sommeil perturbé'],
      sw: ['kando ya kusonga miguu', 'tabu kwa miguu', 'kuchimbachimba', 'moto', 'maumivu', 'utumiaji ulioanguka', 'uchovu wa mchana']
    },
    commonSymptoms: {
      en: ['urge to move legs', 'discomfort in legs', 'disrupted sleep'],
      fr: ['envie de bouger les jambes', 'inconfort dans les jambes', 'sommeil perturbé'],
      sw: ['kando ya kusonga miguu', 'tabu kwa miguu', 'utumiaji ulioanguka']
    },
    rareSymptoms: {
      en: ['severe sleep deprivation', 'depression', 'cognitive impairment'],
      fr: ['privation de sommeil grave', 'dépression', 'altération cognitive'],
      sw: ['kupungua kwa utumiaji kali', 'kutaka kufa', 'kukamatia kwa akili']
    },
    causes: {
      en: ['iron deficiency', 'kidney disease', 'dopamine dysregulation', 'genetic factors', 'certain medications'],
      fr: ['carence en fer', 'maladie rénale', 'dysrégulation de la dopamine', 'facteurs génétiques'],
      sw: ['ukosefu wa chuma', 'ugonjwa wa figo', 'dopamine dysregulation', 'sababu ya jenetiki', 'dawa za maalum']
    },
    riskFactors: {
      en: ['family history', 'pregnancy', 'iron deficiency', 'kidney disease', 'age over 40'],
      fr: ['antécédents familiaux', 'grossesse', 'carence en fer', 'maladie rénale'],
      sw: ['historia ya familia', 'ujauzito', 'ukosefu wa chuma', 'ugonjwa wa figo', 'umri zaidi ya miaka 40']
    },
    treatment: {
      en: 'Iron supplementation, dopamine agonists, benzodiazepines, or opioids for severe cases.',
      fr: 'Supplémentation en fer, agonistes de la dopamine, benzodiazépines.',
      sw: 'Kuongeza chuma, dopamine agonists, benzodiazepines, au opioids kwa visa kali.'
    },
    prevention: {
      en: 'Maintain healthy iron levels, manage underlying conditions, limit caffeine and alcohol.',
      fr: 'Maintenir des niveaux de fer sains, gérer les conditions sous-jacentes.',
      sw: 'Tengeneza kiwango cha chuma kizuri, simamia homa ndani, zidi kafein na pombe.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care if symptoms significantly impact sleep quality or daily functioning.',
      fr: 'Cherchez des soins médicaux si les symptômes affectent significativement la qualité du sommeil.',
      sw: 'Tafuta huduma za kimatibabu kama dalili zina thiri kubwa kwa ubora wa utumiaji au kazi ya kila siku.'
    },
    complications: {
      en: ['insomnia', 'depression', 'anxiety', 'reduced quality of life'],
      fr: ['insomnie', 'dépression', 'anxiété', 'qualité de vie réduite'],
      sw: ['insomnia', 'kutaka kufa', 'wasiwasi', 'kupungua kwa ubora wa maisha']
    },
    diagnosis: {
      en: 'Clinical evaluation, polysomnography, or sleep study.',
      fr: 'Évaluation clinique, polysomnographie, ou étude du sommeil.',
      sw: 'Mtihani wa kliniki, polysomnography, au mtihani wa utumiaji.'
    },
    prognosis: {
      en: 'Symptoms can be managed with medication and lifestyle changes, though it may be chronic.',
      fr: 'Les symptômes peuvent être gérés avec des médicaments et des changements de mode de vie.',
      sw: 'Dalili zinaweza kusimamia na dawa na mabadiliko ya maisha, ingawa inaweza kuwa ya mahabadiliko.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'low',
    ageGroup: 'adult',
    gender: 'all'
  },
  {
    id: 'sleepwalking',
    name: {
      en: 'Sleepwalking',
      fr: 'Somnambulisme',
      sw: 'Sleepwalking'
    },
    category: 'neurological',
    severity: 'low',
    symptoms: {
      en: ['walking during sleep', 'opening eyes while asleep', 'performing activities while asleep', 'no memory of episode', 'confused awakening'],
      fr: ['marche pendant le sommeil', 'ouverture des yeux pendant le sommeil', 'exécution d\'activités pendant le sommeil'],
      sw: ['kutembea kwa utumiaji', 'kufungua macho kwa utumiaji', 'kufanya vitu kwa utumiaji', 'hakuna kumbuka kwa episode', 'kuamka kwa kuchanganyikiwa']
    },
    commonSymptoms: {
      en: ['walking during sleep', 'no memory of episode'],
      fr: ['marche pendant le sommeil', 'pas de mémoire d\'episode'],
      sw: ['kutembea kwa utumiaji', 'hakuna kumbuka kwa episode']
    },
    rareSymptoms: {
      en: ['violent behavior', 'sleep eating disorder', 'sexual behavior during sleep', 'falling during episode', 'injury'],
      fr: ['comportement violent', 'trouble alimentaire du sommeil', 'chute pendant l\'episode', 'blessure'],
      sw: ['tabia ya nguvu', 'shida ya kula kwa utumiaji', 'tabia ya jinsia kwa utumiaji', 'kuanguka kwa episode', 'jeraha']
    },
    causes: {
      en: ['genetic factors', 'sleep deprivation', 'stress', 'fever', 'certain medications', 'sleep disorders'],
      fr: ['facteurs génétiques', 'privation de sommeil', 'stress', 'fièvre', 'certains médicaments'],
      sw: ['sababu ya jenetiki', 'kupungua kwa utumiaji', 'shida', 'homa', 'dawa za maalum', 'shida ya utumiaji']
    },
    riskFactors: {
      en: ['family history', 'age 8-12', 'male gender', 'sleep deprivation', 'sleep apnea'],
      fr: ['antécédents familiaux', 'âge 8-12 ans', 'sexe masculin', 'privation de sommeil'],
      sw: ['historia ya familia', 'umri 8-12', 'kijinsia cha kiume', 'kupungua kwa utumiaji', 'sleep apnea']
    },
    treatment: {
      en: 'Safety measures, addressing underlying causes, medications if needed, and behavioral techniques.',
      fr: 'Mesures de sécurité, aborder les causes sous-jacentes, médicaments si nécessaire.',
      sw: 'Hatua za usalama, kusimamia sababu za chini, dawa kama inahitajika, na mbinu za tabia.'
    },
    prevention: {
      en: 'Get adequate sleep, manage stress, avoid triggers, and maintain safe sleeping environment.',
      fr: 'Obtenir un sommeil suffisant, gérer le stress, éviter les déclencheurs.',
      sw: 'Pata utumiaji wa kutosha, simamia shida, zidi mambo ya kueza, na tengeneza mazingira salama ya utumiaji.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care if sleepwalking causes injury risk, occurs frequently, or impacts safety.',
      fr: 'Cherchez des soins médicaux si le somnambulisme pose un risque de blessure ou se produit fréquemment.',
      sw: 'Tafuta huduma za kimatibabu kama sleepwalking ina hatari ya jeraha, inakuja kwa kawaida, au ina thiri kwa usalama.'
    },
    complications: {
      en: ['injury from falls', 'violent behavior', 'emotional distress', 'sleep deprivation'],
      fr: ['blessure due à des chutes', 'comportement violent', 'détresse émotionnelle', 'privation de sommeil'],
      sw: ['jeraha kutokana na kuanguka', 'tabia ya nguvu', 'shida ya hisia', 'kupungua kwa utumiaji']
    },
    diagnosis: {
      en: 'Clinical evaluation, sleep history, or polysomnography.',
      fr: 'Évaluation clinique, historique du sommeil, ou polysomnographie.',
      sw: 'Mtihani wa kliniki, historia ya utumiaji, au polysomnography.'
    },
    prognosis: {
      en: 'Often improves with age. Most children outgrow sleepwalking, while adults may need ongoing management.',
      fr: 'Souvent amélioré avec l\'âge. La plupart des enfants surpassent le somnambulisme.',
      sw: 'Kwa kawaida zinaboresha na umri. Watoto wengi hupita kwa sleepwalking, lakini wazazi wanaweza kuhitaji kusimamia kila wakati.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'low',
    ageGroup: 'pediatric',
    gender: 'all'
  }
];
