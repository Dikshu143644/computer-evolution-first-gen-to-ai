/**
 * Computer Evolution — From First Generation to Modern AI
 * Complete 18-Chapter Curriculum Data (Marathi-First with English Technical Terms)
 * Grade Level Adaptations:
 * - Level 1 (Std 1-4): Very simple language, visual analogies, everyday comparisons
 * - Level 2 (Std 5-7): Concepts, comparisons, timelines, simple technical vocabulary
 * - Level 3 (Std 8-10): Detailed history, dates, inventors, hardware concepts, technical depth
 */

export const chaptersData = [
  {
    id: 1,
    chapterNumber: "०१",
    title: "Brainstorm — Computer म्हणजे काय?",
    subtitle: "What is a Computer? — समजून घेऊया संगणकाचे खरे रूप",
    purpose: "इतिहास शिकण्यापूर्वी विद्यार्थ्यांमध्ये संगणकाबद्दल कुतूहल निर्माण करणे.",
    gradeSuitability: "Std 1 - 10",
    coverTag: "मंथन व पायाभूत संकल्पना",
    colorGradient: "from-blue-600 to-indigo-800",
    icon: "💡",
    difficulty: {
      level1: "आपल्या घरात आणि शाळेत संगणक कुठे कुठे असतो? सोपी उदाहरणे.",
      level2: "संगणकाची व्याख्या, इनपुट-प्रोसेस-आउटपुट चक्र आणि स्मार्टफोनची तुलना.",
      level3: "संगणकाची तांत्रिक व्याख्या, डेटा प्रोसेसिंग, प्रोग्राम एक्झिक्युशन आणि AI ची मर्यादा."
    },
    slides: [
      {
        id: "1-1",
        type: "question",
        title: "तुमच्या मते Computer म्हणजे काय?",
        englishTitle: "What do you think a Computer is?",
        headline: "चला विचार करूया!",
        questionPrompt: "जेव्हा तुम्ही 'Computer' हा शब्द ऐकता, तेव्हा तुमच्या डोळ्यासमोर काय येते?",
        thoughtStarters: [
          "फक्त कीबोर्ड आणि स्क्रीन असलेली मोठी पेटी?",
          "खेळ खेळण्याचे आणि चित्रपट पाहण्याचे साधन?",
          "हिशोब करणारी एक अतिवेगवान इलेक्ट्रॉनिक मशीन?"
        ],
        levelContent: {
          level1: "संगणक म्हणजे आपल्या मित्रासारखा एक हुशार इलेक्ट्रॉनिक मदतनीस, जो आपण सांगितलेले काम एका सेकंदात करतो!",
          level2: "संगणक (Computer) हे एक इलेक्ट्रॉनिक उपकरण आहे जे माहिती (Data) स्वीकारते, त्यावर प्रक्रिया (Process) करते आणि आपल्याला योग्य उत्तर (Output) देते.",
          level3: "संगणक हे प्रोग्राम करण्यायोग्य (programmable) इलेक्ट्रॉनिक डिव्हाइस आहे. ते इनपुट डेटा स्वीकारून, साठवून ठेवलेल्या सूचनांच्या (Instructions) आधारे अचूक गणना व लॉजिकल ऑपरेशन्स करते."
        },
        interaction: "open_brainstorm",
        source: "Computer History Museum — 'What is a Computer?'"
      },
      {
        id: "1-2",
        type: "poll",
        title: "Computer म्हणजे फक्त Desktop किंवा Laptop आहे का?",
        englishTitle: "Is a Computer ONLY a Laptop or Desktop?",
        pollQuestion: "तुमचे मत काय आहे? मतदान करा:",
        options: [
          { text: "हो, फक्त लॅपटॉप किंवा डेस्कटॉपच संगणक असतात", percentage: 18, isCorrect: false },
          { text: "नाही! इतर अनेक उपकरणेही संगणकच आहेत", percentage: 76, isCorrect: true },
          { text: "मला नक्की माहित नाही", percentage: 6, isCorrect: false }
        ],
        explanation: "संगणक म्हणजे केवळ टेबलवर ठेवलेला डबा नव्हे! आज आपल्या आजूबाजूला असलेल्या अनेक उपकरणांमध्ये आत एक संगणक लपलेला असतो.",
        source: "Stanford Computer Science Archive"
      },
      {
        id: "1-3",
        type: "reveal",
        title: "Mobile हा Computer आहे का?",
        englishTitle: "Is your Smartphone a Computer?",
        prompt: "तुमच्या किंवा पालकांच्या हातातील स्मार्टफोन... तो खरोखर संगणक आहे का?",
        revealButtonText: "उत्तर आणि सत्य पहा 🔍",
        answer: "हो, अगदी १००%!",
        answerDetails: [
          "📱 स्मार्टफोनमध्ये एक शक्तिशाली Processor (CPU) असतो.",
          "🧠 तात्पुरती माहिती ठेवण्यासाठी RAM (Memory) असते.",
          "💾 फोटो, ॲप्स साठवण्यासाठी Storage (Flash Memory) असते.",
          "⚙️ Android किंवा iOS सारखी Operating System असते.",
          "📡 कॅमेरा, जीपीएस, इंटरनेट आणि सेन्सर्स असतात."
        ],
        funFact: "आजच्या एका सामान्य स्मार्टफोनमध्ये १९६९ मध्ये चंद्रावर गेलेल्या अपोलो ११ (Apollo 11) यानापेक्षा लाखो पटींनी जास्त कम्प्युटिंग पॉवर आहे!",
        source: "NASA History Division & Computer History Museum"
      },
      {
        id: "1-4",
        type: "diagram",
        title: "Computer काम कसं करतो?",
        englishTitle: "How does a Computer Work? (IPOS Cycle)",
        concept: "Input ➔ Process ➔ Output ➔ Storage",
        diagramSteps: [
          { step: "१. Input (माहिती देणे)", desc: "कीबोर्ड, माउस, माइक किंवा कॅमेऱ्याद्वारे माहिती संगणकात जाते.", icon: "⌨️" },
          { step: "२. Process (प्रक्रिया करणे)", desc: "CPU (मेंदू) त्या माहितीवर विचार करतो आणि हिशोब करतो.", icon: "⚙️" },
          { step: "३. Output (उत्तर दाखवणे)", desc: "स्क्रीन, स्पीकर किंवा प्रिंटरद्वारे आपल्याला निकाल मिळतो.", icon: "🖥️" },
          { step: "४. Storage (साठवून ठेवणे)", desc: "भविष्यात वापरण्यासाठी डेटा हार्ड ड्राईव्ह किंवा SSD मध्ये सुरक्षित राहतो.", icon: "💾" }
        ],
        realLifeAnalogy: "जसे स्वयंपाक करताना: कच्च्या भाज्या (Input) ➔ गॅसवर शिजवणे (Process) ➔ तयार जेवण (Output) ➔ उरलेले फ्रिजमध्ये ठेवणे (Storage)!",
        source: "IEEE Computer Society Education Board"
      },
      {
        id: "1-5",
        type: "concept",
        title: "Computer स्वतः विचार करतो का?",
        englishTitle: "Does a Computer Think on its Own?",
        mythBuster: "गैरसमज: संगणक स्वतःच्या मनाने विचार करतो.",
        reality: "सत्य: संगणक मानवाने लिहिलेल्या कोड आणि अल्गोरिदमवर चालतो.",
        points: [
          "पारंपरिक संगणक फक्त त्याला दिलेल्या सूचनांचे (Programs) तंतोतंत पालन करतो.",
          "आधुनिक AI (कृत्रिम बुद्धिमत्ता) लाखो उदाहरणांवरून पॅटर्न शिकते आणि हुशार वाटणारे उत्तरे देते.",
          "तरीही, संगणकाला भावना, जाणीव किंवा स्वतःची स्वतंत्र इच्छा नसते."
        ],
        discussionQuestion: "जर संगणक स्वतः विचार करत नाही, तर मग तो इतका हुशार कसा वाटतो?",
        source: "Alan Turing — 'Computing Machinery and Intelligence' (1950)"
      }
    ],
    recap: {
      points: [
        "संगणक म्हणजे केवळ डेस्कटॉप नव्हे; स्मार्टफोन, स्मार्टवॉच आणि कारमधील सिस्टीम हेही संगणकच आहेत.",
        "संगणकाचे मूळ काम: Input ➔ Process ➔ Output ➔ Storage.",
        "संगणक मानवाच्या समस्या सोडवण्यासाठी आणि गणना जलद करण्यासाठी बनवले गेले आहेत."
      ]
    },
    teacherNotes: "वर्गात विद्यार्थ्यांना विविध वस्तू दाखवा (घड्याळ, रिमोट, कॅल्क्युलेटर, फोन) आणि विचारा: यातील कशाकशात संगणक आहे? 'Human Computer' ॲक्टिव्हिटी घ्या."
  },

  {
    id: 2,
    chapterNumber: "०२",
    title: "Before Computers — Computer आधी जग कसं होतं?",
    subtitle: "Human Need for Calculation — मोजण्याच्या गरजेतून झालेला शोध",
    purpose: "मानवाला मोजण्याची गरज का भासली आणि त्यातून पहिली साधने कशी जन्माला आली हे स्पष्ट करणे.",
    gradeSuitability: "Std 1 - 10",
    coverTag: "प्राचीन ते यांत्रिक युग",
    colorGradient: "from-amber-600 to-indigo-900",
    icon: "🧮",
    difficulty: {
      level1: "हाताची बोटे, खडे आणि अबॅकस (Abacus) ने मोजणे.",
      level2: "अबॅकस ते पास्कलाइन (Pascaline) यांत्रिक कॅल्क्युलेटरचा प्रवास.",
      level3: "नेपियर्स बोन्स, पास्कलचे यांत्रिक चक्र, लेबनिझचे स्टेप रेकनर आणि पंच कार्ड्स."
    },
    slides: [
      {
        id: "2-1",
        type: "activity",
        title: "समजा जगात Calculator आणि Computer नसते तर?",
        englishTitle: "Imagine a World Without Calculators!",
        scenario: "जर तुम्हाला एका संपूर्ण जिल्ह्याची लोकसंख्या, १०,००० लोकांचे हिशोब किंवा धान्याचे मोजमाप कागदावर हाताने करायचे असेल, तर किती वेळ लागेल?",
        challenges: [
          "⏳ महिने किंवा वर्षे लागतील.",
          "❌ मानवी थकव्यामुळे चुका (Human Errors) होण्याची शक्यता खूप जास्त असेल.",
          "📜 नोंदी साठवण्यासाठी हजारो कागदी वह्यांची गरज पडेल."
        ],
        lesson: "मानवाला जलद, बिनचूक आणि न थकता हिशोब करण्याची गरज होती — याच गरजेतून संगणकाचा जन्म झाला!",
        source: "Science Museum, London — Early Calculating Devices"
      },
      {
        id: "2-2",
        type: "timeline_item",
        title: "सुरुवातीचे मोजमाप: बोटे, दगड आणि खुणा",
        englishTitle: "Early Counting: Fingers, Stones and Tally Marks",
        period: "प्राचीन काळ (हजारो वर्षांपूर्वी)",
        methods: [
          { name: "हाताची १० बोटे", desc: "मानवाने सुरुवातीला १० बोटांचा वापर केला (यामुळेच आपली १० अंकी दशांश पद्धत आली!)." },
          { name: "दगड आणि शिंपले", desc: "मेंढ्या आणि शेळ्या मोजण्यासाठी गोळा केलेले गारगोटी." },
          { name: "टॅली मार्क्स (हाडांवर खुणा)", desc: "इशांगो हाड (Ishango Bone) — आफ्रिकेत सापडलेले २०,००० वर्षे जुने मोजणीचे हाड!" }
        ],
        source: "Royal Belgian Institute of Natural Sciences (Ishango Bone)"
      },
      {
        id: "2-3",
        type: "concept",
        title: "अबॅकस (Abacus) — मानवाचे पहिले मोजणी यंत्र",
        englishTitle: "The Abacus — The First Calculation Aid",
        period: "सुमारे २४०० इ.स.पूर्व (मेसोपोटेमिया / चीन)",
        whatIsIt: "लाक्षणिक मण्यांच्या साहाय्याने बेरीज, वजाबाकी, गुणाकार आणि भागाकार जलद करण्याचे लाकडी चौकट यंत्र.",
        whySpecial: "हे जगातील पहिले मॅन्युअल कॅल्क्युलेशन टूल मानले जाते. आजही अनेक विद्यार्थी जलद गणितासाठी अबॅकस शिकतात!",
        source: "Computer History Museum — The Abacus Collection"
      },
      {
        id: "2-4",
        type: "milestone",
        title: "यांत्रिक कॅल्क्युलेटर: पास्कलाइन (Pascaline)",
        englishTitle: "Mechanical Calculators: Blaise Pascal (1642)",
        inventor: "ब्लेज पास्कल (Blaise Pascal) — फ्रान्स",
        year: 1642,
        howItWorked: "घड्याळासारखे दातेरी चाके (Gears) फिरवून आपोआप बेरीज आणि वजाबाकी करणारे पितळी यंत्र.",
        humanStory: "पास्कलने हे यंत्र आपल्या वडिलांना कर (Taxes) मोजताना होणारा त्रास वाचवण्यासाठी वयाच्या अवघ्या १९ व्या वर्षी बनवले!",
        source: "Musée des Arts et Métiers, Paris"
      },
      {
        id: "2-5",
        type: "concept",
        title: "पंच कार्ड्स (Punched Cards) — माहिती कोड करण्याचे रहस्य",
        englishTitle: "Punched Cards: Joseph Marie Jacquard (1804)",
        concept: "कागदाच्या किंवा कार्डबोर्डच्या कार्डवर छिद्रे (Holes) पाडून मशीनला सूचना देणे.",
        significance: "जॅकार्डने कपडे विणण्याच्या यंत्रासाठी छिद्रे असलेली कार्डे वापरली. छिद्र असणे (१) किंवा नसणे (०) — हीच पुढे जाऊन आधुनिक संगणकाची बायनरी (Binary) पद्धत बनली!",
        source: "Science Museum Group — Jacquard Loom and Punch Cards"
      },
      {
        id: "2-6",
        type: "diagram",
        title: "मानवाची गरज ➔ ऑटोमेशन (स्वयंचलितता)",
        englishTitle: "Human Need Leads to Automation",
        diagramSteps: [
          { step: "पुन्हा पुन्हा होणारे कंटाळवाणे काम", desc: "हजारो हिशोब आणि तक्ते हाताने तयार करणे", icon: "😫" },
          { step: "मॅन्युअल साधने", desc: "अबॅकस, कागद आणि पेन", icon: "🧮" },
          { step: "यांत्रिक गीअर्स", desc: "पास्कलाइन, लेबनिझचे कॅल्क्युलेटर", icon: "⚙️" },
          { step: "स्वयंचलित संगणक युग", desc: "मानवी चुका टाळण्यासाठी प्रोग्रामेबल मशीन!", icon: "🚀" }
        ],
        source: "Computer History Museum"
      }
    ],
    recap: {
      points: [
        "मानवाने बोटे आणि दगडांपासून सुरुवात करून अबॅकस बनवला.",
        "ब्लेज पास्कलने १६४२ मध्ये पहिले गियरवर चालणारे यांत्रिक कॅल्क्युलेटर 'Pascaline' बनवले.",
        "पंच कार्ड्सने दाखवून दिले की कागदावरील छिद्रांच्या आधारे मशीनला सूचना (Instructions) देता येतात."
      ]
    },
    teacherNotes: "विद्यार्थ्यांना वर्गात प्रत्यक्ष अबॅकस किंवा कागदावर छिद्रे पाडलेले कार्ड दाखवून माहिती कोड कशी होते ते सांगा."
  },

  {
    id: 3,
    chapterNumber: "०३",
    title: "Charles Babbage & Ada Lovelace",
    subtitle: "The Conceptual Birth of Programmable Computing",
    purpose: "चार्ल्स बॅबेज आणि एडा लव्हलेस यांचे ऐतिहासिक योगदान आणि 'संगणकाचा जनक' या संकल्पनेचे अचूक विश्लेषण.",
    gradeSuitability: "Std 1 - 10",
    coverTag: "संगणकाचे जनक व पहिली प्रोग्रामर",
    colorGradient: "from-purple-700 to-indigo-950",
    icon: "⚙️",
    difficulty: {
      level1: "चार्ल्स बॅबेज यांची मोठी पितळी यंत्रे आणि एडा लव्हलेसची संगणक चालवण्याची पहिली कल्पना.",
      level2: "Difference Engine (तक्ते मोजणे) आणि Analytical Engine (Store आणि Mill ची संकल्पना).",
      level3: "Analytical Engine चे आर्किटेक्चर (Store = Memory, Mill = CPU), एडा लव्हलेसचा बर्नाउली संख्यांचा अल्गोरिदम."
    },
    slides: [
      {
        id: "3-1",
        type: "question",
        title: "१८३० च्या दशकात Modern Computer ची कल्पना कोणी केली?",
        englishTitle: "Who Conceived the Modern Computer in the 1830s?",
        questionPrompt: "विजेचा किंवा इलेक्ट्रॉनिक्सचा शोध लागण्यापूर्वीच, निव्वळ वाफेवर आणि गीअर्सवर चालणाऱ्या संगणकाची कल्पना कोणी मांडली होती?",
        context: "त्या काळात गणिताचे आणि जहाजांच्या दिशेचे तक्ते हाताने मोजले जायचे आणि त्यात शेकडो चुका असायच्या. हे तक्ते अचूक बनवण्यासाठी एक महान शास्त्रज्ञ पुढे आला.",
        source: "Science Museum, London"
      },
      {
        id: "3-2",
        type: "person",
        title: "चार्ल्स बॅबेज (Charles Babbage) — १८३० चे स्वप्न",
        englishTitle: "Charles Babbage (1791–1871)",
        role: "इंग्रज गणितज्ञ, तत्त्वज्ञ आणि संशोधक",
        keyIdea: "मानवी चुका टाळण्यासाठी पूर्णपणे स्वयंचलित, अचूक गणना करणारे गणिती यंत्र तयार करणे.",
        importantFact: "लक्षात ठेवा: कोणत्याही एका व्यक्तीने आधुनिक संगणकाचा शोध लावलेला नाही; पण आधुनिक संगणकाची मूलभूत रचना मांडणारे चार्ल्स बॅबेज हे अग्रदूत होते!",
        source: "Science Museum, London — Babbage Collection"
      },
      {
        id: "3-3",
        type: "machine",
        title: "डिफरन्स इंजिन (Difference Engine)",
        englishTitle: "The Difference Engine (1820s-1830s)",
        purpose: "गणितीय तक्त्यांची आपोआप गणना करणे (Mathematical Tables).",
        construction: "हजारो पितळी गीअर्स, लिव्हर्स आणि शाफ्ट्स असलेला एक अजस्त्र यांत्रिक सांगाडा.",
        historicalFact: "बॅबेजच्या हयातीत हे यंत्र निधीअभावी पूर्ण झाले नाही; परंतु १९९१ मध्ये लंडनच्या सायन्स म्युझियमने बॅबेजच्या मूळ रेखाचित्रांवरून हे यंत्र तयार केले आणि ते तंतोतंत योग्य चालले!",
        source: "Science Museum, London (Difference Engine No. 2, built 1991)"
      },
      {
        id: "3-4",
        type: "diagram",
        title: "ॲनालिटिकल इंजिन (Analytical Engine) — आधुनिक संगणकाचा पाया",
        englishTitle: "The Analytical Engine — Modern Computer Architecture",
        concept: "हे जगातील पहिले सर्वसामान्य उद्देशीय (General-Purpose) प्रोग्रामेबल मेकॅनिकल कम्प्युटर डिझाईन होते.",
        diagramSteps: [
          { step: "पंच कार्ड्स (Punched Cards)", desc: "डेटा आणि सूचना आत देण्यासाठी (Input)", icon: "📋" },
          { step: "The Store (स्टोअर)", desc: "संख्या साठवून ठेवण्यासाठी जागा (आजची Memory / RAM)", icon: "🏛️" },
          { step: "The Mill (मिल)", desc: "हिशोब आणि प्रक्रिया करणारा भाग (आजचा Processor / CPU)", icon: "⚙️" },
          { step: "The Output (प्रिंटर / बेल)", desc: "निकाल कागदावर उमटवणे किंवा घंटी वाजवणे", icon: "🖨️" }
        ],
        modernConnection: "आजच्या संगणकात ज्याप्रमाणे CPU आणि RAM असते, अगदी तिच संकल्पना बॅबेजने १८३७ मध्ये मांडली होती!",
        source: "Computer History Museum — Babbage's Analytical Engine"
      },
      {
        id: "3-5",
        type: "person",
        title: "एडा लव्हलेस (Ada Lovelace) — जगातील पहिली संगणक प्रोग्रामर",
        englishTitle: "Ada Lovelace (1815–1852) — The First Programmer",
        whoWasShe: "एक प्रतिभाशाली गणितज्ञ आणि कवी लॉर्ड बायरन यांची कन्या.",
        groundbreakingWork: [
          "बॅबेजच्या ॲनालिटिकल इंजिनसाठी तिने 'बर्नाउली संख्या' काढण्यासाठी पायरी-पायरीने चालणारा पहिला अल्गोरिदम (Program) लिहिला.",
          "तिने ओळखले की संगणक केवळ आकड्यांचा हिशोब करणार नाही, तर संगीत, चित्रे आणि अक्षरे यांच्यावरही प्रक्रिया करू शकेल!",
          "तिच्या सन्मानार्थ अमेरिकेच्या संरक्षण खात्याने 'ADA' या प्रोग्रामिंग लँग्वेजचे नामकरण केले."
        ],
        source: "The Ada Lovelace Archives, University of Oxford"
      },
      {
        id: "3-6",
        type: "summary_card",
        title: "बॅबेज आणि लव्हलेस का महत्त्वाचे आहेत?",
        englishTitle: "Why Babbage and Lovelace Matter",
        keyTakeaway: "ते निव्वळ कॅल्क्युलेटर बनवत नव्हते; त्यांनी 'प्रोग्रामेबल कम्प्युटर'ची संकल्पना मांडली — अशी मशीन जी सूचना बदलून कोणतेही काम करू शकते!",
        source: "Science Museum & Computer History Museum"
      }
    ],
    recap: {
      points: [
        "चार्ल्स बॅबेज यांनी Difference Engine आणि Analytical Engine ची रचना केली.",
        "Analytical Engine मधील 'Store' म्हणजे आजची Memory आणि 'Mill' म्हणजे आजचा Processor.",
        "एडा लव्हलेस यांनी पहिला अल्गोरिदम लिहिला, म्हणूनच त्यांना जगातील पहिली प्रोग्रामर मानले जाते."
      ]
    },
    teacherNotes: "विद्यार्थ्यांना विचारा: 'Store' आणि 'Mill' या इंग्रजी शब्दांचा अर्थ काय होतो? कारखान्यातील धान्याची चक्की (Mill) कशी काम करते आणि CPU कसा काम करतो यातील साम्य सांगा."
  },

  {
    id: 4,
    chapterNumber: "०४",
    title: "Electromechanical Computing",
    subtitle: "When Electricity Met Mechanics — यांत्रिकी आणि विजेचा मिलाफ",
    purpose: "निव्वळ मेकॅनिकल उपकरणांकडून विजेवर चालणाऱ्या रिले (Relay) आधारित मशिन्सकडे झालेला बदल समजून घेणे.",
    gradeSuitability: "Std 1 - 10",
    coverTag: "विद्युत-यांत्रिक संक्रमण",
    colorGradient: "from-indigo-700 to-slate-900",
    icon: "⚡",
    difficulty: {
      level1: "लाईटच्या बटणासारखे विजेचे स्विच आणि वेगवान हिशोब करणारी यंत्रे.",
      level2: "इलेक्ट्रोमॅग्नेटिक रिले, हॉवर्ड मार्क १ (Harvard Mark I) आणि 'Bug' शब्दाची खरी गोष्ट.",
      level3: "रिलेचे मेकॅनिझम, हॉवर्ड ऐकेन, कॉनराड झ्यूस (Z3 machine), रिले संगणकांच्या मर्यादा (मर्यादित वेग, झीज)."
    },
    slides: [
      {
        id: "4-1",
        type: "concept",
        title: "यांत्रिकी + वीज = नवीन क्रांती",
        englishTitle: "Mechanical + Electricity",
        problem: "केवळ गीअर्स आणि दातेरी चाके हाताने फिरवणे खूप हळू होते आणि त्यात घर्षणामुळे झीज व्हायची.",
        solution: "१९३० आणि १९४० च्या दशकात शास्त्रज्ञांनी विजेच्या चुंबकीय स्विचचा (Relays) वापर करून यंत्रे चालवण्यास सुरुवात केली.",
        speedJump: "हाताने चाक फिरवण्यापेक्षा विजेच्या मदतीने स्विच चालू-बंद करणे हजारो पटींनी वेगवान ठरले!",
        source: "Smithsonian National Museum of American History"
      },
      {
        id: "4-2",
        type: "technical",
        title: "रिले (Relay) म्हणजे काय?",
        englishTitle: "What is an Electromechanical Relay?",
        definition: "रिले हे एक विजेवर चालणारे इलेक्ट्रोमॅग्नेटिक स्विच असते.",
        howItWorks: "जेव्हा कॉइलमधून विद्युतप्रवाह जातो, तेव्हा चुंबक बनून धातूची पट्टी खेचली जाते आणि सर्किट चालू (ON = 1) किंवा बंद (OFF = 0) होते.",
        sound: "जेव्हा शेकडो रिले एकाच वेळी उघडझाप करायचे, तेव्हा खोलीत शेकडो टाइपरायटर्स चालू असल्यासारखा 'कट-कट-कट' असा मोठा आवाज यायचा!",
        source: "IBM Archives — Early Relay Computing"
      },
      {
        id: "4-3",
        type: "machine",
        title: "हार्वर्ड मार्क १ (Harvard Mark I) — १९४४",
        englishTitle: "The Harvard Mark I (IBM ASCC, 1944)",
        builders: "हॉवर्ड ऐकेन (Howard Aiken) आणि IBM चे अभियंते.",
        dimensions: "५१ फूट लांब, ८ फूट उंच आणि वजन तब्बल ४.५ टन (४५०० किलो)! आत हजारो स्विचेस आणि फिरणारे शाफ्ट्स.",
        speed: "एका गुणाकारासाठी सुमारे ३ ते ६ सेकंद लागायचे. (आजच्या तुलनेत खूप हळू, पण त्या काळातील माणसांपेक्षा खूप जलद!)",
        source: "Harvard University Collection of Historical Scientific Instruments"
      },
      {
        id: "4-4",
        type: "fun_fact",
        title: "संगणकातला 'Bug' आणि ग्रेस हॉपरची खरी गोष्ट!",
        englishTitle: "The Real Story of the First Computer Bug",
        storyteller: "डॉ. ग्रेस हॉपर (Grace Hopper) — अग्रगण्य महिला संगणक शास्त्रज्ञ.",
        incident: "१९४७ मध्ये Harvard Mark II मशीनमध्ये अचानक बिघाड झाला. तपासणी केली असता एका रिलेच्या दोन संपर्कांमध्ये एक जिवंत पतंग (Moth) अडकून जळून मेला होता!",
        history: "त्या पतंगाला चिमट्याने काढून लॉगबुकमध्ये चिकटवले गेले आणि लिहिले: 'First actual case of bug being found'. तेव्हापासून संगणकातील दोषाला 'Bug' आणि तो दुरुस्त करण्याला 'Debugging' म्हटले जाते!",
        source: "Smithsonian Institution (Grace Hopper's Log Book, 1947)"
      },
      {
        id: "4-5",
        type: "comparison",
        title: "इलेक्ट्रॉनिक संगणकाची गरज का निर्माण झाली?",
        englishTitle: "Why Electronic Computing was Needed",
        drawbacks: [
          "रिलेमध्ये हालचाल करणारे भाग (Moving Parts) असल्यामुळे ते कालांतराने घसायचे आणि तुटायचे.",
          "वेगाची मर्यादा: यांत्रिक स्विच उघडझाप होण्यासाठी काही मिलिसेकंद लागायचे.",
          "शास्त्रज्ञांना अशा स्विचची गरज होती ज्यामध्ये कोणतेही हलणारे भाग नसतील आणि जे प्रकाशाच्या वेगाने विजेच्या लहरींवर चालतील!"
        ],
        bridgeToNext: "याच गरजेतून जन्माला आली — 'Vacuum Tube' आणि सुरू झाली पहिली पिढी!",
        source: "Computer History Museum"
      }
    ],
    recap: {
      points: [
        "इलेक्ट्रोमेकॅनिकल संगणकांनी मेकॅनिकल गीअर्सऐवजी विजेच्या रिले स्विचेसचा वापर केला.",
        "Harvard Mark I हे या युगातील प्रसिद्ध अजस्त्र यंत्र होते.",
        "हलणारे भाग असल्यामुळे यांत्रिक स्विचेस हळू होते आणि तुटायचे, म्हणूनच पूर्ण इलेक्ट्रॉनिक क्रांतीची गरज निर्माण झाली."
      ]
    },
    teacherNotes: "विद्यार्थ्यांना वर्गातील लाईटचे स्विच चालू-बंद करायला सांगा आणि सांगा की जुन्या संगणकात असे हजारो स्विचेस मशीन स्वतः चालू-बंद करायची!"
  },

  {
    id: 5,
    chapterNumber: "०५",
    title: "First Generation — Vacuum Tubes",
    subtitle: "First Generation of Computers (~1940s to mid-1950s)",
    period: "अंदाजे १९४० ते १९५० च्या दशकाचा मध्य",
    purpose: "पहिल्या पिढीतील व्हॅक्यूम ट्यूब तंत्रज्ञान, ENIAC संगणक आणि त्याच्या मर्यादा स्पष्ट करणे.",
    gradeSuitability: "Std 1 - 10",
    coverTag: "पहिली पिढी: व्हॅक्यूम ट्यूब",
    colorGradient: "from-blue-700 to-violet-950",
    icon: "💡",
    difficulty: {
      level1: "मोठ्या काचेच्या बल्बसारख्या नळ्या (Vacuum Tubes) आणि एका मोठ्या खोलीएवढा संगणक.",
      level2: "व्हॅक्यूम ट्यूब कशी काम करायची, ENIAC (1946), भरपूर उष्णता आणि मशीन लँग्वेज.",
      level3: "ENIAC चे आर्किटेक्चर, जॉन माउक्ली व जे. प्रेस्पर एकर्ट, व्हॅक्यूम ट्यूब थर्मिओनिक उत्सर्जन, पॅच केबल्सद्वारे प्रोग्रामिंग."
    },
    slides: [
      {
        id: "5-1",
        type: "cover",
        title: "Welcome to the First Generation!",
        englishTitle: "संगणकाची पहिली पिढी: काचेच्या दिव्यांचे युग",
        highlight: "काळ: अंदाजे १९४० ते १९५० चे दशक",
        coreTechnology: "व्हॅक्यूम ट्यूब्स (Vacuum Tubes / थर्मिओनिक व्हॉल्व्ह्ज)",
        source: "Computer History Museum — First Generation Gallery"
      },
      {
        id: "5-2",
        type: "technical",
        title: "व्हॅक्यूम ट्यूब (Vacuum Tube) म्हणजे काय?",
        englishTitle: "What is a Vacuum Tube?",
        description: "काचेच्या पोकळ बल्बसारखे दिसणारे उपकरण, ज्याच्या आतून हवा पूर्णपणे काढून निर्वात (Vacuum) केलेली असायची.",
        howItWorked: "आत असलेल्या फिलामेंटला गरम केल्यावर इलेक्ट्रॉनचा प्रवाह सुरू व्हायचा. हे उपकरण विजेचा प्रवाह सुरू (1) किंवा बंद (0) करण्याचे हाय-स्पीड इलेक्ट्रॉनिक स्विच म्हणून काम करायचे.",
        speedMiracle: "यामध्ये कोणताही हलणारा मेकॅनिकल भाग नसल्याने हे रिलेपेक्षा हजारो पटींनी वेगवान होते!",
        source: "Penn Engineering Archives — The Vacuum Tube"
      },
      {
        id: "5-3",
        type: "machine",
        title: "ENIAC (1946) — जगातील पहिला सामान्य इलेक्ट्रॉनिक संगणक",
        englishTitle: "ENIAC (Electronic Numerical Integrator and Computer)",
        inventors: "जॉन माउक्ली (John Mauchly) आणि जे. प्रेस्पर एकर्ट (J. Presper Eckert)",
        institution: "पेनसिल्व्हेनिया विद्यापीठ (University of Pennsylvania), USA",
        staggeringFacts: [
          "📐 आकार: ५० फूट लांब, ८ फूट उंच — तब्बल एका मोठ्या हॉलएवढा!",
          "⚖️ वजन: सुमारे ३० टन (३०,००० किलो!)",
          "💡 व्हॅक्यूम ट्यूब्स: सुमारे १८,००० काचेच्या व्हॅक्यूम ट्यूब्स!",
          "⚡ वीज वापर: १५० किलोवॉट (ते चालू केल्यावर फिलाडेल्फिया शहरातील दिवे मंद व्हायचे अशी आख्यायिका आहे!)"
        ],
        achievement: "तोफेच्या गोळ्यांचा अचूक मार्ग काढण्यासाठी लागणारा २० तासांचा मानवी हिशोब ENIAC ने अवघ्या ३० सेकंदात करून दाखवला!",
        source: "Penn Engineering & Smithsonian Institution — ENIAC Collection"
      },
      {
        id: "5-4",
        type: "concept",
        title: "ENIAC ला प्रोग्राम कसे करायचे?",
        englishTitle: "How was ENIAC Programmed?",
        noMonitorNoKeyboard: "त्या काळी स्क्रीन, मॉनिटर किंवा कीबोर्ड नव्हते!",
        programmingMethod: [
          "महिला गणितज्ञ आणि अभियंत्या (ENIAC Programmers — के मॅकनल्टी, बेट्टी जेनिंग्स इ.) शेकडो तारा (Patch Cables) हाताने वेगवेगळ्या सॉकेट्समध्ये जोडून आणि स्विचेस फिरवून प्रोग्राम करायच्या.",
          "एक नवीन गणित करायचे असेल तर वायर्स बदलण्यासाठी अनेक दिवस लागायचे!",
          "माहिती देण्यासाठी आणि उत्तरे घेण्यासाठी कागदी पंच कार्डे (Punched Cards) वापरली जायची."
        ],
        source: "Penn Library Archives — Women of ENIAC"
      },
      {
        id: "5-5",
        type: "comparison",
        title: "पहिल्या पिढीचे फायदे आणि मोठे तोटे",
        englishTitle: "First Generation: Advantages vs Problems",
        advantages: [
          "✅ मानवाच्या इतिहासातील सर्वात वेगवान गणना यंत्र.",
          "✅ इलेक्ट्रॉनिक पद्धतीने पहिल्यांदाच प्रोग्रामिंग शक्य झाले."
        ],
        disadvantages: [
          "❌ प्रचंड आकार आणि वजन — केवळ मोठ्या संस्था किंवा सैन्यालाच परवडणारे.",
          "❌ प्रचंड वीज आणि उष्णता (Heat) — खोल्या थंड ठेवण्यासाठी भव्य एसी लागायचे.",
          "❌ अविश्वसनीय (Unreliable) — दर काही तासांनी एखादी काचेची ट्यूब गरम होऊन फुटायाची आणि संपूर्ण संगणक बंद पडायचा!",
          "❌ फक्त कठीण मशिन लँग्वेज (0 आणि 1) मध्ये कोड करावे लागायचे."
        ],
        source: "Computer History Museum"
      },
      {
        id: "5-6",
        type: "summary_card",
        title: "पहिली पिढी: सारांश (Generation 1 Summary)",
        englishTitle: "Key Takeaways — First Generation",
        bullets: [
          "मुख्य घटक: व्हॅक्यूम ट्यूब्स (Vacuum Tubes).",
          "कालावधी: १९४० ते १९५० चा मध्य.",
          "उदाहरणे: ENIAC, EDVAC, UNIVAC I.",
          "भाषा: मशीन लँग्वेज (Machine Language).",
          "शिकवण: इलेक्ट्रॉनिक्समुळे वेग प्रचंड वाढला, पण उष्णता, आकार आणि विश्वासार्हता ही मोठी आव्हाने होती."
        ],
        source: "IEEE Annals of the History of Computing"
      }
    ],
    recap: {
      points: [
        "पहिल्या पिढीतील मुख्य तंत्रज्ञान व्हॅक्यूम ट्यूब्स होते.",
        "ENIAC (1946) हा पहिला मोठा सामान्य-उद्देशीय इलेक्ट्रॉनिक संगणक होता, ज्यामध्ये १८,००० व्हॅक्यूम ट्यूब्स होत्या.",
        "मोठा आकार, प्रचंड उष्णता आणि ट्यूब वारंवार फुटणे यामुळे नवीन तंत्रज्ञानाची गरज भासली."
      ]
    },
    teacherNotes: "विद्यार्थ्यांना पिवळा काचेचा टंगस्टन बल्ब दाखवून सांगा की हा जसा खूप गरम होतो, तसेच १८,००० दिवे एकाच खोलीत जळत असल्यावर काय होईल याची कल्पना करा!"
  },

  {
    id: 6,
    chapterNumber: "०६",
    title: "Second Generation — Transistors",
    subtitle: "Second Generation of Computers (~mid-1950s to early 1960s)",
    period: "अंदाजे १९५० चे दशक ते १९६० च्या दशकाचा प्रारंभ",
    purpose: "ट्रान्झिस्टरचा शोध, व्हॅक्यूम ट्यूबशी तुलना आणि प्रोग्रामिंग भाषांची प्रगती स्पष्ट करणे.",
    gradeSuitability: "Std 1 - 10",
    coverTag: "दुसरी पिढी: ट्रान्झिस्टर",
    colorGradient: "from-blue-600 to-cyan-800",
    icon: "📻",
    difficulty: {
      level1: "काचेच्या बल्बऐवजी लहान धातूचे ट्रान्झिस्टर — संगणक लहान आणि थंड झाले.",
      level2: "ट्रान्झिस्टरचा शोध (Bell Labs), नोबेल पारितोषिक, असेंब्ली भाषा, FORTRAN आणि COBOL.",
      level3: "सेमीकंडक्टर सिलिकॉन/जर्मेनियम, जॉन बार्डिन, वॉल्टर ब्रॅटन, विल्यम शॉकली, मॅग्नेटिक कोअर मेमरी."
    },
    slides: [
      {
        id: "6-1",
        type: "question",
        title: "व्हॅक्यूम ट्यूबमध्ये काय त्रुटी होती?",
        englishTitle: "What was Wrong with Vacuum Tubes?",
        reasons: [
          "ते काचेचे बनलेले होते, त्यामुळे सहज फुटायचे.",
          "त्यांना चालू राहण्यासाठी खूप जास्त वीज लागायची.",
          "ते प्रचंड उष्णता निर्माण करायचे.",
          "त्यांचा आकार मोठा होता, ज्यामुळे संगणक लहान करणे अशक्य होते."
        ],
        theQuest: "शास्त्रज्ञांना अशा घटकाचा शोध घ्यायचा होता जो लहान, थंड, टिकाऊ आणि सेमीकंडक्टरवर चालणारा असेल.",
        source: "Bell Labs Historical Archives"
      },
      {
        id: "6-2",
        type: "person",
        title: "ट्रान्झिस्टरचा शोध (The Transistor — 1947)",
        englishTitle: "The Invention of the Transistor at Bell Labs",
        inventors: "जॉन बार्डिन (John Bardeen), वॉल्टर ब्रॅटन (Walter Brattain) आणि विल्यम शॉकली (William Shockley)",
        year: 1947,
        institution: "बेल लॅबोरेटरीज (Bell Labs), USA",
        nobelPrize: "या युगप्रवर्तक शोधासाठी या तिघांना १९५६ चे भौतिकशास्त्रातील नोबेल पारितोषिक मिळाले!",
        revolutionaryFact: "ट्रान्झिस्टर हा विसाव्या शतकातील मानवाचा सर्वात महत्त्वाचा तांत्रिक शोध मानला जातो.",
        source: "Nobel Prize in Physics 1956 & Bell Labs"
      },
      {
        id: "6-3",
        type: "technical",
        title: "ट्रान्झिस्टर म्हणजे काय आणि तो काय करतो?",
        englishTitle: "What is a Transistor?",
        explanation: "ट्रान्झिस्टर हा सिलिकॉन किंवा जर्मेनियम या सेमीकंडक्टर (अर्धवाहक) पदार्थापासून बनलेला असतो.",
        coreFunction: [
          "१. स्विच (Switch): विजेचा प्रवाह सेकंदाला लाखो वेळा चालू (1) किंवा बंद (0) करणे.",
          "२. ॲम्प्लीफायर (Amplifier): कमकुवत विद्युत सिग्नल वाढवणे."
        ],
        whySuperior: "यात कोणतीही काच नाही, फिलामेंट नाही, हवा निर्वात करण्याची गरज नाही आणि हे कधीही फुटत नाही!",
        source: "IEEE Global History Network"
      },
      {
        id: "6-4",
        type: "comparison",
        title: "व्हॅक्यूम ट्यूब विरुद्ध ट्रान्झिस्टर (तुलना)",
        englishTitle: "Vacuum Tube vs Transistor",
        comparisonTable: [
          { feature: "आकार (Size)", tube: "मोठ्या बल्बएवढा (काही इंच)", transistor: "एकदम छोटा (काही मिलिमीटर)" },
          { feature: "वीज वापर (Power)", tube: "प्रचंड वीज", transistor: "अत्यल्प वीज" },
          { feature: "उष्णता (Heat)", tube: "खूप जास्त उष्णता", transistor: "अतिशय कमी उष्णता" },
          { feature: "विश्वासार्हता (Reliability)", tube: "वारंवार जळायचे / फुटायचे", transistor: "दीर्घकाळ टिकणारे आणि मजबूत" },
          { feature: "वेग (Speed)", tube: "मिलिसेकंद", transistor: "मायक्रोसेकंद (अनेक पटींनी वेगवान)" }
        ],
        source: "Computer History Museum"
      },
      {
        id: "6-5",
        type: "software",
        title: "सॉफ्टवेअरची प्रगती: असेंब्ली, FORTRAN आणि COBOL",
        englishTitle: "Software Evolution: Assembly, FORTRAN & COBOL",
        revolution: "पहिल्या पिढीत फक्त '010101' अशी मशीन भाषा होती. दुसऱ्या पिढीत मानवाला समजेल अशा भाषा आल्या!",
        languages: [
          { name: "Assembly Language", desc: "0 आणि 1 ऐवजी 'ADD', 'SUB' यांसारखे लहान सांकेतिक शब्द (Mnemonics) आले." },
          { name: "FORTRAN (1957)", desc: "Formula Translation — गणितज्ञ आणि शास्त्रज्ञांसाठी जॉन बॅकसने बनवलेली उच्च पातळीची भाषा." },
          { name: "COBOL (1959)", desc: "Common Business Oriented Language — ग्रेस हॉपर यांच्या प्रेरणेने व्यापारी हिशोबांसाठी इंग्रजीसारखी बनवलेली भाषा." }
        ],
        source: "IBM Archives — FORTRAN & COBOL History"
      },
      {
        id: "6-6",
        type: "summary_card",
        title: "दुसरी पिढी: सारांश (Generation 2 Summary)",
        englishTitle: "Key Takeaways — Second Generation",
        bullets: [
          "मुख्य तंत्रज्ञान: ट्रान्झिस्टर (Transistor).",
          "कालावधी: १९५० चा मध्य ते १९६० चा प्रारंभ.",
          "उदाहरणे: IBM 1401, IBM 7090, CDC 1604.",
          "फायदा: संगणक आकाराने लहान झाले, उष्णता कमी झाली आणि विश्वासार्हता खूप वाढली.",
          "स्टोरेज: मॅग्नेटिक कोअर मेमरी आणि मॅग्नेटिक टेप्सचा वापर सुरू झाला."
        ],
        source: "Computer History Museum"
      }
    ],
    recap: {
      points: [
        "ट्रान्झिस्टरने व्हॅक्यूम ट्यूबची जागा घेतली; यामुळे संगणक अधिक लहान, वेगवान आणि कमी वीज खाणारे बनले.",
        "जॉन बार्डिन, वॉल्टर ब्रॅटन आणि विल्यम शॉकली यांना ट्रान्झिस्टरच्या शोधासाठी नोबेल पारितोषिक मिळाले.",
        "दुसऱ्या पिढीत FORTRAN आणि COBOL सारख्या मानवाला समजणाऱ्या प्रोग्रामिंग भाषांचा जन्म झाला."
      ]
    },
    teacherNotes: "विद्यार्थ्यांना जुना ट्रान्झिस्टर रेडिओ कसा असतो ते आठवायला सांगा, ज्याला लोक आजही 'ट्रान्झिस्टर' म्हणतात!"
  },

  {
    id: 7,
    chapterNumber: "०७",
    title: "Third Generation — Integrated Circuits",
    subtitle: "Third Generation of Computers (~1960s to early 1970s)",
    period: "अंदाजे १९६० ते १९७० च्या दशकाचा प्रारंभ",
    purpose: "इंटिग्रेटेड सर्किट (IC) ची संकल्पना, चिप तंत्रज्ञान आणि ऑपरेटिंग सिस्टीमचा उदय समजून घेणे.",
    gradeSuitability: "Std 1 - 10",
    coverTag: "तिसरी पिढी: इंटिग्रेटेड सर्किट (IC)",
    colorGradient: "from-purple-600 to-indigo-900",
    icon: "🔲",
    difficulty: {
      level1: "एका लहान काळ्या चिपवर हजारो ट्रान्झिस्टर — संगणक टेबलवर बसण्याइतके लहान झाले.",
      level2: "जॅक किल्बी आणि रॉबर्ट नॉइस, इंटिग्रेटेड सर्किट (IC), कीबोर्ड आणि मॉनिटरचा उदय.",
      level3: "सिलिकॉन सेमीकंडक्टर फॅब्रिकेशन, प्लॅनर प्रोसेस, IBM System/360, टाईम-शेअरिंग ऑपरेटिंग सिस्टीम."
    },
    slides: [
      {
        id: "7-1",
        type: "question",
        title: "एका छोट्या चिपवर हजारो घटक कसे बसवले?",
        englishTitle: "One Chip, Many Components!",
        theTyrannyOfNumbers: "'संख्येचा त्रास' (The Tyranny of Numbers):",
        problemContext: "दुसऱ्या पिढीत हजारो ट्रान्झिस्टर, रेझिस्टर आणि कॅपेसिटर एकमेकांना जोडण्यासाठी लाखो वायर्स हाताने सोल्डर कराव्या लागत होत्या. एक वायर सुटली की संपूर्ण सिस्टीम बंद!",
        bigQuestion: "हे सर्व वेगळे घटक एकाच लहान सिलिकॉन तुकड्यावर एकत्र तयार करता येतील का?",
        source: "Texas Instruments & Fairchild Historical Archives"
      },
      {
        id: "7-2",
        type: "technical",
        title: "IC (Integrated Circuit) म्हणजे काय?",
        englishTitle: "What is an Integrated Circuit?",
        definition: "इंटिग्रेटेड सर्किट (IC) किंवा 'Microchip' म्हणजे सिलिकॉनच्या एका छोट्या तुकड्यावर एकत्र कोरलेले शेकडो किंवा हजारो ट्रान्झिस्टर, रेझिस्टर आणि कॅपेसिटर्स!",
        literalMeaning: "'Integrated' म्हणजे 'एकत्रित केलेले'. वेगवेगळे सुटे भाग जोडण्याऐवजी संपूर्ण सर्किट एकाच चिपवर तयार केले जाते.",
        source: "Computer History Museum — The Silicon Engine"
      },
      {
        id: "7-3",
        type: "person",
        title: "दोन संशोधक आणि एक अद्भुत शोध",
        englishTitle: "Jack Kilby & Robert Noyce (1958-1959)",
        pioneers: [
          {
            name: "जॅक किल्बी (Jack Kilby)",
            company: "Texas Instruments (1958)",
            contribution: "जर्मेनियमच्या तुकड्यावर पहिले कार्यरत आयसी मॉडेल हाताने तयार केले. यासाठी त्यांना २००० मध्ये नोबेल पारितोषिक मिळाले!"
          },
          {
            name: "रॉबर्ट नॉइस (Robert Noyce)",
            company: "Fairchild Semiconductor (1959)",
            contribution: "सिलिकॉनवर प्लॅनर तंत्रज्ञानाने आधुनिक IC ची रचना केली. पुढे जाऊन त्यांनीच 'Intel' कंपनी स्थापन केली!"
          }
        ],
        source: "Nobel Prize in Physics 2000 & Intel Historical Archives"
      },
      {
        id: "7-4",
        type: "comparison",
        title: "ट्रान्झिस्टर वि. इंटिग्रेटेड सर्किट (IC)",
        englishTitle: "Discrete Transistor vs Integrated Circuit",
        points: [
          "सुटे ट्रान्झिस्टर: प्रत्येक ट्रान्झिस्टर स्वतंत्र, वायर्सने जोडावा लागायचा, जागा जास्त लागायची.",
          "इंटिग्रेटेड सर्किट: एका नखाएवढ्या सिलिकॉन चिपवर शेकडो ट्रान्झिस्टर एकत्र, वायर्सची गरज नाही, वेग प्रचंड वाढला आणि खर्च खूप कमी झाला!",
          "यामुळेच संगणक प्रथमच कार्यालये, बँका आणि महाविद्यालयांमध्ये पोहोचू शकले."
        ],
        source: "Computer History Museum"
      },
      {
        id: "7-5",
        type: "milestone",
        title: "मॉनिटर, कीबोर्ड आणि ऑपरेटिंग सिस्टीमचा जन्म!",
        englishTitle: "Monitors, Keyboards & Operating Systems",
        transformations: [
          "पंच कार्ड्स मागे पडली: वापरकर्त्यांनी स्क्रीन (Monitor) वर निकाल पाहण्यास आणि कीबोर्डने टाईप करण्यास सुरुवात केली.",
          "Operating System (OS): एकाच वेळी अनेक प्रोग्राम्स चालवणारी आणि मेमरी सांभाळणारी ऑपरेटिंग सिस्टीम आली.",
          "IBM System/360 (1964): कंपन्यांसाठी जगातील सर्वात यशस्वी मुख्य संगणक (Mainframe) ठरला."
        ],
        source: "IBM Archives — System/360 Announcement"
      },
      {
        id: "7-6",
        type: "summary_card",
        title: "तिसरी पिढी: सारांश (Generation 3 Summary)",
        englishTitle: "Key Takeaways — Third Generation",
        bullets: [
          "मुख्य तंत्रज्ञान: इंटिग्रेटेड सर्किट (Integrated Circuit - IC).",
          "कालावधी: १९६० चे दशक ते १९७० चा प्रारंभ.",
          "संशोधक: जॅक किल्बी आणि रॉबर्ट नॉइस.",
          "उदाहरणे: IBM 360, PDP-8 (Minicomputer).",
          "महत्त्व: संगणक आकाराने कॉम्पॅक्ट झाले, कीबोर्ड-मॉनिटर आले आणि ऑपरेटिंग सिस्टीमचा पाया रचला गेला."
        ],
        source: "Computer History Museum"
      }
    ],
    recap: {
      points: [
        "तिसऱ्या पिढीत इंटिग्रेटेड सर्किट (IC) तंत्रज्ञान आले, ज्यामुळे शेकडो ट्रान्झिस्टर एकाच सिलिकॉन चिपवर बसवले गेले.",
        "जॅक किल्बी आणि रॉबर्ट नॉइस यांनी स्वतंत्रपणे IC चा शोध लावला.",
        "या पिढीत कीबोर्ड, मॉनिटर आणि ऑपरेटिंग सिस्टीमचा वापर सुरू झाला."
      ]
    },
    teacherNotes: "विद्यार्थ्यांना कोणत्याही जुन्या तुटलेल्या रिमोट किंवा खेळण्यातील हिरवी PCB पट्टी आणि त्यावरची छोटी काळी आयसी दाखवा."
  },

  {
    id: 8,
    chapterNumber: "०८",
    title: "Fourth Generation — Microprocessors",
    subtitle: "Fourth Generation of Computers (from 1971 onward)",
    period: "१९७१ पासून सुरू झालेले युग",
    purpose: "मायक्रोप्रोसेसरचा जन्म, चिपवर संपूर्ण संगणक आणि वैयक्तिक संगणकाची पायाभरणी स्पष्ट करणे.",
    gradeSuitability: "Std 1 - 10",
    coverTag: "चौथी पिढी: मायक्रोप्रोसेसर",
    colorGradient: "from-indigo-600 to-purple-800",
    icon: "💻",
    difficulty: {
      level1: "एका लहान नाण्याएवढ्या चिपवर संपूर्ण संगणकाचा मेंदू — लॅपटॉप आणि फोनची सुरुवात.",
      level2: "Intel 4004 (1971), मायक्रोप्रोसेसर म्हणजे काय, VLSI तंत्रज्ञान आणि कॉम्प्युटर लहान कसा झाला.",
      level3: "VLSI आणि ULSI आर्किटेक्चर, फेडरिको फॅगिन, टेड हॉफ, मूरचा नियम (Moore's Law), आधुनिक CPU कोर रचना."
    },
    slides: [
      {
        id: "8-1",
        type: "milestone",
        title: "१९७१ — संपूर्ण संगणक एकाच चिपवर!",
        englishTitle: "1971 — A Computer on a Chip",
        bigIdea: "जर संपूर्ण खोलीएवढ्या संगणकाचा मेंदू (CPU) एका नखाएवढ्या सिलिकॉन चिपवर बसवला तर?",
        breakthrough: "१९७१ मध्ये 'Intel' कंपनीने जगातील पहिला व्यावसायिक मायक्रोप्रोसेसर तयार केला — **Intel 4004**!",
        team: "फेडरिको फॅगिन (Federico Faggin), टेड हॉफ (Ted Hoff), स्टॅन मॅझोर (Stan Mazor) आणि मासातोशी शिमा (Masatoshi Shima).",
        source: "Intel Museum & Smithsonian Archives"
      },
      {
        id: "8-2",
        type: "technical",
        title: "Intel 4004 ची अद्भुत ताकद",
        englishTitle: "The Marvel of Intel 4004",
        specs: [
          "ट्रान्झिस्टर संख्या: सुमारे २,३०० ट्रान्झिस्टर एकाच चिपवर!",
          "आकार: अवघ्या ३ मिमी x ४ मिमी चा सिलिकॉन तुकडा.",
          "वेग: ७४० किलोहर्ट्झ (KHz).",
          "तुलना: या चिमुकल्या चिपमध्ये १९४६ च्या ३० टन वजनी ENIAC एवढीच ताकद होती!"
        ],
        historicQuote: "'A new era of integrated electronics has begun.' — Intel Announcement, 1971",
        source: "Intel Historical Archives"
      },
      {
        id: "8-3",
        type: "concept",
        title: "मायक्रोप्रोसेसर (Microprocessor) म्हणजे काय?",
        englishTitle: "What is a Microprocessor?",
        explanation: "मायक्रोप्रोसेसर म्हणजे संगणकाचे 'Central Processing Unit' (CPU) जे संपूर्णपणे एकाच सेमीकंडक्टर इंटिग्रेटेड सर्किटवर बसवलेले असते.",
        theBrainFunctions: [
          "🧠 विचार करणे आणि निर्णय घेणे (Control Unit - CU)",
          "➕ बेरीज-वजाबाकी आणि लॉजिक चालवणे (Arithmetic Logic Unit - ALU)",
          "⚡ तात्काळ आकडे साठवणे (Registers)"
        ],
        source: "IEEE Microprocessor Hall of Fame"
      },
      {
        id: "8-4",
        type: "diagram",
        title: "संगणकाच्या आकाराची चित्तथरारक उत्क्रांती",
        englishTitle: "Computer Size Evolution Across Generations",
        evolutionSteps: [
          { stage: "१ली पिढी (1946)", size: "मोठी इमारत / हॉल", tech: "१८,००० व्हॅक्यूम ट्यूब्स", icon: "🏢" },
          { stage: "२री पिढी (1950s)", size: "कपाटाएवढा", tech: "हजारो ट्रान्झिस्टर", icon: "🗄️" },
          { stage: "३री पिढी (1960s)", size: "टेबलाएवढा", tech: "इंटिग्रेटेड सर्किट्स (IC)", icon: "🛋️" },
          { stage: "४थी पिढी (1970s+)", size: "डेस्कटॉप आणि लॅपटॉप", tech: "मायक्रोप्रोसेसर (VLSI)", icon: "💻" },
          { stage: "आधुनिक युग (आज)", size: "हाताचा तळहात / घड्याळ", tech: "अब्जो ट्रान्झिस्टरची SoC चिप", icon: "⌚" }
        ],
        source: "Computer History Museum"
      },
      {
        id: "8-5",
        type: "concept",
        title: "मूरचा नियम (Moore's Law)",
        englishTitle: "Moore's Law — Gordon Moore (1965)",
        observation: "इंटेलचे सहसंस्थापक गॉर्डन मूर यांनी निरीक्षण नोंदवले की:",
        lawStatement: "'एका मायक्रोचिपवरील ट्रान्झिस्टरची संख्या दर सुमारे दोन वर्षांनी दुप्पट होते, आणि चिपची किंमत निम्मी होते!'",
        impact: "याच नियमामुळे संगणक दरवर्षी अधिक स्वस्त, अधिक वेगवान आणि अधिक लहान होत गेले.",
        source: "Intel Corporation & Electronics Magazine (1965)"
      },
      {
        id: "8-6",
        type: "summary_card",
        title: "चौथी पिढी: सारांश (Generation 4 Summary)",
        englishTitle: "Key Takeaways — Fourth Generation",
        bullets: [
          "मुख्य तंत्रज्ञान: मायक्रोप्रोसेसर (VLSI आणि ULSI चिप्स).",
          "कालावधी: १९७१ पासून आजतागायत चालू असलेले मुख्य युग.",
          "पहिला प्रोसेसर: Intel 4004 (१९७१).",
          "परिणाम: संगणक घराघरात आणि प्रत्येकाच्या हातात पोहोचले (Personal Computers).",
          "आजची स्थिती: तुमच्या फोनमध्ये एका चिपवर १० ते १५ अब्ज (Billion) ट्रान्झिस्टर असतात!"
        ],
        source: "Computer History Museum"
      }
    ],
    recap: {
      points: [
        "चौथ्या पिढीत मायक्रोप्रोसेसरचा जन्म झाला, ज्यामुळे संपूर्ण CPU एकाच चिपवर आला.",
        "Intel 4004 (1971) हा जगातील पहिला व्यावसायिक मायक्रोप्रोसेसर होता.",
        "मायक्रोप्रोसेसरमुळे संगणक आकाराने लहान, परवडणारे आणि वैयक्तिक वापरासाठी सक्षम बनले."
      ]
    },
    teacherNotes: "विद्यार्थ्यांना फोन किंवा कॉम्प्युटरमधील प्रोसेसरचे नाव विचारा (उदा. Intel Core i5, Snapdragon, Apple Silicon, MediaTek)."
  },

  {
    id: 9,
    chapterNumber: "०९",
    title: "Personal Computer Revolution",
    subtitle: "When Computers Entered Homes — संस्थांकडून सामान्य माणसाकडे",
    purpose: "पर्सनल कॉम्प्युटर क्रांती, ॲपल, आयबीएम आणि संगणक घराघरात कसा पोहोचला हे सांगणे.",
    gradeSuitability: "Std 1 - 10",
    coverTag: "पीसी क्रांती: घराघरात संगणक",
    colorGradient: "from-blue-700 to-indigo-900",
    icon: "🖥️",
    difficulty: {
      level1: "शाळेत आणि घरी संगणक कसा आला? ॲपल आणि आयबीएमचे पहिले रंगीत संगणक.",
      level2: "Altair 8800, Steve Jobs आणि Steve Wozniak, Apple II, IBM PC (1981).",
      level3: "होमब्रु कॉम्प्युटर क्लब, ओपन आर्किटेक्चर वि. प्रोप्रायटरी सिस्टीम, MS-DOS, पर्सनल कम्प्युटिंगचा सामाजिक प्रभाव."
    },
    slides: [
      {
        id: "9-1",
        type: "question",
        title: "संगणक घरामध्ये कधी आला?",
        englishTitle: "When Did Computers Enter Our Homes?",
        historicalContext: "१९७० च्या आधी संगणक फक्त सैन्य, मोठ्या सरकारी संस्था आणि अब्जाधीश बँकांकडेच असायचे. सामान्य माणसाला संगणक प्रत्यक्ष पाहणेही दुरापास्त होते!",
        theDream: "काही तरुणांनी स्वप्न पाहिले: 'प्रत्येक माणसाच्या टेबलावर आणि प्रत्येक घरात स्वतःचा संगणक असला पाहिजे!'",
        source: "Computer History Museum — Personal Computer Revolution"
      },
      {
        id: "9-2",
        type: "machine",
        title: "अल्टेअर ८८०० (Altair 8800) — १९७५",
        englishTitle: "The Spark: Altair 8800 (1975)",
        whatWasIt: "उत्साही इलेक्ट्रॉनिक्स प्रेमींसाठी (Hobbyists) विकली गेलेली पहिली DIY कॉम्प्युटर किट.",
        limitations: "यात स्क्रीन नव्हती, कीबोर्ड नव्हता! फक्त समोर लाल रंगाचे चमकणारे दिवे (LEDs) आणि स्विचेस होते.",
        spark: "याच अल्टेअरसाठी बिल गेट्स (Bill Gates) आणि पॉल ॲलन (Paul Allen) यांनी 'BASIC' सॉफ्टवेअर लिहिले आणि 'Microsoft' ची स्थापना केली!",
        source: "Smithsonian National Museum of American History"
      },
      {
        id: "9-3",
        type: "person",
        title: "ॲपल २ (Apple II) — १९७७",
        englishTitle: "Apple II: Steve Wozniak & Steve Jobs (1977)",
        theGarageStory: "स्टीव्ह वोझनियाक आणि स्टीव्ह जॉब्स यांनी एका गॅरेजमधून ॲपल कंपनी सुरू केली.",
        features: [
          "🎨 जगातील पहिला यशस्वी रंगीत ग्राफिक्स असलेला वैयक्तिक संगणक.",
          "⌨️ सुंदर प्लास्टिक बॉडी, अंगभूत कीबोर्ड आणि मॉनिटर जोडण्याची सोय.",
          "🎮 गेमिंग, शिक्षण आणि घरासाठी अत्यंत लोकप्रिय ठरला."
        ],
        source: "Computer History Museum — Apple II Collection"
      },
      {
        id: "9-4",
        type: "milestone",
        title: "IBM PC (1981) — कॉम्प्युटर बनला अधिकृत मानक!",
        englishTitle: "The IBM Personal Computer (Model 5150, 1981)",
        impact: "जगातील सर्वात मोठ्या टेक कंपनीने जेव्हा 'Personal Computer' (PC) बाजारात आणला, तेव्हा कार्यालयांमध्ये आणि व्यवसायांमध्ये संगणकाचा स्वीकार झाला.",
        legacy: "'PC' हा शब्द याच मॉडेलवरून जगभर रूढ झाला. याच्यासोबत मायक्रोसॉफ्टची 'MS-DOS' ऑपरेटिंग सिस्टीम आली.",
        source: "IBM Archives — The Birth of the IBM PC"
      },
      {
        id: "9-5",
        type: "summary_card",
        title: "संस्थेकडून व्यक्तीकडे: एक महापरिवर्तन",
        englishTitle: "From Institution to Individual",
        summaryPoints: [
          "१९५०: संगणक म्हणजे देशाची गोपनीय संपत्ती होती.",
          "१९८०: संगणक टेबलावर काम करण्याचे साधन बनला.",
          "आज: प्रत्येकाच्या खिशात आणि हातात वैयक्तिक संगणक आहे!",
          "या क्रांतीने माहिती, शिक्षण आणि तंत्रज्ञान सर्वांसाठी खुले केले."
        ],
        source: "IEEE Computer Society"
      }
    ],
    recap: {
      points: [
        "१९७० च्या दशकात मायक्रोप्रोसेसरमुळे Personal Computer (PC) चा जन्म झाला.",
        "Apple II आणि IBM PC (1981) मुळे संगणक कार्यालये आणि घराघरांमध्ये पोहोचले.",
        "या क्रांतीने तंत्रज्ञान केवळ सरकार किंवा मोठ्या कंपन्यांपुरते मर्यादित न ठेवता सामान्य माणसाच्या हाती दिले."
      ]
    },
    teacherNotes: "विद्यार्थ्यांना विचारा: तुमच्या घरी पहिला संगणक कधी आला? आज तुम्ही संगणकावर काय काय करता?"
  },

  {
    id: 10,
    chapterNumber: "१०",
    title: "GUI, Mouse, Storage & Software",
    subtitle: "Making Computers Human-Friendly — संगणक सर्वांसाठी सोपा कसा झाला?",
    purpose: "कमांड लाईनपासून ग्राफिकल युजर इंटरफेस (GUI), माउस आणि स्टोरेजच्या उत्क्रांतीची माहिती देणे.",
    gradeSuitability: "Std 1 - 10",
    coverTag: "सॉफ्टवेअर, माउस आणि जीयूआय",
    colorGradient: "from-indigo-600 to-violet-800",
    icon: "🖱️",
    difficulty: {
      level1: "माउस आणि स्क्रीनवरील रंगीत आयकॉन्स — क्लिक करून संगणक कसा चालतो.",
      level2: "CLI वि. GUI, डग्लस एंजेलबर्टचा पहिला लाकडी माउस, फ्लॉपी डिस्क ते पेनड्राइव्ह.",
      level3: "Xerox PARC संशोधन, Apple Macintosh (1984), Windows 95, मॅग्नेटिक ते सॉलिड स्टेट स्टोरेज (SSD)."
    },
    slides: [
      {
        id: "10-1",
        type: "comparison",
        title: "कमांड लाईन (CLI) वि. ग्राफिकल इंटरफेस (GUI)",
        englishTitle: "Before GUI vs After GUI",
        beforeGUI: {
          title: "पूर्वी: Command Line Interface (CLI)",
          desc: "काळ्या स्क्रीनवर हिरवी किंवा पांढरी अक्षरे! फाईल उघडण्यासाठीही इंग्रजीत क्लिष्ट कोड आणि कमांड्स टाईप कराव्या लागायच्या (उदा. 'DIR', 'COPY C:\\...'). एक चूक झाली की काहीच चालायचे नाही!"
        },
        afterGUI: {
          title: "क्रांती: Graphical User Interface (GUI)",
          desc: "स्क्रीनवर सुंदर फोल्डर्स, फाइल्स, कचऱ्याची पेटी (Recycle Bin) आणि रंगीत आयकॉन्स! फक्त माउसने 'डबल क्लिक' केले की फाईल उघडते. लहानांपासून वृद्धांपर्यंत कोणीही संगणक चालवू शकू लागले!"
        },
        source: "Computer History Museum — The GUI Revolution"
      },
      {
        id: "10-2",
        type: "person",
        title: "माउसचा शोध (The Computer Mouse — 1964)",
        englishTitle: "Douglas Engelbart and the Mother of All Demos (1968)",
        inventor: "डग्लस एंजेलबर्ट (Douglas Engelbart) — स्टॅनफोर्ड रिसर्च इन्स्टिट्यूट (SRI)",
        theFirstMouse: "पहिला माउस लाकडाचा बनवला होता! त्याच्या खाली दोन धातूची चाके होती आणि मागून वायर निघत असल्याने त्याला 'Mouse' (उंदीर) नाव पडले.",
        theMotherOfAllDemos: "१९६८ मध्ये एंजेलबर्ट यांनी जगासमोर पहिल्यांदा माउस, हायपरटेक्स्ट आणि व्हिडिओ कॉन्फरन्सिंगचे प्रात्यक्षिक दाखवून संपूर्ण जगाला चकित केले!",
        source: "Stanford University Archives & SRI International"
      },
      {
        id: "10-3",
        type: "milestone",
        title: "मॅकिंतोश (Macintosh 1984) आणि विंडोज (Windows)",
        englishTitle: "Xerox PARC, Apple Macintosh and Microsoft Windows",
        journey: [
          "Xerox PARC (1970s): माउस आणि GUI ची खरी निर्मिती झेरॉक्सच्या लॅबमध्ये झाली.",
          "Apple Macintosh (1984): स्टीव्ह जॉब्स यांनी माउस आणि GUI असलेला परवडणारा कमर्शियल संगणक बाजारात आणला.",
          "Microsoft Windows (1985 / 1995): मायक्रोसॉफ्टने विंडोज आणून जगातील ९०% पेक्षा जास्त संगणकांवर GUI पोहोचवले."
        ],
        source: "Computer History Museum — Xerox to Macintosh"
      },
      {
        id: "10-4",
        type: "diagram",
        title: "माहिती साठवण्याची (Storage) उत्क्रांती",
        englishTitle: "The Evolution of Computer Storage",
        storageStages: [
          { name: "पंच कार्डे (Punched Cards)", cap: "काही बाइट्स", icon: "📋" },
          { name: "मॅग्नेटिक टेप व फ्लॉपी डिस्क", cap: "१.४४ मेगाबाइट (MB)", icon: "💾" },
          { name: "सीडी / डीव्हीडी (CD/DVD)", cap: "७०० MB ते ४.७ GB", icon: "💿" },
          { name: "हार्ड डिस्क ड्राईव्ह (HDD)", cap: "काहीशे गिगाबाइट (GB)", icon: "💽" },
          { name: "सॉलिड स्टेट ड्राईव्ह (SSD / Flash)", cap: "टेराबाइट्स (TB) — सुपरफास्ट चिप्स!", icon: "⚡" },
          { name: "क्लाउड स्टोरेज (Cloud)", cap: "अमर्याद ऑनलाइन स्टोरेज!", icon: "☁️" }
        ],
        source: "Storage Networking Industry Association & IBM Archives"
      },
      {
        id: "10-5",
        type: "summary_card",
        title: "सॉफ्टवेअरने संगणकाला दिले जीवन",
        englishTitle: "Software Evolution",
        summaryPoints: [
          "हार्डवेअर म्हणजे संगणकाचे शरीर, तर सॉफ्टवेअर म्हणजे संगणकाचा आत्मा!",
          "ऑपरेटिंग सिस्टीमने (Windows, macOS, Linux, Android) हार्डवेअर चालवणे सोपे केले.",
          "ॲप्लिकेशन्समुळे (Paint, Word, Games, Browsers) संगणक चित्रकलेपासून विज्ञानापर्यंत सर्व कामांसाठी उपयुक्त ठरला."
        ],
        source: "IEEE Computer Society"
      }
    ],
    recap: {
      points: [
        "GUI (ग्राफिकल युजर इंटरफेस) मुळे क्लिष्ट कोड टाईप करण्याऐवजी आयकॉन्सवर क्लिक करणे सुरू झाले.",
        "डग्लस एंजेलबर्ट यांनी १९६४ मध्ये पहिला लाकडी माउस बनवला.",
        "स्टोरेजचा प्रवास पंच कार्ड ते फ्लॉपी डिस्क, हार्ड ड्राईव्ह, SSD आणि आता क्लाउड स्टोरेजपर्यंत झाला आहे."
      ]
    },
    teacherNotes: "विद्यार्थ्यांना वर्गात फ्लॉपी डिस्क किंवा पेनड्राइव्ह दाखवा आणि सांगा की एका पेनड्राइव्हमध्ये हजारो फ्लॉपी डिस्कएवढा डेटा मावतो!"
  },

  {
    id: 11,
    chapterNumber: "११",
    title: "Internet & World Wide Web",
    subtitle: "Connected Computers — जेव्हा संगणक एकमेकांशी बोलू लागले",
    purpose: "इंटरनेट आणि वर्ल्ड वाईड वेब यातील फरक, टिम बर्नर्स-ली आणि नेटवर्कची ताकद स्पष्ट करणे.",
    gradeSuitability: "Std 1 - 10",
    coverTag: "इंटरनेट आणि वर्ल्ड वाईड वेब",
    colorGradient: "from-blue-600 to-indigo-950",
    icon: "🌐",
    difficulty: {
      level1: "इंटरनेट म्हणजे काय? जगातील संगणक एकमेकांशी जोडणारे जाळे.",
      level2: "इंटरनेट (Hardware) वि. वेब (Information), टिम बर्नर्स-ली (1989), हायपरलिंक्स आणि ब्राउझर्स.",
      level3: "ARPANET (1969), TCP/IP प्रोटोकॉल, CERN मधील शोध, HTML/HTTP मानके, वेब १.० ते वेब ३.०."
    },
    slides: [
      {
        id: "11-1",
        type: "quote",
        title: "एकटा संगणक उपयुक्त असतो, पण जोडलेले संगणक महाशक्तिशाली बनतात!",
        englishTitle: "One Computer is Useful. Connected Computers are Powerful.",
        quoteText: "ज्याप्रमाणे एकटा माणूस समाजात राहून जास्त काम करू शकतो, तसेच जेव्हा जगभरातील संगणक वायर्स आणि लहरींनी जोडले गेले, तेव्हा ज्ञानाचा महासागर तयार झाला!",
        source: "Vint Cerf — Co-designer of TCP/IP protocols"
      },
      {
        id: "11-2",
        type: "technical",
        title: "इंटरनेटची सुरुवात: ARPANET (1969)",
        englishTitle: "The Birth of the Internet: ARPANET (1969)",
        history: "अमेरिकेच्या संरक्षण विभागाच्या DARPA ने विद्यापीठांमधील संगणक एकमेकांशी जोडण्यासाठी ARPANET ची स्थापना केली.",
        firstMessage: "२९ ऑक्टोबर १९६९ रोजी UCLA मधून स्टॅनफोर्डला पाठवलेला पहिला संदेश होता: 'LO' (त्यांना 'LOGIN' पाठवायचे होते, पण सिस्टीम क्रॅश झाली!).",
        protocol: "विंट सर्फ (Vint Cerf) आणि बॉब कान (Bob Kahn) यांनी 'TCP/IP' नियम तयार केले, ज्यामुळे जगातील कोणतेही दोन संगणक डेटाची देवाणघेवाण करू शकतात.",
        source: "DARPA Historical Archives & Computer History Museum"
      },
      {
        id: "11-3",
        type: "person",
        title: "वर्ल्ड वाईड वेब (WWW) आणि टिम बर्नर्स-ली (1989)",
        englishTitle: "Tim Berners-Lee and the World Wide Web (1989)",
        inventor: "सर टिम बर्नर्स-ली (Sir Tim Berners-Lee)",
        institution: "CERN (युरोपियन अणुसंशोधन प्रयोगशाळा), जिनिव्हा, स्वित्झर्लंड",
        theProblem: "CERN मधील शास्त्रज्ञांना एकमेकांचे शोधनिबंध आणि माहिती पाहणे खूप अवघड जात होते.",
        theInvention: "१९८९ मध्ये टिम बर्नर्स-ली यांनी 'World Wide Web' चा प्रस्ताव मांडला — हायपरटेक्स्टच्या साहाय्याने एका पानावरून दुसऱ्या पानावर उडी मारण्याची जादू!",
        giftToHumanity: "CERN आणि टिम बर्नर्स-ली यांनी ही अद्भुत प्रणाली कोणत्याही रॉयल्टीशिवाय संपूर्ण मानवजातीला मोफत खुली करून दिली!",
        source: "CERN Historical Archives — The Birth of the Web"
      },
      {
        id: "11-4",
        type: "comparison",
        title: "इंटरनेट विरुद्ध वेब — फरक समजून घ्या!",
        englishTitle: "Internet vs World Wide Web (Critical Distinction)",
        points: [
          {
            term: "इंटरनेट (Internet)",
            analogy: "महामार्ग / रस्त्यांचे जाळे (Road Network)",
            desc: "जगातील लाखो संगणक, सर्व्हर्स, केबल्स आणि राऊटर्सना भौतिकरित्या जोडणारे हार्डवेअर जाळे."
          },
          {
            term: "वर्ल्ड वाईड वेब (Web / WWW)",
            analogy: "त्या रस्त्यांवर धावणाऱ्या गाड्या (Cars on the Road)",
            desc: "त्या इंटरनेटवर उपलब्ध असलेल्या वेबसाईटस्, वेबपेजेस, चित्रे आणि माहितीची सेवा. (इंटरनेटवरून आपण ईमेल, गेमिंग किंवा व्हॉट्सॲपही वापरतो, जे वेबपेक्षा वेगळे असू शकतात)."
          }
        ],
        source: "W3C (World Wide Web Consortium)"
      },
      {
        id: "11-5",
        type: "milestone",
        title: "वेबसाइट्स ते सोशल मीडिया आणि स्मार्टफोन",
        englishTitle: "From Static Websites to Social Media and Smartphones",
        phases: [
          "Web 1.0 (1990s): फक्त माहिती वाचणे (Read-Only) — याहू, वृत्तपत्रे, साध्या वेबसाइट्स.",
          "Web 2.0 (2000s): लोकांनी स्वतः माहिती तयार करणे (Read-Write) — विकिपीडिया, यूट्यूब, सोशल मीडिया.",
          "Mobile Web: स्मार्टफोनमुळे इंटरनेट प्रत्येकाच्या खिशात पोहोचले — UPI पेमेंट, ऑनलाइन शिक्षण, नकाशे!"
        ],
        source: "Computer History Museum — Internet History"
      }
    ],
    recap: {
      points: [
        "ARPANET (1969) मधून आधुनिक इंटरनेटचा जन्म झाला.",
        "१९८९ मध्ये CERN येथे सर टिम बर्नर्स-ली यांनी World Wide Web (WWW) चा शोध लावला.",
        "इंटरनेट हे जगभरातील संगणकांना जोडणारे हार्डवेअर नेटवर्क आहे, तर वेब ही त्यावर चालणारी माहितीची सेवा आहे."
      ]
    },
    teacherNotes: "विद्यार्थ्यांना विचारा: तुम्ही दररोज इंटरनेटचा वापर कशासाठी करता? जर एक दिवस इंटरनेट बंद झाले तर काय होईल?"
  },

  {
    id: 12,
    chapterNumber: "१२",
    title: "Computer History in India",
    subtitle: "TIFRAC to PARAM Supercomputers — भारताची अभिमानास्पद संगणक गाथा",
    purpose: "भारतातील सुरुवातीचा संगणक TIFRAC, प्रा. आर. नरसिंहन, C-DAC आणि परम ८००० ची स्वदेशी क्रांती शिकवणे.",
    gradeSuitability: "Std 1 - 10",
    coverTag: "भारताचा गौरवशाली संगणक इतिहास",
    colorGradient: "from-amber-600 via-indigo-700 to-purple-900",
    icon: "🇮🇳",
    difficulty: {
      level1: "भारतात तयार झालेला पहिला संगणक (TIFRAC) आणि भारताचा पहिला सुपरकॉम्प्युटर (PARAM).",
      level2: "TIFR मुंबई, डॉ. होमी भाभा, TIFRAC (1960), डॉ. विजय भटकर आणि परम ८००० (1991).",
      level3: "१९५४ ते १९६० चा TIFRAC प्रवास, प्रा. आर. नरसिंहन यांचे नेतृत्व, अमेरिकेने सुपरकॉम्प्युटर नाकारल्यावर C-DAC ची निर्मिती आणि पॅरलल प्रोसेसिंग."
    },
    slides: [
      {
        id: "12-1",
        type: "cover",
        title: "भारत आणि संगणकाची सुरुवात",
        englishTitle: "India's Journey into Computing",
        heritage: "भारताने स्वातंत्र्य मिळाल्यानंतर लगेचच संगणक तंत्रज्ञानात स्वतःचे पाऊल टाकले. डॉ. होमी भाभा यांच्या दूरदृष्टीमुळे भारतात स्वदेशी संगणक बनवण्याचे काम सुरू झाले.",
        source: "Tata Institute of Fundamental Research (TIFR) Archives"
      },
      {
        id: "12-2",
        type: "machine",
        title: "TIFRAC — भारताचा पहिला स्वदेशी डिजिटल संगणक",
        englishTitle: "TIFRAC (TIFR Automatic Calculator) — Mumbai",
        institution: "टाटा इन्स्टिट्यूट ऑफ फंडामेंटल रिसर्च (TIFR), मुंबई",
        timeline: [
          { year: "1954", event: "संगणक विज्ञान व तंत्रज्ञान गटाची स्थापना." },
          { year: "1956", event: "पायलेट मशीन (Pilot Model) यशस्वीरित्या कार्यान्वित झाले." },
          { year: "1960", event: "संपूर्ण क्षमतेचा मुख्य संगणक तयार झाला, ज्याला पंडित जवाहरलाल नेहरूंनी 'TIFRAC' नाव दिले!" }
        ],
        source: "TIFR Archives & IEEE Annals"
      },
      {
        id: "12-3",
        type: "person",
        title: "प्रा. आर. नरसिंहन (Prof. R. Narasimhan)",
        englishTitle: "Prof. Rangaswamy Narasimhan — Pioneer of Indian Computing",
        contribution: "त्यांनी TIFRAC प्रकल्पाचे तांत्रिक नेतृत्व केले. भारतात संगणक शिक्षण आणि संशोधनाचा पाया रचण्यात त्यांचा सिंहाचा वाटा आहे.",
        wordsOfWisdom: "त्यांनी सिद्ध केले की भारत केवळ परदेशी तंत्रज्ञान आयात करणारा देश नाही, तर स्वतः आधुनिक संगणक तयार करणारा देश आहे!",
        source: "Current Science & TIFR Archives"
      },
      {
        id: "12-4",
        type: "milestone",
        title: "C-DAC आणि 'परम ८०००' (PARAM 8000) — १९९१",
        englishTitle: "C-DAC and India's First Indigenous Supercomputer",
        backgroundStory: "१९८० च्या दशकात भारताला हवामानाचा अंदाज लावण्यासाठी अमेरिकेकडून 'Cray' सुपरकॉम्प्युटर हवा होता; पण अमेरिकेने भारतावर तंत्रज्ञान बंदी घालत तो देण्यास नकार दिला!",
        indiaAnswer: "भारताने हे आव्हान स्वीकारले! पुण्यात C-DAC (Centre for Development of Advanced Computing) ची स्थापना करण्यात आली.",
        leader: "डॉ. विजय भटकर (Dr. Vijay Bhatkar) यांच्या नेतृत्वाखाली भारतीय शास्त्रज्ञांनी १९९१ मध्ये **PARAM 8000** हा स्वदेशी सुपरकॉम्प्युटर तयार करून जगाला थक्क केले!",
        paramMeaning: "'PARAM' म्हणजे संस्कृतमध्ये 'सर्वश्रेष्ठ' (आणि 'PARAllel Machine' चे संक्षिप्त रूप).",
        source: "C-DAC Official Archives & Ministry of Electronics and IT (MeitY)"
      },
      {
        id: "12-5",
        type: "summary_card",
        title: "भारताचा जागतिक टेक महासत्ता म्हणून प्रवास",
        englishTitle: "India's Tech Powerhouse Journey",
        milestones: [
          "१९५० चे दशक: TIFR मध्ये स्वतःचे संगणक बनवले.",
          "१९९० चे दशक: स्वदेशी सुपरकॉम्प्युटर PARAM 8000 ची निर्मिती.",
          "२००० चे दशक: जगातील सर्वात मोठे IT आणि सॉफ्टवेअर केंद्र.",
          "आज: UPI द्वारे जगातील सर्वात मोठी डिजिटल पेमेंट व्यवस्था, इस्रोच्या अंतराळ मोहिमांसाठी भारतीय सुपरकॉम्प्युटर आणि जागतिक टेक कंपन्यांचे नेतृत्व!"
        ],
        source: "Ministry of Electronics & Information Technology, Govt. of India"
      }
    ],
    recap: {
      points: [
        "TIFRAC हा भारताचा पहिला स्वदेशी डिजिटल संगणक होता, जो TIFR मुंबई येथे १९५४ ते १९६० दरम्यान विकसित झाला.",
        "प्रा. आर. नरसिंहन यांनी TIFRAC च्या डिझाइनचे नेतृत्व केले.",
        "१९९१ मध्ये डॉ. विजय भटकर आणि C-DAC च्या चमूने भारताचा पहिला सुपरकॉम्प्युटर 'PARAM 8000' तयार केला."
      ]
    },
    teacherNotes: "विद्यार्थ्यांना भारताच्या स्वावलंबनाची गोष्ट सांगा: जेव्हा आपल्याला परदेशातून सुपरकॉम्प्युटर नाकारला, तेव्हा आपण स्वतःचा सुपरकॉम्प्युटर बनवून जगाला दाखवून दिले!"
  },

  {
    id: 13,
    chapterNumber: "१३",
    title: "Inside a Computer",
    subtitle: "Hardware Anatomy — संगणकाचे पोट उघडून पाहूया!",
    purpose: "CPU, RAM, स्टोरेज, मदरबोर्ड, GPU आणि इनपुट/आउटपुट यांचे कार्य आणि साध्या उपमांच्या साहाय्याने रचना स्पष्ट करणे.",
    gradeSuitability: "Std 1 - 10",
    coverTag: "हार्डवेअर अंतरंग",
    colorGradient: "from-indigo-700 to-purple-900",
    icon: "🧩",
    difficulty: {
      level1: "संगणकाचे मुख्य अवयव: मेंदू (CPU), कपाट (Storage), कामाचे टेबल (RAM).",
      level2: "मदरबोर्ड, CPU चे काम, RAM वि. स्टोरेज, GPU (चित्रांसाठी प्रोसेसर).",
      level3: "व्हॉन न्यूमन आर्किटेक्चर (Von Neumann), ALU, Control Unit, कॅश मेमरी, सिस्टीम बस आणि डेटा ट्रान्सफर."
    },
    slides: [
      {
        id: "13-1",
        type: "overview",
        title: "तुमच्या संगणकाच्या आत काय काय असते?",
        englishTitle: "What is Inside Your Computer?",
        introduction: "बाहेरून फक्त एक स्क्रीन किंवा डबा दिसणाऱ्या संगणकाच्या आत अनेक आश्चर्यकारक घटक एका तालात काम करत असतात!",
        source: "IEEE Computer Society Education"
      },
      {
        id: "13-2",
        type: "hardware_part",
        title: "CPU (Central Processing Unit) — संगणकाचा मेंदू",
        englishTitle: "CPU — The Brain of the Computer",
        analogy: "ज्याप्रमाणे आपला मेंदू शरीराच्या सर्व अवयवांना सूचना देतो आणि विचार करतो, तसेच CPU सर्व आज्ञांवर प्रक्रिया करतो.",
        twoMainParts: [
          "ALU (Arithmetic Logic Unit): गणिती हिशोब (+, -, x) आणि तुलना (<, >, =) करतो.",
          "CU (Control Unit): इतर सर्व भागांना कधी आणि काय काम करायचे याचे आदेश देतो."
        ],
        speed: "आजचे CPU एका सेकंदात अब्जावधी (Billions) गणिती प्रक्रिया करू शकतात!",
        source: "Intel / AMD Architecture Documentation"
      },
      {
        id: "13-3",
        type: "comparison",
        title: "RAM विरुद्ध Storage — कामाचे टेबल वि. कपाट!",
        englishTitle: "RAM vs Storage: The Kitchen Analogy",
        analogyExplanation: "एक स्वयंपाकघर समजा:",
        ramDesc: "🍲 **RAM (कामाचा ओटा / Desk):** तुम्ही सध्या जेवण बनवत असताना भाज्या आणि मसाले ज्या ओट्यावर ठेवता, ती म्हणजे RAM! हे तात्पुरते (Volatile) असते. वीज गेली की यातला डेटा नाहीसा होतो. पण हा अतिशय वेगवान असतो.",
        storageDesc: "🚪 **Storage (कपाट / फ्रिज / Shelf):** वर्षाचा तांदूळ, डाळी किंवा जुन्या वस्तू ज्या कपाटात सुरक्षित ठेवता, ते म्हणजे Storage (SSD / Hard Drive). हे कायमस्वरूपी (Non-volatile) असते. वीज गेली तरी डेटा सुरक्षित राहतो!",
        source: "Computer Science Field Guide"
      },
      {
        id: "13-4",
        type: "hardware_part",
        title: "मदरबोर्ड (Motherboard) — सर्वांना जोडणारा महामार्ग",
        englishTitle: "Motherboard — The Main Circuit Board",
        whatIsIt: "संगणकातील सर्वात मोठा मुख्य बोर्ड. यावर CPU, RAM, ग्राफिक्स कार्ड आणि स्टोरेज प्लग केलेले असतात.",
        buses: "याच्यावरील बारीक सोनेरी आणि तांब्याच्या रेषांना 'Buses' म्हणतात, ज्यांच्यावरून डेटा प्रकाशाच्या वेगाने एका घटकाकडून दुसऱ्या घटकाकडे धावतो.",
        source: "CompTIA A+ Hardware Architecture"
      },
      {
        id: "13-5",
        type: "hardware_part",
        title: "GPU (Graphics Processing Unit) — दृश्यांचा जादूगार",
        englishTitle: "GPU — The Visual Master and AI Engine",
        role: "स्क्रीनवर दिसणारे हाय-डेफिनिशन व्हिडिओ, 3D व्हिडिओ गेम्स आणि क्लिष्ट ग्राफिक्स तयार करण्याचे काम GPU करतो.",
        aiConnection: "आजच्या आधुनिक जगात AI मॉडेल्सना ट्रेनिंग देण्यासाठी GPU ची प्रचंड मदत होते, कारण GPU एकाच वेळी हजारो समांतर हिशोब (Parallel Processing) करू शकतो!",
        source: "NVIDIA Deep Learning Institute"
      },
      {
        id: "13-6",
        type: "diagram",
        title: "संपूर्ण कॉम्प्युटर आर्किटेक्चर (Computer Architecture)",
        englishTitle: "Von Neumann Architecture",
        diagramSteps: [
          { step: "Input", desc: "कीबोर्ड, माउस, मायक्रोफोन, कॅमेरा", icon: "📥" },
          { step: "CPU & Memory", desc: "कंट्रोल युनिट + ALU + RAM", icon: "🧠" },
          { step: "Storage", desc: "SSD किंवा हार्ड ड्राईव्ह", icon: "💾" },
          { step: "Output", desc: "मॉनिटर, स्पीकर, प्रिंटर", icon: "📤" }
        ],
        source: "John von Neumann — First Draft of a Report on the EDVAC (1945)"
      }
    ],
    recap: {
      points: [
        "CPU हा संगणकाचा मेंदू आहे (ALU + Control Unit).",
        "RAM ही जलद तात्पुरती मेमरी आहे (कामाचा ओटा), तर Storage हा कायमस्वरूपी डेटा ठेवतो (कपाट).",
        "मदरबोर्ड हे सर्वांना जोडणारे मुख्य सर्किट बोर्ड आहे, आणि GPU ग्राफिक्स व AI साठी समांतर प्रक्रिया करतो."
      ]
    },
    teacherNotes: "विद्यार्थ्यांना 'स्वयंपाकघर' किंवा 'अभ्यासाचे टेबल आणि दप्तर' ही उपमा देऊन RAM आणि Storage चा फरक स्पष्ट करा."
  },

  {
    id: 14,
    chapterNumber: "१४",
    title: "From PC to Smartphone & Cloud",
    subtitle: "Pocket Computers & Invisible Giants — डेस्कटॉप ते खिशातील संगणक आणि क्लाउड",
    purpose: "मोबाईल कसा संगणक बनला आणि क्लाउड कम्प्युटिंगचे अदृश्य जग कसे चालते हे समजावणे.",
    gradeSuitability: "Std 1 - 10",
    coverTag: "स्मार्टफोन आणि क्लाउड युग",
    colorGradient: "from-blue-600 to-indigo-900",
    icon: "☁️",
    difficulty: {
      level1: "आपला मोबाईल हा एक लहान संगणक आहे आणि इंटरनेटवरील फोटो कुठे साठवले जातात.",
      level2: "डेस्कटॉप ➔ लॅपटॉप ➔ स्मार्टफोन, सेन्सर्स (GPS, कॅमेरा), क्लाउड कम्प्युटिंगची साधी उदाहरणे (YouTube, Google Drive).",
      level3: "System on Chip (SoC), डेटा सेंटर्स, व्हर्च्युअलायझेशन, क्लाउड सर्व्हिस मॉडेल्स (IaaS, PaaS, SaaS) आणि हाय-स्पीड नेटवर्किंग."
    },
    slides: [
      {
        id: "14-1",
        type: "question",
        title: "संगणक तुमच्या खिशात कसा शिरला?",
        englishTitle: "How Did the Computer Enter Your Pocket?",
        theShrinkingStory: "एकेकाळी ३० टन वजनाचा आणि ३ खोल्या व्यापणारा संगणक आज तुमच्या शर्टाच्या खिशात बसतो आणि बॅटरीवर दिवसभर चालतो! हे कसे घडले?",
        secret: "उत्तर आहे: **SoC (System on a Chip)** — CPU, GPU, RAM, मोडेम आणि सेन्सर्स एकाच लहान चिपवर एकत्र तयार केले गेले!",
        source: "Computer History Museum — Mobile Computing"
      },
      {
        id: "14-2",
        type: "comparison",
        title: "डेस्कटॉप ➔ लॅपटॉप ➔ स्मार्टफोन",
        englishTitle: "Evolution of Computing Form Factors",
        stages: [
          { name: "डेस्कटॉप (Desktop)", desc: "एकाच जागेवर टेबलावर ठेवावा लागणारा, जड आणि थेट प्लगवर चालणारा संगणक.", icon: "🖥️" },
          { name: "लॅपटॉप (Laptop)", desc: "बॅटरीवर चालणारा, फोल्ड करून दप्तरात घेऊन जाता येणारा फिरता संगणक.", icon: "💻" },
          { name: "स्मार्टफोन (Smartphone)", desc: "टचस्क्रीन, कॅमेरा, जीपीएस, इंटरनेट आणि सेन्सर्स असलेला सतत सोबत असणारा संगणक!", icon: "📱" }
        ],
        source: "IEEE Spectrum"
      },
      {
        id: "14-3",
        type: "concept",
        title: "क्लाउड कम्प्युटिंग (Cloud Computing) म्हणजे काय?",
        englishTitle: "What is Cloud Computing?",
        myth: "गैरसमज: क्लाउड म्हणजे आकाशात ढगांमध्ये डेटा असतो.",
        fact: "सत्य: क्लाउड म्हणजे पृथ्वीवर कुठेतरी हजारो मैल दूर वातानुकूलित इमारतींमध्ये २४ तास सुरू असलेले हजारो महाकाय सर्व्हर संगणक!",
        analogy: "ज्याप्रमाणे आपल्याला घरात वीज हवी असेल तर स्वतःचा जनरेटर न लावता आपण वीज मंडळाकडून वीज घेतो आणि वापरानुसार बिल भरतो; तसेच स्वतः महाकाय संगणक न खरेदी करता इंटरनेटवरून दुसऱ्याचे संगणक वापरणे म्हणजे 'क्लाउड कम्प्युटिंग'!",
        source: "NIST (National Institute of Standards and Technology) Definition of Cloud"
      },
      {
        id: "14-4",
        type: "machine",
        title: "डेटा सेंटर (Data Centre) — आधुनिक जगाची मंदिरे",
        englishTitle: "Data Centres — The Engine of the Modern Web",
        whatIsInside: "फुटबॉल मैदानाएवढ्या मोठ्या इमारती, ज्यांच्यात शेकडो रॅक्समध्ये लाखो सर्व्हर्स एकाच वेळी चालू असतात.",
        securityAndCooling: "प्रचंड पाण्याचे किंवा एअर कुलर्स, अखंड वीज पुरवठा आणि अतिशय कडक सुरक्षा व्यवस्था.",
        source: "Google / Microsoft Data Center Architecture Overviews"
      },
      {
        id: "14-5",
        type: "activity",
        title: "तुमच्या दैनंदिन जीवनातील क्लाउडची उदाहरणे",
        englishTitle: "Everyday Cloud Examples in Your Life",
        examples: [
          { name: "यूट्यूब (YouTube)", desc: "कोट्यवधी व्हिडिओ तुमच्या फोनच्या मेमरीमध्ये नसतात, ते गुगलच्या क्लाउड सर्व्हरवरून प्ले होतात!" },
          { name: "गुगल ड्राईव्ह / फोटो", desc: "तुमचा फोन हरवला तरी नवीन फोनमध्ये लॉगिन करताच जुने फोटो पुन्हा दिसतात!" },
          { name: "ऑनलाइन गेम्स", desc: "जगातील इतर देशांतील मित्रांसोबत एकाच वेळी रिअल-टाईम खेळणे." },
          { name: "UPI व बँकिंग", desc: "एका सेकंदात पैसे ट्रान्सफर होणे." }
        ],
        source: "Cloud Computing Alliance"
      }
    ],
    recap: {
      points: [
        "SoC (System on Chip) मुळे संपूर्ण संगणक एका लहान चिपवर बसून स्मार्टफोन बनला.",
        "क्लाउड कम्प्युटिंग म्हणजे इंटरनेटद्वारे वापरले जाणारे दूरवरच्या डेटा सेंटर्समधील संगणक.",
        "यूट्यूब, जीमेल, गुगल ड्राईव्ह आणि ऑनलाइन गेम्स हे सर्व क्लाउडवर चालतात."
      ]
    },
    teacherNotes: "विद्यार्थ्यांना विचारा: जर तुमचा फोन हरवला, तर तुमचे फोटो कायमचे नष्ट होतात का? क्लाउड बॅकअप कसा काम करतो हे समजावून सांगा."
  },

  {
    id: 15,
    chapterNumber: "१५",
    title: "AI & The Fifth Generation Question",
    subtitle: "Is AI the Fifth Generation? — कृत्रिम बुद्धिमत्ता आणि पाचव्या पिढीचा प्रश्न",
    purpose: "पाचवी पिढी ही शैक्षणिक वर्गवारी आहे की अंतिम सत्य, AI म्हणजे काय आणि पारंपरिक संगणक वि. AI सिस्टीम स्पष्ट करणे.",
    gradeSuitability: "Std 1 - 10",
    coverTag: "पाचवी पिढी व कृत्रिम बुद्धिमत्ता",
    colorGradient: "from-purple-800 via-indigo-800 to-slate-950",
    icon: "🤖",
    difficulty: {
      level1: "AI म्हणजे काय? संगणक उदाहरणांवरून कसा शिकतो (जसे कुत्रा आणि मांजराचा फोटो ओळखणे).",
      level2: "पाचवी पिढी (शैक्षणिक संकल्पना), मशीन लर्निंगची मूलभूत कल्पना, पारंपरिक प्रोग्रामिंग वि. AI.",
      level3: "जपानचा फिफ्थ जनरेशन कॉम्प्युटर सिस्टीम (FGCS) प्रकल्प, न्यूरल नेटवर्क्स, लार्ज लँग्वेज मॉडेल्स (LLMs), AI ची वस्तुस्थिती आणि मर्यादा."
    },
    slides: [
      {
        id: "15-1",
        type: "question",
        title: "AI ही संगणकाची 'पाचवी पिढी' आहे का?",
        englishTitle: "Is AI the Fifth Generation?",
        importantHistoricalNote: "महत्त्वाची ऐतिहासिक नोंद:",
        explanationText: "शालेय पाठ्यपुस्तकांमध्ये अनेकदा 'पाचवी पिढी = AI' असे शिकवले जाते. परंतु इतिहासात आणि विज्ञानात पाचवी पिढी ही व्हॅक्यूम ट्यूब किंवा ट्रान्झिस्टरसारखी निश्चित हार्डवेअर सीमा नाही! ती प्रामुख्याने एक शैक्षणिक वर्गवारी (Educational Classification) आहे.",
        japanStory: "१९८० च्या दशकात जपानने 'Fifth Generation Computer Systems (FGCS)' नावाचा भव्य प्रकल्प सुरू केला होता, ज्याचा उद्देश मानवासारखा संवाद साधणारी इंटेलिजंट मशिन्स बनवणे हा होता.",
        source: "Computer History Museum — The Fifth Generation Project"
      },
      {
        id: "15-2",
        type: "comparison",
        title: "पारंपरिक संगणक विरुद्ध AI सिस्टीम",
        englishTitle: "Traditional Computer vs AI System",
        traditional: {
          title: "पारंपरिक संगणक (Traditional Computer)",
          how: "मानवाने प्रत्येक नियमाचा कोड (Rules & Logic) स्वतः हाताने लिहिला पाहिजे.",
          rule: "जर प्रोग्रामरने कोड लिहिला नाही, तर संगणक काहीही करू शकत नाही. (Rule-based)"
        },
        aiSystem: {
          title: "AI आणि मशीन लर्निंग (Machine Learning)",
          how: "संगणकाला नियम न देता लाखो उदाहरणे (Data) दिली जातात.",
          rule: "संगणक स्वतः त्या उदाहरणांमधील पॅटर्न शोधून शिकतो! (Data-driven pattern learning)"
        },
        source: "Stanford Institute for Human-Centered Artificial Intelligence (HAI)"
      },
      {
        id: "15-3",
        type: "concept",
        title: "Machine Learning कसे काम करते? (सोपे उदाहरण)",
        englishTitle: "How Machine Learning Works — Dog or Cat?",
        steps: [
          { step: "१. डेटा देणे", desc: "संगणकाला कुत्रे आणि मांजरांचे १०,००,००० फोटो दाखवले जातात.", icon: "📸" },
          { step: "२. पॅटर्न शिकणे", desc: "संगणक कान, मिश्या, डोळे आणि चेहऱ्याचे वैशिष्ट्ये आपोआप मोजतो.", icon: "🧠" },
          { step: "३. नवीन फोटो ओळखणे", desc: "जेव्हा नवीन अज्ञात फोटो दिला जातो, तेव्हा तो अचूक सांगतो: 'हा मांजर असण्याची शक्यता ९९% आहे!'", icon: "✅" }
        ],
        source: "MIT OpenCourseWare — Introduction to Machine Learning"
      },
      {
        id: "15-4",
        type: "milestone",
        title: "जेनेरेटिव्ह AI (Generative AI) — निर्मिती करणारी बुद्धिमत्ता",
        englishTitle: "Generative AI: Creating Text, Art & Code",
        whatIsIt: "फक्त माहिती ओळखणेच नव्हे, तर मानवाच्या साध्या सूचनेवरून (Prompt) नवीन निबंध, कविता, चित्रे किंवा संगणक कोड तयार करणे!",
        examples: "ChatGPT, Gemini, Midjourney, Claude यांसारखी आधुनिक लार्ज लँग्वेज मॉडेल्स (LLMs).",
        caution: "लक्षात ठेवा: AI कडे स्वतःची जाणीव किंवा खरी समज नसते. ते गणितीय संभाव्यतेच्या (Statistical Probability) आधारे पुढचा सर्वात योग्य शब्द जोडते!",
        source: "Google Research & DeepMind Publications"
      },
      {
        id: "15-5",
        type: "summary_card",
        title: "सत्य काय आहे? (The Reality of AI)",
        englishTitle: "What is AI Really?",
        bullets: [
          "AI म्हणजे कोणतीही जादू किंवा मानवासारखा रोबोट नाही.",
          "AI म्हणजे अतिशय प्रगत गणित, अल्गोरिदम्स आणि महाकाय संगणकीय डेटा प्रोसेसिंग आहे.",
          "AI हे मानवाचा एक अतिशय उपयुक्त मदतनीस आहे, पण अंतिम निर्णय आणि विवेक नेहमी मानवाचाच असतो!"
        ],
        source: "ACM Code of Ethics and Professional Conduct"
      }
    ],
    recap: {
      points: [
        "'पाचवी पिढी' ही एक शैक्षणिक वर्गवारी आहे जी AI-आधारित संगणनाला उद्देशून वापरली जाते.",
        "पारंपरिक संगणक नियमांनुसार चालतो, तर AI डेटा आणि उदाहरणांमधून पॅटर्न शिकतो.",
        "AI ला स्वतःची जाणीव नसते; ते प्रगत गणित आणि डेटावर आधारित काम करते."
      ]
    },
    teacherNotes: "विद्यार्थ्यांना विचारा: तुम्ही AI टूल्स वापरली आहेत का? संगणक जेव्हा कविता लिहितो तेव्हा तो खरंच विचार करतो का की फक्त पॅटर्न जोडतो?"
  },

  {
    id: 16,
    chapterNumber: "१६",
    title: "Modern Computing",
    subtitle: "Nanometers & Billions of Transistors — आधुनिक संगणकाचे अद्भुत जग",
    purpose: "CPU + GPU + NPU ची रचना, नॅनोमीटर तंत्रज्ञान, IoT आणि एज कम्प्युटिंगचे आधुनिक रूप दाखवणे.",
    gradeSuitability: "Std 1 - 10",
    coverTag: "आधुनिक संगणन व सिलिकॉन जादू",
    colorGradient: "from-blue-700 to-indigo-900",
    icon: "⚡",
    difficulty: {
      level1: "एका लहान चिपवर अब्जावधी ट्रान्झिस्टर, स्मार्ट घड्याळे आणि इंटरनेटशी जोडलेल्या वस्तू.",
      level2: "CPU + GPU + AI चिप्स (NPU), नॅनोमीटर (nm) म्हणजे काय, IoT (Internet of Things).",
      level3: "3nm/2nm सिलिकॉन फॅब्रिकेशन, फिनफेट (FinFET) / GAA आर्किटेक्चर, एज कम्प्युटिंग आणि हेटेरोजेनियस कम्प्युटिंग."
    },
    slides: [
      {
        id: "16-1",
        type: "staggering_fact",
        title: "एका चिपवर अब्जावधी ट्रान्झिस्टर!",
        englishTitle: "Modern Computers Have Billions of Transistors",
        comparisonNumber: "१९७१ मध्ये पहिल्या Intel 4004 वर २,३०० ट्रान्झिस्टर होते.",
        todayNumber: "आज तुमच्या स्मार्टफोनमधील किंवा लॅपटॉपमधील एका छोट्या चिपवर तब्बल **१५ ते २५ अब्ज (15-25 Billion)** ट्रान्झिस्टर असतात!",
        nanoScale: "हे ट्रान्झिस्टर अवघ्या ३ नॅनोमीटर (3nm) आकाराचे असतात — मानवी केसाच्या जाडीपेक्षा हजारो पटींनी लहान!",
        source: "TSMC & Intel Technology Roadmaps"
      },
      {
        id: "16-2",
        type: "diagram",
        title: "आधुनिक चिपचे त्रिकूट: CPU + GPU + NPU",
        englishTitle: "Modern Triad: CPU + GPU + NPU / AI Accelerator",
        trio: [
          { name: "CPU (सर्वसाधारण कामे)", desc: "सिस्टीम चालवणे, ॲप्स उघडणे, दैनंदिन प्रक्रिया.", icon: "🧠" },
          { name: "GPU (ग्राफिक्स व पॅरलल)", desc: "स्क्रीनवरील उच्च ग्राफिक्स, गेमिंग आणि व्हिज्युअल इफेक्ट्स.", icon: "🎮" },
          { name: "NPU (Neural Processing Unit)", desc: "कॅमेऱ्यातील फेस रेकग्निशन, व्हॉईस ट्रान्सलेशन आणि AI मॉडेल्ससाठी खास डिझाइन केलेली चिप!", icon: "⚡" }
        ],
        source: "Apple Silicon & Qualcomm Snapdragon Architecture"
      },
      {
        id: "16-3",
        type: "concept",
        title: "इंटरनेट ऑफ थिंग्ज (IoT) — सर्व वस्तू बोलू लागल्या!",
        englishTitle: "Internet of Things (IoT)",
        whatIsIt: "केवळ संगणक किंवा फोनच नव्हे, तर घड्याळ, टीव्ही, पंखा, एसी, बल्ब, कार आणि शेतातील सेन्सर्स इंटरनेटशी जोडले जाणे.",
        smartWorld: "स्मार्टवॉच तुमच्या हृदयाचे ठोके मोजते, स्मार्ट कार आपोआप ब्रेक लावते आणि स्मार्ट शेती सेन्सर्स मातीतील ओलावा मोजतात!",
        source: "IEEE Internet of Things Initiative"
      },
      {
        id: "16-4",
        type: "concept",
        title: "एज कम्प्युटिंग (Edge Computing) — त्वरित निर्णय!",
        englishTitle: "Edge Computing — Computing at the Source",
        problem: "प्रत्येक वेळी डेटा दूरच्या क्लाउड सर्व्हरला पाठवून उत्तराची वाट पाहणे धोक्याचे ठरू शकते (उदा. आपोआप चालणारी चालकविरहित कार).",
        solution: "क्लाउडवर अवलंबून न राहता थेट कारमधील किंवा कॅमेऱ्यातील स्थानिक चिपवर एका मिलिसेकंदात निर्णय घेणे म्हणजे 'Edge Computing'!",
        source: "ACM SIGMOBILE & IEEE Edge Computing Group"
      }
    ],
    recap: {
      points: [
        "आजच्या आधुनिक चिप्सवर ३ नॅनोमीटर आकाराचे अब्जावधी ट्रान्झिस्टर असतात.",
        "आधुनिक उपकरणांमध्ये CPU, GPU आणि NPU (AI ॲक्सिलेटर) एकत्र काम करतात.",
        "IoT आणि एज कम्प्युटिंगमुळे संगणन थेट आपल्या आजूबाजूच्या वस्तूंमध्ये पोहोचले आहे."
      ]
    },
    teacherNotes: "विद्यार्थ्यांना विचार करा की त्यांच्या घरात किंवा शाळेत कोणकोणत्या वस्तूंना सेन्सर्स आहेत किंवा इंटरनेट जोडलेले आहे."
  },

  {
    id: 17,
    chapterNumber: "१७",
    title: "Future of Computing",
    subtitle: "What Comes Next? — संगणकाचे भविष्य आणि पुढील क्षितिजे",
    purpose: "क्वांटम कम्प्युटिंग, रोबोटिक्स, ब्रेन-कॉम्प्युटर इंटरफेस आणि मानव-संगणक सहकार्य स्पष्ट करणे.",
    gradeSuitability: "Std 1 - 10",
    coverTag: "भविष्यातील तंत्रज्ञान",
    colorGradient: "from-indigo-800 to-purple-950",
    icon: "🚀",
    difficulty: {
      level1: "भविष्यातील रोबोट्स, विचार करून चालणारे संगणक आणि माणसाचे सोबती.",
      level2: "क्वांटम संगणक (Qubits), सुपरपोझिशनची साधी कल्पना, रोबोटिक्स आणि Brain-Computer Interface.",
      level3: "क्वांटम बिट्स (0 आणि 1 एकाच वेळी), न्यूरोमॉर्फिक चिप्स, सायबर सुरक्षा, मानवी बुद्धिमत्ता वि. कृत्रिम बुद्धिमत्तेचे सहअस्तित्व."
    },
    slides: [
      {
        id: "17-1",
        type: "question",
        title: "पुढे काय येणार? (What Comes Next?)",
        englishTitle: "Beyond Silicon — The Future of Computing",
        theLimit: "सिलिकॉन चिप्सवरील ट्रान्झिस्टर अणूच्या (Atom) आकाराएवढे लहान झाले आहेत. यापेक्षा लहान करणे आता भौतिकशास्त्रानुसार कठीण होत चालले आहे.",
        theQuestion: "मग संगणक अधिक वेगवान कसे बनतील? शास्त्रज्ञ नवीन मार्गांचा शोध घेत आहेत!",
        source: "Nature & MIT Technology Review"
      },
      {
        id: "17-2",
        type: "future_tech",
        title: "क्वांटम कम्प्युटिंग (Quantum Computing)",
        englishTitle: "Quantum Computing — Beyond 0 and 1",
        normalBit: "पारंपरिक संगणक: बिट (Bit) फक्त '०' किंवा '१' असतो.",
        qubit: "क्वांटम संगणक: क्वांटम बिट (Qubit) एकाच वेळी '०' आणि '१' या दोन्ही अवस्थांमध्ये असू शकतो (Superposition)!",
        superpower: "जगातील सर्वात वेगवान सुपरकॉम्प्युटर ज्या गणिताला १०,००० वर्षे लावेल, ते गणित क्वांटम संगणक अवघ्या काही मिनिटांत सोडवू शकेल! (उदा. नवीन औषधांचे रेणू शोधणे, हवामान बदल).",
        source: "IBM Quantum & Google Quantum AI"
      },
      {
        id: "17-3",
        type: "future_tech",
        title: "ब्रेन-कॉम्प्युटर इंटरफेस (Brain-Computer Interfaces - BCI)",
        englishTitle: "Direct Connection Between Brain and Computer",
        concept: "कीबोर्ड किंवा स्क्रीनशिवाय, केवळ मानवी मेंदूतील लहरींच्या (Neural Signals) साहाय्याने संगणकाशी थेट संवाद साधणे.",
        medicalHope: "पक्षाघात (Paralysis) झालेले रुग्ण केवळ डोक्यात विचार करून संगणकावर टाईप करू शकतील किंवा रोबोटिक हात चालवू शकतील!",
        source: "Stanford Neural Prosthetics Lab"
      },
      {
        id: "17-4",
        type: "future_tech",
        title: "प्रगत रोबोटिक्स आणि मानवाचा सोबती",
        englishTitle: "Advanced Autonomous Robotics",
        evolution: "फक्त कारखान्यात एका जागी उभे राहून वेल्डिंग करणारे रोबोट्स आता माणसासारखे चालणारे, अवघड कामे करणारे आणि अंतराळात जाणारे सोबती बनत आहेत.",
        purpose: "धोकादायक खाणी, अग्नीशमन, अंतराळ संशोधन आणि वृद्ध व्यक्तींची काळजी घेण्यासाठी रोबोटिक्स उपयुक्त ठरत आहे.",
        source: "IEEE Robotics and Automation Society"
      },
      {
        id: "17-5",
        type: "summary_card",
        title: "मानव + संगणक = सर्वात मोठी शक्ती",
        englishTitle: "Human + Computer Synergy",
        theMessage: "संगणक कितीही शक्तिशाली झाला तरी मानवी कल्पकता, करुणा, मूल्ये आणि विवेक यांची जागा तो कधीही घेऊ शकत नाही.",
        finalThought: "संगणक हा मानवाचा शत्रू किंवा पर्याय नाही — तो मानवाच्या क्षमतेला हजार पटींनी वाढवणारा सर्वात मोठा मित्र आहे!",
        source: "World Economic Forum — Future of Technology and Society"
      }
    ],
    recap: {
      points: [
        "क्वांटम संगणक क्युबिट्सचा (Qubits) वापर करून अकल्पनीय वेगाने क्लिष्ट गणिते सोडवू शकतात.",
        "ब्रेन-कॉम्प्युटर इंटरफेस मेंदू आणि संगणक यांच्यात थेट जोडणी निर्माण करत आहे.",
        "तंत्रज्ञानाचे अंतिम उद्दिष्ट मानवी जीवन अधिक सुलभ, सुरक्षित आणि समृद्ध करणे हेच आहे."
      ]
    },
    teacherNotes: "विद्यार्थ्यांना विचारा: जर तुम्हाला भविष्यात एक नवीन संगणक किंवा रोबोट बनवायचा असेल, तर तुम्ही कोणत्या समस्येवर उपाय शोधाल?"
  },

  {
    id: 18,
    chapterNumber: "१८",
    title: "Revision, Quiz & Challenge",
    subtitle: "Grand Recap, Games & Inspiration — चला आठवूया आणि खेळूया!",
    purpose: "संपूर्ण प्रवासाची उजळणी, परस्परसंवादी खेळ, प्रश्नमंजुषा आणि भावी पिढीला प्रेरणा देणे.",
    gradeSuitability: "Std 1 - 10",
    coverTag: "महा उजळणी व आव्हान",
    colorGradient: "from-blue-700 via-indigo-800 to-purple-900",
    icon: "🏆",
    difficulty: {
      level1: "सोपे प्रश्न, पिढ्या ओळखणे, चित्र प्रश्न आणि मजेदार क्विझ.",
      level2: "कालानुक्रम मांडणे, जोड्या जुळवणे, सत्य किंवा असत्य.",
      level3: "हार्डवेअर संकल्पना, संशोधकांची नावे, तारखा आणि विश्लेषणात्मक प्रश्न."
    },
    slides: [
      {
        id: "18-1",
        type: "challenge",
        title: "तुम्ही या शोधांना योग्य क्रमाने लावू शकता का?",
        englishTitle: "Can You Put These in Chronological Order?",
        challengeItems: [
          { name: "अबॅकस (Abacus)", year: "~2400 BCE", order: 1 },
          { name: "चार्ल्स बॅबेजचे ॲनालिटिकल इंजिन", year: "1830s", order: 2 },
          { name: "ENIAC (व्हॅक्यूम ट्यूब संगणक)", year: "1946", order: 3 },
          { name: "ट्रान्झिस्टरचा शोध (Bell Labs)", year: "1947", order: 4 },
          { name: "इंटिग्रेटेड सर्किट (IC)", year: "1958", order: 5 },
          { name: "Intel 4004 मायक्रोप्रोसेसर", year: "1971", order: 6 },
          { name: "भारताचा TIFRAC संगणक", year: "1954-1960", order: 5.5 },
          { name: "वर्ल्ड वाईड वेब (WWW)", year: "1989", order: 7 },
          { name: "C-DAC परम ८००० सुपरकॉम्प्युटर", year: "1991", order: 8 },
          { name: "स्मार्टफोन आणि आधुनिक AI क्रांती", year: "2007+", order: 9 }
        ],
        interaction: "drag_timeline",
        source: "Computer History Museum Master Timeline"
      },
      {
        id: "18-2",
        type: "game",
        title: "कोणती पिढी? (Which Generation?)",
        englishTitle: "Guess the Computer Generation!",
        puzzles: [
          { clue: "मी काचेच्या दिव्यासारखी दिसते, खूप गरम होते आणि ENIAC मध्ये मी १८,००० होते!", answer: "पहिली पिढी (Vacuum Tubes)" },
          { clue: "मी बेल लॅबमध्ये जन्मलो, लहान आहे आणि मला नोबेल पारितोषिक मिळाले!", answer: "दुसरी पिढी (Transistors)" },
          { clue: "जॅक किल्बी आणि रॉबर्ट नॉइस यांनी मला सिलिकॉनच्या एकाच तुकड्यावर बनवले!", answer: "तिसरी पिढी (Integrated Circuits - IC)" },
          { clue: "Intel 4004 ने मला सुरू केले आणि मी आजच्या सर्व पीसी आणि फोनमध्ये आहे!", answer: "चौथी पिढी (Microprocessors)" },
          { clue: "मी उदाहरणांवरून शिकतो आणि मानवासारखी चित्रे व भाषा तयार करू शकतो!", answer: "पाचवी पिढी / AI (शैक्षणिक वर्गवारी)" }
        ],
        source: "Interactive Pedagogy Archive"
      },
      {
        id: "18-3",
        type: "game",
        title: "ओळखा पाहू मी कोण? (Who Was It?)",
        englishTitle: "Who Was It? — The Pioneers",
        puzzles: [
          { clue: "मी ॲनालिटिकल इंजिनची रचना केली, मला आधुनिक संगणकाचा जनक मानले जाते.", answer: "चार्ल्स बॅबेज (Charles Babbage)" },
          { clue: "मी जगातील पहिला अल्गोरिदम लिहिला, मला पहिली प्रोग्रामर म्हणतात.", answer: "एडा लव्हलेस (Ada Lovelace)" },
          { clue: "मी १९८९ मध्ये CERN येथे World Wide Web चा प्रस्ताव मांडला.", answer: "सर टिम बर्नर्स-ली (Sir Tim Berners-Lee)" },
          { clue: "मी १९९१ मध्ये भारताचा पहिला स्वदेशी सुपरकॉम्प्युटर 'PARAM 8000' तयार केला.", answer: "डॉ. विजय भटकर (Dr. Vijay Bhatkar)" }
        ],
        source: "Science Museum & IEEE History"
      },
      {
        id: "18-4",
        type: "summary_card",
        title: "संगणकाची खरी गोष्ट (The True Story of Computers)",
        englishTitle: "The Core Philosophy of Computing Evolution",
        points: [
          "१. मानवाला समस्या आली.",
          "२. मानवाने गणना सोपी करण्याचा प्रयत्न केला.",
          "३. साधने आणि मशिन्स तयार झाल्या.",
          "४. मशिन्स अधिक स्वयंचलित (Automatic) झाल्या.",
          "५. इलेक्ट्रॉनिक्स आले आणि वेग प्रचंड वाढला.",
          "६. संगणक अधिक लहान (Smaller) झाले.",
          "७. संगणक अधिक स्वस्त आणि परवडणारे (Affordable) झाले.",
          "८. संगणक एकमेकांशी जोडले (Connected) गेले.",
          "९. संगणक आज बुद्धिमत्ता भासवणाऱ्या सिस्टीम्स चालवू लागले."
        ],
        source: "Computer Evolution Educational Framework"
      },
      {
        id: "18-5",
        type: "final_call",
        title: "पुढची Computer Generation तुम्ही तयार करणार का?",
        englishTitle: "Will YOU Build the Next Generation?",
        inspiringMessage: "विद्यार्थी मित्रांनो, चार्ल्स बॅबेज, एडा लव्हलेस किंवा विजय भटकर यांच्यासारखेच तुमच्याकडेही कल्पनाशक्ती आहे. आज तुम्ही जे शिकत आहात, उद्या त्यातूनच नवीन शोध जन्म घेतील!",
        callToAction: "जिज्ञासू राहा, प्रश्न विचारा, कोड शिका आणि भारताचे नाव जगात उज्ज्वल करा! 🇮🇳✨",
        source: "Antigravity Educational Initiative"
      }
    ],
    recap: {
      points: [
        "संगणकाची उत्क्रांती ही केवळ वेगाची गोष्ट नाही; ती संगणन लहान, स्वस्त, विश्वासार्ह आणि सर्वांसाठी खुले होण्याची गोष्ट आहे.",
        "५ पिढ्या: व्हॅक्यूम ट्यूब ➔ ट्रान्झिस्टर ➔ आयसी ➔ मायक्रोप्रोसेसर ➔ AI / क्वांटम.",
        "भारताचे TIFRAC आणि PARAM 8000 हे आपल्या स्वदेशी वैज्ञानिक क्षमतेचे साक्षीदार आहेत."
      ]
    },
    teacherNotes: "वर्गात सर्व विद्यार्थ्यांना उभे करून 'Generation Relay' किंवा 'Timeline Race' स्पर्धा घ्या आणि सर्वांना कौतुकाची थाप द्या!"
  }
];
