/* ═══════════════════════════════════════
   NAV.JS — Navigation Behavior
═══════════════════════════════════════ */
(function () {
  const nav       = document.getElementById('mainNav');
  const navLinks  = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  const allLinks  = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections  = document.querySelectorAll('section[id]');

  /* ── HAMBURGER TOGGLE ──────────────── */
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close menu on link click (mobile)
  allLinks.forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!nav.contains(e.target)) {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    }
  });

  /* ── SCROLL: NAV BACKGROUND ─────────── */
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.style.boxShadow = '0 4px 32px rgba(0,0,0,0.35)';
    } else {
      nav.style.boxShadow = 'none';
    }
  }, { passive: true });

  /* ── ACTIVE LINK ON SCROLL ──────────── */
  const obsOpts = { rootMargin: '-45% 0px -50% 0px', threshold: 0 };
  const navObs  = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        allLinks.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, obsOpts);

  sections.forEach(s => navObs.observe(s));
})();
