/**
 * Presentation Engine
 * Handles modern Canva/SaaS-style 16:9 Editorial Slideshow,
 * keyboard controls, interactive polls, reveals, speaker notes, and fullscreen.
 */

import { chaptersData } from './data/chaptersData.js';
import { diagrams } from './assets/diagrams.js';

export class PresentationDeck {
  constructor(options = {}) {
    this.modalEl = document.getElementById('presentationModal');
    this.canvasEl = document.getElementById('slideCanvas');
    this.counterEl = document.getElementById('slideCounter');
    this.progressBarEl = document.getElementById('slideProgressBar');
    this.notesDrawerEl = document.getElementById('teacherNotesDrawer');
    this.notesContentEl = document.getElementById('teacherNotesContent');
    
    this.currentChapterIndex = 0;
    this.currentSlideIndex = 0;
    this.allSlides = [];
    this.currentGrade = 'level2'; // default level 2
    this.pollVotes = {}; // store user votes

    this.flattenSlides();
    this.bindEvents();
  }

  flattenSlides() {
    this.allSlides = [];
    chaptersData.forEach((chapter, cIdx) => {
      chapter.slides.forEach((slide, sIdx) => {
        this.allSlides.push({
          ...slide,
          chapterNumber: chapter.chapterNumber,
          chapterTitle: chapter.title,
          chapterPurpose: chapter.purpose,
          chapterTeacherNotes: chapter.teacherNotes,
          chapterIndex: cIdx,
          slideIndexInChapter: sIdx,
          globalIndex: this.allSlides.length
        });
      });
    });
  }

  setGrade(gradeLevel) {
    this.currentGrade = gradeLevel;
    if (this.isOpen()) {
      this.renderCurrentSlide();
    }
  }

  openDeck(chapterIdx = 0, slideIdx = 0) {
    const targetSlide = this.allSlides.find(
      s => s.chapterIndex === chapterIdx && s.slideIndexInChapter === slideIdx
    );
    this.currentSlideIndex = targetSlide ? targetSlide.globalIndex : 0;
    
    this.modalEl.classList.add('active');
    document.body.style.overflow = 'hidden';
    this.renderCurrentSlide();
  }

  closeDeck() {
    this.modalEl.classList.remove('active');
    document.body.style.overflow = '';
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  }

  isOpen() {
    return this.modalEl && this.modalEl.classList.contains('active');
  }

  nextSlide() {
    if (this.currentSlideIndex < this.allSlides.length - 1) {
      this.currentSlideIndex++;
      this.renderCurrentSlide();
    }
  }

  prevSlide() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
      this.renderCurrentSlide();
    }
  }

  toggleNotes() {
    if (this.notesDrawerEl) {
      this.notesDrawerEl.classList.toggle('open');
    }
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      this.modalEl.requestFullscreen().catch(err => {
        console.warn(`Fullscreen error: ${err.message}`);
      });
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }

  getSlideImage(slide) {
    const chNum = parseInt(slide.chapterNumber, 10) || (slide.chapterIndex + 1);
    const text = ((slide.title || '') + ' ' + (slide.englishTitle || '') + ' ' + (slide.chapterTitle || '')).toLowerCase();

    // 1. Indian Computing & PARAM Supercomputers (Ch 12)
    if (text.includes('tifrac') || text.includes('param') || text.includes('भारत') || text.includes('india') || chNum === 12) {
      return {
        src: 'assets/images/india_tifrac_param.jpg',
        badge: 'TIFRAC (मुंबई) • PARAM 8000 (पुणे)',
        caption: 'स्वावलंबी भारत: स्वदेशी संगणक व महासंगणक क्रांती'
      };
    }

    // 2. Third Generation: Integrated Circuits & Apollo 11 (Ch 7)
    if (text.includes('integrated circuit') || text.includes('ic chip') || text.includes('सिलिकॉन चिप') || text.includes('तिसरी पिढी') || text.includes('apollo') || chNum === 7) {
      return {
        src: 'assets/images/integrated_circuits_1964.jpg',
        badge: 'Fairchild & TI (1958-1964) • NASA Apollo 11',
        caption: 'इंटिग्रेटेड सर्किट: एकाच चिपवर शेकडो ट्रान्झिस्टर्स'
      };
    }

    // 3. First Generation: Vacuum Tubes & ENIAC (Ch 4, 5)
    if (text.includes('eniac') || text.includes('vacuum') || text.includes('पहिली पिढी') || text.includes('turing') || text.includes('ट्युरिंग') || chNum === 4 || chNum === 5) {
      return {
        src: 'assets/images/eniac_1946.jpg',
        badge: 'ENIAC (1946) • Penn Engineering',
        caption: '१८,००० व्हॅक्यूम ट्यूब्स व जगातील पहिला इलेक्ट्रॉनिक संगणक'
      };
    }

    // 4. Second Generation: Transistors & Bell Labs (Ch 6)
    if (text.includes('transistor') || text.includes('ट्रान्झिस्टर') || text.includes('दुसरी पिढी') || text.includes('ibm 1401') || chNum === 6) {
      return {
        src: 'assets/images/transistor_1947.jpg',
        badge: 'Bell Labs (1947) • नोबेल पारितोषिक',
        caption: 'पॉइंट-कॉन्टॅक्ट ट्रान्झिस्टरचा ऐतिहासिक शोध'
      };
    }

    // 5. Early Pre-electronic & Mechanical Engines (Ch 2, 3)
    if (text.includes('babbage') || text.includes('बॅबेज') || text.includes('pascaline') || text.includes('abacus') || text.includes('lovelace') || chNum === 2 || chNum === 3) {
      return {
        src: 'assets/images/babbage_engine.jpg',
        badge: 'Science Museum London',
        caption: 'चार्ल्स बॅबेज यांचे मेकॅनिकल ॲनालिटिकल इंजिन'
      };
    }

    // 6. Fourth Gen: Microprocessors, Personal Computers & Hardware Anatomy (Ch 8, 9, 10, 13)
    if (text.includes('microprocessor') || text.includes('intel') || text.includes('pc') || text.includes('apple') || text.includes('ibm') || text.includes('चौथी पिढी') || text.includes('cpu') || text.includes('ram') || text.includes('hardware') || chNum === 8 || chNum === 9 || chNum === 10 || chNum === 13) {
      return {
        src: 'assets/images/pc_revolution.jpg',
        badge: 'Intel 4004 • Apple II • IBM PC 5150',
        caption: 'मायक्रोप्रोसेसर व वैयक्तिक संगणक क्रांती'
      };
    }

    // 7. Fifth Gen: AI, Datacenter Clusters, Internet & Future (Ch 11, 14, 15, 16, 17, 18)
    if (text.includes('ai') || text.includes('cloud') || text.includes('internet') || text.includes('web') || text.includes('quantum') || text.includes('software') || text.includes('data') || chNum >= 14) {
      return {
        src: 'assets/images/cloud_ai_datacenter.jpg',
        badge: 'Hyperscale Cloud & Quantum AI Cluster',
        caption: 'क्लाउड डेटा सेंटर, न्यूरल नेटवर्क्स व क्वांटम संगणन'
      };
    }

    // Fallback Overview (Ch 1 & general)
    return {
      src: 'assets/images/hero_museum.jpg',
      badge: 'Computing History Museum Archives',
      caption: '५,००० वर्षांचा ऐतिहासिक संगणक उत्क्रांती प्रवास'
    };
  }

  renderCurrentSlide() {
    const slide = this.allSlides[this.currentSlideIndex];
    if (!slide) return;

    // Update progress & counters
    const currentNum = this.currentSlideIndex + 1;
    const totalNum = this.allSlides.length;
    this.counterEl.textContent = `${currentNum} / ${totalNum}`;
    const pct = (currentNum / totalNum) * 100;
    this.progressBarEl.style.width = `${pct}%`;

    // Render Teacher notes
    if (this.notesContentEl) {
      this.notesContentEl.innerHTML = `
        <div style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary);">
          <p style="margin-bottom: 0.5rem;"><strong style="color: var(--accent-amber);">Chapter उद्दिष्ट:</strong> ${slide.chapterPurpose || 'विद्यार्थ्यांना संकल्पना स्पष्ट करणे.'}</p>
          <p><strong style="color: var(--primary);">शिक्षकांसाठी टीप:</strong> ${slide.chapterTeacherNotes || 'विद्यार्थ्यांना प्रश्न विचारून संवादात्मक चर्चेला प्रवृत्त करा.'}</p>
        </div>
      `;
    }

    // Grade label
    const gradeLabels = {
      level1: '🟢 Std 1-4 (प्राथमिक)',
      level2: '🟡 Std 5-7 (माध्यमिक)',
      level3: '🟣 Std 8-10 (उच्च माध्यमिक)'
    };

    // Obtain High-Res Image Card Data for Right Column
    const imgData = this.getSlideImage(slide);

    // Build Slide Content based on Type
    let innerContentHtml = '';

    if (slide.type === 'poll') {
      innerContentHtml = this.renderPollContent(slide);
    } else if (slide.type === 'reveal') {
      innerContentHtml = this.renderRevealContent(slide);
    } else if (slide.type === 'diagram') {
      innerContentHtml = this.renderDiagramContent(slide);
    } else if (slide.type === 'comparison') {
      innerContentHtml = this.renderComparisonContent(slide);
    } else {
      innerContentHtml = this.renderStandardContent(slide);
    }

    // Build SaaS Takeaway Pill Footer
    const takeawayHtml = `
      <div class="slide-saas-footer-badge">
        <span class="saas-badge-icon">💡</span>
        <span class="saas-badge-text"><strong>महत्त्वाचा निष्कर्ष:</strong> ${slide.keyIdea || slide.achievement || slide.headline || 'संगणक विज्ञानातील ऐतिहासिक टप्पा व संकल्पना.'}</span>
      </div>
    `;

    // Assemble unified 16:9 SaaS Layout (EVERY slide has an image on the right)
    this.canvasEl.innerHTML = `
      <div class="slide-top-bar">
        <div class="slide-chapter-tag">
          <span class="slide-saas-badge-tag">Chapter ${slide.chapterNumber}</span>
          <span class="slide-chapter-title-text">${slide.chapterTitle}</span>
        </div>
        <div class="slide-grade-badge">
          ${gradeLabels[this.currentGrade] || 'Std 5-7'}
        </div>
      </div>

      <div class="slide-body">
        <div class="slide-editorial-split">
          <div class="slide-saas-card-pane">
            <h2 class="slide-title-main">${slide.title}</h2>
            ${slide.englishTitle ? `<div class="slide-title-english">${slide.englishTitle}</div>` : ''}
            
            <div class="slide-interactive-area">
              ${innerContentHtml}
            </div>

            ${takeawayHtml}
          </div>

          <div class="slide-editorial-media">
            <img src="${imgData.src}" alt="${slide.title}" loading="lazy">
            <div class="slide-editorial-badge">
              <span class="slide-badge-title">🏛️ ${imgData.badge}</span>
              <span class="slide-badge-caption">${imgData.caption}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="slide-bottom-bar">
        <div class="slide-source-pill" onclick="window.app.openSourceModal('${slide.source || 'Computer History Museum'}')">
          <span>🏛️</span>
          <span>संदर्भ: ${slide.source || 'Computer History Museum Archives & IEEE Computer Society'}</span>
        </div>
        <div class="slide-hints-group">
          <span>वापरा: <strong>←</strong> आधीची | <strong>→</strong> पुढची स्लाइड | <strong>T</strong> शिक्षक नोट्स</span>
        </div>
      </div>
    `;

    // Bind slide-specific interactive handlers
    this.bindSlideInteractions(slide);
  }

  renderStandardContent(slide) {
    let contentText = '';
    if (slide.levelContent && slide.levelContent[this.currentGrade]) {
      contentText = `<p class="slide-content-text">${slide.levelContent[this.currentGrade]}</p>`;
    } else if (slide.description) {
      contentText = `<p class="slide-content-text">${slide.description}</p>`;
    } else if (slide.keyIdea) {
      contentText = `<p class="slide-content-text">${slide.keyIdea}</p>`;
    } else if (slide.achievement) {
      contentText = `<p class="slide-content-text">${slide.achievement}</p>`;
    } else if (slide.explanationText) {
      contentText = `<p class="slide-content-text">${slide.explanationText}</p>`;
    } else if (slide.quoteText) {
      contentText = `
        <div class="slide-quote-box">
          <p class="slide-quote-p">"${slide.quoteText}"</p>
        </div>
      `;
    } else {
      contentText = `<p class="slide-content-text">संगणक उत्क्रांतीच्या इतिहासातील ही अत्यंत महत्त्वपूर्ण संकल्पना आहे. विद्यार्थ्यांच्या कल्पनाशक्तीला वाव देऊन यावर वर्गात चर्चा करा.</p>`;
    }

    let extraDetails = '';
    if (slide.staggeringFacts && slide.staggeringFacts.length > 0) {
      extraDetails = `
        <div class="slide-facts-grid">
          ${slide.staggeringFacts.map(fact => `
            <div class="slide-fact-item">
              <span class="fact-bullet">⚡</span>
              <span>${fact}</span>
            </div>
          `).join('')}
        </div>
      `;
    } else if (slide.points && slide.points.length > 0) {
      extraDetails = `
        <ul class="slide-points-list">
          ${slide.points.map(pt => `
            <li class="slide-point-item">
              <span class="point-bullet">➔</span>
              <span>${pt}</span>
            </li>
          `).join('')}
        </ul>
      `;
    } else if (slide.thoughtStarters && slide.thoughtStarters.length > 0) {
      extraDetails = `
        <div class="slide-thought-box">
          <p class="thought-box-title">🤔 विचार करा आणि वर्गात चर्चा करा:</p>
          <div class="thought-items-stack">
            ${slide.thoughtStarters.map(t => `
              <div class="thought-item">
                <span>💬 ${t}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    return `
      <div class="standard-content-wrapper">
        ${contentText}
        ${extraDetails}
      </div>
    `;
  }

  renderPollContent(slide) {
    const hasVoted = this.pollVotes[slide.id] !== undefined;

    return `
      <div class="poll-container">
        <p class="poll-question-title">${slide.pollQuestion || 'तुमचे मत काय आहे? योग्य पर्याय निवडा:'}</p>
        <div class="poll-options-grid">
          ${(slide.options || []).map((opt, idx) => {
            const isSelected = this.pollVotes[slide.id] === idx;
            const showPct = hasVoted ? `${opt.percentage}%` : '';
            const barWidth = hasVoted ? `${opt.percentage}%` : '0%';

            return `
              <button class="poll-option-btn ${isSelected ? 'selected' : ''}" data-opt-idx="${idx}">
                <div class="poll-bar-fill" style="width: ${barWidth};"></div>
                <span class="poll-text">${opt.text}</span>
                <span class="poll-pct">${showPct}</span>
              </button>
            `;
          }).join('')}
        </div>

        ${hasVoted ? `
          <div class="poll-explanation-alert">
            💡 <strong>सत्य काय आहे:</strong> ${slide.explanation || 'योग्य उत्तराचे विश्लेषण व ऐतिहासिक संदर्भ समजून घ्या.'}
          </div>
        ` : `
          <div class="poll-prompt-hint">
            👆 पर्यायावर क्लिक करून मत नोंदवा आणि निकाल पहा!
          </div>
        `}
      </div>
    `;
  }

  renderRevealContent(slide) {
    return `
      <div class="reveal-box">
        <p class="reveal-prompt-title">${slide.prompt || 'विचार करा आणि उत्तराचा अंदाज बांधा:'}</p>
        <button class="btn-primary" id="btnRevealAnswer">
          ${slide.revealButtonText || 'उत्तर व रहस्य पहा 🔍'}
        </button>

        <div class="reveal-answer" id="revealTarget">
          <div class="reveal-answer-badge">
            ${slide.answer || 'योग्य उत्तर'}
          </div>
          <ul class="reveal-details-list">
            ${slide.answerDetails ? slide.answerDetails.map(d => `<li>${d}</li>`).join('') : ''}
          </ul>
          ${slide.funFact ? `
            <div class="reveal-funfact-box">
              🚀 <strong>आश्चर्यकारक सत्य:</strong> ${slide.funFact}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  renderDiagramContent(slide) {
    let svgMarkup = '';
    if (slide.concept && slide.concept.includes('Input')) {
      svgMarkup = diagrams.iposPipeline;
    } else if (slide.title.includes('Analytical Engine') || slide.diagram?.includes('Store')) {
      svgMarkup = diagrams.babbageArchitecture;
    } else {
      svgMarkup = diagrams.iposPipeline;
    }

    return `
      <div class="diagram-slide-wrapper">
        <div class="diagram-svg-container">
          ${svgMarkup}
        </div>
        ${slide.realLifeAnalogy ? `
          <div class="diagram-analogy-pill">
            🌟 <strong>दैनंदिन जीवनातील उदाहरण:</strong> ${slide.realLifeAnalogy}
          </div>
        ` : ''}
      </div>
    `;
  }

  renderComparisonContent(slide) {
    if (slide.comparisonTable) {
      return `
        <div class="table-responsive saas-comparison-table-wrapper">
          <table class="matrix-table">
            <thead>
              <tr>
                <th>वैशिष्ट्ये (Feature)</th>
                <th>व्हॅक्यूम ट्यूब (Vacuum Tube)</th>
                <th>ट्रान्झिस्टर (Transistor)</th>
              </tr>
            </thead>
            <tbody>
              ${slide.comparisonTable.map(row => `
                <tr>
                  <td style="font-weight: 700; color: var(--primary);">${row.feature}</td>
                  <td style="color: #dc2626; font-weight: 500;">${row.tube}</td>
                  <td style="color: #16a34a; font-weight: 600;">${row.transistor}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    }

    if (slide.beforeGUI && slide.afterGUI) {
      return `
        <div class="saas-before-after-grid">
          <div class="before-card">
            <h4>${slide.beforeGUI.title}</h4>
            <p>${slide.beforeGUI.desc}</p>
          </div>
          <div class="after-card">
            <h4>${slide.afterGUI.title}</h4>
            <p>${slide.afterGUI.desc}</p>
          </div>
        </div>
      `;
    }

    return this.renderStandardContent(slide);
  }

  bindSlideInteractions(slide) {
    // Poll interaction
    const pollBtns = this.canvasEl.querySelectorAll('.poll-option-btn');
    pollBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const optIdx = parseInt(btn.getAttribute('data-opt-idx'), 10);
        this.pollVotes[slide.id] = optIdx;
        this.renderCurrentSlide();
      });
    });

    // Reveal interaction
    const btnReveal = this.canvasEl.querySelector('#btnRevealAnswer');
    const revealTarget = this.canvasEl.querySelector('#revealTarget');
    if (btnReveal && revealTarget) {
      btnReveal.addEventListener('click', () => {
        revealTarget.classList.add('revealed');
        btnReveal.style.display = 'none';
      });
    }
  }

  bindEvents() {
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!this.isOpen()) return;

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        this.nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        this.prevSlide();
      } else if (e.key === 'Escape') {
        this.closeDeck();
      } else if (e.key === 'f' || e.key === 'F') {
        this.toggleFullscreen();
      } else if (e.key === 't' || e.key === 'T') {
        this.toggleNotes();
      }
    });

    // Button controls
    const btnPrev = document.getElementById('btnSlidePrev');
    const btnNext = document.getElementById('btnSlideNext');
    const btnClose = document.getElementById('btnSlideClose');
    const btnNotes = document.getElementById('btnSlideNotes');
    const btnFs = document.getElementById('btnSlideFullscreen');

    if (btnPrev) btnPrev.addEventListener('click', () => this.prevSlide());
    if (btnNext) btnNext.addEventListener('click', () => this.nextSlide());
    if (btnClose) btnClose.addEventListener('click', () => this.closeDeck());
    if (btnNotes) btnNotes.addEventListener('click', () => this.toggleNotes());
    if (btnFs) btnFs.addEventListener('click', () => this.toggleFullscreen());
  }
}
