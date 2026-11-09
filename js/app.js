/* Aprimi quando... : router, login, lettere, ricordi, musica, sorprese */
const C = CONTENT, $ = s => document.querySelector(s), view = $('#view'), nav = $('#nav');
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const HEART = '<svg class="heart" viewBox="0 0 24 24"><path d="M12 21s-8-5.3-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.7-8 11-8 11z"/></svg>';
const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem('aq_' + k)) ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem('aq_' + k, JSON.stringify(v)); } catch {} }
};
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
let unlocked = false, timer = null;

const ICONS = {
  home: '<path d="M3 11l9-8 9 8M5 10v10h14V10"/>',
  letters: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  memories: '<rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M8 17h8"/>',
  music: '<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',
  surprises: '<path d="M12 3l2.7 5.8 6.3.7-4.7 4.3 1.3 6.2L12 17l-5.6 3 1.3-6.2L3 9.5l6.3-.7z"/>',
  foryou: '<path d="M12 21s-8-5.3-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.7-8 11-8 11z"/>'
};
const TABS = [['home', 'Home'], ['letters', 'Letters'], ['memories', 'Memories'], ['music', 'Music'], ['surprises', 'Surprises'], ['foryou', 'For You']];
nav.innerHTML = TABS.map(([k, n]) => `<a href="#/${k}" data-k="${k}"><svg viewBox="0 0 24 24">${ICONS[k]}</svg>${n}</a>`).join('');

/* stelline di sfondo */
const sky = $('#stars');
for (let i = 0; i < 22; i++) { const s = document.createElement('i'); s.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;animation-delay:${Math.random() * 3}s`; sky.appendChild(s); }

const img = (src, alt = '') => src ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" onerror="this.outerHTML='<div class=ph>♥</div>'">` : '<div class="ph">♥</div>';
const paper = (titolo, testo) => {
  const ps = String(testo).trim().split(/\n\s*\n/);
  return `<div class="paper"><h2>${esc(titolo)}</h2>${ps.map((p, i) => `<p class="${i === ps.length - 1 && ps.length > 1 && p.length < 40 ? 'sign' : ''}" style="animation-delay:${.3 + i * .15}s">${esc(p).replace(/\n/g, '<br>')}</p>`).join('')}</div>`;
};
const back = (to, label) => `<a class="back" href="#/${to}">← ${label}</a>`;
const open = (el, go) => { if (reduce) return go(); el.classList.add('open'); setTimeout(go, 1100); };

/* ---------- login ---------- */
function login() {
  nav.hidden = true;
  view.innerHTML = `<section class="screen center"><div class="bigheart">${HEART}</div><h1 class="title">Aprimi quando...</h1>
  <p class="lead">${esc(C.hint)}</p>
  <input id="pw" type="text" placeholder="scrivi qui..." autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false"
    style="width:260px;max-width:80%;padding:12px 16px;font:20px Georgia,serif;color:#432A35;background:#FFFDFC;border:2px solid #432A35;border-radius:14px;text-align:center;outline:none;position:relative;z-index:5">
  <div class="err" id="err"></div><button class="btn" id="go">Apri</button></section>`;
  const input = $('#pw');
  const norm = t => String(t).normalize('NFKD').replace(/[^a-z0-9]/gi, '').toLowerCase();
  const enter = () => { unlocked = true; if (!location.hash || location.hash === '#/') location.hash = '#/home'; else route(); };
  const check = () => {
    if (norm(input.value) === norm(C.password)) return enter();
    $('#err').textContent = 'Non è questa... riprova ♥';
    input.classList.remove('shake'); void input.offsetWidth; input.classList.add('shake');
  };
  input.oninput = () => { if (norm(input.value) === norm(C.password)) enter(); };   // entra da solo appena è giusta
  input.onkeydown = e => { if (e.key === 'Enter') check(); };
  $('#go').onclick = check;
  setTimeout(() => input.focus(), 100);
}

/* ---------- schermate ---------- */
const R = {
  home() {
    view.innerHTML = `<section class="screen center"><div class="bigheart">${HEART}</div><h1 class="title">${esc(C.names)}</h1>
    <p class="lead">un piccolo posto tutto nostro</p><a class="btn" href="#/letters">Entra nel nostro mondo</a></section>`;
  },
  letters(id) {
    if (id) {
      const l = C.letters.find(x => x.id === id);
      view.innerHTML = `<section class="screen">${back('letters', 'Torna alle buste')}${l ? paper(l.titolo, l.testo) : '<p class="sub">Questa lettera non c\'è ancora.</p>'}</section>`;
      if (l) { const r = store.get('read', []); if (!r.includes(id)) store.set('read', [...r, id]); }
      return;
    }
    const read = store.get('read', []);
    view.innerHTML = `<section class="screen"><h2>Open when</h2><p class="sub">scegli la busta giusta per questo momento</p><div class="grid">${C.letters.map(l =>
      `<div class="env ${read.includes(l.id) ? 'read' : ''}" data-id="${esc(l.id)}" tabindex="0" role="button"><div class="body"><div class="letterpeek"></div><div class="flap"></div><div class="seal">${HEART}</div></div>
      <div class="lbl">${esc(l.titolo.replace(/^Aprimi /, ''))}</div>${read.includes(l.id) ? '<div class="done">già aperta</div>' : ''}</div>`).join('')}</div></section>`;
    view.querySelectorAll('.env').forEach(e => { const go = () => open(e, () => location.hash = '#/letters/' + e.dataset.id); e.onclick = go; e.onkeydown = ev => ev.key === 'Enter' && go(); });
  },
  memories(id) {
    if (id) {
      const m = C.memories.find(x => x.id === id);
      view.innerHTML = `<section class="screen">${back('memories', 'Tutti i ricordi')}${m ? `<div class="pola big" style="transform:none">${img(m.foto, m.titolo)}<div class="d">${esc(m.data)}</div><div class="t" style="font-size:1.6rem;margin:6px 0">${esc(m.titolo)}</div><p style="font-family:var(--hand);font-size:1.3rem;line-height:1.5">${esc(m.testo)}</p></div>` : '<p class="sub">Ricordo non trovato.</p>'}</section>`;
      return;
    }
    view.innerHTML = `<section class="screen"><h2>Our memories</h2><p class="sub">il nostro album</p><div class="polas">${C.memories.map(m =>
      `<a class="pola" href="#/memories/${esc(m.id)}">${img(m.foto, m.titolo)}<div class="d">${esc(m.data)}</div><div class="t">${esc(m.titolo)}</div></a>`).join('')}</div></section>`;
  },
  music() {
    const emb = C.playlistId ? `<iframe src="https://open.spotify.com/embed/playlist/${esc(C.playlistId)}?theme=0" height="352" allow="encrypted-media" loading="lazy"></iframe>` : '';
    view.innerHTML = `<section class="screen"><h2>Our soundtrack</h2><p class="sub">le canzoni che ci raccontano</p>${emb}${C.songs.map(s =>
      `<div class="song">${img(s.copertina, s.titolo)}<div><b>${esc(s.titolo)}</b><small>${esc(s.artista)}</small><p>${esc(s.motivo)}</p>${s.link ? `<a href="${esc(s.link)}" target="_blank" rel="noopener">Ascolta su Spotify ↗</a>` : ''}</div></div>`).join('')}</section>`;
  },
  surprises() {
    view.innerHTML = `<section class="screen"><h2>Little surprises</h2><p class="sub">giocaci un po'</p>
    <div class="card"><h3>Gratta qui</h3><div class="scratch"><span>${esc(C.scratch)}</span><canvas id="sc"></canvas></div></div>
    <div class="card"><h3>${esc(C.countdown.label)}</h3><div class="cd" id="cd"></div></div>
    <div class="card"><h3>Quanto mi conosci?</h3><div id="quiz"></div></div>
    <div class="card"><h3>Un pensiero per te</h3><div class="msg" id="msg">Premi il bottone</div><button class="btn ghost" id="rnd">Sorprendimi</button></div>
    <div class="card"><h3>Stelline nascoste <span id="cnt"></span></h3><div class="sky" id="sky"></div></div></section>`;
    scratch(); countdown(); quiz(); random(); hidden();
  },
  foryou(id) {
    const f = C.final;
    if (id === 'read') { view.innerHTML = `<section class="screen">${back('foryou', 'Indietro')}${paper(f.titolo, f.testo)}</section>`; return; }
    view.innerHTML = `<section class="screen final"><h2>Just for you</h2>${f.testo.trim() ? `<p class="sub">la cosa più importante</p>
      <div class="env" id="fe" tabindex="0" role="button"><div class="body"><div class="letterpeek"></div><div class="flap"></div><div class="seal">${HEART}</div></div><div class="lbl">Aprimi</div></div>`
      : `<p class="sub">Sto ancora scrivendo... torna presto ${HEART}</p><div class="bigheart" style="text-align:center">${HEART}</div>`}</section>`;
    const e = $('#fe'); if (e) e.onclick = () => open(e, () => location.hash = '#/foryou/read');
  }
};

/* ---------- sorprese ---------- */
function scratch() {
  const c = $('#sc'), box = c.parentNode, r = box.getBoundingClientRect(), dpr = devicePixelRatio || 1;
  c.width = r.width * dpr; c.height = r.height * dpr;
  const x = c.getContext('2d'); x.scale(dpr, dpr);
  const g = x.createLinearGradient(0, 0, r.width, r.height); g.addColorStop(0, '#B66C7D'); g.addColorStop(1, '#432A35');
  x.fillStyle = g; x.fillRect(0, 0, r.width, r.height);
  x.fillStyle = '#F8F0E9'; x.font = 'italic 18px Playfair Display, serif'; x.textAlign = 'center'; x.fillText('gratta con il dito ♥', r.width / 2, r.height / 2 + 6);
  x.globalCompositeOperation = 'destination-out'; let down = false, n = 0;
  const pt = e => { const b = c.getBoundingClientRect(); return [e.clientX - b.left, e.clientY - b.top]; };
  const dig = e => { if (!down) return; const [px, py] = pt(e); x.beginPath(); x.arc(px, py, 20, 0, 7); x.fill();
    if (++n % 8 === 0) { const d = x.getImageData(0, 0, c.width, c.height).data; let t = 0; for (let i = 3; i < d.length; i += 160) if (!d[i]) t++; if (t > d.length / 160 * .5) c.style.opacity = 0; } };
  c.onpointerdown = e => { down = true; c.setPointerCapture(e.pointerId); dig(e); }; c.onpointermove = dig; c.onpointerup = () => down = false;
}
function countdown() {
  const el = $('#cd'), t = new Date(C.countdown.date).getTime();
  const tick = () => { let d = Math.max(0, t - Date.now()); const v = [Math.floor(d / 864e5), Math.floor(d / 36e5) % 24, Math.floor(d / 6e4) % 60, Math.floor(d / 1e3) % 60];
    el.innerHTML = ['giorni', 'ore', 'min', 'sec'].map((l, i) => `<div><b>${v[i]}</b><small>${l}</small></div>`).join(''); };
  tick(); timer = setInterval(tick, 1000);
}
function quiz() {
  const box = $('#quiz'); let i = 0, score = 0;
  const show = () => {
    if (i >= C.quiz.length) { box.innerHTML = `<div class="msg">${score}/${C.quiz.length} ${score === C.quiz.length ? '— mi conosci benissimo ♥' : '— rifacciamolo insieme ♥'}</div><button class="btn ghost" id="again">Ricomincia</button>`; $('#again').onclick = () => { i = score = 0; show(); }; return; }
    const q = C.quiz[i]; box.innerHTML = `<p>${esc(q.q)}</p>` + q.options.map((o, k) => `<button class="opt" data-k="${k}">${esc(o)}</button>`).join('');
    box.querySelectorAll('.opt').forEach(b => b.onclick = () => { const k = +b.dataset.k; if (k === q.answer) score++;
      box.querySelectorAll('.opt').forEach((o, j) => { o.disabled = true; if (j === q.answer) o.classList.add('ok'); else if (j === k) o.classList.add('no'); }); setTimeout(() => { i++; show(); }, 900); });
  };
  show();
}
function random() {
  let last = -1; $('#rnd').onclick = () => { let k; do k = Math.floor(Math.random() * C.messages.length); while (k === last && C.messages.length > 1); last = k; $('#msg').textContent = C.messages[k]; };
}
function hidden() {
  const s = $('#sky'), found = store.get('found', []), cnt = $('#cnt');
  const upd = () => cnt.textContent = `(${found.length}/${C.hidden.length})`; upd();
  C.hidden.forEach((m, i) => { const b = document.createElement('button'); b.textContent = i % 2 ? '♥' : '★'; b.setAttribute('aria-label', 'sorpresa nascosta');
    b.style.cssText = `left:${8 + (i * 83 / C.hidden.length) + Math.random() * 6}%;top:${10 + Math.random() * 65}%;animation-delay:${i * .4}s`; if (found.includes(i)) b.classList.add('f');
    b.onclick = () => { if (!found.includes(i)) { found.push(i); store.set('found', found); b.classList.add('f'); upd(); } toast(m); }; s.appendChild(b); });
}
function toast(m) { const t = $('#toast'); t.textContent = m; t.hidden = false; clearTimeout(toast.t); toast.t = setTimeout(() => t.hidden = true, 3500); }

/* ---------- router ---------- */
function route() {
  clearInterval(timer);
  if (!unlocked) return login();
  const [p, id] = location.hash.replace(/^#\/?/, '').split('/');
  (R[p] || R.home)(id);
  nav.hidden = false; scrollTo(0, 0);
  nav.querySelectorAll('a').forEach(a => a.classList.toggle('on', a.dataset.k === (R[p] ? p : 'home')));
}
addEventListener('hashchange', route);
route();

/* ---------- PWA ---------- */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').then(reg => {
    const ask = w => { const t = $('#toast'); t.textContent = 'C\'è qualcosa di nuovo ♥ Tocca per aggiornare'; t.hidden = false; t.onclick = () => w.postMessage('skip'); };
    if (reg.waiting && navigator.serviceWorker.controller) ask(reg.waiting);
    reg.addEventListener('updatefound', () => { const w = reg.installing; w.addEventListener('statechange', () => w.state === 'installed' && navigator.serviceWorker.controller && ask(w)); });
  }).catch(() => {});
  navigator.serviceWorker.addEventListener('controllerchange', () => location.reload());
}