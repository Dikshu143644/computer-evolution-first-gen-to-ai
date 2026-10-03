import os
import math
import subprocess
from PIL import Image, ImageDraw, ImageFont

FFMPEG_EXE = r'C:\Users\omkar\AppData\Local\uv\cache\archive-v0\1OGPQ28jC_EbwJWZ\Lib\site-packages\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v7.1.exe'

# Video Configuration
WIDTH = 1280
HEIGHT = 720
FPS = 12  # 12 fps is smooth for motion graphics and keeps file size lean for git

# Fonts
FONT_PATH = "C:/Windows/Fonts/Nirmala.ttc"
font_title = ImageFont.truetype(FONT_PATH, 44)
font_subtitle = ImageFont.truetype(FONT_PATH, 24)
font_body = ImageFont.truetype(FONT_PATH, 22)
font_badge = ImageFont.truetype(FONT_PATH, 18)
font_subtitles_cc = ImageFont.truetype(FONT_PATH, 22)

# Generations data
GEN_SCENES = {
    1: {
        "titleMr": "१ली पिढी: व्हॅक्यूम ट्यूब्स व एनियाक (1940 – 1956)",
        "titleEn": "First Generation: Vacuum Tubes & ENIAC Era",
        "audioMr": "assets/audio/gen1_mr.mp3",
        "bgImage": "assets/images/eniac_1946.jpg",
        "scenes": [
            {
                "sceneNum": "०१/०५",
                "tag": "शोध व पार्श्वभूमी",
                "headline": "इलेक्ट्रॉनिक संगणकांचा जन्म",
                "points": [
                    "• कालावधी: १९४० ते १९५६ दरम्यानची पहिली पिढी",
                    "• मुख्य इलेक्ट्रॉनिक घटक: व्हॅक्यूम ट्यूब्स (Vacuum Tubes)",
                    "• इनपुटसाठी पंच कार्ड्स (Punch Cards) व पेपर टेपचा वापर"
                ],
                "ccMr": "संगणक उत्क्रांतीच्या पहिल्या पिढीत आपले स्वागत आहे. कालावधी १९४० ते १९५६.",
                "ccEn": "Welcome to the First Generation of Computers, spanning from 1940 to 1956."
            },
            {
                "sceneNum": "०२/०५",
                "tag": "हार्डवेअर रचना",
                "headline": "व्हॅक्यूम ट्यूब्सचे प्रचंड जाळे",
                "points": [
                    "• काचेच्या बल्बसारख्या व्हॅक्यूम ट्यूब्स विजेचे प्रवाह नियंत्रित करायच्या",
                    "• साठवणुकीसाठी मॅग्नेटिक ड्रम मेमरी (Magnetic Drums)",
                    "• प्रचंड उष्णता आणि ट्यूब्स वारंवार खराब होणे हे मुख्य आव्हान"
                ],
                "ccMr": "या पिढीतील संगणकांमध्ये मुख्य घटक व्हॅक्यूम ट्यूब्स आणि मॅग्नेटिक ड्रम होते.",
                "ccEn": "The defining core technology was the vacuum tube and magnetic memory drum."
            },
            {
                "sceneNum": "०३/०५",
                "tag": "ऐतिहासिक यंत्रे",
                "headline": "ENIAC व UNIVAC ची निर्मिती",
                "points": [
                    "• १९४६: जॉन मॉचली व प्रेस्पर एकर्ट यांनी ENIAC बनवला",
                    "• वजन तब्बल ३० टन, १८,००० व्हॅक्यूम ट्यूब्स, एका मोठ्या हॉलएवढा आकार",
                    "• १५० किलोवॅट विजेचा वापर (एका लहान खेड्याएवढी वीज!)"
                ],
                "ccMr": "१९४६ मधील एनियाक मध्ये १८ हजार व्हॅक्यूम ट्यूब्स आणि ३० टन वजन होते.",
                "ccEn": "ENIAC in 1946 contained 18,000 vacuum tubes and weighed over 30 tons."
            },
            {
                "sceneNum": "०४/०५",
                "tag": "वेग व प्रोग्रॅमिंग",
                "headline": "बायनरी मशीन लँग्वेजचा काळ",
                "points": [
                    "• वेग: सेकंदाला सुमारे ५,००० आकडेमोड (5,000 additions/sec)",
                    "• प्रोग्रॅमिंग केवळ ० आणि १ (Binary Machine Code) मध्ये शक्य",
                    "• कोणतीही ऑपरेटिंग सिस्टीम अस्तित्वात नव्हती"
                ],
                "ccMr": "हे संगणक केवळ बायनरी मशीन लँग्वेज समजायचे आणि सेकंदाला ५ हजार गणिते करत.",
                "ccEn": "Programmed strictly in binary machine language at 5,000 ops per second."
            },
            {
                "sceneNum": "०५/०५",
                "tag": "वारसा व प्रभाव",
                "headline": "आधुनिक संगणकांचा पाया",
                "points": [
                    "• प्रचंड मर्यादा असूनही मॅन्युअल गणितापेक्षा हजार पटींनी वेगवान",
                    "• लष्करी तोफखाना आणि वैज्ञानिक समीकरणांसाठी ऐतिहासिक योगदान",
                    "• दुसऱ्या पिढीच्या ट्रान्झिस्टर क्रांतीची पार्श्वभूमी तयार केली"
                ],
                "ccMr": "उष्णता व मर्यादा असल्या तरी या पिढीने आधुनिक इलेक्ट्रॉनिक संगणनाचा पाया घातला.",
                "ccEn": "Despite challenges, first-generation systems founded modern computing."
            }
        ]
    },
    2: {
        "titleMr": "२री पिढी: ट्रान्झिस्टर्स व व्यावसायिक संगणक (1956 – 1963)",
        "titleEn": "Second Generation: Transistors & Commercial Systems",
        "audioMr": "assets/audio/gen2_mr.mp3",
        "bgImage": "assets/images/transistor_1947.jpg",
        "scenes": [
            {
                "sceneNum": "०१/०५",
                "tag": "क्रांतिकारक शोध",
                "headline": "ट्रान्झिस्टरचा ऐतिहासिक विजय",
                "points": [
                    "• कालावधी: १९५६ ते १९६३ दरम्यानची दुसरी पिढी",
                    "• १९४७: बेल लॅब्जमध्ये शॉकली, बार्डिन व ब्रॅटन यांनी ट्रान्झिस्टर शोधला",
                    "• व्हॅक्यूम ट्यूब्सपेक्षा हजार पटींनी लहान, टिकाऊ आणि वेगवान घटक"
                ],
                "ccMr": "दुसऱ्या पिढीचा कालावधी १९५६ ते १९६३. ट्रान्झिस्टरने व्हॅक्यूम ट्यूब्सची जागा घेतली.",
                "ccEn": "The Second Generation (1956-1963) was ignited by the transistor invention."
            },
            {
                "sceneNum": "०२/०५",
                "tag": "हार्डवेअर विकास",
                "headline": "मॅग्नेटिक कोर मेमरीचा उदय",
                "points": [
                    "• आकाराने लहान, वीज वापर नगण्य, उष्णतेची समस्या दूर झाली",
                    "• अंतर्गत मेमरीसाठी मॅग्नेटिक कोर (Magnetic Core Memory)",
                    "• दुय्यम साठवणुकीसाठी मॅग्नेटिक टेप व डिस्कची सुरुवात"
                ],
                "ccMr": "ट्रान्झिस्टरमुळे संगणक लहान, वेगवान झाले आणि मॅग्नेटिक कोर मेमरी आली.",
                "ccEn": "Transistors made computers compact, faster, with magnetic core memory."
            },
            {
                "sceneNum": "०३/०५",
                "tag": "सॉफ्टवेअर क्रांती",
                "headline": "FORTRAN व COBOL चा जन्म",
                "points": [
                    "• बायनरीऐवजी इंग्रजी शब्दांसारख्या High-Level Languages आल्या",
                    "• विज्ञानासाठी FORTRAN (Formula Translation)",
                    "• व्यापारासाठी COBOL (Common Business-Oriented Language)"
                ],
                "ccMr": "पहिल्यांदा फोरट्रान आणि कोबोल सारख्या उच्च-स्तरीय भाषांचा उगम झाला.",
                "ccEn": "High-level languages like FORTRAN and COBOL revolutionized programming."
            },
            {
                "sceneNum": "०४/०५",
                "tag": "लोकप्रिय मॉडेल्स",
                "headline": "IBM 1401 — उद्योगांचा आवडता संगणक",
                "points": [
                    "• IBM 1401 जगातील सर्वात लोकप्रिय व्यावसायिक संगणक ठरला",
                    "• IBM 7094 वैज्ञानिक गणितांसाठी वापरला गेला",
                    "• बँका, रेल्वे आणि विमा कंपन्यांमध्ये संगणकांचा पहिला प्रवेश"
                ],
                "ccMr": "आयबीएम १४०१ हा या पिढीतील अतिशय लोकप्रिय व्यावसायिक संगणक ठरला.",
                "ccEn": "The IBM 1401 modernized business data processing worldwide."
            },
            {
                "sceneNum": "०५/०५",
                "tag": "महत्त्व व वारसा",
                "headline": "माहिती युगाची खरी सुरुवात",
                "points": [
                    "• वेग: सेकंदाला लाखो ऑपरेशन्स (Microseconds)",
                    "• प्रोग्रामिंग सोपे झाल्यामुळे सॉफ्टवेअर इंजिनिअरिंगचा पाया रचला गेला",
                    "• सिलिकॉन व्हॅली आणि इंटिग्रेटेड सर्किट युगाची नांदी"
                ],
                "ccMr": "दुसऱ्या पिढीने सॉफ्टवेअर उद्योगाची आणि डेटा प्रोसेसिंगची खरी सुरुवात केली.",
                "ccEn": "Second-gen systems laid the bedrock for enterprise computing and software."
            }
        ]
    },
    3: {
        "titleMr": "३री पिढी: इंटिग्रेटेड सर्किट्स व ऑपरेटिंग सिस्टीम (1964 – 1971)",
        "titleEn": "Third Generation: Integrated Circuits & Operating Systems",
        "audioMr": "assets/audio/gen3_mr.mp3",
        "bgImage": "assets/images/integrated_circuits_1964.jpg",
        "scenes": [
            {
                "sceneNum": "०१/०५",
                "tag": "सिलिकॉन क्रांती",
                "headline": "एका चिपवर शेकडो सर्किट्स!",
                "points": [
                    "• कालावधी: १९६४ ते १९७१ दरम्यानची तिसरी पिढी",
                    "• मुख्य घटक: Integrated Circuit (IC Chip)",
                    "• जॅक किल्बी आणि रॉबर्ट नॉईस यांनी सिलिकॉन चिपचा शोध लावला"
                ],
                "ccMr": "तिसऱ्या पिढीचा कालावधी १९६४ ते १९७१. मुख्य आधार म्हणजे आयसी चिप.",
                "ccEn": "The Third Generation (1964-1971) was defined by the Integrated Circuit."
            },
            {
                "sceneNum": "०२/०५",
                "tag": "इनपुट-आउटपुट प्रगती",
                "headline": "मॉनिटर, कीबोर्ड व ऑपरेटिंग सिस्टीम",
                "points": [
                    "• पंच कार्ड्स हद्दपार होऊन कीबोर्ड आणि मॉनिटर स्क्रीन आली",
                    "• Time-Sharing ऑपरेटिंग सिस्टीममुळे एकाच वेळी अनेक कामे शक्य",
                    "• संगणक टेबलावर मावण्याएवढे कॉम्पॅक्ट झाले"
                ],
                "ccMr": "याच काळात कीबोर्ड, मॉनिटर आणि पहिल्यांदा ऑपरेटिंग सिस्टीम आली.",
                "ccEn": "Monitors, keyboards, and Operating Systems replaced punch cards."
            },
            {
                "sceneNum": "०३/०५",
                "tag": "ऐतिहासिक यंत्रे",
                "headline": "IBM System/360 व चंद्रावरील मोहीम",
                "points": [
                    "• IBM System/360 मुळे सर्व हार्डवेअर एका मानकावर आले",
                    "• अपोलो ११ (Apollo Guidance Computer) मध्ये पहिल्यांदा IC वापरली गेली",
                    "• CDC 6600 जगातील पहिला अधिकृत सुपरकॉम्प्युटर ठरला"
                ],
                "ccMr": "आयबीएम सिस्टीम ३६० आणि अपोलो ११ यानात आयसी चिप्सचा वापर झाला.",
                "ccEn": "IBM System/360 and Apollo 11 computers relied on integrated circuits."
            },
            {
                "sceneNum": "०४/०५",
                "tag": "वेग व कार्यक्षमता",
                "headline": "नॅनोसेकंद वेगाची झेप",
                "points": [
                    "• वेग मायक्रोसेकंदांवरून थेट नॅनोसेकंदांवर (Nanoseconds) पोहोचला",
                    "• मेमरी क्षमता Megabytes मध्ये विस्तारली",
                    "• BASIC, Pascal आणि C लँग्वेजची पूर्वतयारी झाली"
                ],
                "ccMr": "संगणकांचा वेग नॅनोसेकंदांवर पोहोचला आणि विश्वासार्हता प्रचंड वाढली.",
                "ccEn": "Clock speeds accelerated into nanoseconds with high hardware reliability."
            },
            {
                "sceneNum": "०५/०५",
                "tag": "वारसा",
                "headline": "मायक्रोचिप क्रांतीचा पाया",
                "points": [
                    "• एका चिपवर अधिकाधिक घटक बसवण्याच्या मूरच्या नियमाची (Moore's Law) सुरुवात",
                    "• सामान्य कार्यालये आणि महाविद्यालयांमध्ये संगणक पोहोचले",
                    "• पुढील पिढीतील मायक्रोप्रोसेसर क्रांतीचा मार्ग मोकळा झाला"
                ],
                "ccMr": "आयसी चिपमुळे पुढील पिढीतील मायक्रोप्रोसेसर क्रांतीचा मार्ग सुकर झाला.",
                "ccEn": "The silicon microchip paved the road for personal microprocessors."
            }
        ]
    },
    4: {
        "titleMr": "४थी पिढी: मायक्रोप्रोसेसर व PC क्रांती (1971 – आजपर्यंत)",
        "titleEn": "Fourth Generation: Microprocessors & The PC Revolution",
        "audioMr": "assets/audio/gen4_mr.mp3",
        "bgImage": "assets/images/pc_revolution.jpg",
        "scenes": [
            {
                "sceneNum": "०१/०५",
                "tag": "चिप क्रांती",
                "headline": "संपूर्ण संगणक एका लहान चिपवर!",
                "points": [
                    "• कालावधी: १९७१ पासून आजपर्यंत चालू असलेली चौथी पिढी",
                    "• VLSI व ULSI द्वारे लाखो-कोट्यवधी ट्रान्झिस्टर्स एका चिपवर",
                    "• १९७१: Intel 4004 जगातील पहिला मायक्रोप्रोसेसर ठरला"
                ],
                "ccMr": "चौथी पिढी १९७१ पासून आजपर्यंत. ओळख म्हणजे मायक्रोप्रोसेसर चिप.",
                "ccEn": "Fourth Generation (1971-Present) brought computing home via microprocessors."
            },
            {
                "sceneNum": "०२/०५",
                "tag": "पर्सनल संगणक",
                "headline": "घराघरात आणि खिशात संगणक",
                "points": [
                    "• ॲपल (Apple II, Macintosh) व आयबीएम (IBM PC 5150) चे आगमन",
                    "• Graphical User Interface (GUI), माउस व रंगीत स्क्रीन्स",
                    "• लॅपटॉप, टॅब्लेट आणि आधुनिक स्मार्टफोन्सचा जन्म"
                ],
                "ccMr": "ॲपल, आयबीएम पीसी, लॅपटॉप आणि पुढे स्मार्टफोन्स प्रत्येकाच्या हाती आले.",
                "ccEn": "Apple, IBM PCs, laptops, and smartphones reached billions of users."
            },
            {
                "sceneNum": "०३/०५",
                "tag": "इंटरनेट युगाचा स्फोट",
                "headline": "वर्ल्ड वाइड वेब व जागतिक संपर्क",
                "points": [
                    "• टिम बर्नर्स-ली यांनी WWW चा शोध लावून जग जोडले",
                    "• ई-मेल, सर्च इंजिन, सोशल मीडिया व क्लाऊड कॉम्प्युटिंगचा प्रसार",
                    "• सेकंदाला अब्जावधी ऑपरेशन्स (Gigahertz Processors)"
                ],
                "ccMr": "याच पिढीत इंटरनेट, वेब आणि स्मार्टफोन क्रांतीने संपूर्ण जग जोडले.",
                "ccEn": "The internet, World Wide Web, and mobile networks connected humanity."
            },
            {
                "sceneNum": "०४/०५",
                "tag": "सॉफ्टवेअर व मेमरी",
                "headline": "टेराबाईट्स स्टोरेज व आधुनिक भाषा",
                "points": [
                    "• मेमरी: Gigabytes RAM आणि Terabytes SSD स्टोरेज",
                    "• भाषा: C, C++, Java, JavaScript, Python, Swift",
                    "• विंडोज, मॅक ओएस, लिनक्स आणि अँड्रॉइड ऑपरेटिंग सिस्टीम्स"
                ],
                "ccMr": "गिगाबाईट्स मेमरी, एसएसडी स्टोरेज आणि पायथॉन सारख्या आधुनिक भाषा आल्या.",
                "ccEn": "Gigabyte RAM, NVMe SSDs, and languages like Python and Java flourish."
            },
            {
                "sceneNum": "०५/०५",
                "tag": "महत्त्व व वारसा",
                "headline": "मानवी इतिहासातील सर्वांत मोठी क्रांती",
                "points": [
                    "• शिक्षण, आरोग्य, व्यवसाय आणि मनोरंजनाचा चेहरामोहरा बदलला",
                    "• एका खिशात बसणारा फोन हजार सुपरकॉम्प्युटर्सपेक्षा ताकदवान झाला",
                    "• पाचव्या पिढीतील कृत्रिम बुद्धिमत्ता (AI) साठी डेटाचा महासागर निर्माण केला"
                ],
                "ccMr": "चौथ्या पिढीने डिजिटल युगाचा पाया रचून पुढील AI युगासाठी मार्ग तयार केला.",
                "ccEn": "Fourth gen transformed society and generated the data fuel for modern AI."
            }
        ]
    },
    5: {
        "titleMr": "५वी पिढी: कृत्रिम बुद्धिमत्ता व क्वांटम संगणन (वर्तमान व भविष्य)",
        "titleEn": "Fifth Generation: AI, GPU Clusters & Quantum Computing",
        "audioMr": "assets/audio/gen5_mr.mp3",
        "bgImage": "assets/images/cloud_ai_datacenter.jpg",
        "scenes": [
            {
                "sceneNum": "०१/०५",
                "tag": "नवीन युग",
                "headline": "स्वतः विचार करणारी आणि शिकणारी यंत्रे",
                "points": [
                    "• केवळ आज्ञा पाळण्याऐवजी अनुभवातून शिकणारे अल्गोरिदम (Machine Learning)",
                    "• मानवी मेंदूच्या न्युरॉन्ससारखे कार्य करणारे Deep Neural Networks",
                    "• नैसर्गिक भाषा समजण्याची क्षमता (Natural Language Processing)"
                ],
                "ccMr": "पाचवी पिढी वर्तमान आणि भविष्याची आहे. ही पिढी कृत्रिम बुद्धिमत्ता आधारित आहे.",
                "ccEn": "Fifth Generation is driven by Artificial Intelligence and Neural Networks."
            },
            {
                "sceneNum": "०२/०५",
                "tag": "हार्डवेअर आर्किटेक्चर",
                "headline": "GPU क्लस्टर्स व हायपरस्केल डेटा सेंटर्स",
                "points": [
                    "• लाखो GPU कोर समांतर प्रक्रियेत (Parallel Processing) काम करतात",
                    "• अब्जावधी पॅरामीटर्स असणारे Large Language Models (LLMs)",
                    "• क्लाऊडवर चालणारे महाकाय डेटा सेंटर्स"
                ],
                "ccMr": "हजारो जीपीयू कोर आणि क्लाउड डेटा सेंटर द्वारे समांतर प्रक्रिया चालते.",
                "ccEn": "Massive GPU clusters and cloud datacenters enable parallel intelligence."
            },
            {
                "sceneNum": "०३/०५",
                "tag": "सुपरकॉम्प्युटर व भारत",
                "headline": "PARAM अनंत व भारतीय संशोधन",
                "points": [
                    "• सी-डॅकने (C-DAC) विकसित केलेले PARAM 8000 ते PARAM सिद्धी व अनंत",
                    "• हवामान अंदाज, लस संशोधन आणि अवकाश मोहिमांमध्ये योगदान",
                    "• स्वावलंबी भारताची जागतिक पातळीवरील सुपरकॉम्प्युटिंग भरारी"
                ],
                "ccMr": "भारतातील परम महासंगणक वैज्ञानिक संशोधनात अग्रगण्य योगदान देत आहेत.",
                "ccEn": "India's PARAM supercomputers power mission-critical scientific discovery."
            },
            {
                "sceneNum": "०४/०५",
                "tag": "क्वांटम संगणन",
                "headline": "क्यूबिट्स (Qubits) ची विस्मयकारक ताकद",
                "points": [
                    "• ० किंवा १ ऐवजी एकाच वेळी दोन्ही अवस्था (Superposition) असणारे Qubits",
                    "• सामान्य संगणकाला हजारो वर्षे लागणारे गणित काही मिनिटांत सोडवण्याची क्षमता",
                    "• औषध निर्मिती, कूटलेखन (Cryptography) आणि पदार्थ विज्ञानात क्रांती"
                ],
                "ccMr": "भविष्यातील क्वांटम कॉम्प्युटिंग क्यूबिट्सद्वारे अशक्य गणिते सेकंदात सोडवेल.",
                "ccEn": "Quantum computing harnesses qubits to solve impossible complex equations."
            },
            {
                "sceneNum": "०५/०५",
                "tag": "भविष्य दर्शन",
                "headline": "मानव आणि तंत्रज्ञानाचा संगम",
                "points": [
                    "• स्वायत्त वाहने, रोबोटिक्स, वैयक्तिक औषधोपचार आणि वैज्ञानिक शोध",
                    "• जबाबदार व नैतिक AI चा (Ethical AI) संतुलित वापर",
                    "• पहिल्या पिढीतील व्हॅक्यूम ट्यूबपासून सुरू झालेला ५,००० वर्षांचा प्रवास!"
                ],
                "ccMr": "व्हॅक्यूम ट्यूबपासून सुरू झालेला हा प्रवास आज मानवाच्या बुद्धिमत्तेशी बरोबरी करत आहे.",
                "ccEn": "From vacuum tubes to neural AI, computing shapes the future of humanity."
            }
        ]
    }
}

def get_audio_duration(audio_path):
    cmd = [FFMPEG_EXE, '-i', audio_path]
    res = subprocess.run(cmd, stderr=subprocess.PIPE, text=True)
    for line in res.stderr.splitlines():
        if 'Duration:' in line:
            parts = line.split('Duration:')[1].split(',')[0].strip().split(':')
            hours = float(parts[0])
            minutes = float(parts[1])
            seconds = float(parts[2])
            return hours * 3600 + minutes * 60 + seconds
    return 45.0  # fallback

def render_generation_video(gen_id):
    cfg = GEN_SCENES[gen_id]
    audio_path = cfg["audioMr"]
    total_duration = get_audio_duration(audio_path)
    total_frames = int(total_duration * FPS)
    scenes = cfg["scenes"]
    num_scenes = len(scenes)
    frames_per_scene = total_frames / num_scenes

    print(f"\n--- Rendering Generation {gen_id}: {total_duration:.1f}s ({total_frames} frames @ {FPS}fps) ---")

    # Load base image
    base_img = Image.open(cfg["bgImage"]).convert("RGBA")
    # Resize base to fit width/height
    base_img_resized = base_img.resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS)

    # Start ffmpeg subprocess to stream raw video frames
    raw_video_path = f"assets/videos/temp_gen{gen_id}.mp4"
    final_video_path = f"assets/videos/gen{gen_id}_video.mp4"

    ffmpeg_cmd = [
        FFMPEG_EXE, '-y',
        '-f', 'rawvideo',
        '-vcodec', 'rawvideo',
        '-s', f'{WIDTH}x{HEIGHT}',
        '-pix_fmt', 'rgb24',
        '-r', str(FPS),
        '-i', '-',
        '-i', audio_path,
        '-c:v', 'libx264',
        '-preset', 'fast',
        '-crf', '26',
        '-c:a', 'aac',
        '-b:a', '96k',
        '-pix_fmt', 'yuv420p',
        '-shortest',
        final_video_path
    ]

    proc = subprocess.Popen(ffmpeg_cmd, stdin=subprocess.PIPE)

    for f_idx in range(total_frames):
        scene_idx = min(int(f_idx / frames_per_scene), num_scenes - 1)
        scene = scenes[scene_idx]
        progress_pct = (f_idx + 1) / total_frames

        # Create canvas
        canvas = Image.new("RGBA", (WIDTH, HEIGHT), (11, 15, 25, 255))

        # Ken-Burns subtle zoom on background
        zoom_factor = 1.0 + 0.08 * (f_idx % int(frames_per_scene)) / frames_per_scene
        zw = int(WIDTH * zoom_factor)
        zh = int(HEIGHT * zoom_factor)
        zoomed = base_img_resized.resize((zw, zh), Image.Resampling.BILINEAR)
        x_off = (zw - WIDTH) // 2
        y_off = (zh - HEIGHT) // 2
        bg_crop = zoomed.crop((x_off, y_off, x_off + WIDTH, y_off + HEIGHT))
        
        # Darken background with smooth gradient
        dark_overlay = Image.new("RGBA", (WIDTH, HEIGHT), (11, 15, 25, 210))
        bg_composite = Image.alpha_composite(bg_crop, dark_overlay)
        canvas.paste(bg_composite, (0, 0))

        draw = ImageDraw.Draw(canvas)

        # Top Bar: Era Badge and Title
        draw.rectangle([40, 30, WIDTH - 40, 95], fill=(22, 30, 48, 220), outline=(56, 189, 248, 120), width=1)
        draw.text((60, 42), cfg["titleMr"], font=font_subtitle, fill=(255, 255, 255))
        draw.text((WIDTH - 240, 46), f"पिढी {gen_id} • {scene['sceneNum']}", font=font_badge, fill=(245, 158, 11))

        # Main Central SaaS Content Card
        card_x1 = 50
        card_y1 = 120
        card_x2 = WIDTH - 50
        card_y2 = 570
        draw.rectangle([card_x1, card_y1, card_x2, card_y2], fill=(15, 23, 42, 230), outline=(255, 255, 255, 35), width=2)

        # Scene Tag Pill
        tag_w = 260
        draw.rounded_rectangle([card_x1 + 30, card_y1 + 25, card_x1 + 30 + tag_w, card_y1 + 65], radius=8, fill=(30, 58, 138, 220), outline=(96, 165, 250, 180), width=1)
        draw.text((card_x1 + 45, card_y1 + 32), f"📌 {scene['tag']}", font=font_badge, fill=(224, 242, 254))

        # Headline
        draw.text((card_x1 + 30, card_y1 + 80), scene["headline"], font=font_title, fill=(254, 240, 138))

        # Points
        py = card_y1 + 160
        for pt in scene["points"]:
            draw.text((card_x1 + 35, py), pt, font=font_body, fill=(241, 245, 249))
            py += 52

        # Telemetry Quick Tag in Card bottom
        draw.text((card_x1 + 35, card_y2 - 45), f"🎙️ ऑडिओ स्पष्टीकरण चालू • भाषा: मराठी व English उपलब्ध", font=font_badge, fill=(148, 163, 184))

        # Closed Captions (CC) Bar at Bottom
        cc_y1 = 585
        cc_y2 = 680
        draw.rounded_rectangle([40, cc_y1, WIDTH - 40, cc_y2], radius=10, fill=(3, 7, 18, 240), outline=(245, 158, 11, 150), width=1)
        draw.text((60, cc_y1 + 10), "💬 CC [मराठी]: " + scene["ccMr"], font=font_subtitles_cc, fill=(255, 255, 255))
        draw.text((60, cc_y1 + 48), "💬 CC [English]: " + scene["ccEn"], font=font_badge, fill=(203, 213, 225))

        # Timeline Progress Bar at very bottom
        bar_y = 698
        draw.rectangle([40, bar_y, WIDTH - 40, bar_y + 8], fill=(30, 41, 59, 255))
        active_w = int((WIDTH - 80) * progress_pct)
        draw.rectangle([40, bar_y, 40 + active_w, bar_y + 8], fill=(245, 158, 11, 255))

        # Convert to RGB and pipe into ffmpeg
        rgb_frame = canvas.convert("RGB").tobytes()
        proc.stdin.write(rgb_frame)

        if f_idx % (FPS * 5) == 0:
            print(f"  Gen {gen_id}: {f_idx}/{total_frames} frames ({progress_pct*100:.0f}%)")

    proc.stdin.close()
    proc.wait()
    print(f"Generated: {final_video_path} (Size: {os.path.getsize(final_video_path) / (1024*1024):.2f} MB)")

if __name__ == "__main__":
    os.makedirs("assets/videos", exist_ok=True)
    for g in range(1, 6):
        render_generation_video(g)
    print("\nAll 5 Generation In-Depth Presentation Videos with Audio successfully rendered!")
