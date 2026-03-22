/* ═══════════════════════════════════════
   REVEAL.JS — Scroll Reveal Animation
═══════════════════════════════════════ */
(function () {

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('on');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -30px 0px'
  });

  // Observe all .rv elements (including dynamically added ones)
  function observeAll() {
    document.querySelectorAll('.rv:not(.on)').forEach(el => obs.observe(el));
  }

  // Initial observe
  observeAll();

  // Re-observe after JS renders dynamic content
  // Use a MutationObserver to catch newly added .rv elements
  const mutObs = new MutationObserver(() => observeAll());
  mutObs.observe(document.body, { childList: true, subtree: true });

  // Also observe after small delay for any late renders
  setTimeout(observeAll, 600);
  setTimeout(observeAll, 1200);

})();
