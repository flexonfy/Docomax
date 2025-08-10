import { ComprehensiveDisease } from './types';

export const mentalDiseases: ComprehensiveDisease[] = [
  {
    id: 'depression',
    name: {
      en: 'Depression',
      fr: 'Dépression',
      sw: 'Unyogovu'
    },
    category: 'mental',
    severity: 'high',
    symptoms: {
      en: ['persistent sad mood', 'loss of interest or pleasure', 'changes in appetite or weight', 'sleep disturbances', 'fatigue', 'feelings of worthlessness or guilt', 'difficulty concentrating', 'thoughts of death or suicide'],
      fr: ['humeur triste persistante', 'perte d\'intérêt ou de plaisir', 'changements d\'appétit ou de poids', 'troubles du sommeil', 'fatigue', 'sentiments d\'inutilité ou de culpabilité', 'difficulté à se concentrer', 'pensées de mort ou de suicide'],
      sw: ['hali ya huzuni ya kudumu', 'kupoteza hamu au raha', 'mabadiliko ya hamu ya kula au uzito', 'matatizo ya usingizi', 'uchovu', 'hisia za kutokuwa na thamani au hatia', 'ugumu wa kuzingatia', 'mawazo ya kifo au kujiua']
    },
    commonSymptoms: {
      en: ['persistent sad mood', 'loss of interest or pleasure', 'fatigue', 'sleep disturbances'],
      fr: ['humeur triste persistante', 'perte d\'intérêt ou de plaisir', 'fatigue', 'troubles du sommeil'],
      sw: ['hali ya huzuni ya kudumu', 'kupoteza hamu au raha', 'uchovu', 'matatizo ya usingizi']
    },
    rareSymptoms: {
      en: ['psychosis (hallucinations, delusions)', 'physical aches and pains without clear cause', 'irritability', 'anger outbursts'],
      fr: ['psychose (hallucinations, délires)', 'douleurs physiques sans cause claire', 'irritabilité', 'accès de colère'],
      sw: ['saikolojia (maono, udanganyifu)', 'maumivu ya mwili bila sababu dhahiri', 'kuwashwa', 'milipuko ya hasira']
    },
    causes: {
      en: ['brain chemistry', 'genetics', 'stressful life events', 'chronic illness', 'hormonal changes'],
      fr: ['chimie du cerveau', 'génétique', 'événements de vie stressants', 'maladie chronique', 'changements hormonaux'],
      sw: ['kemia ya ubongo', 'maumbile', 'matukio ya maisha yenye msongo', 'ugonjwa sugu', 'mabadiliko ya homoni']
    },
    riskFactors: {
      en: ['family history', 'trauma or stress', 'chronic physical illness', 'substance abuse', 'major life changes', 'lack of social support'],
      fr: ['antécédents familiaux', 'traumatisme ou stress', 'maladie physique chronique', 'abus de substances', 'changements de vie majeurs', 'manque de soutien social'],
      sw: ['historia ya familia', 'kiwewe au msongo', 'ugonjwa sugu wa kimwili', 'matumizi mabaya ya dawa za kulevya', 'mabadiliko makubwa ya maisha', 'ukosefu wa msaada wa kijamii']
    },
    treatment: {
      en: 'Psychotherapy (counseling), antidepressant medications, lifestyle changes (exercise, diet), support groups.',
      fr: 'Psychothérapie (conseil), médicaments antidépresseurs, changements de mode de vie (exercice, alimentation), groupes de soutien.',
      sw: 'Tiba ya kisaikolojia (ushauri), dawa za kupunguza unyogovu, mabadiliko ya mtindo wa maisha (mazoezi, lishe), vikundi vya msaada.'
    },
    prevention: {
      en: 'Building resilience, stress management techniques, strong social support network, early treatment of symptoms.',
      fr: 'Renforcer la résilience, techniques de gestion du stress, réseau de soutien social solide, traitement précoce des symptômes.',
      sw: 'Kujenga ustahimilivu, mbinu za kudhibiti msongo, mtandao imara wa msaada wa kijamii, matibabu ya mapema ya dalili.'
    },
    whenToSeekHelp: {
      en: 'If you feel depressed, make an appointment to see a doctor or mental health professional. If you have thoughts of harming yourself, seek help immediately.',
      fr: 'Si vous vous sentez déprimé, prenez rendez-vous avec un médecin ou un professionnel de la santé mentale. Si vous avez des pensées suicidaires, cherchez de l\'aide immédiatement.',
      sw: 'Ikiwa unajisikia unyogovu, panga miadi na daktari au mtaalamu wa afya ya akili. Ikiwa una mawazo ya kujidhuru, tafuta msaada mara moja.'
    },
    complications: {
      en: ['suicide', 'substance abuse', 'social isolation', 'relationship problems', 'work or school problems', 'self-harm'],
      fr: ['suicide', 'abus de substances', 'isolement social', 'problèmes relationnels', 'problèmes professionnels ou scolaires', 'automutilation'],
      sw: ['kujiua', 'matumizi mabaya ya dawa za kulevya', 'kujitenga na jamii', 'matatizo ya uhusiano', 'matatizo ya kazini au shuleni', 'kujidhuru']
    },
    diagnosis: {
      en: 'Clinical evaluation by a mental health professional, using criteria from the DSM-5.',
      fr: 'Évaluation clinique par un professionnel de la santé mentale, en utilisant les critères du DSM-5.',
      sw: 'Tathmini ya kliniki na mtaalamu wa afya ya akili, kwa kutumia vigezo kutoka DSM-5.'
    },
    prognosis: {
      en: 'Highly treatable. Most people see improvements with medication, psychotherapy, or both.',
      fr: 'Très traitable. La plupart des gens voient des améliorations avec des médicaments, une psychothérapie, ou les deux.',
      sw: 'Inatibika sana. Watu wengi huona nafuu kwa dawa, tiba ya kisaikolojia, au zote mbili.'
    },
    source: 'nhs',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'anxiety-disorder',
    name: {
      en: 'Anxiety Disorder',
      fr: 'Trouble Anxieux',
      sw: 'Ugonjwa wa Wasiwasi'
    },
    category: 'mental',
    severity: 'medium',
    symptoms: {
      en: ['excessive worry', 'restlessness', 'fatigue', 'difficulty concentrating', 'irritability', 'muscle tension', 'sleep problems', 'panic attacks'],
      fr: ['inquiétude excessive', 'agitation', 'fatigue', 'difficulté à se concentrer', 'irritabilité', 'tension musculaire', 'problèmes de sommeil', 'attaques de panique'],
      sw: ['wasiwasi kupita kiasi', 'kutotulia', 'uchovu', 'ugumu wa kuzingatia', 'kuwashwa', 'mvutano wa misuli', 'matatizo ya usingizi', 'mashambulizi ya hofu']
    },
    commonSymptoms: {
      en: ['excessive worry', 'restlessness', 'difficulty concentrating', 'irritability'],
      fr: ['inquiétude excessive', 'agitation', 'difficulté à se concentrer', 'irritabilité'],
      sw: ['wasiwasi kupita kiasi', 'kutotulia', 'ugumu wa kuzingatia', 'kuwashwa']
    },
    rareSymptoms: {
      en: ['derealization', 'depersonalization', 'fear of losing control'],
      fr: ['déréalisation', 'dépersonnalisation', 'peur de perdre le contrôle'],
      sw: ['kuhisi mazingira si halisi', 'kujihisi si halisi', 'hofu ya kupoteza udhibiti']
    },
    causes: {
      en: ['genetics', 'brain chemistry', 'stressful life events', 'medical conditions'],
      fr: ['génétique', 'chimie du cerveau', 'événements de vie stressants', 'conditions médicales'],
      sw: ['maumbile', 'kemia ya ubongo', 'matukio ya maisha yenye msongo', 'hali za kiafya']
    },
    riskFactors: {
      en: ['trauma', 'stress buildup', 'personality type', 'other mental health disorders', 'family history'],
      fr: ['traumatisme', 'accumulation de stress', 'type de personnalité', 'autres troubles de santé mentale', 'antécédents familiaux'],
      sw: ['kiwewe', 'mkusanyiko wa msongo', 'aina ya utu', 'magonjwa mengine ya akili', 'historia ya familia']
    },
    treatment: {
      en: 'Psychotherapy (CBT), medications (antidepressants, anti-anxiety drugs), stress management techniques.',
      fr: 'Psychothérapie (TCC), médicaments (antidépresseurs, anxiolytiques), techniques de gestion du stress.',
      sw: 'Tiba ya kisaikolojia (CBT), dawa (dawa za unyogovu, dawa za wasiwasi), mbinu za kudhibiti msongo.'
    },
    prevention: {
      en: 'Early intervention, stress management, avoiding caffeine and alcohol, regular exercise.',
      fr: 'Intervention précoce, gestion du stress, éviter la caféine et l\'alcool, exercice régulier.',
      sw: 'Kuingilia mapema, kudhibiti msongo, kuepuka kafeini na pombe, mazoezi ya mara kwa mara.'
    },
    whenToSeekHelp: {
      en: 'See a doctor if worry interferes with daily life, is distressing, or difficult to control.',
      fr: 'Consultez un médecin si l\'inquiétude interfère avec la vie quotidienne, est angoissante ou difficile à contrôler.',
      sw: 'Muone daktari ikiwa wasiwasi unaingilia maisha ya kila siku, unasumbua, au ni vigumu kudhibiti.'
    },
    complications: {
      en: ['depression', 'substance abuse', 'insomnia', 'social isolation', 'impaired quality of life'],
      fr: ['dépression', 'abus de substances', 'insomnie', 'isolement social', 'qualité de vie altérée'],
      sw: ['unyogovu', 'matumizi mabaya ya dawa za kulevya', 'kukosa usingizi', 'kujitenga na jamii', 'ubora duni wa maisha']
    },
    diagnosis: {
      en: 'Clinical evaluation by a mental health professional.',
      fr: 'Évaluation clinique par un professionnel de la santé mentale.',
      sw: 'Tathmini ya kliniki na mtaalamu wa afya ya akili.'
    },
    prognosis: {
      en: 'Good with treatment. Many people can manage their symptoms effectively.',
      fr: 'Bon avec traitement. De nombreuses personnes peuvent gérer efficacement leurs symptômes.',
      sw: 'Nzuri na matibabu. Watu wengi wanaweza kudhibiti dalili zao kwa ufanisi.'
    },
    source: 'nhs',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'bipolar-disorder',
    name: {
      en: 'Bipolar Disorder',
      fr: 'Trouble Bipolaire',
      sw: 'Ugonjwa wa Bipolar'
    },
    category: 'mental',
    severity: 'high',
    symptoms: {
      en: ['manic episodes (high energy, euphoria, racing thoughts)', 'depressive episodes (low energy, sadness, hopelessness)', 'mood swings', 'changes in sleep and activity levels', 'impulsive behavior'],
      fr: ['épisodes maniaques (haute énergie, euphorie, pensées rapides)', 'épisodes dépressifs (basse énergie, tristesse, désespoir)', 'sautes d\'humeur', 'changements dans le sommeil et les niveaux d\'activité', 'comportement impulsif'],
      sw: ['vipindi vya mania (nguvu nyingi, furaha tele, mawazo ya haraka)', 'vipindi vya unyogovu (nguvu kidogo, huzuni, kukata tamaa)', 'mabadiliko ya hisia', 'mabadiliko katika usingizi na viwango vya shughuli', 'tabia ya msukumo']
    },
    commonSymptoms: {
      en: ['mood swings', 'manic episodes', 'depressive episodes'],
      fr: ['sautes d\'humeur', 'épisodes maniaques', 'épisodes dépressifs'],
      sw: ['mabadiliko ya hisia', 'vipindi vya mania', 'vipindi vya unyogovu']
    },
    rareSymptoms: {
      en: ['psychosis during severe episodes', 'mixed episodes (mania and depression at same time)'],
      fr: ['psychose pendant les épisodes sévères', 'épisodes mixtes (manie et dépression en même temps)'],
      sw: ['saikolojia wakati wa vipindi vikali', 'vipindi mchanganyiko (mania na unyogovu kwa wakati mmoja)']
    },
    causes: {
      en: ['genetics', 'brain structure and chemistry', 'stressful life events can trigger episodes'],
      fr: ['génétique', 'structure et chimie du cerveau', 'les événements de vie stressants peuvent déclencher des épisodes'],
      sw: ['maumbile', 'muundo na kemia ya ubongo', 'matukio ya maisha yenye msongo yanaweza kusababisha vipindi']
    },
    riskFactors: {
      en: ['family history', 'periods of high stress', 'drug or alcohol abuse', 'major life changes'],
      fr: ['antécédents familiaux', 'périodes de grand stress', 'abus de drogues ou d\'alcool', 'changements de vie majeurs'],
      sw: ['historia ya familia', 'vipindi vya msongo mwingi', 'matumizi mabaya ya dawa za kulevya au pombe', 'mabadiliko makubwa ya maisha']
    },
    treatment: {
      en: 'Lifelong treatment with mood stabilizers, antipsychotics, antidepressants, psychotherapy (counseling), and education.',
      fr: 'Traitement à vie avec des stabilisateurs de l\'humeur, des antipsychotiques, des antidépresseurs, une psychothérapie (conseil) et une éducation.',
      sw: 'Matibabu ya maisha yote na vidhibiti hisia, antipsychotics, antidepressants, tiba ya kisaikolojia (ushauri), na elimu.'
    },
    prevention: {
      en: 'No known way to prevent. Early treatment can help prevent episodes from worsening.',
      fr: 'Aucun moyen connu de prévenir. Un traitement précoce peut aider à empêcher l\'aggravation des épisodes.',
      sw: 'Hakuna njia inayojulikana ya kuzuia. Matibabu ya mapema yanaweza kusaidia kuzuia vipindi kuwa vibaya zaidi.'
    },
    whenToSeekHelp: {
      en: 'Seek help if you experience extreme mood swings that interfere with your life. Seek immediate help for suicidal thoughts.',
      fr: 'Consultez si vous ressentez des sautes d\'humeur extrêmes qui interfèrent avec votre vie. Cherchez de l\'aide immédiate pour des pensées suicidaires.',
      sw: 'Tafuta msaada ikiwa unapata mabadiliko makubwa ya hisia yanayoingilia maisha yako. Tafuta msaada wa haraka kwa mawazo ya kujiua.'
    },
    complications: {
      en: ['suicide attempts', 'substance abuse', 'financial or legal problems', 'damaged relationships'],
      fr: ['tentatives de suicide', 'abus de substances', 'problèmes financiers ou juridiques', 'relations endommagées'],
      sw: ['majaribio ya kujiua', 'matumizi mabaya ya dawa za kulevya', 'matatizo ya kifedha au kisheria', 'uhusiano ulioharibika']
    },
    diagnosis: {
      en: 'Clinical evaluation by a mental health professional, mood charting, ruling out other conditions.',
      fr: 'Évaluation clinique par un professionnel de la santé mentale, suivi de l\'humeur, exclusion d\'autres conditions.',
      sw: 'Tathmini ya kliniki na mtaalamu wa afya ya akili, ufuatiliaji wa hisia, kuondoa hali zingine.'
    },
    prognosis: {
      en: 'A lifelong condition that requires ongoing management, but people can lead full and productive lives.',
      fr: 'Une condition à vie qui nécessite une gestion continue, mais les gens peuvent mener une vie pleine et productive.',
      sw: 'Hali ya maisha yote inayohitaji usimamizi unaoendelea, lakini watu wanaweza kuishi maisha kamili na yenye tija.'
    },
    source: 'nhs',
    prevalenceInAfrica: 'medium',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'schizophrenia',
    name: {
      en: 'Schizophrenia',
      fr: 'Schizophrénie',
      sw: 'Schizophrenia'
    },
    category: 'mental',
    severity: 'high',
    symptoms: {
      en: ['hallucinations (seeing or hearing things that aren\'t there)', 'delusions (false beliefs)', 'disorganized thinking and speech', 'abnormal motor behavior', 'negative symptoms (lack of emotion, social withdrawal)'],
      fr: ['hallucinations (voir ou entendre des choses qui n\'existent pas)', 'délires (fausses croyances)', 'pensée et discours désorganisés', 'comportement moteur anormal', 'symptômes négatifs (manque d\'émotion, retrait social)'],
      sw: ['maono (kuona au kusikia vitu visivyokuwepo)', 'udanganyifu (imani za uwongo)', 'mawazo na usemi uliovurugika', 'tabia isiyo ya kawaida ya mwendo', 'dalili hasi (ukosefu wa hisia, kujitenga na jamii)']
    },
    commonSymptoms: {
      en: ['hallucinations', 'delusions', 'disorganized speech', 'social withdrawal'],
      fr: ['hallucinations', 'délires', 'discours désorganisé', 'retrait social'],
      sw: ['maono', 'udanganyifu', 'usemi uliovurugika', 'kujitenga na jamii']
    },
    rareSymptoms: {
      en: ['catatonia (unresponsiveness)', 'cognitive deficits'],
      fr: ['catatonie (absence de réactivité)', 'déficits cognitifs'],
      sw: ['catatonia (kutojibu)', 'upungufu wa utambuzi']
    },
    causes: {
      en: ['combination of genetics, brain chemistry (dopamine, glutamate), and environmental factors'],
      fr: ['combinaison de génétique, de chimie du cerveau (dopamine, glutamate) et de facteurs environnementaux'],
      sw: ['mchanganyiko wa maumbile, kemia ya ubongo (dopamine, glutamate), na mambo ya kimazingira']
    },
    riskFactors: {
      en: ['family history', 'pregnancy and birth complications', 'mind-altering drug use during teen years'],
      fr: ['antécédents familiaux', 'complications de la grossesse et de la naissance', 'consommation de drogues psychotropes à l\'adolescence'],
      sw: ['historia ya familia', 'matatizo ya ujauzito na kuzaliwa', 'matumizi ya dawa za kulevya wakati wa ujana']
    },
    treatment: {
      en: 'Lifelong treatment with antipsychotic medications, psychotherapy, and social support services.',
      fr: 'Traitement à vie avec des médicaments antipsychotiques, une psychothérapie et des services de soutien social.',
      sw: 'Matibabu ya maisha yote na dawa za antipsychotic, tiba ya kisaikolojia, na huduma za msaada wa kijamii.'
    },
    prevention: {
      en: 'No sure way to prevent. Early identification and treatment can improve long-term outcomes.',
      fr: 'Aucun moyen sûr de prévenir. L\'identification et le traitement précoces peuvent améliorer les résultats à long terme.',
      sw: 'Hakuna njia ya uhakika ya kuzuia. Utambuzi na matibabu ya mapema yanaweza kuboresha matokeo ya muda mrefu.'
    },
    whenToSeekHelp: {
      en: 'Seek help immediately if someone is showing signs of psychosis, is unable to care for themselves, or is a danger to themselves or others.',
      fr: 'Cherchez de l\'aide immédiatement si quelqu\'un montre des signes de psychose, est incapable de prendre soin de lui-même, ou est un danger pour lui-même ou pour les autres.',
      sw: 'Tafuta msaada mara moja ikiwa mtu anaonyesha dalili za saikolojia, hawezi kujitunza, au ni hatari kwake mwenyewe au kwa wengine.'
    },
    complications: {
      en: ['suicide', 'anxiety disorders', 'depression', 'substance abuse', 'inability to work or attend school', 'social isolation'],
      fr: ['suicide', 'troubles anxieux', 'dépression', 'abus de substances', 'incapacité de travailler ou d\'aller à l\'école', 'isolement social'],
      sw: ['kujiua', 'magonjwa ya wasiwasi', 'unyogovu', 'matumizi mabaya ya dawa za kulevya', 'kutoweza kufanya kazi au kwenda shule', 'kujitenga na jamii']
    },
    diagnosis: {
      en: 'Clinical evaluation by a psychiatrist, ruling out other mental health disorders and substance use.',
      fr: 'Évaluation clinique par un psychiatre, exclusion d\'autres troubles de santé mentale et de la consommation de substances.',
      sw: 'Tathmini ya kliniki na daktari wa akili, kuondoa magonjwa mengine ya akili na matumizi ya dawa za kulevya.'
    },
    prognosis: {
      en: 'A serious, lifelong illness that requires ongoing treatment. With treatment, many can manage their symptoms.',
      fr: 'Une maladie grave et à vie qui nécessite un traitement continu. Avec un traitement, beaucoup peuvent gérer leurs symptômes.',
      sw: 'Ugonjwa mbaya, wa maisha yote unaohitaji matibabu endelevu. Kwa matibabu, wengi wanaweza kudhibiti dalili zao.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'medium',
    ageGroup: 'adult',
    gender: 'all'
  }
];
