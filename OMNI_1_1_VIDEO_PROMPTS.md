# 🎬 Gemini Omni Flash 1.1 — Cinematic Video Generation Prompts
## 5 Generations of Computer Evolution (संगणक उत्क्रांती)

> **Model:** `gemini_omni_flash_1_1` (Gemini Omni Flash 1.1 Multimodal Video Engine)  
> **Modality:** `textToVideo` / `mediaToVideo`  
> **Aspect Ratio:** `16:9` (1280x720 / 1920x1080)  
> **Target Video Length:** 60s – 300s (Extended Multi-Clip Chain via `gemini_omni_flash_1_1_video_extended`)  
> **Audio Tracks Supported:** Bilingual Marathi (मराठी) & English Voiceover with Ambient Foley Sound FX  

---

### 🌟 Quick Architecture & Generation Instructions

When invoking `gemini_omni_flash_1_1`, pass the prompts below into the prompt payload. For long-form videos (1 to 5 minutes), use the scene-by-scene breakdown and extend each scene using `gemini_omni_flash_1_1_video_extended`.

### 🏆 Golden Reference Benchmark Video: `CO1.1.mp4`
- **File Path:** [`assets/videos/CO1.1.mp4`](assets/videos/CO1.1.mp4) (Full HD 1080p, 24fps, 10.00s)
- **Engine Standard:** Google DeepMind / Gemini Omni Flash 1.1 Multimodal Video Engine.
- **Visual Baseline:** Photorealistic macro push-in on an glowing tungsten vacuum tube filament (#F59E0B amber glow, 2200K optical bloom, floating dust motes, deep charcoal #0B0F19 shadows) in a 1940s laboratory with tall black steel computer racks in the background and crisp cyan HUD tech overlay framing.
- **Audio Baseline:** 60Hz electrical transformer hum, subtle vacuum tube filament crackle, low atmospheric reverberation.
- **Production Standard for Remaining Clips:** All subsequent video clips for Generations 1 through 5 must reference `CO1.1.mp4` as the stylistic, lighting, and camera motion benchmark.

---

## 🏛️ Generation 1: The Dawn of Electronic Computing (1940 – 1956)
### व्हॅक्यूम ट्यूब्स व एनियाक (Vacuum Tubes & ENIAC)

#### 🎥 Visual & Camera Direction (Omni 1.1 Master Prompt)
```text
Cinematic 8k photorealistic documentary sequence set in 1946 inside the University of Pennsylvania Moore School of Electrical Engineering. 

A slow, dramatic camera dolly glides through a dimly lit, massive hall housing the ENIAC computer. Gigantic black steel frames tower 8 feet high, lined with thousands of glowing glass vacuum tubes emitting a warm, pulsating amber-orange neon filament glow. Dust motes dance in shafts of atmospheric volumetric sunlight cutting through tall arched industrial windows. 

The camera performs an extreme macro focus pull onto an individual glass vacuum tube, showing the intricate tungsten wire filaments heating up and glowing brightly, reflecting off brass solder joints and dark phenolic circuit boards. 

Cut to female programmers in 1940s attire meticulously plugging heavy black patch cables into rotary switchboards and feeding perforated punch cards into mechanical readers. Rich archival color grading, 35mm film grain, anamorphic lens flare, moody sepia-amber shadows, high contrast historical realism.
```

#### 🔊 Audio, Foley & Atmosphere Prompt
```text
Deep resonant electrical transformer 60Hz hum, rhythmic mechanical clatter of paper punch card sorters, metallic clicks of heavy toggle switches, faint crackle of high-voltage vacuum tube filaments warming up, distant low ambient room reverberation.
```

#### 🎙️ Voiceover Narration Script (Marathi & English)
- **मराठी आवाज:**
  > "संगणक उत्क्रांतीच्या पहिल्या पिढीत आपले स्वागत आहे. १९४० ते १९५६ दरम्यान सुरू झालेल्या या प्रवासाचा कणा म्हणजे काचेच्या व्हॅक्यूम ट्यूब्स. १९४६ मधील एनियाक हा जगातील पहिला इलेक्ट्रॉनिक महासंगणक ३० टन वजनाचा आणि एका संपूर्ण हॉलएवढा होता. १८,००० व्हॅक्यूम ट्यूब्स आणि पंच कार्ड्सच्या साहाय्याने सेकंदाला ५,००० आकडेमोड करत या पिढीने डिजिटल युगाचा ऐतिहासिक पाया रचला."
- **English Voiceover:**
  > "Welcome to the First Generation of Computing. Spanning from 1940 to 1956, this era was powered by glowing glass vacuum tubes. The monumental ENIAC, unveiled in 1946, weighed over 30 tons and packed 18,000 vacuum tubes into an entire gymnasium room. Calculating at 5,000 operations per second with punch cards and magnetic drums, it forged the dawn of modern electronic computation."

---

## ⚡ Generation 2: The Transistor Revolution (1956 – 1963)
### ट्रान्झिस्टर्स व व्यावसायिक संगणक (Transistors & IBM 1401)

#### 🎥 Visual & Camera Direction (Omni 1.1 Master Prompt)
```text
Photorealistic 1950s Bell Labs and IBM research center documentary sequence. 

The scene opens with a clean, cinematic tabletop shot of the original 1947 point-contact transistor on a wooden lab bench: delicate germanium crystal, two gold foil contacts, and a curved plastic wedge under a microscope lamp. 

Smooth cinematic transition as the camera zooms into the crystal lattice, dissolving into a mid-century air-conditioned computer room in 1959. Sleek two-tone beige and blue IBM 1401 mainframe cabinets stand in clean rows on raised vinyl flooring. Two large magnetic tape reels spin gracefully with intermittent start-stop jerks, their glistening brown mylar magnetic ribbons catching the cool overhead fluorescent strip lights.

Engineers in white short-sleeve shirts and skinny black ties examine green-bar continuous tractor-feed printer output spewing from an IBM 1403 high-speed chain printer. Clean Kodachrome color palette, crisp mid-century modern aesthetic, smooth Steadicam tracking shot.
```

#### 🔊 Audio, Foley & Atmosphere Prompt
```text
High-speed spinning whir of dual magnetic tape drives, rhythmic rapid-fire clatter of high-speed chain impact printers, subtle clean HVAC air-conditioning hiss, crisp solid-state relay snaps, optimistic mid-century laboratory tone.
```

#### 🎙️ Voiceover Narration Script (Marathi & English)
- **मराठी आवाज:**
  > "दुसऱ्या पिढीने व्हॅक्यूम ट्यूब्सची जागा क्रांतिकारक ट्रान्झिस्टरने घेतली. १९४७ मध्ये बेल लॅब्जमध्ये लागलेल्या या शोधामुळे संगणकांचा आकार हजार पटींनी लहान झाला, वीज वापर घटला आणि वेग मायक्रोसेकंदांवर पोहोचला. मॅग्नेटिक कोर मेमरी आली आणि पहिल्यांदाच फोरट्रान व कोबोल सारख्या मानवी भाषेसारख्या प्रोग्रॅमिंग भाषांचा जन्म झाला. आयबीएम १४०१ ने जागतिक व्यापाराचा चेहरामोहरा बदलून टाकला."
- **English Voiceover:**
  > "The Second Generation witnessed one of humanity's greatest inventions: the solid-state transistor. Developed at Bell Labs, transistors replaced fragile vacuum tubes, slashing power consumption and shrinking mainframes to office proportions. Introducing magnetic core memory and high-level languages like FORTRAN and COBOL, systems like the IBM 1401 industrialized data processing."

---

## 🔬 Generation 3: The Integrated Circuit & Apollo Era (1964 – 1971)
### इंटिग्रेटेड सर्किट्स व अपोलो ११ मोहीम (Integrated Circuits & IBM System/360)

#### 🎥 Visual & Camera Direction (Omni 1.1 Master Prompt)
```text
Ultra-high definition macro cinematic sequence exploring the birth of silicon microelectronics.

Extreme close-up shot hovering millimeter-above a golden ceramic dual-in-line package (DIP) chip. An intricate network of microscopic aluminum interconnect traces sparkles across a pure silicon crystalline wafer under sterile cleanroom illumination. 

Camera transitions in a sweeping motion to NASA Mission Control in Houston during the July 1969 Apollo 11 lunar landing. Operators stare intently into green-phosphor CRT monitors. On the console sits the Apollo Guidance Computer, its iconic DSKY display flashing amber numerical status readouts ("DSKY 1202 alarm"). 

In the adjacent server room, massive blue monolithic IBM System/360 frames hum with coordinated status lights blinking across the central operator's console. Modernist tech documentary grading, anamorphic blue horizontal streaks, cinematic tension and precision engineering.
```

#### 🔊 Audio, Foley & Atmosphere Prompt
```text
Chirping high-frequency CRT monitor hum, mechanical keyboard typing clicks, NASA Quindar beeps, crisp magnetic disk seek heads clicking into place, quiet tense Mission Control ambient murmur.
```

#### 🎙️ Voiceover Narration Script (Marathi & English)
- **मराठी आवाज:**
  > "तिसऱ्या पिढीत जन्माला आली सिलिकॉन चिप अर्थात इंटिग्रेटेड सर्किट. एकाच लहान चिपवर शेकडो ट्रान्झिस्टर्स सामावले गेले. यामुळे संगणकांचा वेग नॅनोसेकंदांवर पोहोचला. पंच कार्ड्सच्या जागी मॉनिटर स्क्रीन, कीबोर्ड आणि ऑपरेटिंग सिस्टीम आली. आयबीएम सिस्टीम ३६० आणि अपोलो ११ यानात वापरल्या गेलेल्या आयसी चिप्सने मानवाला चंद्रावर पोहोचवण्याचे स्वप्न साकार केले."
- **English Voiceover:**
  > "The Third Generation packed hundreds of microscopic components onto a single sliver of silicon: the Integrated Circuit. Microchips propelled computing speeds into nanoseconds while keyboards, monitors, and Time-Sharing Operating Systems democratized interaction. Powering both corporate mainframes like the IBM System/360 and NASA's Apollo 11 Guidance Computer, ICs unlocked the stars."

---

## 💻 Generation 4: The Microprocessor & PC Explosion (1971 – Present)
### मायक्रोप्रोसेसर, वैयक्तिक संगणक व इंटरनेट (Intel 4004 to Modern PC)

#### 🎥 Visual & Camera Direction (Omni 1.1 Master Prompt)
```text
Fast-paced, vibrant cinematic montage tracking the personal computer and internet revolution.

Begins with a 1971 macro shot of the Intel 4004 microprocessor, its silicon die etched with 2,300 microscopic transistors. The camera transitions into a sunlit California garage in 1976 where an original Apple-1 motherboard sits next to a soldering iron, dissolving into an Apple II and the iconic 1981 IBM PC 5150 with dual 5.25-inch floppy drives.

Dynamic camera swoop through a vibrant 1990s room as dial-up tones connect to the World Wide Web, with Netscape Navigator loading on a beige CRT monitor. 

The sequence rapidly accelerates into modern day: sleek unibody anodized aluminum laptops, ultra-thin smartphones with edge-to-edge OLED glass screens, fiber optic internet cables pulsing with laser light under the ocean floor, and millions of illuminated screens glowing in cities at night. Vibrant, modern tech commercial lighting, high dynamic range color fidelity, fluid motion blur.
```

#### 🔊 Audio, Foley & Atmosphere Prompt
```text
Signature 56k dial-up handshake modem tones, tactile mechanical keyboard cherry switch clicks, floppy drive stepper motor grunts, smooth glass smartphone tap haptics, modern digital interface notification tones.
```

#### 🎙️ Voiceover Narration Script (Marathi & English)
- **मराठी आवाज:**
  > "चौथी पिढी म्हणजे संपूर्ण CPU एकाच लहान चिपवर सामावण्याची जादू — म्हणजेच मायक्रोप्रोसेसर. १९७१ मध्ये इंटेल ४००४ पासून सुरू झालेली ही क्रांती ॲपल, आयबीएम पीसी, लॅपटॉप आणि स्मार्टफोन्सच्या रूपाने प्रत्येकाच्या खिशात पोहोचली. वर्ल्ड वाइड वेब आणि इंटरनेटने संपूर्ण पृथ्वी जोडली गेली. गिगाबाईट्स मेमरी, पायथॉनसारख्या प्रगत भाषा आणि सेकंदाला अब्जावधी गणिते हे या पिढीचे सामर्थ्य आहे."
- **English Voiceover:**
  > "The Fourth Generation brought computing to every desk and pocket via the microprocessor. VLSI technology etched billions of transistors onto a postage-stamp-sized die, giving birth to the Apple II, IBM PC, and the internet era. From dial-up modems to multi-core smartphones and global cloud networks, this revolution created the modern connected civilization."

---

## 🌌 Generation 5: Artificial Intelligence & Quantum Computing (Present & Beyond)
### कृत्रिम बुद्धिमत्ता, GPU सुपरक्लस्टर्स व क्वांटम युग (AI & Quantum Frontiers)

#### 🎥 Visual & Camera Direction (Omni 1.1 Master Prompt)
```text
Visionary, cutting-edge sci-fi documentary aesthetic set inside a state-of-the-art AI supercomputing datacenter and quantum physics laboratory.

The camera glides through a massive hyperscale server corridor illuminated by ambient ice-blue and amber LED server blade lights. Racks of NVIDIA H100 and Google TPU tensor processors gleam through transparent liquid-cooling tubes with circulating coolant fluid. Holographic neural network topological graphs float in volumetric air, nodes firing with bioluminescent pulses representing deep learning inference.

Seamless transition into a pristine cryogenic quantum laboratory. A majestic gold-plated dilution refrigerator ("quantum chandelier") hangs suspended in vacuum, cooled to nearly absolute zero (-273°C). The camera dives into the central quantum processor where glowing superconducting qubits hover in entangled superposition.

Cinematic anamorphic widescreen, hyper-clean raytraced reflections, volumetric atmospheric haze, deep space obsidian contrasts, futuristic awe and scientific transcendence.
```

#### 🔊 Audio, Foley & Atmosphere Prompt
```text
Low sub-bass resonance of quantum dilution refrigerators, high-tech server blade fan wash, soft synthesized neural shimmer tones, crystal-clear digital chime pulses, expansive ambient electronic drone.
```

#### 🎙️ Voiceover Narration Script (Marathi & English)
- **मराठी आवाज:**
  > "पाचवी पिढी ही केवळ आज्ञा पाळणाऱ्या यंत्रांची नसून, स्वतः शिकणाऱ्या कृत्रिम बुद्धिमत्तेची आहे. हजारो GPU कोर, डीप लर्निंग आणि भारताचे परम अनंत सारखे महासंगणक विज्ञान आणि वैद्यकात अभूतपूर्व शोध लावत आहेत. भविष्यातील क्वांटम कॉम्प्युटिंग क्यूबिट्सच्या मदतीने लाखो वर्षांचे गणित काही सेकंदात सोडवेल. व्हॅक्यूम ट्यूब्सपासून सुरू झालेला हा प्रवास आज मानवाच्या बुद्धिमत्तेशी संवाद साधत आहे!"
- **English Voiceover:**
  > "The Fifth Generation transcends classical computing. Powered by Artificial Intelligence, deep neural networks, and massive GPU superclusters, machines now learn, reason, and create. India's PARAM supercomputers lead scientific research, while quantum computers harnessing qubits unlock solutions in minutes that would take classical systems millennia. From a glass vacuum tube to artificial minds, computer evolution redefines humanity's future."

---

### 🛠️ How to Generate via Antigravity / Creative Fabrica MCP

To run directly inside your workspace or subagent:
```json
{
  "ServerName": "creative_fabrica",
  "ToolName": "generate",
  "Arguments": {
    "model": "gemini_omni_flash_1_1",
    "prompt": "<Insert generation prompt above>",
    "options": {
      "duration_seconds": 60,
      "resolution": "720p"
    }
  }
}
```
For longer presentations, chain generations using `gemini_omni_flash_1_1_video_extended` to extend up to 300 seconds (5 minutes).
