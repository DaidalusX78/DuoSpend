// DuoSpend Service Worker v0.13.21
const CACHE_NAME = 'duospend-cache-v0.13.21';
const LOCAL_ASSETS = [
  './duospend.html',
  './manifest.json',
  './favicon.ico',
  './src/images/duospend_icon.svg',
  './src/images/DuoSpend_Theme_Logo.svg',
  './src/images/favicon-32x32.png',
  './src/images/favicon-16x16.png',
  './src/images/icon-192.png',
  './src/images/icon-512.png'
];
const CDN_ASSETS = [
  'https://cdn.tailwindcss.com',
  'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await Promise.all(
        LOCAL_ASSETS.map(async (url) => {
          try {
            const res = await fetch(url, { cache: 'reload' });
            if (res && res.ok) {
              await cache.put(url, res);
            }
          } catch (err) {
            console.warn('Pre-caching local asset warning:', url, err);
          }
        })
      );
      await Promise.all(
        CDN_ASSETS.map(url =>
          fetch(url, { mode: 'no-cors' })
            .then(res => cache.put(url, res))
            .catch(() => { })
        )
      );
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Only cache GET requests
  if (event.request.method !== 'GET') return;
  // Ignore chrome extensions or non-http/https
  if (!event.request.url.startsWith('http')) return;

  // Network-first for manifest.json so PWA icon/theme metadata updates reliably
  if (event.request.url.includes('manifest.json')) {
    event.respondWith(
      fetch(event.request, { cache: 'no-cache' }).then((networkRes) => {
        if (networkRes && networkRes.ok) {
          const clone = networkRes.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
        }
        return networkRes;
      }).catch(() =>
        caches.match(event.request).then(cached => cached || caches.match(event.request, { ignoreSearch: true }))
      )
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((networkRes) => {
        if (!networkRes || networkRes.status !== 200 || networkRes.type !== 'basic') {
          // Check if cross-origin CDN asset
          if (networkRes && (networkRes.status === 200 || networkRes.type === 'opaque')) {
            const clone = networkRes.clone();
            caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
          }
          return networkRes;
        }
        const clone = networkRes.clone();
        caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
        return networkRes;
      }).catch(() => {
        return caches.match(event.request, { ignoreSearch: true }).then((fallback) => {
          if (fallback) return fallback;
          // Fallback to duospend.html if navigation request fails offline
          if (event.request.mode === 'navigate') {
            return caches.match('./duospend.html');
          }
        });
      });
    })
  );
});
