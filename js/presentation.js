/**
 * Presentation Engine
 * Handles modern Canva-style 16:9 Editorial Slideshow,
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
          <p style="margin-bottom: 0.5rem;"><strong style="color: var(--accent-amber);">अध्याय उद्दिष्ट:</strong> ${slide.chapterPurpose}</p>
          <p><strong style="color: var(--primary);">शिक्षकांसाठी टीप:</strong> ${slide.chapterTeacherNotes || 'विद्यार्थ्यांना प्रश्न विचारून चर्चेला प्रवृत्त करा.'}</p>
        </div>
      `;
    }

    // Build Slide Content based on Type
    let bodyHtml = '';

    // Grade label
    const gradeLabels = {
      level1: '🟢 Std 1-4 (प्राथमिक)',
      level2: '🟡 Std 5-7 (माध्यमिक)',
      level3: '🟣 Std 8-10 (उच्च माध्यमिक)'
    };

    if (slide.type === 'poll') {
      bodyHtml = this.renderPollSlide(slide);
    } else if (slide.type === 'reveal') {
      bodyHtml = this.renderRevealSlide(slide);
    } else if (slide.type === 'diagram') {
      bodyHtml = this.renderDiagramSlide(slide);
    } else if (slide.type === 'comparison') {
      bodyHtml = this.renderComparisonSlide(slide);
    } else {
      bodyHtml = this.renderStandardSlide(slide);
    }

    this.canvasEl.innerHTML = `
      <div class="slide-top-bar">
        <div class="slide-chapter-tag">
          <span>अध्याय ${slide.chapterNumber}:</span>
          <span>${slide.chapterTitle}</span>
        </div>
        <div class="slide-grade-badge">
          ${gradeLabels[this.currentGrade] || 'Std 5-7'}
        </div>
      </div>

      <div class="slide-body">
        <h2 class="slide-title-main">${slide.title}</h2>
        ${slide.englishTitle ? `<div class="slide-title-english">${slide.englishTitle}</div>` : ''}
        ${bodyHtml}
      </div>

      <div class="slide-bottom-bar">
        <div class="slide-source-pill" onclick="window.app.openSourceModal('${slide.source || 'Computer History Museum'}')">
          <span>🏛️</span>
          <span>संदर्भ: ${slide.source || 'Computer History Museum Archives'}</span>
        </div>
        <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted);">
          Antigravity Presentation Deck
        </div>
      </div>
    `;

    // Bind slide-specific interactive handlers
    this.bindSlideInteractions(slide);
  }

  getSlideImage(slide) {
    const chNum = parseInt(slide.chapterNumber, 10) || (slide.chapterIndex + 1);
    const text = ((slide.title || '') + ' ' + (slide.englishTitle || '') + ' ' + (slide.chapterTitle || '')).toLowerCase();

    if (text.includes('tifrac') || text.includes('param') || text.includes('भारत') || text.includes('india') || chNum === 12) {
      return {
        src: 'assets/images/india_tifrac_param.jpg',
        badge: 'TIFRAC (मुंबई) • PARAM 8000 (पुणे)',
        caption: 'स्वावलंबी भारत: स्वदेशी संगणक व महासंगणक'
      };
    }
    if (text.includes('eniac') || text.includes('vacuum') || text.includes('पहिली पिढी') || chNum === 4 || chNum === 5) {
      return {
        src: 'assets/images/eniac_1946.jpg',
        badge: 'ENIAC (1946) • Penn Engineering',
        caption: '१८,००० व्हॅक्यूम ट्यूब्स व महिला प्रोग्रामर्स'
      };
    }
    if (text.includes('transistor') || text.includes('ट्रान्झिस्टर') || text.includes('दुसरी पिढी') || chNum === 6) {
      return {
        src: 'assets/images/transistor_1947.jpg',
        badge: 'Bell Labs (1947) • नोबेल पारितोषिक',
        caption: 'पॉइंट-कॉन्टॅक्ट ट्रान्झिस्टरचा ऐतिहासिक शोध'
      };
    }
    if (text.includes('babbage') || text.includes('बॅबेज') || text.includes('pascaline') || text.includes('abacus') || chNum === 2 || chNum === 3) {
      return {
        src: 'assets/images/babbage_engine.jpg',
        badge: 'Science Museum London',
        caption: 'चार्ल्स बॅबेज यांचे मेकॅनिकल ॲनालिटिकल इंजिन'
      };
    }
    if (text.includes('microprocessor') || text.includes('intel') || text.includes('pc') || text.includes('apple') || text.includes('ibm') || text.includes('चौथी पिढी') || chNum === 7 || chNum === 8 || chNum === 9 || chNum === 10 || chNum === 13) {
      return {
        src: 'assets/images/pc_revolution.jpg',
        badge: 'Intel 4004 • Apple II • IBM PC 5150',
        caption: 'मायक्रोप्रोसेसर व वैयक्तिक संगणक क्रांती'
      };
    }
    if (text.includes('ai') || text.includes('cloud') || text.includes('internet') || text.includes('web') || text.includes('mobile') || chNum === 11 || chNum === 14 || chNum === 15 || chNum === 16) {
      return {
        src: 'assets/images/cloud_ai_datacenter.jpg',
        badge: 'Hyperscale Cloud & AI Cluster',
        caption: 'क्लाउड डेटा सेंटर व आधुनिक AI सिलिकॉन वेफर'
      };
    }
    return {
      src: 'assets/images/hero_museum.jpg',
      badge: 'Computing History Museum',
      caption: '५,००० वर्षांचा ऐतिहासिक संगणक प्रवास'
    };
  }

  renderStandardSlide(slide) {
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
        <div style="border-left: 4px solid var(--accent-cta); padding-left: 1.5rem; margin: 1.5rem 0;">
          <p style="font-size: 1.5rem; font-style: italic; color: var(--text-primary); line-height: 1.5; font-weight: 500;">"${slide.quoteText}"</p>
        </div>
      `;
    }

    let extraDetails = '';
    if (slide.staggeringFacts) {
      extraDetails = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.85rem; margin-top: 1.25rem;">
          ${slide.staggeringFacts.map(fact => `
            <div style="background: #f8fafc; padding: 0.75rem 1rem; border-radius: 10px; border: 1px solid var(--border-card); border-left: 3px solid var(--primary); font-size: 0.98rem; color: var(--text-secondary);">
              ${fact}
            </div>
          `).join('')}
        </div>
      `;
    } else if (slide.points) {
      extraDetails = `
        <ul style="list-style-type: none; margin-top: 1rem; display: flex; flex-direction: column; gap: 0.65rem;">
          ${slide.points.map(pt => `
            <li style="display: flex; gap: 0.75rem; align-items: flex-start; font-size: 1.05rem; color: var(--text-secondary);">
              <span style="color: var(--primary); font-weight: bold;">➔</span>
              <span>${pt}</span>
            </li>
          `).join('')}
        </ul>
      `;
    } else if (slide.thoughtStarters) {
      extraDetails = `
        <div style="margin-top: 1.25rem;">
          <p style="color: var(--accent-amber); font-weight: 700; margin-bottom: 0.6rem; font-size: 0.95rem;">विचार करा आणि वर्गात चर्चा करा:</p>
          <div style="display: flex; flex-direction: column; gap: 0.5rem;">
            ${slide.thoughtStarters.map(t => `
              <div style="background: #eef2ff; border: 1px solid #c7d2fe; padding: 0.65rem 1rem; border-radius: 8px; font-size: 0.98rem; color: #3730a3; font-weight: 500;">
                🤔 ${t}
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    const imgData = this.getSlideImage(slide);

    return `
      <div class="slide-editorial-split">
        <div>
          ${contentText}
          ${extraDetails}
        </div>

        <div class="slide-editorial-media">
          <img src="${imgData.src}" alt="${slide.title}" loading="lazy">
          <div class="slide-editorial-badge">
            <span>🏛️ ${imgData.badge}</span>
            <span>${imgData.caption}</span>
          </div>
        </div>
      </div>
    `;
  }

  renderPollSlide(slide) {
    const hasVoted = this.pollVotes[slide.id] !== undefined;

    return `
      <div class="poll-container">
        <p style="font-size: 1.25rem; color: var(--text-primary); font-weight: 700; margin-bottom: 0.75rem;">${slide.pollQuestion}</p>
        ${slide.options.map((opt, idx) => {
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

        ${hasVoted ? `
          <div style="margin-top: 1.5rem; background: #ecfdf5; border: 1px solid #a7f3d0; padding: 1rem 1.25rem; border-radius: 12px; font-size: 1.1rem; color: #065f46; animation: fadeIn 0.4s ease;">
            💡 <strong>सत्य काय आहे:</strong> ${slide.explanation}
          </div>
        ` : ''}
      </div>
    `;
  }

  renderRevealSlide(slide) {
    return `
      <div class="reveal-box">
        <p style="font-size: 1.3rem; margin-bottom: 1.25rem; color: var(--text-primary); font-weight: 600;">${slide.prompt}</p>
        <button class="btn-primary" id="btnRevealAnswer" style="font-size: 1.05rem; padding: 0.75rem 1.5rem;">
          ${slide.revealButtonText || 'उत्तर पहा 🔍'}
        </button>

        <div class="reveal-answer" id="revealTarget">
          <div style="font-size: 1.6rem; color: var(--accent-emerald); font-weight: 800; margin-bottom: 1rem;">
            ${slide.answer}
          </div>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem;">
            ${slide.answerDetails ? slide.answerDetails.map(d => `<li style="color: var(--text-secondary); font-size: 1.1rem;">${d}</li>`).join('') : ''}
          </ul>
          ${slide.funFact ? `
            <div style="margin-top: 1.25rem; background: #fffbeb; border: 1px solid #fde68a; border-left: 4px solid #f59e0b; padding: 0.85rem 1.25rem; border-radius: 8px; color: #92400e; font-size: 1rem;">
              🚀 <strong>आश्चर्यकारक सत्य:</strong> ${slide.funFact}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  renderDiagramSlide(slide) {
    let svgMarkup = '';
    if (slide.concept && slide.concept.includes('Input')) {
      svgMarkup = diagrams.iposPipeline;
    } else if (slide.title.includes('Analytical Engine') || slide.diagram?.includes('Store')) {
      svgMarkup = diagrams.babbageArchitecture;
    } else {
      svgMarkup = diagrams.iposPipeline;
    }

    return `
      <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center; justify-content: center; height: 100%;">
        <div style="width: 100%; max-width: 900px; max-height: 280px;">
          ${svgMarkup}
        </div>
        ${slide.realLifeAnalogy ? `
          <div style="background: #eef2ff; border-radius: 12px; padding: 0.85rem 1.5rem; color: #3730a3; font-size: 1.1rem; text-align: center; border: 1px solid #c7d2fe; font-weight: 500;">
            🌟 <strong>दैनंदिन जीवनातील उदाहरण:</strong> ${slide.realLifeAnalogy}
          </div>
        ` : ''}
      </div>
    `;
  }

  renderComparisonSlide(slide) {
    if (slide.comparisonTable) {
      return `
        <div class="table-responsive" style="margin-top: 1rem;">
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
                  <td style="font-weight: bold; color: var(--primary);">${row.feature}</td>
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
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 1rem;">
          <div style="background: #f8fafc; border: 1px solid var(--border-card); border-radius: 14px; padding: 1.5rem;">
            <h4 style="color: #475569; font-size: 1.25rem; margin-bottom: 0.75rem; font-weight: 700;">${slide.beforeGUI.title}</h4>
            <p style="color: var(--text-secondary); font-size: 1.05rem; line-height: 1.6;">${slide.beforeGUI.desc}</p>
          </div>
          <div style="background: #eef2ff; border: 1px solid #c7d2fe; border-radius: 14px; padding: 1.5rem;">
            <h4 style="color: var(--primary); font-size: 1.25rem; margin-bottom: 0.75rem; font-weight: 700;">${slide.afterGUI.title}</h4>
            <p style="color: var(--text-primary); font-size: 1.05rem; line-height: 1.6;">${slide.afterGUI.desc}</p>
          </div>
        </div>
      `;
    }

    return this.renderStandardSlide(slide);
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
    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
      if (!this.isOpen()) return;

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        this.nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        this.prevSlide();
      } else if (e.key === 'Escape') {
        this.closeDeck();
      } else if (e.key.toLowerCase() === 'n') {
        this.toggleNotes();
      } else if (e.key.toLowerCase() === 'f') {
        this.toggleFullscreen();
      }
    });

    // Modal Control buttons
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
