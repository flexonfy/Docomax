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
      en: ['throbbing or pulsing headache, often on one side', 'sensitivity to light, sound, and sometimes smell', 'nausea and vomiting', 'aura (visual disturbances like flashes of light or blind spots)'],
      fr: ['mal de tête pulsatile, souvent d\'un seul côté', 'sensibilité à la lumière, au son et parfois aux odeurs', 'nausées et vomissements', 'aura (troubles visuels comme des éclairs de lumière ou des angles morts)'],
      sw: ['maumivu ya kichwa yanayopiga, mara nyingi upande mmoja', 'unyeti kwa mwanga, sauti, na wakati mwingine harufu', 'kichefuchefu na kutapika', 'aura (usumbufu wa kuona kama miale ya mwanga au maeneo yasiyoonekana)']
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
      en: ['genetic and environmental factors', 'changes in the brainstem', 'imbalances in brain chemicals'],
      fr: ['facteurs génétiques et environnementaux', 'changements dans le tronc cérébral', 'déséquilibres des substances chimiques du cerveau'],
      sw: ['mambo ya kijeni na kimazingira', 'mabadiliko katika shina la ubongo', 'kutokuwepo usawa katika kemikali za ubongo']
    },
    riskFactors: {
      en: ['family history', 'female gender', 'hormonal changes', 'stress', 'certain foods and drinks'],
      fr: ['antécédents familiaux', 'sexe féminin', 'changements hormonaux', 'stress', 'certains aliments et boissons'],
      sw: ['historia ya familia', 'jinsia ya kike', 'mabadiliko ya homoni', 'msongo', 'vyakula na vinywaji fulani']
    },
    treatment: {
      en: 'Pain-relieving medications, preventive medications, lifestyle adjustments.',
      fr: 'Médicaments analgésiques, médicaments préventifs, ajustements du mode de vie.',
      sw: 'Dawa za kupunguza maumivu, dawa za kuzuia, marekebisho ya mtindo wa maisha.'
    },
    prevention: {
      en: 'Avoid triggers, regular sleep, stress management, exercise, stay hydrated.',
      fr: 'Éviter les déclencheurs, sommeil régulier, gestion du stress, exercice, rester hydraté.',
      sw: 'Epuka vichocheo, usingizi wa kawaida, dhibiti msongo, mazoezi, kunywa maji ya kutosha.'
    },
    whenToSeekHelp: {
      en: 'See a doctor for severe or frequent headaches, or if headache pattern changes.',
      fr: 'Consultez un médecin pour des maux de tête sévères ou fréquents.',
      sw: 'Muone daktari kwa maumivu makali au ya mara kwa mara ya kichwa.'
    },
    complications: {
      en: ['chronic migraine', 'stroke-like symptoms'],
      fr: ['migraine chronique', 'symptômes d\'accident vasculaire cérébral'],
      sw: ['migraine sugu', 'dalili kama kiharusi']
    },
    diagnosis: {
      en: 'Medical history, symptoms, neurological examination.',
      fr: 'Antécédents médicaux, symptômes, examen neurologique.',
      sw: 'Historia ya matibabu, dalili, uchunguzi wa neva.'
    },
    prognosis: {
      en: 'Chronic condition, manageable with treatment and lifestyle changes.',
      fr: 'Condition chronique, gérable avec un traitement et des changements de mode de vie.',
      sw: 'Hali sugu, inaweza kudhibitiwa na matibabu na mabadiliko ya mtindo wa maisha.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
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
      en: ['sudden weakness on one side of the face, arm, or leg', 'sudden confusion or difficulty speaking', 'sudden vision problems', 'sudden difficulty walking or dizziness', 'sudden severe headache'],
      fr: ['faiblesse soudaine d\'un côté du visage, du bras ou de la jambe', 'confusion soudaine ou difficulté à parler', 'problèmes de vision soudains', 'difficulté soudaine à marcher', 'mal de tête soudain et sévère'],
      sw: ['udhaifu wa ghafla upande mmoja wa uso, mkono, au mguu', 'kuchanganyikiwa kwa ghafla au shida ya kuongea', 'shida ya ghafla ya kuona', 'ugumu wa ghafla wa kutembea', 'maumivu ya ghafla ya kichwa']
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
      en: ['blockage of blood vessel', 'bleeding in the brain', 'blood clots', 'atherosclerosis'],
      fr: ['blocage du vaisseau sanguin', 'saignement dans le cerveau', 'caillots sanguins', 'athérosclérose'],
      sw: ['kuziba kwa njia ya damu', 'kutokwa na damu ubongoni', 'maganda ya damu', 'atherosclerosis']
    },
    riskFactors: {
      en: ['high blood pressure', 'diabetes', 'high cholesterol', 'smoking', 'atrial fibrillation', 'obesity'],
      fr: ['hypertension artérielle', 'diabète', 'cholestérol élevé', 'tabagisme', 'fibrillation auriculaire', 'obésité'],
      sw: ['shinikizo la damu la juu', 'kisukari', 'kolesterol ya juu', 'sigara', 'atrial fibrillation', 'unene kupita kiasi']
    },
    treatment: {
      en: 'Emergency treatment, thrombolytic drugs, rehabilitation, aspirin, blood pressure management.',
      fr: 'Traitement d\'urgence, médicaments thrombolytiques, réadaptation, aspirine, gestion de la tension artérielle.',
      sw: 'Matibabu ya dharura, dawa za thrombolytic, urekebishaji, aspirin, usimamizi wa shinikizo la damu.'
    },
    prevention: {
      en: 'Manage blood pressure, control diabetes and cholesterol, stop smoking, exercise, healthy diet.',
      fr: 'Gérer la tension artérielle, contrôler le diabète et le cholestérol, arrêter de fumer, exercice, régime sain.',
      sw: 'Dhibiti shinikizo la damu, dhibiti kisukari na kolesterol, acha sigara, mazoezi, lishe nzuri.'
    },
    whenToSeekHelp: {
      en: 'Call emergency services immediately. Time is critical for stroke treatment.',
      fr: 'Appelez les services d\'urgence immédiatement. Le temps est critique.',
      sw: 'Piga simu dharura mara moja. Muda ni muhimu.'
    },
    complications: {
      en: ['paralysis', 'speech difficulties', 'memory loss', 'post-stroke depression'],
      fr: ['paralysie', 'difficultés d\'élocution', 'perte de mémoire', 'dépression post-AVC'],
      sw: ['kupooza', 'ugumu wa kuongea', 'kupoteza kumbukumbu', 'unyogovu baada ya kiharusi']
    },
    diagnosis: {
      en: 'CT or MRI scan, blood tests, carotid ultrasound, heart monitoring.',
      fr: 'Tomodensitométrie ou IRM, analyses de sang, échotomographie carotidienne, surveillance cardiaque.',
      sw: 'CT au MRI scan, vipimo vya damu, ultrasound ya carotid, ufuatiliaji wa moyo.'
    },
    prognosis: {
      en: 'Depends on extent of damage and treatment timing. Early treatment improves outcomes.',
      fr: 'Dépend de l\'ampleur des dommages et du moment du traitement.',
      sw: 'Inaetegemea upande wa uharibifu na muda wa matibabu.'
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
      sw: ['kutetetemeka', 'ugumu', 'bradykinesia (miondoko polepole)', 'instability ya posturale (matatizo ya usawa)', 'mabadiliko ya akili', 'matatizo ya usingizi']
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
      en: ['loss of dopamine-producing neurons', 'genetic factors', 'environmental toxins'],
      fr: ['perte de neurones producteurs de dopamine', 'facteurs génétiques', 'toxines environnementales'],
      sw: ['kupoteza neuroni znazo tengeneza dopamine', 'sababu za kijeni', 'sumu za mazingira']
    },
    riskFactors: {
      en: ['age', 'family history', 'male gender', 'head trauma', 'pesticide exposure'],
      fr: ['âge', 'antécédents familiaux', 'sexe masculin', 'traumatisme crânien', 'exposition aux pesticides'],
      sw: ['umri', 'historia ya familia', 'jinsia ya kiume', 'jeraha la kichwa', 'kufichuliwa na mbu ya wadudu']
    },
    treatment: {
      en: 'Levodopa (L-DOPA), dopamine agonists, inhibitors, physical therapy, surgery (deep brain stimulation).',
      fr: 'Lévodopa (L-DOPA), agonistes de la dopamine, inhibiteurs, physiothérapie, chirurgie (stimulation cérébrale profonde).',
      sw: 'Levodopa (L-DOPA), agonists za dopamine, inhibitors, jitherapy ya mwili, upasuaji (stimulation ya ubongo).'
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
      en: 'Clinical diagnosis based on symptoms and neurological examination.',
      fr: 'Diagnostic clinique basé sur les symptômes et l\'examen neurologique.',
      sw: 'Utambuzi wa kimatibabu kulingana na dalili na uchunguzi wa neva.'
    },
    prognosis: {
      en: 'Progressive disease, but symptoms manageable with treatment. Life expectancy near normal.',
      fr: 'Maladie progressive, mais les symptômes peuvent être gérés. L\'espérance de vie est proche de la normale.',
      sw: 'Ugonjwa unaoendelea, lakini dalili zinaweza kudhibitiwa. Umri wa maisha ni karibu kawaida.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'low',
    ageGroup: 'elderly',
    gender: 'male'
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
      en: ['spinning sensation', 'dizziness', 'loss of balance', 'nausea', 'vomiting', 'vision problems'],
      fr: ['sensation de rotation', 'étourdissement', 'perte d\'équilibre', 'nausées', 'vomissement', 'problèmes de vision'],
      sw: ['hisi ya kuzunguka', 'kizunguzungu', 'kupoteza usawa', 'kichefuchefu', 'kutapika', 'matatizo ya macho']
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
      en: ['benign paroxysmal positional vertigo (BPPV)', 'Meniere\'s disease', 'vestibulitis', 'head injury', 'stroke'],
      fr: ['vertige paroxystique positionnel bénin (VPPB)', 'maladie de Meniere', 'vestibulite', 'traumatisme crânien', 'AVC'],
      sw: ['benign paroxysmal positional vertigo (BPPV)', 'ugonjwa wa Meniere', 'vestibulitis', 'jeraha la kichwa', 'kiharusi']
    },
    riskFactors: {
      en: ['age', 'head injury history', 'vestibular disorder history', 'anxiety disorder'],
      fr: ['âge', 'antécédents de traumatisme crânien', 'antécédents de trouble vestibulaire', 'trouble d\'anxiété'],
      sw: ['umri', 'historia ya jeraha la kichwa', 'historia ya tatanishi wa vestibular', 'tatanishi wa wasiwasi']
    },
    treatment: {
      en: 'Canalith repositioning procedures (Epley maneuver), vestibular rehabilitation, medications for nausea.',
      fr: 'Procédures de repositionnement des canalithes (manœuvre d\'Epley), réadaptation vestibulaire, médicaments contre les nausées.',
      sw: 'Utaratibu wa uongezaji wa canalith (maneuver ya Epley), urekebishaji wa vestibular, dawa za kichefuchefu.'
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
      en: 'Clinical history, examination, Dix-Hallpike test, imaging if needed.',
      fr: 'Antécédents cliniques, examen, test de Dix-Hallpike, imagerie si nécessaire.',
      sw: 'Historia ya kimatibabu, uchunguzi, kipimo cha Dix-Hallpike, upigaji picha ikiwa inahitajika.'
    },
    prognosis: {
      en: 'Depends on cause. Many improve with treatment. Some may be chronic.',
      fr: 'Dépend de la cause. Beaucoup s\'améliorent avec le traitement.',
      sw: 'Inaetegemea sababu. Hali nyingi zinaboresha na matibabu.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  }
];
