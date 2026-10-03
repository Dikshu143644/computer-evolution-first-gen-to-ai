/**
 * Main Application Controller
 * Coordinates Chapters, Timeline, Generations Matrix, India Showcase,
 * Hardware Anatomy, Activities, Sources, and Grade Levels.
 */

import { chaptersData } from './data/chaptersData.js';
import { generationsData } from './data/generationsData.js';
import { timelineData } from './data/timelineData.js';
import { sourcesData } from './data/sourcesData.js';
import { activitiesData } from './data/activitiesData.js';
import { diagrams } from './assets/diagrams.js';
import { PresentationDeck } from './presentation.js';
import { QuizEngine } from './quiz.js';
import { g1ClipsData } from './data/g1ClipsData.js';

class App {
  constructor() {
    this.currentGrade = 'level2'; // 'level1' | 'level2' | 'level3'
    this.deck = null;
    this.quiz = null;
    this.activeChapterFilter = 'all';

    this.init();
  }

  init() {
    this.deck = new PresentationDeck();
    this.quiz = new QuizEngine();
    window.app = this; // global reference for inline handlers

    this.renderChapters();
    this.renderTimeline();
    this.renderGenerationsTable();
    this.renderActivities();
    this.renderSourcesList();
    this.setupHardwareAnatomy();
    this.initVideoPlayer();
    this.bindGlobalEvents();
  }

  setGrade(gradeLevel) {
    this.currentGrade = gradeLevel;

    // Update UI buttons
    document.querySelectorAll('.grade-btn').forEach(btn => {
      if (btn.getAttribute('data-grade') === gradeLevel) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update grade banner text
    const bannerEl = document.getElementById('gradeBannerText');
    if (bannerEl) {
      if (gradeLevel === 'level1') {
        bannerEl.innerHTML = `🟢 <strong>सध्याची पातळी: इयत्ता १ ली ते ४ थी (प्राथमिक)</strong> — अगदी साधी भाषा, दैनंदिन उदाहरणे आणि गोष्टींच्या स्वरूपात शिक्षण.`;
      } else if (gradeLevel === 'level2') {
        bannerEl.innerHTML = `🟡 <strong>सध्याची पातळी: इयत्ता ५ वी ते ७ वी (माध्यमिक)</strong> — मूलभूत संकल्पना, तुलना, कालानुक्रम आणि सोपी तांत्रिक माहिती.`;
      } else {
        bannerEl.innerHTML = `🟣 <strong>सध्याची पातळी: इयत्ता ८ वी ते १० वी (उच्च माध्यमिक)</strong> — सविस्तर इतिहास, अचूक तारखा, शास्त्रज्ञ, हार्डवेअर रचना आणि तांत्रिक विश्लेषण.`;
      }
    }

    // Refresh chapters and deck
    this.renderChapters();
    if (this.deck) {
      this.deck.setGrade(gradeLevel);
    }
  }

  renderChapters() {
    const container = document.getElementById('chaptersGridContainer');
    if (!container) return;

    const chapterMedia = {
      1: { src: 'assets/images/hero_museum.jpg', provenance: 'Science Museum London' },
      2: { src: 'assets/images/babbage_engine.jpg', provenance: 'Mechanical Engines' },
      3: { src: 'assets/images/babbage_engine.jpg', provenance: 'Difference Engine No. 2' },
      4: { src: 'assets/images/eniac_1946.jpg', provenance: 'Wartime Computing' },
      5: { src: 'assets/images/eniac_1946.jpg', provenance: 'Penn Archives: ENIAC 1946' },
      6: { src: 'assets/images/transistor_1947.jpg', provenance: 'Bell Labs 1947' },
      7: { src: 'assets/images/pc_revolution.jpg', provenance: 'Silicon Integrated Circuits' },
      8: { src: 'assets/images/pc_revolution.jpg', provenance: 'Intel 4004 Microprocessor' },
      9: { src: 'assets/images/pc_revolution.jpg', provenance: 'Apple II & IBM PC 5150' },
      10: { src: 'assets/images/pc_revolution.jpg', provenance: 'Xerox PARC & Modern GUI' },
      11: { src: 'assets/images/cloud_ai_datacenter.jpg', provenance: 'CERN WWW & Global Web' },
      12: { src: 'assets/images/india_tifrac_param.jpg', provenance: 'TIFRAC & PARAM 8000' },
      13: { src: 'assets/images/pc_revolution.jpg', provenance: 'Motherboard & CPU Die' },
      14: { src: 'assets/images/cloud_ai_datacenter.jpg', provenance: 'Pocket Supercomputers' },
      15: { src: 'assets/images/cloud_ai_datacenter.jpg', provenance: 'Hyperscale Cloud Data Center' },
      16: { src: 'assets/images/cloud_ai_datacenter.jpg', provenance: 'AI Semiconductor Wafer' },
      17: { src: 'assets/images/hero_museum.jpg', provenance: 'Quantum Frontiers' },
      18: { src: 'assets/images/hero_museum.jpg', provenance: 'Evolution Big Picture' }
    };

    let filtered = chaptersData;
    if (this.activeChapterFilter === 'ancient') {
      filtered = chaptersData.filter(c => c.id <= 4);
    } else if (this.activeChapterFilter === 'generations') {
      filtered = chaptersData.filter(c => c.id >= 5 && c.id <= 8);
    } else if (this.activeChapterFilter === 'pc-web') {
      filtered = chaptersData.filter(c => c.id >= 9 && c.id <= 11);
    } else if (this.activeChapterFilter === 'india') {
      filtered = chaptersData.filter(c => c.id === 12);
    } else if (this.activeChapterFilter === 'modern-ai') {
      filtered = chaptersData.filter(c => c.id >= 13);
    }

    container.innerHTML = filtered.map(ch => {
      const difficultyText = ch.difficulty[this.currentGrade] || ch.difficulty.level2;
      const media = chapterMedia[ch.id] || { src: 'assets/images/hero_museum.jpg', provenance: 'Computing Heritage' };
      return `
        <div class="chapter-bento-card" data-chapter-id="${ch.id}">
          <div class="chapter-card-media">
            <img src="${media.src}" alt="${ch.title}" loading="lazy">
            <div class="chapter-card-media-overlay"></div>
            <div class="chapter-card-media-badges">
              <span class="card-num-chip">अध्याय ${ch.chapterNumber}</span>
              <span class="card-provenance-tag">🏛️ ${media.provenance}</span>
            </div>
          </div>

          <div class="chapter-card-body">
            <div>
              <div class="card-eyebrow">
                <span class="card-icon-badge">${ch.icon}</span>
                <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); background: #f1f5f9; border: 1px solid var(--border-card); padding: 0.2rem 0.55rem; border-radius: 6px; font-weight: 600;">
                  ${ch.coverTag || 'ऐतिहासिक टप्पा'}
                </span>
              </div>

              <h3 class="chapter-heading">${ch.title}</h3>
              <div class="chapter-english-sub">${ch.subtitle}</div>
              <div class="chapter-summary-text">${ch.purpose}</div>

              <div class="grade-adaptation-badge">
                🎯 <strong>तुमच्या इयत्तेसाठी:</strong> ${difficultyText}
              </div>
            </div>

            <div class="card-action-bar">
              <span class="card-slides-badge">
                📑 ${ch.slides.length} स्लाईड्स
              </span>
              <button class="btn-primary btn-launch-chapter" data-chapter-idx="${ch.id - 1}" style="font-size: 0.82rem; padding: 0.45rem 1rem;">
                स्लाईड्स उघडा ➔
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Bind launch slide buttons
    container.querySelectorAll('.btn-launch-chapter').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const chIdx = parseInt(btn.getAttribute('data-chapter-idx'), 10);
        this.deck.openDeck(chIdx, 0);
      });
    });

    container.querySelectorAll('.chapter-bento-card').forEach(card => {
      card.addEventListener('click', () => {
        const chId = parseInt(card.getAttribute('data-chapter-id'), 10);
        this.deck.openDeck(chId - 1, 0);
      });
    });
  }

  renderTimeline() {
    const cardsTrack = document.getElementById('timelineCardsTrack');
    const slider = document.getElementById('timelineRangeSlider');
    const selectedYearLabel = document.getElementById('timelineCurrentLabel');
    if (!cardsTrack || !slider) return;

    slider.max = timelineData.length - 1;
    slider.value = 0;

    const timelineMediaMap = {
      ancient: { src: 'assets/images/babbage_engine.jpg', tag: 'ऐतिहासिक गणना', provenance: 'Science Museum London' },
      mechanical: { src: 'assets/images/babbage_engine.jpg', tag: 'यांत्रिक गियर्स व गणना', provenance: 'Science Museum London / Babbage' },
      software: { src: 'assets/images/babbage_engine.jpg', tag: 'पहिला अल्गोरिदम', provenance: 'Lovelace Collection, Oxford' },
      electromechanical: { src: 'assets/images/eniac_1946.jpg', tag: 'इलेक्ट्रोमेकॅनिकल युग', provenance: 'Harvard Scientific Instruments' },
      gen1: { src: 'assets/images/eniac_1946.jpg', tag: 'पहिली पिढी: व्हॅक्यूम ट्यूब्स', provenance: 'Penn Archives: ENIAC 1946' },
      gen2: { src: 'assets/images/transistor_1947.jpg', tag: 'दुसरी पिढी: ट्रान्झिस्टर', provenance: 'Bell Labs Historical Archives' },
      india: { src: 'assets/images/india_tifrac_param.jpg', tag: 'स्वावलंबी भारत', provenance: 'TIFR Mumbai & C-DAC Pune' },
      gen3: { src: 'assets/images/pc_revolution.jpg', tag: 'तिसरी पिढी: Integrated Circuit', provenance: 'Texas Instruments & Intel' },
      gen4: { src: 'assets/images/pc_revolution.jpg', tag: 'चौथी पिढी: मायक्रोप्रोसेसर', provenance: 'Intel 4004 Museum' },
      pc: { src: 'assets/images/pc_revolution.jpg', tag: 'पर्सनल संगणक क्रांती', provenance: 'IBM Historical Archives' },
      hardware: { src: 'assets/images/pc_revolution.jpg', tag: 'मानव-संगणक इंटरफेस', provenance: 'SRI Stanford / Engelbart' },
      network: { src: 'assets/images/cloud_ai_datacenter.jpg', tag: 'जागतिक नेटवर्क व वेब', provenance: 'DARPA & CERN Web Archives' },
      modern: { src: 'assets/images/cloud_ai_datacenter.jpg', tag: 'स्मार्टफोन व मोबाईल युग', provenance: 'Mobile Computing Heritage' },
      ai: { src: 'assets/images/cloud_ai_datacenter.jpg', tag: 'आधुनिक AI व डेटा सेंटर', provenance: 'Cloud & AI Supercomputers' },
      future: { src: 'assets/images/hero_museum.jpg', tag: 'क्वांटम व भविष्यातील क्षितिज', provenance: 'Frontier Computing Lab' }
    };

    const updateTimelineView = (index) => {
      const item = timelineData[index];
      if (selectedYearLabel) {
        selectedYearLabel.textContent = `${item.displayDate} — ${item.title}`;
      }

      const media = timelineMediaMap[item.category] || {
        src: 'assets/images/hero_museum.jpg',
        tag: 'संगणक इतिहास',
        provenance: 'Computer History Museum'
      };

      cardsTrack.innerHTML = `
        <div class="timeline-detail-bento">
          <div class="timeline-media-pane">
            <img src="${media.src}" alt="${item.title}">
            <div class="timeline-media-overlay"></div>
            <div class="timeline-media-caption">
              <span class="tag">🏛️ ${media.provenance}</span>
              <span class="desc">${media.tag}</span>
            </div>
          </div>

          <div class="timeline-info-pane">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
                <span style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 700; color: var(--primary); background: var(--primary-subtle); padding: 0.35rem 0.85rem; border-radius: 8px; border: 1px solid var(--primary-border);">
                  ${item.displayDate}
                </span>
                <span style="font-size: 2.2rem;">${item.icon}</span>
              </div>

              <h3 style="font-family: var(--font-headline); font-size: 2rem; font-weight: 800; margin-bottom: 0.75rem; letter-spacing: -0.02em; color: var(--text-primary);">
                ${item.title}
              </h3>

              <p style="font-size: 1.12rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem;">
                ${item.fullStory}
              </p>

              <div style="background: #fff7ed; border-radius: var(--radius-subcard); padding: 1rem 1.4rem; border: 1px solid #fed7aa; border-left: 3px solid var(--accent-cta); font-size: 0.98rem; color: #9a3412; margin-bottom: 1.5rem;">
                💡 <strong>थोडक्यात:</strong> ${item.shortDesc}
              </div>
            </div>

            <div style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.5rem; border-top: 1px solid var(--border-card); padding-top: 1rem;">
              <span>🏛️ अधिकृत संदर्भ:</span>
              <span>${item.source}</span>
            </div>
          </div>
        </div>
      `;
    };

    slider.addEventListener('input', (e) => {
      const idx = parseInt(e.target.value, 10);
      updateTimelineView(idx);
    });

    // Initial render
    updateTimelineView(6); // default to ENIAC 1946
    slider.value = 6;
  }

  renderGenerationsTable() {
    const tbody = document.getElementById('generationsTableBody');
    if (!tbody) return;

    const genImages = [
      'assets/images/eniac_1946.jpg',             // Gen 1 Vacuum Tubes
      'assets/images/transistor_1947.jpg',         // Gen 2 Transistors
      'assets/images/integrated_circuits_1964.jpg',// Gen 3 Integrated Circuits
      'assets/images/pc_revolution.jpg',           // Gen 4 Microprocessors
      'assets/images/cloud_ai_datacenter.jpg'      // Gen 5 AI & Cloud
    ];

    tbody.innerHTML = generationsData.map((gen, idx) => `
      <tr>
        <td class="gen-tag-cell">
          <div class="gen-tag-cell-flex">
            <img src="${genImages[idx] || 'assets/images/hero_museum.jpg'}" alt="${gen.generationName}" class="gen-matrix-thumb" loading="lazy">
            <div>
              <div style="font-size: 1.15rem; margin-bottom: 0.15rem;">${gen.techIcon}</div>
              <div style="font-weight: 800; color: var(--text-primary);">${gen.generationName}</div>
              <div style="font-size: 0.78rem; color: var(--text-muted); font-family: var(--font-mono);">${gen.period}</div>
            </div>
          </div>
        </td>
        <td style="color: var(--primary); font-weight: 700;">
          ${gen.mainTechnology}
        </td>
        <td style="color: var(--text-secondary);">${gen.size}</td>
        <td style="font-family: var(--font-mono); color: var(--accent-emerald); font-weight: 700;">${gen.speed}</td>
        <td style="color: var(--text-secondary);">${gen.power}</td>
        <td style="color: var(--text-secondary);">${gen.programming}</td>
        <td style="color: var(--text-primary); font-size: 0.88rem; font-weight: 500;">${gen.examples}</td>
        <td>
          <button class="btn-watch-gen-video" onclick="app.playGenerationVideo(${idx + 1})" title="${gen.generationName} चा सिनेमॅटिक व्हिडिओ पहा">
            ▶️ व्हिडिओ पहा
          </button>
        </td>
      </tr>
    `).join('');
  }

  setupHardwareAnatomy() {
    const partsData = {
      cpu: {
        title: "CPU (Central Processing Unit) — संगणकाचा मेंदू",
        analogy: "स्वयंपाकघरातील मुख्य शेफ (Chef) किंवा घरातील कुटुंबप्रमुख!",
        role: "संगणकातील सर्व आज्ञा समजून घेणे, गणिते सोडवणे आणि संपूर्ण सिस्टीमला नियंत्रित करणे.",
        details: "CPU मध्ये प्रामुख्याने दोन कप्पे असतात: १) ALU (Arithmetic Logic Unit) जो बेरीज-वजाबाकी आणि तुलना करतो, आणि २) Control Unit (CU) जो इतर घटकांना कामे वाटून देतो.",
        speed: "आजचे प्रोसेसर सेकंदाला ३ ते ५ अब्ज (Gigahertz) ऑपरेशन्स करू शकतात!",
        img: "assets/images/pc_revolution.jpg",
        imgCaption: "Intel 4004 ते आधुनिक Multi-Core CPU सिलिकॉन डाय"
      },
      ram: {
        title: "RAM (Random Access Memory) — कामाचे टेबल",
        analogy: "स्वयंपाक करताना वापरला जाणारा ओटा (Cooking Counter)!",
        role: "सध्या चालू असलेल्या ॲप्स आणि कामांची माहिती सेकंदाच्या काही अंशात हजर ठेवणे.",
        details: "RAM ही अतिशय वेगवान पण तात्पुरती (Volatile) असते. जर वीज अचानक गेली आणि तुम्ही सेव्ह केले नसेल, तर RAM मधली माहिती नष्ट होते. जितकी RAM मोठी, तितकी जास्त ॲप्स एकाच वेळी सुरळीत चालतात.",
        speed: "SSD पेक्षा अनेक पटींनी वेगवान डेटा देवाणघेवाण!",
        img: "assets/images/pc_revolution.jpg",
        imgCaption: "अतिवेगवान RAM मॉड्यूल्स व मेमरी बस आर्किटेक्चर"
      },
      storage: {
        title: "Storage (SSD / Hard Disk) — कायमचे कपाट",
        analogy: "घरातील स्वयंपाकघरातील कपाट किंवा धान्याचे कोठार (Cupboard)!",
        role: "फोटो, चित्रपट, गेम्स आणि ऑपरेटिंग सिस्टीम कायमस्वरूपी साठवणे.",
        details: "हे नॉन-व्होलाटाईल (Non-volatile) असते — म्हणजे संगणक बंद केला किंवा वीज गेली तरी यातील फाइल्स वर्षानुवर्षे सुरक्षित राहतात. आजच्या काळात जुन्या फिरणाऱ्या हार्ड डिस्कऐवजी चिप्सवर चालणारे सुपरफास्ट SSD वापरले जातात.",
        speed: "काहीशे GB पासून अनेक Terabytes पर्यंत साठवणूक!",
        img: "assets/images/pc_revolution.jpg",
        imgCaption: "पंच कार्ड्सपासून ते आधुनिक NVMe SSD सॉलिड स्टेट स्टोरेज"
      },
      motherboard: {
        title: "मदरबोर्ड (Motherboard) — सर्वांना जोडणारा महामार्ग",
        analogy: "संपूर्ण शहराला जोडणारे रस्त्यांचे आणि विजेचे मुख्य जाळे!",
        role: "CPU, RAM, स्टोरेज, ग्राफिक्स कार्ड आणि कीबोर्ड यांना एकमेकांशी जोडणे.",
        details: "हा संगणकातील सर्वात मोठा हिरवा किंवा काळा सर्किट बोर्ड असतो. यावर असलेल्या तांब्याच्या बारीक रेषांना 'Buses' म्हणतात, ज्यांच्यावरून डेटा प्रकाशाच्या वेगाने एका भागाकडून दुसऱ्या भागाकडे धावतो.",
        speed: "सिस्टीमचा पाठीचा कणा!",
        img: "assets/images/pc_revolution.jpg",
        imgCaption: "मुख्य सिस्टीम सर्किट बोर्ड व कॉपर डेटा हायवे"
      },
      gpu: {
        title: "GPU (Graphics Processing Unit) — दृश्यांचा जादूगार",
        analogy: "रंग आणि चित्रे काढणारा निष्णात चित्रकार आणि जलद गणितज्ञ!",
        role: "स्क्रीनवरील उच्च दर्जाचे ग्राफिक्स, 3D गेम्स आणि आधुनिक AI मॉडेल्स चालवणे.",
        details: "CPU एका वेळी एक-दोन मोठी कामे करतो, तर GPU एकाच वेळी हजारो लहान-लहान गणिते समांतर (Parallel Processing) सोडवतो. यामुळेच व्हिडिओ गेम्स आणि कृत्रिम बुद्धिमत्ता (AI) साठी GPU सर्वोत्तम ठरतो.",
        speed: "एका सेकंदात कोट्यवधी पिक्सेल्स रंगवण्याची ताकद!",
        img: "assets/images/cloud_ai_datacenter.jpg",
        imgCaption: "Tensor Core AI ॲक्सिलरेटर व GPU सुपरक्लस्टर"
      }
    };

    const partBtns = document.querySelectorAll('.part-btn');
    const displayBox = document.getElementById('hardwarePartDisplay');

    const showPart = (partKey) => {
      const data = partsData[partKey] || partsData.cpu;
      if (!displayBox) return;

      displayBox.innerHTML = `
        <div class="hardware-detail-split">
          <div class="hardware-media-frame">
            <img src="${data.img}" alt="${data.title}">
            <div class="hardware-media-badge">
              🏛️ ${data.imgCaption}
            </div>
          </div>

          <div>
            <div style="display: inline-block; background: #fff7ed; color: #c2410c; border: 1px solid #fed7aa; padding: 0.4rem 1rem; border-radius: 8px; font-size: 0.85rem; font-weight: 700; margin-bottom: 1rem;">
              🌟 साधी घरगुती उपमा: ${data.analogy}
            </div>
            <h3 style="font-family: var(--font-headline); font-size: 1.6rem; font-weight: 800; margin-bottom: 0.75rem; color: var(--text-primary);">
              ${data.title}
            </h3>
            <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">
              ${data.role}
            </p>
            <div style="background: #f8fafc; border-radius: var(--radius-subcard); padding: 1.15rem; border: 1px solid var(--border-card); border-left: 3px solid var(--primary); margin-bottom: 1rem; color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">
              ${data.details}
            </div>
            <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-emerald); font-weight: 700; display: flex; align-items: center; gap: 0.5rem;">
              <span>⚡ गती व ताकद:</span>
              <span>${data.speed}</span>
            </div>
          </div>
        </div>
      `;
    };

    partBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        partBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const part = btn.getAttribute('data-part');
        showPart(part);
      });
    });

    // Default view
    showPart('cpu');
  }

  renderActivities() {
    const grid = document.getElementById('activitiesGrid');
    if (!grid) return;

    grid.innerHTML = activitiesData.map((act, idx) => `
      <div class="activity-card">
        <div>
          <div class="activity-tag">खेळ क्रमांक ०${idx + 1} • ${act.suitableFor}</div>
          <h3 style="font-size: 1.35rem; font-weight: 700; margin-bottom: 0.35rem; color: var(--text-primary);">
            ${act.name}
          </h3>
          <div style="font-size: 0.9rem; color: var(--primary); font-weight: 600; margin-bottom: 1rem;">
            ${act.tagline}
          </div>
          <div style="font-size: 0.85rem; color: var(--accent-emerald); margin-bottom: 0.75rem; font-weight: 700;">
            🎯 उद्दिष्ट: ${act.objective}
          </div>
          <ol class="activity-steps">
            ${act.instructions.map(step => `<li>${step}</li>`).join('')}
          </ol>
        </div>
        <div style="background: #fffbeb; border: 1px solid #fde68a; border-left: 3px solid #f59e0b; padding: 0.65rem 0.9rem; border-radius: 6px; font-size: 0.84rem; color: #92400e; margin-top: 1rem; line-height: 1.5;">
          💡 <strong>शिक्षकांसाठी टीप:</strong> ${act.teachingTip}
        </div>
      </div>
    `).join('');
  }

  renderSourcesList() {
    const modalContent = document.getElementById('sourcesListContainer');
    if (!modalContent) return;

    modalContent.innerHTML = sourcesData.map(src => `
      <div class="source-item-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.35rem;">
          <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">${src.institution}</h4>
          <span style="font-size: 0.75rem; background: #eef2ff; color: #4338ca; border: 1px solid #c7d2fe; padding: 0.2rem 0.5rem; border-radius: 4px; font-weight: 600;">
            सत्यापित अभिलेखागार
          </span>
        </div>
        <div style="font-size: 0.85rem; color: var(--primary); font-weight: 600; margin-bottom: 0.5rem;">
          ${src.role}
        </div>
        <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
          ${src.citationNote}
        </div>
        <div style="font-size: 0.78rem; color: var(--text-muted);">
          समाविष्ट विषय: ${src.topics.join(', ')}
        </div>
      </div>
    `).join('');
  }

  openSourceModal(preferredTitle = '') {
    const modal = document.getElementById('sourcesModal');
    if (modal) {
      modal.classList.add('active');
    }
  }

  closeSourceModal() {
    const modal = document.getElementById('sourcesModal');
    if (modal) {
      modal.classList.remove('active');
    }
  }

  bindGlobalEvents() {
    // Grade Filter Buttons
    document.querySelectorAll('.grade-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const grade = btn.getAttribute('data-grade');
        this.setGrade(grade);
      });
    });

    // Presentation Deck Launch Button
    const btnStartDeck = document.getElementById('btnStartPresentation');
    if (btnStartDeck) {
      btnStartDeck.addEventListener('click', () => {
        this.deck.openDeck(0, 0);
      });
    }

    // Hero Learn Button
    const btnHeroLearn = document.getElementById('btnHeroLearn');
    if (btnHeroLearn) {
      btnHeroLearn.addEventListener('click', () => {
        const chSection = document.getElementById('chapters-section');
        if (chSection) chSection.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Chapter Filter Tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.activeChapterFilter = tab.getAttribute('data-filter');
        this.renderChapters();
      });
    });

    // Quiz Tabs
    document.querySelectorAll('.quiz-tab-btn').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.quiz-tab-btn').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const targetTab = tab.getAttribute('data-tab');
        this.quiz.setTab(targetTab);
      });
    });

    // Quiz Level Buttons
    document.querySelectorAll('.quiz-level-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.quiz-level-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const level = btn.getAttribute('data-level');
        this.quiz.setLevel(level);
      });
    });

    // Source Modal Close
    const btnCloseSource = document.getElementById('btnCloseSourceModal');
    if (btnCloseSource) {
      btnCloseSource.addEventListener('click', () => this.closeSourceModal());
    }

    const sourceModal = document.getElementById('sourcesModal');
    if (sourceModal) {
      sourceModal.addEventListener('click', (e) => {
        if (e.target === sourceModal) this.closeSourceModal();
      });
    }

    const btnNavSources = document.getElementById('btnNavSources');
    if (btnNavSources) {
      btnNavSources.addEventListener('click', (e) => {
        e.preventDefault();
        this.openSourceModal();
      });
    }

    // Print Chapter Summary Button
    const btnPrint = document.getElementById('btnPrintSummary');
    if (btnPrint) {
      btnPrint.addEventListener('click', () => {
        window.print();
      });
    }
  }

  initVideoPlayer() {
    this.currentVideoGen = 1;
    this.currentAudioLang = 'mr';
    this.currentCcLang = 'mr';

    this.videoScenesData = {
      1: [
        { title: "शोध व पार्श्वभूमी", mr: "संगणक उत्क्रांतीच्या पहिल्या पिढीत आपले स्वागत आहे. कालावधी १९४० ते १९५६.", en: "Welcome to the First Generation of Computers, spanning from 1940 to 1956." },
        { title: "हार्डवेअर रचना", mr: "या पिढीतील संगणकांमध्ये मुख्य घटक व्हॅक्यूम ट्यूब्स आणि मॅग्नेटिक ड्रम होते.", en: "The defining core technology was the vacuum tube and magnetic memory drum." },
        { title: "ऐतिहासिक यंत्रे", mr: "१९४६ मधील एनियाक मध्ये १८ हजार व्हॅक्यूम ट्यूब्स आणि ३० टन वजन होते.", en: "ENIAC in 1946 contained 18,000 vacuum tubes and weighed over 30 tons." },
        { title: "वेग व प्रोग्रॅमिंग", mr: "हे संगणक केवळ बायनरी मशीन लँग्वेज समजायचे आणि सेकंदाला ५ हजार गणिते करत.", en: "Programmed strictly in binary machine language at 5,000 ops per second." },
        { title: "वारसा व प्रभाव", mr: "उष्णता व मर्यादा असल्या तरी या पिढीने आधुनिक इलेक्ट्रॉनिक संगणनाचा पाया घातला.", en: "Despite challenges, first-generation systems founded modern computing." }
      ],
      2: [
        { title: "शोध व पार्श्वभूमी", mr: "दुसऱ्या पिढीचा कालावधी १९५६ ते १९६३. ट्रान्झिस्टरने व्हॅक्यूम ट्यूब्सची जागा घेतली.", en: "The Second Generation (1956-1963) was ignited by the transistor invention." },
        { title: "हार्डवेअर रचना", mr: "ट्रान्झिस्टरमुळे संगणक लहान, वेगवान झाले आणि मॅग्नेटिक कोर मेमरी आली.", en: "Transistors made computers compact, faster, with magnetic core memory." },
        { title: "ऐतिहासिक यंत्रे", mr: "पहिल्यांदा फोरट्रान आणि कोबोल सारख्या उच्च-स्तरीय भाषांचा उगम झाला.", en: "High-level languages like FORTRAN and COBOL revolutionized programming." },
        { title: "वेग व प्रोग्रॅमिंग", mr: "आयबीएम १४०१ हा या पिढीतील अतिशय लोकप्रिय व्यावसायिक संगणक ठरला.", en: "The IBM 1401 modernized business data processing worldwide." },
        { title: "वारसा व प्रभाव", mr: "दुसऱ्या पिढीने सॉफ्टवेअर उद्योगाची आणि डेटा प्रोसेसिंगची खरी सुरुवात केली.", en: "Second-gen systems laid the bedrock for enterprise computing and software." }
      ],
      3: [
        { title: "शोध व पार्श्वभूमी", mr: "तिसऱ्या पिढीचा कालावधी १९६४ ते १९७१. मुख्य आधार म्हणजे आयसी चिप.", en: "The Third Generation (1964-1971) was defined by the Integrated Circuit." },
        { title: "हार्डवेअर रचना", mr: "याच काळात कीबोर्ड, मॉनिटर आणि पहिल्यांदा ऑपरेटिंग सिस्टीम आली.", en: "Monitors, keyboards, and Operating Systems replaced punch cards." },
        { title: "ऐतिहासिक यंत्रे", mr: "आयबीएम सिस्टीम ३६० आणि अपोलो ११ यानात आयसी चिप्सचा वापर झाला.", en: "IBM System/360 and Apollo 11 computers relied on integrated circuits." },
        { title: "वेग व प्रोग्रॅमिंग", mr: "संगणकांचा वेग नॅनोसेकंदांवर पोहोचला आणि विश्वासार्हता प्रचंड वाढली.", en: "Clock speeds accelerated into nanoseconds with high hardware reliability." },
        { title: "वारसा व प्रभाव", mr: "आयसी चिपमुळे पुढील पिढीतील मायक्रोप्रोसेसर क्रांतीचा मार्ग सुकर झाला.", en: "The silicon microchip paved the road for personal microprocessors." }
      ],
      4: [
        { title: "शोध व पार्श्वभूमी", mr: "चौथी पिढी १९७१ पासून आजपर्यंत. ओळख म्हणजे मायक्रोप्रोसेसर चिप.", en: "Fourth Generation (1971-Present) brought computing home via microprocessors." },
        { title: "हार्डवेअर रचना", mr: "ॲपल, आयबीएम पीसी, लॅपटॉप आणि पुढे स्मार्टफोन्स प्रत्येकाच्या हाती आले.", en: "Apple, IBM PCs, laptops, and smartphones reached billions of users." },
        { title: "ऐतिहासिक यंत्रे", mr: "याच पिढीत इंटरनेट, वेब आणि स्मार्टफोन क्रांतीने संपूर्ण जग जोडले.", en: "The internet, World Wide Web, and mobile networks connected humanity." },
        { title: "वेग व प्रोग्रॅमिंग", mr: "गिगाबाईट्स मेमरी, एसएसडी स्टोरेज आणि पायथॉन सारख्या आधुनिक भाषा आल्या.", en: "Gigabyte RAM, NVMe SSDs, and languages like Python and Java flourish." },
        { title: "वारसा व प्रभाव", mr: "चौथ्या पिढीने डिजिटल युगाचा पाया रचून पुढील AI युगासाठी मार्ग तयार केला.", en: "Fourth gen transformed society and generated the data fuel for modern AI." }
      ],
      5: [
        { title: "शोध व पार्श्वभूमी", mr: "पाचवी पिढी वर्तमान आणि भविष्याची आहे. ही पिढी कृत्रिम बुद्धिमत्ता आधारित आहे.", en: "Fifth Generation is driven by Artificial Intelligence and Neural Networks." },
        { title: "हार्डवेअर रचना", mr: "हजारो जीपीयू कोर आणि क्लाउड डेटा सेंटर द्वारे समांतर प्रक्रिया चालते.", en: "Massive GPU clusters and cloud datacenters enable parallel intelligence." },
        { title: "ऐतिहासिक यंत्रे", mr: "भारतातील परम महासंगणक वैज्ञानिक संशोधनात अग्रगण्य योगदान देत आहेत.", en: "India's PARAM supercomputers power mission-critical scientific discovery." },
        { title: "वेग व प्रोग्रॅमिंग", mr: "भविष्यातील क्वांटम कॉम्प्युटिंग क्यूबिट्सद्वारे अशक्य गणिते सेकंदात सोडवेल.", en: "Quantum computing harnesses qubits to solve impossible complex equations." },
        { title: "वारसा व प्रभाव", mr: "व्हॅक्यूम ट्यूबपासून सुरू झालेला हा प्रवास आज मानवाच्या बुद्धिमत्तेशी बरोबरी करत आहे.", en: "From vacuum tubes to neural AI, computing shapes the future of humanity." }
      ]
    };

    this.videoMetadata = [
      {
        gen: 1,
        titleEn: "First Generation: Vacuum Tubes & ENIAC (1940 – 1956)",
        titleMr: "१ली पिढी: व्हॅक्यूम ट्यूब्स व प्रचंड संगणक (1940 – 1956)",
        era: "१९४० ते १९५६ चे दशक",
        techName: "व्हॅक्यूम ट्यूब्स (Vacuum Tubes)",
        summary: "इतिहासामध्ये पहिल्यांदाच इलेक्ट्रॉनिक पद्धतीने हजारो पटींनी वेगवान गणना करणे शक्य झाले. १८,०००+ काचेच्या व्हॅक्यूम ट्यूब्स आणि ३० टन वजनाचा ENIAC हा आधुनिक संगणकाचा आद्य जनक होता!",
        speed: "५,००० बेरीज/सेकंद",
        memory: "मॅग्नेटिक ड्रम, पंच कार्ड",
        lang: "Machine Code (0 आणि 1)",
        examples: "ENIAC, UNIVAC I, EDVAC",
        videoSrc: "assets/videos/gen1_video.mp4",
        poster: "assets/images/eniac_1946.jpg"
      },
      {
        gen: 2,
        titleEn: "Second Generation: Transistors Revolution (1956 – 1963)",
        titleMr: "२री पिढी: ट्रान्झिस्टर क्रांती व IBM 1401 (1956 – 1963)",
        era: "१९५६ ते १९६३ चे दशक",
        techName: "ट्रान्झिस्टर (Transistors)",
        summary: "काचेच्या व्हॅक्यूम ट्यूब्सऐवजी छोट्या सेमीकंडक्टर ट्रान्झिस्टरचा वापर. संगणकाचा आकार एका खोलीवरून थेट मोठ्या टेबलाएवढा झाला आणि वीज वापर ९०% कमी झाला!",
        speed: "मायक्रोसेकंद (लाखो ops/sec)",
        memory: "मॅग्नेटिक कोअर मेमरी",
        lang: "Assembly, FORTRAN, COBOL",
        examples: "IBM 1401, CDC 1604, IBM 7090",
        videoSrc: "assets/videos/gen2_video.mp4",
        poster: "assets/images/transistor_1947.jpg"
      },
      {
        gen: 3,
        titleEn: "Third Generation: Integrated Circuits & Silicon Chips (1964 – 1971)",
        titleMr: "३री पिढी: इंटिग्रेटेड सर्किट्स व सिलिकॉन चिप्स (1964 – 1971)",
        era: "१९६४ ते १९७१ चे दशक",
        techName: "इंटिग्रेटेड सर्किट (IC Chips)",
        summary: "जॅक किल्बी आणि रॉबर्ट नॉइस यांनी एकाच सिलिकॉन चिपवर हजारो ट्रान्झिस्टर एकत्र जोडले. याच पिढीत पहिल्यांदा कीबोर्ड, मॉनिटर आणि मल्टिप्रोग्रामिंग ऑपरेटिंग सिस्टीम अस्तित्वात आली!",
        speed: "नॅनोसेकंद (कोट्यवधी ops/sec)",
        memory: "प्रगत सेमीकंडक्टर रॅम",
        lang: "C, BASIC, Pascal, High-Level OS",
        examples: "IBM System/360, PDP-8",
        videoSrc: "assets/videos/gen3_video.mp4",
        poster: "assets/images/integrated_circuits_1964.jpg"
      },
      {
        gen: 4,
        titleEn: "Fourth Generation: Microprocessors & Personal Computers (1971 – Present)",
        titleMr: "४थी पिढी: मायक्रोप्रोसेसर व पर्सनल कॉम्प्युटर (1971 – आज)",
        era: "१९७१ ते आजपर्यंत",
        techName: "मायक्रोप्रोसेसर (VLSI & ULSI)",
        summary: "संपूर्ण CPU एका लहान सिलिकॉन चिपवर (Intel 4004) सामावला. यामुळे प्रत्येकाच्या घरात, खिशात लॅपटॉप, मोबाईल आणि इंटरनेट क्रांती आली!",
        speed: "गीगाहर्ट्झ (अब्जावधी ops/sec)",
        memory: "Gigabytes/Terabytes SSD/RAM",
        lang: "Python, Java, JavaScript, C++",
        examples: "Apple Macintosh, IBM PC, Modern Smartphones",
        videoSrc: "assets/videos/gen4_video.mp4",
        poster: "assets/images/pc_revolution.jpg"
      },
      {
        gen: 5,
        titleEn: "Fifth Generation: AI & Quantum Computing (Present & Beyond)",
        titleMr: "५वी पिढी: कृत्रिम बुद्धिमत्ता (AI) व सुपरकॉम्प्युटिंग (Present & Beyond)",
        era: "वर्तमान व भविष्य",
        techName: "AI, GPU Clusters & Quantum Qubits",
        summary: "केवळ आज्ञा पाळण्याऐवजी स्वतः शिकणारे (Machine Learning), नैसर्गिक भाषा समजणारे (LLM) आणि क्लाऊड सुपरक्लस्टर्सद्वारे कार्यरत बुद्धिमत्ता. भविष्यातील क्वांटम संगणन!",
        speed: "Exaflops (क्विंटिलियन ops/sec)",
        memory: "HBM3e / Distributed Cloud AI",
        lang: "Natural Language, PyTorch, Qiskit",
        examples: "ChatGPT, AlphaFold, PARAM Ananta, Supercomputers",
        videoSrc: "assets/videos/gen5_video.mp4",
        poster: "assets/images/cloud_ai_datacenter.jpg"
      }
    ];

    const player = document.getElementById('generationVideoPlayer');
    const audioTrack = document.getElementById('generationAudioTrack');

    if (player) {
      player.addEventListener('play', () => {
        const icon = document.getElementById('playBtnIcon');
        const text = document.getElementById('playBtnText');
        if (icon) icon.textContent = '⏸️';
        if (text) text.textContent = 'व्हिडिओ थांबवा';
        
        if (audioTrack && this.currentAudioLang === 'en') {
          audioTrack.currentTime = player.currentTime;
          audioTrack.play().catch(() => {});
        }
      });

      player.addEventListener('pause', () => {
        const icon = document.getElementById('playBtnIcon');
        const text = document.getElementById('playBtnText');
        if (icon) icon.textContent = '▶️';
        if (text) text.textContent = 'व्हिडिओ प्ले करा';

        if (audioTrack) {
          audioTrack.pause();
        }
      });

      // Synchronize Live Subtitles (CC) & Chapter Markers
      player.addEventListener('timeupdate', () => {
        this.updateLiveCaptions();
      });
    }
  }

  setAudioLanguage(lang) {
    this.currentAudioLang = lang;
    const btnMr = document.getElementById('btnAudioMr');
    const btnEn = document.getElementById('btnAudioEn');
    const player = document.getElementById('generationVideoPlayer');
    const audioTrack = document.getElementById('generationAudioTrack');
    const badge = document.getElementById('videoQualityBadge');

    if (btnMr) btnMr.classList.toggle('active', lang === 'mr');
    if (btnEn) btnEn.classList.toggle('active', lang === 'en');

    if (lang === 'mr') {
      // Native Marathi video audio track
      if (audioTrack) audioTrack.pause();
      if (player) {
        player.muted = false;
        player.volume = 1.0;
      }
      if (badge) badge.textContent = 'HD 720p • मराठी ऑडिओ';
    } else {
      // English Voiceover Audio Stream
      if (player) {
        player.muted = true; // mute native video audio so English stream plays cleanly
      }
      if (audioTrack) {
        audioTrack.src = `assets/audio/gen${this.currentVideoGen}_en.mp3`;
        audioTrack.load();
        if (player && !player.paused) {
          audioTrack.currentTime = player.currentTime;
          audioTrack.play().catch(() => {});
        }
      }
      if (badge) badge.textContent = 'HD 720p • English Voiceover';
    }
  }

  setSubtitleLanguage(lang) {
    this.currentCcLang = lang;
    const btnMr = document.getElementById('btnCcMr');
    const btnEn = document.getElementById('btnCcEn');
    const btnOff = document.getElementById('btnCcOff');
    const ccBanner = document.getElementById('videoLiveCcBanner');

    if (btnMr) btnMr.classList.toggle('active', lang === 'mr');
    if (btnEn) btnEn.classList.toggle('active', lang === 'en');
    if (btnOff) btnOff.classList.toggle('active', lang === 'off');

    if (lang === 'off') {
      if (ccBanner) ccBanner.classList.add('hidden');
    } else {
      if (ccBanner) ccBanner.classList.remove('hidden');
      this.updateLiveCaptions();
    }
  }

  seekToScene(sceneIdx) {
    const player = document.getElementById('generationVideoPlayer');
    const audioTrack = document.getElementById('generationAudioTrack');
    if (!player) return;

    const totalDur = player.duration || 45;
    const targetTime = (totalDur / 5) * sceneIdx;
    player.currentTime = targetTime;

    if (audioTrack && this.currentAudioLang === 'en') {
      audioTrack.currentTime = targetTime;
    }
    this.updateLiveCaptions();
  }

  updateLiveCaptions() {
    if (this.currentCcLang === 'off') return;
    const player = document.getElementById('generationVideoPlayer');
    const ccTag = document.getElementById('videoHudSceneTag');
    const ccText = document.getElementById('videoLiveCcText');
    const ccSubText = document.getElementById('videoLiveCcSubText');
    if (!player) return;

    const totalDur = player.duration || 45;
    const current = player.currentTime;

    // Granular 30-clip support for Generation 1 (1940-1956)
    if (this.currentVideoGen === 1 && g1ClipsData && g1ClipsData.length > 0) {
      const clipIdx = Math.min(Math.floor((current / totalDur) * g1ClipsData.length), g1ClipsData.length - 1);
      const clip = g1ClipsData[clipIdx];
      if (ccTag) {
        ccTag.textContent = `📌 ${clip.prompt_id} (${clip.timeline_in_reel}): ${clip.title_marathi} • ${clip.title_english}`;
      }
      if (ccText) {
        ccText.textContent = this.currentCcLang === 'mr' ? clip.audio.narration_mr : clip.teaching_point;
      }
      if (ccSubText) {
        const overlay = clip.overlay_text_postprod_mr ? clip.overlay_text_postprod_mr.join(' • ') : '';
        ccSubText.textContent = this.currentCcLang === 'mr' 
          ? (overlay ? `💡 ${overlay}` : clip.title_english)
          : clip.audio.narration_mr;
      }
      return;
    }

    const scenes = this.videoScenesData[this.currentVideoGen] || this.videoScenesData[1];
    const sceneIdx = Math.min(Math.floor((current / totalDur) * 5), 4);
    const scene = scenes[sceneIdx] || scenes[0];

    if (ccTag) {
      ccTag.textContent = `📌 दृश्य ०${sceneIdx + 1}: ${scene.title}`;
    }

    if (ccText) {
      ccText.textContent = this.currentCcLang === 'mr' ? scene.mr : scene.en;
    }

    if (ccSubText) {
      ccSubText.textContent = this.currentCcLang === 'mr' ? scene.en : scene.mr;
    }
  }

  playGenerationVideo(genNum, autoPlay = true) {
    this.currentVideoGen = genNum;
    const meta = this.videoMetadata.find(m => m.gen === genNum) || this.videoMetadata[0];
    
    // Update pills active state
    document.querySelectorAll('.video-pill-btn').forEach(btn => {
      const bGen = parseInt(btn.getAttribute('data-gen'), 10);
      if (bGen === genNum) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update Telemetry & Text
    const titleEl = document.getElementById('videoCinemaTitle');
    const subEl = document.getElementById('videoCinemaSub');
    const eraEl = document.getElementById('telemetryEra');
    const techNameEl = document.getElementById('telemetryTechName');
    const summaryEl = document.getElementById('telemetrySummary');
    const speedEl = document.getElementById('telemetrySpeed');
    const memEl = document.getElementById('telemetryMemory');
    const langEl = document.getElementById('telemetryLang');
    const exEl = document.getElementById('telemetryExamples');

    if (titleEl) titleEl.textContent = meta.titleMr;
    if (subEl) subEl.textContent = meta.titleEn;
    if (eraEl) eraEl.textContent = meta.era;
    if (techNameEl) techNameEl.textContent = meta.techName;
    if (summaryEl) summaryEl.textContent = meta.summary;
    if (speedEl) speedEl.textContent = meta.speed;
    if (memEl) memEl.textContent = meta.memory;
    if (langEl) langEl.textContent = meta.lang;
    if (exEl) exEl.textContent = meta.examples;

    // Update Video & Audio Sources
    const player = document.getElementById('generationVideoPlayer');
    const source = document.getElementById('genVideoSource');
    const audioTrack = document.getElementById('generationAudioTrack');
    const audioSource = document.getElementById('genAudioSource');

    if (player && source) {
      player.poster = meta.poster;
      source.src = meta.videoSrc;
      player.load();

      if (audioTrack && audioSource) {
        audioSource.src = `assets/audio/gen${genNum}_${this.currentAudioLang}.mp3`;
        audioTrack.load();
      }

      if (autoPlay) {
        player.play().then(() => {
          if (this.currentAudioLang === 'en' && audioTrack) {
            audioTrack.currentTime = 0;
            audioTrack.play().catch(() => {});
          }
        }).catch(e => {
          console.log('Video autoplay prevented or handled:', e);
        });
      }
    }

    this.updateLiveCaptions();

    // Smooth scroll to video section
    const videoSection = document.getElementById('video-hub-section');
    if (videoSection && autoPlay) {
      videoSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  nextGenerationVideo() {
    let nextGen = (this.currentVideoGen % 5) + 1;
    this.playGenerationVideo(nextGen, true);
  }

  toggleVideoPlay() {
    const player = document.getElementById('generationVideoPlayer');
    const audioTrack = document.getElementById('generationAudioTrack');
    if (!player) return;

    if (player.paused) {
      player.play();
      if (audioTrack && this.currentAudioLang === 'en') {
        audioTrack.currentTime = player.currentTime;
        audioTrack.play().catch(() => {});
      }
    } else {
      player.pause();
      if (audioTrack) {
        audioTrack.pause();
      }
    }
  }
}

// Start app on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  new App();
});
