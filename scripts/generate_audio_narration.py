import os
import time
from gtts import gTTS

scripts = {
    1: {
        'mr': 'संगणक उत्क्रांतीच्या पहिल्या पिढीत आपले स्वागत आहे. पहिल्या पिढीचा कालावधी १९४० ते १९५६ मानला जातो. या पिढीतील संगणकांमध्ये मुख्य इलेक्ट्रॉनिक घटक म्हणून व्हॅक्यूम ट्यूब्स वापरल्या जात असत. उदाहरणार्थ, १९४६ मधील एनियाक हा जगातील पहिला इलेक्ट्रॉनिक संगणक होता. यामध्ये १८ हजार व्हॅक्यूम ट्यूब्स होत्या, त्याचे वजन तब्बल ३० टन होते आणि तो एका मोठ्या हॉलएवढा होता. या संगणकांमध्ये साठवणुकीसाठी मॅग्नेटिक ड्रम आणि इनपुटसाठी पंच कार्ड्स वापरले जात. हे संगणक केवळ बायनरी मशीन लँग्वेज समजायचे आणि सेकंदाला सुमारे पाच हजार आकडेमोड करत. उष्णता, विजेचा प्रचंड वापर आणि व्हॅक्यूम ट्यूब्स वारंवार जळणे ही या पिढीची मुख्य आव्हाने होती.',
        'en': 'Welcome to the First Generation of Computers, spanning from 1940 to 1956. The defining core technology of this era was the vacuum tube, used for circuitry and magnetic drums for memory. The most famous breakthrough was ENIAC in 1946, designed by John Mauchly and J. Presper Eckert. ENIAC contained over 18,000 vacuum tubes, weighed 30 tons, and consumed 150 kilowatts of electricity. Programmed entirely in binary machine language using punch cards, it could calculate 5,000 additions per second. Despite massive heat generation and tube failures, it laid the foundation for modern electronic computing.'
    },
    2: {
        'mr': 'दुसऱ्या पिढीचा कालावधी १९५६ ते १९६३ आहे. या पिढीत व्हॅक्यूम ट्यूब्सची जागा क्रांतिकारक ट्रान्झिस्टरने घेतली. १९४७ मध्ये बेल लॅब्ज येथे विल्यम शॉकली, जॉन बार्डिन आणि वॉल्टर ब्रॅटन यांनी ट्रान्झिस्टरचा शोध लावला. ट्रान्झिस्टरमुळे संगणकांचा आकार हजार पटींनी लहान झाला, वीज वापर कमी झाला आणि वेग सेकंदाला लाखो ऑपरेशन्सपर्यंत वाढला. मेमरीसाठी मॅग्नेटिक कोर मेमरी आली. तसेच पहिल्यांदा फोरट्रान आणि कोबोल सारख्या उच्च-स्तरीय प्रोग्रामिंग भाषांचा उगम झाला. आयबीएम १४०१ हा या पिढीतील अतिशय लोकप्रिय व्यावसायिक संगणक ठरला.',
        'en': 'The Second Generation of Computers, from 1956 to 1963, was ignited by the invention of the transistor at Bell Labs. Replacing fragile vacuum tubes, transistors made computers vastly smaller, faster, cheaper, and more energy-efficient. Magnetic core memory became the standard for internal storage. This generation also witnessed the birth of high-level programming languages like FORTRAN and COBOL, allowing programmers to write code using English-like statements. The IBM 1401 revolutionized business data processing worldwide.'
    },
    3: {
        'mr': 'तिसऱ्या पिढीचा कालावधी १९६४ ते १९७१ मानला जातो. या पिढीचा मुख्य आधार म्हणजे इंटिग्रेटेड सर्किट अर्थात आयसी चिप. जॅक किल्बी आणि रॉबर्ट नॉईस यांनी एकाच सिलिकॉन चिपवर शेकडो ट्रान्झिस्टर्स आणि सर्किट्स बसवण्याचा शोध लावला. यामुळे संगणकांचा वेग मायक्रोसेकंदांवरून नॅनोसेकंदांवर पोहोचला. याच काळात कीबोर्ड, मॉनिटर आणि पहिल्यांदा ऑपरेटिंग सिस्टीमचा वापर सुरू झाला, ज्यामुळे एकाच वेळी अनेक प्रोग्रॅम्स चालवणे शक्य झाले. आयबीएम सिस्टीम ३६० हे या पिढीचे उत्कृष्ट उदाहरण आहे.',
        'en': 'The Third Generation of Computers, between 1964 and 1971, was defined by the Integrated Circuit, or silicon microchip. Invented by Jack Kilby and Robert Noyce, ICs packed hundreds of transistors onto tiny semiconductor wafers. Computers became small enough for office desks. For the first time, users interacted through keyboards and monitors instead of punch cards, managed by an Operating System. Iconic milestones include the IBM System 360 and the CDC 6600 supercomputer.'
    },
    4: {
        'mr': 'चौथी पिढी १९७१ पासून आजपर्यंत कार्यरत आहे. या पिढीची ओळख म्हणजे मायक्रोप्रोसेसर चिप. व्हीएलएसआय आणि युएलएसआय तंत्रज्ञानाद्वारे संपूर्ण सीपीयू एकाच लहान चिपवर बसवण्यात आला. १९७१ मध्ये इंटेल ४००४ हा पहिला मायक्रोप्रोसेसर आला. या क्रांतीमुळे वैयक्तिक संगणक म्हणजेच पीसी प्रत्येकाच्या घरात पोहोचले. ॲपल मॅकिंतॉश, आयबीएम पीसी आणि पुढे लॅपटॉप, स्मार्टफोन तसेच इंटरनेटचा महाविस्फोट याच पिढीत झाला. गिगाबाईट्स मेमरी, पायथॉन आणि जावा सारख्या आधुनिक भाषा ही या पिढीची वैशिष्ट्ये आहेत.',
        'en': 'The Fourth Generation, from 1971 to the present day, brought computing to every home through the microprocessor. Using Very Large Scale Integration, millions and later billions of transistors were etched onto a single silicon chip, starting with the Intel 4004. This sparked the personal computer revolution, championed by Apple, IBM, Microsoft, and the open internet. Today fourth-generation machines include multi-core laptops, smartphones, and distributed cloud servers.'
    },
    5: {
        'mr': 'पाचवी पिढी ही वर्तमान आणि भविष्याची पिढी आहे. ही पिढी केवळ आज्ञा पाळण्याऐवजी स्वतः शिकणाऱ्या कृत्रिम बुद्धिमत्ता अर्थात एआय आणि समांतर प्रक्रियेवर आधारित आहे. यामध्ये नॅचरल लँग्वेज प्रोसेसिंग, डीप लर्निंग मॉडेल्स, व्हॉईस असिस्टंट्स आणि रोबोटिक्सचा समावेश आहे. भारतातील परम अनंत सारखे महासंगणक आणि भविष्यातील क्वांटम कॉम्प्युटिंग या पिढीला अभूतपूर्व गती देत आहेत. संगणक आता विचार करू शकतो, भाषा अनुवादित करू शकतो आणि माणसाप्रमाणे संवाद साधू शकतो.',
        'en': 'The Fifth Generation represents the present and future of computing, driven by Artificial Intelligence and Quantum Technologies. Moving beyond rigid programming, fifth-gen systems utilize neural networks, massive parallel GPU clusters, and Large Language Models that learn, reason, and understand natural human speech. Breakthroughs like ChatGPT, AlphaFold, and India PARAM supercomputers lead the charge, alongside quantum computing solving complex scientific challenges.'
    }
}

os.makedirs('assets/audio', exist_ok=True)

for gen, text_dict in scripts.items():
    print(f'Generating audio for Gen {gen} (Marathi)...')
    tts_mr = gTTS(text_dict['mr'], lang='mr')
    tts_mr.save(f'assets/audio/gen{gen}_mr.mp3')
    time.sleep(1)
    
    print(f'Generating audio for Gen {gen} (English)...')
    tts_en = gTTS(text_dict['en'], lang='en')
    tts_en.save(f'assets/audio/gen{gen}_en.mp3')
    time.sleep(1)

print('All 10 audio narration files generated successfully!')
