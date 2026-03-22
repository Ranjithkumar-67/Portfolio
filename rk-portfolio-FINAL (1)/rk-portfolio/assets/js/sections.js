/* ═══════════════════════════════════════
   SECTIONS.JS — Render All Data Sections
   (Skills, Research, Timeline, Education, Certs, Contact)
═══════════════════════════════════════ */
(function () {

  /* ── SKILLS TABLE ───────────────────── */
  const skillsBody = document.getElementById('skillsBody');
  if (skillsBody && RK.skills) {
    RK.skills.forEach((row, i) => {
      const chips = row.skills.map(s =>
        `<span class="sk ${s.c}">${s.n}</span>`
      ).join('');

      const domainChip = `<span class="sk ${
        row.domain === 'Engineering' ? 'o' :
        row.domain === 'IT'          ? 'c' :
        row.domain === 'Research'    ? 'p' :
        row.domain === 'General'     ? 'g' : ''
      }">${row.domain}</span>`;

      const tr = document.createElement('tr');
      tr.className = 'rv' + (i % 2 === 1 ? ' d1' : '');
      tr.innerHTML = `
        <td>${row.cat}</td>
        <td><div class="sk-chips">${chips}</div></td>
        <td>
          <div class="lvl-bar">
            <div class="lvl-track">
              <div class="lvl-fill" data-w="${row.level}" style="width:0%"></div>
            </div>
            <span class="lvl-lbl">${row.levelLabel}</span>
          </div>
        </td>
        <td>${domainChip}</td>
      `;
      skillsBody.appendChild(tr);
    });

    // Animate level bars on scroll
    const barObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.lvl-fill').forEach(f => {
            f.style.width = f.dataset.w + '%';
          });
          barObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });
    skillsBody.querySelectorAll('tr').forEach(r => barObs.observe(r));
  }

  /* ── RESEARCH PAPERS ────────────────── */
  const papersWrap = document.getElementById('researchPapers');
  if (papersWrap && RK.papers) {
    RK.papers.forEach((p, i) => {
      const div = document.createElement('div');
      div.className = 'res-card rv' + (i > 0 ? ' d' + i : '');
      div.innerHTML = `
        <div class="res-type">${p.type}</div>
        <div class="res-title">${p.title}</div>
        <div class="res-venue">${p.venue.replace(/\n/g,'<br>')}</div>
        <span class="res-badge">${p.badge}</span>
      `;
      papersWrap.appendChild(div);
    });
  }

  /* ── RESEARCH AREAS TABLE ───────────── */
  const resAreaBody = document.getElementById('resAreaBody');
  if (resAreaBody && RK.resAreas) {
    RK.resAreas.forEach((r, i) => {
      const statusColor =
        r.sc === 'g' ? 'var(--accent-g)' :
        r.sc === 'c' ? 'var(--accent-c)' :
        r.sc === 'o' ? 'var(--accent-o)' : 'var(--text-2)';
      const tr = document.createElement('tr');
      tr.className = 'rv' + (i % 2 === 1 ? ' d1' : '');
      tr.innerHTML = `
        <td>${r.area}</td>
        <td>${r.domain}</td>
        <td>${r.focus}</td>
        <td style="color:${statusColor};font-family:var(--f-mono);font-size:0.75rem;">${r.status}</td>
      `;
      resAreaBody.appendChild(tr);
    });
  }

  /* ── TIMELINE ───────────────────────── */
  const timelineEl = document.getElementById('timeline');
  if (timelineEl && RK.timeline) {
    RK.timeline.forEach((item, i) => {
      const div = document.createElement('div');
      div.className = 'tl-item rv' + (' d' + Math.min(i % 4, 3));
      div.innerHTML = `
        <div class="tl-period">${item.period}</div>
        <div class="tl-role">${item.role}</div>
        <div class="tl-org">${item.org}</div>
      `;
      timelineEl.appendChild(div);
    });
  }

  /* ── EDUCATION ──────────────────────── */
  const eduGrid = document.getElementById('eduGrid');
  if (eduGrid && RK.edu) {
    RK.edu.forEach((e, i) => {
      const div = document.createElement('div');
      div.className = 'edu-card rv' + (i > 0 ? ' d' + i : '');
      div.innerHTML = `
        <div class="edu-yr">${e.yr}</div>
        <div class="edu-inst">${e.inst}</div>
        <div class="edu-deg">${e.deg}</div>
        <div class="edu-score">${e.score}<span> ${e.scoreUnit}</span></div>
      `;
      eduGrid.appendChild(div);
    });
  }

  /* ── CERTIFICATIONS ─────────────────── */
  const certsGrid = document.getElementById('certsGrid');
  if (certsGrid && RK.certs) {
    RK.certs.forEach((c, i) => {
      const div = document.createElement('div');
      div.className = 'cert-card rv' + (' d' + Math.min(i % 4, 3));
      div.innerHTML = `
        <div class="cert-icon">${c.icon}</div>
        <div>
          <div class="cert-name">${c.name}</div>
          <div class="cert-by">${c.by}</div>
        </div>
      `;
      certsGrid.appendChild(div);
    });
  }

  /* ── CONTACT LINKS ──────────────────── */
  const clWrap = document.getElementById('contactLinks');
  if (clWrap && RK.contactLinks) {
    RK.contactLinks.forEach(link => {
      const li = document.createElement('li');
      li.className = 'cl-item';
      li.innerHTML = `
        <span class="cl-type">${link.type}</span>
        <span class="cl-val"><a href="${link.href}" ${link.href.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>${link.val}</a></span>
      `;
      clWrap.appendChild(li);
    });
  }

})();
