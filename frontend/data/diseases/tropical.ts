import { ComprehensiveDisease } from './types';

export const tropicalDiseases: ComprehensiveDisease[] = [
  {
    id: 'dengue',
    name: {
      en: 'Dengue Fever',
      fr: 'Fièvre Dengue',
      sw: 'Homa ya Dengue'
    },
    category: 'infectious',
    severity: 'high',
    symptoms: {
      en: ['fever', 'headache', 'muscle pain', 'joint pain', 'rash', 'nausea', 'vomiting', 'bleeding', 'bruising'],
      fr: ['fièvre', 'mal de tête', 'douleur musculaire', 'douleur articulaire', 'éruption', 'nausée', 'vomissement', 'saignement', 'ecchymose'],
      sw: ['homa', 'maumivu ya kichwa', 'maumivu ya misuli', 'maumivu ya mifumo', 'upele', 'kichefuchefu', 'kutapika', 'kutokwa damu', 'kidonda']
    },
    commonSymptoms: {
      en: ['fever', 'headache', 'muscle pain', 'joint pain', 'rash'],
      fr: ['fièvre', 'mal de tête', 'douleur musculaire', 'douleur articulaire', 'éruption'],
      sw: ['homa', 'maumivu ya kichwa', 'maumivu ya misuli', 'maumivu ya mifumo', 'upele']
    },
    rareSymptoms: {
      en: ['severe bleeding', 'organ failure', 'shock', 'hemorrhage'],
      fr: ['saignement grave', 'insuffisance d\'organe', 'choc', 'hémorragie'],
      sw: ['kutokwa damu kali', 'kushindwa kwa kiungo', 'mshtuko', 'kutoka damu']
    },
    causes: {
      en: ['dengue virus', 'aedes mosquito bites', 'infected blood'],
      fr: ['virus dengue', 'piqûres de moustiques aedes', 'sang infecté'],
      sw: ['virusi ya dengue', 'kumbuliwa na mbu wa aedes', 'damu iliyoambukizwa']
    },
    riskFactors: {
      en: ['living in tropical areas', 'poor sanitation', 'previous dengue infection', 'age over 65'],
      fr: ['vivre dans les zones tropicales', 'assainissement insuffisant', 'infection dengue antérieure', 'âge supérieur à 65 ans'],
      sw: ['kuishi katika maeneo ya tropiki', 'usafi duni', 'ambukizo la dengue hapo awali', 'umri zaidi ya miaka 65']
    },
    treatment: {
      en: 'Supportive care with rest, hydration, and fever management. No specific antiviral treatment available.',
      fr: 'Soins de soutien avec repos, hydratation et gestion de la fièvre. Aucun traitement antiviral spécifique disponible.',
      sw: 'Huduma ya kusaidia na kupumzika, kunywa maji, na kudhibiti homa. Hakuna matibabu ya antiviral maalum.'
    },
    prevention: {
      en: 'Use insect repellent, wear protective clothing, and eliminate standing water to prevent mosquito breeding.',
      fr: 'Utilisez un répulsif anti-insectes, portez des vêtements de protection et éliminez l\'eau stagnante.',
      sw: 'Tumia kuzuia wadudu, vaa nguo za kinga, na ondoa maji yenye matatizo.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate care if experiencing severe bleeding, abdominal pain, persistent vomiting, lethargy, or warning signs of dengue hemorrhagic fever.',
      fr: 'Cherchez des soins immédiats si vous présentez des saignements graves, douleurs abdominales, vomissements persistants.',
      sw: 'Tafuta msaada haraka kama una kutokwa damu kali, maumivu ya tumboni, kutapika kila wakati.'
    },
    complications: {
      en: ['dengue hemorrhagic fever', 'dengue shock syndrome', 'organ failure', 'death'],
      fr: ['fièvre hémorragique dengue', 'syndrome de choc dengue', 'insuffisance d\'organe', 'décès'],
      sw: ['homa ya kutokwa damu ya dengue', 'homa ya mshtuko ya dengue', 'kushindwa kwa kiungo', 'kifo']
    },
    diagnosis: {
      en: 'PCR test, IgM antibody test, or NS1 antigen test.',
      fr: 'Test PCR, test d\'anticorps IgM ou test d\'antigène NS1.',
      sw: 'Mtihani wa PCR, mtihani wa IgM au mtihani wa NS1.'
    },
    prognosis: {
      en: 'Most patients recover within one to two weeks with supportive care. Mortality rate is less than 1% with proper treatment.',
      fr: 'La plupart des patients se rétablissent en une à deux semaines. Taux de mortalité inférieur à 1% avec traitement approprié.',
      sw: 'Wagonjwa wengi hupona ndani ya wiki moja au mbili. Kiwango cha kifo ni chini ya 1% na matibabu sahihi.'
    },
    source: 'who',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'yellow-fever',
    name: {
      en: 'Yellow Fever',
      fr: 'Fièvre Jaune',
      sw: 'Homa ya Manjano'
    },
    category: 'infectious',
    severity: 'high',
    symptoms: {
      en: ['fever', 'headache', 'muscle pain', 'jaundice', 'nausea', 'vomiting', 'abdominal pain', 'hemorrhage'],
      fr: ['fièvre', 'mal de tête', 'douleur musculaire', 'jaunisse', 'nausée', 'vomissement', 'douleur abdominale', 'hémorragie'],
      sw: ['homa', 'maumivu ya kichwa', 'maumivu ya misuli', 'ukungu', 'kichefuchefu', 'kutapika', 'maumivu ya tumbo', 'kutokwa damu']
    },
    commonSymptoms: {
      en: ['fever', 'headache', 'muscle pain', 'jaundice'],
      fr: ['fièvre', 'mal de tête', 'douleur musculaire', 'jaunisse'],
      sw: ['homa', 'maumivu ya kichwa', 'maumivu ya misuli', 'ukungu']
    },
    rareSymptoms: {
      en: ['liver failure', 'kidney failure', 'bleeding', 'coma', 'death'],
      fr: ['insuffisance hépatique', 'insuffisance rénale', 'saignement', 'coma', 'décès'],
      sw: ['kushindwa kwa ini', 'kushindwa kwa figo', 'kutokwa damu', 'tunifu', 'kifo']
    },
    causes: {
      en: ['yellow fever virus', 'aedes mosquito bites', 'jungle transmission'],
      fr: ['virus de la fièvre jaune', 'piqûres de moustiques aedes', 'transmission en jungle'],
      sw: ['virusi ya homa ya manjano', 'kumbuliwa na mbu wa aedes', 'kuambukizwa huria']
    },
    riskFactors: {
      en: ['travel to endemic areas', 'unvaccinated status', 'occupational exposure', 'poor sanitation'],
      fr: ['voyage dans les zones endémiques', 'statut non vacciné', 'exposition professionnelle', 'assainissement insuffisant'],
      sw: ['kusafiri kwenda maeneo ya ugonjwa', 'kuwa hauna chanjo', 'kupatikana kazi', 'usafi duni']
    },
    treatment: {
      en: 'Supportive care with rest, fluids, and pain management. There is no specific antiviral treatment.',
      fr: 'Soins de soutien avec repos, liquides et gestion de la douleur.',
      sw: 'Huduma ya kusaidia na kupumzika, kunywa maji, na kudhibiti maumivu.'
    },
    prevention: {
      en: 'Yellow fever vaccination is the most effective prevention. Use insect repellent and protective clothing.',
      fr: 'La vaccination contre la fièvre jaune est la prévention la plus efficace.',
      sw: 'Chanjo ya homa ya manjano ni kinga bora zaidi.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate medical care for fever above 38.5°C, jaundice, persistent vomiting, or bleeding.',
      fr: 'Cherchez des soins médicaux immédiats pour une fièvre supérieure à 38,5°C, une jaunisse.',
      sw: 'Tafuta huduma za haraka kwa homa zaidi ya 38.5°C, ukungu, au kutokwa damu.'
    },
    complications: {
      en: ['hepatitis', 'liver failure', 'kidney failure', 'hemorrhage', 'death'],
      fr: ['hépatite', 'insuffisance hépatique', 'insuffisance rénale', 'hémorragie', 'décès'],
      sw: ['hepatitis', 'kushindwa kwa ini', 'kushindwa kwa figo', 'kutokwa damu', 'kifo']
    },
    diagnosis: {
      en: 'PCR test, serology (IgM), or cell culture.',
      fr: 'Test PCR, sérologie ou culture cellulaire.',
      sw: 'Mtihani wa PCR au mtihani wa serologia.'
    },
    prognosis: {
      en: 'Mortality rate varies from 15-50% in severe cases. Those who recover typically develop lifelong immunity.',
      fr: 'Taux de mortalité de 15-50% dans les cas graves. Les survivants développent généralement une immunité à vie.',
      sw: 'Kiwango cha kifo ni 15-50% katika visa kali. Wenye hupona hutengeneza kinga ya maisha yote.'
    },
    source: 'who',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'zika-virus',
    name: {
      en: 'Zika Virus',
      fr: 'Virus Zika',
      sw: 'Virusi ya Zika'
    },
    category: 'infectious',
    severity: 'medium',
    symptoms: {
      en: ['fever', 'rash', 'joint pain', 'muscle pain', 'headache', 'eye pain', 'vomiting'],
      fr: ['fièvre', 'éruption', 'douleur articulaire', 'douleur musculaire', 'mal de tête', 'douleur oculaire', 'vomissement'],
      sw: ['homa', 'upele', 'maumivu ya mifumo', 'maumivu ya misuli', 'maumivu ya kichwa', 'maumivu ya macho', 'kutapika']
    },
    commonSymptoms: {
      en: ['fever', 'rash', 'joint pain', 'muscle pain'],
      fr: ['fièvre', 'éruption', 'douleur articulaire', 'douleur musculaire'],
      sw: ['homa', 'upele', 'maumivu ya mifumo', 'maumivu ya misuli']
    },
    rareSymptoms: {
      en: ['neurological complications', 'birth defects', 'guillain-barré syndrome'],
      fr: ['complications neurologiques', 'malformations congénitales', 'syndrome de Guillain-Barré'],
      sw: ['shida za akili', 'kasoro za kuzaliwa', 'homa ya Guillain-Barré']
    },
    causes: {
      en: ['zika virus', 'aedes mosquito bites', 'sexual transmission', 'maternal transmission'],
      fr: ['virus zika', 'piqûres de moustiques aedes', 'transmission sexuelle', 'transmission maternelle'],
      sw: ['virusi ya zika', 'kumbuliwa na mbu wa aedes', 'kuambukizwa kwa njia ya jinsia', 'kuambukizwa na mama']
    },
    riskFactors: {
      en: ['pregnancy', 'travel to endemic areas', 'sexual contact with infected person', 'weak immune system'],
      fr: ['grossesse', 'voyage dans les zones endémiques', 'contact sexuel avec une personne infectée'],
      sw: ['ujauzito', 'kusafiri kwenda maeneo ya ugonjwa', 'kuambukizwa na mtu aliyeambukizwa']
    },
    treatment: {
      en: 'Supportive care with rest, fluids, and fever management. No specific antiviral treatment is available.',
      fr: 'Soins de soutien avec repos, liquides et gestion de la fièvre.',
      sw: 'Huduma ya kusaidia na kupumzika, kunywa maji, na kudhibiti homa.'
    },
    prevention: {
      en: 'Use insect repellent, wear protective clothing, practice safe sex, and avoid pregnancy if at risk.',
      fr: 'Utilisez un répulsif anti-insectes, portez des vêtements de protection.',
      sw: 'Tumia kuzuia wadudu, vaa nguo za kinga, na zidi usalama.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care if you are pregnant and develop symptoms, or if you experience severe neurological symptoms.',
      fr: 'Cherchez des soins médicaux si vous êtes enceinte et développez des symptômes.',
      sw: 'Tafuta huduma za kimatibabu kama uko na ujauzito na una dalili.'
    },
    complications: {
      en: ['congenital zika syndrome', 'microcephaly', 'guillain-barré syndrome', 'neurological complications'],
      fr: ['syndrome de zika congénital', 'microcéphalie', 'syndrome de Guillain-Barré'],
      sw: ['homa ya zika ya kuzaliwa', 'kichwa kidogo', 'homa ya Guillain-Barré']
    },
    diagnosis: {
      en: 'PCR test, serology, or antigen detection.',
      fr: 'Test PCR, sérologie ou détection d\'antigène.',
      sw: 'Mtihani wa PCR au mtihani wa serology.'
    },
    prognosis: {
      en: 'Most people recover completely within a week. However, birth defects can occur if infected during pregnancy.',
      fr: 'La plupart des gens se rétablissent complètement dans une semaine.',
      sw: 'Watu wengi hupona kabisa ndani ya juma moja.'
    },
    source: 'who',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'chikungunya',
    name: {
      en: 'Chikungunya',
      fr: 'Chikungunya',
      sw: 'Chikungunya'
    },
    category: 'infectious',
    severity: 'medium',
    symptoms: {
      en: ['fever', 'severe joint pain', 'muscle pain', 'headache', 'rash', 'nausea'],
      fr: ['fièvre', 'douleur articulaire grave', 'douleur musculaire', 'mal de tête', 'éruption', 'nausée'],
      sw: ['homa', 'maumivu makali ya mifumo', 'maumivu ya misuli', 'maumivu ya kichwa', 'upele', 'kichefuchefu']
    },
    commonSymptoms: {
      en: ['fever', 'joint pain', 'muscle pain', 'headache'],
      fr: ['fièvre', 'douleur articulaire', 'douleur musculaire', 'mal de tête'],
      sw: ['homa', 'maumivu ya mifumo', 'maumivu ya misuli', 'maumivu ya kichwa']
    },
    rareSymptoms: {
      en: ['severe joint pain lasting months', 'hemorrhage', 'neurological complications', 'death'],
      fr: ['douleur articulaire grave persistant des mois', 'hémorragie', 'complications neurologiques'],
      sw: ['maumivu makali ya mifumo kwa miezi', 'kutokwa damu', 'shida za akili']
    },
    causes: {
      en: ['chikungunya virus', 'aedes mosquito bites'],
      fr: ['virus chikungunya', 'piqûres de moustiques aedes'],
      sw: ['virusi ya chikungunya', 'kumbuliwa na mbu wa aedes']
    },
    riskFactors: {
      en: ['travel to endemic areas', 'outdoor activities', 'age over 65', 'chronic disease'],
      fr: ['voyage dans les zones endémiques', 'activités en plein air', 'âge supérieur à 65 ans'],
      sw: ['kusafiri kwenda maeneo ya ugonjwa', 'shughuli za nje', 'umri zaidi ya miaka 65']
    },
    treatment: {
      en: 'Supportive care with rest, fluids, and pain management using acetaminophen or ibuprofen.',
      fr: 'Soins de soutien avec repos, liquides et gestion de la douleur.',
      sw: 'Huduma ya kusaidia na kupumzika, kunywa maji, na kudhibiti maumivu.'
    },
    prevention: {
      en: 'Use insect repellent, wear protective clothing, and eliminate standing water.',
      fr: 'Utilisez un répulsif anti-insectes et portez des vêtements de protection.',
      sw: 'Tumia kuzuia wadudu na vaa nguo za kinga.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care if fever lasts more than a week, severe joint pain persists, or other concerning symptoms develop.',
      fr: 'Cherchez des soins médicaux si la fièvre dure plus d\'une semaine.',
      sw: 'Tafuta huduma za kimatibabu kama homa inarudi kwa jumla nyingi.'
    },
    complications: {
      en: ['chronic joint pain', 'severe arthralgia', 'neurological complications', 'hemorrhage'],
      fr: ['douleur articulaire chronique', 'arthralgie grave', 'complications neurologiques'],
      sw: ['maumivu ya mifumo ya mahabadiliko', 'arthralgia kali', 'shida za akili']
    },
    diagnosis: {
      en: 'PCR test, serology (IgM and IgG), or viral culture.',
      fr: 'Test PCR, sérologie ou culture virale.',
      sw: 'Mtihani wa PCR au mtihani wa serology.'
    },
    prognosis: {
      en: 'Most people recover within 1-2 weeks, but joint pain can persist for months or years.',
      fr: 'La plupart des gens se rétablissent en 1-2 semaines, mais la douleur articulaire peut persister.',
      sw: 'Watu wengi hupona ndani ya wiki 1-2, lakini maumivu ya mifumo yanaweza kuendelea kwa miezi.'
    },
    source: 'who',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'sleeping-sickness',
    name: {
      en: 'African Sleeping Sickness',
      fr: 'Maladie du Sommeil',
      sw: 'Ugonjwa wa Utumiaji'
    },
    category: 'infectious',
    severity: 'high',
    symptoms: {
      en: ['fever', 'headache', 'joint pain', 'muscle pain', 'swollen lymph nodes', 'rash', 'sleep disturbance', 'neurological symptoms'],
      fr: ['fièvre', 'mal de tête', 'douleur articulaire', 'douleur musculaire', 'ganglions lymphatiques enflés', 'éruption'],
      sw: ['homa', 'maumivu ya kichwa', 'maumivu ya mifumo', 'maumivu ya misuli', 'nodi za limfu zilizoimba', 'upele', 'shida za utumiaji', 'shida za akili']
    },
    commonSymptoms: {
      en: ['fever', 'headache', 'joint pain', 'muscle pain'],
      fr: ['fièvre', 'mal de tête', 'douleur articulaire', 'douleur musculaire'],
      sw: ['homa', 'maumivu ya kichwa', 'maumivu ya mifumo', 'maumivu ya misuli']
    },
    rareSymptoms: {
      en: ['progressive neurological decline', 'coma', 'death'],
      fr: ['déclin neurologique progressif', 'coma', 'décès'],
      sw: ['kupungua kwa akili', 'tunifu', 'kifo']
    },
    causes: {
      en: ['trypanosoma parasite', 'tsetse fly bites', 'contaminated blood transfusion'],
      fr: ['parasite trypanosoma', 'piqûres de mouches tsé-tsé', 'transfusion sanguine contaminée'],
      sw: ['parasite trypanosoma', 'kumbuliwa na mbu wa tsetse', 'damu iliyoambukizwa']
    },
    riskFactors: {
      en: ['exposure to tsetse flies', 'rural residence', 'occupational exposure', 'poor sanitation'],
      fr: ['exposition aux mouches tsé-tsé', 'résidence rurale', 'exposition professionnelle'],
      sw: ['kupatikana na mbu wa tsetse', 'kuishi kwa vijijini', 'kupatikana kazi']
    },
    treatment: {
      en: 'Antiparasitic drugs like pentamidine or melarsoprol for early stages. Arsenic-based drugs for late-stage disease.',
      fr: 'Médicaments antiparasitaires pour les stades précoces. Médicaments à base d\'arsenic pour la maladie au stade tardif.',
      sw: 'Dawa za kupigania parasite kwa hatua za mapema. Dawa zinazobasamu arsenic kwa ugonjwa wa hatua ya karibuni.'
    },
    prevention: {
      en: 'Use insect repellent, wear protective clothing, avoid tsetse fly habitats, and practice safe blood transfusion.',
      fr: 'Utilisez un répulsif anti-insectes, évitez les habitats des mouches tsé-tsé.',
      sw: 'Tumia kuzuia wadudu, kalia nguo za kinga, zidi maeneo ya mbu wa tsetse.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate medical care if you develop fever, swollen lymph nodes, or sleep disturbance after tsetse fly exposure.',
      fr: 'Cherchez des soins médicaux immédiats si vous développez de la fièvre ou des ganglions lymphatiques enflés.',
      sw: 'Tafuta huduma za haraka kama una homa au nodi za limfu zilizoimba.'
    },
    complications: {
      en: ['neurological damage', 'coma', 'death', 'organ failure'],
      fr: ['dommages neurologiques', 'coma', 'décès', 'insuffisance d\'organe'],
      sw: ['madhara ya akili', 'tunifu', 'kifo', 'kushindwa kwa kiungo']
    },
    diagnosis: {
      en: 'Blood smear examination, PCR test, or CSF analysis.',
      fr: 'Examen du frottis sanguin, test PCR ou analyse du LCR.',
      sw: 'Mtihani wa mkutano wa damu, mtihani wa PCR au uchambuzi wa CSF.'
    },
    prognosis: {
      en: 'Early detection and treatment can lead to cure. Late-stage disease is often fatal.',
      fr: 'La détection et le traitement précoces peuvent mener à la guérison. La maladie au stade tardif est souvent mortelle.',
      sw: 'Kupata haraka na matibabu kunaweza kusababisha uponyaji. Ugonjwa wa hatua ya karibuni ni kifo mara nyingi.'
    },
    source: 'who',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'leishmaniasis',
    name: {
      en: 'Leishmaniasis',
      fr: 'Leishmaniose',
      sw: 'Leishmaniasis'
    },
    category: 'infectious',
    severity: 'medium',
    symptoms: {
      en: ['skin ulcers', 'skin lesions', 'nodules', 'swollen lymph nodes', 'fever', 'weight loss', 'splenomegaly'],
      fr: ['ulcères cutanés', 'lésions cutanées', 'nodules', 'ganglions lymphatiques enflés', 'fièvre', 'perte de poids'],
      sw: ['matope ya ngozi', 'kasoro za ngozi', 'nodules', 'nodi za limfu zilizoimba', 'homa', 'kupungua kwa uzani', 'ubavu ulimbo']
    },
    commonSymptoms: {
      en: ['skin ulcers', 'skin lesions', 'swollen lymph nodes'],
      fr: ['ulcères cutanés', 'lésions cutanées', 'ganglions lymphatiques enflés'],
      sw: ['matope ya ngozi', 'kasoro za ngozi', 'nodi za limfu zilizoimba']
    },
    rareSymptoms: {
      en: ['visceral leishmaniasis', 'organ failure', 'severe anemia', 'death'],
      fr: ['leishmaniose viscérale', 'insuffisance d\'organe', 'anémie grave'],
      sw: ['leishmaniasis ya kiungo', 'kushindwa kwa kiungo', 'upungufu wa damu kali']
    },
    causes: {
      en: ['leishmania parasite', 'sand fly bites', 'infected blood transfusion'],
      fr: ['parasite leishmania', 'piqûres de mouches des sables', 'transfusion sanguine infectée'],
      sw: ['parasite leishmania', 'kumbuliwa na mbu wa kumimina', 'damu iliyoambukizwa']
    },
    riskFactors: {
      en: ['living in endemic areas', 'poor housing', 'malnutrition', 'weak immune system', 'HIV infection'],
      fr: ['vivre dans les zones endémiques', 'logement insuffisant', 'malnutrition', 'système immunitaire faible'],
      sw: ['kuishi katika maeneo ya ugonjwa', 'nyumba duni', 'mkate duni', 'kinga duni', 'VVU']
    },
    treatment: {
      en: 'Antimonial compounds or amphotericin B for visceral leishmaniasis. Topical treatments for cutaneous forms.',
      fr: 'Composés antimonialux ou amphotéricine B pour la leishmaniose viscérale.',
      sw: 'Dawa za antimonial au amphotericin B kwa leishmaniasis ya kiungo.'
    },
    prevention: {
      en: 'Use insect repellent, wear protective clothing, improve housing quality, and maintain good nutrition.',
      fr: 'Utilisez un répulsif anti-insectes, portez des vêtements de protection, améliorez la qualité du logement.',
      sw: 'Tumia kuzuia wadudu, vaa nguo za kinga, boresha nyumba, na kula vizuri.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care if you develop persistent skin ulcers, swollen lymph nodes, or fever lasting more than a week.',
      fr: 'Cherchez des soins médicaux si vous développez des ulcères cutanés persistants.',
      sw: 'Tafuta huduma za kimatibabu kama una matope ya ngozi au nodi za limfu zilizoimba.'
    },
    complications: {
      en: ['visceral leishmaniasis', 'secondary infection', 'scarring', 'organ damage'],
      fr: ['leishmaniose viscérale', 'infection secondaire', 'cicatrisation', 'dommages d\'organe'],
      sw: ['leishmaniasis ya kiungo', 'ambukizo la pili', 'dalili za kidonda', 'dharau ya kiungo']
    },
    diagnosis: {
      en: 'Skin biopsy, blood culture, or PCR test.',
      fr: 'Biopsie cutanée, culture sanguine ou test PCR.',
      sw: 'Biopsy ya ngozi, mkutano wa damu, au mtihani wa PCR.'
    },
    prognosis: {
      en: 'With treatment, cutaneous leishmaniasis typically heals in several months. Visceral forms are more serious.',
      fr: 'Avec le traitement, la leishmaniose cutanée guérit généralement en plusieurs mois.',
      sw: 'Na matibabu, leishmaniasis ya ngozi hupona ndani ya miezi kadhaa.'
    },
    source: 'who',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'guinea-worm',
    name: {
      en: 'Guinea Worm Disease',
      fr: 'Dracunculose',
      sw: 'Ugonjwa wa Kwa Dracunculus'
    },
    category: 'infectious',
    severity: 'medium',
    symptoms: {
      en: ['blistering', 'burning sensation', 'swelling', 'ulceration', 'secondary infection'],
      fr: ['ampoules', 'sensation de brûlure', 'gonflement', 'ulcération', 'infection secondaire'],
      sw: ['kumimina', 'moto katika ngozi', 'kubwa', 'matope', 'ambukizo la pili']
    },
    commonSymptoms: {
      en: ['blistering', 'swelling', 'burning sensation'],
      fr: ['ampoules', 'gonflement', 'sensation de brûlure'],
      sw: ['kumimina', 'kubwa', 'moto katika ngozi']
    },
    rareSymptoms: {
      en: ['secondary bacterial infection', 'tetanus', 'joint contracture', 'disability'],
      fr: ['infection bactérienne secondaire', 'tétanos', 'contracture articulaire'],
      sw: ['ambukizo la bacterium la pili', 'tetanasi', 'kupingana kwa mifumo']
    },
    causes: {
      en: ['dracunculus medinensis worm', 'contaminated water', 'drinking unfiltered water'],
      fr: ['ver dracunculus medinensis', 'eau contaminée', 'boire de l\'eau non filtrée'],
      sw: ['kilicho kibabaku', 'maji yenye kamukafu', 'kunywa maji bila chujio']
    },
    riskFactors: {
      en: ['lack of access to clean water', 'poor sanitation', 'rural residence', 'poverty'],
      fr: ['manque d\'accès à l\'eau potable', 'assainissement insuffisant', 'résidence rurale'],
      sw: ['kukosa maji safi', 'usafi duni', 'kuishi kwa vijijini', 'umaskini']
    },
    treatment: {
      en: 'Supportive care, extracting the worm gradually, and preventing secondary infection.',
      fr: 'Soins de soutien, extraction progressive du ver et prévention de l\'infection secondaire.',
      sw: 'Huduma ya kusaidia, kuondoa kilicho kibabaku pole pole, na kuzida ambukizo la pili.'
    },
    prevention: {
      en: 'Provide access to clean drinking water, use water filters, practice good sanitation, and boil water.',
      fr: 'Fournir l\'accès à l\'eau potable propre, utiliser des filtres à eau, pratiquer une bonne hygiène.',
      sw: 'Toa maji safi ya kunywa, tumia chujio cha maji, fanya usafi vizuri, na chemsha maji.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care immediately if you develop signs of secondary infection, fever, or signs of tetanus.',
      fr: 'Cherchez des soins médicaux immédiats si vous développez des signes d\'infection secondaire.',
      sw: 'Tafuta huduma za haraka kama una dalili ya ambukizo la pili au homa.'
    },
    complications: {
      en: ['secondary bacterial infection', 'tetanus', 'joint contracture', 'permanent disability', 'death'],
      fr: ['infection bactérienne secondaire', 'tétanos', 'contracture articulaire', 'invalidité permanente'],
      sw: ['ambukizo la bacterium la pili', 'tetanasi', 'kupingana kwa mifumo', 'kukamatia', 'kifo']
    },
    diagnosis: {
      en: 'Clinical examination, ultrasound imaging.',
      fr: 'Examen clinique, imagerie par ultrasons.',
      sw: 'Mtihani wa kliniki, picha ya ultrasound.'
    },
    prognosis: {
      en: 'With proper care, most cases resolve within several months, but complications can lead to long-term disability.',
      fr: 'Avec des soins appropriés, la plupart des cas se résolvent en quelques mois.',
      sw: 'Na huduma sahihi, nyingi za visa hupona ndani ya miezi kadhaa.'
    },
    source: 'who',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'schistosomiasis',
    name: {
      en: 'Schistosomiasis',
      fr: 'Schistosomiase',
      sw: 'Schistosomiasis'
    },
    category: 'infectious',
    severity: 'medium',
    symptoms: {
      en: ['rash', 'itching', 'fever', 'chills', 'muscle pain', 'cough', 'abdominal pain', 'diarrhea', 'blood in urine'],
      fr: ['éruption', 'démangeaisons', 'fièvre', 'frissons', 'douleur musculaire', 'toux', 'douleur abdominale', 'diarrhée', 'sang dans l\'urine'],
      sw: ['upele', 'kuchimba', 'homa', 'baridi', 'maumivu ya misuli', 'kikohozi', 'maumivu ya tumbo', 'kuhara', 'damu katika mkojo']
    },
    commonSymptoms: {
      en: ['rash', 'fever', 'muscle pain', 'abdominal pain'],
      fr: ['éruption', 'fièvre', 'douleur musculaire', 'douleur abdominale'],
      sw: ['upele', 'homa', 'maumivu ya misuli', 'maumivu ya tumbo']
    },
    rareSymptoms: {
      en: ['organ damage', 'kidney failure', 'liver failure', 'neurological complications'],
      fr: ['dommages d\'organe', 'insuffisance rénale', 'insuffisance hépatique', 'complications neurologiques'],
      sw: ['dharau ya kiungo', 'kushindwa kwa figo', 'kushindwa kwa ini', 'shida za akili']
    },
    causes: {
      en: ['schistosoma parasites', 'contaminated freshwater', 'swimming in infected water', 'bathing in contaminated water'],
      fr: ['parasites schistosoma', 'eau douce contaminée', 'baignade dans l\'eau infectée'],
      sw: ['parasite schistosoma', 'maji safi yenye kamukafu', 'kuogelea katika maji yenye ugonjwa', 'kuogelea katika maji yenye kamukafu']
    },
    riskFactors: {
      en: ['exposure to contaminated freshwater', 'poor sanitation', 'lack of clean water', 'poverty'],
      fr: ['exposition à l\'eau douce contaminée', 'assainissement insuffisant', 'manque d\'eau potable'],
      sw: ['kupatikana na maji safi yenye kamukafu', 'usafi duni', 'kukosa maji safi', 'umaskini']
    },
    treatment: {
      en: 'Praziquantel is the main treatment for all forms of schistosomiasis.',
      fr: 'Le praziquantel est le traitement principal pour toutes les formes de schistosomiase.',
      sw: 'Praziquantel ni matibabu kuu kwa aina zote za schistosomiasis.'
    },
    prevention: {
      en: 'Provide access to clean water, practice good sanitation, avoid contaminated water, and educate communities.',
      fr: 'Fournir l\'accès à l\'eau potable propre, pratiquer une bonne hygiène, éviter l\'eau contaminée.',
      sw: 'Toa maji safi, fanya usafi vizuri, zidi maji yenye kamukafu, na fundisha jamii.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care if you develop persistent diarrhea, blood in urine, or abdominal pain lasting more than two weeks.',
      fr: 'Cherchez des soins médicaux si vous développez une diarrhée persistante ou du sang dans l\'urine.',
      sw: 'Tafuta huduma za kimatibabu kama una kuhara kila wakati au damu katika mkojo.'
    },
    complications: {
      en: ['kidney failure', 'liver failure', 'intestinal obstruction', 'organ damage', 'infertility'],
      fr: ['insuffisance rénale', 'insuffisance hépatique', 'obstruction intestinale', 'dommages d\'organe'],
      sw: ['kushindwa kwa figo', 'kushindwa kwa ini', 'kusomeka kwa tumbo', 'dharau ya kiungo', 'kutokuwa na watoto']
    },
    diagnosis: {
      en: 'Stool or urine tests, serology, or microscopy.',
      fr: 'Tests des selles ou des urines, sérologie ou microscopie.',
      sw: 'Mtihani wa mavi au mkojo, serology, au microscopy.'
    },
    prognosis: {
      en: 'With treatment, symptoms improve significantly. Chronic schistosomiasis can lead to long-term organ damage.',
      fr: 'Avec le traitement, les symptômes s\'améliorent considérablement.',
      sw: 'Na matibabu, dalili zinarejea sana. Schistosomiasis ya muda mrefu inaweza kusababisha dharau ya kiungo.'
    },
    source: 'who',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'onchocerciasis',
    name: {
      en: 'Onchocerciasis (River Blindness)',
      fr: 'Onchocercose (Cécité des Rivières)',
      sw: 'Onchocerciasis (Mamakonde ya Maji)'
    },
    category: 'infectious',
    severity: 'high',
    symptoms: {
      en: ['skin itching', 'skin nodules', 'skin depigmentation', 'vision problems', 'eye pain', 'eye redness', 'blindness'],
      fr: ['démangeaisons cutanées', 'nodules cutanés', 'dépigmentation cutanée', 'problèmes de vision', 'douleur oculaire'],
      sw: ['kuchimba kwa ngozi', 'nodules ya ngozi', 'kupungua kwa rangi', 'shida ya macho', 'maumivu ya macho', 'kumimina kwenye macho', 'mamakonde']
    },
    commonSymptoms: {
      en: ['skin itching', 'skin nodules', 'vision problems'],
      fr: ['démangeaisons cutanées', 'nodules cutanés', 'problèmes de vision'],
      sw: ['kuchimba kwa ngozi', 'nodules ya ngozi', 'shida ya macho']
    },
    rareSymptoms: {
      en: ['blindness', 'severe disability', 'death'],
      fr: ['cécité', 'invalidité grave', 'décès'],
      sw: ['mamakonde', 'kukamatia kali', 'kifo']
    },
    causes: {
      en: ['onchocerca volvulus worm', 'blackfly bites', 'infected water sources'],
      fr: ['ver onchocerca volvulus', 'piqûres de mouches noires', 'sources d\'eau infectées'],
      sw: ['kilicho kibabaku onchocerca volvulus', 'kumbuliwa na mbu weusi', 'vyanzo vya maji yenye ugonjwa']
    },
    riskFactors: {
      en: ['living near river areas', 'occupational exposure', 'poor sanitation', 'lack of vector control'],
      fr: ['vivre près des zones fluviales', 'exposition professionnelle', 'assainissement insuffisant'],
      sw: ['kuishi karibu na maji ya mto', 'kupatikana kazi', 'usafi duni', 'kukosa kidhibiti cha wadudu']
    },
    treatment: {
      en: 'Ivermectin to kill microfilariae and sometimes surgery to remove nodules.',
      fr: 'Ivermectine pour tuer les microfilaires et parfois chirurgie pour enlever les nodules.',
      sw: 'Ivermectin kuua microfilariae na wakati mwingine operesheni kuondoa nodules.'
    },
    prevention: {
      en: 'Use insect repellent, wear protective clothing, implement vector control, and avoid river areas.',
      fr: 'Utilisez un répulsif anti-insectes, portez des vêtements de protection, mettez en œuvre la lutte contre les vecteurs.',
      sw: 'Tumia kuzuia wadudu, vaa nguo za kinga, tengeneza kidhibiti cha wadudu, na zidi maji ya mto.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care if you develop persistent skin itching, nodules, vision problems, or eye pain.',
      fr: 'Cherchez des soins médicaux si vous développez des démangeaisons cutanées persistantes ou des problèmes de vision.',
      sw: 'Tafuta huduma za kimatibabu kama una kuchimba kwa ngozi au shida ya macho.'
    },
    complications: {
      en: ['blindness', 'severe itching', 'skin depigmentation', 'vision loss', 'disability'],
      fr: ['cécité', 'démangeaisons graves', 'dépigmentation cutanée', 'perte de vision'],
      sw: ['mamakonde', 'kuchimba kali', 'kupungua kwa rangi', 'kupungua kwa macho', 'kukamatia']
    },
    diagnosis: {
      en: 'Skin snip test, slit lamp examination, serology.',
      fr: 'Test de frottis cutané, examen à la lampe à fente, sérologie.',
      sw: 'Mtihani wa ngozi, mtihani wa macho, serology.'
    },
    prognosis: {
      en: 'Early treatment can prevent blindness and disability. Untreated disease can lead to permanent vision loss.',
      fr: 'Le traitement précoce peut prévenir la cécité et l\'invalidité.',
      sw: 'Matibabu ya mapema kunaweza kuzida mamakonde na kukamatia. Ugonjwa usio na matibabu unaweza kusababisha kupungua kwa macho.'
    },
    source: 'who',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  }
];
