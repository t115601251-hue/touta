/* 骰它 · 离线缓存 Service Worker */
const CACHE = 'shaita-v2';
const SHELL = [
  './', './index.html', './app.css',
  './assets/fonts/cinzel.woff2', './assets/fonts/notoserifsc.woff2',
  './icon-192.png', './icon-512.png', './icon-180.png',
  './assets/skins/coin_front.webp', './assets/skins/coin_back.webp',
  './assets/skins/tube.webp', './assets/skins/stick.webp', './assets/skins/trophy.webp'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => Promise.allSettled(SHELL.map(u => c.add(u)))).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(resp => {
        const copy = resp.clone();
        caches.open(CACHE).then(c => { try { c.put(e.request, copy); } catch (_) {} });
        return resp;
      }).catch(() => cached);
    })
  );
});
