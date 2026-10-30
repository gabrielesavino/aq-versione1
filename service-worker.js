const VERSION = '__VERSION__'; // sostituito automaticamente da GitHub Actions con l'ID del commit
const CACHE = 'aprimi-' + VERSION;
const CORE = ['./', 'index.html', 'content.js', 'css/style.css', 'js/app.js', 'manifest.json', 'assets/icons/icon-192.png', 'assets/icons/icon-512.png', 'assets/icons/icon-180.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE))));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(k => Promise.all(k.filter(n => n !== CACHE).map(n => caches.delete(n)))).then(() => clients.claim())));
self.addEventListener('message', e => e.data === 'skip' && self.skipWaiting());
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET' || !r.url.startsWith('http') || r.url.includes('spotify.com')) return;
  const fresh = r.mode === 'navigate' || /content\.js|index\.html|app\.js|style\.css/.test(r.url);
  e.respondWith(fresh
    ? fetch(r).then(res => { const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)); return res; }).catch(() => caches.match(r).then(m => m || caches.match('index.html')))
    : caches.match(r).then(m => m || fetch(r).then(res => { const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)); return res; })));
});
