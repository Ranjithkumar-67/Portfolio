/* ═══════════════════════════════════════
   THEME.JS — Dark / Light Toggle
═══════════════════════════════════════ */
(function () {
  const html   = document.documentElement;
  const btn    = document.getElementById('themeToggle');
  const icon   = document.getElementById('themeIcon');
  const label  = document.getElementById('themeLabel');
  const KEY    = 'rk-theme';

  function applyTheme(theme) {
    html.dataset.theme = theme;
    if (theme === 'light') {
      icon.textContent  = '🌙';
      label.textContent = 'DARK';
    } else {
      icon.textContent  = '☀';
      label.textContent = 'LIGHT';
    }
    localStorage.setItem(KEY, theme);
  }

  // Load saved preference
  const saved = localStorage.getItem(KEY);
  if (saved) applyTheme(saved);

  // Toggle on click
  btn.addEventListener('click', () => {
    const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  });
})();
