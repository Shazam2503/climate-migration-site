/* ============================================================
   CLIMATE CHANGE & FORCED MIGRATION — SCRIPT v2
   ============================================================ */

'use strict';

/* ============================================================
   WORD CLOUD
   ============================================================ */

const cloudWords = [
  { text: 'Climate Refugees',     size: 5, colour: 'dark'  },
  { text: 'Forced Migration',     size: 5, colour: 'green' },
  { text: 'Displacement',         size: 5, colour: 'dark'  },
  { text: 'Crisis',               size: 5, colour: 'green' },
  { text: 'Climate',              size: 4, colour: 'dark'  },
  { text: 'Flooding',             size: 4, colour: 'green' },
  { text: 'Drought',              size: 4, colour: 'dark'  },
  { text: 'Human Rights',         size: 4, colour: 'grey'  },
  { text: 'Vulnerability',        size: 4, colour: 'green' },
  { text: 'Sustainability',       size: 4, colour: 'dark'  },
  { text: 'Refugees',             size: 4, colour: 'grey'  },
  { text: 'Adaptation',           size: 4, colour: 'green' },
  { text: 'Relocation',           size: 3, colour: 'dark'  },
  { text: 'Environmental Justice', size: 3, colour: 'green' },
  { text: 'Human Mobility',       size: 3, colour: 'grey'  },
  { text: 'Rising Seas',          size: 3, colour: 'dark'  },
  { text: 'Migration Flow',       size: 3, colour: 'green' },
  { text: 'Policy',               size: 3, colour: 'dark'  },
  { text: 'Shelter',              size: 3, colour: 'grey'  },
  { text: 'Resettlement',         size: 3, colour: 'green' },
  { text: 'Coastal Erosion',      size: 2, colour: 'grey'  },
  { text: 'Wildfires',            size: 2, colour: 'dark'  },
  { text: 'Host Country',         size: 2, colour: 'green' },
  { text: 'Border',               size: 2, colour: 'grey'  },
  { text: 'Legal Status',         size: 2, colour: 'dark'  },
  { text: 'Food Security',        size: 2, colour: 'green' },
  { text: 'Resource Stress',      size: 2, colour: 'grey'  },
  { text: 'Loss of Habitat',      size: 1, colour: 'grey'  },
  { text: 'Climate Security',     size: 1, colour: 'dark'  },
  { text: 'Migration Patterns',   size: 1, colour: 'green' },
  { text: 'Socioeconomic',        size: 1, colour: 'grey'  },
  { text: 'Community Planning',   size: 1, colour: 'dark'  },
  { text: 'Humanitarian',         size: 1, colour: 'green' },
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const wcCloud   = document.getElementById('wc-cloud');
const wcOverlay = document.getElementById('wc-overlay');
const wcHint    = document.getElementById('wc-hint');

if (wcCloud) {
  shuffle(cloudWords).forEach(word => {
    const span = document.createElement('span');
    span.className = `wc-word wc-word--${word.size} wc-word--${word.colour}`;
    span.textContent = word.text;
    wcCloud.appendChild(span);
  });
}

if (wcOverlay) {
  wcOverlay.addEventListener('click', () => {
    wcOverlay.classList.add('revealed');
    if (wcHint) wcHint.style.opacity = '0';
    setTimeout(() => { wcOverlay.style.display = 'none'; }, 1700);
  });
}

/* ============================================================
   MOBILE NAV TOGGLE
   ============================================================ */
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ============================================================
   READING SUMMARY — SUBSECTION 1: Concept flip boxes
   ============================================================ */
const conceptBoxes = [
  { title: 'Home',                  text: 'Home is not just a location. It includes identity, memory, and ways of living tied to specific environments.' },
  { title: 'Place Attachment',      text: 'Deep relationships between people and land, built through cultural practices, livelihoods, and intergenerational knowledge.' },
  { title: 'Solastalgia',           text: 'Distress experienced when familiar environments are altered, even if people remain physically in place.' },
  { title: 'Environmental Justice', text: 'Climate impacts are uneven. Those least responsible often face the greatest risks and least support.' },
  { title: 'Forced Migration',      text: 'Displacement driven by environmental change where staying is no longer possible, but leaving creates loss beyond the physical.' },
  { title: 'Indigenous Knowledge',  text: 'Understands land as relational and interconnected, not as a resource to be owned or exploited.' },
];

const rsConceptGrid = document.getElementById('rs-concept-grid');
if (rsConceptGrid) {
  conceptBoxes.forEach(box => {
    const el = document.createElement('div');
    el.className = 'rs-concept-box';
    el.innerHTML = `
      <div class="rs-concept-box__inner">
        <div class="rs-concept-box__front">
          <p class="rs-concept-box__front-title">${box.title}</p>
          <p class="rs-concept-box__front-hint">tap to reveal</p>
        </div>
        <div class="rs-concept-box__back">
          <p class="rs-concept-box__back-text">${box.text}</p>
        </div>
      </div>`;
    el.addEventListener('click', () => el.classList.toggle('flipped'));
    rsConceptGrid.appendChild(el);
  });
}

/* ============================================================
   READING SUMMARY — SUBSECTION 2: Case study bullet lists
   ============================================================ */
const caseStudyPoints = [
  'Coastal erosion and sea-level rise are rapidly reducing land',
  'Approximately 90% of original land has already been lost',
  'Increasing pressure to relocate entire communities',
  'Relocation framed as a technical "solution" or adaptation strategy',
  'Limited government support because relocation is not considered economically viable',
];

const impactPoints = [
  'Land is central to food systems, including hunting and ecological knowledge',
  'Cultural practices are tied to specific landscapes and cannot be relocated',
  'Knowledge systems depend on relationships with animals, seasons, and place',
  'Loss of land disrupts intergenerational knowledge transfer',
  'Community identity is inseparable from environment',
  'Emotional impacts include grief, anxiety, and disorientation',
  'Solastalgia emerges as environments change but people remain',
  'Displacement is experienced not just as movement, but as loss of meaning and belonging',
];

function renderBulletList(id, items) {
  const ul = document.getElementById(id);
  if (!ul) return;
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });
}

renderBulletList('rs-case-list',   caseStudyPoints);
renderBulletList('rs-impact-list', impactPoints);

/* ============================================================
   READING SUMMARY — SUBSECTION 3: Radial spoke diagram
   ============================================================ */
const spokeNodes = [
  { label: 'Neoliberal Capitalism',          text: 'Prioritises profit and market solutions. Environmental harm continues because industries and global trade are economically incentivised.' },
  { label: 'Unequal Impacts',                text: 'Wealthy countries and corporations benefit, while vulnerable communities face environmental damage and are more likely to be displaced.' },
  { label: 'Commodification of Nature',      text: 'Land, water, and resources are treated as economic assets. This drives extraction, environmental degradation, and dispossession.' },
  { label: 'Colonial Histories',             text: 'Many vulnerable regions were historically exploited, creating long-term inequalities that shape present climate vulnerability.' },
  { label: 'State Restructuring',            text: 'Governments support markets and industries rather than directly protecting communities, limiting effective adaptation.' },
  { label: 'Depoliticisation of\nClimate Change', text: 'Climate change is framed as a technical issue (carbon, data), which hides deeper political and economic causes.' },
];

const rsDiagram = document.getElementById('rs-diagram');
const rsDiagramMobile = document.getElementById('rs-diagram-mobile');

/* ── Desktop radial layout ── */
if (rsDiagram) {
  /* SVG spoke lines */
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.classList.add('rs-diagram__svg');
  rsDiagram.appendChild(svg);

  /* Reveal panel */
  const revealPanel = document.createElement('div');
  revealPanel.className = 'rs-spoke-reveal';
  revealPanel.innerHTML = `<div class="rs-spoke-reveal__inner">
    <p class="rs-spoke-reveal__name" id="rs-reveal-name"></p>
    <p class="rs-spoke-reveal__text" id="rs-reveal-text"></p>
  </div>`;
  rsDiagram.parentElement.appendChild(revealPanel);

  const revealName = document.getElementById('rs-reveal-name');
  const revealText = document.getElementById('rs-reveal-text');

  let activeBtn = null;

  spokeNodes.forEach((node, i) => {
    const total  = spokeNodes.length;
    /* Start at -90° (top) so first node is at 12 o'clock */
    const angleDeg = -90 + (i / total) * 360;
    const angleRad = (angleDeg * Math.PI) / 180;
    /* Radius as % of container (50% = edge) — nodes sit at 78% */
    const r  = 38;   /* % from centre */
    const cx = 50 + r * Math.cos(angleRad);
    const cy = 50 + r * Math.sin(angleRad);

    /* Spoke line */
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', '50%');
    line.setAttribute('y1', '50%');
    line.setAttribute('x2', `${cx}%`);
    line.setAttribute('y2', `${cy}%`);
    svg.appendChild(line);

    /* Node button */
    const nodeEl = document.createElement('div');
    nodeEl.className = 'rs-spoke-node';
    nodeEl.style.left = `${cx}%`;
    nodeEl.style.top  = `${cy}%`;

    const btn = document.createElement('button');
    btn.className = 'rs-spoke-node__btn';
    btn.setAttribute('aria-expanded', 'false');

    const labelSpan = document.createElement('span');
    labelSpan.className = 'rs-spoke-node__label';
    labelSpan.textContent = node.label.replace('\n', ' ');
    btn.appendChild(labelSpan);
    nodeEl.appendChild(btn);
    rsDiagram.appendChild(nodeEl);

    btn.addEventListener('click', () => {
      const isActive = btn.classList.contains('active');
      /* Reset all */
      rsDiagram.querySelectorAll('.rs-spoke-node__btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-expanded', 'false');
      });
      if (isActive) {
        revealPanel.classList.remove('visible');
        activeBtn = null;
      } else {
        btn.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        revealName.textContent = node.label.replace('\n', ' ');
        revealText.textContent = node.text;
        revealPanel.classList.add('visible');
        activeBtn = btn;
      }
    });
  });
}

/* ── Mobile list fallback ── */
if (rsDiagramMobile) {
  spokeNodes.forEach(node => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.innerHTML = `<span>${node.label.replace('\n', ' ')}</span>`;

    const reveal = document.createElement('div');
    reveal.className = 'rs-diagram-mobile__reveal';
    reveal.textContent = node.text;

    btn.addEventListener('click', () => {
      const open = btn.classList.toggle('active');
      reveal.classList.toggle('visible', open);
      /* Close siblings */
      rsDiagramMobile.querySelectorAll('button').forEach(b => {
        if (b !== btn) {
          b.classList.remove('active');
          b.nextElementSibling.classList.remove('visible');
        }
      });
    });

    li.appendChild(btn);
    li.appendChild(reveal);
    rsDiagramMobile.appendChild(li);
  });
}

/* ============================================================
   NEWS ARTICLE SECTION — Tuvalu pathway cards
   ============================================================ */
const naCards = [
  {
    icon:  '🏝️',
    title: 'Tuvalu',
    text:  'Tuvalu is a small Pacific Island state of 9 low-lying atolls, with a population of around 11,000. With an average elevation of under 2 metres, it is highly vulnerable to rising sea levels. For Tuvaluans, land is not just physical territory but central to identity, culture, and spiritual life.'
  },
  {
    icon:  '🌊',
    title: 'Climate Threat',
    text:  'Rising seas, coastal erosion, and intensifying storms are already reshaping the islands. Saltwater intrusion is damaging crops and freshwater sources, undermining everyday life. Projections suggest large parts of Tuvalu may become uninhabitable within decades.'
  },
  {
    icon:  '🁢',
    title: 'Climate Domino Effect',
    text:  'Environmental change triggers a cascade of impacts, from loss of land to loss of livelihoods and increasing uncertainty. Climate change therefore operates as a chain reaction that gradually pushes communities towards displacement.',
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4" width="4" height="16" rx="1" fill="#2F5D50"/><rect x="10" y="8" width="4" height="12" rx="1" fill="#3d7a68"/><rect x="17" y="12" width="4" height="8" rx="1" fill="#8a9a95"/></svg>`
  },
  {
    icon:  '🛂',
    title: 'Australia–Tuvalu Visa Pathway',
    text:  'Australia has introduced a migration pathway allowing up to 280 Tuvaluans per year to relocate. The scheme is framed as enabling "mobility with dignity," offering a planned form of relocation rather than sudden displacement.'
  },
  {
    icon:  '👥',
    title: 'Lived Realities of Relocation',
    text:  'Relocation extends beyond physical movement. Among those selected are individuals such as a pastor whose role is to help maintain spiritual and cultural ties even after leaving the homeland. This reflects how displacement involves the ongoing effort to preserve identity in unfamiliar environments.'
  },
  {
    icon:  '👥',
    title: 'Demand and Limitations',
    text:  'More than 3,000 people applied in the initial intake — nearly one third of the population. With only 280 visas available each year and selection determined by lottery, many remain without access to relocation.'
  },
  {
    icon:  '📝',
    title: 'Framing and Recognition Gap',
    text:  'While the scheme responds directly to environmental vulnerability, the term "climate change" is not explicitly used in official documentation. This reflects a broader issue: people displaced by climate change are not formally recognised as refugees under international law.'
  },
  {
    icon:  '🁢',
    title: 'Broader Implication',
    text:  'This creates a contradiction where people are forced to leave their homes due to environmental change, yet remain legally unrecognised as "climate refugees." Displacement involves not only physical loss of place, but also a lack of formal recognition of that loss.',
    icon: '🌍',
    iconSvg: null
  },
];

const naPathway = document.getElementById('na-pathway');
if (naPathway) {
  const arrowSVG = `<svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M6 14h16M16 8l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  naCards.forEach((card, i) => {
    /* Card element */
    const el = document.createElement('div');
    el.className = 'na-card';

    const iconHTML = card.iconSvg
      ? `<div class="na-card__icon">${card.iconSvg}</div>`
      : `<div class="na-card__icon">${card.icon}</div>`;

    el.innerHTML = `
      <p class="na-card__num">${String(i + 1).padStart(2, '0')}</p>
      ${iconHTML}
      <h3 class="na-card__title">${card.title}</h3>
      <p  class="na-card__text">${card.text}</p>`;

    naPathway.appendChild(el);

    /* Arrow between cards (not after last) */
    if (i < naCards.length - 1) {
      const arrow = document.createElement('div');
      arrow.className = 'na-arrow';
      arrow.innerHTML = arrowSVG;
      naPathway.appendChild(arrow);
    }
  });
}

/* ============================================================
   ACTIVITY — Spin the wheel
   ============================================================ */

const actSegmentData = [
  {
    text:      'Mobility with dignity',
    color:     '#2F5D50',
    textColor: '#F7F6F2',
    statement: 'Mobility with dignity',
    prompts:   ['Framing', 'Choice vs force', 'Loss'],
  },
  {
    text:      'Climate migrants are not legally recognised as refugees',
    color:     '#C47C3A',
    textColor: '#F7F6F2',
    statement: 'Climate migrants are not legally recognised as refugees',
    prompts:   ['Legal gap', 'Protection', 'Recognition', 'Responsibility'],
  },
  {
    text:      'Relocation as adaptation',
    color:     '#4A6FA5',
    textColor: '#F7F6F2',
    statement: 'Relocation as adaptation',
    prompts:   ['Inevitable', 'Managed', 'Alternatives', 'Power'],
  },
];

/* ── Render prompt words ── */
const actPrompts = document.getElementById('act-prompts');
if (actPrompts) {
  actSegmentData.forEach(seg => {
    const group = document.createElement('div');
    group.className = 'act-prompt-group';
    group.innerHTML = `
      <p class="act-prompt-statement">${seg.statement}</p>
      <div class="act-prompt-words">
        ${seg.prompts.map(p => `<span class="act-prompt-tag">${p}</span>`).join('')}
      </div>`;
    actPrompts.appendChild(group);
  });
}

/* ── Canvas wheel ── */
const actCanvas = document.getElementById('act-canvas');
if (actCanvas) {
  const ctx      = actCanvas.getContext('2d');
  const SEG      = actSegmentData.length;
  const ARC      = (2 * Math.PI) / SEG;

  let rotation        = Math.random() * 2 * Math.PI; /* random start orientation */
  let angularVelocity = 0;
  let wheelState      = 'idle'; /* 'idle' | 'spinning' | 'stopping' */
  let rafId           = null;

  const STOP_FRICTION  = 0.976; /* deceleration factor per frame when stopping */
  const STOP_THRESHOLD = 0.0006;

  /* ── Wrapped text helper ── */
  function drawWrappedText(context, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line  = '';
    const lines = [];
    for (const word of words) {
      const test = line + word + ' ';
      if (context.measureText(test).width > maxWidth && line) {
        lines.push(line.trimEnd());
        line = word + ' ';
      } else {
        line = test;
      }
    }
    if (line.trim()) lines.push(line.trimEnd());

    const totalH = lines.length * lineHeight;
    let curY = y - totalH / 2 + lineHeight * 0.5;
    lines.forEach(l => { context.fillText(l, x, curY); curY += lineHeight; });
  }

  /* ── Draw the wheel ── */
  function drawWheel() {
    const W  = actCanvas.width;
    const H  = actCanvas.height;
    const cx = W / 2;
    const cy = H / 2;
    const R  = Math.min(cx, cy) - 14;

    ctx.clearRect(0, 0, W, H);

    /* Segments */
    actSegmentData.forEach((seg, i) => {
      const startAngle = rotation + i * ARC - Math.PI / 2;
      const endAngle   = startAngle + ARC;
      const midAngle   = startAngle + ARC / 2;

      /* Fill segment */
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, R, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = seg.color;
      ctx.fill();

      /* Segment border */
      ctx.strokeStyle = '#fff';
      ctx.lineWidth   = 3;
      ctx.stroke();

      /* Text — radial, from centre outward */
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(midAngle);
      ctx.translate(R * 0.52, 0);  /* move along radius */
      ctx.rotate(Math.PI / 2);     /* rotate so text reads outward → inward arc */
      ctx.textAlign    = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle    = seg.textColor;
      ctx.font         = 'bold 12px Inter, system-ui, sans-serif';

      const maxTextW = R * 0.78;
      drawWrappedText(ctx, seg.text, 0, 0, maxTextW, 16);
      ctx.restore();
    });

    /* Outer ring */
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, 2 * Math.PI);
    ctx.strokeStyle = '#fff';
    ctx.lineWidth   = 3;
    ctx.stroke();

    /* Centre hub */
    ctx.beginPath();
    ctx.arc(cx, cy, 16, 0, 2 * Math.PI);
    ctx.fillStyle   = '#fff';
    ctx.fill();
    ctx.strokeStyle = '#e0ddd5';
    ctx.lineWidth   = 1.5;
    ctx.stroke();

    /* Needle — fixed at 12 o'clock, pointing downward */
    const nx = cx;
    const ny = cy - R - 2;
    ctx.beginPath();
    ctx.moveTo(nx - 11, ny - 20);
    ctx.lineTo(nx + 11, ny - 20);
    ctx.lineTo(nx,      ny + 4);
    ctx.closePath();
    ctx.fillStyle   = '#1A1A1A';
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth   = 1.5;
    ctx.stroke();
  }

  /* ── Animation loop ── */
  function animate() {
    if (wheelState === 'spinning') {
      rotation += angularVelocity;
    } else if (wheelState === 'stopping') {
      angularVelocity *= STOP_FRICTION;
      rotation        += angularVelocity;
      if (angularVelocity < STOP_THRESHOLD) {
        angularVelocity = 0;
        wheelState      = 'idle';
        cancelAnimationFrame(rafId);
        rafId = null;
        drawWheel();
        return;
      }
    }
    drawWheel();
    rafId = requestAnimationFrame(animate);
  }

  /* ── Button wiring ── */
  const startBtn = document.getElementById('act-start');
  const stopBtn  = document.getElementById('act-stop');

  if (startBtn) {
    startBtn.addEventListener('click', () => {
      if (wheelState !== 'idle') return;
      /* Random speed between ~1.8 and 3 rev/s at 60fps */
      angularVelocity = 0.065 + Math.random() * 0.055;
      wheelState = 'spinning';
      if (!rafId) rafId = requestAnimationFrame(animate);
    });
  }

  if (stopBtn) {
    stopBtn.addEventListener('click', () => {
      if (wheelState === 'spinning') wheelState = 'stopping';
    });
  }

  /* Initial draw */
  drawWheel();
}

/* ============================================================
   CAUSE CARDS — Root causes of climate displacement
   Add/edit entries here. Fields:
     icon    — emoji or symbol
     title   — card heading
     body    — short description
   ============================================================ */
const causes = [
  {
    icon:  '🌊',
    title: 'Sea Level Rise',
    body:  'Coastal flooding and saltwater intrusion are swallowing islands and delta communities. 1 billion people live in low-elevation coastal zones.'
  },
  {
    icon:  '🏜️',
    title: 'Desertification & Drought',
    body:  'Expanding deserts and multi-year droughts are wiping out farmland and freshwater supplies, particularly across the Sahel and Central America.'
  },
  {
    icon:  '🌡️',
    title: 'Extreme Heat',
    body:  'Lethal heat events are making entire regions uninhabitable. By 2050, 3.5 billion people could live outside the "human climate niche".'
  },
  {
    icon:  '🌪️',
    title: 'Intensified Storms',
    body:  'Warmer oceans fuel stronger hurricanes and cyclones, destroying homes and livelihoods — displacing millions overnight.'
  },
  {
    icon:  '🌾',
    title: 'Food & Water Insecurity',
    body:  'Shifting rainfall patterns and crop failures drive hunger, conflict, and migration — often before the land itself becomes uninhabitable.'
  },
  {
    icon:  '🔥',
    title: 'Wildfires',
    body:  'Longer, hotter fire seasons are consuming forests, towns, and agricultural land at a scale unseen in recorded history.'
  }
];

const causeGrid = document.getElementById('cause-grid');
if (causeGrid) {
  causes.forEach(c => {
    const card = document.createElement('div');
    card.className = 'cause-card';
    card.innerHTML = `
      <div class="cause-card__icon" aria-hidden="true">${c.icon}</div>
      <div>
        <h3 class="cause-card__title">${c.title}</h3>
        <p  class="cause-card__body">${c.body}</p>
      </div>`;
    causeGrid.appendChild(card);
  });
}

/* ============================================================
   REGION INFOGRAPHIC — Groundswell-style displaced persons
   Add/edit entries here. Fields:
     region  — region name
     number  — headline figure
     desc    — context sentence
     pct     — fill width for bar (0–100, relative to 86M max)
   ============================================================ */
const regions = [
  {
    region: 'Sub-Saharan Africa',
    number: '86 Million',
    desc:   'The largest projected share of internal climate migrants, driven by drought, crop failure, and sea-level rise.',
    pct:    100
  },
  {
    region: 'South Asia',
    number: '40 Million',
    desc:   'Flooding in Bangladesh, extreme heat in Pakistan, and water stress across India are key drivers.',
    pct:    47
  },
  {
    region: 'Latin America',
    number: '17 Million',
    desc:   'Changing rainfall patterns, glacial retreat, and coastal flooding are displacing communities.',
    pct:    20
  }
];

const regionInfographic = document.getElementById('region-infographic');
if (regionInfographic) {
  regions.forEach(r => {
    const card = document.createElement('div');
    card.className = 'region-card';
    card.innerHTML = `
      <p class="region-card__label">${r.region}</p>
      <p class="region-card__number">${r.number}</p>
      <p class="region-card__desc">${r.desc}</p>
      <div class="region-bar">
        <div class="region-bar__fill" data-pct="${r.pct}" style="width:0%"></div>
      </div>`;
    regionInfographic.appendChild(card);
  });

  /* Animate bars on scroll into view */
  const fills = regionInfographic.querySelectorAll('.region-bar__fill');
  if ('IntersectionObserver' in window) {
    const barObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          fills.forEach(f => {
            f.style.width = f.dataset.pct + '%';
          });
          barObserver.disconnect();
        }
      });
    }, { threshold: 0.3 });
    barObserver.observe(regionInfographic);
  } else {
    fills.forEach(f => { f.style.width = f.dataset.pct + '%'; });
  }
}

/* ============================================================
   BLOG / ARTICLE CARDS
   Add/edit entries here. Fields:
     tag      — category label
     title    — article headline
     excerpt  — short description
     url      — full URL (opens in new tab)
     img      — relative image path, e.g. 'images/post1.jpg'
   ============================================================ */
const blogPosts = [
  {
    tag:     'Overview',
    title:   'The Climate Migration Crisis Explained',
    excerpt: 'How rising seas, megadroughts, and extreme heat are turning millions into climate refugees.',
    url:     'https://www.unhcr.org/emergencies/climate-crisis',
    img:     ''
  },
  {
    tag:     'Data',
    title:   '216 Million Internal Climate Migrants by 2050',
    excerpt: 'World Bank projections map the scale of internal displacement if emissions go unchecked.',
    url:     'https://www.worldbank.org/en/news/press-release/2021/09/13/climate-change-could-force-216-million-people-to-migrate-within-their-own-countries-by-2050',
    img:     ''
  },
  {
    tag:     'Policy',
    title:   'Who Protects Climate Refugees?',
    excerpt: 'The 1951 Refugee Convention predates the climate crisis — leaving a dangerous legal gap for millions.',
    url:     'https://www.unhcr.org/what-we-do/protect/climate-change-and-disaster-displacement',
    img:     ''
  }
];

const blogGrid = document.getElementById('blog-grid');
if (blogGrid) {
  blogPosts.forEach(post => {
    const card = document.createElement('article');
    card.className = 'blog-card';

    const imgHTML = post.img
      ? `<img class="blog-card-img" src="${post.img}" alt="${post.title}" loading="lazy" />`
      : `<div class="blog-card-img" aria-hidden="true"
              style="background: linear-gradient(135deg, var(--c-bg-alt) 0%, var(--c-border) 100%);
                     display:flex; align-items:center; justify-content:center; color:var(--c-text-sec);
                     font-size:2.5rem;">🌍</div>`;

    card.innerHTML = `
      ${imgHTML}
      <div class="blog-card-body">
        <p class="blog-card-tag">${post.tag}</p>
        <h3 class="blog-card-title">${post.title}</h3>
        <p  class="blog-card-excerpt">${post.excerpt}</p>
        <a  class="blog-card-link"
            href="${post.url}"
            target="_blank"
            rel="noopener noreferrer">Read article</a>
      </div>`;

    blogGrid.appendChild(card);
  });
}

/* ============================================================
   RESOURCES LIST
   Add/edit entries here. Fields:
     icon  — emoji
     title — link label
     desc  — one-line description
     url   — full URL (opens in new tab)
   ============================================================ */
const resources = [
  {
    icon:  '🌍',
    title: 'UNHCR — Climate Change & Displacement',
    desc:  'Official UN refugee agency coverage of climate-driven displacement.',
    url:   'https://www.unhcr.org/emergencies/climate-crisis'
  },
  {
    icon:  '📊',
    title: 'World Bank — Groundswell Report',
    desc:  'Data-driven projections of internal climate migration through 2050.',
    url:   'https://www.worldbank.org/en/topic/climate-change/publication/groundswell-report'
  },
  {
    icon:  '📰',
    title: 'The Guardian — Climate Refugees Coverage',
    desc:  'Ongoing journalism on communities displaced by climate change.',
    url:   'https://www.theguardian.com/environment/climate-refugees'
  },
  {
    icon:  '🎓',
    title: 'IOM — Migration, Environment & Climate Change',
    desc:  'Research and policy resources from the International Organization for Migration.',
    url:   'https://www.iom.int/migration-and-climate-change'
  }
];

const resourceList = document.getElementById('resource-list');
if (resourceList) {
  resources.forEach(r => {
    const li = document.createElement('li');
    li.className = 'resource-item';
    li.innerHTML = `
      <a href="${r.url}" target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">${r.icon}</span>
        <span class="resource-text">
          <strong>${r.title}</strong>
          <span>${r.desc}</span>
        </span>
      </a>`;
    resourceList.appendChild(li);
  });
}

/* ============================================================
   ACTIVE NAV HIGHLIGHT ON SCROLL
   ============================================================ */
const sections = document.querySelectorAll('section[id]');
const navItems  = document.querySelectorAll('.nav-links a[href^="#"]');

if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navItems.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
}
