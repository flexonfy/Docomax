import { ComprehensiveDisease } from './types';

export const rareGeneticDiseases: ComprehensiveDisease[] = [
  {
    id: 'cystic-fibrosis',
    name: {
      en: 'Cystic Fibrosis',
      fr: 'Fibrose Kystique',
      sw: 'Fibrosis ya Cystic'
    },
    category: 'genetic',
    severity: 'high',
    symptoms: {
      en: ['persistent cough', 'sputum production', 'shortness of breath', 'wheezing', 'nasal polyps', 'poor weight gain', 'greasy stools', 'abdominal pain'],
      fr: ['toux persistante', 'expulsion d\'expectoration', 'essoufflement', 'respiration sifflante', 'polypes nasaux', 'gain de poids insuffisant'],
      sw: ['kikohozi kila wakati', 'kutokwa na mate', 'upungufu wa hewa', 'kusikiliza mlio wa hewa', 'polypu za pua', 'kupungua kwa uzani', 'mavi mengi ya mafuta', 'maumivu ya tumbo']
    },
    commonSymptoms: {
      en: ['persistent cough', 'shortness of breath', 'poor weight gain', 'greasy stools'],
      fr: ['toux persistante', 'essoufflement', 'gain de poids insuffisant'],
      sw: ['kikohozi kila wakati', 'upungufu wa hewa', 'kupungua kwa uzani', 'mavi mengi ya mafuta']
    },
    rareSymptoms: {
      en: ['liver disease', 'pancreatic failure', 'diabetes', 'infertility', 'respiratory failure'],
      fr: ['maladie hépatique', 'insuffisance pancréatique', 'diabète', 'infertilité', 'insuffisance respiratoire'],
      sw: ['ugonjwa wa ini', 'kushindwa kwa pancreas', 'sukari', 'kutokuwa na watoto', 'kushindwa kwa ukoffi']
    },
    causes: {
      en: ['genetic mutation in CFTR gene', 'inherited autosomal recessive trait'],
      fr: ['mutation génétique dans le gène CFTR', 'trait autosomique récessif hérité'],
      sw: ['mabadiliko ya jeni katika CFTR', 'sifa ya kurithi ya autosomal recessive']
    },
    riskFactors: {
      en: ['family history of cystic fibrosis', 'carrier parents', 'caucasian ancestry'],
      fr: ['antécédents familiaux de fibrose kystique', 'parents porteurs', 'ascendance caucasienne'],
      sw: ['historia ya familia ya cystic fibrosis', 'wazazi wasiobadilika', 'asili ya caucasian']
    },
    treatment: {
      en: 'Airway clearance techniques, bronchodilators, antibiotics, pancreatic enzyme replacement, and nutritional support.',
      fr: 'Techniques de dégagement des voies aériennes, bronchodilatateurs, antibiotiques, remplacement enzymatique pancréatique.',
      sw: 'Mbinu za kusafisha njia za hewa, bronchodilators, antibiotics, kurudia enzymes ya pancreas, na kusaidia kwa virutubishi.'
    },
    prevention: {
      en: 'Genetic counseling for at-risk families. No prevention for those with genetic mutation.',
      fr: 'Conseil génétique pour les familles à risque.',
      sw: 'Shauri la jenetiki kwa familia zenye hatari.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate care for persistent cough, respiratory distress, hemoptysis, or recurrent respiratory infections.',
      fr: 'Cherchez des soins immédiats pour une toux persistante, une détresse respiratoire.',
      sw: 'Tafuta huduma za haraka kwa kikohozi kila wakati, upungufu wa hewa, au kutokwa damu ndani ya mkambi.'
    },
    complications: {
      en: ['chronic lung infection', 'pancreatic insufficiency', 'cystic fibrosis related diabetes', 'liver disease', 'respiratory failure'],
      fr: ['infection pulmonaire chronique', 'insuffisance pancréatique', 'diabète lié à la fibrose kystique', 'maladie hépatique'],
      sw: ['ambukizo la mapafu la mahabadiliko', 'ukosefu wa pancreas', 'sukari ya cystic fibrosis', 'ugonjwa wa ini', 'kushindwa kwa ukoffi']
    },
    diagnosis: {
      en: 'Newborn screening test, sweat chloride test, genetic testing, or pulmonary function tests.',
      fr: 'Test de dépistage néonatal, test du chlorure de sueur, tests génétiques.',
      sw: 'Mtihani wa watoto wanaoozaliwa, mtihani wa kloridi, mtihani wa jenetiki, au mtihani wa ukoffi.'
    },
    prognosis: {
      en: 'Life expectancy has improved significantly with modern treatments. Median survival is now in the 40s-50s.',
      fr: 'L\'espérance de vie s\'est considérablement améliorée. La survie médiane est maintenant dans les 40s-50s.',
      sw: 'Umri wa maishi umeboresha sana na matibabu ya sasa. Umri wa kati ni sasa katika 40s-50s.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'low',
    ageGroup: 'pediatric',
    gender: 'all'
  },
  {
    id: 'sickle-cell-disease',
    name: {
      en: 'Sickle Cell Disease',
      fr: 'Drépanocytose',
      sw: 'Ugonjwa wa Sickle Cell'
    },
    category: 'genetic',
    severity: 'high',
    symptoms: {
      en: ['bone pain', 'chest pain', 'shortness of breath', 'fatigue', 'jaundice', 'swelling of hands and feet', 'headache', 'priapism'],
      fr: ['douleur osseuse', 'douleur thoracique', 'essoufflement', 'fatigue', 'jaunisse', 'gonflement des mains et des pieds'],
      sw: ['maumivu ya mifupa', 'maumivu ya kiganja', 'upungufu wa hewa', 'uchovu', 'ukungu', 'kubwa kwa mikono na miguu', 'maumivu ya kichwa', 'priapism']
    },
    commonSymptoms: {
      en: ['bone pain', 'fatigue', 'jaundice', 'shortness of breath'],
      fr: ['douleur osseuse', 'fatigue', 'jaunisse', 'essoufflement'],
      sw: ['maumivu ya mifupa', 'uchovu', 'ukungu', 'upungufu wa hewa']
    },
    rareSymptoms: {
      en: ['stroke', 'organ damage', 'acute chest syndrome', 'acute splenic sequestration', 'death'],
      fr: ['accident vasculaire cérébral', 'dommages d\'organe', 'syndrome thoracique aigu', 'séquestration splénique aiguë'],
      sw: ['kumimina kwa akili', 'dharau ya kiungo', 'homa ya kiganja', 'kukamatia kwa spline', 'kifo']
    },
    causes: {
      en: ['genetic mutation in hemoglobin gene', 'inherited autosomal recessive trait'],
      fr: ['mutation génétique dans le gène de l\'hémoglobine', 'trait autosomique récessif hérité'],
      sw: ['mabadiliko ya jeni katika jeni ya hemoglobin', 'sifa ya kurithi ya autosomal recessive']
    },
    riskFactors: {
      en: ['african ancestry', 'mediterranean ancestry', 'family history of sickle cell', 'certain geographic origins'],
      fr: ['ascendance africaine', 'ascendance méditerranéenne', 'antécédents familiaux'],
      sw: ['asili ya Afrika', 'asili ya Mediterranean', 'historia ya familia', 'asili maalum ya kijiografia']
    },
    treatment: {
      en: 'Pain management, hydroxyurea therapy, blood transfusions, folic acid supplementation, and hematopoietic stem cell transplant.',
      fr: 'Gestion de la douleur, thérapie à l\'hydroxyurée, transfusions sanguines, supplémentation en acide folique.',
      sw: 'Kudhibiti maumivu, matibabu ya hydroxyurea, kuomba damu, kuongeza asidi ya folik, na kubadilisha viseli vya stem.'
    },
    prevention: {
      en: 'Genetic counseling, newborn screening, and preventive penicillin therapy.',
      fr: 'Conseil génétique, dépistage néonatal et thérapie à la pénicilline préventive.',
      sw: 'Shauri la jenetiki, mtihani wa watoto wanaoozaliwa, na matibabu ya penicillin ya kuzida.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate care for severe bone pain, chest pain, shortness of breath, acute neurological symptoms, or fever above 38.5°C.',
      fr: 'Cherchez des soins immédiats pour une douleur osseuse grave, une douleur thoracique, une détresse respiratoire.',
      sw: 'Tafuta huduma za haraka kwa maumivu makali ya mifupa, maumivu ya kiganja, upungufu wa hewa, au homa zaidi ya 38.5°C.'
    },
    complications: {
      en: ['acute chest syndrome', 'stroke', 'organ damage', 'pulmonary hypertension', 'kidney disease', 'eye disease', 'bone necrosis'],
      fr: ['syndrome thoracique aigu', 'accident vasculaire cérébral', 'dommages d\'organe', 'hypertension pulmonaire', 'maladie rénale'],
      sw: ['homa ya kiganja ya haraka', 'kumimina kwa akili', 'dharau ya kiungo', 'juu ya shinikizo la mapafu', 'ugonjwa wa figo', 'ugonjwa wa macho', 'vifo vya mifupa']
    },
    diagnosis: {
      en: 'Newborn screening, hemoglobin electrophoresis, complete blood count, or genetic testing.',
      fr: 'Dépistage néonatal, électrophorèse de l\'hémoglobine, formule sanguine complète, ou tests génétiques.',
      sw: 'Mtihani wa watoto wanaoozaliwa, electrophoresis ya hemoglobin, mtihani kamili wa damu, au mtihani wa jenetiki.'
    },
    prognosis: {
      en: 'With modern treatment, many patients live into their 40s-50s. Median survival has improved dramatically.',
      fr: 'Avec le traitement moderne, de nombreux patients vivent jusque dans les 40s-50s.',
      sw: 'Na matibabu ya sasa, wagonjwa wengi wanaishi hadi 40s-50s. Umri wa kati umeboresha sana.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'hemophilia',
    name: {
      en: 'Hemophilia',
      fr: 'Hémophilie',
      sw: 'Hemophilia'
    },
    category: 'genetic',
    severity: 'high',
    symptoms: {
      en: ['easy bruising', 'excessive bleeding', 'joint pain', 'swelling', 'muscle hematoma', 'prolonged bleeding after injury', 'internal bleeding'],
      fr: ['ecchymose facile', 'saignement excessif', 'douleur articulaire', 'gonflement', 'hématome musculaire', 'saignement prolongé après blessure'],
      sw: ['kidonda rahisi', 'kutokwa damu kali', 'maumivu ya mifumo', 'kubwa', 'hematoma ya misuli', 'kutokwa damu kwa muda mrefu baada ya jeraha', 'kutokwa damu ndani']
    },
    commonSymptoms: {
      en: ['easy bruising', 'excessive bleeding', 'prolonged bleeding after injury'],
      fr: ['ecchymose facile', 'saignement excessif', 'saignement prolongé après blessure'],
      sw: ['kidonda rahisi', 'kutokwa damu kali', 'kutokwa damu kwa muda mrefu baada ya jeraha']
    },
    rareSymptoms: {
      en: ['life-threatening hemorrhage', 'intracranial bleeding', 'gastrointestinal bleeding', 'death'],
      fr: ['hémorragie menaçant la vie', 'saignement intracrânien', 'saignement gastro-intestinal'],
      sw: ['kutokwa damu kukuumiza maisha', 'kutokwa damu katika kichwa', 'kutokwa damu katika tumbo', 'kifo']
    },
    causes: {
      en: ['genetic mutation in clotting factor gene', 'inherited X-linked recessive trait'],
      fr: ['mutation génétique dans le gène du facteur de coagulation', 'trait récessif lié à l\'X hérité'],
      sw: ['mabadiliko ya jeni katika jeni ya sababu ya coagulation', 'sifa ya X-linked recessive iliyorithi']
    },
    riskFactors: {
      en: ['family history of hemophilia', 'male gender', 'carrier females', 'certain ethnic groups'],
      fr: ['antécédents familiaux d\'hémophilie', 'sexe masculin', 'femmes porteuses'],
      sw: ['historia ya familia ya hemophilia', 'kijinsia cha kiume', 'wanawake wasiobadilika', 'vikundi vya kijamii vya maalum']
    },
    treatment: {
      en: 'Factor replacement therapy, immunosuppressants, or gene therapy.',
      fr: 'Thérapie de remplacement des facteurs, immunosuppresseurs, ou thérapie génique.',
      sw: 'Matibabu ya kurudia sababu, immunosuppressants, au matibabu ya jeni.'
    },
    prevention: {
      en: 'Genetic counseling for families with hemophilia. Avoid trauma and contact sports.',
      fr: 'Conseil génétique pour les familles atteintes d\'hémophilie. Éviter les traumatismes et les sports de contact.',
      sw: 'Shauri la jenetiki kwa familia zenye hemophilia. Zidi maadhimisho na michezo ya kukamatiana.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate care for severe bleeding, joint pain with swelling, severe bruising, or signs of internal bleeding.',
      fr: 'Cherchez des soins immédiats pour un saignement grave, une douleur articulaire avec gonflement.',
      sw: 'Tafuta huduma za haraka kwa kutokwa damu kali, maumivu ya mifumo na kubwa, au dalili ya kutokwa damu ndani.'
    },
    complications: {
      en: ['joint damage', 'arthropathy', 'intracranial hemorrhage', 'gastrointestinal bleeding', 'inhibitor development'],
      fr: ['dommages articulaires', 'arthropathie', 'hémorragie intracrânienne', 'saignement gastro-intestinal'],
      sw: ['dharau ya mifumo', 'arthropathy', 'kutokwa damu katika kichwa', 'kutokwa damu katika tumbo', 'ujenzi wa kidhibiti']
    },
    diagnosis: {
      en: 'Coagulation studies, factor assays, activated partial thromboplastin time (aPTT), or genetic testing.',
      fr: 'Études de coagulation, dosages des facteurs, temps de thromboplastine partielle activé (aPTT).',
      sw: 'Mtihani wa coagulation, mtihani wa sababu, aPTT, au mtihani wa jenetiki.'
    },
    prognosis: {
      en: 'With appropriate treatment, most people with hemophilia live normal lifespans. Regular treatment prevents complications.',
      fr: 'Avec le traitement approprié, la plupart des personnes atteintes d\'hémophilie vivent des vies normales.',
      sw: 'Na matibabu sahihi, wagonjwa wengi wa hemophilia wanaishi umri wa kawaida. Matibabu ya kawaida yanazeidi shida.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'low',
    ageGroup: 'all',
    gender: 'male',
    quizQuestions: [
      {
        en: 'Do you have a family history of hemophilia or bleeding disorders?',
        fr: 'Avez-vous des antécédents familiaux d\'hémophilie ou de troubles de la coagulation?',
        sw: 'Je una historia ya familia ya hemophilia au shida za kutokwa damu?',
        isRiskFactor: true
      }
    ]
  },
  {
    id: 'marfan-syndrome',
    name: {
      en: 'Marfan Syndrome',
      fr: 'Syndrome de Marfan',
      sw: 'Marfan Syndrome'
    },
    category: 'genetic',
    severity: 'high',
    symptoms: {
      en: ['tall stature', 'long limbs', 'flexible joints', 'chest deformity', 'vision problems', 'heart problems', 'lens dislocation', 'aortic dilation'],
      fr: ['grande taille', 'membres longs', 'articulations flexibles', 'déformité thoracique', 'problèmes de vision', 'problèmes cardiaques'],
      sw: ['urefu wa kawaida zaidi', 'mikono na miguu mirefu', 'mifumo nyingi', 'shida ya kiganja', 'shida ya macho', 'shida ya moyo', 'lens inayoleana', 'aorta iliyobomu']
    },
    commonSymptoms: {
      en: ['tall stature', 'long limbs', 'flexible joints', 'lens dislocation'],
      fr: ['grande taille', 'membres longs', 'articulations flexibles'],
      sw: ['urefu wa kawaida zaidi', 'mikono na miguu mirefu', 'mifumo nyingi', 'lens inayoleana']
    },
    rareSymptoms: {
      en: ['aortic rupture', 'heart failure', 'sudden death', 'retinal detachment'],
      fr: ['rupture aortique', 'insuffisance cardiaque', 'mort subite', 'décollement rétinien'],
      sw: ['mtu unayohara', 'kushindwa kwa moyo', 'kifo kwa haraka', 'kusingatia macho']
    },
    causes: {
      en: ['genetic mutation in FBN1 gene', 'inherited autosomal dominant trait'],
      fr: ['mutation génétique dans le gène FBN1', 'trait autosomique dominant hérité'],
      sw: ['mabadiliko ya jeni katika FBN1', 'sifa ya kurithi ya autosomal dominant']
    },
    riskFactors: {
      en: ['family history of marfan syndrome', 'tall stature', 'vision problems', 'chest pain'],
      fr: ['antécédents familiaux du syndrome de Marfan', 'grande taille', 'problèmes de vision'],
      sw: ['historia ya familia ya marfan syndrome', 'urefu wa kawaida zaidi', 'shida ya macho', 'maumivu ya kiganja']
    },
    treatment: {
      en: 'Beta-blockers or ARBs to reduce aortic dilation, eye surgery for lens dislocation, and cardiac management.',
      fr: 'Bêtabloquants ou ARA pour réduire la dilatation aortique, chirurgie oculaire pour la luxation de la lentille.',
      sw: 'Beta-blockers au ARBs kuweka juu aorta, operesheni ya macho kwa lens inayoleana, na huduma ya moyo.'
    },
    prevention: {
      en: 'Genetic counseling, avoid strenuous activities, regular cardiac monitoring, and eye examinations.',
      fr: 'Conseil génétique, éviter les activités épuisantes, surveillance cardiaque régulière.',
      sw: 'Shauri la jenetiki, zidi shughuli zinazostahimili, kuzima moyo kila wakati, na mtihani wa macho.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate care for sudden chest pain, shortness of breath, vision changes, or signs of aortic dissection.',
      fr: 'Cherchez des soins immédiats pour une douleur thoracique soudaine, une détresse respiratoire, des changements de vision.',
      sw: 'Tafuta huduma za haraka kwa maumivu ya kiganja ya ghafla, upungufu wa hewa, mabadiliko ya macho, au dalili ya aorta dissection.'
    },
    complications: {
      en: ['aortic dissection', 'aortic rupture', 'heart failure', 'sudden cardiac death', 'retinal detachment', 'lens dislocation'],
      fr: ['dissection aortique', 'rupture aortique', 'insuffisance cardiaque', 'mort cardiaque subite', 'décollement rétinien'],
      sw: ['aorta dissection', 'mtu unayohara', 'kushindwa kwa moyo', 'kifo kwa haraka cha moyo', 'kusingatia macho', 'lens inayoleana']
    },
    diagnosis: {
      en: 'Clinical examination, echocardiogram, eye examination, genetic testing, or fibrillin-1 testing.',
      fr: 'Examen clinique, échocardiogramme, examen oculaire, tests génétiques.',
      sw: 'Mtihani wa kliniki, echocardiogram, mtihani wa macho, mtihani wa jenetiki, au mtihani wa fibrillin-1.'
    },
    prognosis: {
      en: 'With proper cardiac monitoring and management, most people with Marfan syndrome have normal life expectancy.',
      fr: 'Avec une surveillance cardiaque appropriée, la plupart des personnes atteintes du syndrome de Marfan ont une espérance de vie normale.',
      sw: 'Na kuzima moyo na huduma, watu wengi wa marfan syndrome wana umri wa kawaida wa maisha.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'low',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'duchenne-muscular-dystrophy',
    name: {
      en: 'Duchenne Muscular Dystrophy',
      fr: 'Dystrophie Musculaire de Duchenne',
      sw: 'Duchenne Muscular Dystrophy'
    },
    category: 'genetic',
    severity: 'high',
    symptoms: {
      en: ['delayed motor milestones', 'difficulty walking', 'muscle weakness', 'calf enlargement', 'frequent falls', 'difficulty climbing stairs', 'waddling gait', 'toe-walking'],
      fr: ['jalons moteurs retardés', 'difficulté à marcher', 'faiblesse musculaire', 'hypertrophie du mollet', 'chutes fréquentes'],
      sw: ['dalili za motor zilizochelewa', 'shida ya kutembea', 'dhaufu ya misuli', 'kumba kubwa', 'kuanguka kwa kawaida', 'shida ya kupanda ngazi', 'kutembea kwa njia maalum', 'kutembea na vidole vya mguu']
    },
    commonSymptoms: {
      en: ['muscle weakness', 'difficulty walking', 'calf enlargement'],
      fr: ['faiblesse musculaire', 'difficulté à marcher', 'hypertrophie du mollet'],
      sw: ['dhaufu ya misuli', 'shida ya kutembea', 'kumba kubwa']
    },
    rareSymptoms: {
      en: ['respiratory failure', 'cardiac complications', 'respiratory infection', 'death'],
      fr: ['insuffisance respiratoire', 'complications cardiaques', 'infection respiratoire'],
      sw: ['kushindwa kwa ukoffi', 'shida ya moyo', 'ambukizo la respiratory', 'kifo']
    },
    causes: {
      en: ['genetic mutation in dystrophin gene', 'inherited X-linked recessive trait'],
      fr: ['mutation génétique dans le gène de la dystrophine', 'trait récessif lié à l\'X hérité'],
      sw: ['mabadiliko ya jeni katika jeni ya dystrophin', 'sifa ya X-linked recessive iliyorithi']
    },
    riskFactors: {
      en: ['family history of DMD', 'male gender', 'carrier females'],
      fr: ['antécédents familiaux de DMD', 'sexe masculin', 'femmes porteuses'],
      sw: ['historia ya familia ya DMD', 'kijinsia cha kiume', 'wanawake wasiobadilika']
    },
    treatment: {
      en: 'Glucocorticoids to slow muscle degeneration, gene therapy, cardiac monitoring, and respiratory support.',
      fr: 'Glucocorticoïdes pour ralentir la dégénérescence musculaire, thérapie génique, surveillance cardiaque.',
      sw: 'Glucocorticoids kuweka juu kusambaa kwa misuli, matibabu ya jeni, kuzima moyo, na kusaidia ukoffi.'
    },
    prevention: {
      en: 'Genetic counseling for families with DMD. No prevention for those with genetic mutation.',
      fr: 'Conseil génétique pour les familles atteintes de DMD.',
      sw: 'Shauri la jenetiki kwa familia zenye DMD.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for signs of muscle weakness, respiratory symptoms, or cardiac symptoms.',
      fr: 'Cherchez des soins médicaux pour des signes de faiblesse musculaire, des symptômes respiratoires.',
      sw: 'Tafuta huduma za kimatibabu kwa dalili ya dhaufu ya misuli, dalili ya respiratory, au dalili ya moyo.'
    },
    complications: {
      en: ['respiratory failure', 'cardiac complications', 'scoliosis', 'contractures', 'respiratory infections'],
      fr: ['insuffisance respiratoire', 'complications cardiaques', 'scoliose', 'contractures', 'infections respiratoires'],
      sw: ['kushindwa kwa ukoffi', 'shida ya moyo', 'kumba kwa muundo', 'contractures', 'ambukizo la respiratory']
    },
    diagnosis: {
      en: 'Elevated creatine kinase, muscle biopsy, genetic testing, or EMG.',
      fr: 'Créatine kinase élevée, biopsie musculaire, tests génétiques, ou EMG.',
      sw: ['creatine kinase ya juu, biopsy ya misuli, mtihani wa jenetiki, au EMG']
    },
    prognosis: {
      en: 'Progressive weakness with loss of ambulation by the teenage years. Life expectancy varies but improved with modern care.',
      fr: 'Faiblesse progressive avec perte de déambulation à l\'adolescence.',
      sw: 'Dhaufu inayoongezeka na kupoteza kutembea kwa ujana. Umri wa maisha unabadilika lakini umeboresha na huduma ya sasa.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'low',
    ageGroup: 'pediatric',
    gender: 'male'
  },
  {
    id: 'huntingtons-disease',
    name: {
      en: 'Huntington\'s Disease',
      fr: 'Maladie de Huntington',
      sw: 'Huntington\'s Disease'
    },
    category: 'genetic',
    severity: 'high',
    symptoms: {
      en: ['involuntary movements (chorea)', 'cognitive decline', 'emotional changes', 'memory loss', 'difficulty concentrating', 'depression', 'irritability', 'behavior changes'],
      fr: ['mouvements involontaires (chorée)', 'déclin cognitif', 'changements émotionnels', 'perte de mémoire'],
      sw: ['mwendo usio na hiari (chorea)', 'kupungua kwa akili', 'mabadiliko ya hisia', 'kupungua kwa kumbuka', 'shida ya kufikiri', 'kutaka kufa', 'kugombana', 'mabadiliko ya tabia']
    },
    commonSymptoms: {
      en: ['involuntary movements', 'cognitive changes', 'behavioral changes'],
      fr: ['mouvements involontaires', 'changements cognitifs', 'changements de comportement'],
      sw: ['mwendo usio na hiari', 'mabadiliko ya akili', 'mabadiliko ya tabia']
    },
    rareSymptoms: {
      en: ['severe dementia', 'complete disability', 'death'],
      fr: ['démence grave', 'invalidité complète', 'décès'],
      sw: ['kukamatia kali', 'kukamatia kwa kukamatiana', 'kifo']
    },
    causes: {
      en: ['genetic mutation in HTT gene', 'inherited autosomal dominant trait'],
      fr: ['mutation génétique dans le gène HTT', 'trait autosomique dominant hérité'],
      sw: ['mabadiliko ya jeni katika jeni ya HTT', 'sifa ya kurithi ya autosomal dominant']
    },
    riskFactors: {
      en: ['family history of Huntington\'s', 'age 30-50 at onset'],
      fr: ['antécédents familiaux de Huntington', 'âge 30-50 au début'],
      sw: ['historia ya familia ya Huntington', 'umri 30-50 mwanzo']
    },
    treatment: {
      en: 'Tetrabenazine or deutetrabenazine for chorea, antidepressants, antipsychotics, and cognitive therapy.',
      fr: 'Tétrabénazine ou deutétrabénazine pour la chorée, antidépresseurs, antipsychotiques.',
      sw: 'Tetrabenazine au deutetrabenazine kwa chorea, dawa za kutaka kufa, antipsychotics, na matibabu ya akili.'
    },
    prevention: {
      en: 'Genetic counseling and testing for at-risk families. No prevention for those with genetic mutation.',
      fr: 'Conseil génétique et tests pour les familles à risque.',
      sw: 'Shauri la jenetiki na mtihani kwa familia zenye hatari.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for mood changes, cognitive decline, involuntary movements, or behavioral changes.',
      fr: 'Cherchez des soins médicaux pour des changements d\'humeur, un déclin cognitif.',
      sw: 'Tafuta huduma za kimatibabu kwa mabadiliko ya hisia, kupungua kwa akili, mwendo usio na hiari, au mabadiliko ya tabia.'
    },
    complications: {
      en: ['severe dementia', 'disability', 'depression and suicide', 'motor complications', 'swallowing difficulties'],
      fr: ['démence grave', 'invalidité', 'dépression et suicide', 'complications motrices'],
      sw: ['kukamatia kali', 'kukamatia', 'kutaka kufa at kujua', 'shida ya motor', 'shida ya kumimina']
    },
    diagnosis: {
      en: 'Genetic testing for CAG repeat expansion, neuropsychological testing, or MRI.',
      fr: 'Tests génétiques pour l\'expansion de la répétition CAG, tests neuropsychologiques.',
      sw: ['mtihani wa jenetiki kwa CAG repeat expansion, mtihani wa akili, au MRI']
    },
    prognosis: {
      en: 'Progressive neurodegenerative disease with average life expectancy of 20 years after symptom onset.',
      fr: 'Maladie neurodégénérative progressive avec espérance de vie moyenne de 20 ans après l\'apparition des symptômes.',
      sw: 'Ugonjwa unaobadilika wa akili wenye umri wa kati wa miaka 20 baada ya dalili ya kwanza.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'low',
    ageGroup: 'adult',
    gender: 'all'
  },
  {
    id: 'ehlers-danlos-syndrome',
    name: {
      en: 'Ehlers-Danlos Syndrome',
      fr: 'Syndrome d\'Ehlers-Danlos',
      sw: 'Ehlers-Danlos Syndrome'
    },
    category: 'genetic',
    severity: 'high',
    symptoms: {
      en: ['skin fragility', 'easy bruising', 'joint hypermobility', 'wound healing problems', 'velvety skin', 'small papules', 'pain', 'fatigue'],
      fr: ['fragilité cutanée', 'ecchymose facile', 'hypermobilité articulaire', 'problèmes de cicatrisation', 'peau veloutée'],
      sw: ['ngesegese ya ngozi', 'kidonda rahisi', 'mifumo nyingi kwa mwendo mzuri', 'shida ya kufa kwa jeraha', 'ngozi ya ndoto', 'nodules ndogo', 'maumivu', 'uchovu']
    },
    commonSymptoms: {
      en: ['joint hypermobility', 'skin fragility', 'easy bruising'],
      fr: ['hypermobilité articulaire', 'fragilité cutanée', 'ecchymose facile'],
      sw: ['mifumo nyingi kwa mwendo mzuri', 'ngesegese ya ngozi', 'kidonda rahisi']
    },
    rareSymptoms: {
      en: ['vascular rupture', 'organ rupture', 'fatal hemorrhage'],
      fr: ['rupture vasculaire', 'rupture d\'organe', 'hémorragie mortelle'],
      sw: ['mtu unayohara', 'kiungo unayohara', 'kutokwa damu kukuumiza maisha']
    },
    causes: {
      en: ['genetic mutations in collagen genes', 'inherited autosomal dominant or recessive trait'],
      fr: ['mutations génétiques dans les gènes du collagène', 'trait autosomique dominant ou récessif hérité'],
      sw: ['mabadiliko ya jeni katika jeni ya collagen', 'sifa ya kurithi ya autosomal dominant au recessive']
    },
    riskFactors: {
      en: ['family history of EDS', 'joint hypermobility', 'skin fragility'],
      fr: ['antécédents familiaux d\'EDS', 'hypermobilité articulaire', 'fragilité cutanée'],
      sw: ['historia ya familia ya EDS', 'mifumo nyingi kwa mwendo mzuri', 'ngesegese ya ngozi']
    },
    treatment: {
      en: 'Supportive care, pain management, physical therapy, and cardiovascular monitoring for vascular forms.',
      fr: 'Soins de soutien, gestion de la douleur, thérapie physique, surveillance cardiovasculaire.',
      sw: 'Huduma ya kusaidia, kudhibiti maumivu, matibabu ya kimwili, na kuzima moyo kwa fomu za vascular.'
    },
    prevention: {
      en: 'Genetic counseling and avoid trauma. Avoid contact sports and heavy lifting.',
      fr: 'Conseil génétique et éviter les traumatismes. Éviter les sports de contact et les charges lourdes.',
      sw: 'Shauri la jenetiki na zidi maadhimisho. Zidi michezo ya kukamatiana na kulificha kwa uzani.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate care for unexplained bleeding, severe pain, signs of vascular rupture, or organ rupture.',
      fr: 'Cherchez des soins immédiats pour un saignement inexpliqué, une douleur grave, des signes de rupture vasculaire.',
      sw: 'Tafuta huduma za haraka kwa kutokwa damu bila sababu, maumivu makali, dalili ya mtu unayohara, au kiungo unayohara.'
    },
    complications: {
      en: ['vascular rupture', 'organ rupture', 'joint dislocation', 'chronic pain', 'hemorrhage'],
      fr: ['rupture vasculaire', 'rupture d\'organe', 'luxation articulaire', 'douleur chronique'],
      sw: ['mtu unayohara', 'kiungo unayohara', 'mifumo inayoleana', 'maumivu ya mahabadiliko', 'kutokwa damu']
    },
    diagnosis: {
      en: 'Clinical evaluation, skin biopsy, collagen analysis, or genetic testing.',
      fr: 'Évaluation clinique, biopsie cutanée, analyse du collagène, ou tests génétiques.',
      sw: 'Mtihani wa kliniki, biopsy ya ngozi, uchambuzi wa collagen, au mtihani wa jenetiki.'
    },
    prognosis: {
      en: 'Variable depending on type. Classical and hypermobile forms usually have normal life expectancy with management.',
      fr: 'Variable selon le type. Les formes classiques et hypermobiles ont généralement une espérance de vie normale.',
      sw: 'Inabadilika kulingana na aina. Fomu za classical at hypermobile kwa kawaida zina umri wa kawaida wa maisha.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'low',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'fragile-x-syndrome',
    name: {
      en: 'Fragile X Syndrome',
      fr: 'Syndrome de l\'X Fragile',
      sw: 'Fragile X Syndrome'
    },
    category: 'genetic',
    severity: 'medium',
    symptoms: {
      en: ['intellectual disability', 'developmental delay', 'behavioral problems', 'anxiety', 'attention deficit', 'autism spectrum traits', 'seizures', 'large ears', 'elongated face'],
      fr: ['déficience intellectuelle', 'retard de développement', 'problèmes de comportement', 'anxiété', 'déficit d\'attention'],
      sw: ['kukamatia kwa akili', 'chelewa kwa maendeleo', 'shida ya tabia', 'wasiwasi', 'ukosefu wa hezena', 'dalili za autism', 'mshtuko', 'masikio makubwa', 'uso mrefu']
    },
    commonSymptoms: {
      en: ['intellectual disability', 'developmental delay', 'behavioral problems'],
      fr: ['déficience intellectuelle', 'retard de développement', 'problèmes de comportement'],
      sw: ['kukamatia kwa akili', 'chelewa kwa maendeleo', 'shida ya tabia']
    },
    rareSymptoms: {
      en: ['severe intellectual disability', 'severe behavioral problems', 'complete dependency'],
      fr: ['déficience intellectuelle grave', 'problèmes de comportement graves', 'dépendance complète'],
      sw: ['kukamatia kwa akili kali', 'shida ya tabia kali', 'kutegemea kabisa']
    },
    causes: {
      en: ['genetic mutation in FMR1 gene', 'inherited X-linked dominant trait'],
      fr: ['mutation génétique dans le gène FMR1', 'trait dominant lié à l\'X hérité'],
      sw: ['mabadiliko ya jeni katika jeni ya FMR1', 'sifa ya X-linked dominant iliyorithi']
    },
    riskFactors: {
      en: ['family history of Fragile X', 'maternal age', 'premutation carriers'],
      fr: ['antécédents familiaux de Fragile X', 'âge maternel'],
      sw: ['historia ya familia ya Fragile X', 'umri wa mama', 'wasiobadilika wa premutation']
    },
    treatment: {
      en: 'Early intervention, special education, behavioral therapy, speech and language therapy, and medication for behavioral issues.',
      fr: 'Intervention précoce, éducation spécialisée, thérapie comportementale, orthophonie et logopédie.',
      sw: 'Kuingia haraka, elimu maalum, matibabu ya tabia, matibabu ya lugha, na dawa kwa shida ya tabia.'
    },
    prevention: {
      en: 'Genetic counseling and prenatal testing for at-risk families.',
      fr: 'Conseil génétique et tests prénatals pour les familles à risque.',
      sw: 'Shauri la jenetiki na mtihani wa kabla ya kuzaliwa kwa familia zenye hatari.'
    },
    whenToSeekHelp: {
      en: 'Seek evaluation if you notice developmental delays, behavioral concerns, or family history of intellectual disability.',
      fr: 'Cherchez une évaluation si vous remarquez des retards de développement ou des antécédents familiaux.',
      sw: 'Tafuta mtihani kama unakumbuka chelewa ya maendeleo, shida ya tabia, au historia ya familia ya kukamatia kwa akili.'
    },
    complications: {
      en: ['autism spectrum disorder', 'seizures', 'attention deficit hyperactivity disorder', 'anxiety disorders', 'social difficulties'],
      fr: ['trouble du spectre autistique', 'crises épileptiques', 'trouble du déficit de l\'attention avec hyperactivité'],
      sw: ['autism spectrum disorder', 'mshtuko', 'shida ya ukosefu wa hezena', 'shida ya wasiwasi', 'shida ya kijamii']
    },
    diagnosis: {
      en: 'FMR1 gene testing, intellectual assessment, or developmental screening.',
      fr: 'Test du gène FMR1, évaluation intellectuelle, ou dépistage du développement.',
      sw: 'Mtihani wa jeni ya FMR1, mtihani wa akili, au kupima maendeleo.'
    },
    prognosis: {
      en: 'Variable severity. Early intervention and support improve outcomes significantly.',
      fr: 'Gravité variable. L\'intervention précoce et le soutien améliorent considérablement les résultats.',
      sw: 'Kali inabadilika. Kuingia haraka na kusaidia kunaboresha matokeo sana.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'low',
    ageGroup: 'pediatric',
    gender: 'all'
  }
];
