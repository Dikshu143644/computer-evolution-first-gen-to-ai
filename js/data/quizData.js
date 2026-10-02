/**
 * Quiz Engine Data
 * Supports 3 Difficulty Levels (Std 1-4, Std 5-7, Std 8-10)
 * Types: MCQ, True/False, Match, Timeline Ordering, Who Am I, Which Generation
 */

export const quizData = {
  // Level 1: Std 1 - 4 (Easy & Visual)
  easy: [
    {
      id: "ez-1",
      type: "mcq",
      question: "तुमच्या हातातील मोबाईल हा एक संगणक (Computer) आहे का?",
      englishQuestion: "Is your smartphone a computer?",
      options: [
        "हो, अगदी नक्की!",
        "नाही, तो फक्त फोन आहे",
        "फक्त गाणी ऐकताना असतो",
        "माहित नाही"
      ],
      correctAnswer: 0,
      explanation: "मोबाईलमध्ये CPU (मेंदू), RAM, मेमरी आणि ऑपरेटिंग सिस्टीम असते, त्यामुळे तो एक शक्तिशाली लहान संगणक आहे!",
      source: "Computer Basics Guide"
    },
    {
      id: "ez-2",
      type: "mcq",
      question: "संगणकाचा 'मेंदू' (Brain) कोणाला म्हटले जाते?",
      englishQuestion: "Which part is called the 'Brain of the Computer'?",
      options: ["माउस (Mouse)", "कीबोर्ड (Keyboard)", "CPU", "मॉनिटर (Monitor)"],
      correctAnswer: 2,
      explanation: "CPU (Central Processing Unit) संगणकाचे सर्व विचार करण्याचे आणि हिशोब करण्याचे काम करतो, म्हणून त्याला मेंदू म्हणतात.",
      source: "Std 3 Computer Studies"
    },
    {
      id: "ez-3",
      type: "true_false",
      question: "चार्ल्स बॅबेज (Charles Babbage) यांना 'संगणकाचे जनक' मानले जाते.",
      englishQuestion: "Charles Babbage is considered the father of the computer.",
      options: ["सत्य (True)", "असत्य (False)"],
      correctAnswer: 0,
      explanation: "बॅबेज यांनी १८३० च्या दशकात ॲनालिटिकल इंजिनची रचना करून आधुनिक संगणकाचा पाया रचला.",
      source: "Science Museum, London"
    },
    {
      id: "ez-4",
      type: "mcq",
      question: "प्राचीन काळातील लाकडी मण्यांचे मोजणी यंत्र कोणते?",
      englishQuestion: "Which ancient counting tool has beads on rods?",
      options: ["अबॅकस (Abacus)", "लॅपटॉप (Laptop)", "टीव्ही (TV)", "घड्याळ (Clock)"],
      correctAnswer: 0,
      explanation: "अबॅकस हे मानवाने बनवलेले पहिले गणना साधन आहे, जे आजही विद्यार्थी वापरतात.",
      source: "Computer History Museum"
    },
    {
      id: "ez-5",
      type: "which_generation",
      question: "काचेच्या बल्बसारख्या मोठ्या नळ्या (Vacuum Tubes) कोणत्या पिढीत वापरल्या होत्या?",
      englishQuestion: "In which generation were glass Vacuum Tubes used?",
      options: ["पहिली पिढी (1st Gen)", "दुसरी पिढी (2nd Gen)", "तिसरी पिढी (3rd Gen)", "चौथी पिढी (4th Gen)"],
      correctAnswer: 0,
      explanation: "पहिल्या पिढीत (उदा. ENIAC) सुमारे १८,००० काचेच्या व्हॅक्यूम ट्यूब्स वापरल्या होत्या.",
      source: "Penn Engineering"
    },
    {
      id: "ez-6",
      type: "who_am_i",
      question: "मी जगातील पहिली महिला संगणक प्रोग्रामर आहे. मी कोण?",
      englishQuestion: "Who was the world's first computer programmer?",
      options: ["मॅडम क्युरी", "एडा लव्हलेस (Ada Lovelace)", "कल्पना चावला", "राणी लक्ष्मीबाई"],
      correctAnswer: 1,
      explanation: "एडा लव्हलेस यांनी बॅबेजच्या ॲनालिटिकल इंजिनसाठी जगातील पहिला अल्गोरिदम लिहिला होता.",
      source: "Oxford Lovelace Archive"
    }
  ],

  // Level 2: Std 5 - 7 (Medium Concepts & Timelines)
  medium: [
    {
      id: "med-1",
      type: "mcq",
      question: "पहिल्या पिढीतील संगणकांमध्ये मुख्य इलेक्ट्रॉनिक घटक कोणता होता?",
      englishQuestion: "Which technology was used in First Generation computers?",
      options: [
        "व्हॅक्यूम ट्यूब्स (Vacuum Tubes)",
        "ट्रान्झिस्टर (Transistors)",
        "मायक्रोप्रोसेसर (Microprocessors)",
        "इंटिग्रेटेड सर्किट्स (ICs)"
      ],
      correctAnswer: 0,
      explanation: "पहिल्या पिढीतील संगणक (१९४० चे दशक) काचेच्या व्हॅक्यूम ट्यूब्सवर आधारित होते.",
      source: "Computer History Museum"
    },
    {
      id: "med-2",
      type: "mcq",
      question: "भारताचा पहिला स्वदेशी डिजिटल संगणक 'TIFRAC' कोठे तयार झाला?",
      englishQuestion: "Where was India's first indigenous computer TIFRAC developed?",
      options: [
        "TIFR (टाटा इन्स्टिट्यूट ऑफ फंडामेंटल रिसर्च), मुंबई",
        "IIT मद्रास",
        "ISRO, बंगळुरू",
        "दिल्ली विद्यापीठ"
      ],
      correctAnswer: 0,
      explanation: "TIFRAC १९५४ ते १९६० दरम्यान TIFR मुंबई येथे प्रा. आर. नरसिंहन यांच्या नेतृत्वाखाली विकसित झाला.",
      source: "TIFR Archives"
    },
    {
      id: "med-3",
      type: "mcq",
      question: "१९८९ मध्ये 'World Wide Web' (WWW) चा प्रस्ताव कोणी मांडला?",
      englishQuestion: "In which year and by whom was the Web first proposed at CERN?",
      options: [
        "१९८९ — सर टिम बर्नर्स-ली (Tim Berners-Lee)",
        "१९७१ — बिल गेट्स",
        "१९९५ — स्टीव्ह जॉब्स",
        "१९८३ — मार्क झुकरबर्ग"
      ],
      correctAnswer: 0,
      explanation: "सर टिम बर्नर्स-ली यांनी १९८९ मध्ये जिनिव्हातील CERN येथे माहिती एकमेकांना जोडण्यासाठी WWW चा शोध लावला.",
      source: "CERN Historical Archive"
    },
    {
      id: "med-4",
      type: "mcq",
      question: "१९९१ मध्ये भारताचा पहिला सुपरकॉम्प्युटर 'PARAM 8000' कोणाच्या नेतृत्वाखाली बनवला गेला?",
      englishQuestion: "Who led the development of India's first supercomputer PARAM 8000?",
      options: [
        "डॉ. विजय भटकर (Dr. Vijay Bhatkar) — C-DAC",
        "डॉ. ए. पी. जे. अब्दुल कलाम",
        "डॉ. होमी भाभा",
        "सर सी. व्ही. रामन"
      ],
      correctAnswer: 0,
      explanation: "C-DAC पुणे येथे डॉ. विजय भटकर यांच्या नेतृत्वाखाली स्वदेशी PARAM 8000 सुपरकॉम्प्युटर तयार झाला.",
      source: "C-DAC Official Archives"
    },
    {
      id: "med-5",
      type: "true_false",
      question: "इंटरनेट (Internet) आणि वर्ल्ड वाईड वेब (Web) या दोन्ही अगदी एकच गोष्टी आहेत.",
      englishQuestion: "Internet and World Wide Web are exactly the same thing.",
      options: ["सत्य (True)", "असत्य (False)"],
      correctAnswer: 1,
      explanation: "असत्य! इंटरनेट हे संगणकांना जोडणारे हार्डवेअर जाळे आहे, तर वेब ही त्यावर चालणारी माहिती व वेबसाइट्सची सेवा आहे.",
      source: "W3C Standards"
    },
    {
      id: "med-6",
      type: "which_generation",
      question: "दुसऱ्या पिढीतील संगणकांनी व्हॅक्यूम ट्यूब्सऐवजी कशाचा वापर केला?",
      englishQuestion: "What replaced vacuum tubes in Second Generation computers?",
      options: ["ट्रान्झिस्टर (Transistors)", "लाकडी गीअर्स", "पंच कार्डे", "क्वांटम बिट्स"],
      correctAnswer: 0,
      explanation: "ट्रान्झिस्टर लहान, थंड, टिकाऊ आणि कमी वीज खाणारे असल्याने त्यांनी व्हॅक्यूम ट्यूब्सची जागा घेतली.",
      source: "Bell Labs Archives"
    }
  ],

  // Level 3: Std 8 - 10 (Advanced Historical & Technical)
  advanced: [
    {
      id: "adv-1",
      type: "mcq",
      question: "१९७१ मध्ये मायक्रोप्रोसेसर युगाची सुरुवात करणाऱ्या पहिल्या चिपचे नाव काय होते?",
      englishQuestion: "Which device marked the beginning of the microprocessor era?",
      options: [
        "Intel 4004",
        "Intel 8086",
        "Motorola 68000",
        "MOS 6502"
      ],
      correctAnswer: 0,
      explanation: "Intel 4004 (1971) हा पहिला व्यावसायिक ४-बिट मायक्रोप्रोसेसर होता, ज्यावर २,३०० ट्रान्झिस्टर होते.",
      source: "Intel Historical Museum"
    },
    {
      id: "adv-2",
      type: "mcq",
      question: "चार्ल्स बॅबेजच्या 'ॲनालिटिकल इंजिन' मधील 'Store' आणि 'Mill' आजच्या संगणकातील कोणत्या भागांशी जुळतात?",
      englishQuestion: "In Babbage's Analytical Engine, what did 'Store' and 'Mill' correspond to?",
      options: [
        "Store = Memory (मेमरी) आणि Mill = Processor/CPU (प्रोसेसर)",
        "Store = Screen आणि Mill = Keyboard",
        "Store = Printer आणि Mill = Battery",
        "Store = Hard Disk आणि Mill = Speaker"
      ],
      correctAnswer: 0,
      explanation: "'Store' मध्ये संख्या साठवून ठेवल्या जायच्या (आजची मेमरी) आणि 'Mill' मध्ये गणना केली जायची (आजचा प्रोसेसर).",
      source: "Science Museum, London"
    },
    {
      id: "adv-3",
      type: "mcq",
      question: "इंटिग्रेटेड सर्किट (IC) च्या शोधाचे श्रेय कोणाला जाते?",
      englishQuestion: "Who are credited with the invention of the Integrated Circuit (IC)?",
      options: [
        "जॅक किल्बी (Texas Instruments) आणि रॉबर्ट नॉइस (Fairchild)",
        "अ‍ॅलन ट्युरिंग आणि जॉन व्हॉन न्यूमन",
        "बिल गेट्स आणि पॉल अ‍ॅलन",
        "स्टीव्ह जॉब्स आणि स्टीव्ह वोझनियाक"
      ],
      correctAnswer: 0,
      explanation: "१९५८-५९ मध्ये जॅक किल्बी आणि रॉबर्ट नॉइस यांनी स्वतंत्रपणे सिलिकॉन/जर्मेनियम चिपवर IC चा शोध लावला.",
      source: "Nobel Prize in Physics 2000"
    },
    {
      id: "adv-4",
      type: "true_false",
      question: "संगणकाच्या इतिहासात 'पाचवी पिढी' ही एक आंतरराष्ट्रीय मान्यताप्राप्त अधिकृत हार्डवेअर सीमा आहे.",
      englishQuestion: "Is the 'Fifth Generation' a universally standardized hardware boundary?",
      options: ["सत्य (True)", "असत्य (False)"],
      correctAnswer: 1,
      explanation: "असत्य! 'पाचवी पिढी' ही प्रामुख्याने AI आणि प्रगत सिस्टीम्ससाठी वापरली जाणारी लोकप्रिय शैक्षणिक वर्गवारी आहे, ती व्हॅक्यूम ट्यूबसारखी निश्चित भौतिक हार्डवेअर सीमा नाही.",
      source: "Computer History Museum"
    },
    {
      id: "adv-5",
      type: "mcq",
      question: "RAM आणि Storage (SSD/HDD) यांच्यातील मुख्य तांत्रिक फरक कोणता?",
      englishQuestion: "What is the primary technical difference between RAM and Storage?",
      options: [
        "RAM तात्पुरती (Volatile) आणि अतिवेगवान असते, तर Storage कायमस्वरूपी (Non-volatile) असते.",
        "RAM कायमस्वरूपी असते आणि Storage तात्पुरते असते.",
        "RAM फक्त चित्रे दाखवते आणि Storage फक्त गाणी वाजवते.",
        "यात काहीही फरक नसतो."
      ],
      correctAnswer: 0,
      explanation: "RAM मध्ये संगणक चालू असेपर्यंतच डेटा राहतो (स्वयंपाकघरातील कामाचा ओटा), तर Storage मध्ये वीज गेल्यावरही डेटा सुरक्षित राहतो (कपाट).",
      source: "CompTIA A+ Architecture"
    },
    {
      id: "adv-6",
      type: "mcq",
      question: "१९४७ मध्ये बेल लॅबमध्ये ट्रान्झिस्टरच्या शोधासाठी कोणत्या शास्त्रज्ञांना नोबेल पारितोषिक मिळाले?",
      englishQuestion: "Which physicists won the Nobel Prize for inventing the transistor?",
      options: [
        "जॉन बार्डिन, वॉल्टर ब्रॅटन आणि विल्यम शॉकली",
        "अल्बर्ट आइनस्टाइन आणि नील्स बोहर",
        "थॉमस एडिसन आणि निकोला टेस्ला",
        "जे. जे. थॉमसन आणि रुदरफोर्ड"
      ],
      correctAnswer: 0,
      explanation: "बार्डिन, ब्रॅटन आणि शॉकली यांनी १९४७ मध्ये ट्रान्झिस्टर शोधला आणि १९५६ चे नोबेल पारितोषिक मिळवले.",
      source: "Nobel Prize in Physics 1956"
    }
  ],

  // Interactive Ordering Challenge
  timelineOrderingChallenge: [
    { id: "to-1", title: "अबॅकस (Abacus)", year: "~2400 BCE", correctPosition: 1 },
    { id: "to-2", title: "पास्कलाइन यांत्रिक कॅल्क्युलेटर", year: "1642", correctPosition: 2 },
    { id: "to-3", title: "बॅबेजचे ॲनालिटिकल इंजिन", year: "1837", correctPosition: 3 },
    { id: "to-4", title: "ENIAC (व्हॅक्यूम ट्यूब्स)", year: "1946", correctPosition: 4 },
    { id: "to-5", title: "ट्रान्झिस्टरचा शोध (Bell Labs)", year: "1947", correctPosition: 5 },
    { id: "to-6", title: "भारताचा TIFRAC संगणक", year: "1954-60", correctPosition: 6 },
    { id: "to-7", title: "इंटिग्रेटेड सर्किट (IC)", year: "1958", correctPosition: 7 },
    { id: "to-8", title: "Intel 4004 मायक्रोप्रोसेसर", year: "1971", correctPosition: 8 },
    { id: "to-9", title: "World Wide Web (WWW)", year: "1989", correctPosition: 9 },
    { id: "to-10", title: "C-DAC PARAM 8000 सुपरकॉम्प्युटर", year: "1991", correctPosition: 10 }
  ],

  // Match the Following Game
  matchingGame: [
    { pairId: 1, itemA: "१ली पिढी (1st Gen)", itemB: "व्हॅक्यूम ट्यूब्स (Vacuum Tubes)" },
    { pairId: 2, itemA: "२री पिढी (2nd Gen)", itemB: "ट्रान्झिस्टर (Transistors)" },
    { pairId: 3, itemA: "३री पिढी (3rd Gen)", itemB: "इंटिग्रेटेड सर्किट (IC)" },
    { pairId: 4, itemA: "४थी पिढी (4th Gen)", itemB: "मायक्रोप्रोसेसर (Microprocessor)" },
    { pairId: 5, itemA: "५वी पिढी (शैक्षणिक)", itemB: "AI आणि प्रगत मॉडेल्स" }
  ]
};
