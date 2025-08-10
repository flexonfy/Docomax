export type AddictionType = 'smoking' | 'alcohol' | 'drugs' | 'pornography';

export const addictionTips: Record<AddictionType, { en: string[]; fr: string[]; sw: string[] }> = {
  smoking: {
    en: [
      "Identify your triggers and plan how to deal with them.",
      "Delay for 10 minutes when you feel a craving. The urge will likely pass.",
      "Try nicotine replacement therapy like patches or gum.",
      "Chew on sugarless gum or hard candy to fight cravings.",
      "Don't have 'just one'. It often leads to another.",
      "Get physical. Even short bursts of activity can reduce cravings.",
      "Practice relaxation techniques like deep breathing.",
      "Call a friend or family member for support.",
      "Remind yourself of the benefits of quitting: better health, more money.",
      "Celebrate your milestones, no matter how small."
    ],
    fr: [
      "Identifiez vos déclencheurs et planifiez comment y faire face.",
      "Attendez 10 minutes lorsque vous ressentez une envie. L'envie passera probablement.",
      "Essayez la thérapie de remplacement de la nicotine comme les patchs ou la gomme.",
      "Mâchez de la gomme sans sucre ou des bonbons durs pour combattre les envies.",
      "Ne vous contentez pas d'un seul. Cela en entraîne souvent un autre.",
      "Bougez. Même de courtes périodes d'activité peuvent réduire les envies.",
      "Pratiquez des techniques de relaxation comme la respiration profonde.",
      "Appelez un ami ou un membre de votre famille pour obtenir du soutien.",
      "Rappelez-vous les avantages d'arrêter : meilleure santé, plus d'argent.",
      "Célébrez vos étapes importantes, aussi petites soient-elles."
    ],
    sw: [
      "Tambua vishawishi vyako na panga jinsi ya kukabiliana navyo.",
      "Chelewa kwa dakika 10 unapohisi hamu. Hamu hiyo itaisha.",
      "Jaribu tiba ya badala ya nikotini kama vile viraka au gamu.",
      "Tafuna gamu isiyo na sukari au peremende ngumu kupambana na hamu.",
      "Usiwe na 'moja tu'. Mara nyingi husababisha nyingine.",
      "Fanya mazoezi. Hata mazoezi mafupi yanaweza kupunguza hamu.",
      "Fanya mazoezi ya kupumzika kama kupumua kwa kina.",
      "Piga simu kwa rafiki au mwanafamilia kwa msaada.",
      "Jikumbushe faida za kuacha: afya bora, pesa zaidi.",
      "Sherehekea hatua zako, haijalishi ni ndogo kiasi gani."
    ]
  },
  alcohol: {
    en: [
      "Avoid high-risk situations and people who encourage drinking.",
      "Develop new, healthy hobbies to fill your time.",
      "Build a strong support network of friends and family.",
      "Learn to say 'no' politely but firmly.",
      "Manage stress with exercise, meditation, or hobbies.",
      "Eat regular, healthy meals to avoid cravings.",
      "Find healthy ways to cope with difficult emotions.",
      "Don't keep alcohol in your home.",
      "Think about the negative consequences of drinking.",
      "Reward yourself for reaching sobriety milestones."
    ],
    fr: [
      "Évitez les situations à haut risque et les personnes qui encouragent à boire.",
      "Développez de nouveaux passe-temps sains pour occuper votre temps.",
      "Construisez un réseau de soutien solide d'amis et de famille.",
      "Apprenez à dire 'non' poliment mais fermement.",
      "Gérez le stress avec de l'exercice, de la méditation ou des passe-temps.",
      "Mangez des repas réguliers et sains pour éviter les envies.",
      "Trouvez des moyens sains de faire face aux émotions difficiles.",
      "Ne gardez pas d'alcool à la maison.",
      "Pensez aux conséquences négatives de la consommation d'alcool.",
      "Récompensez-vous pour avoir atteint des étapes de sobriété."
    ],
    sw: [
      "Epuka hali za hatari na watu wanaokuhimiza kunywa.",
      "Tengeneza burudani mpya na zenye afya ili kujaza muda wako.",
      "Jenga mtandao imara wa msaada wa marafiki na familia.",
      "Jifunze kusema 'hapana' kwa upole lakini kwa uthabiti.",
      "Dhibiti msongo kwa mazoezi, kutafakari, au burudani.",
      "Kula milo ya kawaida na yenye afya ili kuepuka hamu.",
      "Tafuta njia zenye afya za kukabiliana na hisia ngumu.",
      "Usiweke pombe nyumbani kwako.",
      "Fikiria juu ya matokeo mabaya ya kunywa.",
      "Jizawadie kwa kufikia hatua za ulevi."
    ]
  },
  drugs: {
    en: [
      "Distance yourself from people who use drugs.",
      "Seek professional help from a counselor or support group.",
      "Exercise regularly to boost your mood and reduce stress.",
      "Find new passions and interests to focus on.",
      "Develop a daily routine to provide structure.",
      "Be honest with loved ones about your struggle.",
      "Learn your triggers and develop coping strategies.",
      "Practice mindfulness and stay in the present moment.",
      "Remember that recovery is a journey, not a destination.",
      "Celebrate every step of progress you make."
    ],
    fr: [
      "Éloignez-vous des personnes qui consomment de la drogue.",
      "Cherchez l'aide d'un professionnel, d'un conseiller ou d'un groupe de soutien.",
      "Faites de l'exercice régulièrement pour améliorer votre humeur et réduire le stress.",
      "Trouvez de nouvelles passions et de nouveaux intérêts sur lesquels vous concentrer.",
      "Développez une routine quotidienne pour vous structurer.",
      "Soyez honnête avec vos proches au sujet de votre lutte.",
      "Apprenez à connaître vos déclencheurs et développez des stratégies d'adaptation.",
      "Pratiquez la pleine conscience et restez dans le moment présent.",
      "N'oubliez pas que le rétablissement est un voyage, pas une destination.",
      "Célébrez chaque étape de progrès que vous faites."
    ],
    sw: [
      "Jitenge na watu wanaotumia dawa za kulevya.",
      "Tafuta msaada wa kitaalamu kutoka kwa mshauri au kikundi cha msaada.",
      "Fanya mazoezi mara kwa mara ili kuboresha hisia zako na kupunguza msongo.",
      "Tafuta shauku na maslahi mapya ya kuzingatia.",
      "Tengeneza utaratibu wa kila siku ili kutoa muundo.",
      "Kuwa mkweli kwa wapendwa wako kuhusu mapambano yako.",
      "Jifunze vichocheo vyako na tengeneza mikakati ya kukabiliana.",
      "Fanya mazoezi ya kuzingatia na kaa katika wakati uliopo.",
      "Kumbuka kwamba kupona ni safari, sio marudio.",
      "Sherehekea kila hatua ya maendeleo unayofanya."
    ]
  },
  pornography: {
    en: [
      "Understand the reasons behind your use.",
      "Install content blockers on your devices.",
      "Find alternative ways to deal with stress or boredom.",
      "Engage in real-life social activities.",
      "Set clear, achievable goals for reducing use.",
      "Talk to a partner or trusted friend about your goals.",
      "Focus on hobbies that don't involve screens.",
      "Practice mindfulness to manage urges.",
      "If you slip up, don't get discouraged. Get back on track.",
      "Consider seeking therapy for underlying issues."
    ],
    fr: [
      "Comprenez les raisons de votre consommation.",
      "Installez des bloqueurs de contenu sur vos appareils.",
      "Trouvez des moyens alternatifs de gérer le stress ou l'ennui.",
      "Participez à des activités sociales réelles.",
      "Fixez-vous des objectifs clairs et réalisables pour réduire votre consommation.",
      "Parlez de vos objectifs à un partenaire ou à un ami de confiance.",
      "Concentrez-vous sur des passe-temps qui n'impliquent pas d'écrans.",
      "Pratiquez la pleine conscience pour gérer les envies.",
      "Si vous faites une rechute, ne vous découragez pas. Remettez-vous sur la bonne voie.",
      "Envisagez de suivre une thérapie pour les problèmes sous-jacents."
    ],
    sw: [
      "Elewa sababu za matumizi yako.",
      "Weka vizuizi vya maudhui kwenye vifaa vyako.",
      "Tafuta njia mbadala za kukabiliana na msongo au uchovu.",
      "Shiriki katika shughuli za kijamii za maisha halisi.",
      "Weka malengo wazi, yanayoweza kufikiwa ya kupunguza matumizi.",
      "Zungumza na mpenzi au rafiki unayemwamini kuhusu malengo yako.",
      "Zingatia burudani zisizohusisha skrini.",
      "Fanya mazoezi ya kuzingatia ili kudhibiti hamu.",
      "Ukiteleza, usikate tamaa. Rudi kwenye mstari.",
      "Fikiria kutafuta tiba kwa masuala ya msingi."
    ]
  }
};
