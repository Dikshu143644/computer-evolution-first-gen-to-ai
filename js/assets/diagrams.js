/**
 * Museum-Grade Clean Educational SVG Diagrams
 * Highly crisp, responsive, editorial blue & purple accents, no AI-looking neon tropes.
 */

export const diagrams = {
  // Input -> Process -> Output -> Storage Pipeline
  iposPipeline: `
    <svg viewBox="0 0 800 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="editorial-diagram">
      <defs>
        <linearGradient id="gradCard" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e1b4b" stop-opacity="0.9" />
          <stop offset="100%" stop-color="#312e81" stop-opacity="0.8" />
        </linearGradient>
        <linearGradient id="gradAccent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#6366f1" />
          <stop offset="100%" stop-color="#a855f7" />
        </linearGradient>
        <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#818cf8" />
        </marker>
      </defs>

      <!-- Stage 1: INPUT -->
      <g transform="translate(20, 20)">
        <rect width="160" height="130" rx="14" fill="url(#gradCard)" stroke="#4338ca" stroke-width="2"/>
        <circle cx="80" cy="45" r="24" fill="#312e81" stroke="#6366f1" stroke-width="1.5"/>
        <text x="80" y="52" text-anchor="middle" font-size="22">⌨️</text>
        <text x="80" y="95" text-anchor="middle" fill="#f8fafc" font-weight="700" font-size="16">१. INPUT</text>
        <text x="80" y="115" text-anchor="middle" fill="#94a3b8" font-size="12">कीबोर्ड / माउस</text>
        <text x="80" y="132" text-anchor="middle" fill="#a5b4fc" font-size="11">माहिती आत देणे</text>
      </g>

      <!-- Arrow 1 to 2 -->
      <line x1="185" y1="85" x2="215" y2="85" stroke="#818cf8" stroke-width="3" stroke-dasharray="4,4" marker-end="url(#arrow)"/>

      <!-- Stage 2: PROCESS -->
      <g transform="translate(225, 20)">
        <rect width="170" height="130" rx="14" fill="url(#gradCard)" stroke="#6366f1" stroke-width="2.5"/>
        <circle cx="85" cy="45" r="24" fill="#3730a3" stroke="#818cf8" stroke-width="1.5"/>
        <text x="85" y="52" text-anchor="middle" font-size="22">⚙️</text>
        <text x="85" y="95" text-anchor="middle" fill="#f8fafc" font-weight="700" font-size="16">२. PROCESS</text>
        <text x="85" y="115" text-anchor="middle" fill="#c7d2fe" font-size="12">CPU (मेंदू)</text>
        <text x="85" y="132" text-anchor="middle" fill="#a5b4fc" font-size="11">हिशोब व प्रक्रिया</text>
      </g>

      <!-- Arrow 2 to 3 -->
      <line x1="400" y1="85" x2="430" y2="85" stroke="#818cf8" stroke-width="3" marker-end="url(#arrow)"/>

      <!-- Stage 3: OUTPUT -->
      <g transform="translate(440, 20)">
        <rect width="160" height="130" rx="14" fill="url(#gradCard)" stroke="#4338ca" stroke-width="2"/>
        <circle cx="80" cy="45" r="24" fill="#312e81" stroke="#6366f1" stroke-width="1.5"/>
        <text x="80" y="52" text-anchor="middle" font-size="22">🖥️</text>
        <text x="80" y="95" text-anchor="middle" fill="#f8fafc" font-weight="700" font-size="16">३. OUTPUT</text>
        <text x="80" y="115" text-anchor="middle" fill="#94a3b8" font-size="12">स्क्रीन / प्रिंटर</text>
        <text x="80" y="132" text-anchor="middle" fill="#a5b4fc" font-size="11">निकाल दाखवणे</text>
      </g>

      <!-- Arrow 2 down to 4 (STORAGE) -->
      <path d="M 310 155 L 310 185 L 630 185 L 630 120 L 640 120" fill="none" stroke="#a855f7" stroke-width="2.5" stroke-dasharray="3,3" marker-end="url(#arrow)"/>

      <!-- Stage 4: STORAGE -->
      <g transform="translate(645, 20)">
        <rect width="140" height="130" rx="14" fill="url(#gradCard)" stroke="#7c3aed" stroke-width="2"/>
        <circle cx="70" cy="45" r="24" fill="#4c1d95" stroke="#a855f7" stroke-width="1.5"/>
        <text x="70" y="52" text-anchor="middle" font-size="22">💾</text>
        <text x="70" y="95" text-anchor="middle" fill="#f8fafc" font-weight="700" font-size="15">४. STORAGE</text>
        <text x="70" y="115" text-anchor="middle" fill="#d8b4fe" font-size="12">SSD / RAM</text>
        <text x="70" y="132" text-anchor="middle" fill="#c084fc" font-size="11">माहिती साठवणे</text>
      </g>

      <!-- Caption -->
      <text x="400" y="200" text-anchor="middle" fill="#64748b" font-size="13">
        संगणकाचे मूलभूत कार्यचक्र: Input ➔ Process ➔ Output ➔ Storage (IPOS Cycle)
      </text>
    </svg>
  `,

  // 4 Generations Hardware Comparison Graphic
  hardwareEvolution: `
    <svg viewBox="0 0 850 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="editorial-diagram">
      <defs>
        <linearGradient id="bgBox" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#1e1b4b" />
          <stop offset="100%" stop-color="#0f172a" />
        </linearGradient>
      </defs>

      <!-- 1st Gen: Vacuum Tube -->
      <g transform="translate(20, 20)">
        <rect width="180" height="210" rx="12" fill="url(#bgBox)" stroke="#4338ca" stroke-width="1.5"/>
        <!-- Tube illustration -->
        <rect x="70" y="25" width="40" height="70" rx="20" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
        <path d="M 85 45 Q 90 35 95 45" stroke="#fbbf24" stroke-width="2.5" fill="none"/>
        <line x1="80" y1="95" x2="80" y2="115" stroke="#94a3b8" stroke-width="2"/>
        <line x1="100" y1="95" x2="100" y2="115" stroke="#94a3b8" stroke-width="2"/>
        <text x="90" y="145" text-anchor="middle" fill="#f8fafc" font-weight="700" font-size="14">१. व्हॅक्यूम ट्यूब</text>
        <text x="90" y="165" text-anchor="middle" fill="#a5b4fc" font-size="12">१९४० चे दशक</text>
        <text x="90" y="185" text-anchor="middle" fill="#e2e8f0" font-size="11">मोठा बल्ब, गरम</text>
        <text x="90" y="202" text-anchor="middle" fill="#ef4444" font-size="10">वारंवार फुटायची</text>
      </g>

      <!-- Arrow -->
      <path d="M 210 120 L 225 120" stroke="#6366f1" stroke-width="2"/>

      <!-- 2nd Gen: Transistor -->
      <g transform="translate(235, 20)">
        <rect width="180" height="210" rx="12" fill="url(#bgBox)" stroke="#4f46e5" stroke-width="1.5"/>
        <!-- Transistor metal can illustration -->
        <circle cx="90" cy="55" r="26" fill="#3730a3" stroke="#a5b4fc" stroke-width="2"/>
        <line x1="78" y1="81" x2="78" y2="115" stroke="#cbd5e1" stroke-width="2"/>
        <line x1="90" y1="81" x2="90" y2="115" stroke="#cbd5e1" stroke-width="2"/>
        <line x1="102" y1="81" x2="102" y2="115" stroke="#cbd5e1" stroke-width="2"/>
        <text x="90" y="145" text-anchor="middle" fill="#f8fafc" font-weight="700" font-size="14">२. ट्रान्झिस्टर</text>
        <text x="90" y="165" text-anchor="middle" fill="#a5b4fc" font-size="12">१९५० चे दशक</text>
        <text x="90" y="185" text-anchor="middle" fill="#e2e8f0" font-size="11">लहान, थंड, टिकाऊ</text>
        <text x="90" y="202" text-anchor="middle" fill="#10b981" font-size="10">नोबेल पारितोषिक</text>
      </g>

      <!-- Arrow -->
      <path d="M 425 120 L 440 120" stroke="#6366f1" stroke-width="2"/>

      <!-- 3rd Gen: IC -->
      <g transform="translate(450, 20)">
        <rect width="180" height="210" rx="12" fill="url(#bgBox)" stroke="#6366f1" stroke-width="1.5"/>
        <!-- IC DIP chip -->
        <rect x="55" y="40" width="70" height="45" rx="5" fill="#1e293b" stroke="#818cf8" stroke-width="2"/>
        <!-- Pins left & right -->
        <line x1="45" y1="50" x2="55" y2="50" stroke="#fbbf24" stroke-width="3"/>
        <line x1="45" y1="62" x2="55" y2="62" stroke="#fbbf24" stroke-width="3"/>
        <line x1="45" y1="74" x2="55" y2="74" stroke="#fbbf24" stroke-width="3"/>
        <line x1="125" y1="50" x2="135" y2="50" stroke="#fbbf24" stroke-width="3"/>
        <line x1="125" y1="62" x2="135" y2="62" stroke="#fbbf24" stroke-width="3"/>
        <line x1="125" y1="74" x2="135" y2="74" stroke="#fbbf24" stroke-width="3"/>
        <circle cx="65" cy="45" r="3" fill="#cbd5e1"/>
        <text x="90" y="145" text-anchor="middle" fill="#f8fafc" font-weight="700" font-size="14">३. Integrated Circuit</text>
        <text x="90" y="165" text-anchor="middle" fill="#a5b4fc" font-size="12">१९६० चे दशक</text>
        <text x="90" y="185" text-anchor="middle" fill="#e2e8f0" font-size="11">एका चिपवर १००+ भाग</text>
        <text x="90" y="202" text-anchor="middle" fill="#10b981" font-size="10">कीबोर्ड व मॉनिटर</text>
      </g>

      <!-- Arrow -->
      <path d="M 640 120 L 655 120" stroke="#6366f1" stroke-width="2"/>

      <!-- 4th Gen: Microprocessor -->
      <g transform="translate(665, 20)">
        <rect width="170" height="210" rx="12" fill="url(#bgBox)" stroke="#8b5cf6" stroke-width="2"/>
        <!-- Modern Square CPU package -->
        <rect x="55" y="35" width="60" height="60" rx="8" fill="#0f172a" stroke="#c084fc" stroke-width="2"/>
        <rect x="70" y="50" width="30" height="30" rx="4" fill="#4c1d95" stroke="#fbbf24" stroke-width="1.5"/>
        <text x="85" y="70" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="bold">CPU</text>
        <text x="85" y="145" text-anchor="middle" fill="#f8fafc" font-weight="700" font-size="14">४. Microprocessor</text>
        <text x="85" y="165" text-anchor="middle" fill="#c084fc" font-size="12">१९७१ ते आज</text>
        <text x="85" y="185" text-anchor="middle" fill="#e2e8f0" font-size="11">अब्जावधी ट्रान्झिस्टर</text>
        <text x="85" y="202" text-anchor="middle" fill="#38bdf8" font-size="10">PC, फोन व AI</text>
      </g>
    </svg>
  `,

  // Analytical Engine: Babbage's Architecture
  babbageArchitecture: `
    <svg viewBox="0 0 750 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="editorial-diagram">
      <defs>
        <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#78350f" />
          <stop offset="100%" stop-color="#451a03" />
        </linearGradient>
      </defs>

      <!-- Input: Punched Cards -->
      <g transform="translate(30, 40)">
        <rect width="180" height="150" rx="12" fill="#1e1b4b" stroke="#6366f1" stroke-width="2"/>
        <text x="90" y="45" text-anchor="middle" font-size="28">📋</text>
        <text x="90" y="80" text-anchor="middle" fill="#f8fafc" font-weight="bold" font-size="15">Punched Cards</text>
        <text x="90" y="105" text-anchor="middle" fill="#cbd5e1" font-size="13">पंच कार्डे (Input)</text>
        <text x="90" y="130" text-anchor="middle" fill="#94a3b8" font-size="11">माहिती व सूचना देणे</text>
        <circle cx="50" cy="155" r="3" fill="#818cf8"/>
        <circle cx="70" cy="155" r="3" fill="#818cf8"/>
        <circle cx="90" cy="155" r="3" fill="#818cf8"/>
      </g>

      <!-- Arrow -->
      <line x1="220" y1="115" x2="260" y2="115" stroke="#818cf8" stroke-width="3"/>

      <!-- Store: Memory -->
      <g transform="translate(270, 40)">
        <rect width="200" height="150" rx="12" fill="#1e1b4b" stroke="#a855f7" stroke-width="2"/>
        <text x="100" y="45" text-anchor="middle" font-size="28">🏛️</text>
        <text x="100" y="80" text-anchor="middle" fill="#f8fafc" font-weight="bold" font-size="15">The Store (स्टोअर)</text>
        <text x="100" y="105" text-anchor="middle" fill="#c084fc" font-size="13">आजची Memory / RAM</text>
        <text x="100" y="130" text-anchor="middle" fill="#cbd5e1" font-size="12">१००० संख्या साठवणे</text>
      </g>

      <!-- Bi-directional Arrow between Store and Mill -->
      <line x1="480" y1="100" x2="520" y2="100" stroke="#ec4899" stroke-width="3"/>
      <line x1="520" y1="130" x2="480" y2="130" stroke="#ec4899" stroke-width="3"/>

      <!-- Mill: CPU -->
      <g transform="translate(530, 40)">
        <rect width="190" height="150" rx="12" fill="#1e1b4b" stroke="#ec4899" stroke-width="2"/>
        <text x="95" y="45" text-anchor="middle" font-size="28">⚙️</text>
        <text x="95" y="80" text-anchor="middle" fill="#f8fafc" font-weight="bold" font-size="15">The Mill (मिल)</text>
        <text x="95" y="105" text-anchor="middle" fill="#f472b6" font-size="13">आजचा Processor / CPU</text>
        <text x="95" y="130" text-anchor="middle" fill="#cbd5e1" font-size="12">दातेरी गीअर्सने हिशोब</text>
      </g>

      <text x="375" y="225" text-anchor="middle" fill="#94a3b8" font-size="13">
        चार्ल्स बॅबेजचे ॲनालिटिकल इंजिन (Analytical Engine, 1837) — आधुनिक संगणकाची पहिली संकल्पना
      </text>
    </svg>
  `,

  // Inside a PC Anatomy Diagram
  computerAnatomy: `
    <svg viewBox="0 0 800 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="editorial-diagram">
      <defs>
        <linearGradient id="moboGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#064e3b" />
          <stop offset="100%" stop-color="#022c22" />
        </linearGradient>
      </defs>

      <!-- Motherboard PCB base -->
      <rect x="50" y="20" width="700" height="280" rx="16" fill="url(#moboGrad)" stroke="#10b981" stroke-width="3"/>
      <text x="80" y="55" fill="#34d399" font-size="14" font-weight="bold" letter-spacing="2">MOTHERBOARD (मुख्य सर्किट बोर्ड)</text>

      <!-- CPU Socket -->
      <g transform="translate(120, 80)">
        <rect width="130" height="130" rx="10" fill="#1e293b" stroke="#cbd5e1" stroke-width="2"/>
        <rect x="25" y="25" width="80" height="80" rx="6" fill="#334155" stroke="#fbbf24" stroke-width="1.5"/>
        <text x="65" y="65" text-anchor="middle" fill="#fbbf24" font-size="16" font-weight="bold">CPU</text>
        <text x="65" y="85" text-anchor="middle" fill="#f8fafc" font-size="11">संगणकाचा मेंदू</text>
      </g>

      <!-- RAM Slots -->
      <g transform="translate(290, 80)">
        <rect width="22" height="130" rx="3" fill="#1e1b4b" stroke="#818cf8" stroke-width="1.5"/>
        <rect width="22" height="130" x="35" rx="3" fill="#1e1b4b" stroke="#818cf8" stroke-width="1.5"/>
        <text x="28" y="160" text-anchor="middle" fill="#a5b4fc" font-size="12" font-weight="bold" transform="rotate(-90 28 160)">RAM SLOTS (कामाचा ओटा)</text>
      </g>

      <!-- GPU / PCIe Slot -->
      <g transform="translate(380, 80)">
        <rect width="180" height="70" rx="8" fill="#1e1b4b" stroke="#a855f7" stroke-width="2"/>
        <circle cx="45" cy="35" r="22" fill="#312e81" stroke="#c084fc" stroke-width="1.5"/>
        <text x="45" y="42" text-anchor="middle" font-size="18">🌀</text>
        <text x="120" y="32" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">GPU</text>
        <text x="120" y="52" text-anchor="middle" fill="#d8b4fe" font-size="11">ग्राफिक्स व AI</text>
      </g>

      <!-- Fast SSD / M.2 Storage -->
      <g transform="translate(380, 175)">
        <rect width="180" height="45" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="90" y="27" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">M.2 NVMe SSD (कपाट)</text>
        <text x="90" y="40" text-anchor="middle" fill="#94a3b8" font-size="10">कायमस्वरूपी वेगवान स्टोरेज</text>
      </g>

      <!-- Back Panel IO Ports -->
      <g transform="translate(600, 60)">
        <rect width="110" height="200" rx="8" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
        <rect x="20" y="20" width="70" height="25" rx="4" fill="#334155"/>
        <text x="55" y="37" text-anchor="middle" fill="#94a3b8" font-size="10">HDMI / Monitor</text>
        <rect x="20" y="60" width="70" height="20" rx="3" fill="#1e3a8a"/>
        <text x="55" y="74" text-anchor="middle" fill="#60a5fa" font-size="10">USB 3.0</text>
        <rect x="20" y="95" width="70" height="20" rx="3" fill="#1e3a8a"/>
        <text x="55" y="109" text-anchor="middle" fill="#60a5fa" font-size="10">USB / Keyboard</text>
        <rect x="20" y="130" width="70" height="25" rx="4" fill="#334155"/>
        <text x="55" y="147" text-anchor="middle" fill="#94a3b8" font-size="10">Ethernet LAN</text>
        <text x="55" y="185" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="bold">I/O Ports</text>
      </g>
    </svg>
  `,

  // Indian Computing Pioneers (TIFRAC & PARAM 8000)
  indianPioneers: `
    <svg viewBox="0 0 780 230" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="editorial-diagram">
      <defs>
        <linearGradient id="tifrCard" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e1b4b" />
          <stop offset="100%" stop-color="#312e81" />
        </linearGradient>
      </defs>

      <!-- TIFRAC Card -->
      <g transform="translate(30, 20)">
        <rect width="330" height="190" rx="14" fill="url(#tifrCard)" stroke="#f59e0b" stroke-width="2"/>
        <text x="30" y="45" font-size="28">🏛️</text>
        <text x="75" y="45" fill="#f59e0b" font-weight="bold" font-size="18">TIFRAC (१९५४ - १९६०)</text>
        <text x="30" y="80" fill="#f8fafc" font-size="14" font-weight="bold">भारताचा पहिला स्वदेशी डिजिटल संगणक</text>
        <text x="30" y="108" fill="#cbd5e1" font-size="12">• केंद्र: TIFR, मुंबई</text>
        <text x="30" y="128" fill="#cbd5e1" font-size="12">• नेते: प्रा. आर. नरसिंहन आणि डॉ. होमी भाभा</text>
        <text x="30" y="148" fill="#cbd5e1" font-size="12">• उद्घाटन: पंडित जवाहरलाल नेहरू (१९६०)</text>
        <text x="30" y="172" fill="#fbbf24" font-size="11">भारतीय विज्ञान आणि स्वावलंबनाचा पाया</text>
      </g>

      <!-- PARAM 8000 Card -->
      <g transform="translate(410, 20)">
        <rect width="340" height="190" rx="14" fill="url(#tifrCard)" stroke="#10b981" stroke-width="2"/>
        <text x="30" y="45" font-size="28">🇮🇳</text>
        <text x="75" y="45" fill="#10b981" font-weight="bold" font-size="18">PARAM 8000 (१९९१)</text>
        <text x="30" y="80" fill="#f8fafc" font-size="14" font-weight="bold">भारताचा पहिला स्वदेशी महासंगणक</text>
        <text x="30" y="108" fill="#cbd5e1" font-size="12">• संस्था: C-DAC, पुणे</text>
        <text x="30" y="128" fill="#cbd5e1" font-size="12">• शिल्पकार: डॉ. विजय भटकर आणि शास्त्रज्ञ</text>
        <text x="30" y="148" fill="#cbd5e1" font-size="12">• रचना: ६४ नोड्सची समांतर प्रक्रिया (Parallel)</text>
        <text x="30" y="172" fill="#34d399" font-size="11">अमेरिकेने Cray नाकारल्यावर भारताचे सडेतोड उत्तर!</text>
      </g>
    </svg>
  `
};
