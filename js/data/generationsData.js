/**
 * Computer Generations Matrix Data
 * 5-Generation Educational Model with Comprehensive Hardware and Architectural Comparison
 */

export const generationsData = [
  {
    generationId: 1,
    generationName: "First Generation (पहिली पिढी)",
    period: "अंदाजे १९४० ते १९५० चे दशक (approx. 1940s – mid-1950s)",
    mainTechnology: "व्हॅक्यूम ट्यूब्स (Vacuum Tubes / थर्मिओनिक व्हॉल्व्ह्ज)",
    techIcon: "💡",
    size: "प्रचंड मोठा (एका किंवा अनेक खोल्या व्यापणारा, ३० टन वजन)",
    speed: "मिलिसेकंद (Milliseconds — काही हजार ऑपरेशन्स प्रति सेकंद)",
    power: "प्रचंड वीज (१५०+ किलोवॉट) आणि भयंकर उष्णता",
    programming: "मशीन लँग्वेज (Machine Language — 0 आणि 1), पॅच केबल्स आणि स्विचेस",
    storageTech: "मॅग्नेटिक ड्रम, पंच कार्डे (Punched Cards) आणि पेपर टेप",
    examples: "ENIAC (1946), EDVAC, UNIVAC I, IBM 701, Manchester Baby",
    advantages: [
      "इतिहासामध्ये पहिल्यांदाच इलेक्ट्रॉनिक पद्धतीने गणना करणे शक्य झाले.",
      "मानवी हिशोबापेक्षा आणि मेकॅनिकल उपकरणांपेक्षा हजारो पटींनी वेगवान."
    ],
    disadvantages: [
      "खोलीएवढा प्रचंड आकार आणि अवाढव्य खर्च.",
      "प्रचंड उष्णता निर्माण होत असल्याने वातानुकूलन (AC) अनिवार्य.",
      "वारंवार काचेच्या ट्यूब्स जळत असल्याने कमी विश्वासार्हता (Unreliable)."
    ],
    historicalNote: "ही पिढी संगणनाच्या इलेक्ट्रॉनिक युगाची सुरुवात मानली जाते."
  },
  {
    generationId: 2,
    generationName: "Second Generation (दुसरी पिढी)",
    period: "अंदाजे १९५० चा मध्य ते १९६० चा प्रारंभ (approx. mid-1950s – early 1960s)",
    mainTechnology: "ट्रान्झिस्टर (Transistors — सेमीकंडक्टर सिलिकॉन/जर्मेनियम)",
    techIcon: "📻",
    size: "खूप लहान (कपाटाच्या किंवा मोठ्या टेबलाच्या आकाराचे)",
    speed: "मायक्रोसेकंद (Microseconds — लाखो ऑपरेशन्स प्रति सेकंद)",
    power: "कमी वीज आणि नगण्य उष्णता (व्हॅक्यूम ट्यूबच्या तुलनेत ९०% बचत)",
    programming: "असेंब्ली भाषा (Assembly Language), सुरुवातीच्या उच्च भाषा: FORTRAN, COBOL",
    storageTech: "मॅग्नेटिक कोअर मेमरी (Magnetic Core), मॅग्नेटिक टेप आणि डिस्क",
    examples: "IBM 1401, IBM 7090, CDC 1604, UNIVAC 1107",
    advantages: [
      "आकारात प्रचंड घट आणि हलके वजन.",
      "काचेच्या ट्यूब्स नसल्याने कोणतीही झीज नाही आणि उच्च विश्वासार्हता.",
      "व्यावसायिक बँका आणि उद्योगांसाठी उपयुक्त."
    ],
    disadvantages: [
      "अजूनही सामान्य माणसाच्या किंवा घराच्या वापरासाठी खूप महाग.",
      "हजारो ट्रान्झिस्टर हाताने तारा जोडून (Soldering) सर्किट बनवावे लागायचे."
    ],
    historicalNote: "बेल लॅबमधील बार्डिन, ब्रॅटन आणि शॉकली यांच्या शोधाने कॉम्प्युटरचे रूप पूर्णपणे बदलले."
  },
  {
    generationId: 3,
    generationName: "Third Generation (तिसरी पिढी)",
    period: "अंदाजे १९६० ते १९७० च्या दशकाचा प्रारंभ (approx. 1960s – early 1970s)",
    mainTechnology: "इंटिग्रेटेड सर्किट्स (Integrated Circuits - IC / सिलिकॉन मायक्रोचिप)",
    techIcon: "🔲",
    size: "टेबलावर बसणारा (Desk-sized Mini Computers आणि कॉम्पॅक्ट मेनफ्रेम्स)",
    speed: "नॅनोसेकंद (Nanoseconds — कोट्यवधी ऑपरेशन्स प्रति सेकंद)",
    power: "अतिशय कमी वीज वापर, कमी उष्णता",
    programming: "प्रगत उच्चस्तरीय भाषा (High-Level Languages: BASIC, Pascal, C) आणि ऑपरेटिंग सिस्टीम",
    storageTech: "मॅग्नेटिक डिस्क, सेमीकंडक्टर मेमरी, मोठ्या क्षमतेचे हार्ड डिस्क ड्रम",
    examples: "IBM System/360, DEC PDP-8, PDP-11, CDC 6600",
    advantages: [
      "एकाच सिलिकॉन चिपवर शेकडो ट्रान्झिस्टर समाविष्ट.",
      "मॉनिटर आणि कीबोर्डच्या साहाय्याने थेट वापरकर्त्याचा संवाद (Interactive Computing).",
      "एकाच वेळी अनेक वापरकर्ते काम करू शकणारे 'Time-Sharing Operating Systems'."
    ],
    disadvantages: [
      "IC चिप्सच्या उत्पादनासाठी अत्यंत अत्याधुनिक फॅब्रिकेशन लॅब (Cleanrooms) ची गरज.",
      "किंमत अजूनही शाळा किंवा वैयक्तिक घरासाठी जास्त होती."
    ],
    historicalNote: "जॅक किल्बी (TI) आणि रॉबर्ट नॉइस (Fairchild) यांनी स्वतंत्रपणे IC चे पेटंट मिळवले."
  },
  {
    generationId: 4,
    generationName: "Fourth Generation (चौथी पिढी)",
    period: "१९७१ पासून आजतागायत (from 1971 onward — Major Computing Era)",
    mainTechnology: "मायक्रोप्रोसेसर (Microprocessor — VLSI & ULSI सिलिकॉन चिप्स)",
    techIcon: "💻",
    size: "अतिशय लहान — डेस्कटॉप, लॅपटॉप, टॅब्लेट, स्मार्टफोन आणि स्मार्टवॉच",
    speed: "पिकोसेकंद (Picoseconds — अब्जावधी ऑपरेशन्स प्रति सेकंद, GHz फ्रिक्वेन्सी)",
    power: "अत्यल्प वीज (लहान बॅटरीवर किंवा काही वॉटवर चालणारे)",
    programming: "आधुनिक GUI, C++, Java, Python, JavaScript, आधुनिक ॲप्स आणि वेब तंत्रज्ञान",
    storageTech: "सॉलिड स्टेट ड्राईव्ह (SSD), NVMe, USB फ्लॅश ड्राइव्हस्, टेराबाइट HDDs",
    examples: "Intel 4004 (1971), IBM PC (1981), Apple Macintosh (1984), Intel Core i-series, Apple Silicon (M1/M2/M3), Qualcomm Snapdragon",
    advantages: [
      "वैयक्तिक वापरकर्त्यांना परवडणारे आणि हाताळायला अतिशय सोपे (Personal Computers).",
      "इंटरनेट, मल्टीमीडिया, ग्राफिक्स आणि जगाशी त्वरित जोडणी.",
      "प्रचंड साठवणूक क्षमता आणि विश्वासार्हता."
    ],
    disadvantages: [
      "अतिशय गुंतागुंतीचे मायक्रो-आर्किटेक्चर डिझाइन.",
      "सुरक्षा आणि सायबर धोके (Cybersecurity challenges)."
    ],
    historicalNote: "Intel 4004 मुळे संपूर्ण CPU एकाच चिपवर आला आणि पर्सनल कम्प्युटर क्रांती झाली."
  },
  {
    generationId: 5,
    generationName: "Fifth Generation (पाचवी पिढी — शैक्षणिक वर्गवारी)",
    period: "सध्याचे आणि भविष्यातील युग (Current & Future Frontiers)",
    mainTechnology: "AI-Oriented Computing, Neural Processing Units (NPU), Quantum & Parallel Systems",
    techIcon: "🤖",
    size: "भौतिक आकाराने मर्यादित नाही — लहान सेन्सर्सपासून महाकाय क्लाउड डेटा सेंटर्सपर्यंत",
    speed: "पेटाफ्लॉप्स ते एक्झाफ्लॉप्स (Exaflops — १ सेकंदात १०^१८ गणिते) व क्वांटम सुपरपोझिशन",
    power: "सिस्टीमनुसार बदलते — स्मार्टवॉचमधील मिलिवॉटपासून डेटा सेंटरमधील मेगाव्हॉट्सपर्यंत",
    programming: "मशीन लर्निंग मॉडेल्स, न्यूरल नेटवर्क्स, नॅचरल लँग्वेज (Prompts), Python, PyTorch, Qiskit",
    storageTech: "क्लाउड स्टोरेज, डिस्ट्रीब्युटेड बिग डेटा, इन-मेमरी डेटाबेस, DNA स्टोरेज संशोधन",
    examples: "Large Language Models (ChatGPT, Gemini), AlphaFold, Autonomous Cars, IBM Quantum, Google Sycamore",
    advantages: [
      "डेटा आणि उदाहरणांवरून स्वतः शिकण्याची क्षमता (Pattern Recognition & Learning).",
      "मानवी भाषेत (मराठी, इंग्रजी इत्यादी) संवाद साधणे आणि बुद्धिमत्ता भासवणारे निर्णय.",
      "जटिल वैज्ञानिक समस्या सोडवणे (हवामान, औषधे, प्रथिने रचना)."
    ],
    disadvantages: [
      "मोठ्या AI मॉडेल्सच्या प्रशिक्षणासाठी प्रचंड वीज आणि पाणी लागते.",
      "चुकीची माहिती (Hallucinations) आणि नैतिक/गोपनीयतेचे प्रश्न (Ethics & Privacy)."
    ],
    historicalNote: "⚠️ महत्त्वाची शैक्षणिक टीप: 'पाचवी पिढी' ही कोणत्याही एकाच हार्डवेअर घटकाची अधिकृत वैज्ञानिक सीमा नाही, तर AI आणि प्रगत प्रणालींसाठी वापरली जाणारी लोकप्रिय शैक्षणिक वर्गवारी आहे."
  }
];
