self.addEventListener('install', (event) => {
    console.log('service Worker Install');
    // event.waitUntil(
    //     caches.open(CACHE)
    //     .then((cache) => cache.add(offlineFallbackPage))
    // );
});

self.addEventListener('activate', (event) => {
    console.log('service Worker activate');
    // event.waitUntil(
    //     caches.open(CACHE)
    //     .then((cache) => cache.add(offlineFallbackPage))
    // );
});

self.addEventListener('fetch', (event) => {
    console.log('service Worker fetch event ', event);

    // if (event.request.mode === 'navigate') {
    //   event.respondWith((async () => {
    //     try {
    //       const preloadResp = await event.preloadResponse;
  
    //       if (preloadResp) {
    //         return preloadResp;
    //       }
  
    //       const networkResp = await fetch(event.request);
    //       return networkResp;
    //     } catch (error) {
  
    //       const cache = await caches.open(CACHE);
    //       const cachedResp = await cache.match(offlineFallbackPage);
    //       return cachedResp;
    //     }
    //   })());
    // }
});

