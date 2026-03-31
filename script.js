/* ============================================================
   CLIMATE CHANGE & FORCED MIGRATION — SCRIPT v2
   ============================================================ */

'use strict';

/* ============================================================
   WORD CLOUD
   ============================================================ */

/* Word list — { text, size (1–5), colour ('dark'|'green'|'grey') } */
const cloudWords = [
  /* Size 5 — biggest, most important */
  { text: 'Climate Refugees',    size: 5, colour: 'dark'  },
  { text: 'Forced Migration',    size: 5, colour: 'green' },
  { text: 'Displacement',        size: 5, colour: 'dark'  },
  { text: 'Crisis',              size: 5, colour: 'green' },

  /* Size 4 */
  { text: 'Climate',             size: 4, colour: 'dark'  },
  { text: 'Flooding',            size: 4, colour: 'green' },
  { text: 'Drought',             size: 4, colour: 'dark'  },
  { text: 'Human Rights',        size: 4, colour: 'grey'  },
  { text: 'Vulnerability',       size: 4, colour: 'green' },
  { text: 'Sustainability',      size: 4, colour: 'dark'  },
  { text: 'Refugees',            size: 4, colour: 'grey'  },
  { text: 'Adaptation',          size: 4, colour: 'green' },

  /* Size 3 */
  { text: 'Relocation',          size: 3, colour: 'dark'  },
  { text: 'Environmental Justice',size:3, colour: 'green' },
  { text: 'Human Mobility',      size: 3, colour: 'grey'  },
  { text: 'Rising Seas',         size: 3, colour: 'dark'  },
  { text: 'Migration Flow',      size: 3, colour: 'green' },
  { text: 'Policy',              size: 3, colour: 'dark'  },
  { text: 'Shelter',             size: 3, colour: 'grey'  },
  { text: 'Resettlement',        size: 3, colour: 'green' },

  /* Size 2 */
  { text: 'Coastal Erosion',     size: 2, colour: 'grey'  },
  { text: 'Wildfires',           size: 2, colour: 'dark'  },
  { text: 'Host Country',        size: 2, colour: 'green' },
  { text: 'Border',              size: 2, colour: 'grey'  },
  { text: 'Legal Status',        size: 2, colour: 'dark'  },
  { text: 'Food Security',       size: 2, colour: 'green' },
  { text: 'Resource Stress',     size: 2, colour: 'grey'  },

  /* Size 1 — smallest */
  { text: 'Loss of Habitat',     size: 1, colour: 'grey'  },
  { text: 'Climate Security',    size: 1, colour: 'dark'  },
  { text: 'Migration Patterns',  size: 1, colour: 'green' },
  { text: 'Socioeconomic',       size: 1, colour: 'grey'  },
  { text: 'Community Planning',  size: 1, colour: 'dark'  },
  { text: 'Humanitarian',        size: 1, colour: 'green' },
];

/* Shuffle so layout feels organic, not alphabetical */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const wcCloud   = document.getElementById('wc-cloud');
const wcFog     = document.getElementById('wc-fog');
const wcTrigger = document.getElementById('wc-trigger');

/* Render words */
if (wcCloud) {
  /* Wrap trigger text in a span for styling */
  if (wcTrigger) {
    const label = wcTrigger.childNodes[0];
    if (label && label.nodeType === Node.TEXT_NODE) {
      const span = document.createElement('span');
      span.className = 'wc-trigger-text-inner';
      span.textContent = label.textContent.trim();
      wcTrigger.replaceChild(span, label);
    }
  }

  shuffle(cloudWords).forEach(word => {
    const span = document.createElement('span');
    span.className = `wc-word wc-word--${word.size} wc-word--${word.colour}`;
    span.textContent = word.text;
    wcCloud.appendChild(span);
  });
}

/* Dissolve on click */
if (wcFog && wcCloud) {
  wcFog.addEventListener('click', () => {
    if (wcFog.classList.contains('dissolving')) return;
    wcFog.classList.add('dissolving');
    wcCloud.classList.add('revealed');

    /* Remove fog from DOM after animation finishes */
    wcFog.addEventListener('animationend', () => {
      /* Wait for the slowest layer (1.5s + 0.2s delay = 1.7s) */
    }, { once: true });

    setTimeout(() => {
      wcFog.classList.add('gone');
    }, 1800);
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
