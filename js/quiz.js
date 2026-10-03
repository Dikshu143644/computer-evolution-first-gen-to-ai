/**
 * Quiz Engine & Games Logic
 * Interactive Multiple-Choice, True/False, Timeline Ordering, and Generation Matching
 * Styled with Modern High-Contrast SaaS Palette
 */

import { quizData } from './data/quizData.js';

export class QuizEngine {
  constructor() {
    this.currentLevel = 'medium'; // default Std 5-7
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.userAnswers = {};
    this.activeTab = 'questions'; // 'questions' | 'timeline' | 'matching'
    
    // Ordering game state
    this.orderedItems = [...quizData.timelineOrderingChallenge].sort(() => Math.random() - 0.5);

    this.containerEl = document.getElementById('quizHubContent');
    this.init();
  }

  setLevel(level) {
    this.currentLevel = level;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.userAnswers = {};
    this.render();
  }

  setTab(tabName) {
    this.activeTab = tabName;
    this.render();
  }

  init() {
    this.render();
  }

  render() {
    if (!this.containerEl) return;

    if (this.activeTab === 'questions') {
      this.renderQuestionsTab();
    } else if (this.activeTab === 'timeline') {
      this.renderTimelineOrderGame();
    } else if (this.activeTab === 'matching') {
      this.renderMatchingGame();
    }
  }

  renderQuestionsTab() {
    const questionsList = quizData[this.currentLevel] || quizData.medium;
    const isCompleted = this.currentQuestionIndex >= questionsList.length;

    if (isCompleted) {
      this.renderQuizResults(questionsList.length);
      return;
    }

    const q = questionsList[this.currentQuestionIndex];
    const total = questionsList.length;
    const currentNum = this.currentQuestionIndex + 1;

    this.containerEl.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
        <span style="font-family: var(--font-mono); color: var(--primary); font-size: 0.9rem; font-weight: 700;">
          प्रश्न ${currentNum} / ${total}
        </span>
        <span style="background: #eef2ff; color: #4338ca; border: 1px solid #c7d2fe; padding: 0.25rem 0.85rem; border-radius: 9999px; font-size: 0.82rem; font-weight: 700;">
          गुण: ${this.score}
        </span>
      </div>

      <h3 style="font-size: 1.45rem; font-weight: 700; margin-bottom: 0.5rem; line-height: 1.35; color: var(--text-primary);">
        ${q.question}
      </h3>
      <div style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 1.5rem;">
        ${q.englishQuestion}
      </div>

      <div class="quiz-options-grid" style="display: grid; gap: 0.75rem;">
        ${q.options.map((opt, idx) => `
          <button class="quiz-choice-btn" data-choice-idx="${idx}">
            <span style="margin-right: 0.75rem; font-family: var(--font-mono); color: var(--primary); font-weight: bold;">
              ${String.fromCharCode(65 + idx)}.
            </span>
            ${opt}
          </button>
        `).join('')}
      </div>

      <div class="quiz-feedback-box" id="quizFeedbackBox" style="display: none; margin-top: 1.25rem; padding: 1.25rem; border-radius: 12px;"></div>
    `;

    // Bind choices
    const choiceBtns = this.containerEl.querySelectorAll('.quiz-choice-btn');
    choiceBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedIdx = parseInt(btn.getAttribute('data-choice-idx'), 10);
        this.handleAnswer(q, selectedIdx, choiceBtns);
      });
    });
  }

  handleAnswer(question, selectedIdx, choiceBtns) {
    const isCorrect = selectedIdx === question.correctAnswer;
    const feedbackBox = this.containerEl.querySelector('#quizFeedbackBox');

    // Disable all choice buttons
    choiceBtns.forEach((btn, idx) => {
      btn.disabled = true;
      btn.style.cursor = 'default';
      if (idx === question.correctAnswer) {
        btn.classList.add('correct');
      } else if (idx === selectedIdx && !isCorrect) {
        btn.classList.add('wrong');
      }
    });

    if (isCorrect) {
      this.score += 10;
    }

    if (feedbackBox) {
      feedbackBox.style.display = 'block';
      feedbackBox.style.background = isCorrect ? '#ecfdf5' : '#fef2f2';
      feedbackBox.style.border = isCorrect ? '1px solid #a7f3d0' : '1px solid #fecaca';
      feedbackBox.style.color = isCorrect ? '#065f46' : '#991b1b';

      feedbackBox.innerHTML = `
        <div style="font-size: 1.15rem; font-weight: bold; margin-bottom: 0.5rem;">
          ${isCorrect ? '🎉 छान प्रयत्न! बरोबर उत्तर!' : '❌ अरेरे! हरकत नाही, शिकत राहा!'}
        </div>
        <div style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1rem;">
          ${question.explanation}
        </div>
        <button class="btn-primary" id="btnNextQuizQuestion" style="font-size: 0.9rem; padding: 0.5rem 1.25rem;">
          ${this.currentQuestionIndex < (quizData[this.currentLevel] || quizData.medium).length - 1 ? 'पुढील प्रश्न ➔' : 'निकाल पहा 🏆'}
        </button>
      `;

      const btnNext = feedbackBox.querySelector('#btnNextQuizQuestion');
      if (btnNext) {
        btnNext.addEventListener('click', () => {
          this.currentQuestionIndex++;
          this.render();
        });
      }
    }
  }

  renderQuizResults(totalQuestions) {
    const maxScore = totalQuestions * 10;
    const percentage = Math.round((this.score / maxScore) * 100);

    let congratulationMsg = '';
    let emoji = '🌟';
    if (percentage >= 80) {
      congratulationMsg = 'अप्रतिम कामगिरी! तुम्ही संगणकाचे खरे सुपर-एक्सप्लोरर आहात!';
      emoji = '🏆';
    } else if (percentage >= 50) {
      congratulationMsg = 'छान प्रयत्न! अजून एकदा उजळणी करून १००% गुण मिळवा!';
      emoji = '👍';
    } else {
      congratulationMsg = 'हरकत नाही, पुन्हा अध्याय वाचा आणि नवीन जोमाने प्रयत्न करा!';
      emoji = '💡';
    }

    this.containerEl.innerHTML = `
      <div style="text-align: center; padding: 2rem 1rem;">
        <div style="font-size: 4rem; margin-bottom: 1rem;">${emoji}</div>
        <h3 style="font-size: 2rem; font-weight: 800; margin-bottom: 0.5rem; color: var(--text-primary);">तुमचा निकाल (Your Score)</h3>
        <p style="color: var(--text-secondary); font-size: 1.1rem; margin-bottom: 1.5rem;">
          ${congratulationMsg}
        </p>

        <div style="background: #f8fafc; border: 1px solid var(--border-card); border-radius: 16px; padding: 1.5rem; max-width: 400px; margin: 0 auto 2rem; box-shadow: var(--shadow-card);">
          <div style="font-size: 3rem; font-weight: 800; color: var(--primary); font-family: var(--font-mono);">
            ${this.score} / ${maxScore}
          </div>
          <div style="color: var(--text-secondary); font-size: 1rem; margin-top: 0.25rem; font-weight: 600;">
            यशस्विता: ${percentage}%
          </div>
        </div>

        <button class="btn-primary" id="btnRestartQuiz" style="font-size: 1rem; padding: 0.75rem 1.75rem;">
          🔄 पुन्हा क्विझ सोडवा
        </button>
      </div>
    `;

    const btnRestart = this.containerEl.querySelector('#btnRestartQuiz');
    if (btnRestart) {
      btnRestart.addEventListener('click', () => {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.render();
      });
    }
  }

  renderTimelineOrderGame() {
    this.containerEl.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <h3 style="font-size: 1.4rem; font-weight: 700; margin-bottom: 0.4rem; color: var(--text-primary);">
          शोधांचा योग्य कालानुक्रम लावा! (Chronological Timeline Challenge)
        </h3>
        <p style="color: var(--text-secondary); font-size: 0.95rem;">
          खालील शोधांना बाणांच्या (⬆️ / ⬇️) साहाय्याने सर्वात जुन्यापासून ते सर्वात नवीन अशा योग्य क्रमाने लावा:
        </p>
      </div>

      <div class="order-list" id="orderItemsContainer">
        ${this.orderedItems.map((item, idx) => `
          <div class="order-item" data-id="${item.id}" data-idx="${idx}">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="font-family: var(--font-mono); font-weight: bold; color: var(--primary); width: 24px;">
                ${idx + 1}.
              </span>
              <span style="font-weight: 600; font-size: 1rem; color: var(--text-primary);">
                ${item.title}
              </span>
            </div>
            <div style="display: flex; gap: 0.35rem;">
              <button class="btn-icon btn-order-up" data-idx="${idx}" ${idx === 0 ? 'disabled style="opacity: 0.3;"' : ''}>⬆️</button>
              <button class="btn-icon btn-order-down" data-idx="${idx}" ${idx === this.orderedItems.length - 1 ? 'disabled style="opacity: 0.3;"' : ''}>⬇️</button>
            </div>
          </div>
        `).join('')}
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.75rem;">
        <button class="btn-primary" id="btnVerifyOrder" style="padding: 0.75rem 1.5rem;">
          तपासा आणि पडताळा 🔍
        </button>
        <button class="btn-secondary" id="btnResetOrder">
          रीसेट करा 🔄
        </button>
      </div>

      <div id="orderResultFeedback" style="margin-top: 1.25rem;"></div>
    `;

    // Up / Down handlers
    this.containerEl.querySelectorAll('.btn-order-up').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        if (idx > 0) {
          const temp = this.orderedItems[idx];
          this.orderedItems[idx] = this.orderedItems[idx - 1];
          this.orderedItems[idx - 1] = temp;
          this.renderTimelineOrderGame();
        }
      });
    });

    this.containerEl.querySelectorAll('.btn-order-down').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        if (idx < this.orderedItems.length - 1) {
          const temp = this.orderedItems[idx];
          this.orderedItems[idx] = this.orderedItems[idx + 1];
          this.orderedItems[idx + 1] = temp;
          this.renderTimelineOrderGame();
        }
      });
    });

    const btnVerify = this.containerEl.querySelector('#btnVerifyOrder');
    if (btnVerify) {
      btnVerify.addEventListener('click', () => {
        let allCorrect = true;
        let correctCount = 0;

        this.orderedItems.forEach((item, idx) => {
          if (item.correctPosition === idx + 1) {
            correctCount++;
          } else {
            allCorrect = false;
          }
        });

        const feedbackBox = this.containerEl.querySelector('#orderResultFeedback');
        if (feedbackBox) {
          if (allCorrect) {
            feedbackBox.innerHTML = `
              <div style="background: #ecfdf5; border: 1px solid #a7f3d0; padding: 1.25rem; border-radius: 12px; color: #065f46; font-weight: 600;">
                🎉 <strong>अद्भुत!</strong> तुम्ही सर्व १० शोधांचा अगदी अचूक कालानुक्रम लावला आहे! तुम्ही कम्प्युटर इतिहासाचे जाणकार आहात! 🏆
              </div>
            `;
          } else {
            feedbackBox.innerHTML = `
              <div style="background: #fffbeb; border: 1px solid #fde68a; padding: 1.25rem; border-radius: 12px; color: #92400e; font-weight: 500;">
                💡 तुमचे <strong>${correctCount} पैकी १०</strong> शोध योग्य जागेवर आहेत. क्रम पुन्हा तपासा (अबॅकस ➔ पास्कलाइन ➔ बॅबेज ➔ ENIAC ➔ ट्रान्झिस्टर ➔ TIFRAC ➔ IC ➔ 4004 ➔ WWW ➔ PARAM).
              </div>
            `;
          }
        }
      });
    }

    const btnReset = this.containerEl.querySelector('#btnResetOrder');
    if (btnReset) {
      btnReset.addEventListener('click', () => {
        this.orderedItems = [...quizData.timelineOrderingChallenge].sort(() => Math.random() - 0.5);
        this.renderTimelineOrderGame();
      });
    }
  }

  renderMatchingGame() {
    this.containerEl.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <h3 style="font-size: 1.4rem; font-weight: 700; margin-bottom: 0.4rem; color: var(--text-primary);">
          योग्य जोड्या जुळवा (Match the Generations)
        </h3>
        <p style="color: var(--text-secondary); font-size: 0.95rem;">
          संगणकाची पिढी आणि त्यातील मुख्य घटक समजून घेण्यासाठी खालील तक्त्याची उजळणी करा:
        </p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
        ${quizData.matchingGame.map(p => `
          <div style="background: #f8fafc; border: 1px solid var(--border-card); padding: 1rem; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; box-shadow: var(--shadow-subtle);">
            <strong style="color: var(--primary);">${p.itemA}</strong>
            <span style="color: var(--accent-emerald); font-weight: 700;">➔ ${p.itemB}</span>
          </div>
        `).join('')}
      </div>

      <div style="background: #fffbeb; border: 1px solid #fde68a; border-left: 3px solid var(--accent-amber); padding: 1.25rem; border-radius: 12px; font-size: 0.95rem; color: #92400e; line-height: 1.6;">
        💡 <strong>लक्षात ठेवण्याची सोपी युक्ती:</strong><br>
        काचेचा बल्ब (१ली) ➔ लहान धातूचा ट्रान्झिस्टर (२री) ➔ सिलिकॉन चिप (३री) ➔ मायक्रोप्रोसेसर (४थी) ➔ AI व सुपरकॉम्प्युटर (५वी).
      </div>
    `;
  }
}
