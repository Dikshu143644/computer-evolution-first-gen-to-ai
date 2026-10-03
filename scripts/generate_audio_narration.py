import os
import sys
import subprocess

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

# Professional Documentary Scripts for all 5 Generations
# Carefully punctuated with pauses and narrative cadence for human-like emotional speech
SCRIPTS = {

    1: {
        'title_mr': 'पहिली पिढी: व्हॅक्यूम ट्यूब्स व ENIAC (1940 – 1956)',
        'title_en': 'First Generation: Vacuum Tubes & The ENIAC (1940 – 1956)',
        'mr': '''संगणक उत्क्रांतीच्या पहिल्या पिढीत आपले मनःपूर्वक स्वागत आहे! 
१९४० ते १९५६ चा हा काळ, मानवाच्या तंत्रज्ञान क्रांतीची खरी सुरुवात होती. 
कल्पना करा, एका मोठ्या सभागृहाएवढा अवाढव्य संगणक, ज्यामध्ये १८ हजारांपेक्षा जास्त व्हॅक्यूम ट्यूब्स जळजळत होत्या! 
होय, हाच तो १९४६ चा ऐतिहासिक 'एनियाक' संगणक. 
याचे वजन तब्बल ३० टन होते, आणि तो चालू असताना तब्बल १५० किलोवॅट वीज खर्ची पडायची. 
डेटा साठवण्यासाठी मॅग्नेटिक ड्रम्स आणि आज्ञा देण्यासाठी पंच कार्ड्सचा वापर केला जात असे. 
जरी या प्रचंड उष्णतेमुळे व्हॅक्यूम ट्यूब्स वारंवार खराब व्हायच्या, तरी सेकंदाला ५ हजार गणिते सोडवण्याची त्याची ताकद... त्या काळात एक अद्भुत चमत्कार मानली गेली. 
याच पहिल्या पिढीने आधुनिक डिजिटल जगाचा भक्कम पाया रचला!''',
        'en': '''Welcome to the monumental First Generation of Computing, from 1940 to 1956. 
Picture a colossal machine spanning an entire room, glowing with over eighteen thousand vacuum tubes! 
This was the legendary ENIAC in 1946, engineered by John Mauchly and J. Presper Eckert. 
Weighing over thirty tons and drawing a staggering one hundred and fifty kilowatts of power, it crackled with computational energy. 
Programmers painstakingly fed raw punch cards and coded in direct binary machine language. 
While extreme heat and frequent tube burnout posed relentless challenges, ENIAC proved to humankind that electronic calculation could conquer previously impossible mathematical frontiers, laying the enduring foundation for all digital history!'''
    },
    2: {
        'title_mr': 'दुसरी पिढी: ट्रान्झिस्टर्स व IBM 1401 (1956 – 1963)',
        'title_en': 'Second Generation: Transistors & The IBM 1401 (1956 – 1963)',
        'mr': '''दुसऱ्या पिढीचे आगमन म्हणजे तंत्रज्ञान विश्वात आलेले एक सोनेरी वादळ! 
१९५६ ते १९६३ दरम्यान, नाजूक व्हॅक्यूम ट्यूब्सची जागा घेतली एका जादुई शोधाने—ट्रान्झिस्टर! 
बेल लॅबोरेटरीजमध्ये विल्यम शॉकली, जॉन बार्डिन आणि वॉल्टर ब्रॅटन यांनी लावलेला हा शोध मानवी इतिहासातील सर्वात क्रांतिकारक ठरला. 
ट्रान्झिस्टरमुळे संगणकांचा आकार हजारो पटींनी लहान झाला, उष्णता कमी झाली, आणि विश्वसनीयता गगनाला भिडली. 
याच काळात मॅग्नेटिक कोर मेमरीचा उदय झाला. 
सर्वात महत्त्वाचे म्हणजे, मानवाला समजणाऱ्या इंग्रजीसारख्या भाषा—जसे की फोरट्रान आणि कोबोल—या पिढीत जन्माला आल्या. 
आयबीएम १४०१ सारख्या लोकप्रिय प्रणालींनी जगभरातील बँका आणि व्यापाराचा चेहरामोहरा कायमचा बदलून टाकला!''',
        'en': '''The Second Generation of Computers, spanning 1956 to 1963, marked a triumphant technological revolution. 
The fragile, power-hungry vacuum tube was decisively replaced by one of the greatest inventions of the twentieth century: the solid-state transistor, born at Bell Laboratories. 
Almost overnight, computers shrank dramatically in size, while skyrocketing in reliability and processing speed. 
Magnetic core memories provided robust storage, and for the first time, human beings could speak to machines using high-level programming languages like FORTRAN and COBOL. 
The iconic IBM 1401 brought computing out of military bunkers and into commercial enterprises worldwide!'''
    },
    3: {
        'title_mr': 'तिसरी पिढी: इंटिग्रेटेड सर्किट व अपोलो ११ (1964 – 1971)',
        'title_en': 'Third Generation: Integrated Circuits & Apollo 11 (1964 – 1971)',
        'mr': '''तिसऱ्या पिढीने संगणकांना आपल्या रोजच्या जीवनाच्या दाराशी आणून उभे केले! 
१९६४ ते १९७१ या काळात अवतरली एका छोट्या सिलिकॉन चिपची किमया—इंटिग्रेटेड सर्किट, अर्थात आयसी चिप! 
जॅक किल्बी आणि रॉबर्ट नॉईस यांनी एका लहानशा सिलिकॉन तुकड्यावर शेकडो ट्रान्झिस्टर्स एकत्र गुंफले. 
या शोधाने संगणकांचा वेग थेट नॅनोसेकंदांमध्ये नेला. 
आता पंच कार्ड्सचा काळ संपला होता. 
कीबोर्ड, स्क्रीन मॉनिटर आणि आधुनिक ऑपरेटिंग सिस्टीम्सच्या साहाय्याने संगणक एकाच वेळी अनेक कामे करू लागले. 
याच तिसऱ्या पिढीच्या तंत्रज्ञानाने अपोलो ११ मोहिमेत मानवाला चंद्रावर उतरवण्याचे ऐतिहासिक स्वप्न पूर्ण केले!''',
        'en': '''The Third Generation, spanning 1964 to 1971, ushered in the golden era of miniaturization with the Integrated Circuit. 
Pioneered by Jack Kilby and Robert Noyce, a single fingernail-sized silicon chip could now harbor hundreds of interconnected transistors. 
Punch cards were cast aside for interactive keyboards and visual CRT monitors. 
Sophisticated operating systems brought time-sharing and multi-programming to life. 
Legendary systems like the IBM System 360 and CDC 6600 defined this era, while NASA's Apollo Guidance Computer safely guided astronauts to set foot upon the Moon!'''
    },
    4: {
        'title_mr': 'चौथी पिढी: मायक्रोप्रोसेसर व PC क्रांती (1971 – आज)',
        'title_en': 'Fourth Generation: The Microprocessor & PC Revolution (1971 – Present)',
        'mr': '''चौथ्या पिढीने तंत्रज्ञानाला केवळ मोठ्या कार्यालयांपुरते मर्यादित न ठेवता, ते प्रत्येकाच्या घराघरात आणि हातातील तळहातावर पोहोचवले! 
१९७१ मध्ये इंटेल ४००४ या पहिल्या मायक्रोप्रोसेसरच्या जन्मासह ही क्रांती सुरू झाली. 
संपूर्ण सीपीयू एका सूक्ष्म सिलिकॉन चिपवर सामावला. 
व्हीएलएसआय तंत्रज्ञानामुळे लाखो, आणि पुढे अब्जो ट्रान्झिस्टर्स एका चिपवर बसू लागले. 
यामधूनच निर्माण झाले ऍपलचे पहिले संगणक, आयबीएम पीसी, आणि आजचे शक्तिशाली लॅपटॉप्स व स्मार्टफोन्स! 
आंतरजालाचे महाजाळे म्हणजेच इंटरनेट, ग्राफिकल युझर इंटरफेस, आणि माऊसचा स्पर्श... या सर्व गोष्टींनी मानवी जीवनाची व्याख्याच बदलून टाकली!''',
        'en': '''The Fourth Generation, from 1971 to the modern day, placed unimaginable computing power into the hands of billions. 
It was sparked by the arrival of the Intel 4004—the world's first single-chip microprocessor. 
Through Very Large Scale Integration, entire central processing units with millions and billions of microscopic transistors were etched into silicon. 
This ignited the Personal Computer revolution, spearheaded by Apple, Microsoft, and IBM. 
Coupled with graphical user interfaces, optical fiber networks, and the global World Wide Web, computing transformed communication, commerce, and human civilization forever!'''
    },
    5: {
        'title_mr': 'पाचवी पिढी: AI व क्वांटम महासंगणक (वर्तमान व भविष्य)',
        'title_en': 'Fifth Generation: Artificial Intelligence & Quantum Frontiers (Present & Future)',
        'mr': '''आणि आता आपण उभे आहोत एका अद्भूत भविष्याच्या उंबरठ्यावर—पाचवी पिढी! 
ही पिढी केवळ दिलेल्या आज्ञांचे पालन करणारी नाही, तर स्वतः शिकणारी, तर्क करणारी आणि सृजनशील विचार करणारी कृत्रिम बुद्धिमत्ता आहे! 
अथांग न्यूरल नेटवर्क्स, लार्ज लँग्वेज मॉडेल्स, रोबोटिक्स आणि नॅचरल लँग्वेज प्रोसेसिंगमुळे संगणक आज माणसाप्रमाणे भाषा बोलू आणि समजून घेऊ शकतो. 
भारताचे परम सिद्धी आणि परम अनंत सारखे महासंगणक, तसेच क्वांटम कॉम्प्युटिंगची अफाट क्षमता, अशक्य भासणारी वैज्ञानिक आव्हाने लीलया सोडवत आहेत. 
हा फक्त एक प्रवास नाही, तर मानवी बुद्धिमत्ता आणि कृत्रिम बुद्धिमत्तेचा एक अभूतपूर्व संगम आहे!''',
        'en': '''Welcome to the Fifth Generation—the frontier of Artificial Intelligence and Quantum Computing. 
Machines are no longer merely executing rigid instructions; they learn, infer, reason, and create alongside humanity. 
Powered by massive neural network architectures, high-performance GPU clusters, and Large Language Models, artificial intelligence now understands natural human speech, generates code, and uncovers scientific breakthroughs. 
From India's flagship PARAM supercomputers to subatomic quantum qubits tackling the deepest mysteries of physics, the Fifth Generation redefines what is possible in the universe of computation!'''
    }
}

def generate_voiceovers():
    os.makedirs('assets/audio', exist_ok=True)
    
    # High-fidelity Human Neural Voices:
    # mr-IN-ManoharNeural: Warm, expressive, natural documentary tone in Marathi
    # en-IN-NeerjaNeural: Natural, articulate, warm narrative tone in English
    VOICE_MR = "mr-IN-ManoharNeural"
    VOICE_EN = "en-IN-NeerjaNeural"

    for gen, item in SCRIPTS.items():
        print(f"\n==========================================")
        print(f"🎙️ Generating Human Neural Voice for Gen {gen}...")
        print(f"==========================================")

        # Marathi Audio & VTT
        mr_mp3 = f"assets/audio/gen{gen}_mr.mp3"
        mr_vtt = f"assets/audio/gen{gen}_mr.vtt"
        print(f"-> Marathi ({VOICE_MR}): {mr_mp3}")
        cmd_mr = [
            "uvx", "edge-tts",
            "--voice", VOICE_MR,
            "--text", item['mr'],
            "--write-media", mr_mp3,
            "--write-subtitles", mr_vtt
        ]
        subprocess.run(cmd_mr, check=True)

        # English Audio & VTT
        en_mp3 = f"assets/audio/gen{gen}_en.mp3"
        en_vtt = f"assets/audio/gen{gen}_en.vtt"
        print(f"-> English ({VOICE_EN}): {en_mp3}")
        cmd_en = [
            "uvx", "edge-tts",
            "--voice", VOICE_EN,
            "--text", item['en'],
            "--write-media", en_mp3,
            "--write-subtitles", en_vtt
        ]
        subprocess.run(cmd_en, check=True)

        print(f"✅ Gen {gen} Voiceovers & Synced Subtitles Ready!")

    print("\n🎉 All 10 Emotional Neural Voiceovers and Subtitles generated successfully!")

if __name__ == "__main__":
    generate_voiceovers()
