/* ═══════════════════════════════════════
   POPUP.JS — Welcome + Right-Click Popups
═══════════════════════════════════════ */
(function () {

  /* ── WELCOME POPUP ──────────────────── */
  const welcomePopup = document.getElementById('welcomePopup');
  const enterBtn     = document.getElementById('welcomeEnter');
  const VISIT_KEY    = 'rk-visited';

  function dismissWelcome() {
    if (!welcomePopup) return;
    welcomePopup.classList.add('hide');
    setTimeout(() => {
      welcomePopup.style.display = 'none';
      document.body.style.overflow = '';
    }, 500);
    sessionStorage.setItem(VISIT_KEY, '1');
  }

  // Only show once per session
  if (welcomePopup) {
    if (sessionStorage.getItem(VISIT_KEY)) {
      welcomePopup.style.display = 'none';
    } else {
      document.body.style.overflow = 'hidden';

      // Auto-dismiss after 8 seconds
      setTimeout(dismissWelcome, 8000);

      enterBtn?.addEventListener('click', dismissWelcome);

      // Click outside inner box to close
      welcomePopup.addEventListener('click', e => {
        if (e.target === welcomePopup) dismissWelcome();
      });
    }
  }

  /* ── RIGHT-CLICK / PROTECT POPUP ────── */
  // (popup itself is initialized in protect.js)
  // Close on Escape — already handled in protect.js
  // Additional: auto-close after 6s
  const rcPopup = document.getElementById('rcPopup');
  if (rcPopup) {
    const origShow = rcPopup.classList.add.bind(rcPopup);
    // Monitor when popup gets shown
    const popObs = new MutationObserver(() => {
      if (rcPopup.classList.contains('show')) {
        clearTimeout(rcPopup._timer);
        rcPopup._timer = setTimeout(() => {
          rcPopup.classList.remove('show');
        }, 6000);
      }
    });
    popObs.observe(rcPopup, { attributes: true, attributeFilter: ['class'] });
  }

  /* ── RECRUITER ATTENTION EFFECT ─────── */
  // Page title flashes when tab is inactive
  const originalTitle = document.title;
  let blinkInterval;

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      let toggle = false;
      blinkInterval = setInterval(() => {
        document.title = toggle
          ? '👋 Come Back! — Ranjithkumar R'
          : '⚡ Great Portfolio Awaits!';
        toggle = !toggle;
      }, 1200);
    } else {
      clearInterval(blinkInterval);
      document.title = originalTitle;
    }
  });

  /* ── SCROLL PROGRESS BAR ────────────── */
  const progressBar = document.createElement('div');
  progressBar.id = 'scrollProgress';
  progressBar.style.cssText = `
    position:fixed; top:0; left:0; height:3px; width:0%;
    background:linear-gradient(90deg,var(--accent-c),var(--accent-o));
    z-index:9998; transition:width 0.1s linear;
    box-shadow:0 0 8px var(--accent-c);
  `;
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const scrolled  = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const pct       = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0;
    progressBar.style.width = pct + '%';
  }, { passive: true });

  /* ── BACK TO TOP BUTTON ─────────────── */
  const topBtn = document.createElement('button');
  topBtn.innerHTML = '↑';
  topBtn.id = 'backToTop';
  topBtn.title = 'Back to top';
  topBtn.style.cssText = `
    position:fixed; bottom:2rem; right:2rem; z-index:400;
    width:44px; height:44px; border-radius:50%;
    background:var(--accent-c); color:var(--bg-0);
    border:none; font-size:1.1rem; font-weight:700;
    cursor:pointer; opacity:0; transform:translateY(20px);
    transition:opacity 0.3s, transform 0.3s;
    box-shadow:var(--glow-c);
    font-family:var(--f-display);
  `;
  document.body.appendChild(topBtn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      topBtn.style.opacity = '1';
      topBtn.style.transform = 'translateY(0)';
    } else {
      topBtn.style.opacity = '0';
      topBtn.style.transform = 'translateY(20px)';
    }
  }, { passive: true });

  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

})();
