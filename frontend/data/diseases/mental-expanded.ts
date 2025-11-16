import { ComprehensiveDisease } from './types';

export const mentalHealthExpanded: ComprehensiveDisease[] = [
  {
    id: 'generalized-anxiety-disorder',
    name: {
      en: 'Generalized Anxiety Disorder',
      fr: 'Trouble d\'Anxiété Généralisée',
      sw: 'Generalized Anxiety Disorder'
    },
    category: 'mental',
    severity: 'medium',
    symptoms: {
      en: ['excessive worry', 'restlessness', 'irritability', 'difficulty concentrating', 'sleep problems', 'muscle tension', 'sweating', 'trembling'],
      fr: ['inquiétude excessive', 'agitation', 'irritabilité', 'difficulté à se concentrer', 'problèmes de sommeil'],
      sw: ['wasiwasi zaidi', 'kukamatia', 'kugombana', 'shida ya kufikiri', 'shida ya utumiaji', 'mwigo wa misuli', 'jasho', 'kutikitika']
    },
    commonSymptoms: {
      en: ['excessive worry', 'restlessness', 'difficulty concentrating'],
      fr: ['inquiétude excessive', 'agitation', 'difficulté à se concentrer'],
      sw: ['wasiwasi zaidi', 'kukamatia', 'shida ya kufikiri']
    },
    rareSymptoms: {
      en: ['panic attacks', 'suicide attempts', 'severe disability'],
      fr: ['attaques de panique', 'tentatives de suicide', 'invalidité grave'],
      sw: ['mshtuko wa wasiwasi', 'kujaribu kujua', 'kukamatia kali']
    },
    causes: {
      en: ['genetic factors', 'brain chemistry', 'trauma', 'stress', 'life events'],
      fr: ['facteurs génétiques', 'chimie cérébrale', 'traumatisme', 'stress'],
      sw: ['sababu ya jenetiki', 'kemikali ya akili', 'maadhimisho', 'shida', 'matukio ya maisha']
    },
    riskFactors: {
      en: ['family history', 'trauma', 'chronic stress', 'medical conditions', 'substance use'],
      fr: ['antécédents familiaux', 'traumatisme', 'stress chronique', 'conditions médicales'],
      sw: ['historia ya familia', 'maadhimisho', 'shida ya mahabadiliko', 'homa ya kimatibabu', 'matumizi ya dutu']
    },
    treatment: {
      en: 'Cognitive behavioral therapy, SSRIs, buspirone, lifestyle changes, relaxation techniques.',
      fr: 'Thérapie cognitivo-comportementale, ISRS, buspirone, changements de mode de vie.',
      sw: 'Matibabu ya tabia, SSRIs, buspirone, mabadiliko ya maisha, mbinu za kupumzika.'
    },
    prevention: {
      en: 'Stress management, regular exercise, meditation, avoid caffeine, adequate sleep.',
      fr: 'Gestion du stress, exercice régulier, méditation, éviter la caféine.',
      sw: 'Kusimamia shida, mwendo wa kawaida, kufikiri, zidi kafein, utumiaji wa kutosha.'
    },
    whenToSeekHelp: {
      en: 'Seek help if worry interferes with daily activities for more than 6 months.',
      fr: 'Cherchez de l\'aide si l\'inquiétude interfère avec les activités quotidiennes.',
      sw: 'Tafuta msaada kama wasiwasi inathiri shughuli ya kila siku kwa miezi zaidi ya sita.'
    },
    complications: {
      en: ['depression', 'substance abuse', 'suicide', 'physical health problems'],
      fr: ['dépression', 'abus de substances', 'suicide', 'problèmes de santé physique'],
      sw: ['kutaka kufa', 'matumizi ya dutu', 'kujua', 'shida ya afya ya kimwili']
    },
    diagnosis: {
      en: 'Clinical evaluation, GAD-7 scale, psychological assessment.',
      fr: 'Évaluation clinique, échelle GAD-7, évaluation psychologique.',
      sw: ['Mtihani wa kliniki, GAD-7 scale, mtihani wa akili']
    },
    prognosis: {
      en: 'With treatment, many patients experience significant improvement. Chronic if untreated.',
      fr: 'Avec le traitement, de nombreux patients connaissent une amélioration significative.',
      sw: 'Na matibabu, wagonjwa wengi huhisi maboresho. Ya mahabadiliko kama haipo matibabu.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'medium',
    ageGroup: 'adult',
    gender: 'female'
  },
  {
    id: 'panic-disorder',
    name: {
      en: 'Panic Disorder',
      fr: 'Trouble Panique',
      sw: 'Panic Disorder'
    },
    category: 'mental',
    severity: 'high',
    symptoms: {
      en: ['sudden panic attacks', 'chest pain', 'shortness of breath', 'dizziness', 'sweating', 'trembling', 'fear of death', 'agoraphobia'],
      fr: ['attaques de panique soudaines', 'douleur thoracique', 'essoufflement', 'vertiges'],
      sw: ['mshtuko wa wasiwasi wa ghafla', 'maumivu ya kiganja', 'upungufu wa hewa', 'kuzunguka', 'jasho', 'kutikitika', 'hofu ya kifo', 'agoraphobia']
    },
    commonSymptoms: {
      en: ['panic attacks', 'chest pain', 'shortness of breath'],
      fr: ['attaques de panique', 'douleur thoracique', 'essoufflement'],
      sw: ['mshtuko wa wasiwasi', 'maumivu ya kiganja', 'upungufu wa hewa']
    },
    rareSymptoms: {
      en: ['complete avoidance', 'agoraphobia', 'suicide', 'substance abuse'],
      fr: ['évitement complet', 'agoraphobie', 'suicide', 'abus de substances'],
      sw: ['kukamatia kabisa', 'agoraphobia', 'kujua', 'matumizi ya dutu']
    },
    causes: {
      en: ['genetic factors', 'brain chemistry', 'trauma', 'stress', 'medical conditions'],
      fr: ['facteurs génétiques', 'chimie cérébrale', 'traumatisme', 'stress'],
      sw: ['sababu ya jenetiki', 'kemikali ya akili', 'maadhimisho', 'shida', 'homa ya kimatibabu']
    },
    riskFactors: {
      en: ['family history', 'major life stressors', 'medical conditions', 'substance use', 'female gender'],
      fr: ['antécédents familiaux', 'facteurs de stress majeurs', 'conditions médicales', 'sexe féminin'],
      sw: ['historia ya familia', 'shida za maendeleo', 'homa ya kimatibabu', 'matumizi ya dutu', 'kijinsia cha kike']
    },
    treatment: {
      en: 'Cognitive behavioral therapy, SSRIs, benzodiazepines short-term, exposure therapy.',
      fr: 'Thérapie cognitivo-comportementale, ISRS, benzodiazépines à court terme.',
      sw: 'Matibabu ya tabia, SSRIs, benzodiazepines kwa muda mfupi, exposure therapy.'
    },
    prevention: {
      en: 'Stress management, regular exercise, limit caffeine, adequate sleep, psychotherapy.',
      fr: 'Gestion du stress, exercice régulier, limiter la caféine, sommeil adéquat.',
      sw: 'Kusimamia shida, mwendo wa kawaida, zuia kafein, utumiaji wa kutosha, matibabu ya akili.'
    },
    whenToSeekHelp: {
      en: 'Seek help immediately for severe panic attacks or fear affecting functioning.',
      fr: 'Cherchez de l\'aide immédiatement pour les attaques de panique graves.',
      sw: 'Tafuta msaada haraka kwa mshtuko wa wasiwasi au hofu inayothiri kazi.'
    },
    complications: {
      en: ['agoraphobia', 'depression', 'substance abuse', 'suicide', 'social isolation'],
      fr: ['agoraphobie', 'dépression', 'abus de substances', 'suicide'],
      sw: ['agoraphobia', 'kutaka kufa', 'matumizi ya dutu', 'kujua', 'kukamatia kwa kijamii']
    },
    diagnosis: {
      en: 'Clinical evaluation, panic scale, medical evaluation to exclude medical causes.',
      fr: 'Évaluation clinique, échelle de panique, évaluation médicale.',
      sw: ['Mtihani wa kliniki, panic scale, mtihani wa kimatibabu']
    },
    prognosis: {
      en: 'With treatment, many patients achieve remission or significant improvement.',
      fr: 'Avec le traitement, de nombreux patients atteignent la rémission.',
      sw: 'Na matibabu, wagonjwa wengi hupumzika au huhisi maboresho makubwa.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'medium',
    ageGroup: 'adult',
    gender: 'female'
  },
  {
    id: 'ocd',
    name: {
      en: 'Obsessive-Compulsive Disorder',
      fr: 'Trouble Obsessionnel-Compulsif',
      sw: 'Obsessive-Compulsive Disorder'
    },
    category: 'mental',
    severity: 'high',
    symptoms: {
      en: ['intrusive thoughts', 'obsessions', 'compulsions', 'repetitive behaviors', 'anxiety', 'distress', 'time consumption', 'functional impairment'],
      fr: ['pensées intrusives', 'obsessions', 'compulsions', 'comportements répétitifs', 'anxiété'],
      sw: ['mafikira yenye injini', 'obsession', 'compulsion', 'tabia ya kurudia', 'wasiwasi', 'tabu', 'kumza wakati', 'kasoro ya kazi']
    },
    commonSymptoms: {
      en: ['intrusive thoughts', 'obsessions', 'compulsions'],
      fr: ['pensées intrusives', 'obsessions', 'compulsions'],
      sw: ['mafikira yenye injini', 'obsession', 'compulsion']
    },
    rareSymptoms: {
      en: ['complete disability', 'hoarding disorder', 'body-focused repetitive behaviors'],
      fr: ['invalidité complète', 'trouble d\'accumulation', 'comportements répétitifs centrés sur le corps'],
      sw: ['kukamatia kabisa', 'kukamatia ya kusanya', 'tabia ya kurudia inayoelekeza kwa mwili']
    },
    causes: {
      en: ['genetic factors', 'brain chemistry', 'serotonin dysregulation', 'environmental factors', 'trauma'],
      fr: ['facteurs génétiques', 'chimie cérébrale', 'dysrégulation de la sérotonine'],
      sw: ['sababu ya jenetiki', 'kemikali ya akili', 'serotonin dysregulation', 'sababu za mazingira', 'maadhimisho']
    },
    riskFactors: {
      en: ['family history', 'trauma', 'stress', 'perfectionism', 'anxiety sensitivity'],
      fr: ['antécédents familiaux', 'traumatisme', 'stress', 'perfectionnisme'],
      sw: ['historia ya familia', 'maadhimisho', 'shida', 'uteuzi wa kamili', 'heshimu ya wasiwasi']
    },
    treatment: {
      en: 'Cognitive behavioral therapy, SSRIs, sertraline, fluoxetine, exposure and response prevention.',
      fr: 'Thérapie cognitivo-comportementale, ISRS, exposition et prévention de réaction.',
      sw: 'Matibabu ya tabia, SSRIs, sertraline, fluoxetine, exposure na kuzida jibu.'
    },
    prevention: {
      en: 'Early intervention for anxiety, stress management, cognitive therapy.',
      fr: 'Intervention précoce pour l\'anxiété, gestion du stress.',
      sw: 'Kuingia haraka kwa wasiwasi, kusimamia shida, matibabu ya akili.'
    },
    whenToSeekHelp: {
      en: 'Seek help when obsessions and compulsions significantly interfere with daily life.',
      fr: 'Cherchez de l\'aide quand les obsessions interfèrent significativement.',
      sw: 'Tafuta msaada kama obsession na compulsion zina thiri kubwa kwa kazi ya kila siku.'
    },
    complications: {
      en: ['depression', 'anxiety disorders', 'substance abuse', 'suicide', 'social isolation'],
      fr: ['dépression', 'troubles anxieux', 'abus de substances', 'suicide'],
      sw: ['kutaka kufa', 'shida ya wasiwasi', 'matumizi ya dutu', 'kujua', 'kukamatia kwa kijamii']
    },
    diagnosis: {
      en: 'Clinical evaluation, Yale-Brown Obsessive-Compulsive Scale (Y-BOCS), psychological assessment.',
      fr: 'Évaluation clinique, Échelle Yale-Brown OCD (Y-BOCS).',
      sw: ['Mtihani wa kliniki, Yale-Brown OCD Scale (Y-BOCS), mtihani wa akili']
    },
    prognosis: {
      en: 'With treatment, 60-80% of patients show significant improvement.',
      fr: 'Avec le traitement, 60-80% des patients montrent une amélioration significative.',
      sw: 'Na matibabu, asilimia 60-80 ya wagonjwa wanaonyonyeza maboresho makubwa.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'low',
    ageGroup: 'adult',
    gender: 'all'
  },
  {
    id: 'ptsd',
    name: {
      en: 'Post-Traumatic Stress Disorder',
      fr: 'Trouble de Stress Post-Traumatique',
      sw: 'Post-Traumatic Stress Disorder'
    },
    category: 'mental',
    severity: 'high',
    symptoms: {
      en: ['flashbacks', 'nightmares', 'intrusive thoughts', 'hyperarousal', 'avoidance', 'emotional numbness', 'guilt', 'depression'],
      fr: ['flashbacks', 'cauchemars', 'pensées intrusives', 'hypervigilance', 'évitement', 'engourdissement émotionnel'],
      sw: ['kufika kwa ghafla', 'ndoto mbaya', 'mafikira yenye injini', 'kukamatia zaidi', 'kukamatia', 'kutomkuta kwa hisia', 'hatia', 'kutaka kufa']
    },
    commonSymptoms: {
      en: ['flashbacks', 'nightmares', 'avoidance'],
      fr: ['flashbacks', 'cauchemars', 'évitement'],
      sw: ['kufika kwa ghafla', 'ndoto mbaya', 'kukamatia']
    },
    rareSymptoms: {
      en: ['complete disability', 'suicide', 'severe substance abuse', 'violent behavior'],
      fr: ['invalidité complète', 'suicide', 'abus grave de substances', 'comportement violent'],
      sw: ['kukamatia kabisa', 'kujua', 'matumizi makali ya dutu', 'tabia ya nguvu']
    },
    causes: {
      en: ['exposure to trauma', 'combat', 'violence', 'accidents', 'abuse', 'disaster'],
      fr: ['exposition au traumatisme', 'combat', 'violence', 'accidents', 'abus'],
      sw: ['kupatikana kwa maadhimisho', 'vita', 'nguvu', 'ajali', 'madhimisho', 'janga']
    },
    riskFactors: {
      en: ['severity of trauma', 'previous mental health issues', 'poor social support', 'female gender', 'younger age'],
      fr: ['gravité du traumatisme', 'antécédents de problèmes de santé mentale', 'mauvais soutien social'],
      sw: ['ukubwa wa maadhimisho', 'shida ya afya ya akili hapo awali', 'msaada duni wa kijamii', 'kijinsia cha kike', 'umri mdogo']
    },
    treatment: {
      en: 'Cognitive processing therapy, prolonged exposure therapy, SSRIs, prazosin, trauma-focused psychotherapy.',
      fr: 'Thérapie du traitement cognitif, exposition prolongée, ISRS, prazosine.',
      sw: 'Matibabu ya kusindika tabia, exposure inayoendelea, SSRIs, prazosin, psychotherapy ya maadhimisho.'
    },
    prevention: {
      en: 'Early psychological intervention after trauma, social support, resilience building.',
      fr: 'Intervention psychologique précoce après traumatisme, soutien social.',
      sw: 'Kuingia haraka kwa akili baada ya maadhimisho, msaada wa kijamii, kujenga nguvu.'
    },
    whenToSeekHelp: {
      en: 'Seek help if symptoms persist for more than one month after trauma.',
      fr: 'Cherchez de l\'aide si les symptômes persistent plus d\'un mois après le traumatisme.',
      sw: 'Tafuta msaada kama dalili inaendelea kwa miezi mingi baada ya maadhimisho.'
    },
    complications: {
      en: ['depression', 'substance abuse', 'suicide', 'anxiety disorders', 'relationship problems'],
      fr: ['dépression', 'abus de substances', 'suicide', 'troubles anxieux'],
      sw: ['kutaka kufa', 'matumizi ya dutu', 'kujua', 'shida ya wasiwasi', 'shida ya mahusiano']
    },
    diagnosis: {
      en: 'Clinical evaluation, PCL-5 (PTSD Checklist), psychological assessment, interview.',
      fr: 'Évaluation clinique, PCL-5, évaluation psychologique.',
      sw: ['Mtihani wa kliniki, PCL-5, mtihani wa akili, mahojiano']
    },
    prognosis: {
      en: 'With therapy, 30-40% achieve remission. Others improve significantly but may need ongoing treatment.',
      fr: 'Avec la thérapie, 30-40% atteignent la rémission.',
      sw: 'Na matibabu, asilimia 30-40 hupumzika. Wengine wanarudi sana lakini wanaweza kuhitaji matibabu ya mahabadiliko.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'bipolar-disorder',
    name: {
      en: 'Bipolar Disorder',
      fr: 'Trouble Bipolaire',
      sw: 'Bipolar Disorder'
    },
    category: 'mental',
    severity: 'high',
    symptoms: {
      en: ['manic episodes', 'depressive episodes', 'mood swings', 'decreased sleep', 'impulsivity', 'racing thoughts', 'irritability', 'reckless behavior'],
      fr: ['épisodes maniaques', 'épisodes dépressifs', 'changements d\'humeur', 'diminution du sommeil', 'impulsivité'],
      sw: ['episodes ya mania', 'episodes ya kutaka kufa', 'mabadiliko ya hisia', 'kupungua kwa utumiaji', 'kufanya bila kufikiri', 'mafikira ya haraka', 'kugombana', 'tabia ya kufa']
    },
    commonSymptoms: {
      en: ['mood swings', 'depression', 'mania', 'irritability'],
      fr: ['changements d\'humeur', 'dépression', 'manie', 'irritabilité'],
      sw: ['mabadiliko ya hisia', 'kutaka kufa', 'mania', 'kugombana']
    },
    rareSymptoms: {
      en: ['psychosis', 'suicide', 'complete disability', 'substance abuse'],
      fr: ['psychose', 'suicide', 'invalidité complète', 'abus de substances'],
      sw: ['akili hasimu', 'kujua', 'kukamatia kabisa', 'matumizi ya dutu']
    },
    causes: {
      en: ['genetic factors', 'brain chemistry', 'neurotransmitter imbalance', 'stress', 'environmental factors'],
      fr: ['facteurs génétiques', 'chimie cérébrale', 'déséquilibre des neurotransmetteurs'],
      sw: ['sababu ya jenetiki', 'kemikali ya akili', 'kukamatia kwa neurotransmitter', 'shida', 'sababu za mazingira']
    },
    riskFactors: {
      en: ['family history', 'major life stressors', 'substance abuse', 'lack of sleep', 'hormonal changes'],
      fr: ['antécédents familiaux', 'facteurs de stress majeurs', 'abus de substances', 'manque de sommeil'],
      sw: ['historia ya familia', 'shida za maendeleo', 'matumizi ya dutu', 'ukosefu wa utumiaji', 'mabadiliko ya hormone']
    },
    treatment: {
      en: 'Mood stabilizers, lithium, anticonvulsants, atypical antipsychotics, psychotherapy.',
      fr: 'Stabilisants de l\'humeur, lithium, anticonvulsivants, antipsychotiques atypiques.',
      sw: 'Dawa ya kusimamia hisia, lithium, anticonvulsants, atypical antipsychotics, psychotherapy.'
    },
    prevention: {
      en: 'Medication compliance, stress management, regular sleep, avoid triggers, psychotherapy.',
      fr: 'Conformité aux médicaments, gestion du stress, sommeil régulier, éviter les déclencheurs.',
      sw: 'Kutegemea dawa, kusimamia shida, utumiaji wa kawaida, zuia mambo ya kueza, psychotherapy.'
    },
    whenToSeekHelp: {
      en: 'Seek help immediately for severe mood episodes or suicidal thoughts.',
      fr: 'Cherchez de l\'aide immédiatement pour les épisodes d\'humeur graves.',
      sw: 'Tafuta msaada haraka kwa episodes ya hisia kali au wazo la kujua.'
    },
    complications: {
      en: ['suicide', 'substance abuse', 'broken relationships', 'job loss', 'financial ruin'],
      fr: ['suicide', 'abus de substances', 'relations brisées', 'perte d\'emploi'],
      sw: ['kujua', 'matumizi ya dutu', 'kufa kwa mahusiano', 'kupoteza kazi', 'kufa kwa pesa']
    },
    diagnosis: {
      en: 'Clinical evaluation, mood history, MDQ (Mood Disorder Questionnaire), psychological assessment.',
      fr: 'Évaluation clinique, historique de l\'humeur, MDQ, évaluation psychologique.',
      sw: ['Mtihani wa kliniki, historia ya hisia, MDQ, mtihani wa akili']
    },
    prognosis: {
      en: 'Chronic condition requiring lifelong management. With treatment, many achieve stability.',
      fr: 'Condition chronique nécessitant une gestion à vie.',
      sw: 'Homa ya mahabadiliko inayohitaji kusimamia umri wote. Na matibabu, wengi huhifadhi mgogoro.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'medium',
    ageGroup: 'adult',
    gender: 'all'
  },
  {
    id: 'adhd',
    name: {
      en: 'Attention Deficit Hyperactivity Disorder',
      fr: 'Trouble du Déficit de l\'Attention avec Hyperactivité',
      sw: 'Attention Deficit Hyperactivity Disorder'
    },
    category: 'mental',
    severity: 'medium',
    symptoms: {
      en: ['inattention', 'hyperactivity', 'impulsivity', 'difficulty focusing', 'forgetfulness', 'disorganization', 'difficulty waiting turn', 'interrupting'],
      fr: ['inattention', 'hyperactivité', 'impulsivité', 'difficulté à se concentrer', 'oubli'],
      sw: ['kukataa kuangalia', 'kusoga zaidi', 'kufanya bila kufikiri', 'shida ya kukonekeza', 'kusahau', 'kukamatia', 'shida ya kusubiri', 'kukatiza']
    },
    commonSymptoms: {
      en: ['inattention', 'hyperactivity', 'impulsivity'],
      fr: ['inattention', 'hyperactivité', 'impulsivité'],
      sw: ['kukataa kuangalia', 'kusoga zaidi', 'kufanya bila kufikiri']
    },
    rareSymptoms: {
      en: ['severe conduct problems', 'substance abuse', 'criminal behavior'],
      fr: ['problèmes graves de conduite', 'abus de substances', 'comportement criminel'],
      sw: ['shida kali ya tabia', 'matumizi ya dutu', 'tabia ya uhalifu']
    },
    causes: {
      en: ['genetic factors', 'brain development differences', 'prenatal factors', 'brain chemistry imbalance'],
      fr: ['facteurs génétiques', 'différences de développement cérébral', 'facteurs prénatals'],
      sw: ['sababu ya jenetiki', 'tofauti ya maendeleo ya akili', 'sababu za kabla ya kuzaliwa', 'kukamatia kwa kemikali ya akili']
    },
    riskFactors: {
      en: ['family history', 'male gender', 'premature birth', 'low birth weight', 'brain injury'],
      fr: ['antécédents familiaux', 'sexe masculin', 'naissance prématurée', 'petit poids à la naissance'],
      sw: ['historia ya familia', 'kijinsia cha kiume', 'kuzaliwa mapema', 'uzani mdogo kwa kuzaliwa', 'jeraha la akili']
    },
    treatment: {
      en: 'Stimulant medications, non-stimulant medications, behavioral therapy, educational support.',
      fr: 'Médicaments stimulants, médicaments non stimulants, thérapie comportementale.',
      sw: 'Dawa za kueneza, dawa isiyoeneza, matibabu ya tabia, kusaidia kwa elimu.'
    },
    prevention: {
      en: 'Prenatal care, avoid prenatal toxin exposure, early intervention for symptoms.',
      fr: 'Soins prénatals, éviter l\'exposition prénatale aux toxines.',
      sw: 'Huduma ya kabla ya kuzaliwa, zuia kupatikana kwa toksin kabla ya kuzaliwa, kuingia haraka kwa dalili.'
    },
    whenToSeekHelp: {
      en: 'Seek evaluation if symptoms significantly impact school or work performance.',
      fr: 'Cherchez une évaluation si les symptômes affectent significativement les performances.',
      sw: 'Tafuta mtihani kama dalili zina thiri kubwa kwa tarifai ya shule au kazi.'
    },
    complications: {
      en: ['poor academic performance', 'relationship problems', 'low self-esteem', 'substance abuse', 'depression'],
      fr: ['mauvaises performances académiques', 'problèmes relationnels', 'faible estime de soi'],
      sw: ['tarifai duni ya shule', 'shida ya mahusiano', 'kutokuwa na udukufu', 'matumizi ya dutu', 'kutaka kufa']
    },
    diagnosis: {
      en: 'Clinical evaluation, behavioral rating scales, psychological testing, medical history.',
      fr: 'Évaluation clinique, échelles d\'évaluation du comportement, tests psychologiques.',
      sw: ['Mtihani wa kliniki, kiwango cha tabia, mtihani wa akili, historia ya kimatibabu']
    },
    prognosis: {
      en: 'With treatment, many improve significantly. Symptoms often persist into adulthood.',
      fr: 'Avec le traitement, beaucoup s\'améliorent considérablement.',
      sw: 'Na matibabu, wengi wanabohra sana. Dalili mara nyingi zinabaki hadi wazazi.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'medium',
    ageGroup: 'pediatric',
    gender: 'all'
  }
];
