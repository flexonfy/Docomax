import { ComprehensiveDisease } from './types';

export const neurologicalDiseases: ComprehensiveDisease[] = [
  {
    id: 'epilepsy',
    name: {
      en: 'Epilepsy',
      fr: 'Épilepsie',
      sw: 'Kifafa'
    },
    category: 'neurological',
    severity: 'high',
    symptoms: {
      en: ['seizures', 'temporary confusion', 'staring spells', 'uncontrollable jerking movements', 'loss of consciousness', 'fear, anxiety, or deja vu'],
      fr: ['convulsions', 'confusion temporaire', 'absences', 'mouvements saccadés incontrôlables', 'perte de conscience', 'peur, anxiété ou déjà-vu'],
      sw: ['mshtuko', 'kuchanganyikiwa kwa muda', 'kutazama angani', 'miondoko isiyodhibitiwa', 'kupoteza fahamu', 'hofu, wasiwasi, au deja vu']
    },
    commonSymptoms: {
      en: ['seizures', 'temporary confusion', 'staring spells'],
      fr: ['convulsions', 'confusion temporaire', 'absences'],
      sw: ['mshtuko', 'kuchanganyikiwa kwa muda', 'kutazama angani']
    },
    rareSymptoms: {
      en: ['status epilepticus (prolonged seizure)', 'sudden unexpected death in epilepsy (SUDEP)'],
      fr: ['état de mal épileptique (crise prolongée)', 'mort subite inattendue en épilepsie (MSIE)'],
      sw: ['hali ya kifafa (mshtuko wa muda mrefu)', 'kifo cha ghafla kisichotarajiwa katika kifafa (SUDEP)']
    },
    causes: {
      en: ['genetic influence', 'head trauma', 'brain conditions (tumors, stroke)', 'infectious diseases (meningitis, AIDS)', 'prenatal injury'],
      fr: ['influence génétique', 'traumatisme crânien', 'affections cérébrales (tumeurs, AVC)', 'maladies infectieuses (méningite, SIDA)', 'lésion prénatale'],
      sw: ['ushawishi wa kijeni', 'jeraha la kichwa', 'hali za ubongo (uvimbe, kiharusi)', 'magonjwa ya kuambukiza (meningitis, UKIMWI)', 'jeraha la kabla ya kuzaliwa']
    },
    riskFactors: {
      en: ['age', 'family history', 'head injuries', 'stroke', 'dementia', 'brain infections'],
      fr: ['âge', 'antécédents familiaux', 'traumatismes crâniens', 'AVC', 'démence', 'infections cérébrales'],
      sw: ['umri', 'historia ya familia', 'majeraha ya kichwa', 'kiharusi', 'shida ya akili', 'maambukizi ya ubongo']
    },
    treatment: {
      en: 'Anti-seizure medications, vagus nerve stimulation, ketogenic diet, brain surgery.',
      fr: 'Médicaments anti-épileptiques, stimulation du nerf vague, régime cétogène, chirurgie cérébrale.',
      sw: 'Dawa za kuzuia mshtuko, kusisimua ujasiri wa vagus, lishe ya ketogenic, upasuaji wa ubongo.'
    },
    prevention: {
      en: 'Prevent head injuries, good prenatal care, manage risk factors for stroke.',
      fr: 'Prévenir les traumatismes crâniens, bons soins prénataux, gérer les facteurs de risque d\'AVC.',
      sw: 'Kuzuia majeraha ya kichwa, huduma nzuri kabla ya kuzaa, dhibiti sababu za hatari za kiharusi.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate help for a seizure lasting more than 5 minutes, or if a second seizure follows immediately.',
      fr: 'Consultez immédiatement si une crise dure plus de 5 minutes, ou si une deuxième crise suit immédiatement.',
      sw: 'Tafuta msaada wa haraka kwa mshtuko unaodumu zaidi ya dakika 5, au ikiwa mshtuko wa pili unafuata mara moja.'
    },
    complications: {
      en: ['falls', 'drowning', 'car accidents', 'emotional health issues', 'status epilepticus'],
      fr: ['chutes', 'noyade', 'accidents de voiture', 'problèmes de santé émotionnelle', 'état de mal épileptique'],
      sw: ['kuanguka', 'kuzama', 'ajali za gari', 'masuala ya afya ya kihisia', 'hali ya kifafa']
    },
    diagnosis: {
      en: 'Neurological exam, EEG, CT scan, MRI, blood tests.',
      fr: 'Examen neurologique, EEG, scanner, IRM, tests sanguins.',
      sw: 'Uchunguzi wa neva, EEG, CT scan, MRI, vipimo vya damu.'
    },
    possibleTests: {
      en: ['Electroencephalogram (EEG)', 'Magnetic Resonance Imaging (MRI)', 'Computed Tomography (CT) scan', 'Blood tests'],
      fr: ['Électroencéphalogramme (EEG)', 'Imagerie par résonance magnétique (IRM)', 'Tomodensitométrie (TDM)', 'Analyses de sang'],
      sw: ['Electroencephalogram (EEG)', 'Upigaji picha wa sumaku (MRI)', 'Skani ya Tomografia ya Kompyuta (CT)', 'Vipimo vya damu']
    },
    prognosis: {
      en: 'Many people can control seizures with medication. Some children outgrow epilepsy.',
      fr: 'Beaucoup de gens peuvent contrôler les crises avec des médicaments. Certains enfants guérissent de l\'épilepsie en grandissant.',
      sw: 'Watu wengi wanaweza kudhibiti mishtuko kwa dawa. Watoto wengine hupona kifafa wanapokua.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all',
    quizQuestions: [
      { en: 'Did you lose consciousness during the event?', fr: 'Avez-vous perdu connaissance pendant l\'événement ?', sw: 'Je, ulipoteza fahamu wakati wa tukio?', isRiskFactor: false },
      { en: 'Did you experience uncontrollable jerking movements of your arms or legs?', fr: 'Avez-vous eu des mouvements saccadés incontrôlables des bras ou des jambes ?', sw: 'Je, ulipata miondoko isiyodhibitiwa ya mikono au miguu?', isRiskFactor: false }
    ]
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
      en: ['throbbing or pulsing headache, often on one side', 'sensitivity to light, sound, and sometimes smell', 'nausea and vomiting', 'aura (visual disturbances like flashes of light or blind spots)', 'throbbing headache', 'severe headache'],
      fr: ['mal de tête pulsatile, souvent d\'un seul côté', 'sensibilité à la lumière, au son et parfois aux odeurs', 'nausées et vomissements', 'aura (troubles visuels comme des éclairs de lumière ou des angles morts)', 'mal de tête pulsatile', 'mal de tête sévère'],
      sw: ['maumivu ya kichwa yanayopiga, mara nyingi upande mmoja', 'unyeti kwa mwanga, sauti, na wakati mwingine harufu', 'kichefuchefu na kutapika', 'aura (usumbufu wa kuona kama miale ya mwanga au maeneo yasiyoonekana)', 'maumivu ya kichwa yanayopiga', 'maumivu makali ya kichwa']
    },
    commonSymptoms: {
      en: ['throbbing headache', 'sensitivity to light', 'nausea'],
      fr: ['mal de tête pulsatile', 'sensibilité à la lumière', 'nausées'],
      sw: ['maumivu ya kichwa yanayopiga', 'unyeti kwa mwanga', 'kichefuchefu']
    },
    rareSymptoms: {
      en: ['vertigo', 'speech difficulties', 'temporary weakness on one side of the body'],
      fr: ['vertiges', 'difficultés d\'élocution', 'faiblesse temporaire d\'un côté du corps'],
      sw: ['kizunguzungu', 'ugumu wa kuongea', 'udhaifu wa muda upande mmoja wa mwili']
    },
    causes: {
      en: ['exact cause unknown, involves genetic and environmental factors', 'changes in the brainstem and its interactions with the trigeminal nerve', 'imbalances in brain chemicals, including serotonin'],
      fr: ['cause exacte inconnue, implique des facteurs génétiques et environnementaux', 'changements dans le tronc cérébral et ses interactions avec le nerf trijumeau', 'déséquilibres des substances chimiques du cerveau, y compris la sérotonine'],
      sw: ['sababu halisi haijulikani, inahusisha mambo ya kijeni na kimazingira', 'mabadiliko katika shina la ubongo na mwingiliano wake na ujasiri wa trigeminal', 'kutokuwepo usawa katika kemikali za ubongo, ikiwa ni pamoja na serotonin']
    },
    riskFactors: {
      en: ['family history', 'female gender', 'hormonal changes in women', 'stress', 'certain foods and drinks', 'changes in sleep patterns'],
      fr: ['antécédents familiaux', 'sexe féminin', 'changements hormonaux chez les femmes', 'stress', 'certains aliments et boissons', 'changements dans les habitudes de sommeil'],
      sw: ['historia ya familia', 'jinsia ya kike', 'mabadiliko ya homoni kwa wanawake', 'msongo', 'vyakula na vinywaji fulani', 'mabadiliko katika mifumo ya usingizi']
    },
    treatment: {
      en: 'Pain-relieving medications (NSAIDs, triptans), preventive medications (beta-blockers, antidepressants, anti-seizure drugs), lifestyle adjustments.',
      fr: 'Médicaments analgésiques (AINS, triptans), médicaments préventifs (bêta-bloquants, antidépresseurs, anti-épileptiques), ajustements du mode de vie.',
      sw: 'Dawa za kupunguza maumivu (NSAIDs, triptans), dawa za kuzuia (beta-blockers, antidepressants, dawa za kuzuia mshtuko), marekebisho ya mtindo wa maisha.'
    },
    prevention: {
      en: 'Identifying and avoiding triggers, regular sleep schedule, managing stress, regular exercise, staying hydrated.',
      fr: 'Identifier et éviter les déclencheurs, horaire de sommeil régulier, gestion du stress, exercice régulier, rester hydraté.',
      sw: 'Kutambua na kuepuka vichocheo, ratiba ya usingizi ya kawaida, kudhibiti msongo, mazoezi ya kawaida, kunywa maji ya kutosha.'
    },
    whenToSeekHelp: {
      en: 'See a doctor for severe or frequent headaches, or if headache pattern changes. Seek immediate help for abrupt, severe headache or headache with fever, stiff neck, confusion, or seizures.',
      fr: 'Consultez un médecin pour des maux de tête sévères ou fréquents, ou si le schéma des maux de tête change. Consultez immédiatement pour un mal de tête brutal et sévère ou un mal de tête avec fièvre, raideur de la nuque, confusion ou convulsions.',
      sw: 'Muone daktari kwa maumivu makali au ya mara kwa mara ya kichwa, au ikiwa muundo wa maumivu ya kichwa unabadilika. Tafuta msaada wa haraka kwa maumivu ya kichwa ya ghafla, makali au maumivu ya kichwa yenye homa, shingo ngumu, kuchanganyikiwa, au mshtuko.'
    },
    complications: {
      en: ['chronic migraine', 'status migrainosus (migraine lasting > 72 hours)', 'migrainous infarction (stroke)'],
      fr: ['migraine chronique', 'état de mal migraineux (migraine durant > 72 heures)', 'infarctus migraineux (AVC)'],
      sw: ['migraine sugu', 'status migrainosus (migraine inayodumu > masaa 72)', 'infarction ya migraine (kiharusi)']
    },
    diagnosis: {
      en: 'Based on medical history, symptoms, and neurological examination. Imaging tests (MRI, CT) may be used to rule out other causes.',
      fr: 'Basé sur les antécédents médicaux, les symptômes et l\'examen neurologique. Des tests d\'imagerie (IRM, scanner) peuvent être utilisés pour exclure d\'autres causes.',
      sw: 'Kulingana na historia ya matibabu, dalili, na uchunguzi wa neva. Vipimo vya picha (MRI, CT) vinaweza kutumika kuondoa sababu zingine.'
    },
    possibleTests: {
      en: ['Neurological examination', 'MRI or CT scan to rule out other conditions', 'Keeping a headache diary'],
      fr: ['Examen neurologique', 'IRM ou scanner pour exclure d\'autres conditions', 'Tenir un journal des maux de tête'],
      sw: ['Uchunguzi wa neva', 'MRI au CT scan kuondoa hali zingine', 'Kuweka shajara ya maumivu ya kichwa']
    },
    prognosis: {
      en: 'Chronic condition, but can be managed with treatment and lifestyle changes.',
      fr: 'Condition chronique, mais peut être gérée avec un traitement et des changements de mode de vie.',
      sw: 'Hali sugu, lakini inaweza kudhibitiwa na matibabu na mabadiliko ya mtindo wa maisha.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'female',
    quizQuestions: [
      { en: 'Is your headache typically on one side of your head?', fr: 'Votre mal de tête est-il généralement d\'un seul côté de la tête ?', sw: 'Je, maumivu yako ya kichwa huwa upande mmoja wa kichwa?', isRiskFactor: false },
      { en: 'Are you sensitive to light and sound during the headache?', fr: 'Êtes-vous sensible à la lumière et au son pendant le mal de tête ?', sw: 'Je, unahisi usumbufu kwa mwanga na sauti wakati wa maumivu ya kichwa?', isRiskFactor: false }
    ]
  },
  {
    id: 'stroke',
    name: {
      en: 'Stroke (Cerebrovascular Accident)',
      fr: 'Accident Vasculaire Cérébral (AVC)',
      sw: 'Kiharusi (Ajali ya Mishipa ya Ubongo)'
    },
    category: 'neurological',
    severity: 'emergency',
    symptoms: {
      en: ['sudden weakness or numbness on one side of the face, arm, or leg', 'sudden confusion or difficulty speaking', 'sudden trouble seeing in one or both eyes', 'sudden difficulty walking or dizziness', 'sudden severe headache'],
      fr: ['faiblesse ou engourdissement soudain d\'un côté du visage, du bras ou de la jambe', 'confusion soudaine ou difficulté à parler', 'trouble soudain de la vision dans un ou deux yeux', 'difficulté soudaine à marcher ou vertiges', 'mal de tête soudain et sévère'],
      sw: ['udhaifu wa ghafla au ganzi upande mmoja wa uso, mkono, au mguu', 'kuchanganyikiwa kwa ghafla au shida ya kuongea', 'shida ya ghafla ya kuona kwa jicho moja au lote', 'ugumu wa ghafla wa kutembea au kizunguzungu', 'maumivu ya ghafla na makali ya kichwa']
    },
    commonSymptoms: {
      en: ['sudden weakness on one side', 'sudden difficulty speaking', 'sudden vision problems'],
      fr: ['faiblesse soudaine d\'un côté', 'difficulté soudaine à parler', 'problèmes de vision soudains'],
      sw: ['udhaifu wa ghafla upande mmoja', 'ugumu wa ghafla wa kuongea', 'matatizo ya macho ya ghafla']
    },
    rareSymptoms: {
      en: ['loss of consciousness', 'death'],
      fr: ['perte de conscience', 'décès'],
      sw: ['kupoteza fahamu', 'kifo']
    },
    causes: {
      en: ['ischemic stroke (blockage of blood vessel)', 'hemorrhagic stroke (bleeding in the brain)', 'blood clots', 'atherosclerosis'],
      fr: ['accident vasculaire cérébral ischémique (blocage du vaisseau sanguin)', 'accident vasculaire cérébral hémorragique (saignement dans le cerveau)', 'caillots sanguins', 'athérosclérose'],
      sw: ['kiharusi cha ischemic (kuziba kwa njia ya damu)', 'kiharusi cha hemorrhagic (kutokwa na damu ubongoni)', 'maganda ya damu', 'atherosclerosis']
    },
    riskFactors: {
      en: ['high blood pressure', 'diabetes', 'high cholesterol', 'smoking', 'atrial fibrillation', 'obesity', 'physical inactivity', 'age'],
      fr: ['hypertension artérielle', 'diabète', 'cholestérol élevé', 'tabagisme', 'fibrillation auriculaire', 'obésité', 'inactivité physique', 'âge'],
      sw: ['shinikizo la damu la juu', 'kisukari', 'kolesterol ya juu', 'sigara', 'atrial fibrillation', 'unene kupita kiasi', 'kutoweza kuwa na shughuli', 'umri']
    },
    treatment: {
      en: 'Emergency treatment (thrombolytic drugs, mechanical thrombectomy), rehabilitation, aspirin, blood pressure management.',
      fr: 'Traitement d\'urgence (médicaments thrombolytiques, thrombectomie mécanique), réadaptation, aspirine, gestion de la tension artérielle.',
      sw: 'Matibabu ya dharura (dawa za thrombolytic, thrombectomy ya makinisho), urekebishaji, aspirin, usimamizi wa shinikizo la damu.'
    },
    prevention: {
      en: 'Manage high blood pressure, control diabetes and cholesterol, stop smoking, regular exercise, healthy diet, limit alcohol.',
      fr: 'Gérer l\'hypertension artérielle, contrôler le diabète et le cholestérol, arrêter de fumer, faire de l\'exercice régulièrement, régime sain, limiter l\'alcool.',
      sw: 'Dhibiti shinikizo la damu la juu, dhibiti kisukari na kolesterol, acha sigara, mazoezi ya kawaida, lishe nzuri, zuia pombe.'
    },
    whenToSeekHelp: {
      en: 'Call emergency services immediately for any signs of stroke. Time is critical - "time is brain".',
      fr: 'Appelez les services d\'urgence immédiatement pour tout signe d\'accident vasculaire cérébral. Le temps est critique.',
      sw: 'Piga simu dharura mara moja kwa dalili yoyote ya kiharusi. Muda ni muhimu.'
    },
    complications: {
      en: ['paralysis', 'speech difficulties', 'memory loss', 'emotional changes', 'post-stroke depression'],
      fr: ['paralysie', 'difficultés d\'élocution', 'perte de mémoire', 'changements émotionnels', 'dépression post-AVC'],
      sw: ['kupooza', 'ugumu wa kuongea', 'kupoteza kumbukumbu', 'mabadiliko ya kihisia', 'unyogovu baada ya kiharusi']
    },
    diagnosis: {
      en: 'CT or MRI scan of the brain, blood tests, carotid ultrasound, heart monitoring.',
      fr: 'Tomodensitométrie ou IRM du cerveau, analyses de sang, échotomographie carotidienne, surveillance cardiaque.',
      sw: 'CT au MRI scan ya ubongo, vipimo vya damu, ultrasound ya carotid, ufuatiliaji wa moyo.'
    },
    possibleTests: {
      en: ['CT scan or MRI', 'Blood tests', 'Carotid ultrasound', 'Electrocardiogram (ECG)', 'Angiography'],
      fr: ['Scanner ou IRM', 'Analyses de sang', 'Échotomographie carotidienne', 'Électrocardiogramme (ECG)', 'Angiographie'],
      sw: ['CT au MRI', 'Vipimo vya damu', 'Ultrasound ya carotid', 'Electrocardiogram (ECG)', 'Angiography']
    },
    prognosis: {
      en: 'Depends on the extent of brain damage and how quickly treatment begins. Recovery varies greatly among individuals.',
      fr: 'Dépend de l\'ampleur des lésions cérébrales et de la rapidité du traitement. La récupération varie considérablement d\'une personne à l\'autre.',
      sw: 'Inaetegemea upande wa uharibifu wa ubongo na kasi ya uanzishaji wa matibabu. Kupona kinatofautiana sana kati ya watu.'
    },
    source: 'who',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'parkinsons',
    name: {
      en: 'Parkinson\'s Disease',
      fr: 'Maladie de Parkinson',
      sw: 'Ugonjwa wa Parkinson'
    },
    category: 'neurological',
    severity: 'high',
    symptoms: {
      en: ['tremors (shaking)', 'rigidity (stiffness)', 'bradykinesia (slow movement)', 'postural instability (balance problems)', 'cognitive changes', 'sleep problems'],
      fr: ['tremblements', 'rigidité', 'bradykinésie (mouvement lent)', 'instabilité posturale (problèmes d\'équilibre)', 'changements cognitifs', 'problèmes de sommeil'],
      sw: ['kutetetemeka', 'ugumu', 'bradykinesia (miondoko polepole)', 'ustability wa posturale (matatizo ya usawa)', 'mabadiliko ya akili', 'matatizo ya usingizi']
    },
    commonSymptoms: {
      en: ['tremors', 'stiffness', 'slow movement', 'balance problems'],
      fr: ['tremblements', 'rigidité', 'mouvement lent', 'problèmes d\'équilibre'],
      sw: ['kutetetemeka', 'ugumu', 'miondoko polepole', 'matatizo ya usawa']
    },
    rareSymptoms: {
      en: ['dementia', 'severe depression', 'hallucinations'],
      fr: ['démence', 'dépression sévère', 'hallucinations'],
      sw: ['dementia', 'unyogovu mkali', 'macho macheza']
    },
    causes: {
      en: ['loss of dopamine-producing neurons', 'genetic factors', 'environmental toxins', 'head injury', 'unknown in most cases'],
      fr: ['perte de neurones producteurs de dopamine', 'facteurs génétiques', 'toxines environnementales', 'traumatisme crânien', 'inconnus dans la plupart des cas'],
      sw: ['kupoteza neuroni znazo tengeneza dopamine', 'sababu za kijeni', 'sumu za mazingira', 'jeraha la kichwa', 'isiyojulikana katika hali nyingi']
    },
    riskFactors: {
      en: ['age', 'family history', 'male gender', 'head trauma', 'pesticide exposure'],
      fr: ['âge', 'antécédents familiaux', 'sexe masculin', 'traumatisme crânien', 'exposition aux pesticides'],
      sw: ['umri', 'historia ya familia', 'jinsia ya kiume', 'jeraha la kichwa', 'kufichuliwa na mbu ya wadudu']
    },
    treatment: {
      en: 'Levodopa (L-DOPA), dopamine agonists, inhibitors of dopamine breakdown, physical therapy, surgery (deep brain stimulation).',
      fr: 'Lévodopa (L-DOPA), agonistes de la dopamine, inhibiteurs de la dégradation de la dopamine, physiothérapie, chirurgie (stimulation cérébrale profonde).',
      sw: 'Levodopa (L-DOPA), agonists za dopamine, inhibitors za kuvunjika kwa dopamine, jitherapy ya mwili, upasuaji (stimulation ya ubongo')
    },
    prevention: {
      en: 'Maintain physical activity, cognitive engagement, healthy diet, head injury prevention.',
      fr: 'Maintenir l\'activité physique, l\'engagement cognitif, un régime sain, la prévention des traumatismes crâniens.',
      sw: 'Dumisha shughuli ya mwili, kujiingiza katika kazi ya akili, lishe nzuri, kuzuia majeraha ya kichwa.'
    },
    whenToSeekHelp: {
      en: 'See a doctor if you experience tremor, stiffness, or slowness of movement.',
      fr: 'Consultez un médecin si vous souffrez de tremblements, de rigidité ou de lenteur des mouvements.',
      sw: 'Muone daktari ikiwa una kutetetemeka, ugumu, au polepole ya miondoko.'
    },
    complications: {
      en: ['falls', 'fractures', 'pneumonia', 'dementia', 'depression'],
      fr: ['chutes', 'fractures', 'pneumonie', 'démence', 'dépression'],
      sw: ['kuanguka', 'kuvunjika', 'nimonia', 'dementia', 'unyogovu']
    },
    diagnosis: {
      en: 'Clinical diagnosis based on symptoms, neurological examination, imaging.',
      fr: 'Diagnostic clinique basé sur les symptômes, l\'examen neurologique, l\'imagerie.',
      sw: 'Utambuzi wa kimatibabu kulingana na dalili, uchunguzi wa neva, upigaji picha.'
    },
    prognosis: {
      en: 'Progressive disease, but symptoms can be managed with treatment. Life expectancy is near normal with modern treatment.',
      fr: 'Maladie progressive, mais les symptômes peuvent être gérés avec un traitement. L\'espérance de vie est proche de la normale avec le traitement moderne.',
      sw: 'Ugonjwa unaoendelea, lakini dalili zinaweza kudhibitiwa na matibabu. Umri wa maisha ni karibu kawaida na matibabu ya kisasa.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'low',
    ageGroup: 'elderly',
    gender: 'male'
  },
  {
    id: 'alzheimers',
    name: {
      en: 'Alzheimer\'s Disease',
      fr: 'Maladie d\'Alzheimer',
      sw: 'Ugonjwa wa Alzheimer'
    },
    category: 'neurological',
    severity: 'high',
    symptoms: {
      en: ['memory loss', 'difficulty with familiar tasks', 'problems with words in speaking or writing', 'disorientation to time or place', 'poor judgment', 'withdrawal from activities', 'mood changes'],
      fr: ['perte de mémoire', 'difficulté avec les tâches familières', 'problèmes de mots en parlant ou en écrivant', 'désorientation au temps ou au lieu', 'mauvais jugement', 'retrait des activités', 'changements d\'humeur'],
      sw: ['kupoteza kumbukumbu', 'ugumu wa kazi zinazofahamika', 'matatizo ya maneno katika kuongea au kuandika', 'kutokufahamu muda au mahali', 'utendaji mbaya wa hukumu', 'kujiondoka katika shughuli', 'mabadiliko ya mwamuzi']
    },
    commonSymptoms: {
      en: ['memory loss', 'confusion', 'disorientation', 'difficulty with familiar tasks'],
      fr: ['perte de mémoire', 'confusion', 'désorientation', 'difficulté avec les tâches familières'],
      sw: ['kupoteza kumbukumbu', 'kuchanganyikiwa', 'kutokufahamu', 'ugumu wa kazi zinazofahamika']
    },
    rareSymptoms: {
      en: ['severe behavioral changes', 'aggression', 'wandering', 'inability to care for self'],
      fr: ['changements comportementaux sévères', 'agression', 'errance', 'incapacité à prendre soin de soi'],
      sw: ['mabadiliko makali ya tabia', 'upinzani', 'kutembea bila kusudi', 'kutoweza kulinga mwenyewe']
    },
    causes: {
      en: ['accumulation of amyloid plaques and tau tangles in the brain', 'loss of brain cells', 'genetic factors', 'unknown in most cases'],
      fr: ['accumulation de plaques amyloïdes et d\'enchevêtrements tau dans le cerveau', 'perte de cellules cérébrales', 'facteurs génétiques', 'inconnus dans la plupart des cas'],
      sw: ['upilipili wa amyloid plaques na tau tangles katika ubongo', 'kupoteza seli za ubongo', 'sababu za kijeni', 'isiyojulikana katika hali nyingi']
    },
    riskFactors: {
      en: ['age', 'family history', 'genetics (APOE4 gene)', 'head injury', 'cardiovascular disease'],
      fr: ['âge', 'antécédents familiaux', 'génétique (gène APOE4)', 'traumatisme crânien', 'maladie cardiovasculaire'],
      sw: ['umri', 'historia ya familia', 'jeni (APOE4 gene)', 'jeraha la kichwa', 'ugonjwa wa moyo']
    },
    treatment: {
      en: 'Cholinesterase inhibitors, memantine, cognitive stimulation, physical activity, supportive care.',
      fr: 'Inhibiteurs de la cholinestérase, mémantine, stimulation cognitive, activité physique, soins de soutien.',
      sw: 'Cholinesterase inhibitors, memantine, kusisimua akili, shughuli ya mwili, huduma za msaada.'
    },
    prevention: {
      en: 'Maintain cognitive and physical activity, healthy diet (Mediterranean diet), manage cardiovascular risk factors, social engagement.',
      fr: 'Maintenir l\'activité cognitive et physique, régime sain (régime méditerranéen), gérer les facteurs de risque cardiovasculaire, engagement social.',
      sw: 'Dumisha shughuli ya akili na mwili, lishe nzuri, dhibiti sababu za hatari za moyo, kujiingiza na jamii.'
    },
    whenToSeekHelp: {
      en: 'See a doctor if you or a loved one experiences memory loss or cognitive changes.',
      fr: 'Consultez un médecin si vous ou un proche souffrez de perte de mémoire ou de changements cognitifs.',
      sw: 'Muone daktari ikiwa wewe au mtu unaemchumba ana kupoteza kumbukumbu au mabadiliko ya akili.'
    },
    complications: {
      en: ['falls', 'infections', 'malnutrition', 'dehydration', 'complete loss of function'],
      fr: ['chutes', 'infections', 'malnutrition', 'déshydratation', 'perte complète de fonction'],
      sw: ['kuanguka', 'maambukizi', 'utapiamlo', 'upungufu wa maji mwilini', 'kutoweza kabisa']
    },
    diagnosis: {
      en: 'Clinical diagnosis, neuropsychological testing, MRI or CT scan, amyloid/tau biomarker tests.',
      fr: 'Diagnostic clinique, tests neuropsychologiques, IRM ou scanner, tests de biomarqueurs amyloïdes/tau.',
      sw: 'Utambuzi wa kimatibabu, upimaji wa neuropsychological, MRI au CT scan, vipimo vya biomarker.'
    },
    prognosis: {
      en: 'Progressive disease with no cure. Average survival is 8-10 years after diagnosis.',
      fr: 'Maladie progressive sans cure. La survie moyenne est de 8-10 ans après le diagnostic.',
      sw: 'Ugonjwa unaoendelea bila gyui. Umri wa kawaida wa kuishi ni miaka 8-10 baada ya utambuzi.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'low',
    ageGroup: 'elderly',
    gender: 'all'
  },
  {
    id: 'multiple-sclerosis',
    name: {
      en: 'Multiple Sclerosis (MS)',
      fr: 'Sclérose en Plaques (SEP)',
      sw: 'Sclerosis Nyingi'
    },
    category: 'neurological',
    severity: 'high',
    symptoms: {
      en: ['fatigue', 'numbness or weakness', 'difficulty walking', 'blurred or double vision', 'tingling', 'muscle weakness', 'loss of coordination', 'difficulty with memory'],
      fr: ['fatigue', 'engourdissement ou faiblesse', 'difficulté à marcher', 'vision trouble ou double', 'picotements', 'faiblesse musculaire', 'perte de coordination', 'difficulté avec la mémoire'],
      sw: ['uchovu', 'ganzi au udhaifu', 'ugumu wa kutembea', 'macho yenye buini au mara mbili', 'maadhimisho', 'udhaifu wa misuli', 'kupoteza usawa', 'ugumu wa kumbukumbu']
    },
    commonSymptoms: {
      en: ['fatigue', 'numbness', 'vision problems', 'muscle weakness'],
      fr: ['fatigue', 'engourdissement', 'problèmes de vision', 'faiblesse musculaire'],
      sw: ['uchovu', 'ganzi', 'matatizo ya macho', 'udhaifu wa misuli']
    },
    rareSymptoms: {
      en: ['paralysis', 'blindness', 'cognitive decline'],
      fr: ['paralysie', 'cécité', 'déclin cognitif'],
      sw: ['kupooza', 'upofu', 'kupungua kwa akili']
    },
    causes: {
      en: ['autoimmune condition', 'myelin damage', 'genetic factors', 'environmental triggers', 'Epstein-Barr virus'],
      fr: ['condition auto-immune', 'dommages de la myéline', 'facteurs génétiques', 'déclencheurs environnementaux', 'virus d\'Epstein-Barr'],
      sw: ['hali ya kujiandamia kwa jinga', 'uharibifu wa myelin', 'sababu za kijeni', 'vichochezi vya mazingira', 'virusi ya Epstein-Barr']
    },
    riskFactors: {
      en: ['female gender', 'age (20-40)', 'family history', 'smoking', 'low vitamin D', 'north of equator (geography)'],
      fr: ['sexe féminin', 'âge (20-40)', 'antécédents familiaux', 'tabagisme', 'faible vitamine D', 'nord de l\'équateur (géographie)'],
      sw: ['jinsia ya kike', 'umri (20-40)', 'historia ya familia', 'sigara', 'vitamini D ya chini', 'kaskazini mwa equator']
    },
    treatment: {
      en: 'Disease-modifying therapies (DMTs), corticosteroids, physical therapy, occupational therapy, symptom management.',
      fr: 'Thérapies modificatrices de la maladie (TMM), corticostéroïdes, physiothérapie, ergothérapie, gestion des symptômes.',
      sw: 'Tiba za kubadilisha ugonjwa (DMTs), corticosteroids, jitherapy ya mwili, jitherapy ya kazi, usimamizi wa dalili.'
    },
    prevention: {
      en: 'Maintain vitamin D levels, avoid smoking, manage stress, healthy lifestyle.',
      fr: 'Maintenir les niveaux de vitamine D, éviter de fumer, gérer le stress, mode de vie sain.',
      sw: 'Dumisha viwango vya vitamini D, epuka sigara, dhibiti msongo, mtindo wa maisha wa afya.'
    },
    whenToSeekHelp: {
      en: 'See a doctor if you experience vision loss, numbness, weakness, or loss of coordination.',
      fr: 'Consultez un médecin si vous souffrez de perte de vision, d\'engourdissement, de faiblesse ou de perte de coordination.',
      sw: 'Muone daktari ikiwa una kupoteza macho, ganzi, udhaifu, au kupoteza usawa.'
    },
    complications: {
      en: ['blindness', 'paralysis', 'cognitive impairment', 'emotional issues'],
      fr: ['cécité', 'paralysie', 'déficience cognitive', 'problèmes émotionnels'],
      sw: ['upofu', 'kupooza', 'uhalifu wa akili', 'matatizo ya kihisia']
    },
    diagnosis: {
      en: 'MRI of brain and spinal cord, lumbar puncture, blood tests, visual evoked potentials.',
      fr: 'IRM du cerveau et de la moelle épinière, ponction lombaire, analyses de sang, potentiels visuels évoqués.',
      sw: 'MRI ya ubongo na uti wa mgongo, kuchoma uti wa mgongo, vipimo vya damu, potential ya macho inayoibuka.'
    },
    prognosis: {
      en: 'Varies widely - some people have mild symptoms while others develop severe disability. Early treatment improves outcomes.',
      fr: 'Varie considérablement - certaines personnes ont des symptômes légers tandis que d\'autres développent un handicap grave. Un traitement précoce améliore les résultats.',
      sw: 'Kinatofautiana sana - baadhi ya watu wana dalili nyepesi wakati wengine wanapata ulemavu mkali. Matibabu ya mapema yanaboresha matokeo.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'low',
    ageGroup: 'adult',
    gender: 'female'
  },
  {
    id: 'bells-palsy',
    name: {
      en: 'Bell\'s Palsy',
      fr: 'Paralysie de Bell',
      sw: 'Paralysis ya Bell'
    },
    category: 'neurological',
    severity: 'medium',
    symptoms: {
      en: ['sudden weakness of facial muscles on one side of the face', 'drooping of the mouth', 'difficulty closing eye on affected side', 'drooling', 'difficulty eating or drinking', 'difficulty smiling or making other expressions'],
      fr: ['soudaine faiblesse des muscles faciaux d\'un côté du visage', 'relâchement de la bouche', 'difficulté à fermer l\'œil du côté affecté', 'bave', 'difficulté à manger ou boire', 'difficulté à sourire ou faire d\'autres expressions'],
      sw: ['udhaifu wa ghafla wa misuli ya uso upande mmoja wa uso', 'kuanguka kwa kinywa', 'ugumu wa kufunga jicho upande ulioathiriwa', 'kutoka bei', 'ugumu wa kula au kunywa', 'ugumu wa kusimama au kuumba misemo mingine']
    },
    commonSymptoms: {
      en: ['facial weakness on one side', 'drooping mouth', 'difficulty closing eye'],
      fr: ['faiblesse faciale d\'un côté', 'relâchement de la bouche', 'difficulté à fermer l\'œil'],
      sw: ['udhaifu wa uso upande mmoja', 'kuanguka kwa kinywa', 'ugumu wa kufunga jicho']
    },
    rareSymptoms: {
      en: ['hearing loss', 'taste changes', 'eye dryness and damage'],
      fr: ['perte auditive', 'changements de goût', 'sécheresse et endommagement oculaires'],
      sw: ['kupoteza kusikia', 'mabadiliko ya ladha', 'ukavu wa jicho na uharibifu']
    },
    causes: {
      en: ['viral infection (especially herpes simplex virus)', 'inflammation of the facial nerve', 'Lyme disease (in some cases)', 'unknown in many cases'],
      fr: ['infection virale (en particulier le virus de l\'herpès simplex)', 'inflammation du nerf facial', 'maladie de Lyme (dans certains cas)', 'inconnu dans de nombreux cas'],
      sw: ['maambukizi ya virusi (hasa virusi ya herpes simplex)', 'uvimbe wa neva ya uso', 'ugonjwa wa Lyme (katika hali fulani)', 'isiyojulikana katika hali nyingi']
    },
    riskFactors: {
      en: ['viral infection history', 'pregnancy', 'diabetes', 'high blood pressure', 'stress'],
      fr: ['antécédents d\'infection virale', 'grossesse', 'diabète', 'hypertension artérielle', 'stress'],
      sw: ['historia ya maambukizi ya virusi', 'ujauzito', 'kisukari', 'shinikizo la damu la juu', 'msongo']
    },
    treatment: {
      en: 'Corticosteroids, antiviral medications, facial exercises, eye care (artificial tears, eye patch), physical therapy.',
      fr: 'Corticostéroïdes, médicaments antiviraux, exercices faciaux, soins oculaires (larmes artificielles, cache-œil), physiothérapie.',
      sw: 'Corticosteroids, dawa za kuzuia virusi, mazoezi ya uso, utunzaji wa macho (machozi ya artificial, barakoa ya jicho), jitherapy ya mwili.'
    },
    prevention: {
      en: 'Manage risk factors (diabetes, high blood pressure), treat viral infections promptly.',
      fr: 'Gérer les facteurs de risque (diabète, hypertension artérielle), traiter les infections virales rapidement.',
      sw: 'Dhibiti sababu za hatari (kisukari, shinikizo la damu la juu), tibu maambukizi ya virusi haraka.'
    },
    whenToSeekHelp: {
      en: 'See a doctor immediately if you experience sudden facial weakness or drooping.',
      fr: 'Consultez un médecin immédiatement si vous souffrez d\'une soudaine faiblesse ou d\'un relâchement du visage.',
      sw: 'Muone daktari mara moja ikiwa una udhaifu wa ghafla wa uso au kuanguka.'
    },
    complications: {
      en: ['eye damage (due to inability to close eye)', 'permanent facial nerve damage', 'chronic pain'],
      fr: ['dommages oculaires (en raison de l\'incapacité à fermer l\'œil)', 'dommages permanents du nerf facial', 'douleur chronique'],
      sw: ['uharibifu wa jicho (kutokana na kutoweza kufunga jicho)', 'uharibifu wa kudumu wa neva ya uso', 'maumivu ya kudumu']
    },
    diagnosis: {
      en: 'Clinical diagnosis based on symptoms, EMG (electromyography), imaging to rule out other causes.',
      fr: 'Diagnostic clinique basé sur les symptômes, EMG (électromyographie), imagerie pour exclure d\'autres causes.',
      sw: 'Utambuzi wa kimatibabu kulingana na dalili, EMG (electromyography), upigaji picha kuondoa sababu zingine.'
    },
    prognosis: {
      en: 'Most people recover completely within weeks to months. Some may have permanent weakness.',
      fr: 'La plupart des gens se rétablissent complètement en quelques semaines à quelques mois. Certains peuvent avoir une faiblesse permanente.',
      sw: 'Watu wengi hupona kabisa ndani ya wiki au miezi. Baadhi inaweza kuwa na udhaifu wa kudumu.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'medium',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'vertigo',
    name: {
      en: 'Vertigo/Dizziness',
      fr: 'Vertige/Étourdissement',
      sw: 'Kizunguzungu'
    },
    category: 'neurological',
    severity: 'medium',
    symptoms: {
      en: ['spinning sensation', 'dizziness', 'loss of balance', 'nausea', 'vomiting', 'vision problems', 'ringing in ears'],
      fr: ['sensation de rotation', 'étourdissement', 'perte d\'équilibre', 'nausées', 'vomissement', 'problèmes de vision', 'bourdonnement dans les oreilles'],
      sw: ['hisi ya kuzunguka', 'kizunguzungu', 'kupoteza usawa', 'kichefuchefu', 'kutapika', 'matatizo ya macho', 'kumeng\'eng\'e katika sikio']
    },
    commonSymptoms: {
      en: ['spinning sensation', 'dizziness', 'loss of balance'],
      fr: ['sensation de rotation', 'étourdissement', 'perte d\'équilibre'],
      sw: ['hisi ya kuzunguka', 'kizunguzungu', 'kupoteza usawa']
    },
    rareSymptoms: {
      en: ['severe falling', 'prolonged symptoms'],
      fr: ['chutes graves', 'symptômes prolongés'],
      sw: ['kuanguka kwingi', 'dalili za muda mrefu']
    },
    causes: {
      en: ['benign paroxysmal positional vertigo (BPPV)', 'Meniere\'s disease', 'vestibulitis', 'head injury', 'stroke', 'medication side effects', 'anxiety'],
      fr: ['vertige paroxystique positionnel bénin (VPPB)', 'maladie de Meniere', 'vestibulite', 'traumatisme crânien', 'AVC', 'effets secondaires des médicaments', 'anxiété'],
      sw: ['benign paroxysmal positional vertigo (BPPV)', 'ugonjwa wa Meniere', 'vestibulitis', 'jeraha la kichwa', 'kiharusi', 'athari za upande wa dawa', 'wasiwasi']
    },
    riskFactors: {
      en: ['age', 'head injury history', 'vestibular disorder history', 'anxiety disorder', 'certain medications'],
      fr: ['âge', 'antécédents de traumatisme crânien', 'antécédents de trouble vestibulaire', 'trouble d\'anxiété', 'certains médicaments'],
      sw: ['umri', 'historia ya jeraha la kichwa', 'historia ya tatanishi wa vestibular', 'tatanishi wa wasiwasi', 'dawa fulani']
    },
    treatment: {
      en: 'Canalith repositioning procedures (Epley maneuver), vestibular rehabilitation, medications for nausea, treating underlying cause.',
      fr: 'Procédures de repositionnement des canalithes (manœuvre d\'Epley), réadaptation vestibulaire, médicaments contre les nausées, traitement de la cause sous-jacente.',
      sw: 'Utaratibu wa uongezaji wa canalith (maneuver ya Epley), urekebishaji wa vestibular, dawa za kichefuchefu, kutibu sababu ya chini.'
    },
    prevention: {
      en: 'Head injury prevention, manage anxiety, treat underlying conditions.',
      fr: 'Prévention des traumatismes crâniens, gestion de l\'anxiété, traitement des conditions sous-jacentes.',
      sw: 'Kuzuia majeraha ya kichwa, dhibiti wasiwasi, tibu hali za chini.'
    },
    whenToSeekHelp: {
      en: 'See a doctor if dizziness is severe, persistent, or accompanied by other symptoms.',
      fr: 'Consultez un médecin si les étourdissements sont graves, persistants ou accompagnés d\'autres symptômes.',
      sw: 'Muone daktari ikiwa kizunguzungu ni kikali, kinaendelea, au kinaongezwa na dalili zingine.'
    },
    complications: {
      en: ['falls', 'injuries', 'anxiety', 'depression'],
      fr: ['chutes', 'blessures', 'anxiété', 'dépression'],
      sw: ['kuanguka', 'majeraha', 'wasiwasi', 'unyogovu']
    },
    diagnosis: {
      en: 'Clinical history and examination, Dix-Hallpike test, imaging (CT or MRI) if needed.',
      fr: 'Antécédents cliniques et examen, test de Dix-Hallpike, imagerie (scanner ou IRM) si nécessaire.',
      sw: 'Historia ya kimatibabu na uchunguzi, kipimo cha Dix-Hallpike, upigaji picha (CT au MRI) ikiwa inahitajika.'
    },
    prognosis: {
      en: 'Depends on cause. Many cases improve with treatment. Some may be chronic.',
      fr: 'Dépend de la cause. De nombreux cas s\'améliorent avec le traitement. Certains peuvent être chroniques.',
      sw: 'Inaetegemea sababu. Hali nyingi zinaboresha na matibabu. Baadhi inaweza kuwa ya kudumu.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  }
];