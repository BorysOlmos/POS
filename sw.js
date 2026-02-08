self.addEventListener('install', event => {
  // Obliga al Service Worker nuevo a tomar el control de inmediato
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  // Borra cualquier cache viejo
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys.map(key => caches.delete(key)));
    })
  );
});

self.addEventListener('fetch', event => {
  // No guarda nada en cache por ahora, para que podamos arreglar la conexión
  return fetch(event.request);
});
