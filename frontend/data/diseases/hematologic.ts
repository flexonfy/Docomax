import { ComprehensiveDisease } from './types';

export const hematologicDiseases: ComprehensiveDisease[] = [
  {
    id: 'hemophilia',
    name: {
      en: 'Hemophilia',
      fr: 'Hémophilie',
      sw: 'Hemophilia'
    },
    category: 'hematologic',
    severity: 'high',
    symptoms: {
      en: ['excessive bleeding', 'easy bruising', 'joint pain', 'muscle pain', 'blood in urine', 'blood in stool'],
      fr: ['saignements excessifs', 'ecchymoses faciles', 'douleur articulaire', 'douleur musculaire', 'sang dans les urines', 'sang dans les selles'],
      sw: ['kutokwa damu kupita kiasi', 'michubuko rahisi', 'maumivu ya viungo', 'maumivu ya misuli', 'damu kwenye mkojo', 'damu kwenye kinyesi']
    },
    commonSymptoms: {
      en: ['excessive bleeding', 'easy bruising', 'joint pain'],
      fr: ['saignements excessifs', 'ecchymoses faciles', 'douleur articulaire'],
      sw: ['kutokwa damu kupita kiasi', 'michubuko rahisi', 'maumivu ya viungo']
    },
    rareSymptoms: {
      en: ['large bruises', 'blood in vomit', 'blood in saliva'],
      fr: ['grandes ecchymoses', 'sang dans les vomissements', 'sang dans la salive'],
      sw: ['michubuko mikubwa', 'damu kwenye tafakari', 'damu kwenye mate']
    },
    causes: {
      en: ['genetic deficiency in blood clotting factors', 'X-linked recessive inheritance'],
      fr: ['déficit génétique en facteurs de coagulation du sang', 'hérédité récessive liée à l\'X'],
      sw: ['upungufu wa kijeni wa sababu za kuganda damu', 'urithi unaohusiana na X unaorudi nyuma']
    },
    riskFactors: {
      en: ['male gender', 'family history', 'carrier status in females'],
      fr: ['sexe masculin', 'antécédents familiaux', 'statut de porteur chez les femmes'],
      sw: ['jinsia ya kiume', 'historia ya familia', 'hali ya wabeba kwa wanawake']
    },
    treatment: {
      en: 'Factor replacement therapy, desmopressin, tranexamic acid, blood transfusions.',
      fr: 'Thérapie de remplacement des facteurs, desmopressine, acide tranexamique, transfusions sanguines.',
      sw: 'Tiba ya uingizwaji wa kipengele, desmopressin, tranexamic acid, kuongezewa damu.'
    },
    prevention: {
      en: 'Genetic counseling, avoid traumatic activities.',
      fr: 'Conseil génétique, éviter les activités traumatisantes.',
      sw: 'Ushauri wa kijeni, epuka shughuli zenye kiwewe.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate help for uncontrolled bleeding or head injury.',
      fr: 'Consultez immédiatement pour des saignements incontrôlables ou une blessure à la tête.',
      sw: 'Tafuta msaada wa haraka kwa kutokwa damu kusilodhibitiwa au jeraha la kichwa.'
    },
    complications: {
      en: ['intracranial bleeding', 'joint damage', 'infection from transfusions'],
      fr: ['saignement intracranien', 'endommagement articulaire', 'infection après transfusion'],
      sw: ['kutokwa damu ndani ya kichwa', 'uharibifu wa viungo', 'maambukizi kutokana na kuongezewa damu']
    },
    diagnosis: {
      en: 'Blood tests (PT, aPTT, clotting factor levels).',
      fr: 'Tests sanguins (PT, TCA, niveaux de facteurs de coagulation).',
      sw: 'Vipimo vya damu (PT, aPTT, viwango vya kipengele cha kuganda).'
    },
    prognosis: {
      en: 'Manageable with proper treatment. Life expectancy near normal with modern therapy.',
      fr: 'Gérable avec un traitement appropri��. L\'espérance de vie proche de la normale avec la thérapie moderne.',
      sw: 'Inaweza kudhibitiwa na matibabu sahihi. Matarajio ya maisha karibu na kawaida na tiba ya kisasa.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'medium',
    ageGroup: 'all',
    gender: 'male'
  },
  {
    id: 'leukemia',
    name: {
      en: 'Leukemia',
      fr: 'Leucémie',
      sw: 'Leukemia'
    },
    category: 'hematologic',
    severity: 'high',
    symptoms: {
      en: ['fatigue', 'frequent infections', 'easy bleeding or bruising', 'bone or joint pain', 'swollen lymph nodes', 'enlarged spleen or liver', 'fever'],
      fr: ['fatigue', 'infections fréquentes', 'saignements ou ecchymoses faciles', 'douleur osseuse ou articulaire', 'ganglions lymphatiques enflés', 'rate ou foie hypertrophié', 'fièvre'],
      sw: ['uchovu', 'maambukizi ya mara kwa mara', 'kutokwa damu au michubuko rahisi', 'maumivu ya mifupa au viungo', 'tezi iliyovimba', 'uvimbe wa wengu au ini', 'homa']
    },
    commonSymptoms: {
      en: ['fatigue', 'frequent infections', 'easy bleeding', 'fever'],
      fr: ['fatigue', 'infections fréquentes', 'saignements faciles', 'fièvre'],
      sw: ['uchovu', 'maambukizi ya mara kwa mara', 'kutokwa damu rahisi', 'homa']
    },
    rareSymptoms: {
      en: ['shortness of breath', 'vision problems', 'confusion'],
      fr: ['essoufflement', 'problèmes de vision', 'confusion'],
      sw: ['upungufu wa pumzi', 'matatizo ya kuona', 'kuchanganyikiwa']
    },
    causes: {
      en: ['genetic mutations in blood cells', 'radiation exposure', 'chemical exposure'],
      fr: ['mutations génétiques dans les cellules sanguines', 'exposition aux radiations', 'exposition chimique'],
      sw: ['mabadiliko ya kijeni katika seli za damu', 'mfichuo wa mionzi', 'mfichuo wa kemikali']
    },
    riskFactors: {
      en: ['age', 'smoking', 'previous cancer treatment', 'genetic syndromes'],
      fr: ['âge', 'tabagisme', 'traitement du cancer antérieur', 'syndromes génétiques'],
      sw: ['umri', 'uvutaji sigara', 'matibabu ya saratani ya awali', 'hali za kijeni']
    },
    treatment: {
      en: 'Chemotherapy, targeted therapy, stem cell transplant, radiation.',
      fr: 'Chimiothérapie, thérapie ciblée, greffe de cellules souches, radiothérapie.',
      sw: 'Chemotherapy, tiba inayolengwa, upandikizaji wa seli, radiation.'
    },
    prevention: {
      en: 'Avoid smoking, limit radiation exposure.',
      fr: 'Éviter de fumer, limiter l\'exposition aux radiations.',
      sw: 'Epuka uvutaji sigara, punguza mfichuo wa mionzi.'
    },
    whenToSeekHelp: {
      en: 'See a doctor for persistent fever, excessive bruising, or signs of infection.',
      fr: 'Consultez un médecin pour une fièvre persistante, des ecchymoses excessives ou des signes d\'infection.',
      sw: 'Muone daktari kwa homa inayoendelea, michubuko mingi, au dalili za maambukizi.'
    },
    complications: {
      en: ['infection', 'bleeding', 'anemia', 'organ damage'],
      fr: ['infection', 'saignement', 'anémie', 'endommagement d\'organe'],
      sw: ['maambukizi', 'kutokwa damu', 'upungufu wa damu', 'uharibifu wa viungo']
    },
    diagnosis: {
      en: 'Blood tests, bone marrow biopsy.',
      fr: 'Tests sanguins, biopsie de la moelle osseuse.',
      sw: 'Vipimo vya damu, biopsy ya ubongo wa mfupa.'
    },
    prognosis: {
      en: 'Depends on type and age. Acute leukemia in children has improved survival rates with modern treatment.',
      fr: 'Dépend du type et de l\'âge. La leucémie aiguë chez les enfants a amélioré les taux de survie avec un traitement moderne.',
      sw: 'Inaetegemea aina na umri. Leukemia ya ghafla kwa watoto ina viwango vya kuishi vilivyoboreshe na matibabu ya kisasa.'
    },
    source: 'cdc',
    prevalenceInAfrica: 'medium',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'anemia',
    name: {
      en: 'Anemia',
      fr: 'Anémie',
      sw: 'Anemia'
    },
    category: 'hematologic',
    severity: 'medium',
    symptoms: {
      en: ['fatigue', 'weakness', 'shortness of breath', 'dizziness', 'cold hands and feet', 'pale skin', 'headaches', 'rapid heartbeat'],
      fr: ['fatigue', 'faiblesse', 'essoufflement', 'étourdissements', 'mains et pieds froids', 'peau pâle', 'maux de tête', 'rythme cardiaque rapide'],
      sw: ['uchovu', 'udhaifu', 'upungufu wa pumzi', 'kizunguzungu', 'mikono na miguu ya baridi', 'ngozi nyeupe', 'maumivu ya kichwa', 'mapigo ya moyo ya haraka']
    },
    commonSymptoms: {
      en: ['fatigue', 'weakness', 'shortness of breath'],
      fr: ['fatigue', 'faiblesse', 'essoufflement'],
      sw: ['uchovu', 'udhaifu', 'upungufu wa pumzi']
    },
    rareSymptoms: {
      en: ['jaundice', 'dark urine', 'leg ulcers'],
      fr: ['jaunisse', 'urine foncée', 'ulcères des jambes'],
      sw: ['manjano', 'mkojo mweusi', 'vidonda vya miguu']
    },
    causes: {
      en: ['iron deficiency', 'vitamin B12 deficiency', 'folate deficiency', 'chronic diseases', 'blood loss'],
      fr: ['carence en fer', 'carence en vitamine B12', 'carence en folate', 'maladies chroniques', 'perte de sang'],
      sw: ['upungufu wa chuma', 'upungufu wa vitamini B12', 'upungufu wa folate', 'magonjwa ya kudumu', 'kupoteza damu']
    },
    riskFactors: {
      en: ['poor diet', 'chronic disease', 'heavy menstrual bleeding', 'family history'],
      fr: ['mauvaise alimentation', 'maladie chronique', 'menstruations abondantes', 'antécédents familiaux'],
      sw: ['lishe duni', 'ugonjwa sugu', 'kutokwa damu sana wakati wa hedhi', 'historia ya familia']
    },
    treatment: {
      en: 'Iron supplements, B12 injections, folic acid, blood transfusions, treating underlying cause.',
      fr: 'Suppléments de fer, injections B12, acide folique, transfusions sanguines, traitement de la cause sous-jacente.',
      sw: 'Virutubisho vya chuma, sindano za B12, asidi ya foliki, kuongezewa damu, kutibu chanzo.'
    },
    prevention: {
      en: 'Healthy diet rich in iron, B12, folate; manage chronic conditions.',
      fr: 'Régime alimentaire sain riche en fer, B12, folate; gérer les conditions chroniques.',
      sw: 'Lishe yenye afya yenye chuma nyingi, B12, folate; dhibiti hali sugu.'
    },
    whenToSeekHelp: {
      en: 'See a doctor for persistent fatigue or shortness of breath.',
      fr: 'Consultez un médecin pour une fatigue persistante ou un essoufflement.',
      sw: 'Muone daktari kwa uchovu unaoendelea au upungufu wa pumzi.'
    },
    complications: {
      en: ['heart problems', 'organ damage', 'reduced quality of life'],
      fr: ['problèmes cardiaques', 'endommagement d\'organe', 'qualité de vie réduite'],
      sw: ['matatizo ya moyo', 'uharibifu wa viungo', 'ubora duni wa maisha']
    },
    diagnosis: {
      en: 'Complete blood count (CBC), blood smear, iron studies.',
      fr: 'Numération formule sanguine (NFS), frottis sanguin, tests de fer.',
      sw: 'Kipimo kamili cha damu (CBC), kucheza damu, vipimo vya chuma.'
    },
    prognosis: {
      en: 'Excellent with proper treatment. Most cases are reversible.',
      fr: 'Excellent avec un traitement approprié. La plupart des cas sont réversibles.',
      sw: 'Nzuri sana na matibabu sahihi. Kesi nyingi zinaweza kurekebishwa.'
    },
    source: 'who',
    prevalenceInAfrica: 'very-high',
    ageGroup: 'all',
    gender: 'all'
  }
];
