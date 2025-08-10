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
    prognosis: {
      en: 'Chronic condition, but can be managed with treatment and lifestyle changes.',
      fr: 'Condition chronique, mais peut être gérée avec un traitement et des changements de mode de vie.',
      sw: 'Hali sugu, lakini inaweza kudhibitiwa na matibabu na mabadiliko ya mtindo wa maisha.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'female'
  }
];
