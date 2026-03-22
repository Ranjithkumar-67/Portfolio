/* ═══════════════════════════════════════
   HERO.JS — Typewriter + Terminal + Particles
═══════════════════════════════════════ */
(function () {

  /* ── TYPEWRITER ─────────────────────── */
  const el = document.getElementById('heroTypewriter');
  if (el) {
    const phrases = [
      '// Structural Engineer & IT Developer',
      '// AutoCAD · Revit · Tekla · ArcGIS',
      '// Python · React · Full Stack · Apps',
      '// Kongu Engineering College · Batch 2025',
      '// IISc Bangalore Research Selected',
      '// A commitment to innovation & sustainability',
    ];
    let pi = 0, ci = 0, typing = true;

    function tick() {
      const phrase = phrases[pi];
      if (typing) {
        ci++;
        el.textContent = phrase.slice(0, ci);
        if (ci >= phrase.length) {
          typing = false;
          setTimeout(tick, 2200);
          return;
        }
        setTimeout(tick, 55);
      } else {
        ci--;
        el.textContent = phrase.slice(0, ci);
        if (ci <= 0) {
          typing = true;
          pi = (pi + 1) % phrases.length;
          setTimeout(tick, 400);
          return;
        }
        setTimeout(tick, 28);
      }
    }
    setTimeout(tick, 1000);
  }

  /* ── TERMINAL ANIMATION ─────────────── */
  const termBody = document.getElementById('termBody');
  if (termBody) {
    const lines = [
      { cls:'tp',  text:'▶ ' },          { cls:'tc', text:'whoami' },
      { cls:'to',  text:'Ranjithkumar R  —  Civil + IT Engineer, KEC 2025' },
      { cls:'',    text:'' },
      { cls:'tp',  text:'▶ ' },          { cls:'tc', text:'cat expertise.txt' },
      { cls:'to',  text:'AutoCAD · Revit · Tekla · ArcGIS · MS Project' },
      { cls:'to',  text:'Python · C/C++ · React · Vite · HTML/CSS/JS' },
      { cls:'to',  text:'MIT App Inventor · Full Stack · Excel VBA' },
      { cls:'',    text:'' },
      { cls:'tp',  text:'▶ ' },          { cls:'tc', text:'git log --oneline --reverse' },
      { cls:'ta',  text:'c1a2b3  Self-Healing Concrete Research' },
      { cls:'ta',  text:'d4e5f6  E-Waste Partial Replacement in Concrete' },
      { cls:'ta',  text:'a7b8c9  Coconut Fibre for Sustainability' },
      { cls:'ta',  text:'f1e2d3  Complex Building Design & Estimation' },
      { cls:'ta',  text:'b5c6d7  Battery Monitor App — KEC Ideathon' },
      { cls:'ta',  text:'e8f9a0  Smart Attendance Recorder — KEC Ideathon' },
      { cls:'ta',  text:'c2d3e4  Activity Tracker Excel (450 live formulas)' },
      { cls:'',    text:'' },
      { cls:'tp',  text:'▶ ' },          { cls:'tc', text:'echo $STATUS' },
      { cls:'',    text:'',  green: true, status: true },
    ];

    let idx = 0;

    function addLine(lineObj) {
      if (lineObj.text === '' && !lineObj.status) {
        const br = document.createElement('div');
        br.className = 'term-line';
        br.innerHTML = '&nbsp;';
        termBody.appendChild(br);
        return;
      }

      if (lineObj.status) {
        const div = document.createElement('div');
        div.className = 'term-line';
        div.innerHTML = `<span class="tp">▶ </span><span class="tc">echo $STATUS</span>`;
        termBody.appendChild(div);
        setTimeout(() => {
          const out = document.createElement('div');
          out.className = 'term-line';
          out.innerHTML = `<span style="color:var(--accent-g)">✅ Available for opportunities · Open to relocation</span>`;
          termBody.appendChild(out);
          // cursor blink at end
          const cur = document.createElement('div');
          cur.className = 'term-line';
          cur.innerHTML = `<span class="tp">▶ </span><span class="cursor-blink"></span>`;
          termBody.appendChild(cur);
          termBody.scrollTop = termBody.scrollHeight;
        }, 400);
        return;
      }

      const div = document.createElement('div');
      div.className = 'term-line';

      // For prompt lines we join prompt + command
      if (lineObj.cls === 'tp') {
        // skip — next line handles combined
        return;
      }
      if (lineObj.cls === 'tc') {
        // Build prompt + command together
        const prev = lines[idx - 2];
        div.innerHTML = `<span class="tp">▶ </span><span class="tc">${lineObj.text}</span>`;
      } else {
        div.innerHTML = `<span class="${lineObj.cls}">${lineObj.text}</span>`;
      }

      termBody.appendChild(div);
      termBody.scrollTop = termBody.scrollHeight;
    }

    function runLines() {
      if (idx >= lines.length) return;
      const line = lines[idx];
      idx++;

      // Skip raw 'tp' prompts (handled with 'tc' pair)
      if (line.cls === 'tp' && idx < lines.length && lines[idx].cls === 'tc') {
        idx++; // skip tc too, will process combined
        addLine({ cls: 'tc', text: lines[idx - 1].text });
        setTimeout(runLines, 80);
        return;
      }

      addLine(line);

      const delay = line.cls === '' ? 60
                  : line.cls === 'tc' ? 90
                  : line.cls === 'ta' ? 70
                  : 50;
      setTimeout(runLines, delay);
    }

    setTimeout(runLines, 1400);
  }

  /* ── FLOATING PARTICLES ─────────────── */
  function rand(a, b) { return Math.floor(Math.random() * (b - a) + a); }

  const container = document.getElementById('heroParticles');
  if (container) {
    const COUNT = 28;
    for (let i = 0; i < COUNT; i++) {
      const p = document.createElement('div');
      const size  = Math.random() * 3 + 1;
      const x     = Math.random() * 100;
      const y     = Math.random() * 100;
      const dur   = Math.random() * 12 + 8;
      const delay = Math.random() * 8;
      const isOrange = Math.random() > 0.6;
      p.style.cssText = `
        position:absolute;
        left:${x}%;top:${y}%;
        width:${size}px;height:${size}px;
        background:${isOrange ? 'var(--accent-o)' : 'var(--accent-c)'};
        border-radius:50%;
        opacity:${Math.random() * 0.4 + 0.1};
        animation:float-p ${dur}s ${delay}s ease-in-out infinite alternate;
        pointer-events:none;
      `;
      container.appendChild(p);
    }

    // Inject keyframes once
    if (!document.getElementById('particleKF')) {
      const style = document.createElement('style');
      style.id = 'particleKF';
      style.textContent = `
        @keyframes float-p {
          0%   { transform: translate(0,0) scale(1); }
          33%  { transform: translate(${rand(-25,25)}px,${rand(-25,25)}px) scale(1.2); }
          66%  { transform: translate(${rand(-20,20)}px,${rand(-30,15)}px) scale(0.9); }
          100% { transform: translate(${rand(-15,15)}px,${rand(-20,20)}px) scale(1.1); }
        }
      `;
      document.head.appendChild(style);
    }
  }

})();
