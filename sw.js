const CACHE_NAME = 'panpos-v2';
const ASSETS = [
  './',
  './index.html',
  './app.js',
  './estilos.css',
  './manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  // SI LA PETICIÓN ES PARA GOOGLE, NO USAR CACHE
  if (e.request.url.includes('script.google.com')) {
    return fetch(e.request);
  }
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
