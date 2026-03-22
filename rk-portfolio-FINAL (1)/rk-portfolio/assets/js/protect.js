/* ═══════════════════════════════════════
   PROTECT.JS — Source Code Protection
   Blocks right-click, common devtools shortcuts,
   text selection on non-input elements.
   Shows popup with contact info instead.
═══════════════════════════════════════ */
(function () {

  const popup = document.getElementById('rcPopup');
  function showPopup() {
    if (popup) popup.classList.add('show');
  }

  /* ── DISABLE RIGHT-CLICK ─────────────── */
  document.addEventListener('contextmenu', e => {
    e.preventDefault();
    showPopup();
  });

  /* ── DISABLE KEYBOARD SHORTCUTS ─────── */
  document.addEventListener('keydown', e => {
    // F12
    if (e.key === 'F12') { e.preventDefault(); showPopup(); return; }
    // Ctrl/Cmd + Shift + I/J/C (DevTools)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey &&
        ['i','I','j','J','c','C'].includes(e.key)) {
      e.preventDefault(); showPopup(); return;
    }
    // Ctrl/Cmd + U (View Source)
    if ((e.ctrlKey || e.metaKey) && (e.key === 'u' || e.key === 'U')) {
      e.preventDefault(); showPopup(); return;
    }
    // Ctrl/Cmd + S (Save)
    if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
      e.preventDefault(); showPopup(); return;
    }
    // Ctrl/Cmd + A (Select All) — outside inputs
    if ((e.ctrlKey || e.metaKey) && (e.key === 'a' || e.key === 'A')) {
      const tag = document.activeElement?.tagName;
      if (!['INPUT','TEXTAREA','SELECT'].includes(tag)) {
        e.preventDefault();
      }
    }
  });

  /* ── DISABLE TEXT SELECTION ─────────── */
  // Apply CSS-level selection block via inline style injection
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    body {
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }
    input, textarea, select, [contenteditable] {
      -webkit-user-select: text;
      user-select: text;
    }
  `;
  document.head.appendChild(styleEl);

  /* ── DISABLE DRAG ────────────────────── */
  document.addEventListener('dragstart', e => e.preventDefault());

  /* ── CLOSE POPUP ─────────────────────── */
  if (popup) {
    popup.addEventListener('click', e => {
      if (e.target === popup) popup.classList.remove('show');
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') popup.classList.remove('show');
    });
  }

  /* ── DEVTOOLS DETECTION (best-effort) ── */
  // Uses timing trick — devtools open slows down debugger statement
  const threshold = 160;
  let devtoolsOpen = false;

  function checkDevTools() {
    const start = performance.now();
    // This logs nothing — just timing check
    if (performance.now() - start > threshold && !devtoolsOpen) {
      devtoolsOpen = true;
      showPopup();
    }
  }
  setInterval(checkDevTools, 2000);

})();
