const SUPABASE_URL      = 'https://zeromwbdhtchfppulqcu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inplcm9td2JkaHRjaGZwcHVscWN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1ODk3MDMsImV4cCI6MjA5NjE2NTcwM30.sWyJGJac_MMT8uqTGJ0SxYwS7BYr67lD47hd5wQKH5M';

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/* Cache para non volver facer fetch do mesmo evento */
const _eventoCache = {};
async function getEvento(slug) {
  if (_eventoCache[slug] !== undefined) return _eventoCache[slug];
  const { data, error } = await sb
    .from('eventos')
    .select('id, inscricions_open, plazas_max')
    .eq('slug', slug)
    .single();
  _eventoCache[slug] = error ? null : data;
  return _eventoCache[slug];
}

async function submitInscripcion(inscripcion) {
  return await sb.from('inscripciones').insert([inscripcion]);
}

/* ── Formulario ── */
function buildInscripcionFormHtml(isGl) {
  return `
    <form id="inscripcionForm" class="inscripcion-form" novalidate>
      <div class="form-row">
        <div class="form-group">
          <label for="f-nome">${isGl ? 'Nome' : 'Nombre'} *</label>
          <input type="text" id="f-nome" required
            placeholder="${isGl ? 'O teu nome' : 'Tu nombre'}">
        </div>
        <div class="form-group">
          <label for="f-email">Email</label>
          <input type="email" id="f-email"
            placeholder="correo@exemplo.com">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="f-telefono">Teléfono *</label>
          <input type="tel" id="f-telefono" required placeholder="600 000 000">
        </div>
        <div class="form-group form-group-sm">
          <label for="f-personas">${isGl ? 'Nº de persoas' : 'Nº de personas'} *</label>
          <input type="number" id="f-personas" min="1" max="50" value="1" required>
        </div>
      </div>
      <div id="form-msg" class="form-message" aria-live="polite"></div>
      <button type="submit" class="btn btn-ouro form-submit-btn">
        ${isGl ? 'Enviar inscrición' : 'Enviar inscripción'}
      </button>
    </form>`;
}

function buildAlreadyRegisteredHtml(isGl) {
  return `
    <div class="form-already-registered">
      <span class="form-already-icon">✓</span>
      <div>
        <p class="form-already-title">${isGl ? 'Xa estás apuntado/a!' : '¡Ya estás apuntado/a!'}</p>
        <p class="form-already-sub">${isGl
          ? 'Rexistramos a túa inscrición. A comisión porase en contacto contigo para os detalles do ticket.'
          : 'Registramos tu inscripción. La comisión se pondrá en contacto contigo para los detalles del ticket.'
        }</p>
      </div>
    </div>`;
}

function initInscripcionForm(eventoId, slug, isGl) {
  const form = document.getElementById('inscripcionForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit-btn');
    const msg = document.getElementById('form-msg');

    const nome     = document.getElementById('f-nome').value.trim();
    const telefono = document.getElementById('f-telefono').value.trim();

    if (!nome || !telefono) {
      msg.className   = 'form-message form-error';
      msg.textContent = isGl
        ? 'Por favor, enche os campos obrigatorios.'
        : 'Por favor, rellena los campos obligatorios.';
      return;
    }

    btn.disabled    = true;
    btn.textContent = isGl ? 'Enviando...' : 'Enviando...';
    msg.className   = 'form-message';
    msg.textContent = '';

    const { error } = await submitInscripcion({
      evento_id:    eventoId,
      nome,
      telefono,
      email:        document.getElementById('f-email').value.trim() || null,
      num_personas: parseInt(document.getElementById('f-personas').value) || 1,
    });

    if (error) {
      msg.className   = 'form-message form-error';
      msg.textContent = isGl
        ? 'Houbo un erro. Por favor, inténtao de novo.'
        : 'Hubo un error. Por favor, inténtalo de nuevo.';
      btn.disabled    = false;
      btn.textContent = isGl ? 'Enviar inscrición' : 'Enviar inscripción';
    } else {
      localStorage.setItem(`sr-inscrito-${slug}`, '1');
      form.outerHTML = buildAlreadyRegisteredHtml(isGl);
    }
  });
}

/* ── Formulario de contacto ── */
async function submitContacto(data) {
  return await sb.from('contacto_mensaxes').insert([data]);
}

function initContactoForm() {
  const form = document.getElementById('contactoForm');
  if (!form) return;

  /* Duplicar social links en el panel de contacto si existe el contenedor */
  const socialTarget = document.getElementById('contactoSocialLinks');
  const socialSource = document.getElementById('socialLinks');
  if (socialTarget && socialSource) {
    socialTarget.innerHTML = socialSource.innerHTML;
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn  = document.getElementById('c-btn');
    const msg  = document.getElementById('c-msg');
    const isGl = typeof lang !== 'undefined' ? lang === 'gl' : true;

    const nome    = document.getElementById('c-nome').value.trim();
    const email   = document.getElementById('c-email').value.trim();
    const mensaxe = document.getElementById('c-mensaxe').value.trim();

    if (!nome || !email || !mensaxe) {
      msg.className   = 'form-message form-error';
      msg.textContent = isGl
        ? 'Por favor, enche os campos obrigatorios.'
        : 'Por favor, rellena los campos obligatorios.';
      return;
    }

    btn.disabled    = true;
    btn.textContent = isGl ? 'Enviando…' : 'Enviando…';
    msg.className   = 'form-message';
    msg.textContent = '';

    const { error } = await submitContacto({
      nome,
      email,
      telefono: document.getElementById('c-telefono').value.trim() || null,
      mensaxe,
    });

    if (error) {
      msg.className   = 'form-message form-error';
      msg.textContent = T[isGl ? 'gl' : 'es'].contacto_error;
      btn.disabled    = false;
      btn.textContent = T[isGl ? 'gl' : 'es'].contacto_submit;
    } else {
      form.innerHTML = `
        <div class="form-success contacto-success">
          <span class="form-success-icon">✓</span>
          <p>${T[isGl ? 'gl' : 'es'].contacto_success}</p>
        </div>`;
    }
  });
}

/* ── Punto de entrada principal ── */
async function checkAndRenderInscripcion(slug, lang) {
  const isGl      = lang === 'gl';
  const container = document.getElementById('inscripcion-online');
  if (!container) return;

  /* Si ya se registró en este dispositivo, mostrar confirmación directamente */
  if (localStorage.getItem(`sr-inscrito-${slug}`)) {
    container.innerHTML = `
      <div class="nd-block nd-block-dark">
        <div class="nd-block-header">
          <span class="nd-block-icon">📋</span>
          <h3 class="nd-block-title">${isGl ? 'Inscrición online' : 'Inscripción online'}</h3>
        </div>
        ${buildAlreadyRegisteredHtml(isGl)}
      </div>`;
    return;
  }

  const evento = await getEvento(slug);
  if (!evento || !evento.inscricions_open) return;

  /* Ocultar bloque de teléfonos si coexiste */
  const phoneBlock = document.getElementById('inscripcion-phones');
  if (phoneBlock) phoneBlock.style.display = 'none';

  container.innerHTML = `
    <div class="nd-block nd-block-dark">
      <div class="nd-block-header">
        <span class="nd-block-icon">📋</span>
        <h3 class="nd-block-title">${isGl ? 'Inscrición online' : 'Inscripción online'}</h3>
      </div>
      <p class="inscripcion-aviso">${isGl
        ? 'Anótate aquí e a comisión porase en contacto contigo para facilitarche o ticket.'
        : 'Apúntate aquí y la comisión se pondrá en contacto contigo para facilitarte el ticket.'
      }</p>
      ${buildInscripcionFormHtml(isGl)}
    </div>`;

  initInscripcionForm(evento.id, slug, isGl);
}
