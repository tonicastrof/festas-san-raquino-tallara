/* ── Carousel ── */
let currentSlide = 0;
let slideInterval;
let progressInterval;
const SLIDE_DURATION = 6000;

function renderCarousel() {
  const track = document.getElementById('carouselTrack');
  const dots  = document.getElementById('carouselDots');
  if (!track || !dots) return;

  const slides = DATA.heroBanner;

  track.innerHTML = slides.map((slide, i) => `
    <div class="carousel-slide ${i === 0 ? 'active' : ''}" data-index="${i}">
      ${slide.image
        ? `<div class="carousel-slide-image" style="background-image:url('${slide.image}')"></div>`
        : ''}
      <div class="container carousel-content">
        ${slide.icon ? `<span class="carousel-icon">${slide.icon}</span>` : ''}
        <h2 class="carousel-title">${slide[lang].title}</h2>
        <p class="carousel-subtitle">${slide[lang].subtitle}</p>
        <a href="${slide[lang].ctaLink}" class="btn btn-ouro carousel-cta">${slide[lang].cta}</a>
      </div>
    </div>
  `).join('');

  dots.innerHTML = slides.map((_, i) => `
    <button class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Slide ${i + 1}"></button>
  `).join('');

  dots.querySelectorAll('.carousel-dot').forEach(dot => {
    dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.index)));
  });

  startAutoPlay();
}

function goToSlide(index) {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots   = document.querySelectorAll('.carousel-dot');
  if (!slides.length) return;

  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');

  currentSlide = ((index % slides.length) + slides.length) % slides.length;

  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');

  resetAutoPlay();
}

function startAutoPlay() {
  stopAutoPlay();
  startProgress();
  slideInterval = setInterval(() => {
    goToSlide(currentSlide + 1);
  }, SLIDE_DURATION);
}

function stopAutoPlay() {
  clearInterval(slideInterval);
  clearInterval(progressInterval);
}

function resetAutoPlay() {
  stopAutoPlay();
  if (!carouselPaused) startAutoPlay();
}

function startProgress() {
  const bar = document.getElementById('carouselProgress');
  if (!bar) return;
  let start = Date.now();
  bar.style.width = '0%';
  progressInterval = setInterval(() => {
    const elapsed = Date.now() - start;
    const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
    bar.style.width = pct + '%';
    if (pct >= 100) {
      clearInterval(progressInterval);
      start = Date.now();
    }
  }, 30);
}

let carouselPaused = false;

const prevBtn = document.getElementById('carouselPrev');
const nextBtn = document.getElementById('carouselNext');
const pauseBtn = document.getElementById('carouselPause');
if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
if (pauseBtn) pauseBtn.addEventListener('click', () => {
  carouselPaused = !carouselPaused;
  document.getElementById('pauseIcon').style.display = carouselPaused ? 'none' : 'block';
  document.getElementById('playIcon').style.display = carouselPaused ? 'block' : 'none';
  const bar = document.getElementById('carouselProgress');
  if (carouselPaused) {
    stopAutoPlay();
    if (bar) bar.style.width = '0%';
  } else {
    startAutoPlay();
  }
});

/* ── Novidades ── */
function renderNovidades() {
  const grid = document.getElementById('novidadesGrid');
  if (!grid) return;
  grid.innerHTML = DATA.novidades.map(n => {
    const tag = n.slug ? 'a' : 'article';
    const href = n.slug ? `href="novidade.html#${n.slug}"` : '';
    const imgHtml = n.image
      ? `<div class="novidade-top novidade-top-img" style="background-image:url('${n.image}')"></div>`
      : `<div class="novidade-top">${n.emoji}</div>`;
    return `
    <${tag} ${href} class="novidade-card">
      ${imgHtml}
      <div class="novidade-body">
        <p class="novidade-date">${n[lang].date}</p>
        <h3 class="novidade-title">${n[lang].title}</h3>
        <p class="novidade-text">${n[lang].text}</p>
        ${n.slug ? `<span class="actividade-link">${T[lang].actividades_ver_mais} &rarr;</span>` : ''}
      </div>
    </${tag}>`;
  }).join('');
}

/* ── Actividades ── */
function renderActividades() {
  const grid = document.getElementById('actividadesGrid');
  if (!grid) return;
  grid.innerHTML = DATA.actividades.map(a => `
    <a href="actividade.html#${a.slug}" class="actividade-card">
      <span class="actividade-icon">${a.icon}</span>
      <p class="actividade-season">${a[lang].season}</p>
      <h3 class="actividade-name">${a[lang].name}</h3>
      <p class="actividade-desc">${a[lang].desc}</p>
      <span class="actividade-link">${T[lang].actividades_ver_mais} &rarr;</span>
    </a>
  `).join('');
}

/* ── Programa ── */
let anteriorOpen = false;

const TIPO_CONFIG = {
  gaitas:     { color: '#1a5c2a', bg: '#e8f5ec', icon: '🎶' },
  vermu:      { color: '#92400e', bg: '#fef3c7', icon: '🥂' },
  orquestra:  { color: '#1e3a8a', bg: '#dbeafe', icon: '🎵' },
  relixioso:  { color: '#6b21a8', bg: '#f3e8ff', icon: '⛪' },
  infantil:   { color: '#b45309', bg: '#fef9c3', icon: '🎠' },
  tradicional:{ color: '#065f46', bg: '#d1fae5', icon: '🔥' },
  comida:     { color: '#9a3412', bg: '#ffedd5', icon: '🍽️' },
  deporte:    { color: '#1d4ed8', bg: '#dbeafe', icon: '🎯' },
  familia:    { color: '#7c3aed', bg: '#ede9fe', icon: '👨‍👩‍👧' },
};

function buildDiaCards(dias) {
  return dias.map(d => {
    const isMainDay = d.numero === '28' || d.numero === '1'; // highlight domingo y viernes
    return `
    <div class="dia-card-new ${isMainDay ? 'dia-card-highlight' : ''}">
      <div class="dia-card-head">
        <div class="dia-numero-wrap">
          <span class="dia-numero">${d.numero}</span>
          <div class="dia-meta">
            <span class="dia-nombre-new">${d[lang].dia}</span>
            ${d[lang].santo ? `<span class="dia-santo">${d[lang].santo}</span>` : ''}
          </div>
        </div>
        <span class="dia-fecha-tag">${d['fecha_' + lang]}</span>
      </div>
      <div class="dia-eventos-list">
        ${d.eventos.map(e => {
          const cfg = TIPO_CONFIG[e.tipo] || TIPO_CONFIG.orquestra;
          const tipoLabel = T[lang]['festas_tipo_' + e.tipo] || e.tipo;
          return `
          <div class="evento-new">
            <span class="evento-hora-new">${e.hora}</span>
            <div class="evento-body">
              <span class="evento-tipo-badge" style="background:${cfg.bg};color:${cfg.color}">
                ${cfg.icon} ${tipoLabel}
              </span>
              <p class="evento-nombre-new">${e[lang].nombre}</p>
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>`;
  }).join('');
}

function renderPrograma() {
  const grid  = document.getElementById('programaGrid');
  const tag   = document.getElementById('festasDatesTag');
  const note  = document.getElementById('festasNote');
  if (!grid) return;

  if (!DATA.festas_confirmed) {
    if (tag)  tag.textContent  = T[lang].festas_dates_pending;
    if (note) note.textContent = T[lang].festas_note_pending;

    const anteriorHtml = DATA.programa_anterior && DATA.programa_anterior.length
      ? `<div class="programa-anterior-wrap">
           <div class="programa-anterior-header">
             <span class="programa-anterior-badge">${T[lang].festas_anterior_label} · ${DATA.programa_anterior_year}</span>
             <button class="programa-anterior-toggle" id="toggleAnterior" aria-expanded="${anteriorOpen}">
               <span class="toggle-label">${anteriorOpen ? T[lang].festas_anterior_ocultar : T[lang].festas_anterior_mostrar}</span>
               <span class="toggle-arrow">&#9660;</span>
             </button>
           </div>
           <div class="programa-anterior-content${anteriorOpen ? ' is-open' : ''}" id="anteriorContent">
             <div class="programa-grid-new">${buildDiaCards(DATA.programa_anterior)}</div>
           </div>
         </div>`
      : '';

    grid.innerHTML = `
      <div class="programa-pending-banner">
        <span class="programa-pending-icon">🎉</span>
        <div>
          <p class="programa-pending-title">${lang === 'gl'
            ? 'O programa de ' + DATA.festas_year + ' estará dispoñible en breve'
            : 'El programa de ' + DATA.festas_year + ' estará disponible pronto'}</p>
          <p class="programa-pending-sub">${T[lang].festas_note_pending}</p>
        </div>
      </div>
      ${anteriorHtml}`;

    const toggleBtn = document.getElementById('toggleAnterior');
    const anteriorContent = document.getElementById('anteriorContent');
    if (toggleBtn && anteriorContent) {
      toggleBtn.addEventListener('click', () => {
        anteriorOpen = !anteriorOpen;
        anteriorContent.classList.toggle('is-open', anteriorOpen);
        toggleBtn.setAttribute('aria-expanded', String(anteriorOpen));
        toggleBtn.querySelector('.toggle-label').textContent = anteriorOpen
          ? T[lang].festas_anterior_ocultar
          : T[lang].festas_anterior_mostrar;
      });
    }
    return;
  }

  const year = DATA.festas_year;
  const datesLabel = lang === 'gl'
    ? `27 set. – 2 out. ${year}`
    : `27 sep. – 2 oct. ${year}`;
  if (tag)  tag.textContent  = datesLabel;
  if (note) note.textContent = '';

  grid.innerHTML = `<div class="programa-grid-new">${buildDiaCards(DATA.programa)}</div>`;
}

/* ── Patrocinadores ── */
function renderPatrocinadores() {
  const grid = document.getElementById('sponsorsGrid');
  if (!grid) return;
  grid.innerHTML = DATA.patrocinadores.map(s => `
    <a href="${s.url}" class="sponsor-card" target="_blank" rel="noopener noreferrer">
      ${s.logo_img
        ? `<img src="${s.logo_img}" alt="${s.name}" style="max-width:100px;max-height:50px;object-fit:contain;">`
        : `<div class="sponsor-logo-placeholder">Logo</div>`
      }
      <span class="sponsor-name">${s.name}</span>
    </a>
  `).join('');
}

/* ── Social links ── */
function renderSocial() {
  const el = document.getElementById('socialLinks');
  if (!el) return;
  el.innerHTML = DATA.social.map(s => `
    <a href="${s.url}" class="social-link" aria-label="${s.ariaLabel}" target="_blank" rel="noopener noreferrer">
      ${s.label}
    </a>
  `).join('');
}

/* ── Footer ── */
function renderFooter() {
  const copy = document.getElementById('footerCopy');
  if (!copy) return;
  copy.textContent = `© ${new Date().getFullYear()} Comisión de Festas de San Roquiño de Tállara`;

  let tid = null;
  const start = () => { tid = setTimeout(() => window.location.href = 'admin.html', 3000); };
  const cancel = () => clearTimeout(tid);
  copy.addEventListener('mousedown', start);
  copy.addEventListener('mouseup', cancel);
  copy.addEventListener('mouseleave', cancel);
  copy.addEventListener('touchstart', start, { passive: true });
  copy.addEventListener('touchend', cancel);
  copy.addEventListener('touchcancel', cancel);
  copy.style.userSelect = 'none';
  copy.style.webkitUserSelect = 'none';
}

/* ── Map ── */
function initMap() {
  const mapEl = document.getElementById('map');
  if (!mapEl || typeof L === 'undefined') return;

  const loc = DATA.location;
  const map = L.map('map', { scrollWheelZoom: false }).setView([loc.lat, loc.lng], loc.zoom);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19,
  }).addTo(map);

  L.marker([loc.lat, loc.lng]).addTo(map)
    .bindPopup(loc[lang].popup)
    .openPopup();
}

/* ── Scroll reveal ── */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}

/* ── Navbar scroll effect ── */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

/* ── Render all ── */
function renderAll() {
  renderCarousel();
  renderNovidades();
  renderActividades();
  renderPrograma();
  renderPatrocinadores();
  renderSocial();
  renderFooter();
}

/* ── Mobile nav ── */
const burger   = document.getElementById('navBurger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  burger.classList.toggle('open', isOpen);
  burger.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

/* ── Render social links en sección contacto ── */
function renderContactoSocial() {
  const target = document.getElementById('contactoSocialLinks');
  if (!target) return;
  target.innerHTML = DATA.social.map(s => `
    <a href="${s.url}" class="social-link contacto-social-link" aria-label="${s.ariaLabel}"
       target="_blank" rel="noopener noreferrer">${s.label}</a>
  `).join('');
}

/* ── Init ── */
renderAll();
renderContactoSocial();
applyLang();
initMap();
initReveal();
initNavbarScroll();
if (typeof initContactoForm === 'function') initContactoForm();
