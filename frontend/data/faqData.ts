export interface QA {
  question: { en: string; fr: string; sw: string };
  answer: { en: string; fr: string; sw: string };
}

export interface QACategory {
  id: string;
  title: { en: string; fr: string; sw: string };
  description: { en: string; fr: string; sw: string };
  questions: QA[];
}

export const healthBuddyQA: QACategory[] = [
  {
    id: 'sexual_health',
    title: {
      en: 'Sexual Health',
      fr: 'Santé Sexuelle',
      sw: 'Afya ya Ngono'
    },
    description: {
      en: 'Questions about sexual health, contraception, and STIs.',
      fr: 'Questions sur la santé sexuelle, la contraception et les IST.',
      sw: 'Maswali kuhusu afya ya ngono, uzazi wa mpango, na magonjwa ya zinaa.'
    },
    questions: [
      {
        question: {
          en: 'What are the most common STIs?',
          fr: 'Quelles sont les IST les plus courantes ?',
          sw: 'Magonjwa ya zinaa ya kawaida ni yapi?'
        },
        answer: {
          en: 'Common STIs include Chlamydia, Gonorrhea, Syphilis, Herpes, HPV, and HIV. It is important to use protection like condoms and get tested regularly if you are sexually active. Most STIs are treatable with antibiotics or antiviral medications. It\'s crucial to see a doctor for diagnosis and treatment to prevent long-term health problems and avoid spreading it to others.',
          fr: 'Les IST courantes incluent la Chlamydia, la Gonorrhée, la Syphilis, l\'Herpès, le VPH et le VIH. Il est important d\'utiliser une protection comme les préservatifs et de se faire dépister régulièrement si vous êtes sexuellement actif. La plupart des IST sont traitables avec des antibiotiques ou des médicaments antiviraux. Il est crucial de consulter un médecin pour un diagnostic et un traitement afin de prévenir les problèmes de santé à long terme et d\'éviter de la transmettre à d\'autres.',
          sw: 'Magonjwa ya zinaa ya kawaida ni pamoja na Chlamydia, Kisonono, Kaswende, Herpes, HPV, na VVU. Ni muhimu kutumia kinga kama kondomu na kupima mara kwa mara ikiwa unafanya ngono. Magonjwa mengi ya zinaa yanatibika kwa antibiotiki au dawa za kuzuia virusi. Ni muhimu kumuona daktari kwa utambuzi na matibabu ili kuzuia matatizo ya afya ya muda mrefu na kuepuka kuieneza kwa wengine.'
        }
      },
      {
        question: {
          en: 'How effective are condoms?',
          fr: 'Quelle est l\'efficacité des préservatifs ?',
          sw: 'Kondomu zina ufanisi gani?'
        },
        answer: {
          en: 'When used correctly and consistently, male condoms are about 98% effective at preventing pregnancy. They also significantly reduce the risk of most STIs, including HIV.',
          fr: 'Lorsqu\'ils sont utilisés correctement et systématiquement, les préservatifs masculins sont efficaces à environ 98% pour prévenir la grossesse. Ils réduisent également de manière significative le risque de la plupart des IST, y compris le VIH.',
          sw: 'Zikitumiwa ipasavyo na kila mara, kondomu za kiume zina ufanisi wa asilimia 98 katika kuzuia mimba. Pia hupunguza kwa kiasi kikubwa hatari ya magonjwa mengi ya zinaa, ikiwemo VVU.'
        }
      },
      {
        question: {
          en: 'What is emergency contraception?',
          fr: 'Qu\'est-ce que la contraception d\'urgence ?',
          sw: 'Njia ya dharura ya kuzuia mimba ni nini?'
        },
        answer: {
          en: 'Emergency contraception (the "morning-after pill") can prevent pregnancy after unprotected sex. It should be taken as soon as possible, ideally within 72 hours, but can be effective up to 5 days. It is not an abortion pill and does not protect against STIs.',
          fr: 'La contraception d\'urgence (la "pilule du lendemain") peut prévenir une grossesse après un rapport sexuel non protégé. Elle doit être prise dès que possible, idéalement dans les 72 heures, mais peut être efficace jusqu\'à 5 jours. Ce n\'est pas une pilule abortive et ne protège pas contre les IST.',
          sw: 'Njia ya dharura ya kuzuia mimba ("morning-after pill") inaweza kuzuia mimba baada ya ngono isiyo salama. Inapaswa kunywewa haraka iwezekanavyo, ikiwezekana ndani ya masaa 72, lakini inaweza kuwa na ufanisi hadi siku 5. Sio kidonge cha kutoa mimba na haikingi dhidi ya magonjwa ya zinaa.'
        }
      },
      {
        question: {
          en: 'What is masturbation? Is it normal?',
          fr: 'Qu\'est-ce que la masturbation ? Est-ce normal ?',
          sw: 'Kujichua ni nini? Je, ni kawaida?'
        },
        answer: {
          en: 'Masturbation is touching your own genitals for sexual pleasure. It\'s a completely normal and healthy part of human sexuality for people of all genders and ages. It can be a way to learn about your body, discover what feels good, and relieve sexual tension and stress. There are no negative physical or mental health side effects to masturbation. However, if it\'s done very roughly or too often, it could cause minor skin irritation, which usually heals quickly. If you feel it\'s interfering with your daily life, it might be helpful to talk to a trusted adult or counselor.',
          fr: 'La masturbation consiste à toucher ses propres organes génitaux pour le plaisir sexuel. C\'est une partie tout à fait normale et saine de la sexualité humaine pour les personnes de tous genres et de tous âges. Cela peut être un moyen d\'apprendre à connaître son corps, de découvrir ce qui fait du bien et de soulager la tension sexuelle et le stress. Il n\'y a pas d\'effets secondaires négatifs sur la santé physique ou mentale liés à la masturbation. Cependant, si c\'est fait très brutalement ou trop souvent, cela pourrait provoquer une irritation cutanée mineure, qui guérit généralement rapidement. Si vous sentez que cela interfère avec votre vie quotidienne, il pourrait être utile d\'en parler à un adulte de confiance ou à un conseiller.',
          sw: 'Kujichua ni kujigusa sehemu zako za siri kwa ajili ya raha ya kingono. Ni sehemu ya kawaida kabisa na yenye afya ya ujinsia wa binadamu kwa watu wa jinsia zote na rika zote. Inaweza kuwa njia ya kujifunza kuhusu mwili wako, kugundua kinachojisikia vizuri, na kupunguza msisimko wa kingono na msongo. Hakuna madhara hasi ya kimwili au kiakili kwa kujichua. Hata hivyo, ikiwa inafanywa kwa ukali sana au mara nyingi sana, inaweza kusababisha muwasho mdogo wa ngozi, ambao kwa kawaida hupona haraka. Ikiwa unahisi inaingilia maisha yako ya kila siku, inaweza kusaidia kuzungumza na mtu mzima unayemwamini au mshauri.'
        }
      },
      {
        question: {
          en: 'How do I know if I have an STI?',
          fr: 'Comment savoir si j\'ai une IST ?',
          sw: 'Nitajuaje kama nina ugonjwa wa zinaa (STI)?'
        },
        answer: {
          en: 'Some STIs have obvious symptoms like unusual discharge, sores, itching, or pain when urinating. However, many STIs have no symptoms at all. The only way to know for sure is to get tested. If you are sexually active, regular testing is recommended.',
          fr: 'Certaines IST présentent des symptômes évidents comme des écoulements inhabituels, des plaies, des démangeaisons ou des douleurs en urinant. Cependant, de nombreuses IST ne présentent aucun symptôme. La seule façon de le savoir avec certitude est de se faire dépister. Si vous êtes sexuellement actif, un dépistage régulier est recommandé.',
          sw: 'Baadhi ya magonjwa ya zinaa yana dalili dhahiri kama kutokwa na majimaji yasiyo ya kawaida, vidonda, muwasho, au maumivu wakati wa kukojoa. Hata hivyo, magonjwa mengi ya zinaa hayana dalili kabisa. Njia pekee ya kujua kwa uhakika ni kupima. Ikiwa unafanya ngono, kupima mara kwa mara kunapendekezwa.'
        }
      },
      {
        question: {
          en: 'Can I get pregnant the first time I have sex?',
          fr: 'Puis-je tomber enceinte la première fois que j\'ai des rapports sexuels ?',
          sw: 'Naweza kupata mimba mara ya kwanza nikifanya ngono?'
        },
        answer: {
          en: 'Yes, it is absolutely possible to get pregnant the very first time you have penis-in-vagina sex, even if ejaculation does not happen inside the vagina (pre-ejaculate can contain sperm). If you are not ready for a pregnancy, it\'s crucial to use contraception every time.',
          fr: 'Oui, il est tout à fait possible de tomber enceinte dès le premier rapport sexuel avec pénétration vaginale, même si l\'éjaculation n\'a pas lieu à l\'intérieur du vagin (le liquide pré-éjaculatoire peut contenir des spermatozoïdes). Si vous n\'êtes pas prête pour une grossesse, il est crucial d\'utiliser une contraception à chaque fois.',
          sw: 'Ndiyo, inawezekana kabisa kupata mimba mara ya kwanza kabisa unapofanya ngono ya uume kuingia ukeni, hata kama shahawa haikutoka ndani ya uke (majimaji ya kabla ya shahawa yanaweza kuwa na mbegu za kiume). Ikiwa hauko tayari kwa ujauzito, ni muhimu kutumia njia za uzazi wa mpango kila wakati.'
        }
      },
      {
        question: {
          en: 'Is it normal for my vagina to have a smell?',
          fr: 'Est-il normal que mon vagin ait une odeur ?',
          sw: 'Je, ni kawaida uke wangu kuwa na harufu?'
        },
        answer: {
          en: 'Yes, it\'s completely normal for a vagina to have a slight smell. The smell can change throughout your menstrual cycle. A healthy smell is often described as musky or fleshy. However, a very strong, fishy, or unpleasant odor, especially if accompanied by itching, burning, or unusual discharge, could be a sign of an infection like bacterial vaginosis or a yeast infection. Good hygiene, like washing with plain water and wearing cotton underwear, can help. If you\'re concerned about the smell, it\'s best to see a doctor.',
          fr: 'Oui, il est tout à fait normal qu\'un vagin ait une légère odeur. L\'odeur peut changer tout au long de votre cycle menstruel. Une odeur saine est souvent décrite comme musquée ou charnue. Cependant, une odeur très forte, de poisson ou désagréable, surtout si elle est accompagnée de démangeaisons, de brûlures ou de pertes inhabituelles, pourrait être le signe d\'une infection comme la vaginose bactérienne ou une infection à levures. Une bonne hygiène, comme se laver à l\'eau claire et porter des sous-vêtements en coton, peut aider. Si l\'odeur vous préoccupe, il est préférable de consulter un médecin.',
          sw: 'Ndiyo, ni kawaida kabisa kwa uke kuwa na harufu kidogo. Harufu inaweza kubadilika katika mzunguko wako wa hedhi. Harufu nzuri mara nyingi huelezewa kama ya uvundo au ya nyama. Hata hivyo, harufu kali sana, ya samaki, au isiyopendeza, hasa ikiwa inaambatana na muwasho, kuungua, au kutokwa na majimaji yasiyo ya kawaida, inaweza kuwa ishara ya maambukizi kama vile bacterial vaginosis au maambukizi ya fangasi. Usafi mzuri, kama kuosha kwa maji tupu na kuvaa chupi za pamba, unaweza kusaidia. Ikiwa una wasiwasi kuhusu harufu, ni bora kumuona daktari.'
        }
      },
      {
        question: {
          en: 'What is HPV and should I be worried?',
          fr: 'Qu\'est-ce que le VPH et dois-je m\'inquiéter ?',
          sw: 'HPV ni nini na ninapaswa kuwa na wasiwasi?'
        },
        answer: {
          en: 'Human Papillomavirus (HPV) is a very common STI. Most people with HPV don\'t have any symptoms and the infection often goes away on its own. Some types can cause genital warts, while high-risk types can cause cancers, most notably cervical cancer. The HPV vaccine is highly effective at preventing the most common high-risk types. It\'s recommended for both boys and girls, ideally before they become sexually active.',
          fr: 'Le papillomavirus humain (VPH) est une IST très courante. La plupart des personnes atteintes du VPH n\'ont aucun symptôme et l\'infection disparaît souvent d\'elle-même. Certains types peuvent provoquer des verrues génitales, tandis que les types à haut risque peuvent provoquer des cancers, notamment le cancer du col de l\'utérus. Le vaccin contre le VPH est très efficace pour prévenir les types à haut risque les plus courants. Il est recommandé pour les garçons et les filles, idéalement avant qu\'ils ne deviennent sexuellement actifs.',
          sw: 'Human Papillomavirus (HPV) ni ugonjwa wa zinaa unaojulikana sana. Watu wengi wenye HPV hawana dalili zozote na maambukizi mara nyingi huondoka yenyewe. Aina zingine zinaweza kusababisha viungo vya uzazi, wakati aina za hatari kubwa zinaweza kusababisha saratani, haswa saratani ya shingo ya kizazi. Chanjo ya HPV ni nzuri sana katika kuzuia aina za kawaida za hatari kubwa. Inapendekezwa kwa wavulana na wasichana, ikiwezekana kabla ya kuanza kufanya ngono.'
        }
      },
      {
        question: {
          en: 'Can you get an STI from oral sex?',
          fr: 'Peut-on contracter une IST par le sexe oral ?',
          sw: 'Unaweza kupata ugonjwa wa zinaa kwa ngono ya mdomo?'
        },
        answer: {
          en: 'Yes, it is possible to transmit or get STIs like herpes, gonorrhea, chlamydia, and syphilis through oral sex. Using a barrier method like a condom or dental dam can significantly reduce the risk.',
          fr: 'Oui, il est possible de transmettre ou de contracter des IST comme l\'herpès, la gonorrhée, la chlamydia et la syphilis par le sexe oral. L\'utilisation d\'une méthode barrière comme un préservatif ou une digue dentaire peut réduire considérablement le risque.',
          sw: 'Ndio, inawezekana kuambukiza au kupata magonjwa ya zinaa kama vile herpes, kisonono, chlamydia, na kaswende kupitia ngono ya mdomo. Kutumia njia ya kizuizi kama kondomu au dental dam kunaweza kupunguza hatari kwa kiasi kikubwa.'
        }
      }
    ]
  },
  {
    id: 'menstrual_health',
    title: {
      en: 'Menstrual Health',
      fr: 'Santé Menstruelle',
      sw: 'Afya ya Hedhi'
    },
    description: {
      en: 'Information about periods, cramps, and hygiene.',
      fr: 'Informations sur les règles, les crampes et l\'hygiène.',
      sw: 'Taarifa kuhusu hedhi, maumivu ya tumbo, na usafi.'
    },
    questions: [
      {
        question: {
          en: 'Is it normal to have irregular periods?',
          fr: 'Est-il normal d\'avoir des règles irrégulières ?',
          sw: 'Je, ni kawaida kuwa na hedhi isiyo ya kawaida?'
        },
        answer: {
          en: 'Irregular periods are common, especially in the first few years after starting menstruation. Stress, diet, exercise, and health conditions can also affect your cycle. If your periods are consistently very irregular, or if you miss more than 3 in a row, it\'s a good idea to see a doctor.',
          fr: 'Les règles irrégulières sont courantes, surtout dans les premières années après le début de la menstruation. Le stress, l\'alimentation, l\'exercice et les problèmes de santé peuvent également affecter votre cycle. Si vos règles sont constamment très irrégulières, ou si vous en manquez plus de 3 d\'affilée, il est conseillé de consulter un médecin.',
          sw: 'Hedhi isiyo ya kawaida ni jambo la kawaida, hasa katika miaka michache ya kwanza baada ya kuanza hedhi. Msongo wa mawazo, lishe, mazoezi, na hali za kiafya pia zinaweza kuathiri mzunguko wako. Ikiwa hedhi yako ni isiyo ya kawaida sana mara kwa mara, au ukikosa zaidi ya 3 mfululizo, ni wazo zuri kumuona daktari.'
        }
      },
      {
        question: {
          en: 'How can I relieve menstrual cramps?',
          fr: 'Comment puis-je soulager les crampes menstruelles ?',
          sw: 'Ninawezaje kupunguza maumivu ya hedhi?'
        },
        answer: {
          en: 'You can try using a heating pad on your lower abdomen, taking over-the-counter pain relievers like ibuprofen, gentle exercise like walking or yoga, and avoiding caffeine and salty foods. Staying hydrated by drinking plenty of water can also help reduce bloating and cramps. If pain is severe, consult a healthcare provider.',
          fr: 'Vous pouvez essayer d\'utiliser un coussin chauffant sur le bas de votre abdomen, de prendre des analgésiques en vente libre comme l\'ibuprofène, de faire de l\'exercice doux comme la marche ou le yoga, et d\'éviter la caféine et les aliments salés. Rester hydraté en buvant beaucoup d\'eau peut également aider à réduire les ballonnements et les crampes. Si la douleur est sévère, consultez un professionnel de la santé.',
          sw: 'Unaweza kujaribu kutumia pedi ya joto kwenye tumbo lako la chini, kunywa dawa za maumivu kama ibuprofen, kufanya mazoezi mepesi kama kutembea au yoga, na kuepuka kafeini na vyakula vya chumvi. Kukaa na maji ya kutosha kwa kunywa maji mengi kunaweza pia kusaidia kupunguza uvimbe na maumivu ya tumbo. Ikiwa maumivu ni makali, wasiliana na mtoa huduma za afya.'
        }
      },
      {
        question: {
          en: 'What is good menstrual hygiene?',
          fr: 'Qu\'est-ce qu\'une bonne hygiène menstruelle ?',
          sw: 'Usafi mzuri wa hedhi ni upi?'
        },
        answer: {
          en: 'Good menstrual hygiene includes changing your pad, tampon, or menstrual cup regularly (every 4-8 hours), washing your genital area with water daily, and washing your hands before and after changing products. This helps prevent infections.',
          fr: 'Une bonne hygiène menstruelle consiste à changer régulièrement votre serviette, tampon ou coupe menstruelle (toutes les 4 à 8 heures), à laver votre zone génitale à l\'eau tous les jours et à vous laver les mains avant et après avoir changé de produit. Cela aide à prévenir les infections.',
          sw: 'Usafi mzuri wa hedhi unajumuisha kubadilisha pedi, tamponi, au kikombe cha hedhi mara kwa mara (kila masaa 4-8), kuosha sehemu zako za siri kwa maji kila siku, na kunawa mikono kabla na baada ya kubadilisha bidhaa. Hii husaidia kuzuia maambukizi.'
        }
      },
      {
        question: {
          en: 'Why does my period smell?',
          fr: 'Pourquoi mes règles ont-elles une odeur ?',
          sw: 'Kwa nini hedhi yangu inanuka?'
        },
        answer: {
          en: 'It\'s normal for menstrual fluid to have a slight metallic or musky smell due to the blood and tissue. A strong, fishy, or unpleasant odor could be a sign of an infection, like bacterial vaginosis. Good hygiene, like changing pads/tampons regularly, can help. If the smell is very strong or concerning, see a doctor.',
          fr: 'Il est normal que le flux menstruel ait une légère odeur métallique ou musquée due au sang et aux tissus. Une odeur forte, de poisson ou désagréable pourrait être le signe d\'une infection, comme la vaginose bactérienne. Une bonne hygiène, comme changer régulièrement de serviettes/tampons, peut aider. Si l\'odeur est très forte ou préoccupante, consultez un médecin.',
          sw: 'Ni kawaida kwa damu ya hedhi kuwa na harufu kidogo ya chuma au uvundo kutokana na damu na tishu. Harufu kali, ya samaki, au isiyopendeza inaweza kuwa ishara ya maambukizi, kama vile bacterial vaginosis. Usafi mzuri, kama kubadilisha pedi/tamponi mara kwa mara, unaweza kusaidia. Ikiwa harufu ni kali sana au inakutia wasiwasi, muone daktari.'
        }
      },
      {
        question: {
          en: 'What is PMS and how can I manage it?',
          fr: 'Qu\'est-ce que le SPM et comment puis-je le gérer ?',
          sw: 'PMS ni nini na ninawezaje kuidhibiti?'
        },
        answer: {
          en: 'Premenstrual Syndrome (PMS) includes physical and emotional symptoms that many people experience in the days before their period. Symptoms can include mood swings, bloating, breast tenderness, and fatigue. To manage PMS, you can try regular exercise, a balanced diet with less salt and sugar, getting enough sleep, and stress-reducing activities like yoga or meditation. Over-the-counter pain relievers can help with cramps and headaches.',
          fr: 'Le Syndrome Prémenstruel (SPM) comprend des symptômes physiques et émotionnels que de nombreuses personnes ressentent dans les jours précédant leurs règles. Les symptômes peuvent inclure des sautes d\'humeur, des ballonnements, une sensibilité des seins et de la fatigue. Pour gérer le SPM, vous pouvez essayer de faire de l\'exercice régulièrement, d\'avoir une alimentation équilibrée avec moins de sel et de sucre, de dormir suffisamment et de pratiquer des activités réduisant le stress comme le yoga ou la méditation. Les analgésiques en vente libre peuvent aider à soulager les crampes et les maux de tête.',
          sw: 'Ugonjwa wa Kabla ya Hedhi (PMS) unajumuisha dalili za kimwili na kihisia ambazo watu wengi hupata katika siku za kabla ya hedhi. Dalili zinaweza kujumuisha mabadiliko ya hisia, kuvimbiwa, maumivu ya matiti, na uchovu. Ili kudhibiti PMS, unaweza kujaribu mazoezi ya mara kwa mara, mlo kamili wenye chumvi na sukari kidogo, kupata usingizi wa kutosha, na shughuli za kupunguza msongo kama yoga au kutafakari. Dawa za maumivu zinazopatikana bila agizo la daktari zinaweza kusaidia kwa maumivu ya tumbo na kichwa.'
        }
      },
      {
        question: {
          en: 'What\'s the difference between a pad, tampon, and menstrual cup?',
          fr: 'Quelle est la différence entre une serviette, un tampon et une coupe menstruelle ?',
          sw: 'Kuna tofauti gani kati ya pedi, tamponi, na kikombe cha hedhi?'
        },
        answer: {
          en: 'Pads are absorbent materials that stick to your underwear. Tampons are inserted into the vagina to absorb blood. Menstrual cups are flexible, reusable cups inserted into the vagina to collect blood. The best choice depends on your comfort, lifestyle, and personal preference.',
          fr: 'Les serviettes sont des matériaux absorbants qui se collent à vos sous-vêtements. Les tampons sont insérés dans le vagin pour absorber le sang. Les coupes menstruelles sont des coupes flexibles et réutilisables insérées dans le vagin pour recueillir le sang. Le meilleur choix dépend de votre confort, de votre style de vie et de vos préférences personnelles.',
          sw: 'Pedi ni vifaa vya kunyonya vinavyobandikwa kwenye chupi yako. Tamponi huingizwa ukeni kunyonya damu. Vikombe vya hedhi ni vikombe vinavyoweza kunyumbulika, vinavyoweza kutumika tena vinavyoingizwa ukeni kukusanya damu. Chaguo bora linategemea faraja yako, mtindo wa maisha, na upendeleo wa kibinafsi.'
        }
      },
      {
        question: {
          en: 'Is it safe to have sex on my period?',
          fr: 'Est-il sûr d\'avoir des rapports sexuels pendant mes règles ?',
          sw: 'Je, ni salama kufanya ngono nikiwa kwenye hedhi?'
        },
        answer: {
          en: 'Yes, it is generally safe to have sex during your period. It can even help relieve menstrual cramps for some people. However, it can be messy, and there is still a small risk of pregnancy and a higher risk of transmitting or contracting STIs, so using a condom is recommended.',
          fr: 'Oui, il est généralement sûr d\'avoir des rapports sexuels pendant vos règles. Cela peut même aider à soulager les crampes menstruelles pour certaines personnes. Cependant, cela peut être salissant, et il y a toujours un faible risque de grossesse et un risque plus élevé de transmettre ou de contracter des IST, donc l\'utilisation d\'un préservatif est recommandée.',
          sw: 'Ndio, kwa ujumla ni salama kufanya ngono wakati wa hedhi. Inaweza hata kusaidia kupunguza maumivu ya hedhi kwa baadhi ya watu. Hata hivyo, inaweza kuwa chafu, na bado kuna hatari ndogo ya kupata mimba na hatari kubwa zaidi ya kuambukiza au kuambukizwa magonjwa ya zinaa, kwa hivyo kutumia kondomu kunapendekezwa.'
        }
      }
    ]
  },
  {
    id: 'body_puberty',
    title: {
      en: 'Body & Puberty',
      fr: 'Corps & Puberté',
      sw: 'Mwili na Ujana'
    },
    description: {
      en: 'Understanding the changes your body goes through.',
      fr: 'Comprendre les changements que votre corps traverse.',
      sw: 'Kuelewa mabadiliko ambayo mwili wako unapitia.'
    },
    questions: [
      {
        question: {
          en: 'Is it normal for one breast to be bigger than the other?',
          fr: 'Est-il normal qu\'un sein soit plus gros que l\'autre ?',
          sw: 'Je, ni kawaida titi moja kuwa kubwa kuliko lingine?'
        },
        answer: {
          en: 'Yes, it is very common and normal for breasts to be slightly different in size or shape. This is true for most people and is usually not a sign of any health problem.',
          fr: 'Oui, il est très courant et normal que les seins soient légèrement différents en taille ou en forme. C\'est le cas pour la plupart des gens et ce n\'est généralement pas le signe d\'un problème de santé.',
          sw: 'Ndio, ni kawaida sana kwa matiti kuwa na ukubwa au umbo tofauti kidogo. Hii ni kweli kwa watu wengi na kwa kawaida sio ishara ya tatizo lolote la kiafya.'
        }
      },
      {
        question: {
          en: 'What is vaginal discharge and is it normal?',
          fr: 'Qu\'est-ce que les pertes vaginales et est-ce normal ?',
          sw: 'Ute wa ukeni ni nini na je, ni kawaida?'
        },
        answer: {
          en: 'Vaginal discharge is a fluid that helps keep the vagina clean and moist. It\'s normal for it to change in color (clear to milky white) and consistency throughout your menstrual cycle. If you notice a strong odor, itching, or a significant change in color (like green or yellow), you should see a doctor as it could be a sign of infection.',
          fr: 'Les pertes vaginales sont un liquide qui aide à garder le vagin propre et humide. Il est normal qu\'il change de couleur (clair à blanc laiteux) et de consistance tout au long de votre cycle menstruel. Si vous remarquez une forte odeur, des démangeaisons ou un changement de couleur important (comme vert ou jaune), vous devriez consulter un médecin car cela pourrait être le signe d\'une infection.',
          sw: 'Ute wa ukeni ni majimaji yanayosaidia kuweka uke safi na unyevu. Ni kawaida kubadilika rangi (kutoka wazi hadi nyeupe ya maziwa) na uzito katika mzunguko wako wa hedhi. Ukiona harufu kali, muwasho, au mabadiliko makubwa ya rangi (kama kijani au njano), unapaswa kumuona daktari kwani inaweza kuwa ishara ya maambukizi.'
        }
      },
      {
        question: {
          en: 'Why do I have hair growing in new places?',
          fr: 'Pourquoi ai-je des poils qui poussent à de nouveaux endroits ?',
          sw: 'Kwa nini ninaota nywele sehemu mpya?'
        },
        answer: {
          en: 'This is a normal part of puberty for everyone. Hormonal changes cause hair to grow in new areas like the armpits, pubic area, and for boys, on the face, chest, and legs. It\'s a sign that your body is maturing into an adult body.',
          fr: 'C\'est une partie normale de la puberté pour tout le monde. Les changements hormonaux provoquent la pousse de poils dans de nouvelles zones comme les aisselles, la zone pubienne, et pour les garçons, sur le visage, la poitrine et les jambes. C\'est un signe que votre corps se transforme en corps d\'adulte.',
          sw: 'Hii ni sehemu ya kawaida ya kubalehe kwa kila mtu. Mabadiliko ya homoni husababisha nywele kuota sehemu mpya kama kwapani, sehemu za siri, na kwa wavulana, usoni, kifuani, na miguuni. Ni ishara kwamba mwili wako unakomaa na kuwa wa mtu mzima.'
        }
      },
      {
        question: {
          en: 'What are wet dreams?',
          fr: 'Que sont les rêves humides ?',
          sw: 'Ndoto nyevu ni nini?'
        },
        answer: {
          en: 'Wet dreams (nocturnal emissions) are when a person ejaculates in their sleep. They are a normal and common part of puberty for boys and men. They are an involuntary sign that the reproductive system is working and are not something you can control.',
          fr: 'Les rêves humides (émissions nocturnes) se produisent lorsqu\'une personne éjacule pendant son sommeil. C\'est une partie normale et courante de la puberté pour les garçons et les hommes. C\'est un signe involontaire que le système reproducteur fonctionne et ce n\'est pas quelque chose que vous pouvez contrôler.',
          sw: 'Ndoto nyevu (kutokwa na shahawa usiku) ni wakati mtu anatoa shahawa akiwa amelala. Ni sehemu ya kawaida ya kubalehe kwa wavulana na wanaume. Ni ishara isiyo ya hiari kwamba mfumo wa uzazi unafanya kazi na si kitu unachoweza kudhibiti.'
        }
      },
      {
        question: {
          en: 'Why do I have more body odor now?',
          fr: 'Pourquoi ai-je plus d\'odeur corporelle maintenant ?',
          sw: 'Kwa nini nina harufu mbaya ya mwili sasa?'
        },
        answer: {
          en: 'During puberty, your sweat glands become more active, especially the apocrine glands in your armpits and groin. When sweat from these glands mixes with bacteria on your skin, it can cause body odor. This is a normal part of growing up. To manage it, you can shower daily with soap, use deodorant or antiperspirant, and wear clean clothes. It\'s a normal change everyone goes through.',
          fr: 'Pendant la puberté, vos glandes sudoripares deviennent plus actives, en particulier les glandes apocrines dans vos aisselles et votre aine. Lorsque la sueur de ces glandes se mélange avec les bactéries sur votre peau, cela peut provoquer une odeur corporelle. C\'est une partie normale de la croissance. Pour la gérer, vous pouvez vous doucher quotidiennement avec du savon, utiliser un déodorant ou un anti-transpirant, et porter des vêtements propres. C\'est un changement normal que tout le monde traverse.',
          sw: 'Wakati wa kubalehe, tezi zako za jasho huwa na shughuli nyingi zaidi, hasa tezi za apocrine kwenye kwapa na sehemu za siri. Jasho kutoka kwenye tezi hizi linapochanganyikana na bakteria kwenye ngozi yako, linaweza kusababisha harufu mbaya ya mwili. Hii ni sehemu ya kawaida ya kukua. Ili kuidhibiti, unaweza kuoga kila siku kwa sabuni, kutumia deodorant au antiperspirant, na kuvaa nguo safi. Ni mabadiliko ya kawaida ambayo kila mtu hupitia.'
        }
      },
      {
        question: {
          en: 'Why is my voice changing?',
          fr: 'Pourquoi ma voix change-t-elle ?',
          sw: 'Kwa nini sauti yangu inabadilika?'
        },
        answer: {
          en: 'For boys, the voice deepens during puberty because the larynx (voice box) grows larger and the vocal cords get longer and thicker. This is caused by the hormone testosterone. Your voice might "crack" or sound squeaky sometimes as it changes, which is completely normal.',
          fr: 'Pour les garçons, la voix devient plus grave pendant la puberté car le larynx (boîte vocale) s\'agrandit et les cordes vocales s\'allongent et s\'épaississent. Ceci est causé par l\'hormone testostérone. Votre voix peut "craquer" ou sembler aiguë parfois pendant qu\'elle change, ce qui est tout à fait normal.',
          sw: 'Kwa wavulana, sauti inakuwa nzito wakati wa kubalehe kwa sababu zoloto (sanduku la sauti) inakuwa kubwa na nyuzi za sauti zinakuwa ndefu na nene. Hii husababishwa na homoni ya testosterone. Sauti yako inaweza "kupasukapasuka" au kusikika nyembamba wakati mwingine inapobadilika, jambo ambalo ni la kawaida kabisa.'
        }
      },
      {
        question: {
          en: 'What are stretch marks and are they normal?',
          fr: 'Que sont les vergetures et sont-elles normales ?',
          sw: 'Michirizi ni nini na je, ni ya kawaida?'
        },
        answer: {
          en: 'Stretch marks are lines that appear on the skin when it stretches or shrinks quickly, such as during growth spurts in puberty, pregnancy, or rapid weight changes. They are very common and completely normal. They often start as reddish or purplish lines and fade to a lighter, silvery color over time. They are not harmful.',
          fr: 'Les vergetures sont des lignes qui apparaissent sur la peau lorsqu\'elle s\'étire ou se rétrécit rapidement, comme lors des poussées de croissance à la puberté, de la grossesse ou des changements de poids rapides. Elles sont très courantes et tout à fait normales. Elles commencent souvent par des lignes rougeâtres ou violacées et s\'estompent avec le temps pour prendre une couleur plus claire et argentée. Elles ne sont pas nocives.',
          sw: 'Michirizi ni mistari inayoonekana kwenye ngozi inaponyooka au kusinyaa haraka, kama vile wakati wa ukuaji wa haraka katika ujana, ujauzito, au mabadiliko ya haraka ya uzito. Ni ya kawaida sana na ni jambo la kawaida kabisa. Mara nyingi huanza kama mistari myekundu au ya zambarau na hufifia na kuwa rangi nyepesi, ya fedha baada ya muda. Sio hatari.'
        }
      }
    ]
  },
  {
    id: 'mental_health',
    title: {
      en: 'Mental Health',
      fr: 'Santé Mentale',
      sw: 'Afya ya Akili'
    },
    description: {
      en: 'Understanding and managing your mental wellbeing.',
      fr: 'Comprendre et gérer votre bien-être mental.',
      sw: 'Kuelewa na kudhibiti ustawi wako wa akili.'
    },
    questions: [
      {
        question: {
          en: 'What\'s the difference between feeling sad and depression?',
          fr: 'Quelle est la différence entre se sentir triste et la dépression ?',
          sw: 'Kuna tofauti gani kati ya kujisikia huzuni na unyogovu?'
        },
        answer: {
          en: 'Sadness is a normal human emotion that usually passes with time. Depression is a medical illness that involves persistent feelings of sadness, hopelessness, and loss of interest for at least two weeks. Depression affects how you feel, think, and behave and can lead to a variety of emotional and physical problems. Unlike sadness, depression often requires treatment to get better.',
          fr: 'La tristesse est une émotion humaine normale qui passe généralement avec le temps. La dépression est une maladie médicale qui implique des sentiments persistants de tristesse, de désespoir et de perte d\'intérêt pendant au moins deux semaines. La dépression affecte ce que vous ressentez, pensez et comment vous vous comportez et peut entraîner divers problèmes émotionnels et physiques. Contrairement à la tristesse, la dépression nécessite souvent un traitement pour s\'améliorer.',
          sw: 'Huzuni ni hisia ya kawaida ya kibinadamu ambayo kwa kawaida hupita na wakati. Unyogovu ni ugonjwa wa kimatibabu unaohusisha hisia za kudumu za huzuni, kukata tamaa, na kupoteza hamu kwa angalau wiki mbili. Unyogovu huathiri jinsi unavyojisikia, kufikiri, na kutenda na unaweza kusababisha matatizo mbalimbali ya kihisia na kimwili. Tofauti na huzuni, unyogovu mara nyingi huhitaji matibabu ili kuwa bora.'
        }
      },
      {
        question: {
          en: 'How can I help a friend who is struggling with their mental health?',
          fr: 'Comment puis-je aider un ami qui a des difficultés avec sa santé mentale ?',
          sw: 'Ninawezaje kumsaidia rafiki anayepambana na afya yake ya akili?'
        },
        answer: {
          en: 'Listen without judgment, let them know you care, and encourage them to talk to a trusted adult or a professional. Offer to help them find resources or go with them to an appointment. Avoid saying things like "just cheer up." It\'s also important to take care of your own mental health and set boundaries.',
          fr: 'Écoutez sans juger, faites-leur savoir que vous vous souciez d\'eux et encouragez-les à parler à un adulte de confiance ou à un professionnel. Proposez de les aider à trouver des ressources ou de les accompagner à un rendez-vous. Évitez de dire des choses comme "sois juste plus joyeux". Il est également important de prendre soin de votre propre santé mentale et de fixer des limites.',
          sw: 'Sikiliza bila kuhukumu, wajulishe unawajali, na wahimize wazungumze na mtu mzima anayeaminika au mtaalamu. Toa msaada wa kuwatafutia rasilimali au kwenda nao kwenye miadi. Epuka kusema vitu kama "changamka tu." Pia ni muhimu kutunza afya yako ya akili na kuweka mipaka.'
        }
      },
      {
        question: {
          en: 'What are panic attacks and what should I do if I have one?',
          fr: 'Que sont les attaques de panique et que dois-je faire si j\'en ai une ?',
          sw: 'Mashambulizi ya hofu ni nini na nifanye nini nikiwa nayo?'
        },
        answer: {
          en: 'A panic attack is a sudden episode of intense fear that triggers severe physical reactions when there is no real danger. During an attack, try to focus on your breathing: breathe in slowly for 4 seconds, hold for 1-2 seconds, and breathe out slowly for 6 seconds. Remind yourself that the feelings will pass and you are safe. Ground yourself by noticing 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, and 1 thing you can taste.',
          fr: 'Une attaque de panique est un épisode soudain de peur intense qui déclenche des réactions physiques sévères en l\'absence de danger réel. Pendant une crise, essayez de vous concentrer sur votre respiration : inspirez lentement pendant 4 secondes, retenez votre souffle pendant 1-2 secondes et expirez lentement pendant 6 secondes. Rappelez-vous que les sensations passeront et que vous êtes en sécurité. Ancrez-vous en remarquant 5 choses que vous pouvez voir, 4 choses que vous pouvez toucher, 3 choses que vous pouvez entendre, 2 choses que vous pouvez sentir et 1 chose que vous pouvez goûter.',
          sw: 'Shambulio la hofu ni tukio la ghafla la hofu kali linalosababisha miitikio mikali ya kimwili wakati hakuna hatari halisi. Wakati wa shambulio, jaribu kuzingatia upumuaji wako: vuta pumzi polepole kwa sekunde 4, shikilia kwa sekunde 1-2, na toa pumzi polepole kwa sekunde 6. Jikumbushe kwamba hisia hizo zitapita na uko salama. Jitulize kwa kuona vitu 5 unavyoweza kuona, vitu 4 unavyoweza kugusa, vitu 3 unavyoweza kusikia, vitu 2 unavyoweza kunusa, na kitu 1 unavyoweza kuonja.'
        }
      },
      {
        question: {
          en: 'Is it okay to talk about my feelings?',
          fr: 'Est-ce que c\'est bien de parler de mes sentiments ?',
          sw: 'Je, ni sawa kuzungumzia hisia zangu?'
        },
        answer: {
          en: 'Absolutely. Talking about your feelings is a sign of strength and is very important for your mental health. It helps you process emotions, feel less alone, and can help others understand what you\'re going through. You can talk to friends, family, a teacher, a counselor, or anyone you trust. Keeping feelings bottled up can make them feel worse over time.',
          fr: 'Absolument. Parler de vos sentiments est un signe de force et est très important pour votre santé mentale. Cela vous aide à traiter les émotions, à vous sentir moins seul et peut aider les autres à comprendre ce que vous traversez. Vous pouvez parler à des amis, à votre famille, à un enseignant, à un conseiller ou à toute personne en qui vous avez confiance. Garder ses sentiments pour soi peut les aggraver avec le temps.',
          sw: 'Kabisa. Kuzungumzia hisia zako ni ishara ya nguvu na ni muhimu sana kwa afya yako ya akili. Inakusaidia kuchakata hisia, kujisikia upweke kidogo, na inaweza kusaidia wengine kuelewa unachopitia. Unaweza kuzungumza na marafiki, familia, mwalimu, mshauri, au mtu yeyote unayemwamini. Kuficha hisia kunaweza kuzifanya ziwe mbaya zaidi baada ya muda.'
        }
      }
    ]
  },
  {
    id: 'general_health',
    title: {
      en: 'General Health Concerns',
      fr: 'Préoccupations Générales de Santé',
      sw: 'Masuala ya Jumla ya Afya'
    },
    description: {
      en: 'Answers to common but sometimes embarrassing health questions.',
      fr: 'Réponses aux questions de santé courantes mais parfois embarrassantes.',
      sw: 'Majibu ya maswali ya kawaida lakini wakati mwingine ya aibu ya kiafya.'
    },
    questions: [
      {
        question: {
          en: 'Why do I still wet the bed sometimes?',
          fr: 'Pourquoi est-ce que je fais encore pipi au lit parfois ?',
          sw: 'Kwa nini bado ninakojoa kitandani wakati mwingine?'
        },
        answer: {
          en: 'Bedwetting (nocturnal enuresis) can happen for many reasons, even in older children and adults. It can be caused by a small bladder, deep sleep, stress, or underlying medical conditions like a urinary tract infection. It\'s important not to feel ashamed. Limiting fluids before bed and urinating right before sleep can help. If it persists, it\'s a good idea to talk to a healthcare provider.',
          fr: 'L\'énurésie nocturne (pipi au lit) peut se produire pour de nombreuses raisons, même chez les enfants plus âgés et les adultes. Elle peut être causée par une petite vessie, un sommeil profond, le stress ou des conditions médicales sous-jacentes comme une infection urinaire. Il est important de ne pas avoir honte. Limiter les liquides avant de se coucher et uriner juste avant de dormir peut aider. Si cela persiste, il est conseillé de parler à un professionnel de la santé.',
          sw: 'Kukojoa kitandani (enuresis ya usiku) kunaweza kutokea kwa sababu nyingi, hata kwa watoto wakubwa na watu wazima. Inaweza kusababishwa na kibofu kidogo, usingizi mzito, msongo wa mawazo, au hali za kiafya kama maambukizi ya njia ya mkojo. Ni muhimu kutojisikia aibu. Kupunguza unywaji wa maji kabla ya kulala na kukojoa kabla tu ya kulala kunaweza kusaidia. Ikiendelea, ni wazo zuri kuzungumza na mtoa huduma za afya.'
        }
      },
      {
        question: {
          en: 'What causes bad breath?',
          fr: 'Qu\'est-ce qui cause la mauvaise haleine ?',
          sw: 'Nini husababisha harufu mbaya mdomoni?'
        },
        answer: {
          en: 'Bad breath is usually caused by bacteria in the mouth. Poor dental hygiene is a common cause. Other causes include certain foods, smoking, dry mouth, and some medical conditions. Brushing your teeth and tongue twice a day, flossing daily, and drinking plenty of water can help. If it doesn\'t improve, see a dentist or doctor.',
          fr: 'La mauvaise haleine est généralement causée par des bactéries dans la bouche. Une mauvaise hygiène dentaire est une cause fréquente. D\'autres causes incluent certains aliments, le tabagisme, la bouche sèche et certaines conditions médicales. Se brosser les dents et la langue deux fois par jour, utiliser du fil dentaire quotidiennement et boire beaucoup d\'eau peut aider. Si cela ne s\'améliore pas, consultez un dentiste ou un médecin.',
          sw: 'Harufu mbaya mdomoni kwa kawaida husababishwa na bakteria mdomoni. Usafi duni wa meno ni sababu ya kawaida. Sababu zingine ni pamoja na vyakula fulani, uvutaji sigara, mdomo mkavu, na baadhi ya hali za kiafya. Kupiga mswaki meno na ulimi mara mbili kwa siku, kutumia uzi wa meno kila siku, na kunywa maji mengi kunaweza kusaidia. Ikiwa haibadiliki, muone daktari wa meno au daktari.'
        }
      },
      {
        question: {
          en: 'Is it normal to have thoughts about hurting myself?',
          fr: 'Est-il normal d\'avoir des pensées d\'automutilation ?',
          sw: 'Je, ni kawaida kuwa na mawazo ya kujidhuru?'
        },
        answer: {
          en: 'Having thoughts of self-harm or suicide is a sign of significant emotional distress. While it\'s more common than you might think, it\'s very important to take these thoughts seriously. It does not mean you are weak or flawed. It means you are in pain and need support. Please talk to a trusted adult, a friend, a doctor, or a mental health professional immediately. There is help available, and you don\'t have to go through this alone.',
          fr: 'Avoir des pensées d\'automutilation ou de suicide est un signe de détresse émotionnelle importante. Bien que ce soit plus courant que vous ne le pensez, il est très important de prendre ces pensées au sérieux. Cela ne signifie pas que vous êtes faible ou défectueux. Cela signifie que vous souffrez et que vous avez besoin de soutien. Veuillez en parler immédiatement à un adulte de confiance, un ami, un médecin ou un professionnel de la santé mentale. De l\'aide est disponible, et vous n\'avez pas à traverser cela seul.',
          sw: 'Kuwa na mawazo ya kujidhuru au kujiua ni ishara ya msongo mkubwa wa kihisia. Ingawa ni jambo la kawaida kuliko unavyoweza kufikiria, ni muhimu sana kuyachukulia mawazo haya kwa uzito. Haimaanishi wewe ni dhaifu au una kasoro. Inamaanisha una maumivu na unahitaji msaada. Tafadhali zungumza na mtu mzima unayemwamini, rafiki, daktari, au mtaalamu wa afya ya akili mara moja. Msaada unapatikana, na si lazima upitie hili peke yako.'
        }
      },
      {
        question: {
          en: 'Why do I fart so much? Is it normal?',
          fr: 'Pourquoi est-ce que je pète autant ? Est-ce normal ?',
          sw: 'Kwa nini ninajamba sana? Je, ni kawaida?'
        },
        answer: {
          en: 'Farting (passing gas) is a completely normal bodily function. It\'s a result of gas building up in your digestive system. This gas comes from swallowing air and from the breakdown of food by bacteria in your gut. Certain foods like beans, lentils, broccoli, and carbonated drinks can cause more gas. While it can be embarrassing, everyone farts. If you have excessive gas along with pain, bloating, or changes in your bowel habits, it might be a good idea to talk to a doctor.',
          fr: 'Péter (dégager des gaz) est une fonction corporelle tout à fait normale. C\'est le résultat de l\'accumulation de gaz dans votre système digestif. Ce gaz provient de l\'air que vous avalez et de la décomposition des aliments par les bactéries dans votre intestin. Certains aliments comme les haricots, les lentilles, le brocoli et les boissons gazeuses peuvent provoquer plus de gaz. Bien que cela puisse être embarrassant, tout le monde pète. Si vous avez des gaz excessifs accompagnés de douleurs, de ballonnements ou de changements dans vos habitudes intestinales, il pourrait être judicieux de consulter un médecin.',
          sw: 'Kujamba (kupitisha gesi) ni kazi ya kawaida kabisa ya mwili. Ni matokeo ya gesi kujijenga katika mfumo wako wa usagaji chakula. Gesi hii hutokana na kumeza hewa na kutokana na kuvunjwa kwa chakula na bakteria kwenye utumbo wako. Vyakula fulani kama maharagwe, dengu, brokoli, na vinywaji vya kaboni vinaweza kusababisha gesi zaidi. Ingawa inaweza kuwa aibu, kila mtu hujamba. Ikiwa una gesi nyingi pamoja na maumivu, kuvimbiwa, au mabadiliko katika tabia yako ya haja, inaweza kuwa wazo zuri kuzungumza na daktari.'
        }
      }
    ]
  }
];
