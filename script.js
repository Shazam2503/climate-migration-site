/* ============================================================
   CLIMATE CHANGE & FORCED MIGRATION — SCRIPT
   ============================================================ */

'use strict';

/* ---------- Mobile Nav Toggle ---------- */
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------- Blog / Article Cards ----------
   Add or edit entries here. Each entry supports:
   - tag      : category label
   - title    : article headline
   - excerpt  : short description
   - url      : full URL (opens in new tab)
   - img      : path to image (JPG/PNG, relative or absolute URL)
   ----------------------------------------- */
const blogPosts = [
  {
    tag: 'Overview',
    title: 'The Climate Migration Crisis Explained',
    excerpt: 'How rising seas, megadroughts, and extreme heat are turning millions into climate refugees.',
    url: 'https://www.unhcr.org/emergencies/climate-crisis',
    img: ''  // Add image path here, e.g. 'images/post1.jpg'
  },
  {
    tag: 'Data',
    title: '216 Million Internal Climate Migrants by 2050',
    excerpt: 'World Bank projections map the scale of internal displacement if emissions go unchecked.',
    url: 'https://www.worldbank.org/en/news/press-release/2021/09/13/climate-change-could-force-216-million-people-to-migrate-within-their-own-countries-by-2050',
    img: ''
  },
  {
    tag: 'Policy',
    title: 'Who Protects Climate Refugees?',
    excerpt: 'The 1951 Refugee Convention predates the climate crisis — leaving a dangerous legal gap.',
    url: 'https://www.unhcr.org/what-we-do/protect/climate-change-and-disaster-displacement',
    img: ''
  }
];

/* ---------- Render Blog Cards ---------- */
const blogGrid = document.getElementById('blog-grid');

if (blogGrid) {
  if (blogPosts.length === 0) {
    blogGrid.innerHTML = '<p class="placeholder-note">Articles will appear here once added.</p>';
  } else {
    blogPosts.forEach(post => {
      const card = document.createElement('article');
      card.className = 'blog-card';

      const imgHTML = post.img
        ? `<img class="blog-card-img" src="${post.img}" alt="${post.title}" loading="lazy" />`
        : `<div class="blog-card-img" aria-hidden="true" style="background:linear-gradient(135deg,#1a3a2a,#0f1f17)"></div>`;

      card.innerHTML = `
        ${imgHTML}
        <div class="blog-card-body">
          <p class="blog-card-tag">${post.tag}</p>
          <h3 class="blog-card-title">${post.title}</h3>
          <p class="blog-card-excerpt">${post.excerpt}</p>
          <a class="blog-card-link"
             href="${post.url}"
             target="_blank"
             rel="noopener noreferrer">Read article</a>
        </div>`;

      blogGrid.appendChild(card);
    });
  }
}

/* ---------- Resources / Links ----------
   Add or edit entries here. Each entry supports:
   - icon  : emoji or symbol
   - title : link label
   - desc  : one-line description
   - url   : full URL (opens in new tab)
   ----------------------------------------- */
const resources = [
  {
    icon: '🌍',
    title: 'UNHCR — Climate Change & Displacement',
    desc: 'Official UN refugee agency coverage of climate-driven displacement.',
    url: 'https://www.unhcr.org/emergencies/climate-crisis'
  },
  {
    icon: '📊',
    title: 'World Bank — Groundswell Report',
    desc: 'Data-driven projections of internal climate migration through 2050.',
    url: 'https://www.worldbank.org/en/topic/climate-change/publication/groundswell-report'
  },
  {
    icon: '📰',
    title: 'The Guardian — Climate Refugees Coverage',
    desc: 'Ongoing journalism on communities displaced by climate change.',
    url: 'https://www.theguardian.com/environment/climate-refugees'
  },
  {
    icon: '🎓',
    title: 'IOM — Migration, Environment & Climate Change',
    desc: 'Research and policy resources from the International Organization for Migration.',
    url: 'https://www.iom.int/migration-and-climate-change'
  }
];

/* ---------- Render Resource Links ---------- */
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

/* ---------- Smooth active-nav highlight on scroll ---------- */
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

const observerOptions = { rootMargin: '-40% 0px -55% 0px' };

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navItems.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, observerOptions);

  sections.forEach(s => observer.observe(s));
}
