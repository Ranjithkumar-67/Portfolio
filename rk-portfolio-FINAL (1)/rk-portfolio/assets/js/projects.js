/* ═══════════════════════════════════════
   PROJECTS.JS — Project Cards + Tab Filter
═══════════════════════════════════════ */
(function () {

  const tabsEl  = document.getElementById('projTabs');
  const gridEl  = document.getElementById('projGrid');
  if (!tabsEl || !gridEl || !RK.projects) return;

  const TABS = [
    { cat: 'all',      label: '⬡ All' },
    { cat: 'civil',    label: '🏗 Civil' },
    { cat: 'it',       label: '💻 IT / Software' },
    { cat: 'ai',       label: '🤖 AI · Excel · Tools' },
    { cat: 'general',  label: '🌐 Events' },
    { cat: 'personal', label: '👤 Personal' },
  ];

  /* ── BUILD TABS ─────────────────────── */
  TABS.forEach(tab => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (tab.cat === 'all' ? ' active' : '');
    btn.dataset.cat = tab.cat;
    btn.textContent = tab.label;
    tabsEl.appendChild(btn);
  });

  /* ── BUILD CARDS ────────────────────── */
  RK.projects.forEach((proj, i) => {
    const card = document.createElement('div');
    card.className = 'proj-card rv' + (i % 3 === 1 ? ' d1' : i % 3 === 2 ? ' d2' : '');
    if (proj.personal) card.classList.add('personal');
    card.dataset.cat = proj.cat;

    const tagsHtml = proj.tags.length
      ? `<div class="proj-tags">${proj.tags.map(t => `<span class="ptag">${t}</span>`).join('')}</div>`
      : '';

    const descHtml = proj.desc
      ? `<div class="proj-desc">${proj.desc}</div>`
      : '';

    card.innerHTML = `
      <div class="proj-num">${proj.num}</div>
      <div class="proj-title">${proj.title}</div>
      ${descHtml}
      ${tagsHtml}
      <a href="${proj.link}" class="proj-link" ${proj.link !== '#' ? 'target="_blank" rel="noopener"' : ''}>${proj.linkText} <span class="proj-arr">→</span></a>
    `;
    gridEl.appendChild(card);
  });

  /* ── TAB FILTER LOGIC ───────────────── */
  const allCards = Array.from(gridEl.querySelectorAll('.proj-card'));

  function filterCards(cat) {
    allCards.forEach(card => {
      if (cat === 'all' || card.dataset.cat === cat) {
        card.style.display = '';
        // Re-trigger reveal
        setTimeout(() => card.classList.add('on'), 10);
      } else {
        card.style.display = 'none';
        card.classList.remove('on');
      }
    });
  }

  tabsEl.addEventListener('click', e => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;

    tabsEl.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterCards(btn.dataset.cat);
  });

  // Show all on load
  filterCards('all');

  /* ── PROJ LINK ARROW HOVER ──────────── */
  gridEl.addEventListener('mouseover', e => {
    const link = e.target.closest('.proj-link');
    if (link) {
      const arr = link.querySelector('.proj-arr');
      if (arr) arr.style.transform = 'translateX(5px)';
    }
  });
  gridEl.addEventListener('mouseout', e => {
    const link = e.target.closest('.proj-link');
    if (link) {
      const arr = link.querySelector('.proj-arr');
      if (arr) arr.style.transform = '';
    }
  });

})();
