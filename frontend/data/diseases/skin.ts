import { ComprehensiveDisease } from './types';

export const skinDiseases: ComprehensiveDisease[] = [
  {
    id: 'scabies',
    name: {
      en: 'Scabies',
      fr: 'Gale',
      sw: 'Upele'
    },
    category: 'skin',
    severity: 'medium',
    symptoms: {
      en: ['intense itching, especially at night', 'pimple-like rash', 'burrows (tiny lines on skin)', 'sores from scratching'],
      fr: ['démangeaisons intenses, surtout la nuit', 'éruption cutanée ressemblant à des boutons', 'sillons (petites lignes sur la peau)', 'plaies dues au grattage'],
      sw: ['muwasho mkali, hasa usiku', 'upele kama chunusi', 'vichuguu (mistari midogo kwenye ngozi)', 'vidonda kutokana na kujikuna']
    },
    commonSymptoms: {
      en: ['intense itching', 'pimple-like rash'],
      fr: ['démangeaisons intenses', 'éruption cutanée ressemblant à des boutons'],
      sw: ['muwasho mkali', 'upele kama chunusi']
    },
    rareSymptoms: {
      en: ['crusted (Norwegian) scabies in immunocompromised individuals'],
      fr: ['gale croûteuse (norvégienne) chez les personnes immunodéprimées'],
      sw: ['upele wa magamba (wa Norway) kwa watu wenye kinga dhaifu']
    },
    causes: {
      en: ['infestation by the human itch mite (Sarcoptes scabiei)'],
      fr: ['infestation par l\'acarien de la gale (Sarcoptes scabiei)'],
      sw: ['maambukizi ya funza wa binadamu (Sarcoptes scabiei)']
    },
    riskFactors: {
      en: ['close physical contact', 'crowded conditions', 'sharing bedding or clothing'],
      fr: ['contact physique étroit', 'conditions de surpopulation', 'partage de literie ou de vêtements'],
      sw: ['mawasiliano ya karibu ya kimwili', 'mazingira ya msongamano', 'kushiriki matandiko au nguo']
    },
    treatment: {
      en: 'Prescription creams or lotions (permethrin, ivermectin). All household members and close contacts should be treated.',
      fr: 'Crèmes ou lotions sur ordonnance (perméthrine, ivermectine). Tous les membres du ménage et les contacts étroits doivent être traités.',
      sw: 'Krimu au losheni za daktari (permethrin, ivermectin). Wanafamilia wote na watu wa karibu wanapaswa kutibiwa.'
    },
    prevention: {
      en: 'Avoid direct skin-to-skin contact with an infected person. Wash bedding and clothing in hot water.',
      fr: 'Éviter le contact direct peau à peau avec une personne infectée. Laver la literie et les vêtements à l\'eau chaude.',
      sw: 'Epuka kugusana ngozi kwa ngozi na mtu aliyeambukizwa. Fua matandiko na nguo kwa maji ya moto.'
    },
    whenToSeekHelp: {
      en: 'See a doctor for diagnosis and prescription treatment. Itching can persist for weeks after treatment.',
      fr: 'Consultez un médecin pour un diagnostic et un traitement sur ordonnance. Les démangeaisons peuvent persister pendant des semaines après le traitement.',
      sw: 'Muone daktari kwa utambuzi na matibabu ya daktari. Muwasho unaweza kuendelea kwa wiki kadhaa baada ya matibabu.'
    },
    complications: {
      en: ['secondary bacterial infections from scratching'],
      fr: ['infections bactériennes secondaires dues au grattage'],
      sw: ['maambukizi ya pili ya bakteria kutokana na kujikuna']
    },
    diagnosis: {
      en: 'Physical examination of the rash and burrows. Skin scraping to look for mites or eggs.',
      fr: 'Examen physique de l\'éruption cutanée et des sillons. Grattage de la peau pour rechercher des acariens ou des œufs.',
      sw: 'Uchunguzi wa kimwili wa upele na vichuguu. Kukwangua ngozi kutafuta funza au mayai.'
    },
    prognosis: {
      en: 'Excellent with proper treatment of the patient and contacts.',
      fr: 'Excellent avec un traitement approprié du patient et des contacts.',
      sw: 'Nzuri sana na matibabu sahihi ya mgonjwa na watu wa karibu.'
    },
    source: 'cdc',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'acne-vulgaris',
    name: {
      en: 'Acne Vulgaris',
      fr: 'Acné Vulgaire',
      sw: 'Chunusi'
    },
    category: 'skin',
    severity: 'low',
    symptoms: {
      en: ['pimples (pustules)', 'blackheads', 'whiteheads', 'cysts', 'nodules', 'oily skin'],
      fr: ['boutons (pustules)', 'points noirs', 'points blancs', 'kystes', 'nodules', 'peau grasse'],
      sw: ['vipele (pustules)', 'vichwa vyeusi', 'vichwa vyeupe', 'uvimbe', 'vinundu', 'ngozi ya mafuta']
    },
    commonSymptoms: {
      en: ['pimples', 'blackheads', 'oily skin'],
      fr: ['boutons', 'points noirs', 'peau grasse'],
      sw: ['vipele', 'vichwa vyeusi', 'ngozi ya mafuta']
    },
    rareSymptoms: {
      en: ['severe scarring', 'psychological distress'],
      fr: ['cicatrices sévères', 'détresse psychologique'],
      sw: ['makovu makali', 'msongo wa kisaikolojia']
    },
    causes: {
      en: ['overproduction of oil (sebum)', 'clogged hair follicles', 'bacteria (Propionibacterium acnes)', 'hormonal changes'],
      fr: ['surproduction de sébum', 'follicules pileux obstrués', 'bactéries (Propionibacterium acnes)', 'changements hormonaux'],
      sw: ['uzalishaji mwingi wa mafuta (sebum)', 'follicles za nywele zilizoziba', 'bakteria (Propionibacterium acnes)', 'mabadiliko ya homoni']
    },
    riskFactors: {
      en: ['adolescence', 'family history', 'hormonal changes (puberty, menstruation)', 'certain medications (corticosteroids)', 'high-glycemic diet'],
      fr: ['adolescence', 'antécédents familiaux', 'changements hormonaux (puberté, menstruation)', 'certains médicaments (corticostéroïdes)', 'régime à indice glycémique élevé'],
      sw: ['ujana', 'historia ya familia', 'mabadiliko ya homoni (kubalehe, hedhi)', 'dawa fulani (corticosteroids)', 'lishe yenye glycemic ya juu']
    },
    treatment: {
      en: 'Topical treatments (benzoyl peroxide, retinoids), oral antibiotics, hormonal therapy, isotretinoin for severe cases.',
      fr: 'Traitements topiques (peroxyde de benzoyle, rétinoïdes), antibiotiques oraux, hormonothérapie, isotrétinoïne pour les cas graves.',
      sw: 'Matibabu ya kupaka (benzoyl peroxide, retinoids), antibiotiki za kumeza, tiba ya homoni, isotretinoin kwa kesi kali.'
    },
    prevention: {
      en: 'Gentle skin cleansing, avoid harsh scrubbing, use non-comedogenic products, manage stress.',
      fr: 'Nettoyage doux de la peau, éviter le gommage agressif, utiliser des produits non comédogènes, gérer le stress.',
      sw: 'Usafishaji wa ngozi kwa upole, epuka kusugua kwa nguvu, tumia bidhaa zisizo za comedogenic, dhibiti msongo.'
    },
    whenToSeekHelp: {
      en: 'See a doctor if over-the-counter treatments are not effective or if acne is severe and causing scarring or distress.',
      fr: 'Consultez un médecin si les traitements en vente libre ne sont pas efficaces ou si l\'acné est sévère et provoque des cicatrices ou de la détresse.',
      sw: 'Muone daktari ikiwa matibabu ya dukani hayafanyi kazi au ikiwa chunusi ni kali na inasababisha makovu au msongo.'
    },
    complications: {
      en: ['scarring', 'skin discoloration', 'low self-esteem', 'depression'],
      fr: ['cicatrices', 'décoloration de la peau', 'faible estime de soi', 'dépression'],
      sw: ['makovu', 'kubadilika rangi kwa ngozi', 'kujithamini kidogo', 'unyogovu']
    },
    diagnosis: {
      en: 'Based on physical examination of the skin.',
      fr: 'Basé sur un examen physique de la peau.',
      sw: 'Kulingana na uchunguzi wa kimwili wa ngozi.'
    },
    prognosis: {
      en: 'Generally improves with age, but can persist into adulthood. Treatable with consistent care.',
      fr: 'S\'améliore généralement avec l\'âge, mais peut persister à l\'âge adulte. Traitable avec des soins constants.',
      sw: 'Kwa kawaida huboreka na umri, lakini inaweza kuendelea hadi utu uzima. Inatibika kwa utunzaji thabiti.'
    },
    source: 'nhs',
    prevalenceInAfrica: 'very-high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'eczema',
    name: {
      en: 'Eczema (Atopic Dermatitis)',
      fr: 'Eczéma (Dermatite Atopique)',
      sw: 'Eczema (Ugonjwa wa Ngozi wa Atopic)'
    },
    category: 'skin',
    severity: 'medium',
    symptoms: {
      en: ['dry, itchy skin', 'red to brownish-gray patches', 'small, raised bumps which may leak fluid', 'thickened, cracked, scaly skin', 'raw, sensitive, swollen skin from scratching'],
      fr: ['peau sèche et qui démange', 'plaques rouges à gris-brunâtre', 'petites bosses surélevées qui peuvent suinter', 'peau épaissie, craquelée, squameuse', 'peau à vif, sensible, enflée à cause du grattage'],
      sw: ['ngozi kavu, inayowasha', 'mabaka mekundu hadi kahawia-kijivu', 'vipele vidogo vinavyoweza kutoa maji', 'ngozi nene, iliyopasuka, yenye magamba', 'ngozi mbichi, nyeti, iliyovimba kutokana na kujikuna']
    },
    commonSymptoms: {
      en: ['dry, itchy skin', 'red patches', 'thickened skin'],
      fr: ['peau sèche et qui démange', 'plaques rouges', 'peau épaissie'],
      sw: ['ngozi kavu, inayowasha', 'mabaka mekundu', 'ngozi nene']
    },
    rareSymptoms: {
      en: ['eye problems (conjunctivitis)', 'sleep problems due to itching', 'skin infections'],
      fr: ['problèmes oculaires (conjonctivite)', 'problèmes de sommeil dus aux démangeaisons', 'infections cutanées'],
      sw: ['matatizo ya macho (conjunctivitis)', 'matatizo ya usingizi kutokana na muwasho', 'maambukizi ya ngozi']
    },
    causes: {
      en: ['genetic variation affecting skin barrier function', 'immune system dysfunction', 'environmental triggers'],
      fr: ['variation génétique affectant la fonction de barrière cutanée', 'dysfonctionnement du système immunitaire', 'déclencheurs environnementaux'],
      sw: ['tofauti ya kijeni inayoathiri kazi ya kizuizi cha ngozi', 'utendakazi mbaya wa mfumo wa kinga', 'vichocheo vya mazingira']
    },
    riskFactors: {
      en: ['family history of eczema, allergies, hay fever or asthma', 'age (common in children)', 'living in urban areas'],
      fr: ['antécédents familiaux d\'eczéma, d\'allergies, de rhume des foins ou d\'asthme', 'âge (fréquent chez les enfants)', 'vivre en zone urbaine'],
      sw: ['historia ya familia ya eczema, mzio, homa ya hay au pumu', 'umri (kawaida kwa watoto)', 'kuishi mijini']
    },
    treatment: {
      en: 'Moisturizers, topical corticosteroids, calcineurin inhibitors, antihistamines for itching, wet wrap therapy, light therapy.',
      fr: 'Hydratants, corticostéroïdes topiques, inhibiteurs de la calcineurine, antihistaminiques pour les démangeaisons, thérapie par enveloppement humide, photothérapie.',
      sw: 'Vilainishi, corticosteroids za kupaka, vizuizi vya calcineurin, antihistamines kwa muwasho, tiba ya kufunga kwa unyevu, tiba ya mwanga.'
    },
    prevention: {
      en: 'Moisturize skin daily, avoid known triggers (soaps, detergents, allergens), take shorter, lukewarm baths.',
      fr: 'Hydrater la peau quotidiennement, éviter les déclencheurs connus (savons, détergents, allergènes), prendre des bains plus courts et tièdes.',
      sw: 'Lainisha ngozi kila siku, epuka vichocheo vinavyojulikana (sabuni, sabuni, vizio), oga kwa muda mfupi na maji ya uvuguvugu.'
    },
    whenToSeekHelp: {
      en: 'See a doctor if itching and redness are severe, interfere with sleep, or if skin becomes infected (pus, yellow scabs).',
      fr: 'Consultez un médecin si les démangeaisons et les rougeurs sont sévères, interfèrent avec le sommeil, ou si la peau s\'infecte (pus, croûtes jaunes).',
      sw: 'Muone daktari ikiwa muwasho na wekundu ni vikali, vinaingilia usingizi, au ikiwa ngozi inapata maambukizi (usaha, magamba ya njano).'
    },
    complications: {
      en: ['chronic itchy, scaly skin', 'skin infections', 'sleep problems', 'asthma and hay fever'],
      fr: ['peau chroniquement qui démange et squameuse', 'infections cutanées', 'problèmes de sommeil', 'asthme et rhume des foins'],
      sw: ['ngozi inayowasha na yenye magamba kwa muda mrefu', 'maambukizi ya ngozi', 'matatizo ya usingizi', 'pumu na homa ya hay']
    },
    diagnosis: {
      en: 'Based on physical examination and patient history. Allergy testing may be done.',
      fr: 'Basé sur l\'examen physique et les antécédents du patient. Des tests d\'allergie peuvent être effectués.',
      sw: 'Kulingana na uchunguzi wa kimwili na historia ya mgonjwa. Upimaji wa mzio unaweza kufanywa.'
    },
    prognosis: {
      en: 'Chronic condition with flares and remissions. Often improves with age, but can be lifelong.',
      fr: 'Condition chronique avec des poussées et des rémissions. S\'améliore souvent avec l\'âge, mais peut durer toute la vie.',
      sw: 'Hali sugu na milipuko na nafuu. Mara nyingi huboreka na umri, lakini inaweza kuwa ya maisha yote.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  }
];
