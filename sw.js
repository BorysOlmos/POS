const CACHE_NAME = 'panpos-v1';
const ASSETS = ['./', './index.html', './app.js', './estilos.css', './manifest.json', 'https://unpkg.com/dexie/dist/dexie.js'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
