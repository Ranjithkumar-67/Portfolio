/* ═══════════════════════════════════════
   CURSOR.JS — Custom Animated Cursor
═══════════════════════════════════════ */
(function () {
  const ring = document.getElementById('curRing');
  const dot  = document.getElementById('curDot');
  if (!ring || !dot) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  // Move dot instantly, ring follows with lag
  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  // Smooth ring animation loop
  (function animLoop() {
    rx += (mx - rx) * 0.13;
    ry += (my - ry) * 0.13;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animLoop);
  })();

  // Expand ring on interactive elements
  const hoverEls = 'a, button, .proj-card, .cert-card, .tl-item, .tab-btn, .hl-item, .res-card, .edu-card, .role-pill, input, textarea, select';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(hoverEls)) ring.classList.add('big');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(hoverEls)) ring.classList.remove('big');
  });

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    ring.style.opacity = '0';
    dot.style.opacity  = '0';
  });
  document.addEventListener('mouseenter', () => {
    ring.style.opacity = '1';
    dot.style.opacity  = '1';
  });
})();
